"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { voiceToFormAction } from "@/registry/elevenlabs-ui/blocks/voice-form-01/actions/voice-to-form"
import {
  exampleFormSchema,
  ExampleFormValues,
} from "@/registry/elevenlabs-ui/blocks/voice-form-01/schema"
import { Button } from "@/registry/elevenlabs-ui/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/elevenlabs-ui/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/elevenlabs-ui/ui/form"
import { Input } from "@/registry/elevenlabs-ui/ui/input"
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
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const streamRef = useRef<MediaStream | null>(null)

  const form = useForm<ExampleFormValues>({
    resolver: zodResolver(exampleFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    mode: "onChange",
  })

  const cleanupStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
  }, [])

  const processAudio = useCallback(
    async (audioBlob: Blob) => {
      setIsProcessing(true)
      setError("")
      setSuccess(false)

      try {
        const audioFile = new File([audioBlob], "audio.webm", {
          type: audioBlob.type,
        })

        const result = await voiceToFormAction(audioFile)

        if (result.data && Object.keys(result.data).length > 0) {
          Object.entries(result.data).forEach(([key, value]) => {
            if (value) {
              form.setValue(key as keyof ExampleFormValues, value as string, {
                shouldValidate: true,
              })
            }
          })
          setSuccess(true)
          setTimeout(() => setSuccess(false), 2000)
        }
      } catch (err) {
        console.error("Voice input error:", err)
        setError(err instanceof Error ? err.message : "Failed to process audio")
      } finally {
        setIsProcessing(false)
      }
    },
    [form]
  )

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

  const onSubmit = (data: ExampleFormValues) => {
    console.log("Form submitted:", data)
  }

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
      <Card className="relative overflow-hidden">
        <div className={cn("flex flex-col gap-2")}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle>Voice Fill</CardTitle>
                <CardDescription>Powered by ElevenLabs Scribe</CardDescription>
              </div>
              <VoiceButton
                state={voiceState}
                onPress={handleVoiceToggle}
                disabled={isProcessing}
                trailing="Voice Fill"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
