"use client"

import { Lock, Package, ShoppingBag, Tag, Truck, X } from "lucide-react"

import { Badge } from "@/registry/creative-tim-ui/ui/badge"
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
import { Separator } from "@/registry/creative-tim-ui/ui/separator"

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
          <CardContent className="p-8 md:p-12">
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                  <ShoppingBag className="text-primary h-6 w-6" />
                </div>
              </div>
              <h2 className="text-3xl font-bold">Shopping Cart</h2>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2">
                <Truck className="h-4 w-4 text-green-600" />
                <p className="text-sm font-medium text-green-700">
                  You are eligible for Free Shipping
                </p>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="col-span-2 flex w-full flex-col gap-6">
                <div className="mb-2 flex items-center gap-2">
                  <Package className="text-muted-foreground h-5 w-5" />
                  <h3 className="text-lg font-semibold">
                    Cart Items ({CHECKOUT_PRODUCTS.length})
                  </h3>
                </div>

                {CHECKOUT_PRODUCTS.map(
                  ({ name, price, img, product, size, stock }, index) => (
                    <Card
                      key={index}
                      className="border-2 transition-shadow hover:shadow-md"
                    >
                      <CardContent className="p-4">
                        <div className="flex flex-col items-stretch gap-4 sm:flex-row">
                          <div className="bg-muted h-32 w-32 shrink-0 overflow-hidden rounded-lg">
                            <img
                              src={img}
                              alt={name}
                              className="h-full w-full object-cover p-2"
                            />
                          </div>
                          <div className="flex h-auto flex-1 flex-col gap-3">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h4 className="text-lg font-semibold">
                                  {name}
                                </h4>
                                <p className="text-muted-foreground mt-1 text-sm">
                                  {product}
                                </p>
                              </div>
                              <div className="flex items-center gap-3">
                                <p className="text-primary text-xl font-bold">
                                  {price}
                                </p>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive h-8 w-8 rounded-full"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                              <Badge variant="outline" className="gap-1">
                                Size: {size}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="border-green-200 bg-green-50 text-green-700"
                              >
                                {stock}
                              </Badge>
                            </div>

                            <div className="mt-auto flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-muted-foreground text-sm">
                                  Quantity:
                                </span>
                                <Select defaultValue="1">
                                  <SelectTrigger className="w-24">
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
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                )}
              </div>

              <div className="col-span-1">
                <div className="sticky top-4">
                  <Card className="border-2">
                    <CardHeader className="p-6">
                      <h3 className="text-xl font-bold">Order Summary</h3>
                    </CardHeader>
                    <Separator />
                    <CardContent className="p-0">
                      <div className="space-y-4 p-6">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Subtotal
                          </span>
                          <span className="font-medium">$2,090</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Shipping Tax
                          </span>
                          <span className="font-medium text-green-600">$0</span>
                        </div>
                      </div>

                      <Separator />

                      <div className="p-6">
                        <div className="mb-2 flex items-center gap-2">
                          <Tag className="text-muted-foreground h-4 w-4" />
                          <label className="text-sm font-medium">
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
                          <span className="text-primary text-2xl font-bold">
                            $2,090
                          </span>
                        </div>
                        <Button className="w-full gap-2" size="lg">
                          <Lock className="h-4 w-4" />
                          Proceed to Checkout
                        </Button>
                      </div>

                      <div className="bg-green-50 p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                            <Truck className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-green-900">
                              Free Shipping Applied
                            </p>
                            <p className="text-muted-foreground mt-1 text-xs">
                              Estimated delivery: 3-5 business days
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
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
