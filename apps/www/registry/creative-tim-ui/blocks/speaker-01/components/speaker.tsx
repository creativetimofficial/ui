"use client"

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { Music, SkipBack, SkipForward, Sparkles, Volume2 } from "lucide-react"

import { cn } from "@/registry/elevenlabs-ui/lib/utils"
import {
  AudioPlayerButton,
  AudioPlayerDuration,
  AudioPlayerProgress,
  AudioPlayerProvider,
  AudioPlayerTime,
  exampleTracks,
  useAudioPlayer,
} from "@/registry/elevenlabs-ui/ui/audio-player"
import { Button } from "@/registry/elevenlabs-ui/ui/button"
import { Card } from "@/registry/elevenlabs-ui/ui/card"
import { Orb } from "@/registry/elevenlabs-ui/ui/orb"
import { Waveform } from "@/registry/elevenlabs-ui/ui/waveform"

const globalAudioState = {
  isPlaying: false,
  volume: 0.7,
  isDark: false,
}

const PlayButton = memo(
  ({ currentTrackIndex }: { currentTrackIndex: number }) => {
    const player = useAudioPlayer()
    return (
      <AudioPlayerButton
        variant="outline"
        size="icon"
        item={
          player.activeItem
            ? {
                id: exampleTracks[currentTrackIndex].id,
                src: exampleTracks[currentTrackIndex].url,
                data: { name: exampleTracks[currentTrackIndex].name },
              }
            : undefined
        }
        className={cn(
          "border-border h-14 w-14 rounded-full transition-all duration-300",
          player.isPlaying
            ? "bg-foreground/10 hover:bg-foreground/15 border-foreground/30 dark:bg-primary/20 dark:hover:bg-primary/30 dark:border-primary/50"
            : "bg-background hover:bg-muted"
        )}
      />
    )
  }
)

PlayButton.displayName = "PlayButton"

const TimeDisplay = memo(() => {
  return (
    <div className="flex items-center gap-2">
      <AudioPlayerTime className="text-xs" />
      <AudioPlayerProgress className="flex-1" />
      <AudioPlayerDuration className="text-xs" />
    </div>
  )
})

TimeDisplay.displayName = "TimeDisplay"

const SpeakerContextBridge = ({ className }: { className?: string }) => {
  const player = useAudioPlayer()
  const playerRefStatic = useRef(player)

  playerRefStatic.current = player

  return useMemo(
    () => <SpeakerControls className={className} playerRef={playerRefStatic} />,
    [className]
  )
}

export function Speaker({ className }: { className?: string }) {
  return (
    <AudioPlayerProvider>
      <SpeakerContextBridge className={className} />
    </AudioPlayerProvider>
  )
}

const SpeakerOrb = memo(
  ({
    seed,
    side,
    isDark,
    audioDataRef,
  }: {
    seed: number
    side: "left" | "right"
    isDark: boolean
    audioDataRef: React.RefObject<number[]>
  }) => {
    const getInputVolume = useCallback(() => {
      const audioData = audioDataRef?.current || []
      if (
        !globalAudioState.isPlaying ||
        globalAudioState.volume === 0 ||
        audioData.length === 0
      )
        return 0
      const lowFreqEnd = Math.floor(audioData.length * 0.25)
      let sum = 0
      for (let i = 0; i < lowFreqEnd; i++) {
        sum += audioData[i]
      }
      const avgLow = sum / lowFreqEnd
      const amplified = Math.pow(avgLow, 0.5) * 3.5
      return Math.max(0.2, Math.min(1.0, amplified))
    }, [audioDataRef])

    const getOutputVolume = useCallback(() => {
      const audioData = audioDataRef?.current || []
      if (
        !globalAudioState.isPlaying ||
        globalAudioState.volume === 0 ||
        audioData.length === 0
      )
        return 0
      const midStart = Math.floor(audioData.length * 0.25)
      const midEnd = Math.floor(audioData.length * 0.75)
      let sum = 0
      for (let i = midStart; i < midEnd; i++) {
        sum += audioData[i]
      }
      const avgMid = sum / (midEnd - midStart)
      const modifier = side === "left" ? 0.9 : 1.1
      const amplified = Math.pow(avgMid, 0.5) * 4.0
      return Math.max(0.25, Math.min(1.0, amplified * modifier))
    }, [side, audioDataRef])

    const colors: [string, string] = useMemo(
      () => (isDark ? ["#A0A0A0", "#232323"] : ["#F4F4F4", "#E0E0E0"]),
      [isDark]
    )

    return (
      <Orb
        colors={colors}
        seed={seed}
        volumeMode="manual"
        getInputVolume={getInputVolume}
        getOutputVolume={getOutputVolume}
      />
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.isDark === nextProps.isDark &&
      prevProps.seed === nextProps.seed &&
      prevProps.side === nextProps.side
    )
  }
)

SpeakerOrb.displayName = "SpeakerOrb"

const SpeakerOrbsSection = memo(
  ({
    isDark,
    audioDataRef,
  }: {
    isDark: boolean
    audioDataRef: React.RefObject<number[]>
  }) => {
    return (
      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <div className="bg-muted relative h-full w-full rounded-full p-1 shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
            <div className="bg-background h-full w-full overflow-hidden rounded-full shadow-[inset_0_0_12px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_12px_rgba(0,0,0,0.3)]">
              <SpeakerOrb
                key={`left-${isDark}`}
                seed={100}
                side="left"
                isDark={isDark}
                audioDataRef={audioDataRef}
              />
            </div>
          </div>
        </div>

        <div className="relative aspect-square">
          <div className="bg-muted relative h-full w-full rounded-full p-1 shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
            <div className="bg-background h-full w-full overflow-hidden rounded-full shadow-[inset_0_0_12px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_12px_rgba(0,0,0,0.3)]">
              <SpeakerOrb
                key={`right-${isDark}`}
                seed={2000}
                side="right"
                isDark={isDark}
                audioDataRef={audioDataRef}
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.isDark === nextProps.isDark
  }
)

SpeakerOrbsSection.displayName = "SpeakerOrbsSection"

const VolumeSlider = memo(
  ({
    volume,
    setVolume,
  }: {
    volume: number
    setVolume: (value: number | ((prev: number) => number)) => void
  }) => {
    return (
      <div className="flex items-center justify-center gap-4 pt-4">
        <button
          onClick={() => setVolume((prev: number) => (prev > 0 ? 0 : 0.7))}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Volume2
            className={cn(
              "h-4 w-4 transition-all",
              volume === 0 && "text-muted-foreground/50"
            )}
          />
        </button>
        <div
          className="volume-slider bg-foreground/10 group relative h-1 w-48 cursor-pointer rounded-full"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = Math.max(
              0,
              Math.min(1, (e.clientX - rect.left) / rect.width)
            )
            setVolume(x)
          }}
          onMouseDown={(e) => {
            const sliderRect = e.currentTarget.getBoundingClientRect()
            const handleMove = (e: MouseEvent) => {
              const x = Math.max(
                0,
                Math.min(1, (e.clientX - sliderRect.left) / sliderRect.width)
              )
              setVolume(x)
            }
            const handleUp = () => {
              document.removeEventListener("mousemove", handleMove)
              document.removeEventListener("mouseup", handleUp)
            }
            document.addEventListener("mousemove", handleMove)
            document.addEventListener("mouseup", handleUp)
          }}
        >
          <div
            className="bg-primary absolute top-0 left-0 h-full rounded-full transition-all"
            style={{ width: `${volume * 100}%` }}
          />
        </div>
        <span className="text-muted-foreground w-12 text-right font-mono text-xs">
          {Math.round(volume * 100)}%
        </span>
      </div>
    )
  }
)

VolumeSlider.displayName = "VolumeSlider"

function SpeakerControls({
  className,
  playerRef,
}: {
  className?: string
  playerRef: React.RefObject<ReturnType<typeof useAudioPlayer>>
}) {
  const playerApiRef = playerRef
  const isPlayingRef = useRef(false)

  const [volume, setVolume] = useState(0.7)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [showTrackList, setShowTrackList] = useState(false)
  const audioDataRef = useRef<number[]>([])
  const [isDark, setIsDark] = useState(false)
  const [isScrubbing, setIsScrubbing] = useState(false)
  const [isMomentumActive, setIsMomentumActive] = useState(false)
  const [precomputedWaveform, setPrecomputedWaveform] = useState<number[]>([])
  const waveformOffset = useRef(0)
  const waveformElementRef = useRef<HTMLDivElement>(null)
  const [ambienceMode, setAmbienceMode] = useState(false)
  const containerWidthRef = useRef(300)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
  const audioBufferRef = useRef<AudioBuffer | null>(null)
  const scratchBufferRef = useRef<AudioBufferSourceNode | null>(null)
  const totalBarsRef = useRef(600)
  const convolverRef = useRef<ConvolverNode | null>(null)
  const delayRef = useRef<DelayNode | null>(null)
  const feedbackRef = useRef<GainNode | null>(null)
  const wetGainRef = useRef<GainNode | null>(null)
  const dryGainRef = useRef<GainNode | null>(null)
  const masterGainRef = useRef<GainNode | null>(null)
  const lowPassFilterRef = useRef<BiquadFilterNode | null>(null)
  const highPassFilterRef = useRef<BiquadFilterNode | null>(null)

  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark")
      setIsDark(isDarkMode)
    }

    checkTheme()

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const container = document.querySelector(".waveform-container")
    if (container) {
      const rect = container.getBoundingClientRect()
      containerWidthRef.current = rect.width
      waveformOffset.current = rect.width
      if (waveformElementRef.current) {
        waveformElementRef.current.style.transform = `translateX(${rect.width}px)`
      }
    }
  }, [])

  useEffect(() => {
    if (precomputedWaveform.length > 0 && containerWidthRef.current > 0) {
      waveformOffset.current = containerWidthRef.current
      if (waveformElementRef.current) {
        waveformElementRef.current.style.transform = `translateX(${containerWidthRef.current}px)`
      }
      if (playerApiRef.current.ref.current) {
        playerApiRef.current.ref.current.currentTime = 0
      }
    }
  }, [precomputedWaveform])

  const precomputeWaveform = useCallback(async (audioUrl: string) => {
    try {
      const response = await fetch(audioUrl)
      const arrayBuffer = await response.arrayBuffer()

      const offlineContext = new OfflineAudioContext(1, 44100 * 5, 44100)
      const audioBuffer = await offlineContext.decodeAudioData(
        arrayBuffer.slice(0)
      )

      if (!audioContextRef.current) {
        const audioContext = new (window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext)()
        audioContextRef.current = audioContext
      }

      audioBufferRef.current =
        await audioContextRef.current.decodeAudioData(arrayBuffer)

      const channelData = audioBuffer.getChannelData(0)
      const samplesPerBar = Math.floor(
        channelData.length / totalBarsRef.current
      )
      const waveformData: number[] = []

      for (let i = 0; i < totalBarsRef.current; i++) {
        const start = i * samplesPerBar
        const end = start + samplesPerBar
        let sum = 0
        let count = 0

        for (let j = start; j < end && j < channelData.length; j += 100) {
          sum += Math.abs(channelData[j])
          count++
        }

        const average = count > 0 ? sum / count : 0
        waveformData.push(Math.min(1, average * 3))
      }

      setPrecomputedWaveform(waveformData)
    } catch (error) {
      console.error("Error precomputing waveform:", error)
    }
  }, [])

  useEffect(() => {
    const track = {
      id: exampleTracks[0].id,
      src: exampleTracks[0].url,
      data: { name: exampleTracks[0].name },
    }
    playerApiRef.current.setActiveItem(track)
    precomputeWaveform(track.src)
  }, [precomputeWaveform])

  const createImpulseResponse = (
    audioContext: AudioContext,
    duration: number,
    decay: number
  ) => {
    const sampleRate = audioContext.sampleRate
    const length = sampleRate * duration
    const impulse = audioContext.createBuffer(2, length, sampleRate)

    for (let channel = 0; channel < 2; channel++) {
      const channelData = impulse.getChannelData(channel)
      for (let i = 0; i < length; i++) {
        const envelope = Math.pow(1 - i / length, decay)
        const earlyReflections = i < length * 0.1 ? Math.random() * 0.5 : 0
        const diffusion = (Math.random() * 2 - 1) * envelope
        const stereoWidth = channel === 0 ? 0.9 : 1.1

        channelData[i] = (diffusion + earlyReflections) * stereoWidth * 0.8
      }
    }
    return impulse
  }

  const setupAudioContext = useCallback((ambience: boolean) => {
    if (!playerApiRef.current.ref.current) {
      return
    }

    if (
      audioContextRef.current &&
      sourceRef.current &&
      wetGainRef.current &&
      dryGainRef.current
    ) {
      return
    }

    try {
      let audioContext = audioContextRef.current
      let source = sourceRef.current
      let analyser = analyserRef.current

      if (!audioContext) {
        audioContext = new (window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext)()
        audioContextRef.current = audioContext
      }

      if (audioContext.state === "suspended") {
        audioContext.resume()
      }

      if (!source) {
        source = audioContext.createMediaElementSource(
          playerApiRef.current.ref.current
        )
        sourceRef.current = source
      }

      if (!analyser) {
        analyser = audioContext.createAnalyser()
        analyser.fftSize = 512
        analyser.smoothingTimeConstant = 0.7
        analyserRef.current = analyser
      }

      const convolver = audioContext.createConvolver()
      convolver.buffer = createImpulseResponse(audioContext, 6, 1.5)

      const delay = audioContext.createDelay(2)
      delay.delayTime.value = 0.001

      const feedback = audioContext.createGain()
      feedback.gain.value = 0.05

      const lowPassFilter = audioContext.createBiquadFilter()
      lowPassFilter.type = "lowpass"
      lowPassFilter.frequency.value = 1500
      lowPassFilter.Q.value = 0.5

      const highPassFilter = audioContext.createBiquadFilter()
      highPassFilter.type = "highpass"
      highPassFilter.frequency.value = 100
      highPassFilter.Q.value = 0.7

      const wetGain = audioContext.createGain()
      wetGain.gain.value = ambience ? 0.85 : 0

      const dryGain = audioContext.createGain()
      dryGain.gain.value = ambience ? 0.4 : 1

      const masterGain = audioContext.createGain()
      masterGain.gain.value = 1

      const compressor = audioContext.createDynamicsCompressor()
      compressor.threshold.value = -12
      compressor.knee.value = 2
      compressor.ratio.value = 8
      compressor.attack.value = 0.003
      compressor.release.value = 0.1

      try {
        source.disconnect()
        if (analyserRef.current) analyserRef.current.disconnect()
      } catch (e) {}

      source.connect(dryGain)
      dryGain.connect(masterGain)

      source.connect(highPassFilter)
      highPassFilter.connect(convolver)
      convolver.connect(delay)

      delay.connect(feedback)
      feedback.connect(lowPassFilter)
      lowPassFilter.connect(delay)

      delay.connect(wetGain)
      wetGain.connect(masterGain)

      masterGain.connect(compressor)
      compressor.connect(analyser)
      analyser.connect(audioContext.destination)

      convolverRef.current = convolver
      delayRef.current = delay
      feedbackRef.current = feedback
      wetGainRef.current = wetGain
      dryGainRef.current = dryGain
      masterGainRef.current = masterGain
      lowPassFilterRef.current = lowPassFilter
      highPassFilterRef.current = highPassFilter
    } catch (error) {
      console.error("Error setting up audio context:", error)
    }
  }, [])

  useEffect(() => {
    const handlePlay = () => {
      isPlayingRef.current = true
      globalAudioState.isPlaying = true

      if (!analyserRef.current) {
        setTimeout(() => {
          setupAudioContext(ambienceMode)
        }, 100)
      }
    }
    const handlePause = () => {
      isPlayingRef.current = false
      globalAudioState.isPlaying = false
    }

    const checkInterval = setInterval(() => {
      const audioEl = playerApiRef.current.ref.current
      if (audioEl) {
        clearInterval(checkInterval)

        audioEl.addEventListener("play", handlePlay)
        audioEl.addEventListener("pause", handlePause)
        audioEl.addEventListener("ended", handlePause)

        if (!audioEl.paused) {
          handlePlay()
        }
      }
    }, 100)

    return () => {
      clearInterval(checkInterval)
      const audioEl = playerApiRef.current.ref.current
      if (audioEl) {
        audioEl.removeEventListener("play", handlePlay)
        audioEl.removeEventListener("pause", handlePause)
        audioEl.removeEventListener("ended", handlePause)
      }
    }
  }, [ambienceMode, setupAudioContext])

  useEffect(() => {
    globalAudioState.isDark = isDark
  }, [isDark])

  useEffect(() => {
    if (playerApiRef.current.ref.current) {
      playerApiRef.current.ref.current.volume = volume
    }
    globalAudioState.volume = volume
  }, [volume])

  useEffect(() => {
    if (!audioContextRef.current) {
      return
    }

    const targetWet = ambienceMode ? 0.7 : 0
    const targetDry = ambienceMode ? 0.5 : 1
    const currentTime = audioContextRef.current.currentTime

    if (wetGainRef.current && dryGainRef.current) {
      wetGainRef.current.gain.cancelScheduledValues(currentTime)
      dryGainRef.current.gain.cancelScheduledValues(currentTime)

      wetGainRef.current.gain.setValueAtTime(
        wetGainRef.current.gain.value,
        currentTime
      )
      dryGainRef.current.gain.setValueAtTime(
        dryGainRef.current.gain.value,
        currentTime
      )

      wetGainRef.current.gain.linearRampToValueAtTime(
        targetWet,
        currentTime + 0.5
      )
      dryGainRef.current.gain.linearRampToValueAtTime(
        targetDry,
        currentTime + 0.5
      )
    }

    if (feedbackRef.current) {
      feedbackRef.current.gain.cancelScheduledValues(currentTime)
      feedbackRef.current.gain.setValueAtTime(
        feedbackRef.current.gain.value,
        currentTime
      )
      feedbackRef.current.gain.linearRampToValueAtTime(
        ambienceMode ? 0.25 : 0.05,
        currentTime + 0.5
      )
    }

    if (delayRef.current) {
      delayRef.current.delayTime.cancelScheduledValues(currentTime)
      delayRef.current.delayTime.setValueAtTime(
        delayRef.current.delayTime.value,
        currentTime
      )
      delayRef.current.delayTime.linearRampToValueAtTime(
        ambienceMode ? 0.25 : 0.001,
        currentTime + 0.5
      )
    }

    if (lowPassFilterRef.current) {
      lowPassFilterRef.current.frequency.cancelScheduledValues(currentTime)
      lowPassFilterRef.current.frequency.setValueAtTime(
        lowPassFilterRef.current.frequency.value,
        currentTime
      )
      lowPassFilterRef.current.frequency.linearRampToValueAtTime(
        ambienceMode ? 800 : 1500,
        currentTime + 0.5
      )
      lowPassFilterRef.current.Q.linearRampToValueAtTime(
        ambienceMode ? 0.7 : 0.5,
        currentTime + 0.5
      )
    }

    if (highPassFilterRef.current) {
      highPassFilterRef.current.frequency.cancelScheduledValues(currentTime)
      highPassFilterRef.current.frequency.setValueAtTime(
        highPassFilterRef.current.frequency.value,
        currentTime
      )
      highPassFilterRef.current.frequency.linearRampToValueAtTime(
        ambienceMode ? 200 : 100,
        currentTime + 0.5
      )
    }

    if (masterGainRef.current) {
      masterGainRef.current.gain.cancelScheduledValues(currentTime)
      masterGainRef.current.gain.setValueAtTime(
        masterGainRef.current.gain.value,
        currentTime
      )
      masterGainRef.current.gain.linearRampToValueAtTime(
        ambienceMode ? 1.2 : 1,
        currentTime + 0.5
      )
    }
  }, [ambienceMode])

  useEffect(() => {
    if (!isScrubbing && !isMomentumActive && playerApiRef.current.ref.current) {
      let animationId: number

      const updatePosition = () => {
        const audioEl = playerApiRef.current.ref.current
        if (
          audioEl &&
          !isScrubbing &&
          !isMomentumActive &&
          waveformElementRef.current
        ) {
          const duration = audioEl.duration
          const currentTime = audioEl.currentTime
          if (!isNaN(duration) && duration > 0) {
            const position = currentTime / duration
            const containerWidth = containerWidthRef.current
            const totalWidth = totalBarsRef.current * 5
            const newOffset = containerWidth - position * totalWidth
            waveformOffset.current = newOffset
            waveformElementRef.current.style.transform = `translateX(${newOffset}px)`
          }
        }
        animationId = requestAnimationFrame(updatePosition)
      }

      animationId = requestAnimationFrame(updatePosition)
      return () => cancelAnimationFrame(animationId)
    }
  }, [isScrubbing, isMomentumActive])

  useEffect(() => {
    let animationId: number

    const updateWaveform = () => {
      if (analyserRef.current && isPlayingRef.current) {
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)
        analyserRef.current.getByteFrequencyData(dataArray)

        const normalizedData = Array.from(dataArray).map((value) => {
          const normalized = value / 255
          return normalized
        })

        audioDataRef.current = normalizedData
      } else if (!isPlayingRef.current && audioDataRef.current.length > 0) {
        audioDataRef.current = audioDataRef.current.map((v) => v * 0.9)
      }

      animationId = requestAnimationFrame(updateWaveform)
    }

    animationId = requestAnimationFrame(updateWaveform)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  const playTrack = useCallback(
    (index: number) => {
      setCurrentTrackIndex(index)
      const track = {
        id: exampleTracks[index].id,
        src: exampleTracks[index].url,
        data: { name: exampleTracks[index].name },
      }
      playerApiRef.current.play(track)
      setShowTrackList(false)
      precomputeWaveform(track.src)
    },
    [precomputeWaveform]
  )

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % exampleTracks.length
    playTrack(nextIndex)
  }

  const prevTrack = () => {
    const prevIndex =
      (currentTrackIndex - 1 + exampleTracks.length) % exampleTracks.length
    playTrack(prevIndex)
  }

  const playScratchSound = (position: number, speed: number = 1) => {
    if (!audioContextRef.current) {
      const audioContext = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)()
      audioContextRef.current = audioContext
    }

    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume()
    }

    if (!audioBufferRef.current) {
      return
    }

    stopScratchSound()

    try {
      const source = audioContextRef.current.createBufferSource()
      source.buffer = audioBufferRef.current

      const startTime = Math.max(
        0,
        Math.min(
          audioBufferRef.current.duration - 0.1,
          position * audioBufferRef.current.duration
        )
      )

      const filter = audioContextRef.current.createBiquadFilter()
      filter.type = "lowpass"
      filter.frequency.value = Math.max(800, 2500 - speed * 1500)
      filter.Q.value = 3

      source.playbackRate.value = Math.max(0.4, Math.min(2.5, 1 + speed * 0.5))

      const gainNode = audioContextRef.current.createGain()
      gainNode.gain.value = 1.0

      source.connect(filter)
      filter.connect(gainNode)
      gainNode.connect(audioContextRef.current.destination)

      source.start(0, startTime, 0.06)

      scratchBufferRef.current = source
    } catch (error) {
      console.error("Error playing scratch sound:", error)
    }
  }

  const stopScratchSound = () => {
    if (scratchBufferRef.current) {
      try {
        scratchBufferRef.current.stop()
      } catch {}
      scratchBufferRef.current = null
    }
  }

  const tracks = exampleTracks.map((t) => ({
    id: t.id,
    title: t.name,
    artist: "ElevenLabs Music",
  }))
  const currentTrack = tracks[currentTrackIndex]

  return (
    <Card className={cn("relative", className)}>
      <div className="bg-muted-foreground/30 absolute top-0 left-1/2 h-3 w-48 -translate-x-1/2 rounded-b-full" />
      <div className="bg-muted-foreground/20 absolute top-0 left-1/2 h-2 w-44 -translate-x-1/2 rounded-b-full" />

      <div className="relative space-y-6 p-4">
        <div className="border-border rounded-lg border bg-black/5 p-4 backdrop-blur-sm dark:bg-black/50">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <h3 className="text-foreground truncate text-sm font-medium">
                  {currentTrack.title}
                </h3>
                <Link
                  href="https://elevenlabs.io/music"
                  className="text-muted-foreground truncate text-xs"
                >
                  {currentTrack.artist}
                </Link>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-8 w-8 transition-all",
                    ambienceMode
                      ? "text-primary hover:text-primary/80"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setAmbienceMode(!ambienceMode)}
                >
                  <Sparkles className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground h-8 w-8"
                  onClick={() => setShowTrackList(!showTrackList)}
                >
                  <Music className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div
              className="waveform-container bg-foreground/10 relative h-12 cursor-grab overflow-hidden rounded-lg p-2 active:cursor-grabbing dark:bg-black/80"
              onTouchStart={(e) => {
                e.preventDefault()
                setIsScrubbing(true)

                const wasPlaying = isPlayingRef.current

                if (isPlayingRef.current) {
                  playerApiRef.current.pause()
                }

                const rect = e.currentTarget.getBoundingClientRect()
                const startX = e.touches[0].clientX
                const containerWidth = rect.width
                containerWidthRef.current = containerWidth
                const totalWidth = totalBarsRef.current * 5
                const currentOffset = waveformOffset.current
                let lastTouchX = startX
                let lastScratchTime = 0
                const scratchThrottle = 10

                let velocity = 0
                let lastTime = Date.now()
                let lastClientX = e.touches[0].clientX

                const handleMove = (e: TouchEvent) => {
                  const touch = e.touches[0]
                  const deltaX = touch.clientX - startX
                  const newOffset = currentOffset + deltaX

                  const minOffset = containerWidth - totalWidth
                  const maxOffset = containerWidth
                  const clampedOffset = Math.max(
                    minOffset,
                    Math.min(maxOffset, newOffset)
                  )
                  waveformOffset.current = clampedOffset
                  if (waveformElementRef.current) {
                    waveformElementRef.current.style.transform = `translateX(${clampedOffset}px)`
                  }

                  const position = Math.max(
                    0,
                    Math.min(1, (containerWidth - clampedOffset) / totalWidth)
                  )

                  const audioEl = playerApiRef.current.ref.current
                  if (audioEl && !isNaN(audioEl.duration)) {
                    audioEl.currentTime = position * audioEl.duration
                  }

                  const now = Date.now()
                  const touchDelta = touch.clientX - lastTouchX

                  const timeDelta = now - lastTime
                  if (timeDelta > 0) {
                    const instantVelocity =
                      (touch.clientX - lastClientX) / timeDelta
                    velocity = velocity * 0.6 + instantVelocity * 0.4
                  }
                  lastTime = now
                  lastClientX = touch.clientX

                  if (Math.abs(touchDelta) > 0) {
                    if (now - lastScratchTime >= scratchThrottle) {
                      const speed = Math.min(3, Math.abs(touchDelta) / 3)
                      playScratchSound(position, speed)
                      lastScratchTime = now
                    }
                  }
                  lastTouchX = touch.clientX
                }

                const handleEnd = () => {
                  setIsScrubbing(false)
                  stopScratchSound()

                  if (Math.abs(velocity) > 0.1) {
                    setIsMomentumActive(true)
                    let momentumOffset = waveformOffset.current
                    let currentVelocity = velocity * 15
                    const friction = 0.92
                    const minVelocity = 0.5
                    let lastScratchFrame = 0
                    const scratchFrameInterval = 50

                    const animateMomentum = () => {
                      if (Math.abs(currentVelocity) > minVelocity) {
                        momentumOffset += currentVelocity
                        currentVelocity *= friction

                        const minOffset = containerWidth - totalWidth
                        const maxOffset = containerWidth
                        const clampedOffset = Math.max(
                          minOffset,
                          Math.min(maxOffset, momentumOffset)
                        )

                        if (clampedOffset !== momentumOffset) {
                          currentVelocity = 0
                        }

                        momentumOffset = clampedOffset
                        waveformOffset.current = clampedOffset
                        if (waveformElementRef.current) {
                          waveformElementRef.current.style.transform = `translateX(${clampedOffset}px)`
                        }

                        const position = Math.max(
                          0,
                          Math.min(
                            1,
                            (containerWidth - clampedOffset) / totalWidth
                          )
                        )

                        const audioEl2 = playerApiRef.current.ref.current
                        if (audioEl2 && !isNaN(audioEl2.duration)) {
                          audioEl2.currentTime = position * audioEl2.duration
                        }

                        const now = Date.now()
                        if (now - lastScratchFrame >= scratchFrameInterval) {
                          const speed = Math.min(
                            2.5,
                            Math.abs(currentVelocity) / 10
                          )
                          if (speed > 0.1) {
                            playScratchSound(position, speed)
                          }
                          lastScratchFrame = now
                        }

                        requestAnimationFrame(animateMomentum)
                      } else {
                        stopScratchSound()
                        setIsMomentumActive(false)
                        if (wasPlaying) {
                          setTimeout(() => {
                            playerApiRef.current.play()
                          }, 10)
                        }
                      }
                    }

                    requestAnimationFrame(animateMomentum)
                  } else {
                    if (wasPlaying) {
                      playerApiRef.current.play()
                    }
                  }

                  document.removeEventListener("touchmove", handleMove)
                  document.removeEventListener("touchend", handleEnd)
                }

                document.addEventListener("touchmove", handleMove)
                document.addEventListener("touchend", handleEnd)
              }}
              onMouseDown={(e) => {
                e.preventDefault()
                setIsScrubbing(true)

                const wasPlaying = isPlayingRef.current

                if (isPlayingRef.current) {
                  playerApiRef.current.pause()
                }

                const rect = e.currentTarget.getBoundingClientRect()
                const startX = e.clientX
                const containerWidth = rect.width
                containerWidthRef.current = containerWidth
                const totalWidth = totalBarsRef.current * 5
                const currentOffset = waveformOffset.current
                let lastMouseX = startX
                let lastScratchTime = 0
                const scratchThrottle = 10

                let velocity = 0
                let lastTime = Date.now()
                let lastClientX = e.clientX

                const handleMove = (e: MouseEvent) => {
                  const deltaX = e.clientX - startX
                  const newOffset = currentOffset + deltaX

                  const minOffset = containerWidth - totalWidth
                  const maxOffset = containerWidth
                  const clampedOffset = Math.max(
                    minOffset,
                    Math.min(maxOffset, newOffset)
                  )
                  waveformOffset.current = clampedOffset
                  if (waveformElementRef.current) {
                    waveformElementRef.current.style.transform = `translateX(${clampedOffset}px)`
                  }

                  const position = Math.max(
                    0,
                    Math.min(1, (containerWidth - clampedOffset) / totalWidth)
                  )

                  const audioEl = playerApiRef.current.ref.current
                  if (audioEl && !isNaN(audioEl.duration)) {
                    audioEl.currentTime = position * audioEl.duration
                  }

                  const now = Date.now()
                  const mouseDelta = e.clientX - lastMouseX

                  const timeDelta = now - lastTime
                  if (timeDelta > 0) {
                    const instantVelocity =
                      (e.clientX - lastClientX) / timeDelta
                    velocity = velocity * 0.6 + instantVelocity * 0.4
                  }
                  lastTime = now
                  lastClientX = e.clientX

                  if (Math.abs(mouseDelta) > 0) {
                    if (now - lastScratchTime >= scratchThrottle) {
                      const speed = Math.min(3, Math.abs(mouseDelta) / 3)
                      playScratchSound(position, speed)
                      lastScratchTime = now
                    }
                  }
                  lastMouseX = e.clientX
                }

                const handleUp = () => {
                  setIsScrubbing(false)
                  stopScratchSound()

                  if (Math.abs(velocity) > 0.1) {
                    setIsMomentumActive(true)
                    let momentumOffset = waveformOffset.current
                    let currentVelocity = velocity * 15
                    const friction = 0.92
                    const minVelocity = 0.5
                    let lastScratchFrame = 0
                    const scratchFrameInterval = 50

                    const animateMomentum = () => {
                      if (Math.abs(currentVelocity) > minVelocity) {
                        momentumOffset += currentVelocity
                        currentVelocity *= friction

                        const minOffset = containerWidth - totalWidth
                        const maxOffset = containerWidth
                        const clampedOffset = Math.max(
                          minOffset,
                          Math.min(maxOffset, momentumOffset)
                        )

                        if (clampedOffset !== momentumOffset) {
                          currentVelocity = 0
                        }

                        momentumOffset = clampedOffset
                        waveformOffset.current = clampedOffset
                        if (waveformElementRef.current) {
                          waveformElementRef.current.style.transform = `translateX(${clampedOffset}px)`
                        }

                        const position = Math.max(
                          0,
                          Math.min(
                            1,
                            (containerWidth - clampedOffset) / totalWidth
                          )
                        )

                        const audioEl2 = playerApiRef.current.ref.current
                        if (audioEl2 && !isNaN(audioEl2.duration)) {
                          audioEl2.currentTime = position * audioEl2.duration
                        }

                        const now = Date.now()
                        if (now - lastScratchFrame >= scratchFrameInterval) {
                          const speed = Math.min(
                            2.5,
                            Math.abs(currentVelocity) / 10
                          )
                          if (speed > 0.1) {
                            playScratchSound(position, speed)
                          }
                          lastScratchFrame = now
                        }

                        requestAnimationFrame(animateMomentum)
                      } else {
                        stopScratchSound()
                        setIsMomentumActive(false)
                        if (wasPlaying) {
                          setTimeout(() => {
                            playerApiRef.current.play()
                          }, 10)
                        }
                      }
                    }

                    requestAnimationFrame(animateMomentum)
                  } else {
                    if (wasPlaying) {
                      playerApiRef.current.play()
                    }
                  }

                  document.removeEventListener("mousemove", handleMove)
                  document.removeEventListener("mouseup", handleUp)
                }

                document.addEventListener("mousemove", handleMove)
                document.addEventListener("mouseup", handleUp)
              }}
            >
              <div className="relative h-full w-full overflow-hidden">
                <div
                  ref={waveformElementRef}
                  style={{
                    transform: `translateX(${waveformOffset.current}px)`,
                    transition:
                      isScrubbing || isMomentumActive
                        ? "none"
                        : "transform 0.016s linear",
                    width: `${totalBarsRef.current * 5}px`,
                    position: "absolute",
                    left: 0,
                  }}
                >
                  <Waveform
                    key={isDark ? "dark" : "light"}
                    data={
                      precomputedWaveform.length > 0
                        ? precomputedWaveform
                        : audioDataRef.current
                    }
                    height={32}
                    barWidth={3}
                    barGap={2}
                    fadeEdges={true}
                    fadeWidth={24}
                    barRadius={1}
                    barColor={isDark ? "#a1a1aa" : "#71717a"}
                  />
                </div>
              </div>
            </div>

            <TimeDisplay />
          </div>
        </div>

        {showTrackList && (
          <div className="bg-card/95 border-border absolute top-36 right-8 left-8 z-10 rounded-lg border p-3 shadow-xl backdrop-blur">
            <h4 className="text-muted-foreground mb-2 font-mono text-xs tracking-wider uppercase">
              Playlist
            </h4>
            <div className="max-h-32 space-y-1 overflow-y-auto">
              {tracks.map((track, index) => (
                <button
                  key={track.id}
                  onClick={() => playTrack(index)}
                  className={cn(
                    "w-full rounded px-2 py-1 text-left text-xs transition-all",
                    currentTrackIndex === index
                      ? "bg-foreground/10 text-foreground dark:bg-primary/20 dark:text-primary"
                      : "hover:bg-muted text-muted-foreground"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground/60">
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate">{track.title}</div>
                      <div className="text-muted-foreground/60 truncate text-xs">
                        {track.artist}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="border-border bg-background hover:bg-muted h-10 w-10 rounded-full"
            onClick={prevTrack}
          >
            <SkipBack className="text-muted-foreground h-4 w-4" />
          </Button>

          <PlayButton currentTrackIndex={currentTrackIndex} />

          <Button
            variant="outline"
            size="icon"
            className="border-border bg-background hover:bg-muted h-10 w-10 rounded-full"
            onClick={nextTrack}
          >
            <SkipForward className="text-muted-foreground h-4 w-4" />
          </Button>
        </div>

        <SpeakerOrbsSection isDark={isDark} audioDataRef={audioDataRef} />

        <VolumeSlider volume={volume} setVolume={setVolume} />
      </div>
    </Card>
  )
}
