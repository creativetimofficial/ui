"use client"

import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Visit us",
    info: "123 Main Street, New York, NY 10001",
  },
  {
    icon: Phone,
    title: "Call us",
    info: "+1 (424) 535-3523",
  },
  {
    icon: Mail,
    title: "Email us",
    info: "hello@mail.com",
  },
  {
    icon: Clock,
    title: "Working hours",
    info: "Mon - Fri, 9:00 AM - 6:00 PM",
  },
]

export default function ContactSections13() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Contact Information</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            We're here to answer any questions you may have about our services.
            Reach out to us and we'll respond as soon as we can.
          </p>
        </div>
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_INFO.map(({ icon: Icon, title, info }, key) => (
            <Card key={key} className="p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full">
                <Icon className="text-primary h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">{title}</h3>
              <p className="text-muted-foreground text-sm">{info}</p>
            </Card>
          ))}
        </div>
        <Card className="mx-auto max-w-2xl p-8">
          <h3 className="mb-6 text-2xl font-bold">Send us a message</h3>
          <form action="#" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                rows={5}
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
