'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'

const faqs = [
  {
    question: 'How often should I visit the dentist?',
    answer: 'We recommend visiting the dentist every 6 months for a routine checkup and cleaning to maintain optimal oral health.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans to ensure that you can receive the care you need without financial stress.'
  },
  {
    question: 'Is teeth whitening safe?',
    answer: 'Professional teeth whitening is very safe. We use high-quality products that protect your enamel while brightening your smile.'
  },
  {
    question: 'What should I do in a dental emergency?',
    answer: 'Please call our clinic immediately. We keep time available in our daily schedule to handle emergency cases as quickly as possible.'
  },
  {
    question: 'Do you accept my insurance?',
    answer: 'We accept most major insurance plans. Please contact our front desk, and they will be happy to verify your coverage.'
  }
]

export function FAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Questions?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">We&apos;ve Got Answers</h3>
            <p className="text-muted-foreground mb-8">
              Here are answers to some of the most common questions our patients ask before their visit.
            </p>
            
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div 
            className="relative w-full aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 hidden md:block"
          >
            <Image 
              src="/images/clinicreceptionarea.webp"
              alt="Clinic Reception Area"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>

        </div>

      </div>
    </section>
  )
}
