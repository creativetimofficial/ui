"use client"

import { useEffect, useState } from "react"

import { Card } from "@/registry/elevenlabs-ui/ui/card"
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/registry/elevenlabs-ui/ui/conversation"
import { Message, MessageContent } from "@/registry/elevenlabs-ui/ui/message"
import { Orb } from "@/registry/elevenlabs-ui/ui/orb"
import { Response } from "@/registry/elevenlabs-ui/ui/response"
import { ShimmeringText } from "@/registry/elevenlabs-ui/ui/shimmering-text"

const allMessages = [
  {
    id: "1",
    role: "user" as const,
    parts: [
      {
        type: "text",
        text: "Hey, I need help with my order",
      },
    ],
  },
  {
    id: "2",
    role: "assistant" as const,
    parts: [
      {
        type: "text",
        tokens: [
          "Hi!",
          " I'd",
          " be",
          " happy",
          " to",
          " help",
          " you",
          " with",
          " your",
          " order.",
          " Could",
          " you",
          " please",
          " provide",
          " your",
          " order",
          " number?",
        ],
        text: "Hi! I'd be happy to help you with your order. Could you please provide your order number?",
      },
    ],
  },
  {
    id: "3",
    role: "user" as const,
    parts: [
      {
        type: "text",
        text: "It's ORDER-12345",
      },
    ],
  },
  {
    id: "4",
    role: "assistant" as const,
    parts: [
      {
        type: "text",
        tokens: [
          "Thank",
          " you!",
          " Let",
          " me",
          " pull",
          " up",
          " your",
          " order",
          " details.",
          " I",
          " can",
          " see",
          " that",
          " your",
          " order",
          " was",
          " placed",
          " on",
          " March",
          " 15th",
          " and",
          " is",
          " currently",
          " being",
          " processed.",
          " It",
          " should",
          " ship",
          " within",
          " the",
          " next",
          " 1-2",
          " business",
          " days.",
          " Is",
          " there",
          " anything",
          " specific",
          " you'd",
          " like",
          " to",
          " know",
          " about",
          " this",
          " order?",
        ],
        text: "Thank you! Let me pull up your order details. I can see that your order was placed on March 15th and is currently being processed. It should ship within the next 1-2 business days. Is there anything specific you'd like to know about this order?",
      },
    ],
  },
  {
    id: "5",
    role: "user" as const,
    parts: [
      {
        type: "text",
        text: "Can I change the shipping address?",
      },
    ],
  },
  {
    id: "6",
    role: "assistant" as const,
    parts: [
      {
        type: "text",
        tokens: [
          "Absolutely!",
          " Since",
          " the",
          " order",
          " hasn't",
          " shipped",
          " yet,",
          " I",
          " can",
          " update",
          " the",
          " shipping",
          " address",
          " for",
          " you.",
          " What",
          " would",
          " you",
          " like",
          " the",
          " new",
          " address",
          " to",
          " be?",
        ],
        text: "Absolutely! Since the order hasn't shipped yet, I can update the shipping address for you. What would you like the new address to be?",
      },
    ],
  },
]

const ConversationDemo = () => {
  const [messages, setMessages] = useState<typeof allMessages>([])
  const [streamingMessageIndex, setStreamingMessageIndex] = useState<
    number | null
  >(null)
  const [streamingContent, setStreamingContent] = useState("")

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []
    const intervals: NodeJS.Timeout[] = []
    let currentMessageIndex = 0

    const addNextMessage = () => {
      if (currentMessageIndex >= allMessages.length) return

      const message = allMessages[currentMessageIndex]
      const part = message.parts[0]

      if (message.role === "assistant" && "tokens" in part && part.tokens) {
        setStreamingMessageIndex(currentMessageIndex)
        setStreamingContent("")

        let currentContent = ""
        let tokenIndex = 0

        const streamInterval = setInterval(() => {
          if (tokenIndex < part.tokens.length) {
            currentContent += part.tokens[tokenIndex]
            setStreamingContent(currentContent)
            tokenIndex++
          } else {
            clearInterval(streamInterval)
            setMessages((prev) => [...prev, message])
            setStreamingMessageIndex(null)
            setStreamingContent("")
            currentMessageIndex++

            // Add next message after a delay
            timeouts.push(setTimeout(addNextMessage, 500))
          }
        }, 100)

        intervals.push(streamInterval)
      } else {
        setMessages((prev) => [...prev, message])
        currentMessageIndex++

        timeouts.push(setTimeout(addNextMessage, 800))
      }
    }

    // Start after 1 second
    timeouts.push(setTimeout(addNextMessage, 1000))

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout))
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [])

  return (
    <Card className="relative mx-auto my-0 size-full h-[400px] py-0">
      <div className="flex h-full flex-col">
        <Conversation>
          <ConversationContent>
            {messages.length === 0 && streamingMessageIndex === null ? (
              <ConversationEmptyState
                icon={<Orb className="size-12" />}
                title="Start a conversation"
                description="This is a simulated conversation"
              />
            ) : (
              <>
                {messages.map((message) => (
                  <Message from={message.role} key={message.id}>
                    <MessageContent>
                      {message.parts.map((part, i) => {
                        switch (part.type) {
                          case "text":
                            return (
                              <Response key={`${message.id}-${i}`}>
                                {part.text}
                              </Response>
                            )
                          default:
                            return null
                        }
                      })}
                    </MessageContent>
                    {message.role === "assistant" && (
                      <div className="ring-border size-8 overflow-hidden rounded-full ring-1">
                        <Orb className="h-full w-full" agentState={null} />
                      </div>
                    )}
                  </Message>
                ))}
                {streamingMessageIndex !== null && (
                  <Message
                    from={allMessages[streamingMessageIndex].role}
                    key={`streaming-${streamingMessageIndex}`}
                  >
                    <MessageContent>
                      <Response>{streamingContent || "\u200B"}</Response>
                    </MessageContent>
                    {allMessages[streamingMessageIndex].role ===
                      "assistant" && (
                      <div className="ring-border size-8 overflow-hidden rounded-full ring-1">
                        <Orb className="h-full w-full" agentState="talking" />
                      </div>
                    )}
                  </Message>
                )}
              </>
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
      </div>
    </Card>
  )
}

export default ConversationDemo
