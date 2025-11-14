import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })
const _outfit = Outfit({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'The Lighthouse - Fine Dining',
  description: 'Experience culinary excellence at The Lighthouse. Premium dining with seasonal menus and an elegant atmosphere.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_playfair.variable} ${_outfit.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
