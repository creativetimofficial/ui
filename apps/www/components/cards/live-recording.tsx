"use client"

import { useEffect, useState } from "react"

import { Card, CardContent } from "@/registry/elevenlabs-ui/ui/card"
import { ScrollingWaveform } from "@/registry/elevenlabs-ui/ui/waveform"

export function CardsLiveRecording() {
  const [remountKey, setRemountKey] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      // Force remount on significant size changes
      setRemountKey((prev) => prev + 1)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Card className="hidden w-full p-0 sm:flex">
      <CardContent className="m-0! flex w-full flex-col p-1!">
        <div className="flex flex-col justify-center">
          <div className="bg-background relative overflow-hidden rounded-t-lg bg-gradient-to-r transition-opacity duration-1000 ease-out">
            <ScrollingWaveform
              key={remountKey}
              height="h-full"
              barWidth={4}
              barGap={2}
              speed={50}
              fadeEdges={true}
              barCount={25}
              className="opacity-90"
            />
          </div>
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              <span className="text-muted-foreground text-xs">Live</span>
            </div>
            <span className="text-muted-foreground text-xs">128 kbps</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
