"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause, Star, Zap } from "lucide-react"

const techSlides = [
  {
    category: "Frontend Development",
    title: "Modern Web Interfaces",
    description: "Building responsive, interactive user interfaces with modern frameworks",
    technologies: [
      { name: "React", level: 75, logo: "/placeholder.svg?height=80&width=80", color: "from-blue-400 to-blue-600" },
      { name: "Next.js", level: 70, logo: "/placeholder.svg?height=80&width=80", color: "from-gray-700 to-black" },
      {
        name: "TypeScript",
        level: 65,
        logo: "/placeholder.svg?height=80&width=80",
        color: "from-blue-500 to-blue-700",
      },
      {
        name: "Tailwind CSS",
        level: 80,
        logo: "/placeholder.svg?height=80&width=80",
        color: "from-cyan-400 to-cyan-600",
      },
    ],
    gradient: "from-purple-600 via-pink-600 to-blue-600",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    category: "Backend Development",
    title: "Server-Side Solutions",
    description: "Creating robust backend systems and APIs for web applications",
    technologies: [
      { name: "Node.js", level: 70, logo: "/placeholder.svg?height=80&width=80", color: "from-green-500 to-green-700" },
      { name: "Python", level: 85, logo: "/placeholder.svg?height=80&width=80", color: "from-yellow-400 to-blue-500" },
      {
        name: "PostgreSQL",
        level: 60,
        logo: "/placeholder.svg?height=80&width=80",
        color: "from-blue-600 to-blue-800",
      },
      {
        name: "Express.js",
        level: 65,
        logo: "/placeholder.svg?height=80&width=80",
        color: "from-gray-600 to-gray-800",
      },
    ],
    gradient: "from-green-600 via-teal-600 to-blue-600",
    icon: <Star className="w-8 h-8" />,
  },
  {
    category: "AI & Machine Learning",
    title: "Intelligent Applications",
    description: "Exploring AI and ML to create smart, data-driven solutions",
    technologies: [
      {
        name: "TensorFlow",
        level: 55,
        logo: "/placeholder.svg?height=80&width=80",
        color: "from-orange-400 to-orange-600",
      },
      { name: "Pandas", level: 75, logo: "/placeholder.svg?height=80&width=80", color: "from-blue-600 to-purple-600" },
      {
        name: "OpenAI API",
        level: 70,
        logo: "/placeholder.svg?height=80&width=80",
        color: "from-green-400 to-blue-500",
      },
      {
        name: "Scikit-learn",
        level: 60,
        logo: "/placeholder.svg?height=80&width=80",
        color: "from-orange-500 to-red-500",
      },
    ],
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    category: "Tools & Deployment",
    title: "Development Workflow",
    description: "Using modern tools and platforms for efficient development",
    technologies: [
      { name: "Git", level: 80, logo: "/placeholder.svg?height=80&width=80", color: "from-red-500 to-red-700" },
      { name: "Docker", level: 50, logo: "/placeholder.svg?height=80&width=80", color: "from-blue-500 to-blue-700" },
      { name: "Vercel", level: 75, logo: "/placeholder.svg?height=80&width=80", color: "from-black to-gray-800" },
      { name: "VS Code", level: 90, logo: "/placeholder.svg?height=80&width=80", color: "from-blue-600 to-blue-800" },
    ],
    gradient: "from-cyan-600 via-blue-600 to-indigo-600",
    icon: <Star className="w-8 h-8" />,
  },
]

export default function TechSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [hoveredTech, setHoveredTech] = useState<number | null>(null)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % techSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % techSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + techSlides.length) % techSlides.length)
  }

  const currentTech = techSlides[currentSlide]

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-pink-800/20 to-blue-800/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Skills & Learning
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Continuously building expertise across modern technologies
            </p>
          </div>

          {/* Slideshow Container */}
          <div className="relative">
            {/* Main Slide */}
            <div
              className={`relative rounded-3xl p-8 md:p-12 bg-gradient-to-br ${currentTech.gradient} shadow-2xl transform transition-all duration-1000 hover:scale-105`}
            >
              {/* Slide Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Info */}
                <div className="text-white space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">{currentTech.icon}</div>
                    <span className="text-lg font-medium opacity-90">{currentTech.category}</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold leading-tight">{currentTech.title}</h3>

                  <p className="text-xl opacity-90 leading-relaxed">{currentTech.description}</p>

                  {/* Progress Indicators */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{techSlides.length}</div>
                      <div className="text-sm opacity-75">Categories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">{currentTech.technologies.length}</div>
                      <div className="text-sm opacity-75">Technologies</div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Technologies */}
                <div className="space-y-6">
                  {currentTech.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="group relative"
                      onMouseEnter={() => setHoveredTech(index)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                        <div className="relative">
                          <Image
                            src={tech.logo || "/placeholder.svg"}
                            alt={tech.name}
                            width={60}
                            height={60}
                            className="rounded-xl group-hover:scale-110 transition-transform duration-300"
                          />
                          {hoveredTech === index && (
                            <div className="absolute -inset-2 bg-gradient-to-r from-white/30 to-transparent rounded-xl animate-pulse"></div>
                          )}
                        </div>

                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2">{tech.name}</h4>
                          <div className="relative">
                            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                                style={{
                                  width: hoveredTech === index ? `${tech.level}%` : "0%",
                                  transitionDelay: `${index * 200}ms`,
                                }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                              </div>
                            </div>
                            <span className="text-sm text-white/80 mt-1 block">
                              {tech.level}%{" "}
                              {tech.level >= 80 ? "Proficient" : tech.level >= 60 ? "Intermediate" : "Learning"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-white/30 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Slide Indicators */}
              <div className="flex items-center gap-4">
                {techSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                ) : (
                  <Play className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                )}
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-6">
              <span className="text-white/60 text-lg">
                {currentSlide + 1} / {techSlides.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
