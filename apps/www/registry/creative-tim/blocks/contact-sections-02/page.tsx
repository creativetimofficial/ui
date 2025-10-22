"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSections02() {
  return (
    <section className="grid min-h-screen w-full grid-cols-1 items-center md:grid-cols-2">
      <div className="p-6 sm:p-12 lg:p-16">
        <div className="mb-10">
          <h2 className="my-4 text-3xl font-bold">Contact us</h2>
          <p className="text-muted-foreground max-w-lg text-lg">
            Whether you have questions or you would just like to say hello,
            contact us.
          </p>
        </div>
        <form action="#" className="space-y-6">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
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
            <Input id="email" type="email" placeholder="someone@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              maxLength={16}
              placeholder="e.g., +1 123-456-7890"
              pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
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
              className="cursor-pointer text-sm font-normal"
            >
              You agree to your friendly{" "}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </Label>
          </div>
          <Button className="w-full">Send Message</Button>
        </form>
      </div>
      <img
        src="https://images.unsplash.com/photo-1658246944389-9e9ac0a85dda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1064"
        alt="contact"
        className="hidden h-full w-full object-cover object-center md:block"
      />
    </section>
  )
}
