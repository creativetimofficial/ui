"use client"

import { Wifi } from "lucide-react"

import { Card } from "@/registry/elevenlabs-ui/ui/card"

interface CreditCardProps {
  variant?: "dark" | "light"
  number: string
  holder: string
  expires: string
}

function CreditCard({
  variant = "light",
  number,
  holder,
  expires,
}: CreditCardProps) {
  const isDark = variant === "dark"

  return (
    <Card className={isDark ? "bg-black text-white" : "bg-white text-black"}>
      <div className="m-0 w-full p-6">
        <Wifi className="h-6 w-6" />
      </div>
      <div className="px-6 py-2">
        <p className="text-xl font-semibold tracking-wider">
          {String(number)
            .match(/.{1,4}/g)
            ?.join(" ")}
        </p>
      </div>
      <div className="flex items-end gap-6 p-6">
        <div className="space-y-0.5">
          <p className="block text-xs font-semibold opacity-80">Card Holder</p>
          <p className="font-semibold">{holder}</p>
        </div>
        <div className="space-y-0.5">
          <p className="block text-xs font-semibold opacity-80">Expires</p>
          <p className="font-semibold">{expires}</p>
        </div>
        <div className="ml-auto">
          <img
            src="https://v3.material-tailwind.com/mastercard.webp"
            alt="mastercard logo"
            className="h-8 w-auto"
          />
        </div>
      </div>
    </Card>
  )
}

export default function CardDisplay01() {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 p-6 md:grid-cols-2">
      <CreditCard
        variant="dark"
        expires="10/25"
        holder="Jack Peterson"
        number="4562112245947852"
      />
      <CreditCard
        variant="light"
        expires="10/26"
        holder="Jack Peterson"
        number="4562112245948844"
      />
    </div>
  )
}
