"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SoftwarePurchaseCard } from "@/components/ui/software-purchase-card"

export default function Page() {
  const handleApprove = () => {
    console.log("Purchase approved")
  }

  const handleDiscard = () => {
    console.log("Purchase discarded")
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6">
      <div className="flex w-full max-w-6xl flex-col gap-8 lg:flex-row">
        {/* Left side - Purchase Details */}
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Software Purchase Request</h1>
            <p className="text-muted-foreground">
              Review and approve the software purchase details below
            </p>
          </div>

          <Separator />

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Purchase Details</h2>
              <div className="grid gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">Software Name</span>
                  <span className="text-muted-foreground">
                    Enterprise Cloud Suite
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">Vendor</span>
                  <span className="text-muted-foreground">
                    CloudTech Solutions Inc.
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">License Type</span>
                  <span className="text-muted-foreground">
                    Commercial License
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">Contract Duration</span>
                  <span className="text-muted-foreground">12 months</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="mb-4 text-xl font-semibold">
                Billing Information
              </h2>
              <div className="grid gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">Billing Cycle</span>
                  <span className="text-muted-foreground">Monthly</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">Payment Method</span>
                  <span className="text-muted-foreground">
                    Corporate Credit Card
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">Cost Center</span>
                  <span className="text-muted-foreground">
                    Engineering Department
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">Annual Total</span>
                  <span className="text-muted-foreground font-semibold">
                    $30,000
                  </span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="mb-4 text-xl font-semibold">
                Additional Information
              </h2>
              <div className="grid gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">Requested By</span>
                  <span className="text-muted-foreground">
                    John Smith (Engineering Manager)
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">Request Date</span>
                  <span className="text-muted-foreground">
                    December 28, 2024
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">Status</span>
                  <Badge variant="secondary" className="w-fit">
                    Pending Approval
                  </Badge>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">Justification</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This software is critical for our cloud infrastructure
                    management and will enable the engineering team to scale
                    operations more efficiently. The per-seat pricing model
                    aligns with our team growth projections for Q1 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Software Purchase Card */}
        <div className="flex items-start justify-center lg:sticky lg:top-6 lg:h-fit lg:w-[400px]">
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
      </div>
    </div>
  )
}
