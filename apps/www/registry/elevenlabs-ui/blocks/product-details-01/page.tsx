"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { Button } from "@/registry/elevenlabs-ui/ui/button"
import { Card, CardContent } from "@/registry/elevenlabs-ui/ui/card"

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
        <nav className="flex text-sm mb-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">Store</a>
          <span className="mx-2">/</span>
          <a href="#" className="text-muted-foreground hover:text-foreground">Designers</a>
          <span className="mx-2">/</span>
          <span className="text-foreground">Pink Blouse</span>
        </nav>
        <div className="grid mt-4 gap-10 md:grid-cols-2 grid-cols-1 items-center">
          <div>
            <Card className="py-10">
              <CardContent className="relative p-0">
                <div className="overflow-hidden">
                  <img
                    src={IMAGES[currentIndex]}
                    alt={`Product ${currentIndex + 1}`}
                    className="h-[30rem] mx-auto object-cover transition-transform duration-300"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full"
                >
                  <ChevronLeft className="h-7 w-7" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
                >
                  <ChevronRight className="h-7 w-7" />
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Pink Blouse</h2>
            <p className="text-2xl font-semibold text-primary">$1,290</p>
            <div className="flex items-center justify-center gap-2 my-8">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 fill-gray-300" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
              <span className="font-semibold text-sm">100 Reviews</span>
            </div>
            <p className="text-muted-foreground [text-wrap:_balance]">
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t
              able to get good at. That&apos;s my skill. I&apos;m not really
              specifically talented at anything except for the ability to learn.
            </p>
            <h3 className="text-lg font-semibold mb-4 mt-8 text-center">Color</h3>
            <div className="flex justify-center gap-2">
              <div className="h-5 w-5 bg-black rounded cursor-pointer" />
              <div className="h-5 w-5 bg-white rounded border cursor-pointer" />
              <div className="h-5 w-5 bg-gray-200 rounded border cursor-pointer" />
            </div>
            <h3 className="text-lg font-semibold mb-4 mt-8 text-center">Size</h3>
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
            <div className="my-6 flex justify-center items-center gap-2">
              <Button size="lg" className="w-full max-w-60">
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="text-red-500">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
