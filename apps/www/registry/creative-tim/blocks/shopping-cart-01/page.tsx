"use client"

import { Lock, Package, ShoppingBag, Tag, Truck, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const CHECKOUT_PRODUCTS = [
  {
    name: "Wool Suit",
    price: "$1,300",
    product: "Silk",
    size: "XS",
    img: "https://v3.material-tailwind.com/coat-2.png",
    stock: "In Stock",
  },
  {
    name: "Premium Suit",
    price: "$700",
    product: "Linen",
    size: "M",
    img: "https://v3.material-tailwind.com/coat-1.png",
    stock: "In Stock",
  },
]

export default function ShoppingCart01() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Card className="rounded-2xl shadow-lg">
          <CardHeader className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-full">
                <ShoppingBag className="text-primary h-7 w-7" />
              </div>
            </div>
            <CardTitle className="text-4xl">Shopping Cart</CardTitle>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-5 py-2.5">
              <Truck className="h-5 w-5 text-green-600" />
              <p className="text-sm font-semibold text-green-700">
                You are eligible for Free Shipping
              </p>
            </div>
          </CardHeader>
          <CardContent>

            <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="col-span-2">
                <Card className="border-2">
                  <CardHeader className="px-6 gap-0 border-b">
                    <div className="flex items-center gap-2">
                      <Package className="text-primary h-5 w-5" />
                      <CardTitle className="text-xl">
                        Cart Items ({CHECKOUT_PRODUCTS.length})
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    {CHECKOUT_PRODUCTS.map(
                      ({ name, price, img, product, size, stock }, index) => (
                        <div key={index}>
                          <div className="p-6">
                            <div className="flex flex-col items-stretch gap-6 sm:flex-row">
                              <div className="bg-muted/50 h-36 w-36 shrink-0 overflow-hidden rounded-xl p-3">
                                <img
                                  src={img}
                                  alt={name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="flex h-auto flex-1 flex-col gap-4">
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex-1">
                                    <h4 className="text-xl font-bold">
                                      {name}
                                    </h4>
                                    <p className="text-muted-foreground mt-1.5 text-sm">
                                      {product}
                                    </p>
                                  </div>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive h-9 w-9 rounded-full"
                                  >
                                    <X className="h-5 w-5" />
                                  </Button>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                  <Badge
                                    variant="outline"
                                    className="gap-1.5 px-3 py-1"
                                  >
                                    <span className="text-xs">Size:</span>
                                    <span className="font-semibold">
                                      {size}
                                    </span>
                                  </Badge>
                                  <Badge className="gap-1.5 border-green-200 bg-green-50 px-3 py-1 text-green-700 hover:bg-green-100">
                                    {stock}
                                  </Badge>
                                </div>

                                <div className="mt-auto flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <span className="text-muted-foreground text-sm font-medium">
                                      Quantity:
                                    </span>
                                    <Select defaultValue="1">
                                      <SelectTrigger className="h-10 w-28">
                                        <SelectValue placeholder="Qty" />
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
                                  <p className="text-primary text-2xl font-bold">
                                    {price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {index < CHECKOUT_PRODUCTS.length - 1 && (
                            <Separator />
                          )}
                        </div>
                      )
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="col-span-1">
                <div className="sticky top-4">
                  <Card className="border-2">
                    <CardHeader className="px-6 gap-0 border-b">
                      <CardTitle className="text-xl">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4 p-6">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Subtotal
                          </span>
                          <span className="font-semibold">$2,090</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Shipping Tax
                          </span>
                          <span className="font-semibold text-green-600">
                            $0
                          </span>
                        </div>
                      </div>

                      <Separator />

                      <div className="p-6">
                        <div className="mb-3 flex items-center gap-2">
                          <Tag className="text-muted-foreground h-4 w-4" />
                          <label className="text-sm font-semibold">
                            Promo Code
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input
                            type="text"
                            placeholder="Enter code"
                            className="flex-1"
                          />
                          <Button variant="outline" className="shrink-0">
                            Apply
                          </Button>
                        </div>
                      </div>

                      <Separator />

                      <div className="bg-muted/30 space-y-4 p-6">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold">Order Total</span>
                          <span className="text-primary text-3xl font-bold">
                            $2,090
                          </span>
                        </div>
                        <Button className="w-full gap-2" size="lg">
                          <Lock className="h-5 w-5" />
                          Proceed to Checkout
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-green-50">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                          <Truck className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-green-900">
                            Free Shipping Applied
                          </p>
                          <p className="mt-1 text-sm text-green-700">
                            Estimated delivery: 3-5 business days
                          </p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
