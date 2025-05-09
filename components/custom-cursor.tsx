"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-media-query"

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Use springs with optimized settings for smoother movement
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Track if we're hovering over a clickable element
  const isHovering = useRef(false)

  useEffect(() => {
    // Check if device is touch-enabled
    const checkTouch = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
    }

    checkTouch()

    // Only add mouse tracking if not a touch device
    if (!isTouchDevice) {
      const moveCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX - 16)
        cursorY.set(e.clientY - 16)
      }

      window.addEventListener("mousemove", moveCursor)

      return () => {
        window.removeEventListener("mousemove", moveCursor)
      }
    }
  }, [cursorX, cursorY, isTouchDevice])

  useEffect(() => {
    // Skip for touch devices
    if (isTouchDevice) return

    const handleMouseOver = () => {
      isHovering.current = true
      document.documentElement.classList.add("cursor-hovering")
    }

    const handleMouseOut = () => {
      isHovering.current = false
      document.documentElement.classList.remove("cursor-hovering")
    }

    // Add event listeners to all clickable elements
    const clickableElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea')

    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseOver)
      element.addEventListener("mouseleave", handleMouseOut)
    })

    return () => {
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseOver)
        element.removeEventListener("mouseleave", handleMouseOut)
      })
    }
  }, [isTouchDevice])

  // Don't render custom cursor on mobile/touch devices
  if (isMobile || isTouchDevice) return null

  return (
    <>
      <style jsx global>{`
        html:not(.touch-device), 
        html:not(.touch-device) body {
          cursor: none;
        }
        html:not(.touch-device) a, 
        html:not(.touch-device) button, 
        html:not(.touch-device) [role="button"], 
        html:not(.touch-device) input, 
        html:not(.touch-device) select, 
        html:not(.touch-device) textarea {
          cursor: none;
        }
        .cursor-hovering a, 
        .cursor-hovering button, 
        .cursor-hovering [role="button"], 
        .cursor-hovering input, 
        .cursor-hovering select, 
        .cursor-hovering textarea {
          cursor: none;
        }
        
        /* Restore normal cursors on touch devices */
        html.touch-device, 
        html.touch-device body,
        html.touch-device a, 
        html.touch-device button, 
        html.touch-device [role="button"], 
        html.touch-device input, 
        html.touch-device select, 
        html.touch-device textarea {
          cursor: auto;
        }
        html.touch-device a, 
        html.touch-device button, 
        html.touch-device [role="button"] {
          cursor: pointer;
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-primary opacity-20 rounded-full"
            animate={{
              scale: isHovering.current ? 1.2 : 1,
            }}
            transition={{ duration: 0.15 }}
          />
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HWiM2yMsIL1iQuRa2g7dbwMUmEPz5B.png"
              alt="Opulent Cursor"
              width={20}
              height={20}
              className="w-4 h-4 object-contain"
            />
          </div>
        </div>
      </motion.div>
    </>
  )
}
