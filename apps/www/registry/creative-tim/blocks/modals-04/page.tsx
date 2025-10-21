"use client"

import * as React from "react"
import { Trash, X } from "lucide-react"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ModalsBlock() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="grid min-h-screen w-full place-items-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[700px]">
          <button
            onClick={() => setIsOpen(false)}
            className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogHeader>
            <DialogTitle className="mb-1 text-xl">
              Update Product Modal
            </DialogTitle>
            <p className="text-muted-foreground text-sm">
              Edit product features and save it.
            </p>
          </DialogHeader>

          <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[...new Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-muted relative h-44 w-full overflow-hidden rounded-md"
              >
                <img
                  src={`https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&h=400&fit=crop&crop=center&q=80`}
                  alt={`Product ${i + 1}`}
                  className="h-full w-full object-cover object-center"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="!absolute right-2 bottom-2"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="productName" className="font-semibold">
                  Product Name
                </Label>
                <Input id="productName" placeholder="Laptop" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category" className="font-semibold">
                  Category
                </Label>
                <Select>
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="price" className="font-semibold">
                  Price
                </Label>
                <Input id="price" placeholder="1000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand" className="font-semibold">
                  Brand
                </Label>
                <Select>
                  <SelectTrigger id="brand" className="w-full">
                    <SelectValue placeholder="Select Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="samsung">Samsung</SelectItem>
                    <SelectItem value="microsoft">Microsoft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="font-semibold">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Write something about your product."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags" className="font-semibold">
                Tags
              </Label>
              <Input
                id="tags"
                placeholder="Add up to 10 tags, separated by commas (,)"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Update Product</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
