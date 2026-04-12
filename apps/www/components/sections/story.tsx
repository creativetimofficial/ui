"use client"

import Image from "next/image"

import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"

export function StorySection() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="story" className="py-24 md:py-32" ref={ref}>
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div
            className={cn(
              "relative opacity-0 transition-all duration-700",
              isVisible && "animate-fade-in"
            )}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop"
                alt="Colorful yarn skeins and crochet hooks in warm light"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="bg-accent/30 absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-2xl" />
          </div>

          {/* Text */}
          <div
            className={cn(
              "space-y-6 opacity-0 transition-all delay-200 duration-700",
              isVisible && "animate-fade-in"
            )}
          >
            <p className="text-primary text-sm font-medium uppercase tracking-widest">
              Our Story
            </p>
            <h2 className="font-serif text-3xl leading-snug font-bold md:text-4xl lg:text-5xl">
              Born from Stillness
            </h2>
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
                items. They&apos;re small meditations you can hold in your hand.
              </p>
              <p>
                What started as a personal practice grew into a community of
                thousands on Instagram who share our love for handmade beauty
                and the art of slowing down.
              </p>
            </div>
            {/* Pull quote */}
            <blockquote className="border-primary/40 border-l-4 pl-6 italic">
              <p className="text-foreground text-lg font-medium md:text-xl">
                &ldquo;I started crocheting to quiet my mind. I stayed because
                it quieted everyone who held what I made.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
