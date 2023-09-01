import './globals.css'
import type { Metadata } from 'next'
import localFont from '@next/font/local'

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter/Inter-Light.ttf',
      weight: '300',
    },
    {
      path: '../../public/fonts/Inter/Inter-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Inter/Inter-Semibold.ttf',
      weight: '600',
    },
  ],
  variable: '--font-inter',
})

const ubuntuMono = localFont({
  src: [
    {
      path: '../../public/fonts/Ubuntu_Mono/UbuntuMono-Regular.ttf',
      weight: '400',
    },
  ],
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  title: 'askSQL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ubuntuMono.variable}`}>
      <body className="bg-blueberry">{children}</body>
    </html>
  )
}
