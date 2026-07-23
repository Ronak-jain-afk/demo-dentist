'use client'

import { User, ShieldCheck, Laptop, Clock, MapPin } from 'lucide-react'

const indicators = [
  {
    icon: User,
    title: 'Patient First',
    description: 'Your comfort and satisfaction are our top priorities.'
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Experts',
    description: 'Skilled professionals with years of experience.'
  },
  {
    icon: Laptop,
    title: 'Modern Technology',
    description: 'State-of-the-art tech for precise treatments.'
  },
  {
    icon: Clock,
    title: 'Emergency Care',
    description: 'We are here when you need us most.'
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    description: 'Easy to find, easy to visit. Right around the corner.'
  }
]

export function TrustIndicators() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {indicators.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-3xl p-5 md:p-6 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-border/40 hover:-translate-y-1 transition-transform duration-300 min-w-[240px] md:min-w-0 snap-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-base mb-3 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
