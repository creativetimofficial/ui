"use client"

import React, { useState } from "react"

import { Switch } from "@/registry/elevenlabs-ui/ui/switch"

interface BlurVignetteProps {
  children: React.ReactNode
  className?: string
  radius?: string
  inset?: string
  transitionLength?: string
  blur?: string
  switchView?: boolean
}

const BlurVignette = ({
  children,
  switchView,
  className = "",
  radius = "24px",
  inset = "16px",
  transitionLength = "32px",
  blur = "21px",
}: BlurVignetteProps) => {
  const [isEnabled, setIsEnabled] = useState(true)
  const shouldShowBlur = switchView ? isEnabled : true

  const blurStyles: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    zIndex: 10,
    pointerEvents: "none",
    WebkitBackdropFilter: `blur(${blur})`,
    backdropFilter: `blur(${blur})`,
    opacity: shouldShowBlur ? 1 : 0,
    transition: "opacity 0.3s ease",
    ["--radius" as string]: radius,
    ["--inset" as string]: inset,
    ["--transition-length" as string]: transitionLength,
    ["--blur" as string]: blur,
    ["--r" as string]: `max(${transitionLength}, calc(${radius} - ${inset}))`,
    ["--corner-size" as string]: `calc(var(--r) + ${inset}) calc(var(--r) + ${inset})`,
    ["--corner-gradient" as string]: `transparent 0px, transparent calc(var(--r) - ${transitionLength}), black var(--r)`,
    ["--fill-gradient" as string]: `black, black ${inset}, transparent calc(${inset} + ${transitionLength}), transparent calc(100% - ${transitionLength} - ${inset}), black calc(100% - ${inset})`,
    ["--fill-narrow-size" as string]: `calc(100% - (${inset} + var(--r)) * 2)`,
    ["--fill-farther-position" as string]: `calc(${inset} + var(--r))`,
    WebkitMaskImage: `linear-gradient(to right, var(--fill-gradient)),
      linear-gradient(to bottom, var(--fill-gradient)),
      radial-gradient(at bottom right, var(--corner-gradient)),
      radial-gradient(at bottom left, var(--corner-gradient)),
      radial-gradient(at top left, var(--corner-gradient)),
      radial-gradient(at top right, var(--corner-gradient))`,
    maskImage: `linear-gradient(to right, var(--fill-gradient)),
      linear-gradient(to bottom, var(--fill-gradient)),
      radial-gradient(at bottom right, var(--corner-gradient)),
      radial-gradient(at bottom left, var(--corner-gradient)),
      radial-gradient(at top left, var(--corner-gradient)),
      radial-gradient(at top right, var(--corner-gradient))`,
    WebkitMaskSize: `100% var(--fill-narrow-size),
      var(--fill-narrow-size) 100%,
      var(--corner-size),
      var(--corner-size),
      var(--corner-size),
      var(--corner-size)`,
    maskSize: `100% var(--fill-narrow-size),
      var(--fill-narrow-size) 100%,
      var(--corner-size),
      var(--corner-size),
      var(--corner-size),
      var(--corner-size)`,
    WebkitMaskPosition: `0 var(--fill-farther-position),
      var(--fill-farther-position) 0,
      0 0,
      100% 0,
      100% 100%,
      0 100%`,
    maskPosition: `0 var(--fill-farther-position),
      var(--fill-farther-position) 0,
      0 0,
      100% 0,
      100% 100%,
      0 100%`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  } as React.CSSProperties

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div style={blurStyles} />
      {children}
      {switchView && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
        </div>
      )}
    </div>
  )
}

export default BlurVignette
