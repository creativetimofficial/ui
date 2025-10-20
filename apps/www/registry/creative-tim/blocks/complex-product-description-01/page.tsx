"use client"

import { useState } from "react"
import { Heart, Package, RefreshCw, Shield, Star, Truck } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const IMAGES = [
  "https://v3.material-tailwind.com/coat-1.png",
  "https://v3.material-tailwind.com/coat-2.png",
  "https://v3.material-tailwind.com/coat-3.png",
  "https://v3.material-tailwind.com/coat-4.png",
]

const SIZES = ["XS", "S", "M", "L", "XL"]

const COLORS = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "White", hex: "#ffffff" },
  { name: "Gray", hex: "#e5e7eb" },
]

const FEATURES = [
  { icon: Package, text: "Premium quality materials" },
  { icon: Truck, text: "Free shipping on orders $100+" },
  { icon: RefreshCw, text: "30-day return policy" },
  { icon: Shield, text: "2-year warranty included" },
]

const ACCORDION_DATA = [
  {
    value: "one",
    title: "Features",
    desc: "This premium coat is crafted from weather-resistant fabric with advanced Gore-Tex technology, ensuring you stay dry and comfortable in all conditions. Features include adjustable cuffs, reinforced seams, and breathable lining.",
  },
  {
    value: "two",
    title: "Product Care",
    desc: "Machine wash cold with like colors. Use mild detergent and avoid bleach. Tumble dry on low heat or hang to dry. For best results, store in a cool, dry place and avoid direct sunlight to maintain color and fabric integrity.",
  },
  {
    value: "three",
    title: "Shipping & Returns",
    desc: "Free standard shipping on orders over $100. Express shipping available at checkout. We offer a 30-day return policy with free returns. Items must be unworn, unwashed, and in original packaging with tags attached.",
  },
  {
    value: "four",
    title: "Warranty",
    desc: "All our products come with a comprehensive 2-year warranty covering manufacturing defects. This includes issues with stitching, zippers, and fabric quality. Contact our customer service for warranty claims and support.",
  },
]

export default function ComplexProductDescription01() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState("M")
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <section className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col-reverse lg:flex-row lg:gap-4">
            <div className="mt-4 flex gap-2 lg:mt-0 lg:flex-col">
              {IMAGES.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index
                      ? "border-neutral-900"
                      : "border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Product view ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex-1">
              <div className="aspect-square overflow-hidden rounded-2xl bg-white">
                <img
                  src={IMAGES[selectedImage]}
                  alt="Product main view"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <Badge
              variant="outline"
              className="mb-4 w-fit border-neutral-300 text-xs font-medium text-neutral-600"
            >
              New Arrival
            </Badge>

            <h1 className="mb-2 text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl">
              Premium Winter Coat
            </h1>

            <div className="mb-6 flex items-center gap-4">
              <span className="text-2xl font-normal text-neutral-900">
                $1,490.00
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
              Experience unparalleled comfort and style with our premium winter
              coat. Meticulously crafted with attention to detail, this coat
              features weather-resistant fabric and a timeless design that
              complements any wardrobe. Perfect for both casual and formal
              occasions.
            </p>

            <div className="mb-6">
              <p className="mb-3 text-sm font-medium text-neutral-900">
                Color:{" "}
                <span className="font-normal">
                  {COLORS[selectedColor].name}
                </span>
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

            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
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

            <Accordion
              type="single"
              defaultValue="one"
              collapsible
              className="w-full border-t border-neutral-200"
            >
              {ACCORDION_DATA.map(({ value, title, desc }) => (
                <AccordionItem key={value} value={value}>
                  <AccordionTrigger className="text-sm font-medium text-neutral-900 hover:text-neutral-600">
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-neutral-600">
                    {desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
