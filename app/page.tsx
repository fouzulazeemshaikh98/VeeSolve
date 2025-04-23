"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Bot, Brain, Cpu, Star, Zap, Users, CheckCircle, CreditCard, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollLink } from "@/components/scroll-link"
import { scrollToTop } from "@/utils/scroll-utils"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const botRef = useRef<HTMLDivElement>(null)
  const orbitingElementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    let lastMouseMoveTime = 0

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse move events
      const now = Date.now()
      if (now - lastMouseMoveTime < 20) return // Only update every 20ms
      lastMouseMoveTime = now

      setMousePosition({ x: e.clientX, y: e.clientY })

      // Update orbiting elements position based on mouse - simplified
      if (orbitingElementsRef.current && heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect()
        const centerX = heroRect.left + heroRect.width / 2
        const centerY = heroRect.top + heroRect.height / 2

        // Calculate angle based on mouse position relative to center
        const dx = e.clientX - centerX
        const dy = e.clientY - centerY
        const angle = Math.atan2(dy, dx)

        // Update orbiting elements - only update every other element for performance
        const orbitElements = orbitingElementsRef.current.children
        for (let i = 0; i < orbitElements.length; i += 2) {
          const element = orbitElements[i] as HTMLElement
          const orbitRadius = 150 + i * 30
          const orbitAngle = angle + (i * Math.PI) / 4

          element.style.transform = `translate(
            ${Math.cos(orbitAngle) * orbitRadius}px, 
            ${Math.sin(orbitAngle) * orbitRadius}px
          )`
        }
      }

      // Make the bot look at the mouse - simplified
      if (botRef.current) {
        const botRect = botRef.current.getBoundingClientRect()
        const botCenterX = botRect.left + botRect.width / 2
        const botCenterY = botRect.top + botRect.height / 2

        const angle = Math.atan2(e.clientY - botCenterY, e.clientX - botCenterX) * (180 / Math.PI)
        botRef.current.style.transform = `rotate(${angle}deg)`
      }
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Show back-to-top button only after scrolling past hero section
      const heroHeight = heroRef.current?.offsetHeight || 0
      setShowScrollButton(window.scrollY > heroHeight)
    }

    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const href = this.getAttribute("href")
        if (href) {
          const targetId = href.replace("#", "")
          const targetElement = document.getElementById(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }
      })
    })

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    // Initialize animation
    const animateHero = () => {
      if (heroRef.current) {
        heroRef.current.classList.add("hero-animated")
      }
    }

    setTimeout(animateHero, 500)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate parallax effect based on scroll position
  const parallaxOffset = scrollY * 0.5

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black overflow-hidden"
        id="hero"
        style={{
          background: "linear-gradient(to bottom, #000000, #0f0f1a)",
        }}
      >
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] w-full">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1
                  className={`text-2xl font-bold tracking-tighter sm:text-4xl lg:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transform: `translateY(${-parallaxOffset * 0.2}px)` }}
                >
                  Next-Gen AI Agents for Your Business
                </h1>
                <p
                  className={`max-w-[600px] text-gray-300 md:text-xl transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transform: `translateY(${-parallaxOffset * 0.1}px)` }}
                >
                  Supercharge your operations with our intelligent AI agents. Designed to adapt, learn, and deliver
                  exceptional results.
                </p>
              </div>
              <div
                className={`flex flex-col gap-2 min-[400px]:flex-row transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <ScrollLink to="portfolio">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group">
                    <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    Explore Portfolio
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
                  </Button>
                </ScrollLink>
                <ScrollLink to="pricing">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 hover:border-purple-500 relative overflow-hidden group"
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-purple-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    View Pricing
                  </Button>
                </ScrollLink>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                className={`relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] transition-all duration-1000 delay-700 ${isLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
                style={{ transform: `translateY(${-parallaxOffset * 0.3}px)` }}
              >
                {/* Glowing background */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
                  style={{
                    animationDuration: "8s",
                    transform: isLoaded
                  ? `translate(${(mousePosition.x / window.innerWidth - 0.5) * 20}px, ${(mousePosition.y / window.innerHeight - 0.5) * 20}px)`
                  : "translate(0px, 0px)",
                  }}
                ></div>

                {/* Orbiting elements */}
                <div
                  ref={orbitingElementsRef}
                  className="absolute inset-0 flex items-center justify-center overflow-hidden"
                >
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full transition-all duration-500"
                      style={{
                        background: `rgba(${139 + i * 10}, ${92 + i * 10}, 246, ${0.3 + i * 0.05})`,
                        boxShadow: `0 0 15px 5px rgba(${139 + i * 10}, ${92 + i * 10}, 246, ${0.2 + i * 0.02})`,
                        transform: `translate(${Math.cos((i * Math.PI) / 4) * (150 + i * 30)}px, ${Math.sin((i * Math.PI) / 4) * (150 + i * 30)}px)`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Main glowing orb */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse"
                    style={{
                      animationDuration: "4s",
                      transform: isLoaded
                      ? `translate(${(mousePosition.x / window.innerWidth - 0.5) * 20}px, ${(mousePosition.y / window.innerHeight - 0.5) * 20}px)`
                      : "translate(0px, 0px)",                    
                      boxShadow: "0 0 60px 20px rgba(139, 92, 246, 0.4)",
                    }}
                  ></div>

                  {/* Bot icon with glow */}
                  <div ref={botRef} className="absolute">
                    <div className="absolute inset-0 w-full h-full rounded-full bg-white/10 blur-xl"></div>
                    <Bot
                      className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 text-white animate-float"
                      style={{
                        filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.8))",
                      }}
                    />
                  </div>
                </div>

                {/* Floating data points */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white/80 animate-float-random"
                    style={{
                      width: `${Math.random() * 4 + 1}px`,
                      height: `${Math.random() * 4 + 1}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDuration: `${Math.random() * 5 + 5}s`,
                      animationDelay: `${Math.random() * 5}s`,
                      boxShadow: `0 0 ${Math.random() * 5 + 5}px ${Math.random() * 2 + 1}px rgba(255, 255, 255, 0.5)`,
                    }}
                  ></div>
                ))}

                {/* Digital circuit lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {Array.from({ length: 4 }).map((_, i) => {
                    const startX = Math.random() * 100
                    const startY = Math.random() * 100
                    const endX = Math.random() * 100
                    const endY = Math.random() * 100
                    const midX = (startX + endX) / 2
                    const midY = (startY + endY) / 2

                    return (
                      <path
                        key={i}
                        d={`M${startX},${startY} Q${midX},${midY} ${endX},${endY}`}
                        stroke={`rgba(139, 92, 246, ${Math.random() * 0.3 + 0.1})`}
                        strokeWidth="0.2"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDuration: `${Math.random() * 4 + 3}s` }}
                      />
                    )
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-500 rounded-full animate-float-random"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                boxShadow: `0 0 ${Math.random() * 5 + 3}px ${Math.random() * 2 + 1}px rgba(139, 92, 246, 0.5)`,
              }}
            ></div>
          ))}

          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-70"></div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ScrollLink to="features" className="text-white/50 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </ScrollLink>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950" id="features">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Why Choose Our AI Agents
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI agents are designed to revolutionize how you operate. Discover the advantages that set us apart.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="bg-gray-900 border-gray-800 text-white hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10 group">
              <CardHeader>
                <div className="p-2 rounded-lg bg-purple-500/10 w-fit group-hover:bg-purple-500/20 transition-colors">
                  <Zap className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle className="mt-4 group-hover:text-purple-400 transition-colors">Lightning Fast</CardTitle>
                <CardDescription className="text-gray-400">
                  Our AI agents process information at unprecedented speeds, delivering results in seconds.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Experience response times up to 100x faster than traditional solutions, with no compromise on
                  accuracy.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 text-white hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 group">
              <CardHeader>
                <div className="p-2 rounded-lg bg-blue-500/10 w-fit group-hover:bg-blue-500/20 transition-colors">
                  <Cpu className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="mt-4 group-hover:text-blue-400 transition-colors">Adaptive Learning</CardTitle>
                <CardDescription className="text-gray-400">
                  Our agents continuously learn and adapt to your specific business needs and processes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  The more they interact with your systems, the more efficient and personalized they become.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 text-white hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10 group">
              <CardHeader>
                <div className="p-2 rounded-lg bg-cyan-500/10 w-fit group-hover:bg-cyan-500/20 transition-colors">
                  <Bot className="h-6 w-6 text-cyan-500" />
                </div>
                <CardTitle className="mt-4 group-hover:text-cyan-400 transition-colors">Seamless Integration</CardTitle>
                <CardDescription className="text-gray-400">
                  Designed to work with your existing infrastructure without disruption.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our agents integrate with different platforms and services, ensuring compatibility across your tech
                  stack.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black" id="services-preview">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Our AI Solutions</h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our comprehensive range of AI services designed to transform your business
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all duration-500"></div>
              <div className="relative p-6 flex flex-col h-full min-h-[320px]">
                <div className="p-3 rounded-full bg-purple-500/10 w-fit mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Conversational AI</h3>
                <p className="text-gray-300 mb-6">
                  Advanced chatbots and virtual assistants that understand natural language and provide 24/7 customer
                  support.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/services"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="absolute bottom-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Bot className="h-24 w-24 text-purple-500" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all duration-500"></div>
              <div className="relative p-6 flex flex-col h-full min-h-[320px]">
                <div className="p-3 rounded-full bg-blue-500/10 w-fit mb-4">
                  <Brain className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Predictive Analytics</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered forecasting and trend analysis for data-driven decisions in sales, inventory, and market
                  trends.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/services"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="absolute bottom-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Brain className="h-24 w-24 text-blue-500" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-teal-600/20 group-hover:from-cyan-600/30 group-hover:to-teal-600/30 transition-all duration-500"></div>
              <div className="relative p-6 flex flex-col h-full min-h-[320px]">
                <div className="p-3 rounded-full bg-cyan-500/10 w-fit mb-4">
                  <Cpu className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Process Automation</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent workflow automation for increased efficiency in document processing, email management, and
                  data entry.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/services"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="absolute bottom-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Cpu className="h-24 w-24 text-cyan-500" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/services">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950" id="about-preview">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">About Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                From Vision to Reality
              </h2>
              <p className="text-gray-300 text-lg">
                Vee Solve was founded with the goal of making advanced AI agents more accessible for businesses of all sizes. We're focused on developing intelligent agents designed to streamline workflows and automate routine tasks.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <p className="text-gray-300">Team of AI specialists</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <p className="text-gray-300">Engineered to meet the needs of businesses across industries and geographies</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <p className="text-gray-300">Committed to ethical AI development</p>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/about">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white">
                    Learn Our Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-lg p-4 md:p-6 backdrop-blur-sm border border-purple-500/10">
                    <Users className="h-8 w-8 text-purple-400 mb-2" />
                    <h3 className="text-lg font-medium text-white">Our Team</h3>
                    <p className="text-gray-300 text-sm">Experts in AI, machine learning, and business strategy</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-lg p-4 md:p-6 backdrop-blur-sm border border-blue-500/10 translate-y-4">
                    <Brain className="h-8 w-8 text-blue-400 mb-2" />
                    <h3 className="text-lg font-medium text-white">Our Mission</h3>
                    <p className="text-gray-300 text-sm">Empowering businesses with intelligent AI solutions</p>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6 translate-y-6">
                  <div className="bg-gradient-to-br from-cyan-900/40 to-teal-900/40 rounded-lg p-4 md:p-6 backdrop-blur-sm border border-cyan-500/10">
                    <Zap className="h-8 w-8 text-cyan-400 mb-2" />
                    <h3 className="text-lg font-medium text-white">Innovation</h3>
                    <p className="text-gray-300 text-sm">Exploring possibilities through practical AI innovation</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-900/40 to-green-900/40 rounded-lg p-4 md:p-6 backdrop-blur-sm border border-teal-500/10 translate-y-4">
                    <Users className="h-8 w-8 text-teal-400 mb-2" />
                    <h3 className="text-lg font-medium text-white">Client Success</h3>
                    <p className="text-gray-300 text-sm">Dedicated to exceeding client expectations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black" id="pricing-preview">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">Pricing</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Transparent Pricing Plans</h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that fits your needs and scale as your business grows
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <Card className="bg-gray-900 border-gray-800 h-full">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="mr-2 p-1.5 rounded-full bg-purple-500/10">
                      <CreditCard className="h-5 w-5 text-purple-500" />
                    </div>
                    Starter
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Perfect for small businesses just beginning with AI
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">From $150</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-purple-500" />
                      <span>1 AI Solution of your choice</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-purple-500" />
                      <span>Up to 1,000 interactions per month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-purple-500" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/pricing" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <Card className="bg-gray-900 border-gray-800 h-full">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="mr-2 p-1.5 rounded-full bg-blue-500/10">
                      <CreditCard className="h-5 w-5 text-blue-500" />
                    </div>
                    Professional
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Ideal for growing businesses with expanding AI needs
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">From $600</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-blue-500" />
                      <span>3 AI Solutions of your choice</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-blue-500" />
                      <span>Up to 5,000 interactions per month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-blue-500" />
                      <span>Priority email & chat support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/pricing" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
              <Card className="bg-gray-900 border-gray-800 h-full">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="mr-2 p-1.5 rounded-full bg-cyan-500/10">
                      <CreditCard className="h-5 w-5 text-cyan-500" />
                    </div>
                    Enterprise
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    For organizations requiring comprehensive AI solutions
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">Custom</span>
                    <span className="text-gray-400 ml-2">pricing</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-cyan-500" />
                      <span>Unlimited AI Solutions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-cyan-500" />
                      <span>Unlimited interactions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-cyan-500" />
                      <span>24/7 priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/pricing" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white">
                      Contact Sales
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/pricing">
              <Button
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800 hover:border-purple-500"
              >
                Compare All Plans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950" id="portfolio">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">Portfolio</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Featured Projects</h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore some of our most successful AI implementations across various industries.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Project 1 */}
            <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative h-[200px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="h-20 w-20 text-purple-500/50 group-hover:scale-110 group-hover:text-purple-500/70 transition-all duration-500" />
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                    NexusAI Assistant
                  </CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
                <CardDescription className="text-gray-400">Enterprise AI Assistant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  A comprehensive AI assistant that streamlined operations for a Fortune 500 company, resulting in a 35%
                  increase in productivity.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="link"
                  className="text-purple-400 p-0 hover:text-purple-300 group-hover:translate-x-1 transition-transform"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
                </Button>
              </CardFooter>
            </Card>

            {/* Project 2 */}
            <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative h-[200px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bot className="h-20 w-20 text-blue-500/50 group-hover:scale-110 group-hover:text-blue-500/70 transition-all duration-500" />
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors">RetailBot</CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500" />
                  </div>
                </div>
                <CardDescription className="text-gray-400">E-Commerce Customer Service</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  An intelligent chatbot that handles 90% of customer inquiries for a major e-commerce platform,
                  improving response time by 78%.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="link"
                  className="text-blue-400 p-0 hover:text-blue-300 group-hover:translate-x-1 transition-transform"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
                </Button>
              </CardFooter>
            </Card>

            {/* Project 3 */}
            <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative h-[200px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu className="h-20 w-20 text-cyan-500/50 group-hover:scale-110 group-hover:text-cyan-500/70 transition-all duration-500" />
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">MediScan AI</CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
                <CardDescription className="text-gray-400">Healthcare Diagnostic Assistant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  A diagnostic AI system that helps radiologists identify abnormalities in medical images with 99.2%
                  accuracy.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="link"
                  className="text-cyan-400 p-0 hover:text-cyan-300 group-hover:translate-x-1 transition-transform"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/portfolio">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-950 to-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss how our AI agents can help you achieve your business goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add the Chatbot component */}
      <Chatbot />

      {/* Back to top button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 p-2 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-all duration-300 z-30"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
