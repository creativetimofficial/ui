"use client"

import { useState } from "react"
import {
  Heart,
  Star,
  ChevronRight,
  Truck,
  RotateCcw,
  Shield,
  Sparkles,
} from "lucide-react"

import { Badge } from "@/registry/creative-tim-ui/ui/badge"
import { Button } from "@/registry/creative-tim-ui/ui/button"

const IMAGES = [
  { imgelink: "https://v3.material-tailwind.com/coat-1.png" },
  { imgelink: "https://v3.material-tailwind.com/coat-2.png" },
  { imgelink: "https://v3.material-tailwind.com/coat-3.png" },
  { imgelink: "https://v3.material-tailwind.com/coat-4.png" },
]

const SIZES = ["XS", "S", "M", "L", "XL"]

const COLORS = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "White", hex: "#ffffff" },
  { name: "Gray", hex: "#e5e7eb" },
]

const FEATURES = [
  { icon: Truck, text: "Free shipping over $150" },
  { icon: RotateCcw, text: "Easy 30-day returns" },
  { icon: Shield, text: "1-year warranty" },
  { icon: Sparkles, text: "Premium quality" },
]

export default function ProductDescription01() {
  const [active, setActive] = useState(
    "https://v3.material-tailwind.com/coat-1.png"
  )
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <section className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <nav className="mb-8 flex items-center gap-2 text-sm text-neutral-500">
          <a href="#" className="hover:text-neutral-900">
            Home
          </a>
          <ChevronRight className="h-4 w-4" />
          <a href="#" className="hover:text-neutral-900">
            Women
          </a>
          <ChevronRight className="h-4 w-4" />
          <a href="#" className="hover:text-neutral-900">
            Outerwear
          </a>
          <ChevronRight className="h-4 w-4" />
          <span className="text-neutral-900">Premium Winter Coat</span>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="overflow-hidden rounded-2xl bg-white">
              <img
                src={active}
                alt="Product"
                className="h-[500px] w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-center gap-3">
              {IMAGES.map(({ imgelink }, index) => (
                <button
                  key={index}
                  onClick={() => setActive(imgelink)}
                  className={`h-20 w-20 overflow-hidden rounded-lg border-2 transition-all ${
                    active === imgelink
                      ? "border-neutral-900"
                      : "border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  <img
                    src={imgelink}
                    alt={`Gallery ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-medium text-neutral-900">
                  Product Description
                </h3>
                <p className="leading-relaxed text-neutral-600">
                  Experience luxury and comfort with this premium winter coat.
                  Crafted from high-quality materials with meticulous attention
                  to detail, this coat features a modern silhouette that
                  flatters all body types. The water-resistant outer shell keeps
                  you dry in light rain, while the insulated lining provides
                  warmth without bulk.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-medium text-neutral-900">
                  Key Features
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>
                      Water-resistant fabric with breathable membrane technology
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>
                      Premium insulation for optimal warmth in cold weather
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>
                      Adjustable cuffs and hem for personalized fit
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>Multiple interior and exterior pockets for storage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <Badge
              variant="outline"
              className="mb-4 w-fit border-neutral-300 text-xs font-medium text-neutral-600"
            >
              Limited Edition
            </Badge>

            <h1 className="mb-2 text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl">
              Premium Winter Coat
            </h1>

            <div className="mb-6 flex items-center gap-4">
              <span className="text-2xl font-normal text-neutral-900">
                $1,290.00
              </span>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < 4
                          ? "fill-neutral-900 text-neutral-900"
                          : "fill-neutral-300 text-neutral-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-neutral-500">(100 reviews)</span>
              </div>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-neutral-600">
              Elevate your winter wardrobe with this sophisticated coat that
              seamlessly blends style and functionality. Perfect for both
              professional settings and casual outings.
            </p>

            <div className="mb-6">
              <p className="mb-3 text-sm font-medium text-neutral-900">
                Color:{" "}
                <span className="font-normal">{COLORS[selectedColor].name}</span>
              </p>
              <div className="flex gap-2">
                {COLORS.map((color, index) => (
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

            <div className="mb-6">
              <p className="mb-3 text-sm font-medium text-neutral-900">
                Size: <span className="font-normal">{selectedSize}</span>
              </p>
              <div className="flex gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-10 w-12 items-center justify-center rounded-md border-2 text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : "border-neutral-200 bg-white text-neutral-900 hover:border-neutral-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="flex-1 bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`border-neutral-900 transition-colors ${
                  isFavorite
                    ? "bg-neutral-900 text-white hover:bg-neutral-800"
                    : "text-neutral-900 hover:bg-neutral-900 hover:text-white"
                }`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`}
                />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-3 border-t border-neutral-200 pt-6 sm:grid-cols-2">
              {FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-neutral-600"
                >
                  <feature.icon className="h-4 w-4 flex-shrink-0" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
