"use client"

import { Smartphone, Monitor, Tablet, Zap, ArrowRight, Layers, Layout, Shield } from "lucide-react"
import ScrollReveal from "./ScrollReveal"
import TiltCard from "./TiltCard"
import { motion } from "framer-motion"

const appProjects = [
  {
    title: "Cross-Platform Mobile App",
    description: "React Native application with real-time features, push notifications, and offline capabilities.",
    tech: ["React Native", "TypeScript", "Firebase", "Redux"],
    icon: <Smartphone className="w-8 h-8" />,
    platforms: ["iOS", "Android"],
    gradient: "from-purple-500/20 to-blue-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "Progressive Web App",
    description: "High-performance PWA with service workers, offline functionality, and native app-like experience.",
    tech: ["Next.js", "PWA", "Service Workers", "IndexedDB"],
    icon: <Monitor className="w-8 h-8" />,
    platforms: ["Web", "Desktop"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "Enterprise Dashboard",
    description: "Comprehensive admin dashboard with analytics, user management, and real-time data visualization.",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    icon: <Layout className="w-8 h-8" />,
    platforms: ["Web", "Tablet"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "Real-time Chat Platform",
    description: "Scalable messaging platform with WebSocket connections, file sharing, and group management.",
    tech: ["Socket.io", "Express", "MongoDB", "Redis"],
    icon: <Zap className="w-8 h-8" />,
    platforms: ["Web", "Mobile"],
    gradient: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50"
  },
]

export default function AppDevelopment() {
  return (
    <section id="app-dev" className="py-32 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">

        {/* Header Section */}
        <div className="text-center mb-20">
          <ScrollReveal animation="fade-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/20 backdrop-blur-sm">
                Development Services
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={0.1}>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                App Development
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting immersive digital experiences with cutting-edge technology and pixel-perfect design.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {appProjects.map((project, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 0.1}>
              <TiltCard className="h-full">
                <div className={`
                    h-full relative overflow-hidden rounded-3xl p-8 
                    bg-gray-900/40 backdrop-blur-xl border border-white/5 
                    ${project.border} transition-colors duration-500 group
                `}>
                  {/* Inner Gradient Blob */}
                  <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${project.gradient} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <div className="flex gap-2">
                        {project.platforms.map((platform, i) => (
                          <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-sm font-medium text-gray-500 flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-secondary"></div>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal animation="scale-up" delay={0.4}>
          <div className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent">
            <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 md:p-20 text-center relative overflow-hidden group">

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
                Ready to realize your vision?
              </h3>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
                From initial concept to final deployment, let's build something extraordinary together.
              </p>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
