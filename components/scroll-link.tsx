"use client"

import type React from "react"
import { scrollToSection } from "@/utils/scroll-utils"

interface ScrollLinkProps {
  to: string
  children: React.ReactNode
  className?: string
}

export function ScrollLink({ to, children, className = "" }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToSection(to)
  }

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
