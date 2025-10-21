import Image from 'next/image'
import Link from 'next/link'

export default function NumbersSection() {
  return (
    <section
      id='numbers'
      className='relative bg-gradient-to-b from-[#F5F5F5] to-white py-16 md:pt-[100px] md:pb-30'
    >
      <div className='pl-6 md:pl-16 xl:pl-[223px] pr-6 md:pr-16 xl:pr-[120px]'>
        <h2 className='text-3xl md:text-[42px] md:leading-14 mb-8 md:mb-10'>
          Daya Dimensi In Numbers
        </h2>
        <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-12 mb-16 md:mb-[100px]'>
          <div>
            <div className='mb-2'>
              <span className='text-4xl md:text-7xl font-light text-[#B92322]'>
                24+ Years
              </span>
            </div>
            <p className='text-black/40 text-base md:text-xl'>Experience</p>
          </div>
          <div>
            <div className='mb-2'>
              <span className='text-4xl md:text-7xl font-light text-[#B92322]'>
                50.000+
              </span>
            </div>
            <p className='text-black/40 text-base md:text-xl'>
              Executive Clients
            </p>
          </div>
          <div>
            <div className='mb-2'>
              <span className='text-4xl md:text-7xl font-light text-[#B92322]'>
                400+
              </span>
            </div>
            <p className='text-black/40 text-base md:text-xl'>
              Organization Clients
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          <div className='flex flex-col'>
            <div className='relative w-full h-[300px] md:h-[400px] lg:h-[481px] mb-5 overflow-hidden'>
              <Image
                src='/about/leaders.png'
                alt='Leaders of a New Planet'
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
            </div>
            <h3 className='text-2xl md:text-4xl mb-2'>
              Leaders of a New Planet
            </h3>
            <p className='text-[#504B49] text-sm md:text-base font-trebuchet'>
              It is our intention to generate leaders whose mission is to
              advance humanity through fresh ideas, forefront skills, and
              compassion for future generations. We call them Leaders of a New
              Planet.
            </p>
          </div>
          <div className='flex flex-col'>
            <div className='relative w-full h-[400px] md:h-[550px] lg:h-[778px] mb-5 overflow-hidden'>
              <Image
                src='/about/innovations.png'
                alt='Continuous Innovations'
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
            </div>
            <h3 className='text-2xl md:text-4xl mb-2'>
              Continuous Innovations
            </h3>
            <p className='text-[#504B49] text-sm md:text-base font-trebuchet mb-6'>
              In working with clients, we curate and provide integrated business
              and leadership solutions. Therefore, we strive to grow our digital
              solutions to better cater your needs.
            </p>
            <Link
              href='#'
              className='text-[#B92322] font-bold text-sm md:text-base inline-flex items-center gap-2 hover:underline uppercase'
            >
              Learn More
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2.5 10H17.5' stroke='#B92322' />
                <path d='M14.1666 7.5L17.5 10L14.1666 12.5' stroke='#B92322' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
