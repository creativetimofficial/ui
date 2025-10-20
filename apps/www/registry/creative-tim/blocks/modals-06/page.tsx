"use client"

import * as React from "react"
import { Unlock, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
        <DialogContent className="sm:max-w-[500px]">
          <button
            onClick={() => setIsOpen(false)}
            className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <Unlock className="text-primary mb-6 h-12 w-12" />
              <DialogHeader>
                <DialogTitle className="mb-2 text-xl">
                  Publish Capsule Collection
                </DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground mt-2 text-sm">
                This action will expose your private capsule collection to
                public viewing across all fashion storefronts.
              </p>
            </div>
          </div>

          <Card className="my-6">
            <CardContent className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">
                  Collection
                </span>
                <span className="text-sm font-medium">fall-winter-vault</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Views</span>
                <span className="text-sm font-medium">0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Likes</span>
                <span className="text-sm font-medium">0</span>
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
            <Button type="submit">Make Collection Public</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
