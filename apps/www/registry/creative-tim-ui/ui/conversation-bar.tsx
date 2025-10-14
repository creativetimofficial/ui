"use client"

import * as React from "react"
import { useConversation } from "@elevenlabs/react"
import {
  ArrowUpIcon,
  ChevronDown,
  Keyboard,
  Mic,
  MicOff,
  PhoneIcon,
  XIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/elevenlabs-ui/ui/button"
import { Card } from "@/registry/elevenlabs-ui/ui/card"
import { LiveWaveform } from "@/registry/elevenlabs-ui/ui/live-waveform"
import { Separator } from "@/registry/elevenlabs-ui/ui/separator"
import { Textarea } from "@/registry/elevenlabs-ui/ui/textarea"

export interface ConversationBarProps {
  /**
   * ElevenLabs Agent ID to connect to
   */
  agentId: string

  /**
   * Custom className for the container
   */
  className?: string

  /**
   * Custom className for the waveform
   */
  waveformClassName?: string

  /**
   * Callback when conversation connects
   */
  onConnect?: () => void

  /**
   * Callback when conversation disconnects
   */
  onDisconnect?: () => void

  /**
   * Callback when an error occurs
   */
  onError?: (error: Error) => void

  /**
   * Callback when a message is received
   */
  onMessage?: (message: { source: "user" | "ai"; message: string }) => void

  /**
   * Callback when user sends a message
   */
  onSendMessage?: (message: string) => void
}

export const ConversationBar = React.forwardRef<
  HTMLDivElement,
  ConversationBarProps
>(
  (
    {
      agentId,
      className,
      waveformClassName,
      onConnect,
      onDisconnect,
      onError,
      onMessage,
      onSendMessage,
    },
    ref
  ) => {
    const [isMuted, setIsMuted] = React.useState(false)
    const [agentState, setAgentState] = React.useState<
      "disconnected" | "connecting" | "connected" | "disconnecting" | null
    >("disconnected")
    const [keyboardOpen, setKeyboardOpen] = React.useState(false)
    const [textInput, setTextInput] = React.useState("")
    const mediaStreamRef = React.useRef<MediaStream | null>(null)

    const conversation = useConversation({
      onConnect: () => {
        onConnect?.()
      },
      onDisconnect: () => {
        setAgentState("disconnected")
        onDisconnect?.()
        setKeyboardOpen(false)
      },
      onMessage: (message) => {
        onMessage?.(message)
      },
      micMuted: isMuted,
      onError: (error: unknown) => {
        console.error("Error:", error)
        setAgentState("disconnected")
        const errorObj =
          error instanceof Error
            ? error
            : new Error(
                typeof error === "string" ? error : JSON.stringify(error)
              )
        onError?.(errorObj)
      },
    })

    const getMicStream = React.useCallback(async () => {
      if (mediaStreamRef.current) return mediaStreamRef.current

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaStreamRef.current = stream

      return stream
    }, [])

    const startConversation = React.useCallback(async () => {
      try {
        setAgentState("connecting")

        await getMicStream()

        await conversation.startSession({
          agentId,
          connectionType: "webrtc",
          onStatusChange: (status) => setAgentState(status.status),
        })
      } catch (error) {
        console.error("Error starting conversation:", error)
        setAgentState("disconnected")
        onError?.(error as Error)
      }
    }, [conversation, getMicStream, agentId, onError])

    const handleEndSession = React.useCallback(() => {
      conversation.endSession()
      setAgentState("disconnected")

      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop())
        mediaStreamRef.current = null
      }
    }, [conversation])

    const toggleMute = React.useCallback(() => {
      setIsMuted((prev) => !prev)
    }, [])

    const handleStartOrEnd = React.useCallback(() => {
      if (agentState === "connected" || agentState === "connecting") {
        handleEndSession()
      } else if (agentState === "disconnected") {
        startConversation()
      }
    }, [agentState, handleEndSession, startConversation])

    const handleSendText = React.useCallback(() => {
      if (!textInput.trim()) return

      const messageToSend = textInput
      conversation.sendUserMessage(messageToSend)
      setTextInput("")
      onSendMessage?.(messageToSend)
    }, [conversation, textInput, onSendMessage])

    const isConnected = agentState === "connected"

    const handleTextChange = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value
        setTextInput(value)

        if (value.trim() && isConnected) {
          conversation.sendContextualUpdate(value)
        }
      },
      [conversation, isConnected]
    )

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault()
          handleSendText()
        }
      },
      [handleSendText]
    )

    React.useEffect(() => {
      return () => {
        if (mediaStreamRef.current) {
          mediaStreamRef.current.getTracks().forEach((t) => t.stop())
        }
      }
    }, [])

    return (
      <div
        ref={ref}
        className={cn("flex w-full items-end justify-center p-4", className)}
      >
        <Card className="m-0 w-full gap-0 border p-0 shadow-lg">
          <div className="flex flex-col-reverse">
            <div>
              {keyboardOpen && <Separator />}
              <div className="flex items-center justify-between gap-2 p-2">
                <div className="h-8 w-[120px] md:h-10">
                  <div
                    className={cn(
                      "flex h-full items-center gap-2 rounded-md py-1",
                      "bg-foreground/5 text-foreground/70"
                    )}
                  >
                    <div className="h-full flex-1">
                      <div
                        className={cn(
                          "relative flex h-full w-full shrink-0 items-center justify-center overflow-hidden rounded-sm",
                          waveformClassName
                        )}
                      >
                        <LiveWaveform
                          key={
                            agentState === "disconnected" ? "idle" : "active"
                          }
                          active={isConnected && !isMuted}
                          processing={agentState === "connecting"}
                          barWidth={3}
                          barGap={1}
                          barRadius={4}
                          fadeEdges={true}
                          fadeWidth={24}
                          sensitivity={1.8}
                          smoothingTimeConstant={0.85}
                          height={20}
                          mode="static"
                          className={cn(
                            "h-full w-full transition-opacity duration-300",
                            agentState === "disconnected" && "opacity-0"
                          )}
                        />
                        {agentState === "disconnected" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-foreground/50 text-[10px] font-medium">
                              Customer Support
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMute}
                    aria-pressed={isMuted}
                    className={cn(isMuted ? "bg-foreground/5" : "")}
                    disabled={!isConnected}
                  >
                    {isMuted ? <MicOff /> : <Mic />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setKeyboardOpen((v) => !v)}
                    aria-pressed={keyboardOpen}
                    className="relative"
                    disabled={!isConnected}
                  >
                    <Keyboard
                      className={
                        "h-5 w-5 transform-gpu transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                        (keyboardOpen
                          ? "scale-75 opacity-0"
                          : "scale-100 opacity-100")
                      }
                    />
                    <ChevronDown
                      className={
                        "absolute inset-0 m-auto h-5 w-5 transform-gpu transition-all delay-50 duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] " +
                        (keyboardOpen
                          ? "scale-100 opacity-100"
                          : "scale-75 opacity-0")
                      }
                    />
                  </Button>
                  <Separator orientation="vertical" className="mx-1 -my-2.5" />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleStartOrEnd}
                    disabled={agentState === "disconnecting"}
                  >
                    {isConnected || agentState === "connecting" ? (
                      <XIcon className="h-5 w-5" />
                    ) : (
                      <PhoneIcon className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-out",
                keyboardOpen ? "max-h-[120px]" : "max-h-0"
              )}
            >
              <div className="relative px-2 pt-2 pb-2">
                <Textarea
                  value={textInput}
                  onChange={handleTextChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your message..."
                  className="min-h-[100px] resize-none border-0 pr-12 shadow-none focus-visible:ring-0"
                  disabled={!isConnected}
                />
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleSendText}
                  disabled={!textInput.trim() || !isConnected}
                  className="absolute right-3 bottom-3 h-8 w-8"
                >
                  <ArrowUpIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }
)

ConversationBar.displayName = "ConversationBar"
