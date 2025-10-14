"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card } from "@/registry/creative-tim-ui/ui/card"
import { Input } from "@/registry/creative-tim-ui/ui/input"
import { Label } from "@/registry/creative-tim-ui/ui/label"
import { Textarea } from "@/registry/creative-tim-ui/ui/textarea"

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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to answer any questions you may have about our services.
            Reach out to us and we'll respond as soon as we can.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {CONTACT_INFO.map(({ icon: Icon, title, info }, key) => (
            <Card key={key} className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 grid place-items-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{info}</p>
            </Card>
          ))}
        </div>
        <Card className="max-w-2xl mx-auto p-8">
          <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
          <form action="#" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
