"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const TESTIMONIALS = [
  {
    name: "Priya S.",
    text: "I bought the flower bouquet as a gift for my mother and she cried happy tears. The detail is unbelievable \u2014 you can see every single petal. It's art you can hold.",
    rating: 5,
  },
  {
    name: "Rachel M.",
    text: "The butterfly keychain is my daily reminder to slow down. Every time I reach for my keys, I smile. The craftsmanship is beyond anything I've seen online.",
    rating: 5,
  },
  {
    name: "Aisha K.",
    text: "Ordered the sunflower set for my desk. My coworkers couldn't believe they were crocheted! Already planning my next order. These are tiny treasures.",
    rating: 5,
  },
  {
    name: "Emma T.",
    text: "The mini potted flower sits on my bookshelf and I genuinely love it more than my real plants. Never wilts, always beautiful, and made with so much love.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = React.useState(0)
  const { ref, isVisible } = useIntersection()

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    )

  // Auto-advance
  React.useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden py-24 md:py-32" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=2000&auto=format&fit=crop"
          alt="Soft yarn texture background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={cn(
            "mb-16 text-center opacity-0 transition-all duration-700",
            isVisible && "animate-fade-in"
          )}
        >
          <p className="text-primary mb-4 text-sm font-medium uppercase tracking-widest">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
            What Our Community Says
          </h2>
        </div>

        {/* Testimonial Card */}
        <div
          className={cn(
            "mx-auto max-w-2xl opacity-0 transition-all duration-700",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="rounded-2xl border-0 bg-white/80 p-8 shadow-lg backdrop-blur-sm md:p-12">
            {/* Stars */}
            <div className="mb-6 flex items-center justify-center gap-1">
              {Array.from({ length: TESTIMONIALS[current].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    className="text-accent fill-accent h-5 w-5"
                  />
                )
              )}
            </div>

            {/* Quote */}
            <blockquote className="text-foreground mb-8 text-center text-lg leading-relaxed md:text-xl">
              &ldquo;{TESTIMONIALS[current].text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <p className="font-serif text-lg font-semibold">
                {TESTIMONIALS[current].name}
              </p>
              <p className="text-muted-foreground mt-1 text-sm">
                Verified Buyer
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      i === current
                        ? "bg-primary w-6"
                        : "bg-border hover:bg-muted-foreground/30 w-2"
                    )}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
