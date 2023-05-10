import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import lektire from '@/components/lektire';

export async function generateMetadata({ params }) {
  return {
    title: `„${lektire[params.lektira].naslov}”, ${lektire[params.lektira].pisac}`,
    description: 'Analiza lektire, Aleksandar Slavov'
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
