import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/ThemeProvider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Harshwardhan - Full-Stack Developer | Professional Portfolio",
  description:
    "Professional portfolio of Harshwardhan - Full-Stack Developer specializing in React, Next.js, Python, and modern web technologies. Delivering scalable solutions and exceptional user experiences.",
  keywords: "Full-Stack Developer, React Developer, Next.js Developer, Web Development, Python Developer, Software Engineer, Frontend Developer, Backend Developer, Portfolio",
  authors: [{ name: "Harshwardhan" }],
  openGraph: {
    title: "Harshwardhan - Full-Stack Developer",
    description: "Professional portfolio showcasing expertise in modern web development, full-stack solutions, and delivering high-quality software applications.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme') || 'purple';
                document.documentElement.setAttribute('data-theme', savedTheme);
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
