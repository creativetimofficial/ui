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

export default function ContactSections09() {
  return (
    <section className="p-6">
      <div className="bg-black rounded-xl lg:p-8 p-4 grid gap-6 items-center lg:grid-cols-2">
        <div className="lg:max-w-lg lg:mx-auto lg:p-0 p-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-lg text-gray-400 lg:max-w-xl">
            You need more information? Check what other persons are saying about
            our product. They are very happy with their purchase.
          </p>
          {DATA.map(({ icon: Icon, title, options }, key) => (
            <div key={key} className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <Icon className="w-7 h-7 text-gray-400" />
                <h4 className="text-lg font-semibold text-gray-400">{title}</h4>
              </div>
              <div className="space-y-2 ml-10">
                {options.map((option, idx) => (
                  <p key={idx} className="text-gray-400">
                    {option}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Card className="p-6 lg:p-8">
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
      </div>
    </section>
  )
}
