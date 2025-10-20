import Image from 'next/image'

interface ClientLogo {
  name: string
  logo: string
}

export default function OurClients() {
  const clients: ClientLogo[] = [
    {
      name: 'ASTRA International',
      logo: '/about/clients/astrainternational.png'
    },
    { name: 'Blibli', logo: '/about/clients/blibli.png' },
    { name: 'BRI', logo: '/about/clients/bri.png' },
    { name: 'IFG', logo: '/about/clients/ifg.png' },
    { name: 'Kalbe Farma', logo: '/about/clients/kalbefarma.png' },
    { name: 'Kemendikbud', logo: '/about/clients/kemdikbud.png' },
    { name: 'Mandiri', logo: '/about/clients/mandiri.png' },
    { name: 'Mind ID', logo: '/about/clients/mindid.png' },
    { name: 'Pertamina', logo: '/about/clients/pertamina.png' },
    { name: 'PLN', logo: '/about/clients/pln.png' }
  ]

  return (
    <section className='bg-[#2F2A2A] py-12 md:py-16 lg:py-20 px-6 md:px-16 xl:px-[120px]'>
      <h2 className='text-3xl md:text-[42px] md:leading-14 text-white mb-8 md:mb-12 lg:mb-16'>
        Our Clients
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 md:gap-y-10 md:gap-x-8 lg:gap-12 items-center justify-items-center'>
        {clients.map((client, index) => (
          <div key={index} className='w-full max-w-[150px] md:max-w-[173px]'>
            <Image
              src={client.logo}
              alt={client.name}
              width={173}
              height={173}
              className='object-contain w-full h-auto'
            />
          </div>
        ))}
      </div>
    </section>
  )
}
