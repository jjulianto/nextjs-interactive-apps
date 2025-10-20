import { Hero } from '@/components/landing-page/homepage/Hero'
import { ExpertiseSection } from '@/components/landing-page/homepage/ExpertiseSection'
import { PartnershipSection } from '@/components/landing-page/homepage/PartnershipSection'
import { UpcomingActivitiesSection } from '@/components/landing-page/homepage/UpcomingActivitiesSection'
import { CTASection } from '@/components/landing-page/homepage/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExpertiseSection />
      <PartnershipSection />
      <UpcomingActivitiesSection />
      <CTASection />
    </>
  )
}
