"use client"

import { useState } from "react"

import { Badge } from "@/registry/creative-tim-ui/ui/badge"
import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Input } from "@/registry/creative-tim-ui/ui/input"
import { Label } from "@/registry/creative-tim-ui/ui/label"
import { Textarea } from "@/registry/creative-tim-ui/ui/textarea"

const OPTIONS = ["General Inquiry", "Product Support"]

export default function ContactSections05() {
  const [selectedOption, setSelectedOption] = useState("")

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Badge variant="secondary">Customer Care</Badge>
          <h2 className="text-3xl font-bold mb-4 mt-8">
            We&apos;re Here to Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether it&apos;s a question about our services, a request for
            technical assistance, or suggestions for improvement, our team is
            eager to hear from you.
          </p>
        </div>
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2 grid-cols-1">
          <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl" />
          <form
            action="#"
            className="space-y-6 lg:py-2 max-w-lg mx-auto lg:mx-0"
          >
            <div className="space-y-4">
              <Label>Select Options for Business Engagement</Label>
              <div className="flex flex-wrap gap-2">
                {OPTIONS.map((option) => (
                  <Button
                    key={option}
                    type="button"
                    variant={selectedOption === option ? "default" : "outline"}
                    onClick={() =>
                      setSelectedOption((cur) => (cur === option ? "" : option))
                    }
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="someone@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Something about your request."
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
