import type { Metadata } from 'next'
import { Navbar } from '@/components/landing-page/Navbar'
import { Footer } from '@/components/landing-page/Footer'
import { tstarPro } from '@/styles/fonts'

export const metadata: Metadata = {
  title: 'Home - Daya Dimensi Indonesia',
  description:
    'Daya Dimensi Indonesia is a leadership consultant that supports organizations to develop and deliver strategic programs such as assessment centers, selection, learning, and personal & organizational transformation.'
}

export default function LandingLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={tstarPro.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
