import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Bot, Brain, Cpu, Database, Globe, Lock, MessageSquare, Settings, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Where Intelligence Meets Everyday Solutions
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                 Discover our comprehensive range of AI agent solutions designed to transform your business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-900 border-gray-800 text-white overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="p-2 rounded-lg bg-purple-500/10 w-fit">
                  <Bot className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle className="mt-4">Conversational AI Agents</CardTitle>
                <CardDescription className="text-gray-400">
                  Advanced AI chatbots and virtual assistants that understand natural language.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-purple-500">•</div>
                    <span>24/7 customer support automation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-purple-500">•</div>
                    <span>Multi-language support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-purple-500">•</div>
                    <span>Contextual understanding</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-purple-500">•</div>
                    <span>Seamless human handoff</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-purple-400 p-0 hover:text-purple-300">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="p-2 rounded-lg bg-blue-500/10 w-fit">
                  <Brain className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="mt-4">CV Analysis Agent for Recruitment Companies</CardTitle>
                <CardDescription className="text-gray-400">
                  AI-driven CV analysis and smart candidate ranking for faster hiring decisions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-blue-500">•</div>
                    <span>Screens CVs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-blue-500">•</div>
                    <span>Matches job criteria</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-blue-500">•</div>
                    <span>Sends top candidates to HR</span>
                  </li>
                  
                  
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-blue-400 p-0 hover:text-blue-300">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="p-2 rounded-lg bg-cyan-500/10 w-fit">
                  <Cpu className="h-6 w-6 text-cyan-500" />
                </div>
                <CardTitle className="mt-4">Process Automation Agents</CardTitle>
                <CardDescription className="text-gray-400">
                  Intelligent workflow automation for increased efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-cyan-500">•</div>
                    <span>Meeting Scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-cyan-500">•</div>
                    <span>Email management</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-cyan-500">•</div>
                    <span>Data entry automation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-cyan-500">•</div>
                    <span>Appointment Bookins</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-cyan-400 p-0 hover:text-cyan-300">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="p-2 rounded-lg bg-teal-500/10 w-fit">
                  <MessageSquare className="h-6 w-6 text-teal-500" />
                </div>
                <CardTitle className="mt-4">Content Generation Agents</CardTitle>
                <CardDescription className="text-gray-400">
                  AI-powered content creation for marketing and communications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-teal-500">•</div>
                    <span>Blog post generation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-teal-500">•</div>
                    <span>Social media content</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-teal-500">•</div>
                    <span>Email campaign writing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-teal-500">•</div>
                    <span>Product descriptions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-teal-400 p-0 hover:text-teal-300">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="p-2 rounded-lg bg-green-500/10 w-fit">
                  <Globe className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle className="mt-4">Multilingual Support Agents</CardTitle>
                <CardDescription className="text-gray-400">
                  Break language barriers with AI-powered translation and support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-green-500">•</div>
                    <span>Real-time translation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-green-500">•</div>
                    <span>Cultural context adaptation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-green-500">•</div>
                    <span>Localized content creation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-green-500">•</div>
                    <span>Global customer support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-green-400 p-0 hover:text-green-300">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="p-2 rounded-lg bg-yellow-500/10 w-fit">
                  <Lock className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle className="mt-4">Medical Inquiry Assistants</CardTitle>
                <CardDescription className="text-gray-400">
                  AI-powered monitoring and schedule management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-yellow-500">•</div>
                    <span>Automate patient FAQs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-yellow-500">•</div>
                    <span>Guide service navigation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-yellow-500">•</div>
                    <span>Reduce front-desk load</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-yellow-500">•</div>
                    <span>Appointment reminders</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-yellow-400 p-0 hover:text-yellow-300">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Seamless Integration with Your Systems
              </h2>
              <p className="text-gray-300 md:text-xl">
                Our AI agents are designed to work with your existing infrastructure, minimizing disruption and
                maximizing value.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="mr-2 h-5 w-5 text-purple-500">•</div>
                  <span>Built for seamless integration across modern platforms and services</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-5 w-5 text-purple-500">•</div>
                  <span>API-first architecture for easy connectivity</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-5 w-5 text-purple-500">•</div>
                  <span>Secure data handling and processing</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-5 w-5 text-purple-500">•</div>
                  <span>Minimal setup time with guided implementation</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                      <div className="h-16 w-16 rounded-lg bg-gray-800 flex items-center justify-center">
                        <Database className="h-8 w-8 text-purple-500" />
                      </div>
                      <div className="h-16 w-16 rounded-lg bg-gray-800 flex items-center justify-center">
                        <Settings className="h-8 w-8 text-blue-500" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-8">
                      <div className="h-16 w-16 rounded-lg bg-gray-800 flex items-center justify-center">
                        <Zap className="h-8 w-8 text-cyan-500" />
                      </div>
                      <div className="h-16 w-16 rounded-lg bg-gray-800 flex items-center justify-center">
                        <Globe className="h-8 w-8 text-teal-500" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-80 animate-pulse"></div>
                    <Bot className="absolute h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
