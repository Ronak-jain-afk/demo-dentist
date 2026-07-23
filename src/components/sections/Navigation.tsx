'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'


import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Doctors', href: '#doctors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">

          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none tracking-tight">Clarity Dental</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mt-1">Care That Lasts</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left pb-1">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="#appointment" className={cn(buttonVariants({ variant: "default" }), "rounded-full px-5 py-4 sm:px-8 sm:py-6 text-xs sm:text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300")}>
            Book <span className="hidden sm:inline ml-1">Appointment</span>
          </Link>
          <button 
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/50 shadow-xl py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground font-medium py-2 border-b border-border/20 last:border-0 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
