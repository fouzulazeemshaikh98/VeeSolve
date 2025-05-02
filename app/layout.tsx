import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Head from 'next/head';

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorEffect } from "@/components/cursor-effect"
import { ParticleBackground } from "@/components/particle-background"
import { Toaster } from "@/components/ui/toaster"
import { Html, Main, NextScript } from 'next/document';


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vee Solve | Next-Gen AI Solutions",
  description: "Innovative AI solutions for your business needs",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <Head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="description" content="Next-level AI receptionist for hospitals. Smart, scalable, and integrated with Google Sheets." />
        <meta name="keywords" content="AI hospital agent, medical receptionist, hospital chatbot, veeSolve" />
        <meta name="robots" content="index, follow" />
        {/* General SEO */}
        <title>VeeSolve – AI Receptionist for Hospitals | Book Appointments Instantly</title>
        <meta name="description" content="VeeSolve brings AI agents for hospitals that automate reception tasks, appointment booking, and patient FAQs – 24/7 intelligent support." />
        <meta name="keywords" content="ai agent, ai receptionist, hospital ai, chatbot for clinics, ai appointment bot, veeSolve, hospital chatbot, medical ai agent, healthcare automation, book doctor AI, AI hospital assistant" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.veesolve.com/" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Receptionist for Hospitals – Book Appointments 24/7 | VeeSolve" />
        <meta property="og:description" content="Try VeeSolve's AI receptionist – handle bookings, queries & doctor schedules through smart automation." />
        <meta property="og:url" content="https://www.veesolve.com/" />
        <meta property="og:image" content="https://www.veesolve.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Hospital Receptionist – VeeSolve" />
        <meta name="twitter:description" content="AI-powered hospital assistant by VeeSolve. Book appointments and manage patient queries with zero human effort." />
        <meta name="twitter:image" content="https://www.veesolve.com/og-image.jpg" />

        {/* Mobile & SEO Optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ParticleBackground />
          <CursorEffect />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
