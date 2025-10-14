"use client"

import { useState, useEffect } from "react"
import { Home, CheckCircle, Archive, Truck } from "lucide-react"
import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/creative-tim-ui/ui/card"

const OPTIONS = [
  { title: "Subtotal", value: "$1,780.00" },
  { title: "Shipping estimate", value: "$0" },
  { title: "Tax estimate", value: "$5" },
]

export default function OrderDetails01() {
  const [step, setStep] = useState("3")
  const [isVertical, setIsVertical] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-10 flex items-start gap-4 flex-wrap justify-between">
          <div>
            <h2 className="text-xl font-bold">Order ID 1234</h2>
            <p className="text-muted-foreground mt-2">
              Order placed on <span className="font-semibold">April 1, 2024</span>
            </p>
          </div>
          <Button>View Invoice</Button>
        </div>
        <Card>
          <CardHeader className="grid w-full md:grid-cols-2 grid-cols-1 gap-10 border-b p-6">
            <div className="flex gap-4">
              <img
                src="https://v3.material-tailwind.com/coat-2.png"
                alt="Premium Suit"
                className="md:h-48 h-32"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Premium Suit</h3>
                <p className="font-semibold">$790</p>
                <p className="text-muted-foreground [text-wrap:_balance]">
                  The time is now for it to be okay to be great. People in this
                  world shun people for being great.
                </p>
                <p className="font-semibold">Size: M</p>
              </div>
            </div>
            <div className="flex justify-between gap-6">
              <div className="space-y-2">
                <p className="font-semibold">Delivery Address</p>
                <p className="text-muted-foreground">
                  362 Ridgewood, Alaska 99669, USA.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Shipping Updates</p>
                <p className="text-muted-foreground">
                  michael@email.com (307) 682-8835
                </p>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="w-full sm:mt-4 p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <Home className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-px flex-1 bg-border my-2" />
                    </div>
                    <div className="pb-6">
                      <p className="font-semibold">Order Placed</p>
                      <p className="text-sm text-muted-foreground">
                        Your order was placed on April 1, 2024
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-px flex-1 bg-border my-2" />
                    </div>
                    <div className="pb-6">
                      <p className="font-semibold">Order Confirmed</p>
                      <p className="text-sm text-muted-foreground">
                        Your order has been confirmed on April 2, 2024
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <Archive className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-px flex-1 bg-border my-2" />
                    </div>
                    <div className="pb-6">
                      <p className="font-semibold">Order Shipped</p>
                      <p className="text-sm text-muted-foreground">
                        Your order has been shipped on April 3, 2024
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <Truck className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-muted-foreground">Order Delivered</p>
                      <p className="text-sm text-muted-foreground">
                        Expected delivery on April 6, 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-64 space-y-4">
                {OPTIONS.map(({ title, value }) => (
                  <div key={title} className="flex justify-between">
                    <span className="text-sm text-muted-foreground">{title}</span>
                    <span className="text-sm font-semibold">{value}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-4 border-t">
                  <span className="font-semibold">Order Total</span>
                  <span className="font-semibold">$1,785.00</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
