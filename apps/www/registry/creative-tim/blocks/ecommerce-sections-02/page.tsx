"use client"

import { useState } from "react"
import {
  ChevronDown,
  MapPin,
  Package,
  Ruler,
  ShoppingBag,
  Star,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function EcommerceSections02() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(1)
  const [isInfoOpen, setIsInfoOpen] = useState(false)

  const thumbnails = [
    `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/placeholder.svg?height=80&width=80&text=Bag+1`,
    `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/placeholder.svg?height=80&width=80&text=Bag+2`,
    `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/placeholder.svg?height=80&width=80&text=Detail`,
    `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/placeholder.svg?height=80&width=80&text=Inside`,
    `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/placeholder.svg?height=80&width=80&text=Model`,
    `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/placeholder.svg?height=80&width=80&text=Lifestyle`,
  ]

  const colors = [
    { name: "Black", hex: "#1a1a1a" },
    { name: "Cream", hex: "#f5f0e8" },
    { name: "Forest Green", hex: "#7d9488" },
    { name: "Gray", hex: "#9ca3af" },
    { name: "Navy Blue", hex: "#0f172a" },
    { name: "Brown", hex: "#a0522d" },
  ]

  const features = [
    { icon: ShoppingBag, text: "Crossbody style" },
    { icon: Package, text: "Premium leather" },
    { icon: Ruler, text: "Adjustable strap" },
    { icon: MapPin, text: "Crafted in France" },
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
              className="mb-4 w-fit border-neutral-300 text-xs font-medium text-neutral-600"
            >
              Trending Now
            </Badge>

            <h1 className="mb-2 text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl">
              Artisan Leather Crossbody
            </h1>

            <div className="mb-6 flex items-center gap-4">
              <span className="text-2xl font-normal text-neutral-900">
                $385.00
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
                Color:{" "}
                <span className="font-normal">
                  {colors[selectedColor].name}
                </span>
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
              Elegant crossbody bag crafted from premium vegetable-tanned
              leather with a minimalist silhouette. Features a secure magnetic
              clasp closure, interior zip compartment, and an adjustable
              shoulder strap for versatile wear.
            </p>

            <p className="mb-6 text-sm text-neutral-600">
              This is a demo store. To buy this product, visit{" "}
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-700"
              >
                Maison Atelier
              </a>{" "}
              official store.
            </p>

            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
              >
                Add to Cart
              </Button>
              <Button
                size="lg"
                className="flex-1 bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Buy it Now
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

            <div className="border-t border-neutral-200">
              <button
                onClick={() => setIsInfoOpen(!isInfoOpen)}
                className="flex w-full items-center justify-between py-4 text-sm font-medium text-neutral-900 hover:text-neutral-600"
              >
                More Information
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isInfoOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isInfoOpen && (
                <div className="pb-4 text-sm leading-relaxed text-neutral-600">
                  <p className="mb-3">
                    <strong>Materials & Care:</strong> This bag is made from
                    100% full-grain vegetable-tanned leather that develops a
                    beautiful patina over time. Clean with a soft, dry cloth and
                    condition regularly with leather cream.
                  </p>
                  <p className="mb-3">
                    <strong>Dimensions:</strong> 9.5" W x 7" H x 3" D. Strap
                    drop adjustable from 20" to 24". Weight: 1.2 lbs.
                  </p>
                  <p>
                    <strong>Shipping & Returns:</strong> Free standard shipping
                    on orders over $200. 30-day return policy with original
                    receipt and tags attached.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
