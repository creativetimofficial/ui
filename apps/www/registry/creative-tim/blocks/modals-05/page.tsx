"use client"

import * as React from "react"
import { CloudUpload, Trash, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const IMAGES = [
  {
    name: "cover-1.jpg",
    size: "140 KB",
  },
  {
    name: "cover-2.jpg",
    size: "288 KB",
  },
]

export default function ModalsBlock() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="grid min-h-screen w-full place-items-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <button
            onClick={() => setIsOpen(false)}
            className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogHeader>
            <DialogTitle className="mb-1 text-xl">Upload Files</DialogTitle>
            <p className="text-muted-foreground text-sm">
              Easily upload files to your account with just a few clicks.
            </p>
          </DialogHeader>

          <form className="mt-6 space-y-4">
            <Card className="border-2 border-dashed">
              <CardContent className="grid min-h-64 place-items-center p-6">
                <label htmlFor="upload" className="cursor-pointer">
                  <input type="file" className="hidden" id="upload" />
                  <div className="mx-auto max-w-md text-center">
                    <CloudUpload className="text-muted-foreground mx-auto mb-6 h-12 w-12" />
                    <p className="mb-2 font-semibold">
                      Drag and Drop or{" "}
                      <span className="underline">Choose a Local File</span>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Supported formats: .png, .jpg, .svg
                    </p>
                  </div>
                </label>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {IMAGES.map(({ name, size }) => (
                <Card key={name}>
                  <CardContent className="flex items-start justify-between p-3">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&crop=center&q=80"
                        alt={name}
                        className="h-12 w-12 rounded object-cover object-center"
                      />
                      <div className="space-y-1">
                        <p className="text-sm font-semibold">{name}</p>
                        <p className="text-muted-foreground text-sm">{size}</p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="shrink-0"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Upload</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
