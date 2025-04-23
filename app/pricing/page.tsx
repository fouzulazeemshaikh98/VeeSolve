import Link from "next/link"
import { ArrowRight, Check, HelpCircle, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Transparent Pricing for Every Business
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that fits your needs. Scale as you grow with our flexible pricing options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-md overflow-hidden rounded-lg bg-gray-900 border border-gray-800">
                <TabsList className="flex w-full justify-between bg-transparent">
                  <TabsTrigger
                    value="monthly"
                    className="flex-1 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  >
                    Monthly Billing
                  </TabsTrigger>
                  <TabsTrigger
                    value="annual"
                    className="flex-1 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  >
                    Annual (Save 20%)
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            <TabsContent value="monthly" className="mt-0">
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {/* Starter Plan */}
                <Card className="bg-gray-900 border-gray-800 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <CardHeader>
                    <CardTitle className="text-white">Starter</CardTitle>
                    <CardDescription className="text-gray-400">
                      Perfect for small businesses just beginning with AI.
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">From $150</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-purple-500" />
                        <span>1 AI Solution of your choice</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-purple-500" />
                        <span>Up to 1,000 interactions per month</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-purple-500" />
                        <span>Basic customization options</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-purple-500" />
                        <span>Email support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-purple-500" />
                        <span>Standard security features</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-purple-500" />
                        <span>Monthly performance reports</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Professional Plan */}
                <Card className="bg-gray-900 border-gray-800 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">Professional</CardTitle>
                    <CardDescription className="text-gray-400">
                      Ideal for growing businesses with expanding AI needs.
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">From $600</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>3 AI Solutions of your choice</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>Up to 5,000 interactions per month</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>Advanced customization options</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>Priority email & chat support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>Enhanced security features</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>Weekly performance reports</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>API access</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>Dedicated account manager</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Enterprise Plan */}
                <Card className="bg-gray-900 border-gray-800 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
                  <CardHeader>
                    <CardTitle className="text-white">Enterprise</CardTitle>
                    <CardDescription className="text-gray-400">
                      For organizations requiring comprehensive AI solutions.
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">Custom</span>
                      <span className="text-gray-400 ml-2">pricing</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Unlimited AI Solutions</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Unlimited interactions</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Full customization & white labeling</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>24/7 priority support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Enterprise-grade security</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Real-time analytics dashboard</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Full API access & developer tools</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Dedicated success team</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Custom integration support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>SLA guarantees</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white">
                        Contact Sales
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="annual" className="mt-0">
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {/* Starter Plan Annual */}
                <Card className="bg-gray-900 border-gray-800 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <CardHeader>
                    <CardTitle className="text-white">Starter</CardTitle>
                    <CardDescription className="text-gray-400">
                      Perfect for small businesses just beginning with AI.
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">From $120</span>
                      <span className="text-gray-400 ml-2">/month</span>
                      <div className="text-sm text-green-400 mt-1">Save $360 annually</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-purple-500" />
                        <span>1 AI Solution of your choice</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-purple-500" />
                        <span>Up to 1,000 interactions per month</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-purple-500" />
                        <span>Basic customization options</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-purple-500" />
                        <span>Email support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-purple-500" />
                        <span>Standard security features</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-purple-500" />
                        <span>Monthly performance reports</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Professional Plan Annual */}
                <Card className="bg-gray-900 border-gray-800 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">Professional</CardTitle>
                    <CardDescription className="text-gray-400">
                      Ideal for growing businesses with expanding AI needs.
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">From $480</span>
                      <span className="text-gray-400 ml-2">/month</span>
                      <div className="text-sm text-green-400 mt-1">Save $1440 annually</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>3 AI Solutions of your choice</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>Up to 5,000 interactions per month</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>Advanced customization options</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>Priority email & chat support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>Enhanced security features</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>Weekly performance reports</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>API access</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-blue-500" />
                        <span>Dedicated account manager</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Enterprise Plan Annual */}
                <Card className="bg-gray-900 border-gray-800 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
                  <CardHeader>
                    <CardTitle className="text-white">Enterprise</CardTitle>
                    <CardDescription className="text-gray-400">
                      For organizations requiring comprehensive AI solutions.
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">Custom</span>
                      <span className="text-gray-400 ml-2">pricing</span>
                      <div className="text-sm text-green-400 mt-1">Annual discounts available</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Unlimited AI Solutions</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Unlimited interactions</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Full customization & white labeling</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>24/7 priority support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Enterprise-grade security</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Real-time analytics dashboard</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Full API access & developer tools</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Dedicated success team</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>Custom integration support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-cyan-500" />
                        <span>SLA guarantees</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white">
                        Contact Sales
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Compare Features</h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A detailed breakdown of what's included in each plan.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-800">
            <div className="w-full overflow-x-auto no-scrollbar -mx-1 px-1">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-gray-900 text-white border-b border-gray-800">Features</th>
                    <th className="p-4 bg-gray-900 text-white border-b border-gray-800">
                      <div className="text-center">Starter</div>
                      <div className="text-center text-sm text-gray-400">From $150/mo</div>
                    </th>
                    <th className="p-4 bg-gray-900 text-white border-b border-gray-800">
                      <div className="text-center">Professional</div>
                      <div className="text-center text-sm text-gray-400">From $600/mo</div>
                    </th>
                    <th className="p-4 bg-gray-900 text-white border-b border-gray-800">
                      <div className="text-center">Enterprise</div>
                      <div className="text-center text-sm text-gray-400">Custom</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-white">AI Solutions</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">1</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">3</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-white">Monthly Interactions</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">1,000</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">5,000</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-white">Customization</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">Basic</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">Advanced</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">Full + White Label</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-white">Support</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">Email</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">Priority Email & Chat</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">24/7 Priority</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-white">API Access</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">
                      <div className="flex justify-center">
                        <Zap className="h-5 w-5 text-gray-600" />
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">
                      <div className="flex justify-center">
                        <Check className="h-5 w-5 text-blue-500" />
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">
                      <div className="flex justify-center">
                        <Check className="h-5 w-5 text-cyan-500" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-white">
                      <div className="flex items-center">
                        Analytics
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 text-gray-400 ml-1" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-800 text-white border-gray-700">
                              <p className="max-w-xs">
                                Performance metrics and usage statistics for your AI solutions.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">Monthly Reports</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">Weekly Reports</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">Real-time Dashboard</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-white">Dedicated Account Manager</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">
                      <div className="flex justify-center">
                        <Zap className="h-5 w-5 text-gray-600" />
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">
                      <div className="flex justify-center">
                        <Check className="h-5 w-5 text-blue-500" />
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">
                      <div className="flex justify-center">
                        <Check className="h-5 w-5 text-cyan-500" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-white">Custom Integrations</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">
                      <div className="flex justify-center">
                        <Zap className="h-5 w-5 text-gray-600" />
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">Limited</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">Full Support</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-white">SLA Guarantees</td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">
                      <div className="flex justify-center">
                        <Zap className="h-5 w-5 text-gray-600" />
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">
                      <div className="flex justify-center">
                        <Zap className="h-5 w-5 text-gray-600" />
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-300">
                      <div className="flex justify-center">
                        <Check className="h-5 w-5 text-cyan-500" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our pricing and plans.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:gap-12">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">Can I switch plans later?</h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be
                  available immediately. When downgrading, changes will take effect at the start of your next billing
                  cycle.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">What happens if I exceed my monthly interactions?</h3>
                <p className="text-gray-300">
                  If you exceed your monthly interaction limit, you'll be charged a small fee per additional
                  interaction. We'll notify you when you reach 80% of your limit so you can decide whether to upgrade or
                  manage your usage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">Do you offer a free trial?</h3>
                <p className="text-gray-300">
                  We offer a 14-day free trial of our Professional plan for new customers. This gives you full access to
                  experience the capabilities of our AI solutions before committing to a subscription.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-300">
                  We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers
                  can also arrange for invoicing with net-30 payment terms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">Is there a setup fee?</h3>
                <p className="text-gray-300">
                  There are no setup fees for our Starter and Professional plans. Enterprise plans may include a
                  one-time setup fee depending on the complexity of your implementation and customization requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Do you offer discounts for non-profits or educational institutions?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer special pricing for qualified non-profit organizations, educational institutions, and
                  startups. Please contact our sales team to learn more about our discount programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-950 to-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Get Started?
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that's right for your business and start transforming your operations with AI today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
