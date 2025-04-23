import { Bot, Calendar, MapPin, Users, Brain, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                About VeeSolve
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Solving real-world business challenges with intelligent AI agents and solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 leading-tight">
                From Vision to Reality
              </h2>
              <p className="text-gray-300 md:text-xl">
                Founded in 2025, AI Agency began with a simple yet ambitious vision: to make advanced artificial
                intelligence accessible to businesses of all sizes.
              </p>
              <p className="text-gray-300">
               At VeeSolve, we are committed to bridging the gap between advanced AI technology and real-world business needs, helping organizations unlock smarter, faster, and more scalable solutions
              </p>
              <p className="text-gray-300">
                VeeSolve was founded by a team of AI researchers and business strategists with a clear mission: to simplify and solve real-world business challenges through intelligent, AI-driven solutions. As artificial intelligence rapidly reshapes industries, many companies struggle to bridge the gap between complex technology and practical implementation.

What began as a shared vision has grown into a dedicated initiative focused on developing advanced AI agents designed to streamline operations, enhance decision-making, and empower businesses to innovate with confidence.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-3xl"></div>
              <div className="relative h-[400px] overflow-hidden rounded-lg bg-gray-900 border border-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-80 animate-pulse"></div>
                  <Bot className="absolute h-16 w-16 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-1/2"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-gray-300">Founded 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-gray-300">AI and ML Specialists</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm text-gray-300">Based In United Arab Emirates, Abu Dhabi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">Our Purpose</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Mission & Values</h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide our work and define our culture.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses with intelligent AI agents that solve complex problems, enhance productivity,
                  and drive innovation. We believe in creating AI that works alongside humans, augmenting their
                  capabilities and freeing them to focus on what matters most.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Innovation</h3>
                  <p className="text-gray-300">
                    We push the boundaries of what's possible, constantly exploring new technologies and approaches to
                    create more intelligent, effective AI solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Ethical AI</h3>
                  <p className="text-gray-300">
                    We are committed to developing AI responsibly, with transparency, fairness, and human well-being at
                    the forefront of our design decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Client Success</h3>
                  <p className="text-gray-300">
                    We measure our success by the value we create for our clients. Their goals become our goals, and
                    we're not satisfied until we've exceeded expectations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">Our People</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Leadership Team</h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the experts driving our vision and innovation.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 transition-all hover:border-purple-500/50">
              <div className="aspect-square overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 flex items-center justify-center">
                    <Users className="h-16 w-16 text-purple-400" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">Dr. Alexandra Chen</h3>
                <p className="text-sm text-purple-400 mb-3">CEO & Co-Founder</p>
                <p className="text-gray-300 text-sm">
                  Former AI Research Lead at MIT with 15+ years of experience in machine learning and neural networks.
                  Dr. Chen leads our strategic vision and research initiatives.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 transition-all hover:border-blue-500/50">
              <div className="aspect-square overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-600/30 flex items-center justify-center">
                    <Users className="h-16 w-16 text-blue-400" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">Marcus Johnson</h3>
                <p className="text-sm text-blue-400 mb-3">CTO & Co-Founder</p>
                <p className="text-gray-300 text-sm">
                  Former Engineering Director at Google AI with expertise in scalable AI systems and enterprise
                  integration.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 transition-all hover:border-cyan-500/50">
              <div className="aspect-square overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-cyan-900/20 to-teal-900/20 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-r from-cyan-600/30 to-teal-600/30 flex items-center justify-center">
                    <Users className="h-16 w-16 text-cyan-400" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">Dr. Sarah Patel</h3>
                <p className="text-sm text-cyan-400 mb-3">Chief AI Officer</p>
                <p className="text-gray-300 text-sm">
                  Renowned AI ethicist and former research scientist at OpenAI, specializing in natural language
                  processing and conversational AI.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 transition-all hover:border-teal-500/50">
              <div className="aspect-square overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-teal-900/20 to-green-900/20 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-r from-teal-600/30 to-green-600/30 flex items-center justify-center">
                    <Users className="h-16 w-16 text-teal-400" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">James Wilson</h3>
                <p className="text-sm text-teal-400 mb-3">Chief Revenue Officer</p>
                <p className="text-gray-300 text-sm">
                  Former VP of Sales at a leading SaaS company with a track record of scaling tech startups from early
                  stage to market leaders.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 transition-all hover:border-green-500/50">
              <div className="aspect-square overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-green-900/20 to-yellow-900/20 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-r from-green-600/30 to-yellow-600/30 flex items-center justify-center">
                    <Users className="h-16 w-16 text-green-400" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">Elena Rodriguez</h3>
                <p className="text-sm text-green-400 mb-3">VP of Product</p>
                <p className="text-gray-300 text-sm">
                  Product leader with experience at top tech companies, focused on creating intuitive, user-centered AI
                  products that solve real business problems.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 transition-all hover:border-yellow-500/50">
              <div className="aspect-square overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-yellow-900/20 to-orange-900/20 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-r from-yellow-600/30 to-orange-600/30 flex items-center justify-center">
                    <Users className="h-16 w-16 text-yellow-400" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">Dr. Michael Zhang</h3>
                <p className="text-sm text-yellow-400 mb-3">VP of Research</p>
                <p className="text-gray-300 text-sm">
                  Leading our research team in developing cutting-edge AI technologies, with a background in
                  reinforcement learning and multi-agent systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Company Culture Section - Replacing Global Impact */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">Our Culture</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Life at Vee Solve</h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We believe in creating an environment where innovation thrives and people can do their best work.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 rounded-full bg-purple-500/10 w-fit">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Collaborative Environment</h3>
                <p className="text-gray-300">
                  We foster a culture of collaboration where diverse perspectives come together to create innovative
                  solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 rounded-full bg-blue-500/10 w-fit">
                  <Brain className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Continuous Learning</h3>
                <p className="text-gray-300">
                  We're committed to ongoing education and professional development, with regular workshops,
                  conferences, and learning opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 rounded-full bg-cyan-500/10 w-fit">
                  <Zap className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Work-Life Balance</h3>
                <p className="text-gray-300">
                  We value the well-being of our team members and promote a healthy balance between professional and
                  personal life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
