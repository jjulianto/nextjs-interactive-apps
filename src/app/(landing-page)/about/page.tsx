import { Metadata } from 'next'

import HeroAbout from '@/components/landing-page/about/HeroAbout'
import NumbersSection from '@/components/landing-page/about/NumbersSection'
import ReasonsToCollaborate from '@/components/landing-page/about/ReasonsToCollaborate'
import OurClients from '@/components/landing-page/about/OurClients'
import OrganizationalStructure from '@/components/landing-page/about/OrganizationalStructure'

export const metadata: Metadata = {
  title: 'About - Daya Dimensi Indonesia',
  description:
    'Daya Dimensi Indonesia intends to generate leaders whose mission is to advance humanity through fresh ideas, forefront skills, and compassion for future generations. We call them Leaders of a New Planet.'
}

export default function AboutPage() {
  return (
    <>
      <HeroAbout />
      <NumbersSection />
      <ReasonsToCollaborate />
      <OurClients />
      <OrganizationalStructure />
    </>
  )
}
