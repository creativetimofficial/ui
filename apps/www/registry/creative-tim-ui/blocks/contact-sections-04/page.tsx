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
      <div className="grid h-full min-h-[70vh] w-full place-items-center bg-gradient-to-br from-gray-900 to-gray-800 bg-cover bg-center text-center">
        <div className="-mt-8">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Got a Question?
          </h2>
          <p className="text-lg text-white/80">
            We&apos;d like to talk more about what you need
          </p>
        </div>
      </div>
      <div className="container mx-auto -mt-20 pb-4">
        <Card className="py-8">
          <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-16 sm:grid-cols-2 md:grid-cols-4">
            {OPTIONS.map(({ icon: Icon, title, description }, key) => (
              <div key={key} className="text-center">
                <div className="bg-primary mx-auto grid h-12 w-12 place-items-center rounded-lg">
                  <Icon className="text-primary-foreground h-6 w-6" />
                </div>
                <p className="mt-4 mb-1 text-lg font-semibold">{title}</p>
                <p className="text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
