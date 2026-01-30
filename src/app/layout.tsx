import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wisdom Femi Kayode - Product Developer & Community Builder',
  description: 'Personal portfolio of Wisdom Femi Kayode, a Product Developer and Community Builder passionate about creating impactful digital solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-neutral-950 text-neutral-100`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
