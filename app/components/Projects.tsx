"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, Github, Code2, Sparkles, ArrowRight } from "lucide-react"
import { useRef, MouseEvent } from "react"

const projects = [
  {
    title: "AI Engineer",
    description: "Advanced AI-powered engineering tools and utilities. A Python-based project exploring machine learning and artificial intelligence applications.",
    tech: ["Python", "AI/ML", "Engineering"],
    image: "https://images.unsplash.com/photo-1677442d019cecf8e5004e3f392f34d77a3480fbb?w=800&h=600&fit=crop",
    github: "https://github.com/harshvortex/ai_engineer",
    live: "https://github.com/harshvortex/ai_engineer",
    featured: true,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "AndroIDE Pro",
    description: "Professional Android IDE development toolkit built with Kotlin. A comprehensive IDE solution for Android development with advanced features.",
    tech: ["Kotlin", "Android", "IDE"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    github: "https://github.com/harshvortex/AndroIDE_pro",
    live: "https://github.com/harshvortex/AndroIDE_pro",
    featured: true,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Cab Booking App",
    description: "Full-featured cab booking application built with Dart and Flutter. Seamless ride-sharing experience with real-time tracking and payments.",
    tech: ["Dart", "Flutter", "Mobile"],
    image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b7?w=800&h=600&fit=crop",
    github: "https://github.com/harshvortex/Cab-Booking-App",
    live: "https://codecyclon.vercel.app",
    featured: true,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Dynamic Website",
    description: "Dynamic web application with MongoDB Atlas integration and Flask backend. Deployed on Render with full database management capabilities.",
    tech: ["Flask", "MongoDB", "Python"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    github: "https://github.com/harshvortex/dynamicwebsite",
    live: "https://github.com/harshvortex/dynamicwebsite",
    featured: false,
    gradient: "from-green-500 to-emerald-500"
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
      initial={{ opacity: 0, y: 120, scale: 0.85, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay: index * 0.2, ease: "easeOut", type: "spring", stiffness: 100, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-card/50 to-card/20 border-2 border-border/30 backdrop-blur-lg hover:border-primary/60 transition-all duration-400 shadow-2xl hover:shadow-3xl hover:shadow-primary/30"
    >
      {/* Background gradient animation */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-700`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.15 }}
      />

      {/* Top accent line */}
      <motion.div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      />

      {/* Featured badge */}
      {project.featured && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: -10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          className="absolute top-4 left-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/50 backdrop-blur-sm shadow-lg shadow-primary/20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Featured</span>
        </motion.div>
      )}

      {/* Image with cinematic effects */}
      <div className="relative h-60 sm:h-72 overflow-hidden">
        {/* Animated image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.2, rotate: 2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Color overlay with gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
          initial={{ opacity: 0.15 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.5 }}
        />

        {/* Dark vignette effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.5 }}
        />

        {/* Light rays effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.7 }}
        />

        {/* Interactive hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0, y: 20 }}
            whileHover={{ scale: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="text-center"
          >
            <p className="text-white font-semibold mb-4 text-lg">View Project</p>
            <div className="flex gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white shadow-xl transition-all hover:shadow-2xl"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-full bg-gradient-to-br from-accent to-accent/80 text-white shadow-xl transition-all hover:shadow-2xl"
              >
                <ExternalLink className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Content with cinematic styling */}
      <div className="p-8" style={{ transform: "translateZ(50px)" }}>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.1 }}
          className="text-2xl sm:text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300"
        >
          {project.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.15 }}
          className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* Tech stack with enhanced styling */}
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + i * 0.08, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -3, boxShadow: "0 5px 15px rgba(34, 197, 94, 0.3)" }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border-2 border-primary/30 hover:border-primary/60 transition-all cursor-default`}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header with cinematic flair */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 relative"
        >
          {/* Background accent */}
          <motion.div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm mb-6"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>
              <Code2 className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-mono text-muted-foreground font-semibold">Project Gallery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 relative z-10"
          >
            <span className="gradient-text">Cinematic Creations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed relative z-10"
          >
            Crafted with precision, designed for impact. Each project is a story of innovation, solving real problems
            with cutting-edge technology and creative problem-solving.
          </motion.p>
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
