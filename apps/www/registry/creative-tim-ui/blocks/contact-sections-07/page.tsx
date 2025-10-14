"use client"

import { Mail, Phone } from "lucide-react"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card } from "@/registry/creative-tim-ui/ui/card"
import { Checkbox } from "@/registry/creative-tim-ui/ui/checkbox"
import { Input } from "@/registry/creative-tim-ui/ui/input"
import { Label } from "@/registry/creative-tim-ui/ui/label"
import { Textarea } from "@/registry/creative-tim-ui/ui/textarea"

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
        <div className="lg:max-w-lg mx-auto space-y-10">
          {DATA.map(({ icon: Icon, title, options }, key) => (
            <div key={key} className="flex gap-4">
              <div className="shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">{title}</h4>
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
