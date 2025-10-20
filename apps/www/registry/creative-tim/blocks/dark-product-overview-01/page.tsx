"use client"

import { useState } from "react"
import { Heart, Package, Shield, ShoppingCart, Star, Truck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const DATA = [
  {
    title: "Features",
    icon: Package,
    desc: `Premium cashmere blend with cable-knit pattern. Features a classic V-neck design, 
    ribbed cuffs and hem for a perfect fit. Made with sustainable materials and ethically sourced 
    fibers. Temperature-regulating properties keep you comfortable in any season.`,
  },
  {
    title: "Product Care",
    icon: Shield,
    desc: `Hand wash in cold water with mild detergent or dry clean for best results. 
    Lay flat to dry, do not wring or twist. Store folded in a cool, dry place. 
    Use a fabric shaver to remove any pilling. Steam gently to refresh between wears.`,
  },
  {
    title: "Shipping",
    icon: Truck,
    desc: `Free standard shipping on all orders over $100. Express shipping available at checkout. 
    Orders are processed within 1-2 business days. International shipping available to select countries. 
    30-day hassle-free returns and exchanges.`,
  },
]

export default function DarkProductOverview01() {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <section className="bg-primary container mx-auto rounded-2xl">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <div className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-white/30 bg-white/10 text-white"
          >
            Shop Previewer
          </Badge>
          <h2 className="my-4 text-4xl font-bold tracking-tight text-white">
            New Collection
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80">
            Easily preview furniture, decor, and more in your space, ensuring
            everything fits perfectly and looks just right. It&apos;s the
            ultimate tool for hassle-free home customization and design!
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-x-12 gap-y-12 lg:flex-row">
          <div className="flex-1">
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-2xl font-bold text-white">Elegant Suite</h3>
              <Badge className="bg-green-500 text-white">New Arrival</Badge>
            </div>

            <div className="mb-4 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-white/70">(127 reviews)</span>
            </div>

            <div className="mb-6 flex items-baseline gap-3">
              <p className="text-4xl font-bold text-white">$449.90</p>
              <span className="text-lg text-white/50 line-through">
                $599.90
              </span>
              <Badge
                variant="outline"
                className="border-green-500/30 bg-green-500/10 text-green-400"
              >
                25% OFF
              </Badge>
            </div>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80">
              Add a touch of sophistication to your home with our handcrafted
              ceramic vase. Each piece is uniquely made, blending seamlessly
              into both modern and classic decors.
            </p>

            <div className="mb-8 flex items-center gap-2 rounded-lg bg-white/10 p-4">
              <Truck className="h-5 w-5 shrink-0 text-white" />
              <span className="text-sm text-white">
                Free shipping on orders over $100
              </span>
            </div>

            <div className="mb-4 flex w-full items-center gap-3">
              <Button
                size="lg"
                className="flex-1 gap-2 bg-white text-black hover:bg-white/90 sm:w-64 sm:flex-none"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className={`shrink-0 ${
                  isFavorite
                    ? "text-red-500 hover:text-red-600"
                    : "text-white/80 hover:text-red-500"
                }`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`}
                />
              </Button>
            </div>

            <div className="mt-12 max-w-2xl">
              <Tabs defaultValue="Features" className="w-full">
                <TabsList className="h-auto w-full justify-start rounded-none border-b border-white/20 bg-transparent p-0">
                  {DATA.map(({ title, icon: Icon }) => (
                    <TabsTrigger
                      key={title}
                      value={title}
                      className="gap-2 rounded-none px-4 py-3 text-white data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      <Icon className="h-4 w-4" />
                      {title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {DATA.map(({ title, desc }) => (
                  <TabsContent
                    key={title}
                    value={title}
                    className="mt-6 text-white/80"
                  >
                    <p className="leading-relaxed">{desc}</p>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>

          <div className="w-full lg:w-auto lg:max-w-lg">
            <div className="group relative overflow-hidden rounded-2xl border-2 border-white/20 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=973"
                alt="Elegant Suite"
                className="w-full rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
