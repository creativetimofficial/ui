"use client"

import * as React from "react"
import { Instagram, Loader2, Mail, Send } from "lucide-react"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus("success")
        e.currentTarget.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-secondary/30 py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-primary mb-4 text-sm font-medium uppercase tracking-widest">
                Get in Touch
              </p>
              <h1 className="font-serif text-4xl font-bold md:text-5xl">
                We&apos;d Love to Hear from You
              </h1>
              <p className="text-muted-foreground mt-4 text-lg">
                Questions about a piece? Want a custom order? Just want to say
                hi? We&apos;re all ears.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="grid gap-16 md:grid-cols-5">
              {/* Left - Contact Info */}
              <div className="space-y-8 md:col-span-2">
                <div>
                  <h2 className="font-serif text-2xl font-bold">
                    Other Ways to Reach Us
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    Prefer to chat on social? We&apos;re most active on
                    Instagram.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://instagram.com/threadmeditation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-secondary flex items-center gap-4 rounded-lg border p-4 transition-colors"
                  >
                    <Instagram className="text-primary h-6 w-6" />
                    <div>
                      <p className="font-medium">Instagram DM</p>
                      <p className="text-muted-foreground text-sm">
                        @threadmeditation
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 rounded-lg border p-4">
                    <Mail className="text-primary h-6 w-6" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground text-sm">
                        hello@threadmeditation.com
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">
                  We typically respond within 24&ndash;48 hours.
                </p>
              </div>

              {/* Right - Form */}
              <Card className="border-0 shadow-lg md:col-span-3">
                <CardContent className="p-8">
                  {status === "success" ? (
                    <div className="py-12 text-center">
                      <div className="text-primary mb-4 text-4xl">
                        &#10003;
                      </div>
                      <h3 className="font-serif text-2xl font-bold">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        Thanks for reaching out. We&apos;ll get back to you
                        soon.
                      </p>
                      <Button
                        className="mt-6 rounded-full"
                        onClick={() => setStatus("idle")}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select name="subject" required>
                          <SelectTrigger>
                            <SelectValue placeholder="What is this about?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">
                              General Inquiry
                            </SelectItem>
                            <SelectItem value="custom">
                              Custom Order
                            </SelectItem>
                            <SelectItem value="wholesale">Wholesale</SelectItem>
                            <SelectItem value="press">
                              Press / Collaboration
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Tell us what's on your mind..."
                          rows={5}
                        />
                      </div>

                      {status === "error" && (
                        <p className="text-sm text-red-500">
                          Something went wrong. Please try again.
                        </p>
                      )}

                      <Button
                        type="submit"
                        className="w-full rounded-full"
                        size="lg"
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          <Send className="mr-2 h-4 w-4" />
                        )}
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
