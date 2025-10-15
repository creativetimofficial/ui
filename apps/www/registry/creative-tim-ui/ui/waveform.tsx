"use client"

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
} from "react"

import { cn } from "@/lib/utils"

export type WaveformProps = HTMLAttributes<HTMLDivElement> & {
  data?: number[]
  barWidth?: number
  barGap?: number
  barRadius?: number
  barColor?: string
  fadeEdges?: boolean
  fadeWidth?: number
  height?: string | number
  active?: boolean
  onBarClick?: (index: number, value: number) => void
}

export const Waveform = ({
  data = [],
  barWidth = 4,
  barGap = 2,
  barRadius = 2,
  barColor,
  fadeEdges = true,
  fadeWidth = 24,
  height = 128,
  onBarClick,
  className,
  ...props
}: WaveformProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const heightStyle = typeof height === "number" ? `${height}px` : height

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const resizeObserver = new ResizeObserver(() => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.scale(dpr, dpr)
        renderWaveform()
      }
    })

    const renderWaveform = () => {
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const computedBarColor =
        barColor ||
        getComputedStyle(canvas).getPropertyValue("--foreground") ||
        "#000"

      const barCount = Math.floor(rect.width / (barWidth + barGap))
      const centerY = rect.height / 2

      for (let i = 0; i < barCount; i++) {
        const dataIndex = Math.floor((i / barCount) * data.length)
        const value = data[dataIndex] || 0
        const barHeight = Math.max(4, value * rect.height * 0.8)
        const x = i * (barWidth + barGap)
        const y = centerY - barHeight / 2

        ctx.fillStyle = computedBarColor
        ctx.globalAlpha = 0.3 + value * 0.7

        if (barRadius > 0) {
          ctx.beginPath()
          ctx.roundRect(x, y, barWidth, barHeight, barRadius)
          ctx.fill()
        } else {
          ctx.fillRect(x, y, barWidth, barHeight)
        }
      }

      if (fadeEdges && fadeWidth > 0 && rect.width > 0) {
        const gradient = ctx.createLinearGradient(0, 0, rect.width, 0)
        const fadePercent = Math.min(0.2, fadeWidth / rect.width)

        gradient.addColorStop(0, "rgba(255,255,255,1)")
        gradient.addColorStop(fadePercent, "rgba(255,255,255,0)")
        gradient.addColorStop(1 - fadePercent, "rgba(255,255,255,0)")
        gradient.addColorStop(1, "rgba(255,255,255,1)")

        ctx.globalCompositeOperation = "destination-out"
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, rect.width, rect.height)
        ctx.globalCompositeOperation = "source-over"
      }

      ctx.globalAlpha = 1
    }

    resizeObserver.observe(container)
    renderWaveform()

    return () => resizeObserver.disconnect()
  }, [data, barWidth, barGap, barRadius, barColor, fadeEdges, fadeWidth])

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!onBarClick) return

    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const barIndex = Math.floor(x / (barWidth + barGap))
    const dataIndex = Math.floor(
      (barIndex * data.length) / Math.floor(rect.width / (barWidth + barGap))
    )

    if (dataIndex >= 0 && dataIndex < data.length) {
      onBarClick(dataIndex, data[dataIndex])
    }
  }

  return (
    <div
      className={cn("relative", className)}
      ref={containerRef}
      style={{ height: heightStyle }}
      {...props}
    >
      <canvas
        className="block h-full w-full"
        onClick={handleClick}
        ref={canvasRef}
      />
    </div>
  )
}

export type ScrollingWaveformProps = Omit<
  WaveformProps,
  "data" | "onBarClick"
> & {
  speed?: number
  barCount?: number
  data?: number[]
}

export const ScrollingWaveform = ({
  speed = 50,
  barCount = 60,
  barWidth = 4,
  barGap = 2,
  barRadius = 2,
  barColor,
  fadeEdges = true,
  fadeWidth = 24,
  height = 128,
  data,
  className,
  ...props
}: ScrollingWaveformProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const barsRef = useRef<Array<{ x: number; height: number }>>([])
  const animationRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)
  const seedRef = useRef(Math.random())
  const dataIndexRef = useRef(0)
  const heightStyle = typeof height === "number" ? `${height}px` : height

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const resizeObserver = new ResizeObserver(() => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.scale(dpr, dpr)
      }

      if (barsRef.current.length === 0) {
        const step = barWidth + barGap
        let currentX = rect.width
        let index = 0
        const seededRandom = (i: number) => {
          const x = Math.sin(seedRef.current * 10000 + i) * 10000
          return x - Math.floor(x)
        }
        while (currentX > -step) {
          barsRef.current.push({
            x: currentX,
            height: 0.2 + seededRandom(index++) * 0.6,
          })
          currentX -= step
        }
      }
    })

    resizeObserver.observe(container)
    return () => resizeObserver.disconnect()
  }, [barWidth, barGap])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = (currentTime: number) => {
      const deltaTime = lastTimeRef.current
        ? (currentTime - lastTimeRef.current) / 1000
        : 0
      lastTimeRef.current = currentTime

      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const computedBarColor =
        barColor ||
        getComputedStyle(canvas).getPropertyValue("--foreground") ||
        "#000"

      const step = barWidth + barGap
      for (let i = 0; i < barsRef.current.length; i++) {
        barsRef.current[i].x -= speed * deltaTime
      }

      barsRef.current = barsRef.current.filter(
        (bar) => bar.x + barWidth > -step
      )

      while (
        barsRef.current.length === 0 ||
        barsRef.current[barsRef.current.length - 1].x < rect.width
      ) {
        const lastBar = barsRef.current[barsRef.current.length - 1]
        const nextX = lastBar ? lastBar.x + step : rect.width

        let newHeight: number
        if (data && data.length > 0) {
          newHeight = data[dataIndexRef.current % data.length] || 0.1
          dataIndexRef.current = (dataIndexRef.current + 1) % data.length
        } else {
          const time = Date.now() / 1000
          const uniqueIndex = barsRef.current.length + time * 0.01
          const seededRandom = (index: number) => {
            const x = Math.sin(seedRef.current * 10000 + index * 137.5) * 10000
            return x - Math.floor(x)
          }
          const wave1 = Math.sin(uniqueIndex * 0.1) * 0.2
          const wave2 = Math.cos(uniqueIndex * 0.05) * 0.15
          const randomComponent = seededRandom(uniqueIndex) * 0.4
          newHeight = Math.max(
            0.1,
            Math.min(0.9, 0.3 + wave1 + wave2 + randomComponent)
          )
        }

        barsRef.current.push({
          x: nextX,
          height: newHeight,
        })
        if (barsRef.current.length > barCount * 2) break
      }

      const centerY = rect.height / 2
      for (const bar of barsRef.current) {
        if (bar.x < rect.width && bar.x + barWidth > 0) {
          const barHeight = Math.max(4, bar.height * rect.height * 0.6)
          const y = centerY - barHeight / 2

          ctx.fillStyle = computedBarColor
          ctx.globalAlpha = 0.3 + bar.height * 0.7

          if (barRadius > 0) {
            ctx.beginPath()
            ctx.roundRect(bar.x, y, barWidth, barHeight, barRadius)
            ctx.fill()
          } else {
            ctx.fillRect(bar.x, y, barWidth, barHeight)
          }
        }
      }

      if (fadeEdges && fadeWidth > 0) {
        const gradient = ctx.createLinearGradient(0, 0, rect.width, 0)
        const fadePercent = Math.min(0.2, fadeWidth / rect.width)

        gradient.addColorStop(0, "rgba(255,255,255,1)")
        gradient.addColorStop(fadePercent, "rgba(255,255,255,0)")
        gradient.addColorStop(1 - fadePercent, "rgba(255,255,255,0)")
        gradient.addColorStop(1, "rgba(255,255,255,1)")

        ctx.globalCompositeOperation = "destination-out"
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, rect.width, rect.height)
        ctx.globalCompositeOperation = "source-over"
      }

      ctx.globalAlpha = 1

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [
    speed,
    barCount,
    barWidth,
    barGap,
    barRadius,
    barColor,
    fadeEdges,
    fadeWidth,
    data,
  ])

  return (
    <div
      className={cn("relative flex items-center", className)}
      ref={containerRef}
      style={{ height: heightStyle }}
      {...props}
    >
      <canvas className="block h-full w-full" ref={canvasRef} />
    </div>
  )
}

export type AudioScrubberProps = WaveformProps & {
  currentTime?: number
  duration?: number
  onSeek?: (time: number) => void
  showHandle?: boolean
}

export const AudioScrubber = ({
  data = [],
  currentTime = 0,
  duration = 100,
  onSeek,
  showHandle = true,
  barWidth = 3,
  barGap = 1,
  barRadius = 1,
  barColor,
  height = 128,
  className,
  ...props
}: AudioScrubberProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const [localProgress, setLocalProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const waveformData =
    data.length > 0
      ? data
      : Array.from({ length: 100 }, () => 0.2 + Math.random() * 0.6)

  useEffect(() => {
    if (!isDragging && duration > 0) {
      setLocalProgress(currentTime / duration)
    }
  }, [currentTime, duration, isDragging])

  const handleScrub = useCallback(
    (clientX: number) => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const progress = x / rect.width
      const newTime = progress * duration

      setLocalProgress(progress)
      onSeek?.(newTime)
    },
    [duration, onSeek]
  )

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
    handleScrub(e.clientX)
  }

  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e: MouseEvent) => {
      handleScrub(e.clientX)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, duration, handleScrub])

  const heightStyle = typeof height === "number" ? `${height}px` : height

  return (
    <div
      aria-label="Audio waveform scrubber"
      aria-valuemax={duration}
      aria-valuemin={0}
      aria-valuenow={currentTime}
      className={cn("relative cursor-pointer select-none", className)}
      onMouseDown={handleMouseDown}
      ref={containerRef}
      role="slider"
      style={{ height: heightStyle }}
      tabIndex={0}
      {...props}
    >
      <Waveform
        barColor={barColor}
        barGap={barGap}
        barRadius={barRadius}
        barWidth={barWidth}
        data={waveformData}
        fadeEdges={false}
      />

      <div
        className="bg-primary/20 pointer-events-none absolute inset-y-0 left-0"
        style={{ width: `${localProgress * 100}%` }}
      />

      <div
        className="bg-primary pointer-events-none absolute top-0 bottom-0 w-0.5"
        style={{ left: `${localProgress * 100}%` }}
      />

      {showHandle && (
        <div
          className="border-background bg-primary pointer-events-none absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 shadow-lg transition-transform hover:scale-110"
          style={{ left: `${localProgress * 100}%` }}
        />
      )}
    </div>
  )
}

export type MicrophoneWaveformProps = WaveformProps & {
  active?: boolean
  processing?: boolean
  fftSize?: number
  smoothingTimeConstant?: number
  sensitivity?: number
  onError?: (error: Error) => void
}

export const MicrophoneWaveform = ({
  active = false,
  processing = false,
  fftSize = 256,
  smoothingTimeConstant = 0.8,
  sensitivity = 1,
  onError,
  ...props
}: MicrophoneWaveformProps) => {
  const [data, setData] = useState<number[]>([])
  const analyserRef = useRef<AnalyserNode | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const processingAnimationRef = useRef<number | null>(null)
  const lastActiveDataRef = useRef<number[]>([])
  const transitionProgressRef = useRef(0)

  useEffect(() => {
    if (processing && !active) {
      let time = 0
      transitionProgressRef.current = 0

      const animateProcessing = () => {
        time += 0.03
        transitionProgressRef.current = Math.min(
          1,
          transitionProgressRef.current + 0.02
        )

        const processingData = []
        const barCount = 45

        for (let i = 0; i < barCount; i++) {
          const normalizedPosition = (i - barCount / 2) / (barCount / 2)
          const centerWeight = 1 - Math.abs(normalizedPosition) * 0.4

          const wave1 = Math.sin(time * 1.5 + i * 0.15) * 0.25
          const wave2 = Math.sin(time * 0.8 - i * 0.1) * 0.2
          const wave3 = Math.cos(time * 2 + i * 0.05) * 0.15
          const combinedWave = wave1 + wave2 + wave3
          const processingValue = (0.2 + combinedWave) * centerWeight

          let finalValue = processingValue
          if (
            lastActiveDataRef.current.length > 0 &&
            transitionProgressRef.current < 1
          ) {
            const lastDataIndex = Math.floor(
              (i / barCount) * lastActiveDataRef.current.length
            )
            const lastValue = lastActiveDataRef.current[lastDataIndex] || 0
            finalValue =
              lastValue * (1 - transitionProgressRef.current) +
              processingValue * transitionProgressRef.current
          }

          processingData.push(Math.max(0.05, Math.min(1, finalValue)))
        }

        setData(processingData)
        processingAnimationRef.current =
          requestAnimationFrame(animateProcessing)
      }

      animateProcessing()

      return () => {
        if (processingAnimationRef.current) {
          cancelAnimationFrame(processingAnimationRef.current)
        }
      }
    } else if (!active && !processing) {
      if (data.length > 0) {
        let fadeProgress = 0
        const fadeToIdle = () => {
          fadeProgress += 0.03
          if (fadeProgress < 1) {
            const fadedData = data.map((value) => value * (1 - fadeProgress))
            setData(fadedData)
            requestAnimationFrame(fadeToIdle)
          } else {
            setData([])
          }
        }
        fadeToIdle()
      }
      return
    }
  }, [processing, active])

  useEffect(() => {
    if (!active) {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }
      if (
        audioContextRef.current &&
        audioContextRef.current.state !== "closed"
      ) {
        audioContextRef.current.close()
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      return
    }

    const setupMicrophone = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        })
        streamRef.current = stream

        const audioContext = new (window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext)()
        const analyser = audioContext.createAnalyser()
        analyser.fftSize = fftSize
        analyser.smoothingTimeConstant = smoothingTimeConstant

        const source = audioContext.createMediaStreamSource(stream)
        source.connect(analyser)

        audioContextRef.current = audioContext
        analyserRef.current = analyser

        const dataArray = new Uint8Array(analyser.frequencyBinCount)

        const updateData = () => {
          if (!analyserRef.current || !active) return

          analyserRef.current.getByteFrequencyData(dataArray)

          const startFreq = Math.floor(dataArray.length * 0.05)
          const endFreq = Math.floor(dataArray.length * 0.4)
          const relevantData = dataArray.slice(startFreq, endFreq)

          const halfLength = Math.floor(relevantData.length / 2)
          const normalizedData = []

          for (let i = halfLength - 1; i >= 0; i--) {
            const value = Math.min(1, (relevantData[i] / 255) * sensitivity)
            normalizedData.push(value)
          }

          for (let i = 0; i < halfLength; i++) {
            const value = Math.min(1, (relevantData[i] / 255) * sensitivity)
            normalizedData.push(value)
          }

          setData(normalizedData)
          lastActiveDataRef.current = normalizedData

          animationIdRef.current = requestAnimationFrame(updateData)
        }

        updateData()
      } catch (error) {
        onError?.(error as Error)
      }
    }

    setupMicrophone()

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }
      if (
        audioContextRef.current &&
        audioContextRef.current.state !== "closed"
      ) {
        audioContextRef.current.close()
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [active, fftSize, smoothingTimeConstant, sensitivity, onError])

  return <Waveform data={data} {...props} />
}

export type StaticWaveformProps = WaveformProps & {
  bars?: number
  seed?: number
}

export const StaticWaveform = ({
  bars = 40,
  seed = 42,
  ...props
}: StaticWaveformProps) => {
  const data = useMemo(() => {
    const random = (seedValue: number) => {
      const x = Math.sin(seedValue) * 10000
      return x - Math.floor(x)
    }

    return Array.from({ length: bars }, (_, i) => 0.2 + random(seed + i) * 0.6)
  }, [bars, seed])

  return <Waveform data={data} {...props} />
}

export type LiveMicrophoneWaveformProps = Omit<
  ScrollingWaveformProps,
  "barCount"
> & {
  active?: boolean
  fftSize?: number
  smoothingTimeConstant?: number
  sensitivity?: number
  onError?: (error: Error) => void
  historySize?: number
  updateRate?: number
  savedHistoryRef?: React.MutableRefObject<number[]>
  dragOffset?: number
  setDragOffset?: (offset: number) => void
  enableAudioPlayback?: boolean
  playbackRate?: number
}

export const LiveMicrophoneWaveform = ({
  active = false,
  fftSize = 256,
  smoothingTimeConstant = 0.8,
  sensitivity = 1,
  onError,
  historySize = 150,
  updateRate = 50,
  barWidth = 3,
  barGap = 1,
  barRadius = 1,
  barColor,
  fadeEdges = true,
  fadeWidth = 24,
  height = 128,
  className,
  savedHistoryRef,
  dragOffset: externalDragOffset,
  setDragOffset: externalSetDragOffset,
  enableAudioPlayback = true,
  playbackRate = 1,
  ...props
}: LiveMicrophoneWaveformProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const internalHistoryRef = useRef<number[]>([])
  const historyRef = savedHistoryRef || internalHistoryRef
  const analyserRef = useRef<AnalyserNode | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animationRef = useRef<number>(0)
  const lastUpdateRef = useRef<number>(0)
  const [internalDragOffset, setInternalDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [playbackPosition, setPlaybackPosition] = useState<number | null>(null)
  const dragStartXRef = useRef<number>(0)
  const dragStartOffsetRef = useRef<number>(0)
  const playbackStartTimeRef = useRef<number>(0)

  // Audio recording and playback refs
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const audioBufferRef = useRef<AudioBuffer | null>(null)
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null)
  const scrubSourceRef = useRef<AudioBufferSourceNode | null>(null)

  // Use external drag state if provided, otherwise use internal
  const dragOffset = externalDragOffset ?? internalDragOffset
  const setDragOffset = externalSetDragOffset ?? setInternalDragOffset

  const heightStyle = typeof height === "number" ? `${height}px` : height

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const resizeObserver = new ResizeObserver(() => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.scale(dpr, dpr)
      }
    })

    resizeObserver.observe(container)
    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    if (!active) {
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        mediaRecorderRef.current.stop()
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }
      // Process recorded audio when stopping
      if (enableAudioPlayback && audioChunksRef.current.length > 0) {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        })
        processAudioBlob(audioBlob)
      }
      return
    }

    setDragOffset?.(0)
    historyRef.current = []
    audioChunksRef.current = []
    audioBufferRef.current = null
    setPlaybackPosition(null)

    const setupMicrophone = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        })
        streamRef.current = stream

        const audioContext = new (window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext)()
        const analyser = audioContext.createAnalyser()
        analyser.fftSize = fftSize
        analyser.smoothingTimeConstant = smoothingTimeConstant

        const source = audioContext.createMediaStreamSource(stream)
        source.connect(analyser)

        audioContextRef.current = audioContext
        analyserRef.current = analyser

        if (enableAudioPlayback) {
          const mediaRecorder = new MediaRecorder(stream)
          mediaRecorderRef.current = mediaRecorder

          mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              audioChunksRef.current.push(event.data)
            }
          }

          mediaRecorder.start(100)
        }
      } catch (error) {
        onError?.(error as Error)
      }
    }

    setupMicrophone()

    return () => {
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        mediaRecorderRef.current.stop()
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }
      if (sourceNodeRef.current) {
        sourceNodeRef.current.stop()
      }
      if (scrubSourceRef.current) {
        scrubSourceRef.current.stop()
      }
    }
  }, [
    active,
    fftSize,
    smoothingTimeConstant,
    onError,
    setDragOffset,
    enableAudioPlayback,
    historyRef,
  ])

  const processAudioBlob = async (blob: Blob) => {
    try {
      const arrayBuffer = await blob.arrayBuffer()
      if (audioContextRef.current) {
        const audioBuffer =
          await audioContextRef.current.decodeAudioData(arrayBuffer)
        audioBufferRef.current = audioBuffer
      }
    } catch (error) {
      console.error("Error processing audio:", error)
    }
  }

  const playScrubSound = useCallback(
    (position: number, direction: number) => {
      if (
        !enableAudioPlayback ||
        !audioBufferRef.current ||
        !audioContextRef.current
      )
        return

      if (scrubSourceRef.current) {
        try {
          scrubSourceRef.current.stop()
        } catch {}
      }

      const source = audioContextRef.current.createBufferSource()
      source.buffer = audioBufferRef.current

      const speed = Math.abs(direction)
      const playbackRate =
        direction > 0
          ? Math.min(3, 1 + speed * 0.1)
          : Math.max(-3, -1 - speed * 0.1)

      source.playbackRate.value = playbackRate

      const filter = audioContextRef.current.createBiquadFilter()
      filter.type = "lowpass"
      filter.frequency.value = Math.max(200, 2000 - speed * 100)

      source.connect(filter)
      filter.connect(audioContextRef.current.destination)

      const startTime = Math.max(
        0,
        Math.min(position, audioBufferRef.current.duration - 0.1)
      )
      source.start(0, startTime, 0.1)
      scrubSourceRef.current = source
    },
    [enableAudioPlayback]
  )

  const playFromPosition = useCallback(
    (position: number) => {
      if (
        !enableAudioPlayback ||
        !audioBufferRef.current ||
        !audioContextRef.current
      )
        return

      if (sourceNodeRef.current) {
        try {
          sourceNodeRef.current.stop()
        } catch {}
      }

      const source = audioContextRef.current.createBufferSource()
      source.buffer = audioBufferRef.current
      source.playbackRate.value = playbackRate
      source.connect(audioContextRef.current.destination)

      const startTime = Math.max(
        0,
        Math.min(position, audioBufferRef.current.duration)
      )
      source.start(0, startTime)
      sourceNodeRef.current = source

      playbackStartTimeRef.current =
        audioContextRef.current.currentTime - startTime
      setPlaybackPosition(startTime)

      source.onended = () => {
        setPlaybackPosition(null)
      }
    },
    [enableAudioPlayback, playbackRate]
  )

  useEffect(() => {
    if (playbackPosition === null || !audioBufferRef.current) return

    let animationId: number
    const updatePlaybackVisual = () => {
      if (
        audioContextRef.current &&
        sourceNodeRef.current &&
        audioBufferRef.current
      ) {
        const elapsed =
          audioContextRef.current.currentTime - playbackStartTimeRef.current
        const currentPos = playbackPosition + elapsed * playbackRate

        if (currentPos < audioBufferRef.current.duration) {
          const progressRatio = currentPos / audioBufferRef.current.duration
          const currentBarIndex = Math.floor(
            progressRatio * historyRef.current.length
          )
          const step = barWidth + barGap

          const containerWidth =
            containerRef.current?.getBoundingClientRect().width || 0
          const viewBars = Math.floor(containerWidth / step)
          const targetOffset =
            -(currentBarIndex - (historyRef.current.length - viewBars)) * step
          const clampedOffset = Math.max(
            -(historyRef.current.length - viewBars) * step,
            Math.min(0, targetOffset)
          )

          setDragOffset?.(clampedOffset)
          animationId = requestAnimationFrame(updatePlaybackVisual)
        } else {
          setPlaybackPosition(null)
          const step = barWidth + barGap
          const containerWidth =
            containerRef.current?.getBoundingClientRect().width || 0
          const viewBars = Math.floor(containerWidth / step)
          setDragOffset?.(-(historyRef.current.length - viewBars) * step)
        }
      }
    }

    animationId = requestAnimationFrame(updatePlaybackVisual)

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [
    playbackPosition,
    playbackRate,
    barWidth,
    barGap,
    setDragOffset,
    historyRef,
  ])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (!active && historyRef.current.length === 0 && playbackPosition === null)
      return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = (currentTime: number) => {
      if (active && currentTime - lastUpdateRef.current > updateRate) {
        lastUpdateRef.current = currentTime

        if (analyserRef.current) {
          const dataArray = new Uint8Array(
            analyserRef.current.frequencyBinCount
          )
          analyserRef.current.getByteFrequencyData(dataArray)

          let sum = 0
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i]
          }
          const average = (sum / dataArray.length / 255) * sensitivity

          historyRef.current.push(Math.min(1, Math.max(0.05, average)))

          if (historyRef.current.length > historySize) {
            historyRef.current.shift()
          }
        }
      }

      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const computedBarColor =
        barColor ||
        getComputedStyle(canvas).getPropertyValue("--foreground") ||
        "#000"

      const step = barWidth + barGap
      const barCount = Math.floor(rect.width / step)
      const centerY = rect.height / 2

      const dataToRender = historyRef.current

      if (dataToRender.length > 0) {
        const offsetInBars = Math.floor(dragOffset / step)

        for (let i = 0; i < barCount; i++) {
          let dataIndex

          if (active) {
            dataIndex = dataToRender.length - 1 - i
          } else {
            dataIndex = Math.max(
              0,
              Math.min(
                dataToRender.length - 1,
                dataToRender.length - 1 - i - Math.floor(offsetInBars)
              )
            )
          }

          if (dataIndex >= 0 && dataIndex < dataToRender.length) {
            const value = dataToRender[dataIndex]
            if (value !== undefined) {
              const x = rect.width - (i + 1) * step
              const barHeight = Math.max(4, value * rect.height * 0.7)
              const y = centerY - barHeight / 2

              ctx.fillStyle = computedBarColor
              ctx.globalAlpha = 0.3 + value * 0.7

              if (barRadius > 0) {
                ctx.beginPath()
                ctx.roundRect(x, y, barWidth, barHeight, barRadius)
                ctx.fill()
              } else {
                ctx.fillRect(x, y, barWidth, barHeight)
              }
            }
          }
        }
      }

      if (fadeEdges && fadeWidth > 0) {
        const gradient = ctx.createLinearGradient(0, 0, rect.width, 0)
        const fadePercent = Math.min(0.2, fadeWidth / rect.width)

        gradient.addColorStop(0, "rgba(255,255,255,1)")
        gradient.addColorStop(fadePercent, "rgba(255,255,255,0)")
        gradient.addColorStop(1 - fadePercent, "rgba(255,255,255,0)")
        gradient.addColorStop(1, "rgba(255,255,255,1)")

        ctx.globalCompositeOperation = "destination-out"
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, rect.width, rect.height)
        ctx.globalCompositeOperation = "source-over"
      }

      ctx.globalAlpha = 1

      animationRef.current = requestAnimationFrame(animate)
    }

    if (active || historyRef.current.length > 0 || playbackPosition !== null) {
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [
    active,
    sensitivity,
    updateRate,
    historySize,
    barWidth,
    barGap,
    barRadius,
    barColor,
    fadeEdges,
    fadeWidth,
    dragOffset,
    playbackPosition,
    historyRef,
  ])

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (active || historyRef.current.length === 0) return

    e.preventDefault()
    setIsDragging(true)
    dragStartXRef.current = e.clientX
    dragStartOffsetRef.current = dragOffset
  }

  useEffect(() => {
    if (!isDragging) return

    let lastScrubTime = 0
    let lastMouseX = dragStartXRef.current
    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - dragStartXRef.current
      const newOffset = dragStartOffsetRef.current - deltaX * 0.5 // Reduce sensitivity

      const step = barWidth + barGap
      const maxBars = historyRef.current.length
      const viewWidth = canvasRef.current?.getBoundingClientRect().width || 0
      const viewBars = Math.floor(viewWidth / step)

      const maxOffset = Math.max(0, (maxBars - viewBars) * step)
      const minOffset = 0
      const clampedOffset = Math.max(minOffset, Math.min(maxOffset, newOffset))

      setDragOffset?.(clampedOffset)

      const now = Date.now()
      if (
        enableAudioPlayback &&
        audioBufferRef.current &&
        now - lastScrubTime > 50
      ) {
        lastScrubTime = now
        const offsetBars = Math.floor(clampedOffset / step)
        const rightmostBarIndex = Math.max(
          0,
          Math.min(maxBars - 1, maxBars - 1 - offsetBars)
        )
        const audioPosition =
          (rightmostBarIndex / maxBars) * audioBufferRef.current.duration
        const direction = e.clientX - lastMouseX
        lastMouseX = e.clientX
        playScrubSound(
          Math.max(
            0,
            Math.min(audioBufferRef.current.duration - 0.1, audioPosition)
          ),
          direction
        )
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)

      if (enableAudioPlayback && audioBufferRef.current) {
        const step = barWidth + barGap
        const maxBars = historyRef.current.length
        const offsetBars = Math.floor(dragOffset / step)
        const rightmostBarIndex = Math.max(
          0,
          Math.min(maxBars - 1, maxBars - 1 - offsetBars)
        )
        const audioPosition =
          (rightmostBarIndex / maxBars) * audioBufferRef.current.duration
        playFromPosition(
          Math.max(
            0,
            Math.min(audioBufferRef.current.duration - 0.1, audioPosition)
          )
        )
      }

      if (scrubSourceRef.current) {
        try {
          scrubSourceRef.current.stop()
        } catch {}
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [
    isDragging,
    barWidth,
    barGap,
    setDragOffset,
    dragOffset,
    enableAudioPlayback,
    playScrubSound,
    playFromPosition,
    historyRef,
  ])

  return (
    <div
      className={cn(
        "relative flex items-center",
        !active && historyRef.current.length > 0 && "cursor-pointer",
        className
      )}
      onMouseDown={handleMouseDown}
      ref={containerRef}
      role={!active && historyRef.current.length > 0 ? "slider" : undefined}
      aria-label={
        !active && historyRef.current.length > 0
          ? "Drag to scrub through recording"
          : undefined
      }
      aria-valuenow={
        !active && historyRef.current.length > 0
          ? Math.abs(dragOffset)
          : undefined
      }
      aria-valuemin={!active && historyRef.current.length > 0 ? 0 : undefined}
      aria-valuemax={
        !active && historyRef.current.length > 0
          ? historyRef.current.length
          : undefined
      }
      tabIndex={!active && historyRef.current.length > 0 ? 0 : undefined}
      style={{ height: heightStyle }}
      {...props}
    >
      <canvas className="block h-full w-full" ref={canvasRef} />
    </div>
  )
}

export type RecordingWaveformProps = Omit<
  WaveformProps,
  "data" | "onBarClick"
> & {
  recording?: boolean
  fftSize?: number
  smoothingTimeConstant?: number
  sensitivity?: number
  onError?: (error: Error) => void
  onRecordingComplete?: (data: number[]) => void
  updateRate?: number
  showHandle?: boolean
}

export const RecordingWaveform = ({
  recording = false,
  fftSize = 256,
  smoothingTimeConstant = 0.8,
  sensitivity = 1,
  onError,
  onRecordingComplete,
  updateRate = 50,
  showHandle = true,
  barWidth = 3,
  barGap = 1,
  barRadius = 1,
  barColor,
  height = 128,
  className,
  ...props
}: RecordingWaveformProps) => {
  const [recordedData, setRecordedData] = useState<number[]>([])
  const [viewPosition, setViewPosition] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [isRecordingComplete, setIsRecordingComplete] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const recordingDataRef = useRef<number[]>([])
  const analyserRef = useRef<AnalyserNode | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animationRef = useRef<number>(0)
  const lastUpdateRef = useRef<number>(0)

  const heightStyle = typeof height === "number" ? `${height}px` : height

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const resizeObserver = new ResizeObserver(() => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.scale(dpr, dpr)
      }
    })

    resizeObserver.observe(container)
    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    if (!recording) {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }
      if (
        audioContextRef.current &&
        audioContextRef.current.state !== "closed"
      ) {
        audioContextRef.current.close()
      }

      if (recordingDataRef.current.length > 0) {
        setRecordedData([...recordingDataRef.current])
        setIsRecordingComplete(true)
        onRecordingComplete?.(recordingDataRef.current)
      }
      return
    }

    setIsRecordingComplete(false)
    recordingDataRef.current = []
    setRecordedData([])
    setViewPosition(1)

    const setupMicrophone = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        })
        streamRef.current = stream

        const audioContext = new (window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext)()
        const analyser = audioContext.createAnalyser()
        analyser.fftSize = fftSize
        analyser.smoothingTimeConstant = smoothingTimeConstant

        const source = audioContext.createMediaStreamSource(stream)
        source.connect(analyser)

        audioContextRef.current = audioContext
        analyserRef.current = analyser
      } catch (error) {
        onError?.(error as Error)
      }
    }

    setupMicrophone()

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }
      if (
        audioContextRef.current &&
        audioContextRef.current.state !== "closed"
      ) {
        audioContextRef.current.close()
      }
    }
  }, [recording, fftSize, smoothingTimeConstant, onError, onRecordingComplete])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = (currentTime: number) => {
      if (recording && currentTime - lastUpdateRef.current > updateRate) {
        lastUpdateRef.current = currentTime

        if (analyserRef.current) {
          const dataArray = new Uint8Array(
            analyserRef.current.frequencyBinCount
          )
          analyserRef.current.getByteFrequencyData(dataArray)

          let sum = 0
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i]
          }
          const average = (sum / dataArray.length / 255) * sensitivity

          recordingDataRef.current.push(Math.min(1, Math.max(0.05, average)))
        }
      }

      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const computedBarColor =
        barColor ||
        getComputedStyle(canvas).getPropertyValue("--foreground") ||
        "#000"

      const dataToRender = recording ? recordingDataRef.current : recordedData

      if (dataToRender.length > 0) {
        const step = barWidth + barGap
        const barsVisible = Math.floor(rect.width / step)
        const centerY = rect.height / 2

        let startIndex = 0
        if (!recording && isRecordingComplete) {
          const totalBars = dataToRender.length
          if (totalBars > barsVisible) {
            startIndex = Math.floor((totalBars - barsVisible) * viewPosition)
          }
        } else if (recording) {
          startIndex = Math.max(0, dataToRender.length - barsVisible)
        }

        for (
          let i = 0;
          i < barsVisible && startIndex + i < dataToRender.length;
          i++
        ) {
          const value = dataToRender[startIndex + i] || 0.1
          const x = i * step
          const barHeight = Math.max(4, value * rect.height * 0.7)
          const y = centerY - barHeight / 2

          ctx.fillStyle = computedBarColor
          ctx.globalAlpha = 0.3 + value * 0.7

          if (barRadius > 0) {
            ctx.beginPath()
            ctx.roundRect(x, y, barWidth, barHeight, barRadius)
            ctx.fill()
          } else {
            ctx.fillRect(x, y, barWidth, barHeight)
          }
        }

        if (!recording && isRecordingComplete && showHandle) {
          const indicatorX = rect.width * viewPosition

          ctx.strokeStyle = computedBarColor
          ctx.globalAlpha = 0.5
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(indicatorX, 0)
          ctx.lineTo(indicatorX, rect.height)
          ctx.stroke()
          ctx.fillStyle = computedBarColor
          ctx.globalAlpha = 1
          ctx.beginPath()
          ctx.arc(indicatorX, centerY, 6, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      ctx.globalAlpha = 1

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [
    recording,
    recordedData,
    viewPosition,
    isRecordingComplete,
    sensitivity,
    updateRate,
    showHandle,
    barWidth,
    barGap,
    barRadius,
    barColor,
  ])

  const handleScrub = useCallback(
    (clientX: number) => {
      const container = containerRef.current
      if (!container || recording || !isRecordingComplete) return

      const rect = container.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const position = x / rect.width

      setViewPosition(position)
    },
    [recording, isRecordingComplete]
  )

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (recording || !isRecordingComplete) return

    e.preventDefault()
    setIsDragging(true)
    handleScrub(e.clientX)
  }

  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e: MouseEvent) => {
      handleScrub(e.clientX)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, handleScrub])

  return (
    <div
      aria-label={
        isRecordingComplete && !recording
          ? "Drag to scrub through recording"
          : undefined
      }
      aria-valuenow={
        isRecordingComplete && !recording ? viewPosition * 100 : undefined
      }
      aria-valuemin={isRecordingComplete && !recording ? 0 : undefined}
      aria-valuemax={isRecordingComplete && !recording ? 100 : undefined}
      className={cn(
        "relative flex items-center",
        isRecordingComplete && !recording && "cursor-pointer",
        className
      )}
      onMouseDown={handleMouseDown}
      ref={containerRef}
      role={isRecordingComplete && !recording ? "slider" : undefined}
      style={{ height: heightStyle }}
      tabIndex={isRecordingComplete && !recording ? 0 : undefined}
      {...props}
    >
      <canvas className="block h-full w-full" ref={canvasRef} />
    </div>
  )
}
