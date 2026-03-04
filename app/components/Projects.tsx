"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, Github, Code2, Sparkles, ArrowRight } from "lucide-react"
import { useRef, MouseEvent } from "react"

const projects = [
  {
    title: "ai_engineer",
    description: "Advanced AI/ML project exploring machine learning algorithms, neural networks, and intelligent automation solutions. Demonstrates cutting-edge AI engineering practices and implementation patterns.",
    tech: ["Python", "TensorFlow", "PyTorch", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1677442d019cecf8f325fbeee7c7f84a8d0a0b28?w=800&h=600&fit=crop",
    github: "https://github.com/harshvortex/ai_engineer",
    live: "#",
    featured: true,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "AndroIDE_pro",
    description: "Professional Android IDE application built with Kotlin. A comprehensive development environment for Android development with advanced features and optimization.",
    tech: ["Kotlin", "Android", "Java", "IDE"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6e7?w=800&h=600&fit=crop",
    github: "https://github.com/harshvortex/AndroIDE_pro",
    live: "#",
    featured: true,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Cab-Booking-App",
    description: "Full-stack ride-sharing application built with Flutter and Dart. Seamless user experience with real-time tracking, payment integration, and dynamic pricing.",
    tech: ["Flutter", "Dart", "Firebase", "Payment APIs"],
    image: "https://images.unsplash.com/photo-1526881152029-0ae1e5a48fb0?w=800&h=600&fit=crop",
    github: "https://github.com/harshvortex/Cab-Booking-App",
    live: "https://codecyclon.vercel.app",
    featured: true,
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "dynamicwebsite",
    description: "Full-stack web application built with Python, Flask, and MongoDB. Robust backend with dynamic frontend, demonstrating scalable architecture and modern web development practices.",
    tech: ["Python", "Flask", "MongoDB", "HTML/CSS/JS"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    github: "https://github.com/harshvortex/dynamicwebsite",
    live: "#",
    featured: false,
    gradient: "from-purple-500 to-pink-500"
  }
]

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 100, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 100, damping: 20 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top
    const xPct = (mouseXPos / width) - 0.5
    const yPct = (mouseYPos / height) - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-2xl overflow-hidden bg-card/30 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
          <Sparkles className="w-3 h-3 text-primary" />
          <span className="text-xs font-medium text-primary">Featured</span>
        </div>
      )}

      {/* Image with gradient overlay */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

        {/* Hover overlay with links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 backdrop-blur-sm transition-opacity"
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-full bg-card border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <ExternalLink className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6" style={{ transform: "translateZ(50px)" }}>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-primary/20 backdrop-blur-sm mb-4">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">Featured Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications demonstrating technical expertise and creative problem-solving
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/harshvortex"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-card border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors group"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View More on GitHub</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
