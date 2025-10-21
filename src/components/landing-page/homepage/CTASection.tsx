import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className='relative py-16 md:py-24 lg:py-[172px] text-white overflow-hidden bg-[url(/homepage/part-of-daya-dimensi.png)] bg-cover bg-center'>
      <div className='relative mx-auto px-6 md:px-16 xl:px-[120px]'>
        <h2 className='text-3xl md:text-[42px] font-light leading-tight md:leading-14 mb-2'>
          Be a Part of
          <br />
          Daya Dimensi Indonesia
        </h2>
        <p className='text-sm md:text-base font-trebuchet text-white/80 mb-6 md:mb-8 lg:mb-10 max-w-full lg:max-w-[481px]'>
          Are you the resilient leaders we are searching for? Join Daya Dimensi
          Indonesia to advance your leadership skill and generate exceptional
          leaders across Indonesia at once.
        </p>
        <Button
          asChild
          variant='link'
          className='inline-flex items-center gap-2 text-sm md:text-base font-bold uppercase hover:opacity-80 text-white p-0 h-auto has-[>svg]:px-0'
        >
          <a href='#'>
            Learn More
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M2.5 10H17.5' stroke='white' strokeWidth='2' />
              <path
                d='M14.1667 7.5L17.5 10L14.1667 12.5'
                stroke='white'
                strokeWidth='2'
              />
            </svg>
          </a>
        </Button>
      </div>
    </section>
  )
}
