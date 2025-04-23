"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Bot, CheckCircle, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Get in Touch
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions about our AI agents? Ready to transform your business? We're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:gap-10 md:grid-cols-2 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-white">Contact Information</h2>
                <p className="mt-2 text-gray-300">
                  Reach out to us through any of these channels or fill out the form.
                </p>
              </div>
              <div className="grid gap-4 sm:gap-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-500/10 w-fit">
                      <Mail className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Email</h3>
                      <p className="text-sm text-gray-300 mt-1">Our team typically responds within 2 hours.</p>
                      <a
                        href="mailto:jibranazeem@veesolve.com"
                        className="text-purple-400 hover:text-purple-300 text-sm mt-2 inline-block"
                      >
                        jibranazeem@veesolve.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-500/10 w-fit">
                      <Phone className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Phone</h3>
                      <p className="text-sm text-gray-300 mt-1">Available Monday-Saturday, 9am-9pm EST.</p>
                      <a href="tel:+971555086845" className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block">
                        +971 (555) 086-845
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-cyan-500/10 w-fit">
                      <MapPin className="h-6 w-6 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Office</h3>
                      <p className="text-sm text-gray-300 mt-1">Our Office</p>
                      <address className="text-cyan-400 not-italic text-sm mt-2">
                        123 AI Boulevard
                        <br />
                        Tech District
                        <br />
                        Abu Dhabi, United Arab Emirates
                      </address>
                    </div>
                  </CardContent>
                </Card>
              </div>
              {/* <div className="relative h-[200px] sm:h-[300px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bot className="h-24 w-24 text-white opacity-20" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-center px-6">Interactive map will be displayed here</p>
                </div>
              </div> */}
            </div>
            <div>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                      <div className="p-3 rounded-full bg-green-500/10">
                        <CheckCircle className="h-12 w-12 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                      <p className="text-gray-300 max-w-md">
                        Thank you for reaching out. Our team will get back to you as soon as possible.
                      </p>
                      <Button
                        className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company name"
                          value={formState.company}
                          onChange={handleChange}
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-white">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="How can we help you?"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          className="min-h-[120px] bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Message
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our AI agents and services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white">How quickly can AI agents be deployed?</h3>
                <p className="mt-2 text-gray-300">
                  Most of our AI agents can be deployed within 1-2 weeks, depending on the complexity of integration
                  with your existing systems.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white">Do I need technical expertise to use your AI agents?</h3>
                <p className="mt-2 text-gray-300">
                  No, our solutions are designed to be user-friendly. We provide comprehensive training and ongoing
                  support to ensure smooth adoption.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white">How secure are your AI agents?</h3>
                <p className="mt-2 text-gray-300">
                  Security is our priority. All our AI agents comply with industry standards and regulations, with
                  end-to-end encryption and regular security audits.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white">Can AI agents be customized for our specific needs?</h3>
                <p className="mt-2 text-gray-300">
                  Absolutely. We offer extensive customization options to tailor our AI agents to your unique business
                  requirements and workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
