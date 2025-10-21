import Image from 'next/image'
import Link from 'next/link'

const activities = [
  {
    tag: 'PUBLIC WORKSHOP',
    date: '25 Feb 2022',
    title: 'Zoompathy vs Zoom-fatigue: Managing Virtual Meeting Burnout'
  },
  {
    tag: 'BUKA PINTU',
    date: '20 Oct 2021',
    title: 'Our New Solution To Hire The Right Person For Your Company'
  },
  {
    tag: 'LIVE WEBINAR',
    date: '20 Oct 2021',
    title: "DDI : Among Indonesia's First Signatories of UN WEP"
  },
  {
    tag: 'BUKA PINTU',
    date: '20 Oct 2021',
    title: 'Our New Solution To Hire The Right Person For Your Company'
  }
]

export function UpcomingActivitiesSection() {
  return (
    <section className='py-12 md:py-16 lg:py-[100px] bg-white'>
      <div className='mx-auto px-6 md:px-16 xl:px-[120px]'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 md:mb-10'>
          <h2 className='text-3xl md:text-4xl lg:text-[42px] leading-tight font-light'>
            Upcoming Activities
          </h2>
          <a
            href='#'
            className='text-[#B92322] text-sm md:text-base font-bold hover:underline flex items-center gap-2 uppercase transition'
          >
            View All{' '}
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M2.5 10H17.5' stroke='#B92322' />
              <path d='M14.1667 7.5L17.5 10L14.1667 12.5' stroke='#B92322' />
            </svg>
          </a>
        </div>
        <div className='relative flex flex-col lg:flex-row items-start gap-8 lg:gap-16 w-full'>
          <div className='hidden lg:block absolute top-0 left-0 right-0 h-px bg-[#F2F2F2]'></div>
          <div className='w-full lg:w-[40%]'>
            <Image
              src='/homepage/webinar.png'
              alt='Webinar'
              width={481}
              height={481}
              className='w-full h-auto object-cover rounded-lg lg:rounded-none'
            />
          </div>
          <div className='w-full lg:w-[60%] space-y-0'>
            {activities.map((activity, index) => (
              <Link key={index} href='#'>
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 pt-4 md:pt-6 pb-6 md:pb-10 border-b border-[#F2F2F2] last:border-b-0 hover:bg-gray-50 -mx-3 px-3 rounded transition'>
                  <div className='shrink-0 font-trebuchet w-full sm:w-32'>
                    <div className='text-xs md:text-sm text-[#8B0B04] uppercase mb-1 md:mb-2 font-semibold'>
                      {activity.tag}
                    </div>
                    <div className='text-xs text-black/40'>{activity.date}</div>
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-lg md:text-xl lg:text-2xl font-medium leading-snug'>
                      {activity.title}
                    </h4>
                  </div>
                  <div className='shrink-0 self-start sm:self-center'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2.5 10H17.5' stroke='#B92322' />
                      <path
                        d='M14.1667 7.5L17.5 10L14.1667 12.5'
                        stroke='#B92322'
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
