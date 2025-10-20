"use client"

import * as React from "react"
import { AlertTriangle, X } from "lucide-react"

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
              Disable Collection Lock Rules
            </DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground mt-2 text-sm">
            Removing edit rules will allow unrestricted changes to your seasonal
            campaign folders and product groups.
          </p>

          <Card className="border-destructive/50 bg-destructive/5 my-6">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <AlertTriangle className="text-destructive h-4 w-4" />
                Access Restrictions Will Be Removed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Disabling these rules unlocks direct edits to sensitive assets
                and might affect internal syncs.
              </p>
            </CardContent>
          </Card>

          <div className="mb-6 space-y-3">
            <p className="text-sm font-semibold">This will impact:</p>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Designer review checkpoints</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Version freeze policies</span>
              </li>
            </ul>
          </div>

          <p className="text-muted-foreground mb-6 text-xs">
            Note: 0 edit lock rules currently active
          </p>

          <div className="flex items-center justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive">Disable Edit Locks</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
