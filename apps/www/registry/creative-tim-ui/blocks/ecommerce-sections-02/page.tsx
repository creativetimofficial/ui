"use client"

import { useState } from "react"
import { Star, ShoppingBag, Package, Ruler, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function EcommerceSections02() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(1)

  const thumbnails = [
    "/placeholder.svg?height=80&width=80&text=Bag+1",
    "/placeholder.svg?height=80&width=80&text=Bag+2",
    "/placeholder.svg?height=80&width=80&text=Detail",
    "/placeholder.svg?height=80&width=80&text=Inside",
    "/placeholder.svg?height=80&width=80&text=Model",
    "/placeholder.svg?height=80&width=80&text=Lifestyle",
  ]

  const colors = [
    { name: "Noir", hex: "#1a1a1a" },
    { name: "Ivory Liégé", hex: "#f5f0e8" },
    { name: "Sage Green", hex: "#7d9488" },
    { name: "Stone Gray", hex: "#9ca3af" },
    { name: "Midnight", hex: "#0f172a" },
    { name: "Cognac", hex: "#a0522d" },
  ]

  const features = [
    { icon: ShoppingBag, text: "Shoulder bags" },
    { icon: Package, text: "Full Grain Leather" },
    { icon: Ruler, text: "Adjustable strap" },
    { icon: MapPin, text: "Handmade in Italy" },
  ]

  return (
    <div className="min-h-screen bg-neutral-50 p-4 sm:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr_1fr] lg:gap-12">
          <div className="hidden lg:flex lg:flex-col lg:gap-3">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`h-20 w-20 overflow-hidden rounded-lg border-2 transition-all ${
                  selectedImage === index
                    ? "border-neutral-900"
                    : "border-neutral-200 hover:border-neutral-400"
                }`}
              >
                <img
                  src={thumb}
                  alt={`Product view ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="flex items-start justify-center">
            <div className="w-full max-w-lg">
              <div className="aspect-square overflow-hidden rounded-2xl bg-white">
                <img
                  src={thumbnails[selectedImage]}
                  alt="Product main view"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 flex gap-2 lg:hidden">
                {thumbnails.slice(0, 4).map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`h-16 w-16 overflow-hidden rounded-lg border-2 ${
                      selectedImage === index
                        ? "border-neutral-900"
                        : "border-neutral-200"
                    }`}
                  >
                    <img
                      src={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <Badge
              variant="outline"
              className="mb-4 w-fit border-neutral-300 text-xs font-medium tracking-wider text-neutral-600"
            >
              BEST SELLER
            </Badge>

            <h1 className="mb-2 text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl">
              LE GRAND NOVA IVORY LIÉGÉ
            </h1>

            <div className="mb-6 flex items-center gap-4">
              <span className="text-2xl font-normal text-neutral-900">
                $450.00
              </span>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < 4
                          ? "fill-neutral-900 text-neutral-900"
                          : "fill-neutral-900 text-neutral-900"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-neutral-500">(4.7)</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="mb-3 text-sm font-medium text-neutral-900">
                Color: <span className="font-normal">{colors[selectedColor].name}</span>
              </p>
              <div className="flex gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`h-10 w-10 rounded-md border-2 transition-all ${
                      selectedColor === index
                        ? "border-neutral-900 ring-2 ring-neutral-900 ring-offset-2"
                        : "border-neutral-200 hover:border-neutral-400"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-neutral-600">
              Flap 'Box' bag in calfskin, with secure brass push clasp. Back
              pocket. Interior lined in suede. Long and adjustable shoulder strap
              included. Inside pocket with bellows.
            </p>

            <p className="mb-6 text-sm text-neutral-600">
              This is a demo store. To buy this product, visit{" "}
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-700"
              >
                Leo & Violette
              </a>{" "}
              official store.
            </p>

            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
              >
                ADD TO CART
              </Button>
              <Button
                size="lg"
                className="flex-1 bg-neutral-900 text-white hover:bg-neutral-800"
              >
                BUY IT NOW
              </Button>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-neutral-600"
                >
                  <feature.icon className="h-4 w-4" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <button className="flex w-full items-center justify-between border-t border-neutral-200 py-4 text-sm font-medium text-neutral-900 hover:text-neutral-600">
              MORE INFORMATION
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
