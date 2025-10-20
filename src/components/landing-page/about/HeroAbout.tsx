import Image from 'next/image'
import Link from 'next/link'

export default function HeroAbout() {
  return (
    <section className='relative w-full min-h-[500px] md:min-h-[700px]'>
      <div className='absolute inset-y-0 right-0 w-full lg:w-3/5'>
        <Image
          src='/about/jumbotron.png'
          alt='Team collaboration - Force of Progress'
          fill
          className='object-cover'
          priority
          sizes='(max-width: 1024px) 100vw, 60vw'
        />
      </div>
      <div className='absolute inset-y-0 left-0 w-full lg:w-2/5 bg-[#2F2A2A] text-white'>
        <div className='absolute inset-0'>
          <svg
            width='379'
            height='558'
            viewBox='0 0 379 558'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute bottom-0 left-0 w-full h-auto max-h-[50%] md:max-h-3/4'
            preserveAspectRatio='xMinYMin meet'
          >
            <g opacity='0.2'>
              <path
                d='M219.493 149.864L190.008 19.0059L333.825 84.0277L219.493 149.864Z'
                stroke='white'
              />
              <path
                d='M333.826 84.0283L219.495 149.864L318.128 238.314L333.826 84.0283Z'
                stroke='white'
              />
              <path
                d='M318.127 238.313L219.494 149.864L165.182 269.869L318.127 238.313Z'
                stroke='white'
              />
              <path
                d='M165.181 269.87L219.493 149.865L87.1917 135.054L165.181 269.87Z'
                stroke='white'
              />
              <path
                d='M190.008 19.0055L219.493 149.863L87.1919 135.053L190.008 19.0055Z'
                stroke='white'
              />
            </g>
            <g opacity='0.2'>
              <path
                d='M12.9696 325.994L63.0139 201.54L144.465 336.733L12.9696 325.994Z'
                stroke='white'
              />
              <path
                d='M144.465 336.733L12.9706 325.995L43.9262 454.811L144.465 336.733Z'
                stroke='white'
              />
              <path
                d='M43.9259 454.811L12.9702 325.995L-99.8842 393.929L43.9259 454.811Z'
                stroke='white'
              />
              <path
                d='M-99.8851 393.928L12.9693 325.994L-87.5172 238.671L-99.8851 393.928Z'
                stroke='white'
              />
              <path
                d='M63.014 201.539L12.9698 325.993L-87.5168 238.669L63.014 201.539Z'
                stroke='white'
              />
            </g>
          </svg>
        </div>
        <div className='relative z-10 mx-auto pl-6 md:pl-16 xl:pl-[120px] pr-6 md:pr-8 flex flex-col pt-20 md:pt-30'>
          <div className='text-white'>
            <nav className='mb-20 md:mb-[210px] text-sm md:text-lg'>
              <ol className='flex items-center space-x-2 text-white/80'>
                <li>
                  <Link href='/' className='hover:text-white transition-colors'>
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className='text-white font-bold'>About</li>
              </ol>
            </nav>
            <h1 className='text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-2 md:leading-14'>
              Force of Progress
            </h1>
            <p className='text-sm md:text-base font-trebuchet text-white/80 mb-12 md:mb-20'>
              Daya Dimensi Indonesia is a leadership consultant that supports
              organisations develop and deliver strategic programmes such as
              assessment centre, selection, learning, and personal &
              organisational transformation.
            </p>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 3L12 21' stroke='white' />
              <path d='M15 17L12 21L9 17' stroke='white' />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
