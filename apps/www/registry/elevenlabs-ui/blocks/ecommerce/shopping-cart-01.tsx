"use client"

import { Lock, X } from "lucide-react"
import { Button } from "@/registry/elevenlabs-ui/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/elevenlabs-ui/ui/card"
import { Input } from "@/registry/elevenlabs-ui/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/elevenlabs-ui/ui/select"

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
      <div className="mx-auto container mb-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <p className="text-lg mt-2 text-muted-foreground">
            You are eligible for Free Shipping.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-y-16 lg:grid-cols-3">
          <div className="col-span-2 flex flex-col gap-y-12 w-full max-w-2xl">
            {CHECKOUT_PRODUCTS.map(({ name, price, img, product, size }, index) => (
              <Card key={index} className="border-0 shadow-none bg-transparent">
                <div className="flex sm:flex-row flex-col items-stretch gap-4">
                  <div className="w-40 h-40 rounded-md border shrink-0">
                    <img src={img} alt={name} className="w-full h-full object-cover p-2" />
                  </div>
                  <div className="flex gap-4 h-auto flex-col flex-1">
                    <div className="flex items-center gap-4 justify-between">
                      <div className="flex divide-x items-center">
                        <p className="text-lg font-semibold pr-4">{name}</p>
                        <p className="text-lg text-primary font-semibold pl-4">{price}</p>
                      </div>
                      <Button size="icon" variant="outline" className="h-6 w-6 rounded-full">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-x-8 gap-y-4 flex-wrap text-muted-foreground">
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
            ))}
          </div>
          <div className="col-span-1">
            <Card>
              <CardHeader className="p-4">
                <h3 className="text-lg font-semibold">Order Summary</h3>
              </CardHeader>
              <CardContent className="p-0 border-t divide-y">
                <div className="flex p-4 items-center justify-between">
                  <span className="text-sm text-muted-foreground">Subtotal</span>
                  <span className="text-sm text-muted-foreground">$2,090</span>
                </div>
                <div className="flex p-4 items-center justify-between">
                  <span className="text-sm text-muted-foreground">Shipping Tax</span>
                  <span className="text-sm text-muted-foreground">$0</span>
                </div>
                <div className="gap-4 p-4 flex items-start justify-between">
                  <Input type="email" placeholder="Enter your email" />
                  <Button variant="outline" className="shrink-0">
                    Apply
                  </Button>
                </div>
                <div className="flex p-4 items-center justify-between">
                  <span className="font-semibold">Order Total</span>
                  <span className="font-semibold">$2,090</span>
                </div>
                <div className="p-4">
                  <Button className="w-full" size="lg">
                    <Lock className="h-4 w-4 mr-2" />
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
