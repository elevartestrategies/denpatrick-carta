import type { Metadata, Viewport } from 'next'
import { Cinzel, DM_Sans } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Den Patrick — Carta',
  description: 'Crêperie Bretonne & Gelateria Artesana · Sant Esteve de Palautordera',
  robots: 'noindex',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#F5EDD6',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca" className={`${cinzel.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-pergami">{children}</body>
    </html>
  )
}
