"use client"

import { Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const DATA = [
  {
    icon: Mail,
    title: "Find us at the office",
    options: ["Bld Mihail Kogalniceanu, nr. 8,", "7652 Bucharest,", "Romania"],
  },
  {
    icon: Phone,
    title: "+1(424) 535 3523",
    options: ["Michael Jordan", "+40 762 321 762", "Mon - Fri, 8:00-22:00"],
  },
]

export default function ContactSections07() {
  return (
    <section className="grid min-h-screen place-items-center py-16">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <Card className="mx-auto p-6 lg:max-w-lg lg:p-12">
          <h3 className="mb-2 text-2xl font-semibold">Contact us</h3>
          <p className="text-muted-foreground mb-6">
            We'd love to hear from you.
          </p>
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
        <div className="mx-auto space-y-10 lg:max-w-lg">
          {DATA.map(({ icon: Icon, title, options }, key) => (
            <div key={key} className="flex gap-4">
              <div className="shrink-0">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-2 font-semibold">{title}</h4>
                {options.map((option, idx) => (
                  <p key={idx} className="text-muted-foreground">
                    {option}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
