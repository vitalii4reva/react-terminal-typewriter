import type { Metadata } from 'next'
import './globals.css'
import { StructuredData } from '@/components/StructuredData'

const siteUrl = 'https://vitalii4reva.github.io/react-terminal-typewriter'
const authorUrl = 'https://vitalii4reva.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'react-terminal-typewriter | Lightweight React Typewriter Hook',
  description: 'A lightweight React hook for terminal-style typewriter effects. Zero dependencies, TypeScript support, cursor animation, loop mode, and full customization. Perfect for hero sections, landing pages, and terminal UIs.',
  keywords: [
    'react typewriter',
    'react typewriter hook',
    'react terminal typewriter',
    'typewriter effect react',
    'react typing animation',
    'react text animation',
    'terminal animation react',
    'cursor animation react',
    'react hook typewriter',
    'typescript typewriter',
    'npm react typewriter',
    'lightweight typewriter'
  ],
  authors: [{ name: 'Vitalii Petrenko', url: authorUrl }],
  creator: 'Vitalii Petrenko',
  publisher: 'Vitalii Petrenko',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'react-terminal-typewriter | React Typewriter Hook',
    description: 'A lightweight React hook for terminal-style typewriter effects. Zero dependencies, TypeScript, cursor animation, loop mode.',
    type: 'website',
    url: siteUrl,
    siteName: 'react-terminal-typewriter',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'react-terminal-typewriter',
    description: 'Lightweight React hook for terminal-style typewriter effects',
    creator: '@vitalii4reva',
  },
  other: {
    'google-site-verification': '',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  )
}
