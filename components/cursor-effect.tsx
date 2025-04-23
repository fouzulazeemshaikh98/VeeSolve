"use client"

import { useEffect, useState } from "react"

export function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Throttle function to limit how often the mousemove event fires
    let lastExecution = 0
    const throttleDelay = 10 // ms between updates

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastExecution < throttleDelay) return

      lastExecution = now
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isVisible])

  if (typeof window === "undefined") return null

  return (
    <>
      {/* Simplified cursor glow effect */}
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-screen will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: window.innerWidth < 768 ? "100px" : "200px",
          height: window.innerWidth < 768 ? "100px" : "200px",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 60%, transparent 80%)",
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease-out",
        }}
      ></div>
    </>
  )
}
