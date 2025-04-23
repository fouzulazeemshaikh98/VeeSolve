"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        !(e.target as Element).closest(".mobile-menu") &&
        !(e.target as Element).closest(".menu-button")
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 z-50">
          <Logo className="h-8 w-auto" />
          <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Vee Solve
          </span>
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium text-white transition-all hover:text-purple-400">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium text-white transition-all hover:text-purple-400">
            Services
          </Link>
          <Link href="/portfolio" className="text-sm font-medium text-white transition-all hover:text-purple-400">
            Portfolio
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-white transition-all hover:text-purple-400">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium text-white transition-all hover:text-purple-400">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white transition-all hover:text-purple-400">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex gap-4">
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
              Get Started
            </Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white menu-button z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu - Box Style with Purple Background */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 pointer-events-auto">
            <motion.div
              className="absolute right-0 top-0 w-64 bg-gradient-to-br from-purple-900/80 to-blue-900/80 backdrop-blur-xl shadow-lg mobile-menu border-l border-purple-500/20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-end p-4">
                {/* Close button removed as we now toggle the icon in the header */}
              </div>

              <div className="px-6 py-2 flex flex-col">
                <Link
                  href="/"
                  className="py-3 text-white hover:text-purple-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="py-3 text-white hover:text-purple-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className="py-3 text-white hover:text-purple-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/about"
                  className="py-3 text-white hover:text-purple-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="py-3 text-white hover:text-purple-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="py-3 text-white hover:text-purple-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="mt-4 mb-6">
                  <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
                    <Button className="bg-[#2d1155] hover:bg-[#3d1a6a] text-white w-full">View Pricing</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  )
}
