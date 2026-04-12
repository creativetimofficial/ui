"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      {/* Background image - soft crochet workspace */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1585412459212-8def26f7f14e?q=80&w=2000&auto=format&fit=crop"
          alt="Soft yarn and crochet background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/85 via-pink-50/70 to-white/90" />
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl" />

      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Badge */}
          <div
            className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-pink-200/60 bg-white/70 px-4 py-1.5 text-sm shadow-sm backdrop-blur-sm"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-primary">&#10043;</span>
            <span className="text-muted-foreground">
              Handcrafted with intention
            </span>
            <span className="text-primary">&#10043;</span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in font-serif text-5xl leading-tight font-bold tracking-tight opacity-0 md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.3s" }}
          >
            Where Every Stitch
            <br />
            <span className="text-primary">Is a Breath</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-muted-foreground animate-fade-in mx-auto max-w-xl text-lg leading-relaxed opacity-0 md:text-xl"
            style={{ animationDelay: "0.5s" }}
          >
            Miniature crochet art born from meditation. Flowers, butterflies,
            bouquets &mdash; each piece a tiny moment of calm you can hold,
            gift, or treasure forever.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row"
            style={{ animationDelay: "0.7s" }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-base shadow-lg shadow-pink-200/50"
            >
              <a href="#collection">Explore the Collection</a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full px-8 text-base"
            >
              <a href="#story">Our Story</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-in mt-16 opacity-0"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#story"
            className="text-muted-foreground/60 hover:text-primary inline-block transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="animate-bounce-gentle h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
