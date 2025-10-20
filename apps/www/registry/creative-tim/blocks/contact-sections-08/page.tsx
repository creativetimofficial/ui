"use client"

import { useState } from "react"
import {
  Dribbble,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  Ticket,
  Twitter,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

const DATA = [
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

const OPTIONS = ["Design", "Development", "Support", "Other"]

export default function ContactSections08() {
  const [selectedOption, setSelectedOption] = useState("")

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-lg">
            Any questions or remarks? Just write us a message!
          </p>
        </div>
        <Card className="grid grid-cols-1 gap-10 rounded-2xl p-4 lg:grid-cols-2 lg:p-6">
          <div className="grid rounded-lg bg-black p-8 lg:place-items-center lg:p-16">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">
                Contact Information
              </h2>
              <p className="mb-16 max-w-lg text-gray-400">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              {DATA.map(({ icon: Icon, info }, key) => (
                <div key={key} className="mb-4 flex items-center gap-4">
                  <Icon className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">{info}</span>
                </div>
              ))}
              <div className="mt-12 flex items-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Dribbble className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <form action="#" className="space-y-6 px-2 py-0 lg:py-2">
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
              <Label>Area of Interest</Label>
              <RadioGroup
                value={selectedOption}
                onValueChange={setSelectedOption}
              >
                <div className="grid grid-cols-2 gap-4">
                  {OPTIONS.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={option} />
                      <Label
                        htmlFor={option}
                        className="cursor-pointer font-normal"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Something about your request."
              />
            </div>
            <Button className="ml-auto flex max-w-fit">Send Message</Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
