"use client"

import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const OPTIONS = [
  {
    icon: MapPin,
    info: "12124 First Street, nr 54",
  },
  {
    icon: Phone,
    info: "+1(424) 535 3523",
  },
  {
    icon: Mail,
    info: "hello@mail.com",
  },
]

export default function ContactSections10() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="mb-16 text-center text-3xl font-bold">Contact Us</h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Card className="p-8">
            <h3 className="mb-6 text-2xl font-semibold">Send us a message</h3>
            <form action="#" className="space-y-6">
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
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="someone@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 123-456-7890" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">Get in touch</h3>
              <p className="text-muted-foreground">
                We&apos;re here to help and answer any question you might have.
                We look forward to hearing from you.
              </p>
            </div>
            <div className="space-y-6">
              {OPTIONS.map(({ icon: Icon, info }, key) => (
                <div key={key} className="flex items-start gap-4">
                  <div className="bg-primary/10 grid h-10 w-10 shrink-0 place-items-center rounded-lg">
                    <Icon className="text-primary h-5 w-5" />
                  </div>
                  <div className="pt-2">
                    <p className="font-medium">{info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
