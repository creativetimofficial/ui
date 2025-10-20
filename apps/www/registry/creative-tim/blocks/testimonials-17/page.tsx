"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden rounded-2xl bg-[url('https://images.unsplash.com/photo-1638438134099-a91e5373aaf0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center p-6">
          <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm" />

          <CardContent className="relative grid w-full grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-12 md:px-12 md:py-16">
            <div className="col-span-full md:col-span-8">
              <Quote className="mb-6 h-12 w-12 text-white/30" />
              <blockquote className="mb-8 text-xl leading-relaxed font-medium text-white md:text-2xl">
                &quot;{SLIDES[currentSlide].quote}&quot;
              </blockquote>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
                <p className="text-lg font-semibold text-white">
                  {SLIDES[currentSlide].name}
                </p>
                <span className="hidden text-white/50 md:inline">•</span>
                <p className="text-sm text-white/70">
                  {SLIDES[currentSlide].role}
                </p>
              </div>
            </div>

            <div className="col-span-full flex items-center justify-center md:col-span-4">
              <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
                <img
                  src={SLIDES[currentSlide].image}
                  alt="company logo"
                  className="h-16 md:h-20"
                />
              </div>
            </div>
          </CardContent>

          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="!absolute top-1/2 left-4 z-10 -translate-y-1/2 text-white transition-all hover:bg-white/20 hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="!absolute top-1/2 right-4 z-10 -translate-y-1/2 text-white transition-all hover:bg-white/20 hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </Card>
      </div>
    </section>
  )
}
