"use client"

import { useEffect, useState } from "react"
import {
  Archive,
  CheckCircle,
  Clock,
  FileText,
  Home,
  Mail,
  MapPin,
  Package,
  Phone,
  Truck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

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
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <h2 className="text-3xl font-bold">Order #1234</h2>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                In Transit
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="text-muted-foreground flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>
                  Placed on <span className="font-semibold">April 1, 2024</span>
                </span>
              </div>
              <div className="text-muted-foreground flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span className="font-semibold">1 item</span>
              </div>
            </div>
          </div>
          <Button className="gap-2">
            <FileText className="h-4 w-4" />
            View Invoice
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="grid w-full grid-cols-1 gap-8 border-b p-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="bg-muted/30 relative h-32 w-32 overflow-hidden rounded-xl border p-2 md:h-40 md:w-40">
                <img
                  src="https://v3.material-tailwind.com/coat-2.png"
                  alt="Premium Suit"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Premium Suit</h3>
                  <p className="text-2xl font-bold">$790</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The time is now for it to be okay to be great. People in
                    this world shun people for being great.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Badge variant="outline">Size: M</Badge>
                  <Badge variant="outline">Qty: 1</Badge>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                    <MapPin className="text-primary h-4 w-4" />
                  </div>
                  <p className="font-semibold">Delivery Address</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  362 Ridgewood Avenue
                  <br />
                  Alaska 99669, USA
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                    <Mail className="text-primary h-4 w-4" />
                  </div>
                  <p className="font-semibold">Shipping Updates</p>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-muted-foreground flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5" />
                    michael@email.com
                  </p>
                  <p className="text-muted-foreground flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5" />
                    (307) 682-8835
                  </p>
                </div>
                <Button variant="outline" size="sm" className="mt-2">
                  Edit Contact
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="w-full p-6 sm:p-8">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex-1">
                <h3 className="mb-6 text-lg font-semibold">Order Timeline</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full shadow-md">
                        <Home className="h-5 w-5 text-white" />
                      </div>
                      <div className="bg-primary my-2 w-0.5 flex-1" />
                    </div>
                    <div className="pb-6">
                      <div className="mb-1 flex items-center gap-2">
                        <p className="font-semibold">Order Placed</p>
                        <Badge
                          variant="outline"
                          className="border-green-500/30 bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400"
                        >
                          Complete
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Your order was placed on April 1, 2024
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full shadow-md">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div className="bg-primary my-2 w-0.5 flex-1" />
                    </div>
                    <div className="pb-6">
                      <div className="mb-1 flex items-center gap-2">
                        <p className="font-semibold">Order Confirmed</p>
                        <Badge
                          variant="outline"
                          className="border-green-500/30 bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400"
                        >
                          Complete
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Your order has been confirmed on April 2, 2024
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full shadow-md">
                        <Archive className="h-5 w-5 text-white" />
                      </div>
                      <div className="bg-border my-2 w-0.5 flex-1" />
                    </div>
                    <div className="pb-6">
                      <div className="mb-1 flex items-center gap-2">
                        <p className="font-semibold">Order Shipped</p>
                        <Badge
                          variant="outline"
                          className="border-blue-500/30 bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400"
                        >
                          In Progress
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Your order has been shipped on April 3, 2024
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed">
                        <Truck className="text-muted-foreground h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <p className="text-muted-foreground font-semibold">
                          Order Delivered
                        </p>
                        <Badge
                          variant="outline"
                          className="text-muted-foreground"
                        >
                          Pending
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Expected delivery on April 6, 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="lg:hidden" />

              <div className="w-full lg:w-80">
                <div className="bg-muted/30 rounded-xl border p-6">
                  <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
                  <div className="space-y-3">
                    {OPTIONS.map(({ title, value }) => (
                      <div key={title} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{title}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">Order Total</span>
                    <span className="text-2xl font-bold">$1,785.00</span>
                  </div>

                  <div className="bg-primary/10 mt-6 flex items-start gap-2 rounded-lg p-4">
                    <Truck className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Track Your Order</p>
                      <p className="text-muted-foreground text-xs">
                        Estimated delivery: April 6, 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
