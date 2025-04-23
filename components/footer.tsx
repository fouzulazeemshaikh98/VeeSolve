import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { Newsletter } from "@/components/newsletter"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black py-12">
      <div className="container grid gap-8 px-4 md:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-auto" />
            <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Vee Solve
            </span>
          </Link>
          <p className="text-sm text-gray-400">
            Next-generation AI solutions for businesses looking to innovate and scale.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="font-medium text-white">Company</div>
          <nav className="grid gap-2 text-sm text-gray-400">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Careers
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Legal
            </Link>
          </nav>
        </div>
        <div className="grid gap-4">
          <div className="font-medium text-white">Services</div>
          <nav className="grid gap-2 text-sm text-gray-400">
            <Link href="/services" className="hover:text-white transition-colors">
              AI Solutions
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Custom Development
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Integration
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Support
            </Link>
          </nav>
        </div>
        <div className="grid gap-4">
          <div className="font-medium text-white">Subscribe</div>
          <Newsletter />
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t border-gray-800 pt-8 px-4 md:px-6">
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Vee Solve. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
