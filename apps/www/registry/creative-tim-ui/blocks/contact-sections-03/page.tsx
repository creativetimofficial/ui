"use client"

import { Phone, Mail, Ticket, Twitter, Linkedin, Dribbble, Facebook } from "lucide-react"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card } from "@/registry/creative-tim-ui/ui/card"
import { Input } from "@/registry/creative-tim-ui/ui/input"
import { Label } from "@/registry/creative-tim-ui/ui/label"
import { Textarea } from "@/registry/creative-tim-ui/ui/textarea"

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
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-lg mx-auto">
            Any questions or remarks? Just write us a message!
          </p>
        </div>
        <Card className="p-4 lg:p-6 grid gap-10 lg:grid-cols-2 grid-cols-1 rounded-2xl">
          <form action="#" className="space-y-6 lg:py-2 py-0 px-2">
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
            <Button className="max-w-fit flex ml-auto">Send Message</Button>
          </form>
          <div className="bg-black lg:p-16 p-8 rounded-lg grid lg:place-items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Contact Information
              </h2>
              <p className="text-gray-400 mb-16 max-w-lg">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              {DATA.map(({ icon: Icon, info }, key) => (
                <div key={key} className="flex items-center gap-4 mb-4">
                  <Icon className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">{info}</span>
                </div>
              ))}
              <div className="mt-12 flex gap-6 items-center">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Dribbble className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
