"use client"

import { Mail, Phone } from "lucide-react"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Input } from "@/registry/creative-tim-ui/ui/input"
import { Label } from "@/registry/creative-tim-ui/ui/label"
import { Textarea } from "@/registry/creative-tim-ui/ui/textarea"

export default function ContactSections11() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen grid place-items-center">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Leave your details and
            we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form action="#" className="space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
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
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
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
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
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
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
            </div>
            <Button className="w-full" size="lg">
              Send Message
            </Button>
          </form>
          <div className="mt-12 flex justify-center gap-12">
            <div className="text-center">
              <Phone className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm text-gray-300">+1 (424) 535-3523</p>
            </div>
            <div className="text-center">
              <Mail className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm text-gray-300">hello@mail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
