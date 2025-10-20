import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function PartnershipSection() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-[#F5F5F5] to-white'>
      <div className='relative'>
        <div className='hidden lg:block absolute top-0 left-1/4 bottom-0 max-w-none w-[200vw] bg-[url(/homepage/partnership-bg.png)] bg-[length:40%_auto] bg-no-repeat'></div>
        <div className='lg:hidden absolute inset-0 bg-[#B92322]'></div>
        <div className='relative mx-auto px-6 md:px-16 xl:px-[120px] py-12 md:py-16 lg:py-4 xl:py-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start'>
            <div className='relative z-10 flex justify-center lg:justify-start'>
              <div className='relative w-full max-w-md lg:max-w-none'>
                <Image
                  src='/homepage/kemendikbud-ristek.png'
                  alt='Kemendikbud Ristek'
                  width={584}
                  height={438}
                  className='w-full h-auto rounded-lg lg:rounded-none shadow-lg lg:shadow-none'
                />
              </div>
            </div>
            <div className='relative z-10 flex justify-start lg:justify-center'>
              <div className='text-white w-full'>
                <div className='mb-4 md:mb-5'>
                  <Image
                    src='/homepage/icons/kemenbudristek.svg'
                    alt='Logo Kemendikbud Ristek'
                    width={98}
                    height={72}
                    className='w-16 md:w-20 lg:w-auto h-auto object-cover'
                  />
                </div>
                <blockquote className='text-lg md:text-xl xl:text-[28px] leading-relaxed lg:leading-10 mb-4 md:mb-6'>
                  "Kolaborasi dalam Program Guru Penggerak sangat meaningful dan
                  impactful untuk perkembangan pendidikan di Indonesia, sehingga
                  perlu untuk dilakukan secara berkelanjutan."
                </blockquote>
                <p className='text-sm md:text-base xl:text-lg mb-6 md:mb-0'>
                  Kementerian Pendidikan, Budaya, Riset, dan Teknologi
                </p>
                <div className='flex items-center gap-4 lg:gap-6 pt-6 md:pt-8 lg:pt-10'>
                  <div className='flex-1 w-full h-[2px] bg-white/30 rounded-full overflow-hidden'>
                    <div className='h-full w-1/3 bg-white rounded-full transition-all duration-300'></div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Button
                      variant='outline'
                      className='w-10 h-10 lg:w-12 lg:h-12 rounded-full border-[1.5px] border-white bg-transparent hover:bg-white/10 p-0 cursor-pointer'
                      aria-label='Previous testimonial'
                    >
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15 18L9 12L15 6'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </Button>
                    <Button
                      variant='outline'
                      className='w-10 h-10 lg:w-12 lg:h-12 rounded-full border-[1.5px] border-white bg-transparent hover:bg-white/10 p-0 cursor-pointer'
                      aria-label='Next testimonial'
                    >
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9 18L15 12L9 6'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
