"use client"

import { useState } from "react"

import { Button } from "@/registry/elevenlabs-ui/ui/button"
import { LiveWaveform } from "@/registry/elevenlabs-ui/ui/live-waveform"

export default function LiveWaveformDemo() {
  const [active, setActive] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [mode, setMode] = useState<"static" | "scrolling">("static")

  const handleToggleActive = () => {
    setActive(!active)
    if (!active) {
      setProcessing(false)
    }
  }

  const handleToggleProcessing = () => {
    setProcessing(!processing)
    if (!processing) {
      setActive(false)
    }
  }

  return (
    <div className="bg-card w-full rounded-lg border p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Live Audio Waveform</h3>
        <p className="text-muted-foreground text-sm">
          Real-time microphone input visualization with audio reactivity
        </p>
      </div>

      <div className="space-y-4">
        <LiveWaveform
          active={active}
          processing={processing}
          height={80}
          barWidth={3}
          barGap={2}
          mode={mode}
          fadeEdges={true}
          barColor="gray"
          historySize={120}
        />

        <div className="flex flex-wrap justify-center gap-2">
          <Button
            size="sm"
            variant={active ? "default" : "outline"}
            onClick={handleToggleActive}
          >
            {active ? "Stop" : "Start"} Listening
          </Button>
          <Button
            size="sm"
            variant={processing ? "default" : "outline"}
            onClick={handleToggleProcessing}
          >
            {processing ? "Stop" : "Start"} Processing
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setMode(mode === "static" ? "scrolling" : "static")}
          >
            Mode: {mode === "static" ? "Static" : "Scrolling"}
          </Button>
        </div>
      </div>
    </div>
  )
}
