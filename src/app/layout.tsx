import './globals.css'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

import { cookieToInitialState } from 'wagmi'

import { config } from '@/config'
import AppKitProvider from '@/context'

const inter = Inter({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CrediFlow',
  description: 'Building Trust, Driving Trade, Simplifying Finance',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body className={`${inter.className} bg-lime-200`}>
        <AppKitProvider initialState={initialState}>{children}</AppKitProvider>
        <Toaster />
      </body>
    </html>
  )
}
