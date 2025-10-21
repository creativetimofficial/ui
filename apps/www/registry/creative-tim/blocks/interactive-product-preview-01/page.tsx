"use client"

import { useState } from "react"
import {
  Eye,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function InteractiveProductPreview01() {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <Badge
          variant="outline"
          className="border-primary/30 bg-primary/10 text-primary mb-4"
        >
          Room Previewer
        </Badge>
        <h2 className="my-4 text-4xl font-bold tracking-tight">
          Visualize Your Space
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
          Easily preview furniture, decor, and more in your space, ensuring
          everything fits perfectly and looks just right. It&apos;s the ultimate
          tool for hassle-free home customization and design!
        </p>
      </div>

      <div className="container mx-auto mt-14">
        <div className="relative">
          <img
            src="https://v3.material-tailwind.com/room.png"
            alt="Room preview"
            className="h-[680px] w-full rounded-2xl object-cover object-center shadow-2xl"
          />
          <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-tr from-black/30 via-black/10 to-transparent" />

          <div className="absolute top-6 right-6 bottom-6 left-6 !ml-auto flex max-w-[26rem] flex-col justify-between rounded-2xl border border-white/30 bg-white/90 px-6 py-6 shadow-2xl backdrop-blur-xl dark:bg-gray-900/90">
            <div>
              <div className="mb-4 flex items-start justify-between">
                <Badge className="bg-green-500 text-white">New Arrival</Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-9 w-9 transition-colors ${
                    isFavorite
                      ? "text-red-500 hover:text-red-600"
                      : "text-muted-foreground hover:text-red-500"
                  }`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`}
                  />
                </Button>
              </div>

              <div className="mx-auto mb-6 grid place-items-center">
                <div className="bg-muted/50 mb-4 rounded-xl p-6">
                  <img
                    src="https://v3.material-tailwind.com/vase.svg"
                    alt="Vase"
                    className="h-32 w-32"
                  />
                </div>
                <h3 className="text-2xl font-bold">Elegant Ceramic Vase</h3>

                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground text-sm">
                    (127 reviews)
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <p className="text-3xl font-bold">$149.90</p>
                  <span className="text-muted-foreground text-sm line-through">
                    $199.90
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mx-auto max-w-xs text-center text-sm leading-relaxed">
                Add a touch of sophistication to your home with our handcrafted
                ceramic vase.
              </p>

              <div className="bg-muted/50 mb-2 flex items-center justify-center gap-2 rounded-lg py-3">
                <Truck className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span className="text-sm font-medium">
                  Free shipping on orders over $100
                </span>
              </div>

              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center font-semibold">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button className="flex-1 gap-2" size="lg">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="shrink-0 gap-2">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute hidden lg:flex">
            <div className="group relative grid h-12 w-12 translate-x-[17rem] -translate-y-[30rem] cursor-pointer place-content-center rounded-full border-2 border-white bg-white shadow-xl transition-all hover:scale-110">
              <div className="bg-primary h-4 w-4 animate-pulse rounded-full"></div>
              <div className="absolute -top-12 left-1/2 hidden -translate-x-1/2 rounded-lg bg-white px-3 py-1.5 text-sm font-medium whitespace-nowrap shadow-lg group-hover:block dark:bg-gray-900">
                Ceramic Vase
              </div>
            </div>
            <div className="group relative grid h-12 w-12 translate-x-[26rem] -translate-y-[26rem] cursor-pointer place-content-center rounded-full border-2 border-white bg-white shadow-xl transition-all hover:scale-110">
              <div className="bg-primary h-4 w-4 animate-pulse rounded-full"></div>
              <div className="absolute -top-12 left-1/2 hidden -translate-x-1/2 rounded-lg bg-white px-3 py-1.5 text-sm font-medium whitespace-nowrap shadow-lg group-hover:block dark:bg-gray-900">
                Wall Art
              </div>
            </div>
            <div className="group relative grid h-12 w-12 translate-x-[5rem] -translate-y-[21rem] cursor-pointer place-content-center rounded-full border-2 border-white bg-white shadow-xl transition-all hover:scale-110">
              <div className="bg-primary h-4 w-4 animate-pulse rounded-full"></div>
              <div className="absolute -top-12 left-1/2 hidden -translate-x-1/2 rounded-lg bg-white px-3 py-1.5 text-sm font-medium whitespace-nowrap shadow-lg group-hover:block dark:bg-gray-900">
                Table Lamp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
