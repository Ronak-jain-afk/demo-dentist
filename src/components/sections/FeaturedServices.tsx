'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Syringe, Sparkles, Activity, ShieldPlus, Baby, HeartPulse, Stethoscope } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const services = [
  {
    icon: Stethoscope,
    title: 'General Dentistry',
    description: 'Routine checkups, cleanings, and preventive care to keep your smile healthy.'
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, bonding, and complete smile makeovers.'
  },
  {
    icon: Activity,
    title: 'Orthodontics',
    description: 'Braces and clear aligners for a straighter, healthier smile.'
  },
  {
    icon: ShieldPlus,
    title: 'Dental Implants',
    description: 'Permanent solutions to restore your smile with confidence.'
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    description: 'Specialized care for children in a friendly, comfortable environment.'
  },
  {
    icon: HeartPulse,
    title: 'Emergency Dentistry',
    description: 'Immediate care for toothaches, injuries, and urgent needs.'
  }
]

export function FeaturedServices() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Care for<br/>Your Entire Family</h3>
            <p className="text-muted-foreground">
              From routine cleanings to complex restorations, we offer a full range of dental services under one roof.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors group overflow-hidden relative">

                
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-background border border-border/50 flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-16 text-center"
        >
          <Link href="#all-services" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-8 h-12")}>
            View All Services
          </Link>
        </div>

      </div>
    </section>
  )
}
