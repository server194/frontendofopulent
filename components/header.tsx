"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Departments", href: "/departments" },
  { name: "Blog", href: "/blog" },
  { name: "Let's Connect", href: "/contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden"

      // Add event listener to close menu when clicking outside
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (target.id === "mobile-menu-overlay") {
          setIsMenuOpen(false)
        }
      }

      document.addEventListener("click", handleClickOutside)

      return () => {
        document.body.style.overflow = ""
        document.removeEventListener("click", handleClickOutside)
      }
    }
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
      <div
        className={cn(
          "mx-auto transition-all duration-300 rounded-full backdrop-blur-sm",
          scrolled ? "bg-white/90 shadow-lg max-w-7xl py-3" : "bg-white/80 max-w-[95%] py-2",
        )}
      >
        <div className="flex items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HWiM2yMsIL1iQuRa2g7dbwMUmEPz5B.png"
              alt="Opulent Group of Companies"
              width={180}
              height={60}
              className={cn("transition-all duration-300", scrolled ? "h-12 w-auto" : "h-12 w-auto")}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-foreground hover:text-primary font-medium transition-colors",
                  scrolled ? "text-base py-1" : "text-base",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-xl md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HWiM2yMsIL1iQuRa2g7dbwMUmEPz5B.png"
                alt="Opulent Group of Companies"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex flex-col p-4 overflow-y-auto flex-grow">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center py-3 px-2 text-foreground hover:text-primary font-medium text-lg border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="p-4 mt-auto border-t">
              <Link
                href="/contact"
                className="block w-full py-3 bg-primary text-white text-center rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
