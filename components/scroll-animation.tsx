"use client"

import { type ReactNode, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
  duration?: number
  once?: boolean
  className?: string
  animation?: "fade" | "slide-up" | "slide-right" | "slide-left" | "zoom"
}

export function ScrollAnimation({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
  animation = "fade",
}: ScrollAnimationProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount: 0.2 })
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Reduce animation intensity on mobile
  const mobileDuration = isMobile ? duration * 0.7 : duration
  const mobileDelay = isMobile ? delay * 0.5 : delay

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const getVariants = () => {
    // Smaller movements on mobile
    const mobileOffset = isMobile ? 20 : 50

    switch (animation) {
      case "slide-up":
        return {
          hidden: { y: mobileOffset, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "slide-right":
        return {
          hidden: { x: -mobileOffset, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "slide-left":
        return {
          hidden: { x: mobileOffset, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "zoom":
        return {
          hidden: { scale: isMobile ? 0.9 : 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        }
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      transition={{ duration: mobileDuration, delay: mobileDelay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
