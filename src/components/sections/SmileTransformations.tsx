'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const transformations = [
  {
    image: '/images/diff1.webp',
    title: 'Teeth Whitening',
  },
  {
    image: '/images/diff2.webp',
    title: 'Dental Implants',
  },
  {
    image: '/images/diff3.webp',
    title: 'Orthodontic Treatment',
  }
]

export function SmileTransformations() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length)
  }

  return (
    <section className="py-24 bg-background overflow-hidden relative">

      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Real Results</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Smile Transformations</h3>
            <p className="text-muted-foreground">
              See how we help our patients achieve healthier, brighter smiles with personalized treatment plans.
            </p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] sm:aspect-[2/1] bg-muted rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={transformations[currentIndex].image}
                  alt={transformations[currentIndex].title}
                  fill
                  className="object-cover object-center"
                />
                
                {/* Labels */}
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Before
                </div>
                <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  After
                </div>
                
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-md px-6 py-2.5 rounded-full shadow-xl border border-border/50">
                  <span className="font-bold text-primary">{transformations[currentIndex].title}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
            <Button variant="outline" size="icon" className="w-12 h-12 rounded-full bg-background shadow-lg hover:bg-primary hover:text-primary-foreground border-border/50" onClick={prevSlide}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
            <Button variant="outline" size="icon" className="w-12 h-12 rounded-full bg-background shadow-lg hover:bg-primary hover:text-primary-foreground border-border/50" onClick={nextSlide}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex justify-center gap-3 mt-8">
            {transformations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
