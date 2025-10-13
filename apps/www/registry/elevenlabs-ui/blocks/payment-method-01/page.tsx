"use client"

import { Button } from "@/registry/elevenlabs-ui/ui/button"
import { Card } from "@/registry/elevenlabs-ui/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/elevenlabs-ui/ui/tooltip"
import { Pencil, Plus, Trash2 } from "lucide-react"

interface PaymentMethodProps {
  type: "visa" | "mastercard"
  number: string
}

function PaymentMethod({ type, number }: PaymentMethodProps) {
  const cardImg =
    type === "visa"
      ? "https://v3.material-tailwind.com/visa.webp"
      : "https://v3.material-tailwind.com/mastercard.webp"

  return (
    <Card className="flex items-center gap-4 border p-4">
      <img src={cardImg} alt={type} className="h-8 w-auto" />
      <p className="mx-4 block text-sm font-semibold">**** **** **** {number}</p>
      <div className="ml-auto flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Pencil className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit</p>
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
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div>
          <h2 className="font-semibold">Payment Method</h2>
          <p className="text-sm text-muted-foreground">
            Manage your preferred payment methods securely and conveniently.
          </p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" /> Add New Card
        </Button>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <PaymentMethod type="mastercard" number="7852" />
        <PaymentMethod type="visa" number="9831" />
        <PaymentMethod type="visa" number="8362" />
        <PaymentMethod type="mastercard" number="0098" />
      </div>
    </div>
  )
}
