"use client"

import { useState } from "react"

import {
  BarVisualizer,
  type AgentState,
} from "@/registry/elevenlabs-ui/ui/bar-visualizer"
import { Button } from "@/registry/elevenlabs-ui/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/elevenlabs-ui/ui/card"

export default function BarVisualizerDemo() {
  const [state, setState] = useState<AgentState>("listening")

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Audio Frequency Visualizer</CardTitle>
        <CardDescription>
          Real-time frequency band visualization with animated state transitions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <BarVisualizer
            state={state}
            demo={true}
            barCount={20}
            minHeight={15}
            maxHeight={90}
            className="h-40 max-w-full"
          />

          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={state === "connecting" ? "default" : "outline"}
              onClick={() => setState("connecting")}
            >
              Connecting
            </Button>
            <Button
              size="sm"
              variant={state === "initializing" ? "default" : "outline"}
              onClick={() => setState("initializing")}
            >
              Initializing
            </Button>
            <Button
              size="sm"
              variant={state === "listening" ? "default" : "outline"}
              onClick={() => setState("listening")}
            >
              Listening
            </Button>
            <Button
              size="sm"
              variant={state === "speaking" ? "default" : "outline"}
              onClick={() => setState("speaking")}
            >
              Speaking
            </Button>
            <Button
              size="sm"
              variant={state === "thinking" ? "default" : "outline"}
              onClick={() => setState("thinking")}
            >
              Thinking
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
