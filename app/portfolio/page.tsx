import Link from "next/link"
import { ArrowRight, Bot, Brain, Code, Cpu, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Our AI Solution Portfolio
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our successful AI implementations across various industries and use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-full overflow-hidden rounded-lg bg-gray-900 border border-gray-800">
                <div className="overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
                  <TabsList className="flex w-full justify-between bg-transparent min-w-[500px] md:min-w-0 py-2">
                    <TabsTrigger
                      value="all"
                      className="flex-1 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger
                      value="enterprise"
                      className="flex-1 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                    >
                      Enterprise
                    </TabsTrigger>
                    <TabsTrigger
                      value="ecommerce"
                      className="flex-1 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                    >
                      E-Commerce
                    </TabsTrigger>
                    <TabsTrigger
                      value="healthcare"
                      className="flex-1 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                    >
                      Healthcare
                    </TabsTrigger>
                    <TabsTrigger
                      value="finance"
                      className="flex-1 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                    >
                      Finance
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {/* Project 1 */}
                <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="h-20 w-20 text-purple-500/50" />
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <CardTitle className="text-white text-xl">NexusAI Assistant</CardTitle>
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
                      A comprehensive AI assistant that streamlined operations for a Fortune 500 company, resulting in a
                      35% increase in productivity.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">NLP</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                        Process Automation
                      </span>
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">Enterprise</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-purple-400 p-0 hover:text-purple-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 2 */}
                <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Bot className="h-20 w-20 text-blue-500/50" />
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <CardTitle className="text-white text-xl">RetailBot</CardTitle>
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
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                        Conversational AI
                      </span>
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">E-Commerce</span>
                      <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-full">
                        Customer Service
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-blue-400 p-0 hover:text-blue-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 3 */}
                <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Cpu className="h-20 w-20 text-cyan-500/50" />
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <CardTitle className="text-white text-xl">MediScan AI</CardTitle>
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
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        Computer Vision
                      </span>
                      <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-full">Healthcare</span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Diagnostics</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-cyan-400 p-0 hover:text-cyan-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Additional projects... */}
                <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-green-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code className="h-20 w-20 text-teal-500/50" />
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <CardTitle className="text-white text-xl">FinPredict</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">Financial Analysis & Forecasting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      A predictive analytics system for a major investment firm that improved portfolio performance by
                      18% year-over-year.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-full">
                        Predictive Analytics
                      </span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Finance</span>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                        Investment
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-teal-400 p-0 hover:text-teal-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 5 */}
                <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Bot className="h-20 w-20 text-green-500/50" />
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <CardTitle className="text-white text-xl">SupplyChainGenius</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">Logistics Optimization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      An AI system that optimized the global supply chain for a manufacturing giant, reducing costs by
                      22% and delivery times by 35%.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        Optimization
                      </span>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Logistics</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                        Manufacturing
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-green-400 p-0 hover:text-green-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 6 */}
                <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="h-20 w-20 text-yellow-500/50" />
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <CardTitle className="text-white text-xl">SecureGuard AI</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">Cybersecurity Threat Detection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      An advanced threat detection system that prevented over 1,500 potential security breaches for a
                      banking network.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Security</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">Banking</span>
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                        Threat Detection
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-yellow-400 p-0 hover:text-yellow-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Other tab contents with similar structure */}
            <TabsContent value="enterprise" className="mt-0">
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {/* Enterprise Projects */}
                <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="h-20 w-20 text-purple-500/50" />
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <CardTitle className="text-white text-xl">NexusAI Assistant</CardTitle>
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
                      A comprehensive AI assistant that streamlined operations for a Fortune 500 company, resulting in a
                      35% increase in productivity.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">NLP</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                        Process Automation
                      </span>
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">Enterprise</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-purple-400 p-0 hover:text-purple-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Bot className="h-20 w-20 text-green-500/50" />
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <CardTitle className="text-white text-xl">SupplyChainGenius</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">Logistics Optimization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      An AI system that optimized the global supply chain for a manufacturing giant, reducing costs by
                      22% and delivery times by 35%.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        Optimization
                      </span>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Logistics</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                        Manufacturing
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-green-400 p-0 hover:text-green-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Other tab contents for ecommerce, healthcare, finance */}
            <TabsContent value="ecommerce" className="mt-0">
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Bot className="h-20 w-20 text-blue-500/50" />
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <CardTitle className="text-white text-xl">RetailBot</CardTitle>
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
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                        Conversational AI
                      </span>
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">E-Commerce</span>
                      <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-full">
                        Customer Service
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-blue-400 p-0 hover:text-blue-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="healthcare" className="mt-0">
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Cpu className="h-20 w-20 text-cyan-500/50" />
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <CardTitle className="text-white text-xl">MediScan AI</CardTitle>
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
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        Computer Vision
                      </span>
                      <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-full">Healthcare</span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Diagnostics</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-cyan-400 p-0 hover:text-cyan-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="finance" className="mt-0">
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-green-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code className="h-20 w-20 text-teal-500/50" />
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <CardTitle className="text-white text-xl">FinPredict</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">Financial Analysis & Forecasting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      A predictive analytics system for a major investment firm that improved portfolio performance by
                      18% year-over-year.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-full">
                        Predictive Analytics
                      </span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Finance</span>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                        Investment
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-teal-400 p-0 hover:text-teal-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-gray-900 border-gray-800 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="h-20 w-20 text-yellow-500/50" />
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <CardTitle className="text-white text-xl">SecureGuard AI</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">Cybersecurity Threat Detection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      An advanced threat detection system that prevented over 1,500 potential security breaches for a
                      banking network.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Security</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">Banking</span>
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                        Threat Detection
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-yellow-400 p-0 hover:text-yellow-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">What Our Clients Say</h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from the businesses that have transformed their operations with our AI solutions.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <div>
                    <h3 className="font-medium text-white">Sarah Johnson</h3>
                    <p className="text-sm text-gray-400">CTO, TechGlobal Inc.</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The NexusAI Assistant has completely transformed how our teams collaborate and access information.
                  The ROI was evident within the first month of deployment."
                </p>
                <div className="flex mt-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <div>
                    <h3 className="font-medium text-white">Michael Chen</h3>
                    <p className="text-sm text-gray-400">Director of E-Commerce, ShopEasy</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "RetailBot has revolutionized our customer service. Our satisfaction scores are up 45% and our team
                  can now focus on complex issues while the AI handles routine inquiries."
                </p>
                <div className="flex mt-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500"></div>
                  <div>
                    <h3 className="font-medium text-white">Dr. Emily Rodriguez</h3>
                    <p className="text-sm text-gray-400">Head of Radiology, Metro Health</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "MediScan AI has been a game-changer for our department. The accuracy is remarkable, and it has helped
                  us reduce diagnostic time by 60% while improving patient outcomes."
                </p>
                <div className="flex mt-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Become Our Next Success Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-950 to-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how our AI solutions can help you achieve your business goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/pricing">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  View Pricing Plans
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
