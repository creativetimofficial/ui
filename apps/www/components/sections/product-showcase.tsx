"use client"

import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TiltCard } from "@/components/magic/tilt-card"
import { Reveal, StaggerChildren, StaggerItem } from "@/components/magic/reveal"

const PRODUCTS = [
  {
    title: "Crochet Flower Bouquet",
    description:
      "Handmade roses, lilies & baby's breath tied with a dusty pink ribbon.",
    badge: "Best Seller",
    src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Butterfly Collection",
    description:
      "Vibrant butterflies in purple, magenta, red & orange. Brooches or decor.",
    badge: "Limited Edition",
    src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Flower Keychain",
    description:
      "Pink daisy keychain with golden hardware. A tiny bloom for your keys.",
    badge: "Popular",
    src: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Mini Potted Flower",
    description:
      "Magenta flower in a tiny crocheted pot. Perfect for any desk.",
    badge: "New",
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Sunflower Coasters",
    description:
      "Cheerful sunflower coasters hand-crocheted with cotton yarn. Set of 3.",
    badge: "Handmade",
    src: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Heart & Bow Set",
    description:
      "Red heart keychain paired with a matching pink bow. The gift duo.",
    badge: "Gift Ready",
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=600&auto=format&fit=crop",
  },
]

export function ProductShowcase() {
  return (
    <section id="collection" className="py-24 md:py-32">
      <div className="container">
        {/* Header */}
        <Reveal>
          <div className="mb-16 text-center">
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
        </Reveal>

        {/* Product Grid */}
        <StaggerChildren className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <StaggerItem key={i}>
              <TiltCard className="group relative cursor-pointer overflow-hidden rounded-xl bg-card shadow-sm transition-shadow duration-500 hover:shadow-2xl">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.src}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-foreground shadow-sm backdrop-blur-sm hover:bg-white/90">
                    {product.badge}
                  </Badge>
                </div>
                {/* Content */}
                <div className="p-5">
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
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
