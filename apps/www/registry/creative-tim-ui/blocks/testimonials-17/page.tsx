"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card"

const SLIDES = [
  {
    image: "https://v3.material-tailwind.com/logo/netflix.svg",
    name: "Louis Miriam",
    role: "COO @ Netflix",
    quote:
      "Knowledge is either from direct experience or from verifiable, falsifiable science. There is knowledge that is transmitted but not verifiable / falsifiable. They're slowed down by their perception of themselves.",
  },
  {
    image: "https://v3.material-tailwind.com/logo/coinbase.svg",
    name: "John Down",
    role: "CEO @ Coinbase",
    quote:
      "Knowledge is either from direct experience or from verifiable, falsifiable science. There is knowledge that is transmitted but not verifiable / falsifiable. They're slowed down by their perception of themselves.",
  },
]

export default function TestimonialsBlock() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="relative rounded-xl bg-[url('/earth-outer-space.jpg')] bg-cover bg-center p-4">
          <span className="absolute inset-0 h-full w-full rounded-xl bg-black/75" />
          <CardContent className="relative grid w-full grid-cols-1 items-center gap-8 px-4 pt-4 pb-24 sm:px-12 sm:pt-16 md:grid-cols-12 md:pt-24">
            <div className="col-span-full row-start-2 pl-4 text-left md:col-span-8 md:row-start-auto">
              <blockquote className="mb-8 text-xl font-medium text-white">
                &quot;{SLIDES[currentSlide].quote}&quot;
              </blockquote>
              <div className="flex items-center gap-2">
                <p className="font-medium text-white">
                  {SLIDES[currentSlide].name}
                </p>
                <p className="text-sm text-white/80">
                  {SLIDES[currentSlide].role}
                </p>
              </div>
            </div>
            <div className="col-span-full grid justify-items-start md:col-span-4 md:justify-items-end">
              <img
                src={SLIDES[currentSlide].image}
                alt="company logo"
                className="h-20 md:mx-auto md:mb-8 md:h-24"
              />
            </div>
          </CardContent>

          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-4 w-4 rounded-full transition-opacity ${
                  index === currentSlide
                    ? "bg-white opacity-100"
                    : "bg-white opacity-50"
                }`}
              />
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            onClick={prevSlide}
            className="!absolute top-1/2 left-2 z-10 hidden -translate-y-1/2 text-white sm:inline-flex"
          >
            <ChevronLeft className="h-7 w-7" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={nextSlide}
            className="!absolute top-1/2 right-2 z-10 hidden -translate-y-1/2 text-white sm:inline-flex"
          >
            <ChevronRight className="h-7 w-7" />
          </Button>
        </Card>
      </div>
    </section>
  )
}
