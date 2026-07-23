'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Award, GraduationCap } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Sarah Wilson',
    role: 'General Dentist',
    experience: '12+ Years Experience',
    education: 'DDS, University of Michigan',
    specialty: 'General & Cosmetic Dentistry',
    image: '/images/portrait1.webp'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Implant Specialist',
    experience: '15+ Years Experience',
    education: 'DDS, Columbia University',
    specialty: 'Dental Implants & Surgery',
    image: '/images/portrait2.webp'
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Orthodontist',
    experience: '10+ Years Experience',
    education: 'DDS, NYU College of Dentistry',
    specialty: 'Braces & Aligners Expert',
    image: '/images/portrait3.webp'
  },
  {
    name: 'Dr. James Lee',
    role: 'Pediatric Dentist',
    experience: '8+ Years Experience',
    education: 'DDS, Boston University',
    specialty: "Children's Dental Care",
    image: '/images/portrait4.webp'
  }
]

export function MeetOurDoctors() {
  return (
    <section id="doctors" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Meet Our Doctors</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">World-Class Specialists,<br/>Personalized Care.</h3>
            <p className="text-muted-foreground">
              Our team of experienced specialists ensures you receive the highest standard of dental care.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, index) => (
            <div
              key={doc.name}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all group overflow-hidden bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-[4/5] bg-muted overflow-hidden">
                    <Image 
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />

                  </div>
                  
                  <div className="p-6 pt-5 space-y-4">
                    <div>
                      <h4 className="font-bold text-xl text-foreground mb-1">{doc.name}</h4>
                      <p className="text-primary font-medium text-sm">{doc.role}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{doc.experience}</p>
                        <p className="text-xs text-muted-foreground">{doc.specialty}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{doc.education}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
