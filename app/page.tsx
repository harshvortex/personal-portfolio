"use client"

import { Suspense, lazy, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import LoadingSpinner from "./components/LoadingSpinner"

// Lazy load components
const Header = lazy(() => import("./components/Header"))
const Hero = lazy(() => import("./components/Hero"))
const About = lazy(() => import("./components/About"))
const Skills = lazy(() => import("./components/Skills"))
const Projects = lazy(() => import("./components/Projects"))
const Contact = lazy(() => import("./components/Contact"))
const Footer = lazy(() => import("./components/Footer"))

// Lightweight 3D background (optional, loads after main content)
// const Background3D = lazy(() => import("./components/Background3D"))

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      {/* Animated grid background with parallax */}
      <motion.div
        style={{ y: y1, opacity }}
        className="fixed inset-0 grid-bg opacity-30 pointer-events-none z-0"
      />

      {/* Gradient overlays */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-0" />
      <motion.div
        style={{ y: y2 }}
        className="fixed inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 pointer-events-none z-0"
      />

      {/* 3D Background (optional - uncomment when ready) */}
      {/* {mounted && (
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
      )} */}

      {/* Main content */}
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
