"use client"

import { Mail, Phone, User, MapPin } from "lucide-react"

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
      <div className="grid place-items-center text-center bg-gradient-to-br from-gray-900 to-gray-800 h-full min-h-[70vh] bg-cover bg-center w-full">
        <div className="-mt-8">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Got a Question?
          </h2>
          <p className="text-lg text-white/80">
            We&apos;d like to talk more about what you need
          </p>
        </div>
      </div>
      <div className="container mx-auto -mt-20 pb-4">
        <Card className="py-8">
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
            {OPTIONS.map(({ icon: Icon, title, description }, key) => (
              <div key={key} className="text-center">
                <div className="w-12 mx-auto h-12 rounded-lg grid place-items-center bg-primary">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-lg font-semibold mt-4 mb-1">{title}</p>
                <p className="text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
