'use client'

import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const tourImages = [
  { src: '/images/tour1.webp', alt: 'Reception' },
  { src: '/images/tour2.webp', alt: 'Waiting Lounge' },
  { src: '/images/tour3.webp', alt: 'Treatment Room' },
  { src: '/images/tour4.webp', alt: 'Sterilization Area' }
]

export function ClinicTour() {
  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div 
            className="max-w-xl"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Clinic Tour</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Explore Our Modern Facility</h3>
          </div>
          <div
          >
            <Link href="#gallery" className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}>
              View Full Gallery
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {tourImages.map((img, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl overflow-hidden bg-muted group ${idx === 1 || idx === 2 ? 'aspect-square md:aspect-[4/5]' : 'aspect-square md:aspect-square mt-0 md:mt-8'}`}
            >
              <Image 
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-foreground font-semibold text-sm drop-shadow-md">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
