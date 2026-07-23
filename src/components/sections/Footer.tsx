'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">

              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none tracking-tight">Clarity Dental</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mt-1">Care That Lasts</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              We&apos;re dedicated to providing gentle, high-quality dental care in a warm and welcoming environment.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link href="#doctors" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Doctors</Link></li>
              <li><Link href="#gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">Clinic Tour</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>123 Medical Plaza, Suite 101<br/>Dallas, TX 75201</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>(214) 555-0187</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@claritydental.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start justify-between text-muted-foreground text-sm">
                <span>Mon - Fri</span>
                <span className="font-medium text-foreground">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-start justify-between text-muted-foreground text-sm">
                <span>Saturday</span>
                <span className="font-medium text-foreground">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex items-start justify-between text-muted-foreground text-sm">
                <span>Sunday</span>
                <span className="font-medium text-foreground">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Clarity Dental. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
