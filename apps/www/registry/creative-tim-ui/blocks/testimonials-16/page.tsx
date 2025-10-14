"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card"

const SLIDES = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    companyLogo: "https://v3.material-tailwind.com/logo/netflix.svg",
    name: "Linde Michel",
    role: "Social Media Executive, Netflix",
    quote:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    companyLogo: "https://v3.material-tailwind.com/logo/coinbase.svg",
    name: "John Down",
    role: "Visionary, Coinbase",
    quote:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    companyLogo: "https://v3.material-tailwind.com/logo/spotify.svg",
    name: "Marcell Glock",
    role: "Chief Executive, Spotify",
    quote:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
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
    <section className="grid min-h-screen place-items-center bg-black py-16">
      <div className="relative container mx-auto px-4">
        <div className="pb-16">
          <img
            src={SLIDES[currentSlide].companyLogo}
            alt="company logo"
            className="mx-auto mb-8 h-24"
          />
          <blockquote className="mx-auto mb-16 max-w-2xl text-center text-xl font-medium text-white">
            &quot;{SLIDES[currentSlide].quote}&quot;
          </blockquote>
          <p className="text-center font-medium text-white">
            {SLIDES[currentSlide].name}
          </p>
          <p className="text-center text-sm text-white/80">
            {SLIDES[currentSlide].role}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {SLIDES.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-8 w-8 rounded object-cover object-center transition-opacity ${
                index === currentSlide ? "opacity-100" : "opacity-50"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.name}
                className="h-full w-full rounded object-cover"
              />
            </button>
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
      </div>
    </section>
  )
}
