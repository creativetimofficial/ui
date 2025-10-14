"use client"

import { Lock, X } from "lucide-react"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/creative-tim-ui/ui/card"
import { Input } from "@/registry/creative-tim-ui/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/creative-tim-ui/ui/select"

const CHECKOUT_PRODUCTS = [
  {
    name: "Wool Suit",
    price: "$1,300",
    product: "Silk",
    size: "Size: XS",
    img: "https://v3.material-tailwind.com/coat-2.png",
  },
  {
    name: "Premium Suit",
    price: "$700",
    product: "Linen",
    size: "Size: M",
    img: "https://v3.material-tailwind.com/coat-1.png",
  },
]

export default function ShoppingCart01() {
  return (
    <section className="py-16">
      <div className="container mx-auto mb-24">
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <p className="text-muted-foreground mt-2 text-lg">
            You are eligible for Free Shipping.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-y-16 lg:grid-cols-3">
          <div className="col-span-2 flex w-full max-w-2xl flex-col gap-y-12">
            {CHECKOUT_PRODUCTS.map(
              ({ name, price, img, product, size }, index) => (
                <Card
                  key={index}
                  className="border-0 bg-transparent shadow-none"
                >
                  <div className="flex flex-col items-stretch gap-4 sm:flex-row">
                    <div className="h-40 w-40 shrink-0 rounded-md border">
                      <img
                        src={img}
                        alt={name}
                        className="h-full w-full object-cover p-2"
                      />
                    </div>
                    <div className="flex h-auto flex-1 flex-col gap-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center divide-x">
                          <p className="pr-4 text-lg font-semibold">{name}</p>
                          <p className="text-primary pl-4 text-lg font-semibold">
                            {price}
                          </p>
                        </div>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-6 w-6 rounded-full"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-muted-foreground flex flex-wrap items-center gap-x-8 gap-y-4">
                        <span>{product}</span>
                        <span>{size}</span>
                        <span className="text-green-600">In Stock</span>
                      </div>
                      <div className="mt-auto">
                        <Select defaultValue="1">
                          <SelectTrigger className="w-40">
                            <SelectValue placeholder="Amount" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            )}
          </div>
          <div className="col-span-1">
            <Card>
              <CardHeader className="p-4">
                <h3 className="text-lg font-semibold">Order Summary</h3>
              </CardHeader>
              <CardContent className="divide-y border-t p-0">
                <div className="flex items-center justify-between p-4">
                  <span className="text-muted-foreground text-sm">
                    Subtotal
                  </span>
                  <span className="text-muted-foreground text-sm">$2,090</span>
                </div>
                <div className="flex items-center justify-between p-4">
                  <span className="text-muted-foreground text-sm">
                    Shipping Tax
                  </span>
                  <span className="text-muted-foreground text-sm">$0</span>
                </div>
                <div className="flex items-start justify-between gap-4 p-4">
                  <Input type="email" placeholder="Enter your email" />
                  <Button variant="outline" className="shrink-0">
                    Apply
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4">
                  <span className="font-semibold">Order Total</span>
                  <span className="font-semibold">$2,090</span>
                </div>
                <div className="p-4">
                  <Button className="w-full" size="lg">
                    <Lock className="mr-2 h-4 w-4" />
                    Checkout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
