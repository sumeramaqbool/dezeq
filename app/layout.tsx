import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dezeq - Building Intelligent Software for the Future',
  description: 'Dezeq is a next-generation software agency specializing in SaaS, AI, Healthcare software, Education & School Management systems, FinTech, ERP/CRM, and modern web apps.',
  keywords: 'AI, Software Development, SaaS, FinTech, Healthcare Software, ERP, CRM, Web3, Machine Learning',
  authors: [{ name: 'Dezeq' }],
  openGraph: {
    title: 'Dezeq - Building Intelligent Software for the Future',
    description: 'Next-generation software agency specializing in SaaS, AI, and enterprise solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dezeq - Building Intelligent Software for the Future',
    description: 'Next-generation software agency specializing in SaaS, AI, and enterprise solutions.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#06080f',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`smooth-scroll ${poppins.variable} ${montserrat.variable}`}>
      <body className={poppins.className}>
        <div className="grain"></div>
        {children}
      </body>
    </html>
  )
}
