"use client"

import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSections14() {
  return (
    <section className="from-background to-muted/20 bg-gradient-to-b py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <span className="text-primary text-sm font-semibold">
            GET IN TOUCH
          </span>
          <h2 className="mt-2 mb-4 text-4xl font-bold">
            We'd Love to Hear From You
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Whether you have a question about features, pricing, or anything
            else, our team is ready to answer all your questions.
          </p>
        </div>
        <form action="#" className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help?" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell us more about your inquiry..."
              rows={6}
              required
            />
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="gap-2">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
