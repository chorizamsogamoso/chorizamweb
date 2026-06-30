import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import WhatsAppButton from '@/components/ui/whatsapp-button'
import './globals.css'

const montserratHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800", "900"],
});

const montserratSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="es" className={`${montserratHeading.variable} ${montserratSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton phoneNumber="573124654169" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
