"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail, Download, Code, Zap, Star } from "lucide-react"

import StaggerText from "./StaggerText"
import AnimatedSection from "./AnimatedSection"

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Full-Stack Developer", "Problem Solver", "Tech Enthusiast"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <AnimatedSection className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in">
          <div className="mb-8 relative inline-block">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse-glow"></div>
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Harshwardhan"
                width={150}
                height={150}
                className="relative rounded-full mx-auto border-4 border-card shadow-2xl md:w-[180px] md:h-[180px] hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-ping"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                <Star className="w-3 h-3 text-secondary-foreground" />
              </div>
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <h1 className="text-4xl md:text-7xl font-playfair font-bold flex flex-col items-center">
              <span className="text-foreground flex gap-2">
                Hi, I'm
              </span>
              <StaggerText
                text="Harshwardhan"
                className="glow-text justify-center"
                delay={0.5}
              />
            </h1>
          </div>

          <div className="text-xl md:text-4xl font-source-sans font-medium text-muted mb-6 h-8 md:h-12 flex items-center justify-center">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent transition-all duration-500">
              {roles[currentRole]}
            </span>
          </div>

          <p className="text-base md:text-xl text-muted mb-8 max-w-3xl mx-auto leading-relaxed font-source-sans">
            Transforming ideas into scalable digital solutions. Specializing in modern web development,
            clean architecture, and delivering exceptional user experiences that drive business results.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto">
            {[
              { number: "15+", label: "Projects Delivered", icon: <Code className="w-5 h-5" /> },
              { number: "2+", label: "Years Experience", icon: <Zap className="w-5 h-5" /> },
              { number: "20+", label: "Technologies", icon: <Star className="w-5 h-5" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="card-hover bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-border/50"
              >
                <div className="flex items-center justify-center gap-2 text-secondary mb-2">
                  {stat.icon}
                  <span className="text-xl md:text-2xl font-bold font-playfair">{stat.number}</span>
                </div>
                <div className="text-sm md:text-base text-muted font-source-sans">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
            <a
              href="#contact"
              className="btn-dynamic bg-gradient-to-r from-secondary to-accent text-secondary-foreground font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-lg shadow-xl"
            >
              Let's Work Together
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-dynamic flex items-center justify-center gap-2 sm:gap-3 border-2 border-secondary text-secondary hover:bg-secondary/10 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-lg"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-3 sm:gap-4 mb-12 flex-wrap">
            {[
              {
                href: "https://github.com/harshvortex",
                icon: Github,
                label: "GitHub",
                color: "hover:bg-gray-800 hover:text-white"
              },
              {
                href: "https://linkedin.com/in/harshvortex",
                icon: Linkedin,
                label: "LinkedIn",
                color: "hover:bg-blue-600 hover:text-white",
                highlight: true
              },
              {
                href: "mailto:harshvortex@gmail.com",
                icon: Mail,
                label: "Email",
                color: "hover:bg-red-500 hover:text-white"
              },
              {
                href: "https://leetcode.com/harshvortex",
                icon: Code,
                label: "LeetCode",
                custom: true,
                color: "hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 hover:text-white",
                highlight: true
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`card-hover bg-card/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-lg border-2 ${social.highlight ? "border-secondary/50 hover:border-secondary" : "border-border/50"
                  } group transition-all duration-300 ${social.color} ${social.highlight ? "ring-2 ring-secondary/20 hover:ring-secondary/50" : ""
                  }`}
                aria-label={social.label}
              >
                {social.custom ? (
                  <span className="text-sm sm:text-base font-bold text-muted group-hover:text-white transition-colors duration-300">
                    LC
                  </span>
                ) : (
                  <social.icon className="w-6 h-6 sm:w-7 sm:h-7 text-muted group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                )}
              </a>
            ))}
          </div>

          <div
            className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <div className="bg-secondary/20 rounded-full p-3 inline-block">
              <ChevronDown className="w-6 h-6 text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
