"use client"

import { Wifi } from "lucide-react"

import { Card } from "@/registry/creative-tim-ui/ui/card"

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
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "border-border/50 bg-white text-black shadow-lg"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative m-0 flex w-full items-center justify-between p-8">
        <div
          className={`rounded-lg p-3 ${isDark ? "bg-white/10" : "bg-gray-100"}`}
        >
          <Wifi className="h-7 w-7" />
        </div>
        <div
          className={`h-12 w-16 rounded ${isDark ? "bg-gradient-to-br from-yellow-400 to-yellow-600" : "bg-gradient-to-br from-yellow-300 to-yellow-500"}`}
        >
          <div className="h-full w-full rounded bg-gradient-to-tr from-transparent via-white/20 to-white/40" />
        </div>
      </div>

      <div className="relative px-8 py-6">
        <p className="text-2xl font-bold tracking-[0.3em] md:text-3xl">
          {String(number)
            .match(/.{1,4}/g)
            ?.join("  ")}
        </p>
      </div>

      <div className="relative flex items-end justify-between gap-6 p-8 pt-4">
        <div className="flex gap-8">
          <div className="space-y-1">
            <p
              className={`text-xs font-semibold tracking-wider uppercase ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
              Card Holder
            </p>
            <p className="text-base font-bold">{holder}</p>
          </div>
          <div className="space-y-1">
            <p
              className={`text-xs font-semibold tracking-wider uppercase ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
              Expires
            </p>
            <p className="text-base font-bold">{expires}</p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="https://v3.material-tailwind.com/mastercard.webp"
            alt="mastercard logo"
            className="h-10 w-auto transition-transform group-hover:scale-110"
          />
        </div>
      </div>
    </Card>
  )
}

export default function CardDisplay01() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 p-6 md:grid-cols-2">
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
