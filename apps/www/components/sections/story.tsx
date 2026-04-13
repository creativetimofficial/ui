"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

import { Reveal } from "@/components/magic/reveal"

export function StorySection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05])

  return (
    <section id="story" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image with scroll parallax */}
          <Reveal direction="left">
            <div className="relative">
              <motion.div
                className="relative aspect-[4/5] overflow-hidden rounded-2xl"
                style={{ y: imageY, scale: imageScale }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop"
                  alt="Colorful yarn skeins and crochet hooks"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="bg-accent/30 absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-2xl"
                style={{
                  y: useTransform(scrollYProgress, [0, 1], [40, -40]),
                }}
              />
            </div>
          </Reveal>

          {/* Text */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <p className="text-primary text-sm font-medium uppercase tracking-widest">
                Our Story
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-serif text-3xl leading-snug font-bold md:text-4xl lg:text-5xl">
                Born from Stillness
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="text-muted-foreground space-y-4 text-base leading-relaxed md:text-lg">
                <p>
                  Thread Meditation began with a simple crochet hook and a need
                  for quiet. In a world that never stops buzzing, we found peace
                  in the rhythmic pull of yarn through loops.
                </p>
                <p>
                  Each piece we create &mdash; from delicate flower keychains to
                  vibrant butterfly brooches to full crochet bouquets &mdash;
                  carries the calm of its making. These aren&apos;t mass-produced
                  items. They&apos;re small meditations you can hold.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <blockquote className="border-primary/40 border-l-4 pl-6 italic">
                <p className="text-foreground text-lg font-medium md:text-xl">
                  &ldquo;I started crocheting to quiet my mind. I stayed because
                  it quieted everyone who held what I made.&rdquo;
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
