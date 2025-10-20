"use client"

import * as React from "react"
import { TriangleAlert, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ModalsBlock() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="grid min-h-screen w-full place-items-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <button
            onClick={() => setIsOpen(false)}
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <TriangleAlert className="text-destructive mb-6 h-14 w-14" />
              <DialogHeader>
                <DialogTitle className="mb-1 text-xl">
                  Reset Settings
                </DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground mt-2 max-w-xl text-sm">
                Are you sure you want to reset all settings to their default
                values? This action cannot be undone.
              </p>
            </div>
          </div>

          <form className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reset" className="text-sm">
                Please type{" "}
                <span className="text-foreground font-semibold">
                  &quot;Reset settings&quot;
                </span>{" "}
                to confirm.
              </Label>
              <div className="flex w-full flex-col items-center gap-2 sm:flex-row">
                <Input
                  id="reset"
                  placeholder="Reset settings"
                  className="flex-1"
                />
                <Button type="submit" className="w-full shrink-0 sm:w-auto">
                  I understand, reset settings
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
