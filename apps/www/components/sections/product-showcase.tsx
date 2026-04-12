"use client"

import Image from "next/image"

import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const PRODUCTS = [
  {
    title: "Crochet Flower Bouquet",
    description:
      "A stunning arrangement of handmade roses, lilies, and baby's breath tied with a dusty pink ribbon.",
    badge: "Best Seller",
    src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Butterfly Collection",
    description:
      "Vibrant crochet butterflies in purple, magenta, red, and orange. Perfect as brooches or decor.",
    badge: "Limited Edition",
    src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Flower Keychain",
    description:
      "Adorable pink daisy keychain with golden hardware. A tiny bloom that goes everywhere with you.",
    badge: "Popular",
    src: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Mini Potted Flower",
    description:
      "A magenta crochet flower in a tiny crocheted pot. Sits perfectly on any desk or shelf.",
    badge: "New",
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Sunflower Coasters",
    description:
      "Bright, cheerful sunflower coasters hand-crocheted with cotton yarn. Set of 3.",
    badge: "Handmade",
    src: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Heart & Bow Set",
    description:
      "A red crochet heart keychain paired with a matching pink bow. The perfect gift duo.",
    badge: "Gift Ready",
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=600&auto=format&fit=crop",
  },
]

export function ProductShowcase() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="collection" className="py-24 md:py-32" ref={ref}>
      <div className="container">
        {/* Header */}
        <div
          className={cn(
            "mb-16 text-center opacity-0 transition-all duration-700",
            isVisible && "animate-fade-in"
          )}
        >
          <p className="text-primary mb-4 text-sm font-medium uppercase tracking-widest">
            The Collection
          </p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
            Tiny Art, Big Love
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-lg">
            Each piece is handmade with care. When it&apos;s gone, it&apos;s
            gone.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Card
              key={i}
              className={cn(
                "group cursor-pointer overflow-hidden border-0 opacity-0 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              {/* Image area */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.src}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Badge */}
                <Badge className="absolute top-4 left-4 bg-white/90 text-foreground shadow-sm backdrop-blur-sm hover:bg-white/90">
                  {product.badge}
                </Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="font-serif text-lg font-semibold">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  {product.description}
                </p>
                <Button
                  variant="link"
                  className="text-primary mt-2 h-auto p-0 text-sm"
                  asChild
                >
                  <a
                    href="https://instagram.com/threadmeditation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inquire on Instagram &rarr;
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
