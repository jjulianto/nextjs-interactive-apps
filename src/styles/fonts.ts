import localFont from 'next/font/local'

export const tstarPro = localFont({
  src: [
    {
      path: '../assets/fonts/T-StarPro-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/fonts/T-StarPro-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/T-StarPro-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap'
})

export const trebuchet = localFont({
  src: '../assets/fonts/trebuc.ttf',
  variable: '--font-trebuchet-ms',
  display: 'swap'
})
