"use client"

import { useState } from "react"
import {
  ChevronDown,
  Heart,
  MapPin,
  Minus,
  Package,
  Plus,
  Ruler,
  ShoppingBag,
  Star,
} from "lucide-react"

import { Badge } from "@/registry/creative-tim-ui/ui/badge"
import { Button } from "@/registry/creative-tim-ui/ui/button"

export default function EcommerceSections02() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(1)
  const [selectedSize, setSelectedSize] = useState(1)
  const [quantity, setQuantity] = useState(1)
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const thumbnails = [
    "/placeholder.svg?height=80&width=80&text=Bag+1",
    "/placeholder.svg?height=80&width=80&text=Bag+2",
    "/placeholder.svg?height=80&width=80&text=Detail",
    "/placeholder.svg?height=80&width=80&text=Inside",
    "/placeholder.svg?height=80&width=80&text=Model",
    "/placeholder.svg?height=80&width=80&text=Lifestyle",
  ]

  const colors = [
    { name: "Black", hex: "#1a1a1a" },
    { name: "Cream", hex: "#f5f0e8" },
    { name: "Forest Green", hex: "#7d9488" },
    { name: "Gray", hex: "#9ca3af" },
    { name: "Navy Blue", hex: "#0f172a" },
    { name: "Brown", hex: "#a0522d" },
  ]

  const sizes = [
    { name: "Small", value: "S", inStock: true },
    { name: "Medium", value: "M", inStock: true },
    { name: "Large", value: "L", inStock: false },
  ]

  const features = [
    { icon: ShoppingBag, text: "Crossbody style" },
    { icon: Package, text: "Premium leather" },
    { icon: Ruler, text: "Adjustable strap" },
    { icon: MapPin, text: "Crafted in France" },
  ]

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="min-h-screen bg-neutral-50 p-4 sm:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr_1fr] lg:gap-12">
          <div className="hidden lg:flex lg:flex-col lg:gap-3">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`group relative h-20 w-20 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                  selectedImage === index
                    ? "border-neutral-900 shadow-md"
                    : "border-neutral-200 hover:border-neutral-400 hover:shadow-sm"
                }`}
              >
                <img
                  src={thumb}
                  alt={`Product view ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </button>
            ))}
          </div>

          <div className="flex items-start justify-center">
            <div className="w-full max-w-lg">
              <div className="group relative aspect-square overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <img
                  src={thumbnails[selectedImage]}
                  alt="Product main view"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 rounded-full bg-white/90 p-2 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-lg"
                >
                  <Heart
                    className={`h-5 w-5 transition-all duration-200 ${
                      isFavorite
                        ? "fill-red-500 text-red-500"
                        : "text-neutral-600 hover:text-red-500"
                    }`}
                  />
                </button>
              </div>
              <div className="mt-4 flex gap-2 lg:hidden">
                {thumbnails.slice(0, 4).map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`h-16 w-16 overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index
                        ? "border-neutral-900"
                        : "border-neutral-200 hover:border-neutral-400"
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
            <div className="mb-4 flex items-center justify-between">
              <Badge
                variant="outline"
                className="w-fit border-neutral-300 text-xs font-medium text-neutral-600"
              >
                Trending Now
              </Badge>
              <span className="text-xs font-medium text-green-600">
                In Stock
              </span>
            </div>

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
                    className={`h-10 w-10 rounded-md border-2 transition-all duration-200 ${
                      selectedColor === index
                        ? "border-neutral-900 ring-2 ring-neutral-900 ring-offset-2 scale-105"
                        : "border-neutral-200 hover:border-neutral-400 hover:scale-105"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="mb-3 text-sm font-medium text-neutral-900">
                Size:{" "}
                <span className="font-normal">{sizes[selectedSize].name}</span>
              </p>
              <div className="flex gap-2">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => size.inStock && setSelectedSize(index)}
                    disabled={!size.inStock}
                    className={`relative min-w-[60px] rounded-md border-2 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      selectedSize === index
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : size.inStock
                          ? "border-neutral-200 text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50"
                          : "cursor-not-allowed border-neutral-200 text-neutral-400 opacity-50"
                    }`}
                  >
                    {size.value}
                    {!size.inStock && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="h-px w-full rotate-45 bg-neutral-400" />
                      </span>
                    )}
                  </button>
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
                className="font-medium text-neutral-900 underline underline-offset-2 transition-colors hover:text-neutral-700"
              >
                Maison Atelier
              </a>{" "}
              official store.
            </p>

            <div className="mb-6">
              <p className="mb-3 text-sm font-medium text-neutral-900">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-lg border-2 border-neutral-200">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-[40px] text-center text-sm font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-neutral-900 text-neutral-900 transition-all duration-200 hover:bg-neutral-900 hover:text-white hover:shadow-lg"
              >
                Add to Cart
              </Button>
              <Button
                size="lg"
                className="flex-1 bg-neutral-900 text-white transition-all duration-200 hover:bg-neutral-800 hover:shadow-lg"
              >
                Buy it Now
              </Button>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-3 rounded-lg bg-neutral-100/50 p-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-neutral-600"
                >
                  <feature.icon className="h-4 w-4 text-neutral-500" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
              <button
                onClick={() => setIsInfoOpen(!isInfoOpen)}
                className="flex w-full items-center justify-between p-4 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
              >
                More Information
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isInfoOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isInfoOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="border-t border-neutral-200 p-4 text-sm leading-relaxed text-neutral-600">
                  <p className="mb-3">
                    <strong className="text-neutral-900">Materials & Care:</strong>{" "}
                    This bag is made from 100% full-grain vegetable-tanned
                    leather that develops a beautiful patina over time. Clean
                    with a soft, dry cloth and condition regularly with leather
                    cream.
                  </p>
                  <p className="mb-3">
                    <strong className="text-neutral-900">Dimensions:</strong> 9.5" W x 7" H
                    x 3" D. Strap drop adjustable from 20" to 24". Weight: 1.2
                    lbs.
                  </p>
                  <p>
                    <strong className="text-neutral-900">Shipping & Returns:</strong> Free
                    standard shipping on orders over $200. 30-day return policy
                    with original receipt and tags attached.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
