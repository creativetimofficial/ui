"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion"

import { Button } from "@/components/ui/button"
import { Magnetic } from "@/components/magic/magnetic"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  // Parallax layers based on mouse
  const bgX = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), {
    damping: 30,
    stiffness: 100,
  })
  const bgY = useSpring(useTransform(mouseY, [0, 1], [-15, 15]), {
    damping: 30,
    stiffness: 100,
  })
  const fgX = useSpring(useTransform(mouseX, [0, 1], [20, -20]), {
    damping: 25,
    stiffness: 120,
  })
  const fgY = useSpring(useTransform(mouseX, [0, 1], [15, -15]), {
    damping: 25,
    stiffness: 120,
  })

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scrollBlur = useTransform(scrollYProgress, [0, 1], [0, 10])

  const handleMouse = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <motion.section
      ref={containerRef}
      onMouseMove={handleMouse}
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
      style={{ opacity: scrollOpacity }}
    >
      {/* Parallax background layer */}
      <motion.div
        className="absolute inset-[-40px]"
        style={{ x: bgX, y: bgY, scale: scrollScale }}
      >
        <Image
          src="https://images.unsplash.com/photo-1585412459212-8def26f7f14e?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/80 via-pink-50/60 to-white/85" />
      </motion.div>

      {/* Floating decorative blobs that follow mouse */}
      <motion.div
        className="absolute top-20 left-[10%] h-72 w-72 rounded-full bg-pink-300/30 blur-3xl"
        style={{ x: fgX, y: fgY }}
      />
      <motion.div
        className="absolute right-[15%] bottom-20 h-96 w-96 rounded-full bg-amber-200/25 blur-3xl"
        style={{
          x: useSpring(useTransform(mouseX, [0, 1], [-25, 25]), {
            damping: 35,
            stiffness: 80,
          }),
          y: useSpring(useTransform(mouseY, [0, 1], [-20, 20]), {
            damping: 35,
            stiffness: 80,
          }),
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-fuchsia-200/20 blur-3xl"
        style={{
          x: useSpring(useTransform(mouseX, [0, 1], [30, -30]), {
            damping: 40,
            stiffness: 60,
          }),
        }}
      />

      {/* Content */}
      <motion.div
        className="container relative z-10 text-center"
        style={{
          filter: useTransform(
            scrollBlur,
            (v) => `blur(${v}px)`
          ),
        }}
      >
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-pink-200/60 bg-white/70 px-4 py-1.5 text-sm shadow-sm backdrop-blur-md"
          >
            <motion.span
              className="text-primary"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              &#10043;
            </motion.span>
            <span className="text-muted-foreground">
              Handcrafted with intention
            </span>
            <motion.span
              className="text-primary"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              &#10043;
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-5xl leading-tight font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Where Every Stitch
            <br />
            <motion.span
              className="text-primary inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ec4899, #f97316, #ec4899)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Is a Breath
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed md:text-xl"
          >
            Miniature crochet art born from meditation. Flowers, butterflies,
            bouquets &mdash; each piece a tiny moment of calm you can hold,
            gift, or treasure forever.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Magnetic strength={0.15}>
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base shadow-lg shadow-pink-300/40 transition-shadow hover:shadow-xl hover:shadow-pink-300/50"
              >
                <a href="#collection">Explore the Collection</a>
              </Button>
            </Magnetic>
            <Magnetic strength={0.15}>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-full px-8 text-base"
              >
                <a href="#story">Our Story</a>
              </Button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <motion.a
            href="#story"
            className="text-muted-foreground/50 hover:text-primary inline-block transition-colors"
            aria-label="Scroll down"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
