"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const IMAGES = [
  "https://v3.material-tailwind.com/coat-1.png",
  "https://v3.material-tailwind.com/coat-2.png",
  "https://v3.material-tailwind.com/coat-3.png",
]

const SIZES = ["XS", "S", "M", "L"]

export default function ProductDetails01() {
  const [selectedSize, setSelectedSize] = useState("S")
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <nav className="mb-4 flex text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Store
          </a>
          <span className="mx-2">/</span>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Designers
          </a>
          <span className="mx-2">/</span>
          <span className="text-foreground">Pink Blouse</span>
        </nav>
        <div className="mt-4 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <Card className="py-10">
              <CardContent className="relative p-0">
                <div className="overflow-hidden">
                  <img
                    src={IMAGES[currentIndex]}
                    alt={`Product ${currentIndex + 1}`}
                    className="mx-auto h-[30rem] object-cover transition-transform duration-300"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full"
                >
                  <ChevronLeft className="h-7 w-7" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full"
                >
                  <ChevronRight className="h-7 w-7" />
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <h2 className="mb-6 text-2xl font-bold">Pink Blouse</h2>
            <p className="text-primary text-2xl font-semibold">$1,290</p>
            <div className="my-8 flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
              <span className="text-sm font-semibold">100 Reviews</span>
            </div>
            <p className="text-muted-foreground [text-wrap:_balance]">
              There&apos;s nothing I really wanted to do in life that I
              wasn&apos;t able to get good at. That&apos;s my skill. I&apos;m
              not really specifically talented at anything except for the
              ability to learn.
            </p>
            <h3 className="mt-8 mb-4 text-center text-lg font-semibold">
              Color
            </h3>
            <div className="flex justify-center gap-2">
              <div className="h-5 w-5 cursor-pointer rounded bg-black" />
              <div className="h-5 w-5 cursor-pointer rounded border bg-white" />
              <div className="h-5 w-5 cursor-pointer rounded border bg-gray-200" />
            </div>
            <h3 className="mt-8 mb-4 text-center text-lg font-semibold">
              Size
            </h3>
            <div className="flex items-center justify-center gap-4">
              {SIZES.map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  variant={size === selectedSize ? "default" : "outline"}
                >
                  {size}
                </Button>
              ))}
            </div>
            <div className="my-6 flex items-center justify-center gap-2">
              <Button size="lg" className="w-full max-w-60">
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="text-red-500">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
