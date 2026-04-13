"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function MagicCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { damping: 25, stiffness: 200 })
  const springY = useSpring(cursorY, { damping: 25, stiffness: 200 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-magnetic]")
      ) {
        setIsHovering(true)
      }
    }

    const handleOut = () => setIsHovering(false)

    window.addEventListener("mousemove", move)
    document.addEventListener("mouseover", handleOver)
    document.addEventListener("mouseout", handleOut)
    return () => {
      window.removeEventListener("mousemove", move)
      document.removeEventListener("mouseover", handleOver)
      document.removeEventListener("mouseout", handleOut)
    }
  }, [cursorX, cursorY])

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) return null

  return (
    <>
      {/* Glow ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border border-pink-400/40"
          animate={{
            width: isHovering ? 56 : 32,
            height: isHovering ? 56 : 32,
            opacity: isVisible ? 1 : 0,
            backgroundColor: isHovering
              ? "rgba(236, 72, 153, 0.08)"
              : "transparent",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        />
      </motion.div>
      {/* Dot core */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-pink-500"
          animate={{
            width: isHovering ? 8 : 5,
            height: isHovering ? 8 : 5,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        />
      </motion.div>
    </>
  )
}
