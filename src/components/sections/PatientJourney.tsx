'use client'

import { Calendar, User, Search, FileText, Stethoscope, HeartPulse, Sparkles, ArrowRight } from 'lucide-react'

const steps = [
  { icon: Calendar, title: 'Book Appointment' },
  { icon: User, title: 'Consultation' },
  { icon: Search, title: 'Diagnosis' },
  { icon: FileText, title: 'Treatment Plan' },
  { icon: Stethoscope, title: 'Treatment' },
  { icon: HeartPulse, title: 'Recovery' },
  { icon: Sparkles, title: 'Follow-up Care' },
]

export function PatientJourney() {
  return (
    <section className="py-24 bg-muted/30 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Journey to a Healthier Smile</h3>
            <p className="text-muted-foreground">
              We ensure a smooth, transparent, and comfortable process from your very first visit to your final result.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-10 left-[5%] right-[5%] h-[2px] bg-border/60 -z-10" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center relative group w-full md:w-auto"
              >
                {/* Arrow for mobile */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden text-border/60 my-2">
                    <ArrowRight className="h-6 w-6 rotate-90" />
                  </div>
                )}
                
                <div className="w-20 h-20 rounded-full bg-background border-2 border-border/60 flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/5 transition-colors shadow-lg">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="font-bold text-lg text-muted-foreground/50 mb-1">{idx + 1}</div>
                <h4 className="font-bold text-sm text-foreground max-w-[100px] leading-tight">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
