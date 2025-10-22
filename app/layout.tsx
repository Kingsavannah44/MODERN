import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Software Engineer Portfolio - Full-Stack Developer',
  description: 'Modern portfolio showcasing software engineering projects, full-stack development skills, and technical expertise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}