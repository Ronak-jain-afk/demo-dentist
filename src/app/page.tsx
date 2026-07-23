import { Navigation } from '@/components/sections/Navigation'
import { Hero } from '@/components/sections/Hero'
import { TrustIndicators } from '@/components/sections/TrustIndicators'
import { ClinicOverview } from '@/components/sections/ClinicOverview'
import { FeaturedServices } from '@/components/sections/FeaturedServices'
import { MeetOurDoctors } from '@/components/sections/MeetOurDoctors'
import { SmileTransformations } from '@/components/sections/SmileTransformations'
import { PatientJourney } from '@/components/sections/PatientJourney'
import { ClinicTour } from '@/components/sections/ClinicTour'
import { FAQ } from '@/components/sections/FAQ'
import { Appointment } from '@/components/sections/Appointment'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustIndicators />
      <ClinicOverview />
      <FeaturedServices />
      <SmileTransformations />
      <PatientJourney />
      <MeetOurDoctors />
      <ClinicTour />
      <FAQ />
      <Appointment />
      <Footer />
    </main>
  )
}


