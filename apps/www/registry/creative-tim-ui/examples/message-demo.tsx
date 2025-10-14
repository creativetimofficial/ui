"use client"

import { useEffect, useState } from "react"

import { Message, MessageContent } from "@/registry/elevenlabs-ui/ui/message"
import { Orb } from "@/registry/elevenlabs-ui/ui/orb"
import { Response } from "@/registry/elevenlabs-ui/ui/response"

const assistantMessageTokens = [
  "To",
  " create",
  " a",
  " new",
  " agent",
  " with",
  " **",
  "ElevenLabs",
  " Agents",
  "**",
  ",",
  " head",
  " to",
  " this",
  " link",
  ":",
  " ",
  "[",
  "https://elevenlabs.io/app/agents",
  "](",
  "https://elevenlabs.io/app/agents",
  ")",
  ".",
  "\n\n",
  "1.",
  " Sign",
  " in",
  " to",
  " your",
  " ElevenLabs",
  " account",
  ".",
  "\n",
  "2.",
  " Click",
  " **New",
  " Agent**",
  " to",
  " start",
  ".",
  "\n",
  "3.",
  " Give",
  " your",
  " agent",
  " a",
  " name",
  " and",
  " description",
  ".",
  "\n",
  "4.",
  " Configure",
  " its",
  " behavior",
  ",",
  " knowledge",
  " sources",
  ",",
  " and",
  " voice",
  ".",
  "\n",
  "5.",
  " Save",
  " it",
  " —",
  " and",
  " your",
  " agent",
  " is",
  " ready",
  " to",
  " use",
  ".",
]

const Example = () => {
  const [content, setContent] = useState("\u200B")
  const [isStreaming, setIsStreaming] = useState(false)

  useEffect(() => {
    let currentContent = ""
    let index = 0

    const startTimeout = setTimeout(() => {
      setIsStreaming(true)
    }, 500)

    const interval = setInterval(() => {
      if (index < assistantMessageTokens.length) {
        currentContent += assistantMessageTokens[index]
        setContent(currentContent)
        index++
      } else {
        clearInterval(interval)
        setIsStreaming(false)
      }
    }, 100)

    return () => {
      clearInterval(interval)
      clearTimeout(startTimeout)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        .message-demo-lists ol,
        .message-demo-lists ul {
          padding-left: 1.25rem !important;
        }
        .message-demo-lists li {
          margin-left: 0 !important;
        }
      `}</style>
      <div className="flex h-full max-h-[400px] w-full max-w-2xl flex-col overflow-hidden">
        <div className="flex flex-col gap-4 overflow-y-auto px-4 py-4">
          <div className="flex-shrink-0">
            <Message from="user">
              <MessageContent>
                <Response>How do I create an agent?</Response>
              </MessageContent>
            </Message>
          </div>
          <div className="message-demo-lists flex-shrink-0">
            <Message from="assistant">
              <MessageContent>
                <Response>{content}</Response>
              </MessageContent>
              <div className="ring-border size-8 overflow-hidden rounded-full ring-1">
                <Orb
                  className="h-full w-full"
                  agentState={isStreaming ? "talking" : null}
                />
              </div>
            </Message>
          </div>
        </div>
      </div>
    </>
  )
}

export default Example
