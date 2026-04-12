"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"

import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const INSTAGRAM_POSTS = [
  {
    src: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=600&auto=format&fit=crop",
    alt: "Crochet flower bouquet with pink lily, purple and red roses",
  },
  {
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=600&auto=format&fit=crop",
    alt: "Colorful handmade crochet butterflies",
  },
  {
    src: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=600&auto=format&fit=crop",
    alt: "Pink crochet flower keychain with yarn",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=600&auto=format&fit=crop",
    alt: "Mini crochet potted flower arrangement",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?q=80&w=600&auto=format&fit=crop",
    alt: "Collection of crochet sunflowers and daisies",
  },
  {
    src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=600&auto=format&fit=crop",
    alt: "Crochet hearts and bows in vibrant colors",
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
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
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
