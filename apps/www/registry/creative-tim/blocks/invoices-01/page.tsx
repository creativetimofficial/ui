"use client"

import { Download } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const DATA = [
  {
    name: "INV-24 #MS-415646",
    date: "October 15, 2024",
    amount: 2500,
    badge: "24 Days",
    isOverdue: false,
  },
  {
    name: "INV-23 #MS-415740",
    date: "October 10, 2024",
    amount: 1750,
    badge: "20 Days",
    isOverdue: false,
  },
  {
    name: "INV-22 #MS-946285",
    date: "September 15, 2024",
    amount: 1500,
    badge: "18 Days",
    isOverdue: false,
  },
  {
    name: "INV-21 #MS-739734",
    date: "September 10, 2024",
    amount: 2990,
    badge: "3 Days Overdue",
    isOverdue: true,
  },
  {
    name: "INV-20 #MS-848649",
    date: "August 15, 2024",
    amount: 3500,
    badge: "3 Days Overdue",
    isOverdue: true,
  },
]

export default function Invoices01() {
  return (
    <div className="mx-auto max-w-xl p-6">
      <div className="dark:bg-card rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-semibold">Invoices</h2>
            <p className="text-muted-foreground text-sm">
              Track and monitor your financial activity.
            </p>
          </div>
          <Button size="sm" variant="outline">
            Export
          </Button>
        </div>
        <div className="mt-6">
          {DATA.map(({ name, date, amount, badge, isOverdue }, index) => (
            <div key={name}>
              <div className="flex flex-wrap items-center justify-between gap-6 py-6">
                <div className="basis-full space-y-0.5 sm:basis-auto">
                  <p className="text-lg font-semibold">{name}</p>
                  <p className="text-muted-foreground text-sm">{date}</p>
                </div>
                <Badge
                  variant={isOverdue ? "destructive" : "default"}
                  className={
                    isOverdue
                      ? "w-max sm:ml-auto"
                      : "w-max bg-green-100 text-green-800 hover:bg-green-100 sm:ml-auto"
                  }
                >
                  {badge}
                </Badge>
                <p className="text-end text-sm font-semibold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(amount)}
                </p>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Download className="h-5 w-5" />
                </Button>
              </div>
              {index < DATA.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
