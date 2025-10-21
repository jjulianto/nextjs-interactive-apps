import Image from 'next/image'
import { Card } from '@/components/ui/card'
import clsx from 'clsx'
import { CSSProperties } from 'react'

const expertiseData = [
  {
    title: 'Applied Science & Imagination Centre',
    icon: '/homepage/icons/learning.svg',
    hasMask: true
  },
  {
    title: 'Diagnostics and Assessments',
    icon: '/homepage/icons/diagnostic.svg',
    hasImage: true,
    backgroundImage: '/homepage/expertise-diagnostics.png'
  },
  {
    title: 'Human Resources & Organizational Transformation',
    icon: '/homepage/icons/transformation.svg',
    hasMask: true
  },
  {
    title: 'Klobility',
    icon: '/homepage/icons/klobility.svg',
    hasMask: true
  },
  {
    title: 'Leadership Development',
    icon: '/homepage/icons/executive.svg',
    hasMask: true
  },
  {
    title: 'On-Demand Online Learning',
    icon: '/homepage/icons/learning.svg',
    hasMask: true
  }
]

export function ExpertiseSection() {
  return (
    <section className='py-12 md:py-16 lg:py-20 bg-[#F5F5F5]'>
      <div className='mx-auto px-6 md:px-16 xl:px-[120px]'>
        <h2 className='text-3xl md:text-4xl lg:text-[42px] leading-tight mb-2 font-light'>
          Expertise
        </h2>
        <p className='text-sm md:text-base font-trebuchet text-gray-600 mb-10 md:mb-14 max-w-2xl'>
          "Organisations who will succeed in the long-run are those who are open
          to new ideas, embrace innovations, instill compassion in every act and
          decision, and consistent in advancing humanity through
          sustainability." - Excerpts from 'Leaders of a New Planet' book.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {expertiseData.map((item, index) => (
            <a key={index} href='#'>
              <Card
                className={clsx(
                  'relative text-white p-6 md:p-8 flex flex-col justify-between group overflow-hidden h-full min-h-[320px] md:min-h-[379px] border-0 rounded-none shadow-none',
                  {
                    'bg-(image:--image-url) bg-cover bg-center': item.hasImage,
                    'bg-[#8B0B04]': !item.hasImage
                  }
                )}
                style={
                  item.hasImage
                    ? ({
                        '--image-url': `url(${item.backgroundImage})`
                      } as CSSProperties)
                    : {}
                }
              >
                {item.hasMask && (
                  <div className='absolute inset-0 bg-cover bg-right pointer-events-none bg-[url(/homepage/expertise-mask.png)]'></div>
                )}
                <div className='relative z-10'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className='object-cover mb-4 md:mb-5'
                  />
                  <h3 className='text-2xl md:text-3xl lg:text-4xl font-light leading-tight md:leading-[46px]'>
                    {item.title}
                  </h3>
                </div>
                <div className='flex justify-end relative z-10'>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='md:w-10 md:h-10'
                  >
                    <path d='M5 20H35' stroke='white' strokeWidth='2' />
                    <path
                      d='M28.3333 15L35 20L28.3333 25'
                      stroke='white'
                      strokeWidth='2'
                    />
                  </svg>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
