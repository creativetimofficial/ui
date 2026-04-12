"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const PRODUCTS = [
  {
    title: "Crochet Flower Bouquet",
    description: "A stunning arrangement of handmade roses, lilies, and baby's breath tied with a dusty pink ribbon.",
    badge: "Best Seller",
    gradient: "from-rose-100 to-pink-200",
    emoji: "&#128144;",
  },
  {
    title: "Butterfly Collection",
    description: "Vibrant crochet butterflies in purple, magenta, red, and orange. Perfect as brooches or decor.",
    badge: "Limited Edition",
    gradient: "from-violet-100 to-fuchsia-200",
    emoji: "&#129419;",
  },
  {
    title: "Flower Keychain",
    description: "Adorable pink daisy keychain with golden hardware. A tiny bloom that goes everywhere with you.",
    badge: "Popular",
    gradient: "from-pink-100 to-rose-200",
    emoji: "&#127800;",
  },
  {
    title: "Mini Potted Flower",
    description: "A magenta crochet flower in a tiny crocheted pot. Sits perfectly on any desk or shelf.",
    badge: "New",
    gradient: "from-fuchsia-100 to-pink-200",
    emoji: "&#127802;",
  },
  {
    title: "Sunflower Coasters",
    description: "Bright, cheerful sunflower coasters hand-crocheted with cotton yarn. Set of 3.",
    badge: "Handmade",
    gradient: "from-amber-100 to-yellow-200",
    emoji: "&#127803;",
  },
  {
    title: "Heart & Bow Set",
    description: "A red crochet heart keychain paired with a matching pink bow. The perfect gift duo.",
    badge: "Gift Ready",
    gradient: "from-red-100 to-rose-200",
    emoji: "&#128155;",
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
                <div
                  className={cn(
                    "flex h-full items-center justify-center bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                    product.gradient
                  )}
                >
                  <span
                    className="text-7xl"
                    dangerouslySetInnerHTML={{ __html: product.emoji }}
                  />
                </div>
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
