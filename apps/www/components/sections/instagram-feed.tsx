"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Reveal, StaggerChildren, StaggerItem } from "@/components/magic/reveal"
import { Magnetic } from "@/components/magic/magnetic"

const INSTAGRAM_POSTS = [
  { src: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=600&auto=format&fit=crop", alt: "Crochet flower bouquet" },
  { src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=600&auto=format&fit=crop", alt: "Colorful crochet butterflies" },
  { src: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=600&auto=format&fit=crop", alt: "Pink crochet flower keychain" },
  { src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=600&auto=format&fit=crop", alt: "Mini potted crochet flower" },
  { src: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?q=80&w=600&auto=format&fit=crop", alt: "Crochet sunflowers" },
  { src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=600&auto=format&fit=crop", alt: "Crochet hearts and bows" },
]

export function InstagramSection() {
  return (
    <section className="bg-secondary/50 py-24 md:py-32">
      <div className="container">
        <Reveal>
          <div className="mb-16 text-center">
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
        </Reveal>

        <StaggerChildren className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {INSTAGRAM_POSTS.map((post, i) => (
            <StaggerItem key={i}>
              <a
                href="https://instagram.com/threadmeditation"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/40"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 15 }}
                  >
                    <Instagram className="h-8 w-8 text-white" />
                  </motion.div>
                </motion.div>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <Magnetic strength={0.2}>
              <Button asChild variant="outline" className="rounded-full px-8">
                <a href="https://instagram.com/threadmeditation" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow @threadmeditation
                </a>
              </Button>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
