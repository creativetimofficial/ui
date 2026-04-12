"use client"

import * as React from "react"
import { Loader2, Send } from "lucide-react"

import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const { ref, isVisible } = useIntersection()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="bg-secondary/60 py-24 md:py-32" ref={ref}>
      <div className="container">
        <div
          className={cn(
            "mx-auto max-w-xl text-center opacity-0 transition-all duration-700",
            isVisible && "animate-fade-in"
          )}
        >
          <p className="text-primary mb-4 text-sm font-medium uppercase tracking-widest">
            Stay in the Loop
          </p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            Get First Access to New Pieces
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Join our list for early drops, behind-the-scenes content, and
            exclusive offers.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 flex-1 rounded-full bg-white/80 px-5 backdrop-blur-sm"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 rounded-full px-8"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Join the Thread
            </Button>
          </form>

          {status === "success" && (
            <p className="text-primary mt-4 text-sm font-medium">
              Welcome to the community! Check your inbox soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-red-500">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="text-muted-foreground mt-4 text-xs">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
