"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const width = window.innerWidth
        const height = window.innerHeight
        canvas.width = width
        canvas.height = height
        setDimensions({ width, height })

        // Reinitialize particles when resizing
        initParticles()
      }
    }

    // Throttle mouse move events
    let lastExecution = 0
    const throttleDelay = 30 // ms between updates

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastExecution < throttleDelay) return

      lastExecution = now
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const initParticles = () => {
      const particles: Particle[] = []
      // Reduce the number of particles for better performance
      const particleCount = Math.min(Math.floor(window.innerWidth / 20), 80)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: getRandomColor(),
          opacity: Math.random() * 0.4 + 0.1,
        })
      }

      particlesRef.current = particles
    }

    const getRandomColor = () => {
      const colors = [
        "rgba(139, 92, 246, opacity)", // Purple
        "rgba(59, 130, 246, opacity)", // Blue
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    const animate = () => {
      if (!canvasRef.current) return

      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        // Ensure particles stay within viewport bounds
        if (particle.x < 0) particle.x = 0
        if (particle.x > canvas.width) particle.x = canvas.width
        if (particle.y < 0) particle.y = 0
        if (particle.y > canvas.height) particle.y = canvas.height

        // Simplified mouse interaction - less intensive
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 100

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.speedX -= dx * force * 0.005
          particle.speedY -= dy * force * 0.005
        }

        // Gradually return to normal speed
        particle.speedX *= 0.99
        particle.speedY *= 0.99

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace("opacity", particle.opacity.toString())
        ctx.fill()

        // Draw fewer connections between particles for better performance
        if (index % 2 === 0) {
          // Only check connections for every other particle
          for (let j = index + 1; j < particlesRef.current.length; j += 2) {
            const otherParticle = particlesRef.current[j]
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 80) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(139, 92, 246, ${0.05 * (1 - distance / 80)})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        }
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  )
}
