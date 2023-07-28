import './globals.css'
import type { Metadata } from 'next'

import Footer from '@Components/footer/Footer'
import Navbar from '@Components/navbar/Navbar'


export const metadata: Metadata = {
  title: 'Car Dealer App',
  description: 'You can buy and sell cars here.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
