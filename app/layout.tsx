import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'CHORIZAM | Chorizos Artesanales al Carbón',
  description: 'Chorizos artesanales preparados al carbón con el sabor auténtico de la tradición colombiana. Acompañados de arepa, papa y queso costeño.',
  generator: 'v0.app',
  icons: {
    icon: '/assets/favicon_square.png',
    shortcut: '/assets/favicon_square.png',
    apple: '/assets/favicon_square.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${dmSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
