"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      setEmail("")
      toast({
        title: "Subscribed!",
        description: "You've successfully subscribed to our newsletter.",
      })
    }, 1000)
  }

  return (
    <div className="w-full bg-gray-900 border border-gray-800 rounded-lg p-6 md:p-8">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-full bg-purple-500/10">
            <Mail className="h-5 w-5 text-purple-500" />
          </div>
          <h3 className="text-xl font-bold text-white">Stay Updated</h3>
        </div>
        <p className="text-gray-300">
          Subscribe to our newsletter for the latest AI insights, industry trends, and company updates.
        </p>
        {isSubscribed ? (
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
            <p className="text-green-400">Thanks for subscribing! Check your inbox for a confirmation email.</p>
            <Button variant="link" className="text-green-400 p-0 mt-2" onClick={() => setIsSubscribed(false)}>
              Subscribe another email
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white w-full"
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Subscribing...
                </span>
              ) : (
                <span className="flex items-center">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        )}
        <p className="text-xs text-gray-400">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </div>
  )
}
