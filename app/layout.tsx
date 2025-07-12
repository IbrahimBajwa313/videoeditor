import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Video Editor Pro - Professional Video Editing Services",
  description:
    "Professional video editing services for commercials, documentaries, social media content, and more. Bringing your stories to life through cinematic editing and visual storytelling.",
  keywords: "video editing, motion graphics, post-production, video editor, commercial editing, documentary editing",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
