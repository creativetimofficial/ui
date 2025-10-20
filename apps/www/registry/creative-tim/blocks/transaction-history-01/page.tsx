"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon, ChevronDown, ChevronUp, Clock } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const DATA = {
  "March 2023": [
    {
      name: "Netflix",
      date: "27 March 2026, at 12:30 PM",
      value: 2500,
      status: "decreasing" as const,
    },
    {
      name: "Apple",
      date: "27 March 2026, at 04:30 AM",
      value: 2000,
      status: "increasing" as const,
    },
  ],
  "February 2023": [
    {
      name: "Stripe",
      date: "26 March 2026, at 13:45 PM",
      value: 2500,
      status: "decreasing" as const,
    },
    {
      name: "HubSpot",
      date: "26 March 2023, at 12:30 PM",
      value: 750,
      status: "increasing" as const,
    },
    {
      name: "Figma",
      date: "26 March 2023, at 08:30 AM",
      value: 1400,
      status: "increasing" as const,
    },
    {
      name: "Webflow",
      date: "26 March 2023, at 05:00 AM",
      value: 0,
      status: "pending" as const,
    },
  ],
}

const ICONS = {
  increasing: ChevronUp,
  decreasing: ChevronDown,
  pending: Clock,
}

const COLORS = {
  increasing: "text-green-600",
  decreasing: "text-red-600",
  pending: "text-muted-foreground",
}

const ICON_COLORS = {
  increasing: "text-green-600",
  decreasing: "text-red-600",
  pending: "text-black dark:text-white",
}

const PREFIX = {
  increasing: "+",
  decreasing: "-",
  pending: "",
}

export default function TransactionHistory01() {
  const [date, setDate] = React.useState<Date>(new Date(2024, 9, 10))

  return (
    <div className="mx-auto max-w-xl p-6">
      <div className="dark:bg-card rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="font-semibold">History Transactions</h2>
            <p className="text-muted-foreground text-sm">
              Track and monitor your financial activity.
            </p>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal sm:w-48",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(day) => day && setDate(day)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="mt-6">
          {(Object.keys(DATA) as Array<keyof typeof DATA>).map((month, key) => {
            return (
              <div key={key} className="mb-6 last:mb-0">
                <p className="text-muted-foreground mb-2 ml-2.5 font-semibold">
                  {month}
                </p>
                <div className="space-y-2">
                  {DATA[month].map(({ name, value, date, status }) => {
                    const Icon = ICONS[status]

                    return (
                      <div
                        key={name}
                        className="flex items-center gap-4 rounded-lg border p-4"
                      >
                        <div className="bg-card text-card-foreground hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-sm sm:flex">
                          <Icon
                            className={cn("h-5 w-5", ICON_COLORS[status])}
                          />
                        </div>
                        <div className="mx-0 space-y-0.5 sm:mx-2">
                          <p className="font-semibold">{name}</p>
                          <p className="text-muted-foreground text-sm">
                            {date}
                          </p>
                        </div>
                        <p
                          className={cn(
                            "mx-2 ml-auto text-sm font-semibold",
                            COLORS[status]
                          )}
                        >
                          {PREFIX[status]}{" "}
                          {value
                            ? new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                              }).format(value)
                            : "Pending"}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
