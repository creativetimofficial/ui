"use client"

import * as React from "react"
import { AlertTriangle, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ModalsBlock() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="grid min-h-screen w-full place-items-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[550px]">
          <button
            onClick={() => setIsOpen(false)}
            className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogHeader>
            <DialogTitle className="mb-2 text-xl">
              Transfer Showroom Ownership
            </DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground mt-2 text-sm">
            Switch control of this fashion showroom space to another user or
            organization.
          </p>

          <form className="mt-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="owner" className="font-semibold">
                Select new owner
              </Label>
              <Select>
                <SelectTrigger id="owner" className="w-full">
                  <SelectValue placeholder="Choose owner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="styling-team">Styling Team</SelectItem>
                  <SelectItem value="content-studio">Content Studio</SelectItem>
                  <SelectItem value="retail-partner">Retail Partner</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="handle" className="font-semibold">
                Confirm collection handle
              </Label>
              <Input id="handle" placeholder="resort-collection-2026" />
            </div>

            <Card className="border-yellow-500/50 bg-yellow-500/5">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600" />
                  <p className="text-muted-foreground text-sm">
                    Transferring ownership will revoke your access to draft
                    sets, unpublished campaigns, and internal analytics.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" variant="destructive">
                Transfer Access
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
