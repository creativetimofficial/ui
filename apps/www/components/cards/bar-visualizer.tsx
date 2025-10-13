"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import {
  BarVisualizer,
  type AgentState,
} from "@/registry/elevenlabs-ui/ui/bar-visualizer"
import { Card, CardContent } from "@/registry/elevenlabs-ui/ui/card"
import { ShimmeringText } from "@/registry/elevenlabs-ui/ui/shimmering-text"

const states: AgentState[] = [
  "connecting",
  "initializing",
  "listening",
  "thinking",
  "speaking",
]

export function CardsBarVisualizer() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const barState = states[currentIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % states.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])
  return (
    <Card className="overflow-hidden p-0">
      <CardContent className="flex flex-col p-1">
        <div className="bg-background relative h-40 overflow-hidden rounded-t-lg">
          <BarVisualizer
            state={barState}
            demo={true}
            barCount={12}
            minHeight={20}
            maxHeight={80}
            className="h-full w-full bg-transparent p-3"
            centerAlign={false}
          />
        </div>
        <div className="flex items-center justify-center py-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ShimmeringText text={barState} className="text-sm capitalize" />
            </motion.div>
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  )
}
