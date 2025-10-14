"use client"

import * as React from "react"
import { CheckIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/elevenlabs-ui/ui/button"
import { LiveWaveform } from "@/registry/elevenlabs-ui/ui/live-waveform"

export type VoiceButtonState =
  | "idle"
  | "recording"
  | "processing"
  | "success"
  | "error"

export interface VoiceButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onError"> {
  /**
   * Current state of the voice button
   * @default "idle"
   */
  state?: VoiceButtonState

  /**
   * Callback when button is clicked
   */
  onPress?: () => void

  /**
   * Content to display on the left side (label)
   * Can be a string or ReactNode for custom components
   */
  label?: React.ReactNode

  /**
   * Content to display on the right side (e.g., keyboard shortcut)
   * Can be a string or ReactNode for custom components
   * @example "⌥Space" or <kbd>⌘K</kbd>
   */
  trailing?: React.ReactNode

  /**
   * Icon to display in the center when idle (for icon size buttons)
   */
  icon?: React.ReactNode

  /**
   * Custom variant for the button
   * @default "outline"
   */
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"

  /**
   * Size of the button
   * @default "default"
   */
  size?: "default" | "sm" | "lg" | "icon"

  /**
   * Custom className for the button
   */
  className?: string

  /**
   * Custom className for the waveform container
   */
  waveformClassName?: string

  /**
   * Duration in ms to show success/error states
   * @default 1500
   */
  feedbackDuration?: number

  /**
   * Disable the button
   */
  disabled?: boolean
}

export const VoiceButton = React.forwardRef<
  HTMLButtonElement,
  VoiceButtonProps
>(
  (
    {
      state = "idle",
      onPress,
      label,
      trailing,
      icon,
      variant = "outline",
      size = "default",
      className,
      waveformClassName,
      feedbackDuration = 1500,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const [showFeedback, setShowFeedback] = React.useState(false)

    React.useEffect(() => {
      if (state === "success" || state === "error") {
        setShowFeedback(true)
        const timeout = setTimeout(
          () => setShowFeedback(false),
          feedbackDuration
        )
        return () => clearTimeout(timeout)
      } else {
        // Reset feedback when state changes away from success/error
        setShowFeedback(false)
      }
    }, [state, feedbackDuration])

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      onPress?.()
    }

    const isRecording = state === "recording"
    const isProcessing = state === "processing"
    const isSuccess = state === "success"
    const isError = state === "error"

    const buttonVariant = variant
    const isDisabled = disabled || isProcessing

    const displayLabel = label

    const shouldShowWaveform = isRecording || isProcessing || showFeedback
    const shouldShowTrailing = !shouldShowWaveform && trailing

    return (
      <Button
        ref={ref}
        type="button"
        variant={buttonVariant}
        size={size}
        onClick={handleClick}
        disabled={isDisabled}
        className={cn(
          "gap-2 transition-all duration-200",
          size === "icon" && "relative",
          className
        )}
        aria-label={"Voice Button"}
        {...props}
      >
        {size !== "icon" && displayLabel && (
          <span className="inline-flex shrink-0 items-center justify-start">
            {displayLabel}
          </span>
        )}

        <div
          className={cn(
            "relative flex shrink-0 items-center justify-center overflow-hidden transition-all duration-300",
            size === "icon"
              ? "absolute inset-0 rounded-sm border-0"
              : "h-5 w-24 rounded-sm border",
            isRecording
              ? "bg-primary/10 dark:bg-primary/5"
              : size === "icon"
                ? "bg-muted/50 border-0"
                : "border-border bg-muted/50",
            waveformClassName
          )}
        >
          {shouldShowWaveform && (
            <LiveWaveform
              active={isRecording}
              processing={isProcessing || isSuccess}
              barWidth={2}
              barGap={1}
              barRadius={4}
              fadeEdges={false}
              sensitivity={1.8}
              smoothingTimeConstant={0.85}
              height={20}
              mode="static"
              className="animate-in fade-in absolute inset-0 h-full w-full duration-300"
            />
          )}

          {shouldShowTrailing && (
            <div className="animate-in fade-in absolute inset-0 flex items-center justify-center duration-300">
              {typeof trailing === "string" ? (
                <span className="text-muted-foreground px-1.5 font-mono text-[10px] font-medium select-none">
                  {trailing}
                </span>
              ) : (
                trailing
              )}
            </div>
          )}

          {!shouldShowWaveform &&
            !shouldShowTrailing &&
            icon &&
            size === "icon" && (
              <div className="animate-in fade-in absolute inset-0 flex items-center justify-center duration-300">
                {icon}
              </div>
            )}

          {isSuccess && showFeedback && (
            <div className="animate-in fade-in bg-background/80 absolute inset-0 flex items-center justify-center duration-300">
              <span className="text-primary text-[10px] font-medium">
                <CheckIcon className="size-3.5" />
              </span>
            </div>
          )}

          {/* Error Icon */}
          {isError && showFeedback && (
            <div className="animate-in fade-in bg-background/80 absolute inset-0 flex items-center justify-center duration-300">
              <span className="text-destructive text-[10px] font-medium">
                <XIcon className="size-3.5" />
              </span>
            </div>
          )}
        </div>
      </Button>
    )
  }
)

VoiceButton.displayName = "VoiceButton"
