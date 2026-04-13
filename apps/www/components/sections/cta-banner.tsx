"use client"

import { useRef } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/magic/reveal"
import { Magnetic } from "@/components/magic/magnetic"

export function CtaBanner() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1])

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <motion.div className="absolute inset-[-50px]" style={{ y: bgY, scale }}>
        <Image
          src="https://images.unsplash.com/photo-1585412459212-8def26f7f14e?q=80&w=2000&auto=format&fit=crop"
          alt="" fill className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/90 via-rose-50/85 to-amber-50/90" />
      </motion.div>

      <div className="container relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
              Ready to Find Your Piece?
            </h2>
            <p className="text-muted-foreground mt-6 text-lg md:text-xl">
              Every stitch tells a story. Every piece carries calm.
              <br />
              Let us make something beautiful for you.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Magnetic strength={0.15}>
                <Button asChild size="lg" className="rounded-full px-10 text-base shadow-lg shadow-pink-200/50">
                  <a href="#collection">Explore the Collection</a>
                </Button>
              </Magnetic>
              <Magnetic strength={0.15}>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-white/70 px-8 text-base backdrop-blur-sm">
                  <a href="https://instagram.com/threadmeditation" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" />
                    Follow @threadmeditation
                  </a>
                </Button>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
