"use client"

import { MapPin, Mail, Phone } from "lucide-react"

const OPTIONS = [
  {
    icon: MapPin,
    title: "Address",
    subTitle: "Find us at the office",
    description: "12124 First Street, nr 54",
  },
  {
    icon: Mail,
    title: "Email",
    subTitle: "Send us your feedback",
    description: "hello@email.com",
  },
  {
    icon: Phone,
    title: "Phone",
    subTitle: "Give us a ring",
    description: "+1 (424) 535-3523",
  },
]

export default function ContactSections06() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="block text-sm font-semibold text-primary">
            Contact Us
          </span>
          <h2 className="text-3xl font-bold text-center my-4">
            Got a Question?
          </h2>
          <p className="text-lg text-center text-muted-foreground max-w-lg mx-auto">
            We&apos;d like to talk more about what you need
          </p>
        </div>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {OPTIONS.map(({ icon: Icon, title, subTitle, description }, key) => (
            <div key={key} className="text-center">
              <div className="w-14 mx-auto mb-6 h-14 rounded-full grid place-items-center bg-primary">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-lg font-semibold">{title}</p>
              <p className="text-muted-foreground block my-3">{subTitle}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
