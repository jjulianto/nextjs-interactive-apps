import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface ReasonCard {
  title: string
  description: string
  icon: string
}

export default function ReasonsToCollaborate() {
  const reasons: ReasonCard[] = [
    {
      title: 'Ethical',
      description:
        "We maintain the confidentiality of our clients' data. We uphold our integrity by practicing zero-tolerance policy for bribery.",
      icon: '/about/icons/learning.svg'
    },
    {
      title: 'Reliable',
      description:
        'We strive to provide solutions that are supported by data and technology.',
      icon: '/about/icons/skills.svg'
    },
    {
      title: 'Agile',
      description:
        'We listen to our clients deliberately and deliver bespoke solutions to achieve excellent outcome.',
      icon: '/about/icons/compassion.svg'
    }
  ]

  return (
    <section className='bg-[#F5F5F5] py-12 md:py-16 lg:pt-20 lg:pb-[100px] px-6 md:px-16 xl:px-[120px]'>
      <h2 className='text-3xl md:text-[42px] md:leading-14 font-light mb-10 md:mb-16 lg:mb-20'>
        Reasons to Collaborate
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8'>
        {reasons.map((reason, index) => (
          <Card
            key={index}
            className='border-t border-[#E0E0E0] border-x-0 border-b-0 pt-5 rounded-none shadow-none bg-transparent'
          >
            <Image
              src={reason.icon}
              alt={reason.title}
              width={64}
              height={64}
              className='w-12 h-12 md:w-16 md:h-16 object-cover mb-5'
            />
            <h3 className='text-3xl md:text-4xl font-light mb-2'>
              {reason.title}
            </h3>
            <p className='text-[#504B49] text-sm md:text-base font-trebuchet'>
              {reason.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}
