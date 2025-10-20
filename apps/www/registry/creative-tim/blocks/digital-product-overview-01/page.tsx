"use client"

import { Eye, Lock, ShoppingCart, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const data = [
  {
    name: "HTML Version",
    desc: "Pure HTML/CSS with Tailwind, perfect for static websites.",
    price: "$39",
    popular: false,
  },
  {
    name: "React Version",
    desc: "React components with TypeScript support included.",
    price: "$49",
    popular: true,
  },
  {
    name: "Angular Version",
    desc: "Angular components with full type definitions.",
    price: "$99",
    popular: false,
  },
]

export default function DigitalProductOverview01() {
  return (
    <section className="container mx-auto py-16">
      <nav className="mb-8 flex items-center gap-2 text-sm">
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Home
        </a>
        <span className="text-muted-foreground">/</span>
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Templates
        </a>
        <span className="text-muted-foreground">/</span>
        <span className="text-foreground font-medium">Digital Product</span>
      </nav>

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="group bg-muted/30 relative overflow-hidden rounded-2xl border p-4 shadow-xl transition-all hover:shadow-2xl">
          <img
            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/headers-thumbnail.jpg"
            alt="Digital product preview"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        <div className="flex flex-col">
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-3">
              <h2 className="text-3xl font-bold tracking-tight">
                Premium UI Kit
              </h2>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              >
                Best Seller
              </Badge>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              A comprehensive collection of beautifully crafted components and
              templates. Built with modern web technologies and best practices
              for seamless integration.
            </p>
          </div>

          <div className="bg-muted/50 mb-6 flex items-center gap-6 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">4.9/5</span>
              <span className="text-muted-foreground text-sm">
                (127 reviews)
              </span>
            </div>
            <div className="bg-border h-4 w-px" />
            <div className="flex items-center gap-2 text-sm">
              <Lock className="text-muted-foreground h-4 w-4" />
              <span className="font-semibold">1,234</span>
              <span className="text-muted-foreground">sales</span>
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-4 text-lg font-semibold">Choose your version</p>
            <RadioGroup defaultValue="React Version" className="gap-3">
              {data.map(({ name, desc, price, popular }) => (
                <div
                  key={name}
                  className="group/item bg-card hover:border-primary rounded-lg border transition-all hover:shadow-md"
                >
                  <Label
                    htmlFor={name}
                    className="flex cursor-pointer items-start gap-4 p-4"
                  >
                    <RadioGroupItem value={name} id={name} className="mt-1" />
                    <div className="flex flex-1 items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <p className="font-semibold">{name}</p>
                          {popular && (
                            <Badge className="bg-primary text-primary-foreground">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">{desc}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">{price}</p>
                        <p className="text-muted-foreground text-xs">
                          one-time
                        </p>
                      </div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="mt-auto flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="flex-1 gap-2">
              <ShoppingCart className="h-4 w-4" />
              Buy Now
            </Button>
            <Button size="lg" variant="outline" className="flex-1 gap-2">
              <Eye className="h-4 w-4" />
              Live Preview
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
