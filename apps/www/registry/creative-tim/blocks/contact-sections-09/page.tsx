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

export default function ContactSections09() {
  return (
    <section className="p-6">
      <div className="grid items-center gap-6 rounded-xl bg-black p-4 lg:grid-cols-2 lg:p-8">
        <div className="p-8 lg:mx-auto lg:max-w-lg lg:p-0">
          <h2 className="mb-4 text-3xl font-bold text-white">Get in Touch</h2>
          <p className="text-lg text-white lg:max-w-xl">
            You need more information? Check what other persons are saying about
            our product. They are very happy with their purchase.
          </p>
          {DATA.map(({ icon: Icon, title, options }, key) => (
            <div key={key} className="mt-12">
              <div className="mb-6 flex items-center gap-3">
                <Icon className="h-7 w-7 text-white" />
                <h4 className="text-lg font-semibold text-white">{title}</h4>
              </div>
              <div className="ml-10 space-y-2">
                {options.map((option, idx) => (
                  <p key={idx} className="text-white">
                    {option}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Card className="p-6 lg:p-8">
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
      </div>
    </section>
  )
}
