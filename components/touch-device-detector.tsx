"use client"

import { useEffect } from "react"

export function TouchDeviceDetector() {
  useEffect(() => {
    const checkTouch = () => {
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

      if (isTouchDevice) {
        document.documentElement.classList.add("touch-device")
      } else {
        document.documentElement.classList.remove("touch-device")
      }
    }

    // Check on mount
    checkTouch()

    // Also check on resize as some devices can switch between touch/non-touch
    window.addEventListener("resize", checkTouch)

    return () => {
      window.removeEventListener("resize", checkTouch)
    }
  }, [])

  return null
}
