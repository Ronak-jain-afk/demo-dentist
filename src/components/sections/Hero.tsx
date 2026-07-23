'use client'

import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Calendar, PlayCircle, Heart, ShieldCheck, UserCheck, Stethoscope } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  const easeOutExpo = [0.16, 1, 0.3, 1] as const;
  
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Background Decor */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-0 -z-10 w-full md:w-[60%] h-[120%] bg-primary/5 rounded-bl-[150px] md:rounded-bl-[300px]" 
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            className="flex flex-col gap-6 md:pr-8 z-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 }
              }
            }}
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutExpo } }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary w-fit text-xs font-bold tracking-wider uppercase"
            >
              We Care For Your Smile
            </motion.div>
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutExpo } }
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground"
            >
              Confident Smile.<br/>
              <span className="text-primary">Better You.</span>
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutExpo } }
              }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-medium"
            >
              Personalized dental care in a comfortable,<br className="hidden md:block"/> modern environment.
            </motion.p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutExpo } }
              }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link href="#appointment" className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-full px-8 h-14 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-95 transition-all duration-200")}>
                <Calendar className="mr-2 h-5 w-5" /> Book Your Visit
              </Link>
              <Link href="#video" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-8 h-14 text-base font-bold border-2 hover:bg-muted active:scale-95 transition-all duration-200 bg-background")}>
                <PlayCircle className="mr-2 h-5 w-5 text-primary" /> Watch Our Video
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, filter: "blur(4px)" },
                visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1, ease: easeOutExpo } }
              }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border/50"
            >
              <div className="flex flex-col gap-1.5">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold text-foreground">Gentle Care</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold text-foreground">Advanced Tech</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <UserCheck className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold text-foreground">Expert Dentists</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <Stethoscope className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold text-foreground">Comfortable</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Image and 3D Overlaps */}
          <motion.div 
            className="relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: easeOutExpo }}
          >
            {/* Floating organic blob background */}
            <motion.div 
              animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 md:-inset-8 bg-primary/10 rounded-full blur-3xl -z-10"
            />
            
            {/* Abstract Shape underneath image */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-primary/20 rounded-[4rem] -z-10 transform translate-x-8 translate-y-8"
            />

            {/* Dot Grid Pattern (Floating) */}
            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -left-12 md:-left-20 w-48 h-48 opacity-40 z-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, var(--color-primary) 2px, transparent 2px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* Main Image in custom rounded shape */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-t-full rounded-bl-full rounded-br-3xl overflow-hidden shadow-2xl z-10 border-8 border-background"
            >
              <Image 
                src="/images/landingpagegirlimage.jpg"
                alt="Happy patient sitting in a dental chair"
                fill
                className="object-cover object-[center_30%]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            
            {/* 3D Overlapping Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.8, ease: easeOutExpo },
                scale: { duration: 0.8, delay: 0.8, ease: easeOutExpo },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 } 
              }}
              className="absolute -bottom-6 -left-4 md:-bottom-4 md:-left-12 bg-background p-5 rounded-[2rem] shadow-2xl border border-border/50 flex flex-col gap-3 z-30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <Stethoscope size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">State-of-the-Art</span>
                  <span className="text-xs text-muted-foreground font-medium">Technology</span>
                </div>
              </div>
            </motion.div>
            
          </motion.div>

        </div>
      </div>
    </section>
  )
}

