"use client"

import { SoftwarePurchaseCard } from "@/components/ui/software-purchase-card"

export default function SoftwarePurchaseCardDemo() {
  const handleApprove = () => {
    console.log("Purchase approved")
  }

  const handleDiscard = () => {
    console.log("Purchase discarded")
  }

  return (
    <div className="flex items-center justify-center p-6">
      <SoftwarePurchaseCard
        softwareName="Enterprise Cloud Suite"
        startDate="2025-01-15"
        seats={50}
        pricingType="per-seat"
        price="$2,500"
        onApprove={handleApprove}
        onDiscard={handleDiscard}
      />
    </div>
  )
}
