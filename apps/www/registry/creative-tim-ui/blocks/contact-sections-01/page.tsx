"use client"

import { Phone, Mail, Ticket } from "lucide-react"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card } from "@/registry/creative-tim-ui/ui/card"
import { Checkbox } from "@/registry/creative-tim-ui/ui/checkbox"
import { Input } from "@/registry/creative-tim-ui/ui/input"
import { Label } from "@/registry/creative-tim-ui/ui/label"
import { Textarea } from "@/registry/creative-tim-ui/ui/textarea"

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
    <section className="py-16 min-h-screen grid place-items-center">
      <div className="container mx-auto grid items-center lg:grid-cols-2 grid-cols-1 gap-10">
        <Card className="lg:p-12 p-6 lg:max-w-lg mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Contact us</h3>
          <form action="#" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-4">
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
                className="text-sm font-normal cursor-pointer"
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
        <div className="lg:max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground lg:max-w-lg">
            You need more information? Check what other persons are saying about
            our product. They are very happy with their purchase.
          </p>
          <div className="space-y-4 mt-14">
            {OPTIONS.map(({ icon: Icon, info }, key) => (
              <div key={key} className="flex items-center gap-4">
                <Icon className="w-5 h-5" />
                <span>{info}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
