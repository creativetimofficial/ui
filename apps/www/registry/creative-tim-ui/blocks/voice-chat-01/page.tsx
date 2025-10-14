"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { ComponentProps } from "react"
import { useConversation } from "@elevenlabs/react"
import {
  AudioLinesIcon,
  CheckIcon,
  CopyIcon,
  PhoneOffIcon,
  SendIcon,
} from "lucide-react"

import { cn } from "@/registry/elevenlabs-ui/lib/utils"
import { Button } from "@/registry/elevenlabs-ui/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/elevenlabs-ui/ui/card"
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/registry/elevenlabs-ui/ui/conversation"
import { Input } from "@/registry/elevenlabs-ui/ui/input"
import { Message, MessageContent } from "@/registry/elevenlabs-ui/ui/message"
import { Orb } from "@/registry/elevenlabs-ui/ui/orb"
import { Response } from "@/registry/elevenlabs-ui/ui/response"
import { ShimmeringText } from "@/registry/elevenlabs-ui/ui/shimmering-text"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/elevenlabs-ui/ui/tooltip"

type SystemMessageType = "initial" | "connecting" | "connected" | "error"

interface ChatMessage {
  role: "user" | "assistant"
  content: string
  timestamp?: Date
  type?: SystemMessageType
}

const DEFAULT_AGENT = {
  agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!,
  name: "Customer Support",
  description: "AI Voice Assistant",
}

type ChatActionsProps = ComponentProps<"div">

const ChatActions = ({ className, children, ...props }: ChatActionsProps) => (
  <div className={cn("flex items-center gap-1", className)} {...props}>
    {children}
  </div>
)

type ChatActionProps = ComponentProps<typeof Button> & {
  tooltip?: string
  label?: string
}

const ChatAction = ({
  tooltip,
  children,
  label,
  className,
  variant = "ghost",
  size = "sm",
  ...props
}: ChatActionProps) => {
  const button = (
    <Button
      className={cn(
        "text-muted-foreground hover:text-foreground relative size-9 p-1.5",
        className
      )}
      size={size}
      type="button"
      variant={variant}
      {...props}
    >
      {children}
      <span className="sr-only">{label || tooltip}</span>
    </Button>
  )

  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{button}</TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return button
}

export default function Page() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [agentState, setAgentState] = useState<
    "disconnected" | "connecting" | "connected" | "disconnecting" | null
  >("disconnected")
  const [textInput, setTextInput] = useState("")
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const mediaStreamRef = useRef<MediaStream | null>(null)
  const isTextOnlyModeRef = useRef<boolean>(true)

  const conversation = useConversation({
    onConnect: () => {
      // Only clear messages for voice mode
      if (!isTextOnlyModeRef.current) {
        setMessages([])
      }
    },
    onDisconnect: () => {
      // Only clear messages for voice mode
      if (!isTextOnlyModeRef.current) {
        setMessages([])
      }
    },
    onMessage: (message) => {
      if (message.message) {
        const newMessage: ChatMessage = {
          role: message.source === "user" ? "user" : "assistant",
          content: message.message,
        }
        setMessages((prev) => [...prev, newMessage])
      }
    },
    onError: (error) => {
      console.error("Error:", error)
      setAgentState("disconnected")
    },
    onDebug: (debug) => {
      console.log("Debug:", debug)
    },
  })

  const getMicStream = useCallback(async () => {
    if (mediaStreamRef.current) return mediaStreamRef.current

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaStreamRef.current = stream
      setErrorMessage(null)
      return stream
    } catch (error) {
      if (error instanceof DOMException && error.name === "NotAllowedError") {
        setErrorMessage("Please enable microphone permissions in your browser.")
      }
      throw error
    }
  }, [])

  const startConversation = useCallback(
    async (
      textOnly: boolean = true,
      skipConnectingMessage: boolean = false
    ) => {
      try {
        isTextOnlyModeRef.current = textOnly

        if (!skipConnectingMessage) {
          setMessages([])
        }

        if (!textOnly) {
          await getMicStream()
        }

        await conversation.startSession({
          agentId: DEFAULT_AGENT.agentId,
          connectionType: textOnly ? "websocket" : "webrtc",
          overrides: {
            conversation: {
              textOnly: textOnly,
            },
            agent: {
              firstMessage: textOnly ? "" : undefined,
            },
          },
          onStatusChange: (status) => setAgentState(status.status),
        })
      } catch (error) {
        console.error(error)
        setAgentState("disconnected")
        setMessages([])
      }
    },
    [conversation, getMicStream]
  )

  const handleCall = useCallback(async () => {
    if (agentState === "disconnected" || agentState === null) {
      setAgentState("connecting")
      try {
        await startConversation(false)
      } catch {
        setAgentState("disconnected")
      }
    } else if (agentState === "connected") {
      conversation.endSession()
      setAgentState("disconnected")

      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop())
        mediaStreamRef.current = null
      }
    }
  }, [agentState, conversation, startConversation])

  const handleTextInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTextInput(e.target.value)
    },
    []
  )

  const handleSendText = useCallback(async () => {
    if (!textInput.trim()) return

    const messageToSend = textInput

    if (agentState === "disconnected" || agentState === null) {
      const userMessage: ChatMessage = {
        role: "user",
        content: messageToSend,
      }
      setTextInput("")
      setAgentState("connecting")

      setMessages([userMessage])

      try {
        await startConversation(true, true)
        // Send message after connection is established
        conversation.sendUserMessage(messageToSend)
      } catch (error) {
        console.error("Failed to start conversation:", error)
      }
    } else if (agentState === "connected") {
      const newMessage: ChatMessage = {
        role: "user",
        content: messageToSend,
      }
      setMessages((prev) => [...prev, newMessage])
      setTextInput("")

      conversation.sendUserMessage(messageToSend)
    }
  }, [textInput, agentState, conversation, startConversation])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSendText()
      }
    },
    [handleSendText]
  )

  useEffect(() => {
    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop())
      }
    }
  }, [])

  const isCallActive = agentState === "connected"
  const isTransitioning =
    agentState === "connecting" || agentState === "disconnecting"

  const getInputVolume = useCallback(() => {
    const rawValue = conversation.getInputVolume?.() ?? 0
    return Math.min(1.0, Math.pow(rawValue, 0.5) * 2.5)
  }, [conversation])

  const getOutputVolume = useCallback(() => {
    const rawValue = conversation.getOutputVolume?.() ?? 0
    return Math.min(1.0, Math.pow(rawValue, 0.5) * 2.5)
  }, [conversation])

  return (
    <Card
      className={cn(
        "mx-auto flex h-[380px] w-full flex-col gap-0 overflow-hidden"
      )}
    >
      <CardHeader className="flex shrink-0 flex-row items-center justify-between pb-4">
        <div className="flex items-center gap-4">
          <div className="ring-border relative size-10 overflow-hidden rounded-full ring-1">
            <Orb
              className="h-full w-full"
              volumeMode="manual"
              getInputVolume={getInputVolume}
              getOutputVolume={getOutputVolume}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm leading-none font-medium">
              {DEFAULT_AGENT.name}
            </p>
            <div className="flex items-center gap-2">
              {errorMessage ? (
                <p className="text-destructive text-xs">{errorMessage}</p>
              ) : agentState === "disconnected" || agentState === null ? (
                <p className="text-muted-foreground text-xs">
                  Tap to start voice chat
                </p>
              ) : agentState === "connected" ? (
                <p className="text-xs text-green-600">Connected</p>
              ) : isTransitioning ? (
                <ShimmeringText
                  text={agentState}
                  className="text-xs capitalize"
                />
              ) : null}
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex h-2 w-2 rounded-full transition-all duration-300",
            agentState === "connected" &&
              "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]",
            isTransitioning && "animate-pulse bg-white/40"
          )}
        />
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden p-0">
        <Conversation className="h-full">
          <ConversationContent className="flex min-w-0 flex-col gap-2 p-6 pb-2">
            {messages.length === 0 ? (
              <ConversationEmptyState
                icon={<Orb className="size-12" />}
                title={
                  agentState === "connecting" ? (
                    <ShimmeringText text="Starting conversation" />
                  ) : agentState === "connected" ? (
                    <ShimmeringText text="Start talking or type" />
                  ) : (
                    "Start a conversation"
                  )
                }
                description={
                  agentState === "connecting"
                    ? "Connecting..."
                    : agentState === "connected"
                      ? "Ready to chat"
                      : "Type a message or tap the voice button"
                }
              />
            ) : (
              messages.map((message, index) => {
                return (
                  <div key={index} className="flex w-full flex-col gap-1">
                    <Message from={message.role}>
                      <MessageContent className="max-w-full min-w-0">
                        <Response className="w-auto [overflow-wrap:anywhere] whitespace-pre-wrap">
                          {message.content}
                        </Response>
                      </MessageContent>
                      {message.role === "assistant" && (
                        <div className="ring-border size-6 flex-shrink-0 self-end overflow-hidden rounded-full ring-1">
                          <Orb
                            className="h-full w-full"
                            agentState={
                              isCallActive && index === messages.length - 1
                                ? "talking"
                                : null
                            }
                          />
                        </div>
                      )}
                    </Message>
                    {message.role === "assistant" && (
                      <ChatActions>
                        <ChatAction
                          size="sm"
                          tooltip={copiedIndex === index ? "Copied!" : "Copy"}
                          onClick={() => {
                            navigator.clipboard.writeText(message.content)
                            setCopiedIndex(index)
                            setTimeout(() => setCopiedIndex(null), 2000)
                          }}
                        >
                          {copiedIndex === index ? (
                            <CheckIcon className="size-4" />
                          ) : (
                            <CopyIcon className="size-4" />
                          )}
                        </ChatAction>
                      </ChatActions>
                    )}
                  </div>
                )
              })
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
      </CardContent>
      <CardFooter className="shrink-0 border-t">
        <div className="flex w-full items-center gap-2">
          <div className="flex flex-1 items-center gap-2">
            <Input
              value={textInput}
              onChange={handleTextInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="h-9 focus-visible:ring-0 focus-visible:ring-offset-0"
              disabled={isTransitioning}
            />
            <Button
              onClick={handleSendText}
              size="icon"
              variant="ghost"
              className="rounded-full"
              disabled={!textInput.trim() || isTransitioning}
            >
              <SendIcon className="size-4" />
              <span className="sr-only">Send message</span>
            </Button>
            {!isCallActive && (
              <Button
                onClick={handleCall}
                size="icon"
                variant="ghost"
                className={cn("relative shrink-0 rounded-full transition-all")}
                disabled={isTransitioning}
              >
                <AudioLinesIcon className="size-4" />
                <span className="sr-only">Start voice call</span>
              </Button>
            )}
            {isCallActive && (
              <Button
                onClick={handleCall}
                size="icon"
                variant="secondary"
                className={cn("relative shrink-0 rounded-full transition-all")}
                disabled={isTransitioning}
              >
                <PhoneOffIcon className="size-4" />
                <span className="sr-only">End call</span>
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
