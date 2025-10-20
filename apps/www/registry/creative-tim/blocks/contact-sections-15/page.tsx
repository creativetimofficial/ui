"use client"

import { FileText, Headphones, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const CONTACT_OPTIONS = [
  {
    icon: MessageSquare,
    title: "Chat with Sales",
    description: "Speak to our sales team",
    action: "Start Chat",
  },
  {
    icon: Headphones,
    title: "Get Support",
    description: "We're here to help",
    action: "Contact Support",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Browse our docs",
    action: "View Docs",
  },
]

export default function ContactSections15() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl font-bold">
              Let's start a conversation
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We're always happy to help with any questions you might have. Get
              in touch with us and we'll respond as soon as possible.
            </p>
            <div className="space-y-6">
              {CONTACT_OPTIONS.map(
                ({ icon: Icon, title, description, action }, key) => (
                  <div key={key} className="flex items-start gap-4">
                    <div className="bg-primary/10 grid h-12 w-12 shrink-0 place-items-center rounded-lg">
                      <Icon className="text-primary h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 font-semibold">{title}</h3>
                      <p className="text-muted-foreground mb-3 text-sm">
                        {description}
                      </p>
                      <Button variant="link" className="h-auto p-0">
                        {action} →
                      </Button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <Card className="p-8">
            <h3 className="mb-6 text-2xl font-bold">Quick Contact</h3>
            <form action="#" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inquiry">Your Inquiry</Label>
                <Input id="inquiry" placeholder="What can we help you with?" />
              </div>
              <Button className="w-full">Submit</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
