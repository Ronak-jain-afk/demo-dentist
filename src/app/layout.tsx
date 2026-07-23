import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'
import { Toaster } from '@/components/ui/sonner'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clarity Dental | Premium Dental Care',
  description: 'Experience modern, comfortable, and state-of-the-art dental care at Clarity Dental.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-background text-foreground antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Toaster />
      </body>
    </html>
  )
}
