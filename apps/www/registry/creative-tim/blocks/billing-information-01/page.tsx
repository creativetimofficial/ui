"use client"

import { Building2, Pencil, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface BillingCardProps {
  company: string
  contact: string
  email: string
  vat: string
}

function BillingCard({ company, contact, email, vat }: BillingCardProps) {
  return (
    <Card className="border">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-background grid h-12 w-12 shrink-0 place-items-center rounded border">
            <Building2 className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-sm">{company}</CardTitle>
            <p className="text-muted-foreground text-sm">Company</p>
          </div>
        </div>
        <CardAction>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost">
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-sm">
          <span className="text-muted-foreground font-semibold">Contact: </span>
          <span className="font-medium">{contact}</span>
        </div>
        <div className="text-sm">
          <span className="text-muted-foreground font-semibold">
            Email Address:{" "}
          </span>
          <span className="font-medium">{email}</span>
        </div>
        <div className="text-sm">
          <span className="text-muted-foreground font-semibold">
            VAT Number:{" "}
          </span>
          <span className="font-medium">{vat}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default function BillingInformation01() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div>
          <h2 className="font-semibold">Billing Information</h2>
          <p className="text-muted-foreground text-sm">
            View and update your billing details quickly and easily.
          </p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" /> Add New Billing
        </Button>
      </div>
      <div className="mt-6 space-y-4">
        <BillingCard
          company="Burrito Vikings"
          contact="Emma Roberts"
          email="emma@mail.com"
          vat="FRB1235476"
        />
        <BillingCard
          company="Stone Tech Zone"
          contact="Marcel Glock"
          email="marcel@mail.com"
          vat="FRB1235476"
        />
        <BillingCard
          company="Fiber Notion"
          contact="Misha Stam"
          email="misha@mail.com"
          vat="FRB1235476"
        />
      </div>
    </div>
  )
}
