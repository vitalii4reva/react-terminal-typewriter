import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'react-terminal-typewriter | Demo',
  description: 'A lightweight React hook for terminal-style typewriter effects with cursor animation, loop support, and full TypeScript support.',
  keywords: ['react', 'typewriter', 'hook', 'terminal', 'animation', 'typescript'],
  authors: [{ name: 'Vitalii Petrenko', url: 'https://github.com/vitalii4reva' }],
  openGraph: {
    title: 'react-terminal-typewriter',
    description: 'A lightweight React hook for terminal-style typewriter effects',
    type: 'website',
    url: 'https://vitalii4reva.github.io/react-terminal-typewriter/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'react-terminal-typewriter',
    description: 'A lightweight React hook for terminal-style typewriter effects',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
