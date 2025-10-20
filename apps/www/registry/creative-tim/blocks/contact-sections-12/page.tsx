"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSections12() {
  return (
    <section className="relative flex min-h-screen items-center py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop')",
        }}
      />
      <div className="relative z-10 container mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Let's Talk</h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll be in touch shortly.
            </p>
          </div>
          <form
            action="#"
            className="bg-card space-y-6 rounded-2xl p-8 shadow-xl"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Your Company" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">How can we help?</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                rows={5}
              />
            </div>
            <Button className="w-full" size="lg">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
