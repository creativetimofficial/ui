"use client"

import { Calendar, CreditCard, DollarSign, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export interface SoftwarePurchaseCardProps {
  softwareName?: string
  startDate?: string
  seats?: number
  pricingType?: "per-seat" | "flat-rate" | "usage-based"
  price?: string
  onApprove?: () => void
  onDiscard?: () => void
}

export function SoftwarePurchaseCard({
  softwareName = "Enterprise Cloud Suite",
  startDate = "2025-01-15",
  seats = 50,
  pricingType = "per-seat",
  price = "$2,500",
  onApprove,
  onDiscard,
}: SoftwarePurchaseCardProps) {
  const pricingTypeLabel = {
    "per-seat": "Per Seat",
    "flat-rate": "Flat Rate",
    "usage-based": "Usage Based",
  }[pricingType]

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {softwareName}
          <Badge variant="secondary">{pricingTypeLabel}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-sm">
          <Calendar className="text-muted-foreground size-4" />
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-xs">Start Date</span>
            <span className="font-medium">
              {new Date(startDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Users className="text-muted-foreground size-4" />
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-xs">Seats</span>
            <span className="font-medium">{seats} users</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <CreditCard className="text-muted-foreground size-4" />
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-xs">Pricing Type</span>
            <span className="font-medium">{pricingTypeLabel}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <DollarSign className="text-muted-foreground size-4" />
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-xs">
              {pricingType === "per-seat" ? "Monthly Cost" : "Price"}
            </span>
            <span className="text-lg font-semibold">{price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button variant="outline" className="flex-1" onClick={onDiscard}>
          Discard
        </Button>
        <Button className="flex-1" onClick={onApprove}>
          Approve
        </Button>
      </CardFooter>
    </Card>
  )
}
