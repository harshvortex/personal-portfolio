import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/ThemeProvider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Harshwardhan - Full-Stack Developer | Modern Portfolio",
  description:
    "Professional portfolio of Harshwardhan - Full-Stack Developer specializing in React, Next.js, Python, and modern web technologies. Building scalable, high-performance applications.",
  keywords: "Full-Stack Developer, React, Next.js, TypeScript, Python, Web Development, Software Engineer, Portfolio",
  authors: [{ name: "Harshwardhan" }],
  openGraph: {
    title: "Harshwardhan - Full-Stack Developer",
    description: "Building modern, scalable web applications with cutting-edge technologies",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
