"use client"

import { Mail, MapPin, Phone } from "lucide-react"

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
        <div className="mb-16 text-center">
          <span className="text-primary block text-sm font-semibold">
            Contact Us
          </span>
          <h2 className="my-4 text-center text-3xl font-bold">
            Got a Question?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-lg text-center text-lg">
            We&apos;d like to talk more about what you need
          </p>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {OPTIONS.map(({ icon: Icon, title, subTitle, description }, key) => (
            <div key={key} className="text-center">
              <div className="bg-primary mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full">
                <Icon className="text-primary-foreground h-6 w-6" />
              </div>
              <p className="text-lg font-semibold">{title}</p>
              <p className="text-muted-foreground my-3 block">{subTitle}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
