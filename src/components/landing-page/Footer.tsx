import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <>
      <footer className='relative bg-[#2F2A2A] text-white pt-[50px]'>
        <a href='#'>
          <Button
            className='absolute -top-8 right-6 md:right-16 lg:right-[120px] bg-[#B92322] hover:bg-[#a01b1a] text-white rounded-full w-14 h-14 p-0 backdrop-blur-sm z-10 cursor-pointer'
            aria-label='Scroll to top'
          >
            <svg
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M14 24.5L14 3.5' stroke='white' strokeWidth='2' />
              <path
                d='M10.5 8.16663L14 3.49996L17.5 8.16663'
                stroke='white'
                strokeWidth='2'
              />
            </svg>
          </Button>
        </a>
        <div className='mx-auto px-6 md:px-16 xl:px-[120px]'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14'>
            <div className='flex items-start gap-6'>
              <Image
                src='/homepage/certification.png'
                alt='Certificate'
                width={35}
                height={60}
                className='object-cover'
              />
              <Image
                src='/homepage/unwomen.png'
                alt='UN Women'
                width={152}
                height={50}
                className='object-cover'
              />
              <Image
                src='/homepage/iso-updated.png'
                alt='ISO Updated'
                width={206}
                height={50}
                className='object-cover'
              />
            </div>
            <div className='flex justify-center gap-5'>
              <a
                href='#'
                className='hover:text-[#B92322] transition'
                aria-label='Facebook'
              >
                <Image
                  src='/icons/facebook.svg'
                  alt='Facebook'
                  width={32}
                  height={32}
                  className='w-auto h-auto object-cover'
                />
              </a>
              <a
                href='#'
                className='hover:text-[#B92322] transition'
                aria-label='Instagram'
              >
                <Image
                  src='/icons/instagram.svg'
                  alt='Instagram'
                  width={32}
                  height={32}
                  className='w-auto h-auto object-cover'
                />
              </a>
              <a
                href='#'
                className='hover:text-[#B92322] transition'
                aria-label='LinkedIn'
              >
                <Image
                  src='/icons/linkedin.svg'
                  alt='Linkedin'
                  width={32}
                  height={32}
                  className='w-auto h-auto object-cover'
                />
              </a>
              <a
                href='#'
                className='hover:text-[#B92322] transition'
                aria-label='YouTube'
              >
                <Image
                  src='/icons/youtube.svg'
                  alt='Youtube'
                  width={32}
                  height={32}
                  className='w-auto h-auto object-cover'
                />
              </a>
              <a
                href='#'
                className='hover:text-[#B92322] transition'
                aria-label='Twitter'
              >
                <Image
                  src='/icons/twitter.svg'
                  alt='Twitter'
                  width={32}
                  height={32}
                  className='w-auto h-auto object-cover'
                />
              </a>
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='text-2xl font-light mb-3'>
                Subscribe. Join the Community.
              </h3>
              <form className='flex'>
                <input
                  type='email'
                  placeholder='Email address'
                  className='flex-1 px-4 py-3 bg-white text-black/40 text-sm font-trebuchet'
                  required
                />
                <Button
                  type='submit'
                  className='w-12 h-12 p-0 rounded-none bg-[#B92322] hover:bg-[#a01b1a] shrink-0 cursor-pointer'
                >
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M3 12H21' stroke='white' strokeWidth='2' />
                    <path
                      d='M17 9L21 12L17 15'
                      stroke='white'
                      strokeWidth='2'
                    />
                  </svg>
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className='border-t border-white'></div>
        <div className='mx-auto px-6 md:px-16 xl:px-[120px]'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm py-6'>
            <p className='font-trebuchet'>
              Copyright © 2022 Daya Dimensi Indonesia. Website crafted by
              Antikode.
            </p>
            <div className='flex gap-2 font-bold'>
              <a href='#'>Privacy Policy</a>
              <span>|</span>
              <a href='#'>Terms & Conditions</a>
            </div>
          </div>
        </div>
        <a
          href='#'
          className='absolute bottom-9 right-6 md:bottom-18 md:right-[60px] z-50'
          aria-label='WhatsApp'
        >
          <Image
            src='/icons/wa-logo.svg'
            alt='WhatsApp'
            width={72}
            height={72}
            className='w-auto h-auto object-cover'
          />
        </a>
      </footer>
    </>
  )
}
