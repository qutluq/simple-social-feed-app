import type { Metadata } from 'next'
import './globals.css'

import { Inter } from 'next/font/google'

import { MainLayout } from '@/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Social Feed',
  description: 'App for sharing your news to the World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col gap-3 bg-[var(--color-secondary)] ${inter.className}`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
