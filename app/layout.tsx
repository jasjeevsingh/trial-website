import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TRIAL ',
  description: 'A gamified short-form video platform where videos compete for permanence. Viewers are the jury. Creators are the gladiators.',
  keywords: 'video platform, social network, gamified, content creation, viral videos',
  openGraph: {
    title: 'TRIAL',
    description: 'A gamified short-form video platform where videos compete for permanence.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
