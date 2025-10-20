"use client"

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

export default function ContactSections03() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-lg">
            Any questions or remarks? Just write us a message!
          </p>
        </div>
        <Card className="grid grid-cols-1 gap-10 rounded-2xl p-8 shadow-xl lg:grid-cols-2 lg:p-10">
          <form action="#" className="space-y-6">
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name" className="text-base">
                  First Name
                </Label>
                <Input id="first-name" placeholder="John" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name" className="text-base">
                  Last Name
                </Label>
                <Input id="last-name" placeholder="Doe" className="h-11" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="someone@example.com"
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-base">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Something about your request."
                rows={5}
                className="resize-none"
              />
            </div>
            <Button className="w-full sm:w-auto sm:min-w-[150px]" size="lg">
              Send Message
            </Button>
          </form>
          <div className="flex flex-col justify-between rounded-xl bg-gradient-to-br from-gray-900 to-black p-8 lg:p-12">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Contact Information
              </h3>
              <p className="mb-12 max-w-lg text-gray-300">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <div className="space-y-6">
                {DATA.map(({ icon: Icon, info }, key) => (
                  <div key={key} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-200">{info}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-all hover:bg-white/20 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-all hover:bg-white/20 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-all hover:bg-white/20 hover:text-white"
              >
                <Dribbble className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-all hover:bg-white/20 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
