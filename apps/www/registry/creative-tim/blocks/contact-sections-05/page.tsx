"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const OPTIONS = ["General Inquiry", "Product Support"]

export default function ContactSections05() {
  const [selectedOption, setSelectedOption] = useState("")

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <Badge variant="secondary">Customer Care</Badge>
          <h2 className="mt-8 mb-4 text-3xl font-bold">
            We&apos;re Here to Help
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Whether it&apos;s a question about our services, a request for
            technical assistance, or suggestions for improvement, our team is
            eager to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1638438134099-a91e5373aaf0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
            alt="Contact"
            className="h-full min-h-[400px] w-full rounded-2xl object-cover"
          />
          <form
            action="#"
            className="mx-auto max-w-lg space-y-6 lg:mx-0 lg:py-2"
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
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
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
