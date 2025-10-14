"use client"

import { MessageSquare, Headphones, FileText } from "lucide-react"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card } from "@/registry/creative-tim-ui/ui/card"
import { Input } from "@/registry/creative-tim-ui/ui/input"
import { Label } from "@/registry/creative-tim-ui/ui/label"

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Let's start a conversation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always happy to help with any questions you might have. Get
              in touch with us and we'll respond as soon as possible.
            </p>
            <div className="space-y-4">
              {CONTACT_OPTIONS.map(
                ({ icon: Icon, title, description, action }, key) => (
                  <Card key={key} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 grid place-items-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {description}
                        </p>
                        <Button variant="link" className="p-0 h-auto">
                          {action} →
                        </Button>
                      </div>
                    </div>
                  </Card>
                )
              )}
            </div>
          </div>
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
            <form action="#" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
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
