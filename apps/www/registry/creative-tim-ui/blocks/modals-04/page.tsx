"use client";

import * as React from "react";
import { X, Trash } from "lucide-react";

import { Button } from "@/registry/creative-tim-ui/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/creative-tim-ui/ui/dialog";
import { Input } from "@/registry/creative-tim-ui/ui/input";
import { Label } from "@/registry/creative-tim-ui/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/creative-tim-ui/ui/select";
import { Textarea } from "@/registry/creative-tim-ui/ui/textarea";

export default function ModalsBlock() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="grid place-items-center w-full min-h-screen">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogHeader>
            <DialogTitle className="text-xl mb-1">
              Update Product Modal
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              Edit product features and save it.
            </p>
          </DialogHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
            {[...new Array(3)].map((_, i) => (
              <div
                key={i}
                className="relative w-full h-44 rounded-md overflow-hidden bg-muted"
              >
                <img
                  src={`https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center&q=80`}
                  alt={`Product ${i + 1}`}
                  className="w-full h-full object-cover object-center"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="!absolute bottom-2 right-2"
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
  );
}
