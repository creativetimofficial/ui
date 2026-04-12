"use client"

import { Instagram } from "lucide-react"

import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  const { ref, isVisible } = useIntersection()

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50" />
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-pink-200/50 blur-3xl" />
      <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="container relative z-10">
        <div
          className={cn(
            "mx-auto max-w-2xl text-center opacity-0 transition-all duration-700",
            isVisible && "animate-fade-in"
          )}
        >
          <h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready to Find Your Piece?
          </h2>
          <p className="text-muted-foreground mt-6 text-lg md:text-xl">
            Every stitch tells a story. Every piece carries calm.
            <br />
            Let us make something beautiful for you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 text-base shadow-lg shadow-pink-200/50"
            >
              <a href="#collection">Explore the Collection</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base"
            >
              <a
                href="https://instagram.com/threadmeditation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-4 w-4" />
                Follow @threadmeditation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
