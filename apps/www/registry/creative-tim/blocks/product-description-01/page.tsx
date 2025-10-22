"use client"

import { useState } from "react"
import {
  ChevronRight,
  Heart,
  RotateCcw,
  Shield,
  Star,
  Truck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const IMAGES = [
  { imgelink: "https://v3.material-tailwind.com/coat-1.png" },
  { imgelink: "https://v3.material-tailwind.com/coat-2.png" },
  { imgelink: "https://v3.material-tailwind.com/coat-3.png" },
  { imgelink: "https://v3.material-tailwind.com/coat-4.png" },
]

const SIZES = ["32", "34", "36", "38", "40", "42", "44"]

const COLORS = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "White", hex: "#ffffff" },
  { name: "Gray", hex: "#e5e7eb" },
  { name: "Navy", hex: "#1e3a8a" },
  { name: "Brown", hex: "#92400e" },
]

const FEATURES = [
  { icon: Truck, text: "Free shipping over $150" },
  { icon: RotateCcw, text: "Easy 30-day returns" },
  { icon: Shield, text: "1-year warranty" },
]

export default function ProductDescription01() {
  const [active, setActive] = useState(
    "https://v3.material-tailwind.com/coat-1.png"
  )
  const [selectedSize, setSelectedSize] = useState("36")
  const [selectedColor, setSelectedColor] = useState("Black")
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
                    <span>Adjustable cuffs and hem for personalized fit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>
                      Multiple interior and exterior pockets for storage
                    </span>
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

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-medium text-neutral-900">
                  Color
                </p>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger className="w-full border-neutral-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {COLORS.map((color) => (
                      <SelectItem key={color.name} value={color.name}>
                        <div className="flex items-center gap-2">
                          <div
                            className="h-4 w-4 rounded-full border border-neutral-200"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span>{color.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-neutral-900">
                  Size
                </p>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full border-neutral-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SIZES.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-white p-4 text-center"
                >
                  <feature.icon className="h-5 w-5 flex-shrink-0 text-neutral-900" />
                  <span className="text-xs text-neutral-600">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
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
          </div>
        </div>
      </div>
    </section>
  )
}
