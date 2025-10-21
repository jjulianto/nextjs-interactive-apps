import Image from 'next/image'
import clsx from 'clsx'

interface TeamCard {
  title: string
  subtitle: string
  linkText?: string
}

export default function OrganizationalStructure() {
  const teamCards: TeamCard[] = [
    {
      title: 'Family',
      subtitle: 'Introducing the DayaLima Family',
      linkText: 'LEARN MORE'
    },
    {
      title: 'Board of Management',
      subtitle: ''
    },
    {
      title: 'Partners',
      subtitle: ''
    }
  ]

  return (
    <section className='relative w-full py-12 md:py-16 lg:py-[68px] min-h-[500px] md:min-h-[600px] flex flex-col justify-end'>
      <Image
        src='/about/organizational-structure.png'
        alt='Organizational Structure'
        fill
        className='object-cover'
        sizes='100vw'
      />
      <div className='relative z-10 px-6 md:px-16 xl:px-[120px]'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8'>
          {teamCards.map((card, index) => (
            <div
              key={index}
              className={clsx('flex flex-col self-end pb-5', {
                'border-white border-b-[2px]': index === 0,
                'border-white/40 border-b': index !== 0
              })}
            >
              <h3
                className={clsx(
                  'text-3xl md:text-4xl lg:text-[42px] lg:leading-14 mb-2',
                  {
                    'text-white font-normal': index === 0,
                    'text-white/80 font-light': index !== 0
                  }
                )}
              >
                {card.title}
              </h3>
              {card.subtitle && (
                <p className='text-sm md:text-base font-trebuchet text-white/80 mb-4 md:mb-6'>
                  {card.subtitle}
                </p>
              )}
              {card.linkText && (
                <div>
                  <a
                    href='#'
                    className='inline-flex items-center gap-2 text-white text-sm md:text-base font-bold hover:opacity-70 transition-opacity group'
                  >
                    {card.linkText}
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2.5 10H17.5' stroke='currentColor' />
                      <path
                        d='M14.1666 7.5L17.5 10L14.1666 12.5'
                        stroke='currentColor'
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
