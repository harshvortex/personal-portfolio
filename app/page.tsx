"use client"

import { Suspense, lazy } from "react"
import LoadingSpinner from "./components/LoadingSpinner"

// Lazy load components for better performance
const Header = lazy(() => import("./components/Header"))
const Hero = lazy(() => import("./components/Hero"))
const About = lazy(() => import("./components/About"))
const Skills = lazy(() => import("./components/Skills"))
const Projects = lazy(() => import("./components/Projects"))
const Contact = lazy(() => import("./components/Contact"))
const Footer = lazy(() => import("./components/Footer"))

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg opacity-50 pointer-events-none" />

      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <Header />
        </Suspense>

        <Suspense fallback={<div className="h-screen" />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<div className="h-96" />}>
          <About />
        </Suspense>

        <Suspense fallback={<div className="h-96" />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<div className="h-96" />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div className="h-96" />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<div className="h-32" />}>
          <Footer />
        </Suspense>
      </div>
    </main>
  )
}
