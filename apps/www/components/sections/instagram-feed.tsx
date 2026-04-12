"use client"

import { Instagram } from "lucide-react"

import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const INSTAGRAM_POSTS = [
  {
    alt: "Crochet flower bouquet with pink lily, purple and red roses",
    gradient: "from-rose-200 to-pink-300",
    emoji: "&#128144;",
  },
  {
    alt: "Colorful crochet butterflies - purple, pink, red, orange",
    gradient: "from-violet-200 to-fuchsia-300",
    emoji: "&#129419;",
  },
  {
    alt: "Pink crochet flower keychain with yarn and hook",
    gradient: "from-pink-200 to-rose-300",
    emoji: "&#127800;",
  },
  {
    alt: "Mini crochet potted flower in magenta",
    gradient: "from-fuchsia-200 to-pink-300",
    emoji: "&#127802;",
  },
  {
    alt: "Collection of crochet sunflowers and daisies",
    gradient: "from-amber-200 to-yellow-300",
    emoji: "&#127803;",
  },
  {
    alt: "Crochet hearts and bows in vibrant colors",
    gradient: "from-red-200 to-rose-300",
    emoji: "&#128155;",
  },
]

export function InstagramSection() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="bg-secondary/50 py-24 md:py-32" ref={ref}>
      <div className="container">
        {/* Header */}
        <div
          className={cn(
            "mb-16 text-center opacity-0 transition-all duration-700",
            isVisible && "animate-fade-in"
          )}
        >
          <p className="text-primary mb-4 text-sm font-medium uppercase tracking-widest">
            @threadmeditation
          </p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
            Join Our Journey
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-lg">
            Follow along as we create tiny works of art, one stitch at a time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {INSTAGRAM_POSTS.map((post, i) => (
            <a
              key={i}
              href="https://instagram.com/threadmeditation"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative aspect-square overflow-hidden rounded-xl opacity-0 transition-all duration-700",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              {/* Placeholder gradient - replace with actual images */}
              <div
                className={cn(
                  "flex h-full items-center justify-center bg-gradient-to-br",
                  post.gradient
                )}
              >
                <span
                  className="text-5xl transition-transform duration-300 group-hover:scale-110"
                  dangerouslySetInnerHTML={{ __html: post.emoji }}
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className={cn(
            "mt-12 text-center opacity-0 transition-all duration-700",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "0.6s" }}
        >
          <Button asChild variant="outline" className="rounded-full px-8">
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
    </section>
  )
}
