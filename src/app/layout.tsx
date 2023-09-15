import '@/styles/globals.css'
import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/components/Layout/Layout'
import localFont from 'next/font/local'

const GeneralSansFont = localFont({ src: '../fonts/GeneralSans-Variable.ttf' })

export const metadata: Metadata = {
  title: 'Vitalii Hromyk | Resume',
  description:
    'Detailed resume of Vitalii Hromyk, a skilled frontend developer with experience in modern web technologies and a passion for creating intuitive user interfaces.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeneralSansFont.className}`}>
        <main className="h-screen">
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  )
}
