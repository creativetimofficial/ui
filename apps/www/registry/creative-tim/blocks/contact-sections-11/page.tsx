"use client"

import { Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSections11() {
  return (
    <section className="grid min-h-screen place-items-center bg-gradient-to-br from-stone-900 to-stone-800 py-16 text-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Get In Touch</h2>
          <p className="mx-auto max-w-2xl text-stone-300">
            Have a question or want to work together? Leave your details and
            we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <form
            action="#"
            className="space-y-6 rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="border-white/30 bg-white/20 text-white placeholder:text-stone-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="border-white/30 bg-white/20 text-white placeholder:text-stone-300"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-white">
                Subject
              </Label>
              <Input
                id="subject"
                placeholder="How can we help?"
                className="border-white/30 bg-white/20 text-white placeholder:text-stone-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={6}
                className="border-white/30 bg-white/20 text-white placeholder:text-stone-300"
              />
            </div>
            <Button className="w-full" size="lg">
              Send Message
            </Button>
          </form>
          <div className="mt-12 flex justify-center gap-12">
            <div className="text-center">
              <Phone className="mx-auto mb-2 h-6 w-6" />
              <p className="text-sm text-stone-300">+1 (424) 535-3523</p>
            </div>
            <div className="text-center">
              <Mail className="mx-auto mb-2 h-6 w-6" />
              <p className="text-sm text-stone-300">hello@mail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
