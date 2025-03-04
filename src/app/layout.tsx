'use client'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import { usePathname } from 'next/navigation' // Import the usePathname hook
import { metadata } from '@/components/metadata'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname() // Get the current path

  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-gray-100 min-h-screen bg-[url('/background.jpg')] bg-cover bg-center">
          {/* Only render Navbar if the current path is not the home page */}
          {pathname !== '/' && <Navbar />}
          {children}
        </div>
      </body>
    </html>
  )
}
