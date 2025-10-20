"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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

export default function Cruds01() {
  return (
    <section className="grid min-h-screen place-items-center py-16">
      <Card className="mx-auto w-full max-w-2xl p-6 lg:p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Edit Apparel Item</h3>
          <p className="text-muted-foreground mt-1 text-sm">
            Update product information, pricing, and categorization for your
            fashion inventory.
          </p>
        </div>
        <form action="#" className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="productName">Product Name</Label>
            <Input
              id="productName"
              name="productName"
              type="text"
              placeholder="e.g. Slim Fit Denim Jacket"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="brand">Designer Brand</Label>
            <Input
              id="brand"
              name="brand"
              type="text"
              placeholder="e.g. Balenciaga"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Retail Price ($)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              placeholder="e.g. 199"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select name="category">
              <SelectTrigger id="category" className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="outerwear">Outerwear</SelectItem>
                <SelectItem value="tops">Tops</SelectItem>
                <SelectItem value="bottoms">Bottoms</SelectItem>
                <SelectItem value="footwear">Footwear</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Product Details</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Material, fit, washing instructions..."
              rows={4}
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              Save Changes
            </Button>
            <Button type="button" variant="destructive" className="flex-1">
              Remove Item
            </Button>
          </div>
        </form>
      </Card>
    </section>
  )
}
