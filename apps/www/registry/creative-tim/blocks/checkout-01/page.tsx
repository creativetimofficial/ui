"use client"

import {
  CreditCard,
  Lock,
  Mail,
  MapPin,
  Package,
  ShoppingBag,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const OPTIONS = [
  {
    image: "https://v3.material-tailwind.com/coat-1.png",
    title: "Classic Suit",
    description: "Silk",
    size: "M",
    price: "$1,300",
    quantity: 1,
  },
  {
    image: "https://v3.material-tailwind.com/coat-2.png",
    title: "Premium Suit",
    description: "Linen",
    size: "M",
    price: "$790",
    quantity: 1,
  },
]

const PRICE_OPTIONS = [
  { value: "Subtotal", price: "$2,090" },
  { value: "Shipping estimate", price: "$0" },
  { value: "Tax estimate", price: "$5" },
]

export default function Checkout01() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p className="text-muted-foreground mt-2">
            Complete your order by providing your payment details
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-lg md:p-8 lg:p-12 dark:bg-gray-950">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <p className="text-muted-foreground text-sm">
                      We'll send order updates here
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-11"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="terms" className="mt-1" />
                  <Label
                    htmlFor="terms"
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </Label>
                </div>
              </div>

              <Separator />

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Shipping Address</h3>
                    <p className="text-muted-foreground text-sm">
                      Where should we deliver your order?
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      placeholder="123 Main Street"
                      className="h-11"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="New York"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal">Postal Code</Label>
                      <Input id="postal" placeholder="10001" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" placeholder="USA" className="h-11" />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <CreditCard className="text-primary h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Payment Details</h3>
                    <p className="text-muted-foreground text-sm">
                      Your payment information is secure
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="gap-1 border-green-500/30 bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400"
                  >
                    <Lock className="h-3 w-3" />
                    Secure
                  </Badge>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card">Card Number</Label>
                    <Input
                      id="card"
                      placeholder="1234 5678 9012 3456"
                      className="h-11"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiration Date</Label>
                      <Input id="expiry" placeholder="MM/YY" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" className="h-11" />
                    </div>
                  </div>
                </div>
              </div>

              <Button className="mt-4 h-12 w-full text-base" size="lg">
                <Lock className="mr-2 h-4 w-4" />
                Place Order - $2,095
              </Button>
            </div>

            <div className="lg:sticky lg:top-8 lg:h-fit">
              <div className="bg-muted/30 rounded-xl border p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <ShoppingBag className="text-primary h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold">Order Summary</h2>
                </div>

                <div className="space-y-4">
                  {OPTIONS.map(
                    (
                      { image, title, description, size, price, quantity },
                      index
                    ) => (
                      <div
                        key={index}
                        className="bg-background hover:bg-muted/50 flex items-start gap-4 rounded-lg border p-3 transition-colors"
                      >
                        <div className="relative h-20 w-20 overflow-hidden rounded-md border">
                          <img
                            src={image}
                            alt={title}
                            className="h-full w-full object-cover p-1"
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="leading-tight font-semibold">{title}</p>
                          <p className="text-muted-foreground text-sm">
                            {description} · Size {size}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            Qty: {quantity}
                          </p>
                        </div>
                        <p className="font-semibold">{price}</p>
                      </div>
                    )
                  )}
                </div>

                <Separator className="my-6" />

                <div className="space-y-3">
                  {PRICE_OPTIONS.map(({ value, price }) => (
                    <div key={value} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{value}</span>
                      <span className="font-medium">{price}</span>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold">$2,095</span>
                </div>

                <div className="bg-muted/50 mt-6 flex items-start gap-2 rounded-lg p-4">
                  <Package className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Free Shipping</p>
                    <p className="text-muted-foreground text-xs">
                      Your order qualifies for free standard shipping
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
