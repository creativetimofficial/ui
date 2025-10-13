"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { voiceToSiteAction } from "@/registry/elevenlabs-ui/blocks/voice-nav-01/actions/voice-to-site"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/elevenlabs-ui/ui/card"
import { VoiceButton } from "@/registry/elevenlabs-ui/ui/voice-button"

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

export default function Page() {
  const [url, setUrl] = useState("https://elevenlabs.io/docs")
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const streamRef = useRef<MediaStream | null>(null)

  const cleanupStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
  }, [])

  const processAudio = useCallback(async (audioBlob: Blob) => {
    setIsProcessing(true)
    setError("")
    setSuccess(false)

    try {
      const audioFile = new File([audioBlob], "audio.webm", {
        type: audioBlob.type,
      })

      const result = await voiceToSiteAction(audioFile)

      if (result.data?.url) {
        setUrl(result.data.url)
        setSuccess(true)
      }
    } catch (err) {
      console.error("Voice input error:", err)
      setError(err instanceof Error ? err.message : "Failed to process audio")
    } finally {
      setIsProcessing(false)
    }
  }, [])

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current?.state !== "inactive") {
      mediaRecorderRef.current?.stop()
    }
    cleanupStream()
    setIsRecording(false)
  }, [cleanupStream])

  const startRecording = useCallback(async () => {
    try {
      setError("")
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
      setIsRecording(true)
    } catch (err) {
      setError("Microphone permission denied")
      console.error("Microphone error:", err)
    }
  }, [processAudio])

  const handleVoiceToggle = useCallback(() => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }, [isRecording, startRecording, stopRecording])

  useEffect(() => {
    return cleanupStream
  }, [cleanupStream])

  const voiceState = isProcessing
    ? "processing"
    : isRecording
      ? "recording"
      : success
        ? "success"
        : error
          ? "error"
          : "idle"

  return (
    <div className="mx-auto w-full">
      <Card className="border-border relative m-0 gap-0 overflow-hidden p-0 shadow-2xl">
        <div className={cn("flex flex-col gap-0")}>
          <Card className="rounded-none border-x-0 border-t-0">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>Voice Navigation</CardTitle>
                  <CardDescription>
                    Navigate websites with your voice (e.g., &ldquo;Take me to
                    the quickstart guide&rdquo;)
                  </CardDescription>
                </div>
                <VoiceButton
                  state={voiceState}
                  onPress={handleVoiceToggle}
                  disabled={isProcessing}
                  trailing="⌥Space"
                  label="Voice Nav"
                  title="Voice Navigation"
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
            </CardHeader>
          </Card>
          <div className="h-[calc(100vh-180px)] w-full">
            <iframe
              key={url}
              src={url}
              className="h-full w-full border-0"
              title="Voice Navigation Content"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
