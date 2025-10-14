"use client"

import { Fragment, useCallback, useEffect, useRef, useState } from "react"
import { Copy } from "lucide-react"
import { Streamdown } from "streamdown"

import { cn } from "@/lib/utils"
import {
  transcribeAudio,
  type TranscriptionResult,
} from "@/registry/elevenlabs-ui/blocks/transcriber-01/actions/transcribe"
import { Button } from "@/registry/elevenlabs-ui/ui/button"
import { Card } from "@/registry/elevenlabs-ui/ui/card"
import { LiveWaveform } from "@/registry/elevenlabs-ui/ui/live-waveform"
import { ScrollArea } from "@/registry/elevenlabs-ui/ui/scroll-area"
import { Separator } from "@/registry/elevenlabs-ui/ui/separator"

interface RecordingState {
  isRecording: boolean
  isProcessing: boolean
  transcript: string
  error: string
  transcriptionTime?: number
}

export default function Transcriber01() {
  const [recording, setRecording] = useState<RecordingState>({
    isRecording: false,
    isProcessing: false,
    transcript: "",
    error: "",
  })

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const streamRef = useRef<MediaStream | null>(null)

  const updateRecording = useCallback((updates: Partial<RecordingState>) => {
    setRecording((prev) => ({ ...prev, ...updates }))
  }, [])

  const cleanupStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
  }, [])

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current?.state !== "inactive") {
      mediaRecorderRef.current?.stop()
    }
    cleanupStream()
    updateRecording({ isRecording: false })
  }, [cleanupStream, updateRecording])

  const processAudio = useCallback(
    async (audioBlob: Blob) => {
      updateRecording({ isProcessing: true, error: "" })

      try {
        const result: TranscriptionResult = await transcribeAudio({
          audio: new File([audioBlob], "recording.webm", {
            type: "audio/webm",
          }),
        })

        if (result.error) {
          throw new Error(result.error)
        }

        updateRecording({
          transcript: result.text || "",
          transcriptionTime: result.transcriptionTime,
          isProcessing: false,
        })
      } catch (err) {
        console.error("Transcription error:", err)
        updateRecording({
          error:
            err instanceof Error ? err.message : "Failed to transcribe audio",
          isProcessing: false,
        })
      }
    },
    [updateRecording]
  )

  const startRecording = useCallback(async () => {
    try {
      updateRecording({
        transcript: "",
        error: "",
        transcriptionTime: undefined,
      })
      audioChunksRef.current = []

      const stream =
        await navigator.mediaDevices.getUserMedia(AUDIO_CONSTRAINTS)
      streamRef.current = stream

      const mimeType = getMimeType()
      const mediaRecorder = new MediaRecorder(stream, { mimeType })
      mediaRecorderRef.current = mediaRecorder

      mediaRecorder.ondataavailable = (event: BlobEvent) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType })
        processAudio(audioBlob)
      }

      mediaRecorder.start()
      updateRecording({ isRecording: true })
    } catch (err) {
      updateRecording({
        error: "Microphone permission denied",
        isRecording: false,
      })
      console.error("Microphone error:", err)
    }
  }, [processAudio, updateRecording])

  const handleRecordToggle = useCallback(() => {
    if (recording.isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }, [recording.isRecording, startRecording, stopRecording])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.code === "Space") {
        e.preventDefault()
        handleRecordToggle()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleRecordToggle])

  useEffect(() => {
    return cleanupStream
  }, [cleanupStream])

  return (
    <div className="mx-auto w-full">
      <Card className="border-border relative m-0 gap-0 overflow-hidden p-0 shadow-2xl">
        <div className="relative py-6">
          <div className="flex h-32 items-center justify-center">
            {recording.isProcessing && <TranscriberProcessing />}
            {(Boolean(recording.transcript) || Boolean(recording.error)) && (
              <TranscriberTranscript
                transcript={recording.transcript}
                error={recording.error}
              />
            )}

            {!recording.isProcessing &&
              !Boolean(recording.transcript) &&
              !Boolean(recording.error) && (
                <LiveWaveform
                  active={recording.isRecording}
                  barWidth={5}
                  barGap={2}
                  barRadius={8}
                  barColor="#71717a"
                  fadeEdges
                  fadeWidth={48}
                  sensitivity={0.8}
                  smoothingTimeConstant={0.85}
                  className="w-full"
                />
              )}
          </div>
        </div>

        <Separator />

        <div className="bg-card px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "text-muted-foreground/60 font-mono text-[10px] tracking-widest uppercase",
                  (recording.transcriptionTime &&
                    Boolean(recording.transcript)) ||
                    Boolean(recording.error)
                    ? "animate-in fade-in duration-500"
                    : "opacity-0"
                )}
              >
                {recording.error
                  ? "Error"
                  : recording.transcriptionTime
                    ? `${(recording.transcriptionTime / 1000).toFixed(2)}s`
                    : "0.00s"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={handleRecordToggle}
                disabled={recording.isProcessing}
                aria-label={
                  recording.isRecording ? "Stop recording" : "Start recording"
                }
              >
                {recording.isRecording || recording.isProcessing
                  ? "Stop"
                  : "Record"}
                <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium select-none">
                  <span className="text-xs">⌥</span>Space
                </kbd>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

const TranscriberProcessing = () => {
  return (
    <LiveWaveform
      active={false}
      processing
      barWidth={4}
      barGap={1}
      barRadius={8}
      barColor="#71717a"
      fadeEdges
      fadeWidth={48}
      className="w-full opacity-60"
    />
  )
}

const TranscriberTranscript = ({
  transcript,
  error,
}: {
  transcript: string
  error: string
}) => {
  const displayText = error || transcript
  return (
    <Fragment>
      <div className="relative w-full max-w-2xl px-6">
        <ScrollArea className="h-32 w-full">
          <div
            className={cn(
              "text-foreground py-1 pr-8 text-left text-sm leading-relaxed",
              error && "text-red-500"
            )}
          >
            <Streamdown>{displayText}</Streamdown>
          </div>
        </ScrollArea>
        {transcript && !error && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1 right-2 h-6 w-6 opacity-50 transition-opacity hover:opacity-100"
            onClick={() => {
              navigator.clipboard.writeText(transcript)
            }}
            aria-label="Copy transcript"
          >
            <Copy className="h-3.5 w-3.5" />
          </Button>
        )}
      </div>
    </Fragment>
  )
}

const AUDIO_CONSTRAINTS: MediaStreamConstraints = {
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    autoGainControl: true,
  },
}

const SUPPORTED_MIME_TYPES = ["audio/webm;codecs=opus", "audio/webm"] as const

function getMimeType(): string {
  for (const type of SUPPORTED_MIME_TYPES) {
    if (MediaRecorder.isTypeSupported(type)) {
      return type
    }
  }
  return "audio/webm"
}
