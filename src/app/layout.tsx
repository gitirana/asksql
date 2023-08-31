import './globals.css'
import type { Metadata } from 'next'
import { Inter, Ubuntu_Mono as UbuntuMono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ubuntuMono = UbuntuMono({
  subsets: ['latin'],
  weight: '400',
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
