"use client"

import * as React from "react"
import { AlertCircle, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
              Permanently Remove Archive
            </DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground mt-2 text-sm">
            Erasing this fashion vault will wipe its data across your platform
            and collaborators.
          </p>

          <Card className="border-destructive/50 bg-destructive/5 my-6">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <AlertCircle className="text-destructive h-4 w-4" />
                Review Before Deleting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Once removed, associated content (lookbooks, notes, edits) will
                be lost forever.
              </p>
            </CardContent>
          </Card>

          <div className="mb-6 space-y-3">
            <p className="text-sm font-semibold">This action will:</p>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Deletes all digital outfits and metadata</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Disconnects synced creative briefs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>No change to billing or usage limits</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">I acknowledge and confirm</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
