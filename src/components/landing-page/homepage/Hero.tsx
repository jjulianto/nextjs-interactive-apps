'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  const stats = [
    { title: '24+ Years', description: 'Experience' },
    { title: '50.000+', description: 'Executive Clients' },
    { title: '400+', description: 'Organization Clients' }
  ]

  return (
    <>
      <section className='relative pt-20'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/homepage/jumbotron.png'
            alt='Hero Background'
            fill
            className='object-cover'
            priority
            quality={100}
          />
        </div>
        <div className='relative z-10 mx-auto px-6 md:px-16 xl:px-[120px] h-full flex items-center py-20'>
          <div className='max-w-xl'>
            <h1 className='text-[52px] leading-16 font-light tracking-normal text-white'>
              Adopt Globally,
              <br />
              Adapt Locally
            </h1>
            <p className='text-base tracking-normal font-trebuchet text-white/80 mt-2 mb-10'>
              Daya Dimensi Indonesia is a world-class strategic partner for
              individual and organisational transformation through
              humanity-based and technology-supported solutions to help you
              hire, promote, and develop exceptional leaders.
            </p>
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6'>
              <Link
                href='#about'
                className='uppercase text-base font-bold text-white flex items-center gap-2'
              >
                <span>Learn More About Us</span>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2.5 10H17.5' stroke='white' />
                  <path d='M14.1667 7.5L17.5 10L14.1667 12.5' stroke='white' />
                </svg>
              </Link>
              <Link
                href='#contact'
                className='uppercase text-base font-bold text-white flex items-center gap-2'
              >
                <span>Contact Us</span>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2.5 10H17.5' stroke='white' />
                  <path d='M14.1667 7.5L17.5 10L14.1667 12.5' stroke='white' />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className='relative flex flex-col lg:flex-row w-full items-stretch'>
          <div className='flex items-center bg-white py-6 md:py-10 px-4 md:pl-10 md:pr-6 w-full'>
            <div className='hidden md:flex flex-col gap-2 items-center justify-center min-w-fit'>
              <span className='text-xs font-bold uppercase text-black/40 rotate-360 orientation-mixed vertical-writing-rl'>
                Discover
              </span>
              <svg
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 1.5L6 10.5'
                  stroke='black'
                  strokeOpacity='0.4'
                  strokeWidth='0.5'
                />
                <path
                  d='M7.5 8.5L6 10.5L4.5 8.5'
                  stroke='black'
                  strokeOpacity='0.4'
                  strokeWidth='0.5'
                />
              </svg>
            </div>
            <div className='flex flex-col md:flex-row items-center flex-1 gap-6 md:gap-4 md:pl-16 w-full'>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className='w-full md:w-1/3 text-center md:text-left'
                >
                  <div className='text-3xl md:text-4xl leading-tight md:leading-12 text-[#B92322] font-light'>
                    {stat.title}
                  </div>
                  <p className='text-sm md:text-base font-trebuchet text-black/40'>
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex items-center justify-center md:justify-end px-4 md:px-6 lg:pl-8 xl:pr-[120px] gap-4 md:gap-6 lg:gap-8 w-full md:w-2/3 py-4 lg:py-0'>
            <div className='relative w-[140px] md:w-[170px] lg:w-[195px] h-12 md:h-14 lg:h-16'>
              <Image
                src='/homepage/unwomen.png'
                alt='UN Women'
                fill
                className='object-contain'
              />
            </div>
            <div className='relative w-[180px] md:w-[220px] lg:w-[260px] h-12 md:h-14 lg:h-16'>
              <Image
                src='/homepage/iso-updated.png'
                alt='ISO'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
