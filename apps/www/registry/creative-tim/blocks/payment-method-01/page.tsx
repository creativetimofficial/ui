"use client"

import { Check, Pencil, Plus, Trash2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface PaymentMethodProps {
  type: "visa" | "mastercard"
  number: string
  isDefault?: boolean
}

function PaymentMethod({ type, number, isDefault }: PaymentMethodProps) {
  const cardImg =
    type === "visa"
      ? "https://v3.material-tailwind.com/visa.webp"
      : "https://v3.material-tailwind.com/mastercard.webp"

  return (
    <Card className="group hover:border-primary/50 relative flex flex-col gap-4 border p-6 transition-all hover:shadow-md">
      {isDefault && (
        <div className="bg-primary absolute -top-px -right-px rounded-tr-lg rounded-bl-lg px-3 py-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
            <Check className="h-3 w-3" />
            Default
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        <div className="flex h-12 w-16 items-center justify-center rounded-lg bg-gray-50 p-2">
          <img
            src={cardImg}
            alt={type}
            className="h-full w-auto object-contain"
          />
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <p className="text-base font-bold tracking-wider">
            **** **** **** {number}
          </p>
          <p className="text-muted-foreground text-sm capitalize">
            {type} Card
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost" className="h-9 w-9">
                <Pencil className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit Card</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="text-destructive hover:bg-destructive/10 hover:text-destructive h-9 w-9"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Remove Card</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Card>
  )
}

export default function PaymentMethod01() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">Payment Methods</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage your preferred payment methods securely and conveniently.
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" /> Add New Card
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <PaymentMethod type="mastercard" number="7852" isDefault />
        <PaymentMethod type="visa" number="9831" />
        <PaymentMethod type="visa" number="8362" />
        <PaymentMethod type="mastercard" number="0098" />
      </div>
    </div>
  )
}
