import React from 'react'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'

const GeneralSansFont = localFont({ src: '../fonts/GeneralSans-Variable.ttf' })

export const metadata: Metadata = {
  title: 'Vitalii Hromyk | Resume',
  description:
    'Detailed resume of Vitalii Hromyk, a skilled frontend developer with experience in modern web technologies and a passion for creating intuitive user interfaces.',
  openGraph: {
    title: 'Vitalii Hromyk | Resume',
    description:
      'Detailed resume of Vitalii Hromyk, a skilled frontend developer with experience in modern web technologies and a passion for creating intuitive user interfaces.',
    type: 'website',
    url: 'www.vitalii-hromyk.com',
    images: '/openGraph.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeneralSansFont.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
