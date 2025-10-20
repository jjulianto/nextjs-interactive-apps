'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Program', href: '#program' },
    { label: 'Odyssey', href: '#odyssey' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact' },
    { label: 'Career', href: '#career' }
  ]

  const isActive = (href: string) => {
    if (href.startsWith('#')) return false
    return pathname === href
  }

  const isAboutPage = pathname.startsWith('/about')

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBgClass = clsx(
    'fixed top-0 left-0 right-0 z-50 transition-colors duration-200',
    {
      'bg-black/60 backdrop-blur-md shadow-sm': isScrolled,
      'bg-transparent': !isScrolled
    }
  )

  const darkText = isAboutPage && !isScrolled

  return (
    <nav className={navBgClass}>
      <div className='mx-auto px-6 md:px-16 xl:px-[120px]'>
        <div className='flex items-center justify-between h-20'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/daya-dimensi-logo.svg'
              alt='Daya Dimensi Indonesia'
              width={160}
              height={50}
              className='h-[50px] w-auto object-cover'
            />
          </Link>
          <div className='hidden lg:flex items-center'>
            {menuItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className='px-5 py-7 group'
                >
                  <div className='flex flex-col items-center gap-1'>
                    <span
                      className={clsx(
                        'text-lg tracking-[0.2px] leading-6 transition-all',
                        {
                          'text-black font-bold': darkText && active,
                          'text-black/80 font-normal group-hover:text-black':
                            darkText && !active,
                          'text-white font-bold': !darkText && active,
                          'text-white/80 font-normal group-hover:text-white':
                            !darkText && !active
                        }
                      )}
                    >
                      {item.label}
                    </span>
                    <span
                      className={clsx(
                        'w-1.5 h-1.5 bg-[#B92322] rounded-full transition-opacity',
                        {
                          'opacity-100': active,
                          'opacity-0': !active
                        }
                      )}
                    />
                  </div>
                </Link>
              )
            })}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='lg:hidden p-2 text-white'
            aria-label='Toggle menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className='lg:hidden'>
            <div className='fixed inset-x-0 top-20 z-40 pb-6 bg-black/80 backdrop-blur-md'>
              <div className='px-6 md:px-16 xl:px-[120px]'>
                <div className='flex flex-col space-y-4 py-6'>
                  {menuItems.map((item) => {
                    const active = isActive(item.href)
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={clsx(
                          'transition-colors text-sm font-medium',
                          {
                            'text-white font-bold': active,
                            'text-white/80 hover:text-white': !active
                          }
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
