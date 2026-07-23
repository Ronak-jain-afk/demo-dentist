'use client'

import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const features = [
  'Digital X-rays for accurate diagnosis',
  'Intraoral cameras for better understanding',
  'Laser dentistry for comfortable treatment',
  'Sterilization that exceeds industry standards'
]

export function ClinicOverview() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.1)] ml-0 lg:ml-12">
              <Image 
                src="/images/dental-doctors.webp" 
                alt="State-of-the-art Dental Care"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div 
              className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-6 lg:-left-8 bg-[#0a192f] text-white w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full shadow-2xl flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-6 border-4 md:border-8 border-background z-10"
            >
              <div className="mb-1 md:mb-3">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22S8 20 8 15V8l4-4 4 4v7c0 5-4 7-4 7z" />
                </svg>
              </div>
              <div className="font-semibold text-[10px] sm:text-xs md:text-sm leading-tight">
                State-of-the-Art<br/>Technology
              </div>
            </div>
            
            {/* Dotted pattern overlapping top left */}
            <div 
              className="absolute -top-10 -left-6 w-32 h-32 opacity-20 -z-10 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #0a192f 2px, transparent 2px)',
                backgroundSize: '16px 16px'
              }}
            />
          </div>

          <div 
            className="flex flex-col gap-6 lg:pl-8 mt-12 lg:mt-0 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
              <span className="w-8 h-px bg-primary" /> Advanced Care
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              State-of-the-Art<br/>
              <span className="text-primary">Dental Care</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine advanced technology with a gentle touch to deliver exceptional results. From routine cleanings to complex treatments, we&apos;ve got you covered in a relaxing, anxiety-free environment.
            </p>
            
            <ul className="space-y-4 my-4">
              {features.map((feature, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div>
              <Link href="#services" className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-full px-8 h-14 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all group")}>
                Explore Our Technology <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  )
}
