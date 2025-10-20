"use client"

import { Mail, Phone, Ticket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const OPTIONS = [
  {
    icon: Phone,
    info: "+1(424) 535 3523",
  },
  {
    icon: Mail,
    info: "hello@mail.com",
  },
  {
    icon: Ticket,
    info: "Open Support Ticket",
  },
]

export default function ContactSections01() {
  return (
    <section className="grid min-h-screen place-items-center py-16">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <Card className="mx-auto p-6 lg:max-w-lg lg:p-12">
          <h3 className="mb-6 text-2xl font-semibold">Contact us</h3>
          <form action="#" className="space-y-6">
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
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
            <div className="flex items-center gap-2">
              <Checkbox id="privacy-policy" />
              <Label
                htmlFor="privacy-policy"
                className="cursor-pointer text-sm font-normal"
              >
                You agree to your friendly{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </Card>
        <div className="mx-auto lg:max-w-lg">
          <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground text-lg lg:max-w-lg">
            You need more information? Check what other persons are saying about
            our product. They are very happy with their purchase.
          </p>
          <div className="mt-14 space-y-4">
            {OPTIONS.map(({ icon: Icon, info }, key) => (
              <div key={key} className="flex items-center gap-4">
                <Icon className="h-5 w-5" />
                <span>{info}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
