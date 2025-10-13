"use client"

import { useEffect, useState } from "react"

import { VoiceButton } from "@/registry/elevenlabs-ui/ui/voice-button"

export default function VoiceButtonDemo() {
  const [state, setState] = useState<
    "idle" | "recording" | "processing" | "success" | "error"
  >("idle")

  const handlePress = () => {
    if (state === "idle") {
      setState("recording")
    } else if (state === "recording") {
      setState("processing")

      setTimeout(() => {
        setState("success")

        setTimeout(() => {
          setState("idle")
        }, 1500)
      }, 1000)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.code === "Space") {
        e.preventDefault()
        handlePress()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [state])

  return (
    <div className="flex min-h-[200px] w-full items-center justify-center">
      <VoiceButton
        label="Voice"
        trailing="⌥Space"
        state={state}
        onPress={handlePress}
        className="min-w-[180px]"
      />
    </div>
  )
}
