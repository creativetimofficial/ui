"use client"

import { ScrollingWaveform } from "@/registry/elevenlabs-ui/ui/waveform"

export default function WaveformDemo() {
  return (
    <div className="bg-card w-full rounded-lg border p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Waveform</h3>
        <p className="text-muted-foreground text-sm">
          Real-time audio visualization with smooth scrolling animation
        </p>
      </div>
      <ScrollingWaveform
        height={80}
        barWidth={3}
        barGap={2}
        speed={30}
        fadeEdges={true}
        barColor="gray"
      />
    </div>
  )
}
