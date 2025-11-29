"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">F</span>
          </div>
          <span className="font-bold text-lg text-foreground">FlowTrack</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-muted-foreground hover:text-foreground transition">
            Features
          </Link>
          <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition">
            Pricing
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-foreground hover:text-primary transition font-medium">Sign In</button>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition">
            Get Started
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#features" className="text-foreground hover:text-primary transition">
                Features
              </Link>
              <Link href="#testimonials" className="text-foreground hover:text-primary transition">
                Testimonials
              </Link>
              <Link href="#pricing" className="text-foreground hover:text-primary transition">
                Pricing
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition">
                Contact
              </Link>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
