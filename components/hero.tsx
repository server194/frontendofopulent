"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/placeholder.svg?height=800&width=1600",
    title: "PREMIUM TEXTILES",
    subtitle: "Crafting Excellence Since 1995",
  },
  {
    image: "/placeholder.svg?height=800&width=1600",
    title: "SUSTAINABLE FABRICS",
    subtitle: "Eco-friendly Production for a Better Tomorrow",
  },
  {
    image: "/placeholder.svg?height=800&width=1600",
    title: "GLOBAL EXPORTS",
    subtitle: "Serving Quality to Over 30 Countries",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen mt-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 rounded-full h-12 w-12"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 rounded-full h-12 w-12"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-20 left-0 right-0 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white">{slides[currentSlide].title}</h2>
        <p className="text-xl md:text-2xl text-white">{slides[currentSlide].subtitle}</p>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
