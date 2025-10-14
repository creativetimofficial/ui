"use client"

import { useState } from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { cn } from "@/registry/elevenlabs-ui/lib/utils"
import { Button } from "@/registry/elevenlabs-ui/ui/button"
import { Card, CardContent } from "@/registry/elevenlabs-ui/ui/card"
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/registry/elevenlabs-ui/ui/conversation"
import { ConversationBar } from "@/registry/elevenlabs-ui/ui/conversation-bar"
import { Message, MessageContent } from "@/registry/elevenlabs-ui/ui/message"
import { Orb } from "@/registry/elevenlabs-ui/ui/orb"
import { Response } from "@/registry/elevenlabs-ui/ui/response"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/elevenlabs-ui/ui/tooltip"

const DEFAULT_AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

export default function Page() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  return (
    <div className="relative mx-auto h-[600px] w-full">
      <Card className="flex h-full w-full flex-col gap-0 overflow-hidden">
        <CardContent className="relative flex-1 overflow-hidden p-0">
          <Conversation className="absolute inset-0 pb-[88px]">
            <ConversationContent className="flex min-w-0 flex-col gap-2 p-6 pb-6">
              {messages.length === 0 ? (
                <ConversationEmptyState
                  icon={<Orb className="size-12" />}
                  title="Start a conversation"
                  description="Tap the phone button or type a message"
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
                            <Orb className="h-full w-full" />
                          </div>
                        )}
                      </Message>
                      {message.role === "assistant" && (
                        <div className="flex items-center gap-1">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  className={cn(
                                    "text-muted-foreground hover:text-foreground relative size-9 p-1.5"
                                  )}
                                  size="sm"
                                  type="button"
                                  variant="ghost"
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      message.content
                                    )
                                    setCopiedIndex(index)
                                    setTimeout(() => setCopiedIndex(null), 2000)
                                  }}
                                >
                                  {copiedIndex === index ? (
                                    <CheckIcon className="size-4" />
                                  ) : (
                                    <CopyIcon className="size-4" />
                                  )}
                                  <span className="sr-only">
                                    {copiedIndex === index ? "Copied!" : "Copy"}
                                  </span>
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  {copiedIndex === index ? "Copied!" : "Copy"}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      )}
                    </div>
                  )
                })
              )}
            </ConversationContent>
            <ConversationScrollButton className="bottom-[100px]" />
          </Conversation>
          <div className="absolute right-0 bottom-0 left-0 flex justify-center">
            <ConversationBar
              className="w-full max-w-2xl"
              agentId={DEFAULT_AGENT_ID}
              onConnect={() => setMessages([])}
              onDisconnect={() => setMessages([])}
              onSendMessage={(message) => {
                const userMessage: ChatMessage = {
                  role: "user",
                  content: message,
                }
                setMessages((prev) => [...prev, userMessage])
              }}
              onMessage={(message) => {
                const newMessage: ChatMessage = {
                  role: message.source === "user" ? "user" : "assistant",
                  content: message.message,
                }
                setMessages((prev) => [...prev, newMessage])
              }}
              onError={(error) => console.error("Conversation error:", error)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
