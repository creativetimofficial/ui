"use client"

import { Button } from "@/registry/elevenlabs-ui/ui/button"
import { Checkbox } from "@/registry/elevenlabs-ui/ui/checkbox"
import { Input } from "@/registry/elevenlabs-ui/ui/input"
import { Label } from "@/registry/elevenlabs-ui/ui/label"

const OPTIONS = [
  {
    image: "https://v3.material-tailwind.com/coat-1.png",
    title: "Classic Suit",
    description: "Silk",
    size: "M",
    price: "$1,300",
  },
  {
    image: "https://v3.material-tailwind.com/coat-2.png",
    title: "Premium Suit",
    description: "Linen",
    size: "M",
    price: "$790",
  },
]

const PRICE_OPTIONS = [
  { value: "Subtotal", price: "$790" },
  { value: "Shipping estimate", price: "$0" },
  { value: "Tax estimate", price: "$5" },
]

export default function Checkout01() {
  return (
    <section className="p-6">
      <div className="grid lg:grid-cols-2 h-full min-h-[calc(100vh-48px)] grid-cols-1 items-center gap-x-10 gap-y-4">
        <div className="row-start-2 lg:row-start-1 lg:max-w-xl lg:mx-auto">
          <form className="space-y-12 mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" type="email" placeholder="someone@example.com" />
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree the{" "}
                  <a href="#" className="text-primary">
                    Terms & Conditions
                  </a>
                </Label>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Shipping Address</h3>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Street no." />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="City" />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="postal">Postal Code</Label>
                  <Input id="postal" placeholder="Postal Code" />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Country" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Payment Details</h3>
              <div className="space-y-2">
                <Label htmlFor="card">Card Details</Label>
                <Input id="card" placeholder="0000 0000 0000 0000" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="expiry">Expiration Date</Label>
                  <Input id="expiry" placeholder="00/00" />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="000" />
                </div>
              </div>
            </div>
            <Button className="w-full" size="lg">
              Place Order
            </Button>
          </form>
        </div>
        <div className="row-start-1 lg:row-start-1">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-6">
            {OPTIONS.map(({ image, title, description, size, price }, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="relative w-20 h-20 border rounded-md">
                  <img src={image} alt={title} className="w-full h-full object-cover p-1" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-muted-foreground">
                    {description} · Size {size}
                  </p>
                </div>
                <p className="font-semibold">{price}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-2 border-t pt-4">
            {PRICE_OPTIONS.map(({ value, price }) => (
              <div key={value} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{value}</span>
                <span className="text-muted-foreground">{price}</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold text-lg pt-2 border-t">
              <span>Total</span>
              <span>$795</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
