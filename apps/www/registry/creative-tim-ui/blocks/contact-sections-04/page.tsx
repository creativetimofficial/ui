"use client"

import { Mail, MapPin, Phone, User } from "lucide-react"

import { Card } from "@/registry/creative-tim-ui/ui/card"

const OPTIONS = [
  {
    icon: MapPin,
    title: "Address",
    description: "12124 First Street, nr 54",
  },
  {
    icon: Mail,
    title: "Email",
    description: "hello@email.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+1 (424) 535-3523",
  },
  {
    icon: User,
    title: "Contact",
    description: "Andrew Samian",
  },
]

export default function ContactSections04() {
  return (
    <section>
      <div className="relative grid h-full min-h-[70vh] w-full place-items-center bg-cover bg-center text-center">
        <img
          src="https://images.unsplash.com/photo-1635700193352-80564c35434c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2532"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative -mt-8">
          <h2 className="mb-6 text-5xl font-bold text-white">
            Got a Question?
          </h2>
          <p className="mx-auto max-w-xl text-xl text-white/80">
            We'd like to talk more about what you need
          </p>
        </div>
      </div>
      <div className="container mx-auto -mt-24 px-4 pb-16">
        <Card className="overflow-hidden rounded-2xl py-12 shadow-2xl">
          <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-12 px-4 sm:grid-cols-2 lg:grid-cols-4">
            {OPTIONS.map(({ icon: Icon, title, description }, key) => (
              <div
                key={key}
                className="group text-center transition-transform hover:scale-105"
              >
                <div className="bg-primary mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl shadow-lg transition-all group-hover:shadow-xl">
                  <Icon className="text-primary-foreground h-8 w-8" />
                </div>
                <p className="mb-2 text-xl font-bold">{title}</p>
                <p className="text-muted-foreground text-base">{description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
