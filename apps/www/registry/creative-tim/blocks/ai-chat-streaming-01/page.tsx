"use client"

import * as React from "react"
import { Brain, Loader2, Send } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const AI_PROVIDERS = [
  { value: "openai", label: "OpenAI" },
  { value: "anthropic", label: "Anthropic" },
  { value: "google", label: "Google Gemini" },
  { value: "cohere", label: "Cohere" },
  { value: "mistral", label: "Mistral AI" },
]

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  thinking?: string
  isStreaming?: boolean
}

export default function AIChatStreamingBlock() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm your AI assistant with streaming and thinking capabilities. How can I help you today?",
    },
  ])
  const [input, setInput] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [provider, setProvider] = React.useState("openai")
  const [apiKey, setApiKey] = React.useState("")
  const [showThinking, setShowThinking] = React.useState(false)
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  const simulateStreaming = async (text: string) => {
    const words = text.split(" ")
    let currentText = ""

    const messageId = Date.now().toString()
    setMessages((prev) => [
      ...prev,
      {
        id: messageId,
        role: "assistant",
        content: "",
        thinking: showThinking
          ? "Analyzing your question and formulating a comprehensive response..."
          : undefined,
        isStreaming: true,
      },
    ])

    for (let i = 0; i < words.length; i++) {
      currentText += (i > 0 ? " " : "") + words[i]
      await new Promise((resolve) => setTimeout(resolve, 50))

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? {
                ...msg,
                content: currentText,
                isStreaming: i < words.length - 1,
              }
            : msg
        )
      )
    }
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    const responses = [
      "That's an interesting question. Based on the AI provider you've selected, I can process this with advanced natural language understanding. Let me break this down for you with a detailed analysis.",
      "I understand what you're asking. Using the configured API, I can provide you with accurate information. The key aspects to consider are context, relevance, and accuracy in the response.",
      "Great question! With streaming enabled, you can see my response in real-time as I process your query. This creates a more interactive and engaging experience for users.",
    ]

    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)]
    await simulateStreaming(randomResponse)
    setIsLoading(false)
  }

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="container mx-auto py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6" />
            AI Chat with Streaming and Thinking
          </CardTitle>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="provider">AI Provider</Label>
              <Select value={provider} onValueChange={setProvider}>
                <SelectTrigger id="provider">
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  {AI_PROVIDERS.map((p) => (
                    <SelectItem key={p.value} value={p.value}>
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="apiKey">API Key</Label>
              <Input
                id="apiKey"
                type="password"
                placeholder="Enter your API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <input
              type="checkbox"
              id="showThinking"
              checked={showThinking}
              onChange={(e) => setShowThinking(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300"
            />
            <Label htmlFor="showThinking" className="cursor-pointer text-sm">
              Show AI thinking process
            </Label>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ScrollArea
            className="h-[400px] rounded-md border p-4"
            ref={scrollAreaRef}
          >
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        AI
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] space-y-2 ${
                      message.role === "user" ? "order-first" : ""
                    }`}
                  >
                    {message.thinking && (
                      <div className="bg-muted/50 mb-2 rounded-lg border border-dashed p-3">
                        <p className="text-muted-foreground flex items-center gap-2 text-sm">
                          <Brain className="h-4 w-4" />
                          <span className="italic">{message.thinking}</span>
                        </p>
                      </div>
                    )}
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">
                        {message.content}
                        {message.isStreaming && (
                          <span className="ml-1 inline-block h-4 w-1 animate-pulse bg-current" />
                        )}
                      </p>
                    </div>
                  </div>
                  {message.role === "user" && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading &&
                messages[messages.length - 1]?.role !== "assistant" && (
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        AI
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted flex items-center gap-2 rounded-lg p-3">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Thinking...</span>
                    </div>
                  </div>
                )}
            </div>
          </ScrollArea>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex gap-2"
          >
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading || !apiKey}
            />
            <Button
              type="submit"
              disabled={isLoading || !apiKey || !input.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          {!apiKey && (
            <p className="text-muted-foreground text-center text-sm">
              Please enter your API key to start chatting
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
