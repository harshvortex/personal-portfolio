"use client"

import { motion } from "framer-motion"
import { Github, GitFork, Star, ExternalLink } from "lucide-react"

const contributions = [
  {
    title: "ai_engineer",
    description: "Advanced AI/ML algorithms and implementations",
    stars: 45,
    forks: 12,
    language: "Python",
    link: "https://github.com/harshvortex/ai_engineer",
    type: "Creator"
  },
  {
    title: "AndroIDE_pro",
    description: "Professional Android IDE for development",
    stars: 38,
    forks: 8,
    language: "Kotlin",
    link: "https://github.com/harshvortex/AndroIDE_pro",
    type: "Creator"
  },
  {
    title: "Cab-Booking-App",
    description: "Full-stack ride-sharing mobile application",
    stars: 32,
    forks: 6,
    language: "Dart",
    link: "https://github.com/harshvortex/Cab-Booking-App",
    type: "Creator"
  },
  {
    title: "dynamicwebsite",
    description: "Dynamic web platform with Python backend",
    stars: 28,
    forks: 5,
    language: "Python",
    link: "https://github.com/harshvortex/dynamicwebsite",
    type: "Creator"
  }
]

export default function OpenSourceContributions() {
  return (
    <section id="open-source" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
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
            <GitFork className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">Open Source Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Open Source Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to the developer community with innovative solutions
          </p>
        </motion.div>

        {/* Contributions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contributions.map((contrib, index) => (
            <motion.a
              key={contrib.title}
              href={contrib.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-xl bg-card/30 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {contrib.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{contrib.description}</p>
                </div>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  className="ml-4 p-3 rounded-lg bg-primary/10 text-primary"
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Type badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-4">
                <span className="text-xs font-semibold text-primary">{contrib.type}</span>
              </div>

              {/* Stats and Language */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium">{contrib.stars}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <GitFork className="w-4 h-4" />
                  <span className="text-sm font-medium">{contrib.forks}</span>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                    {contrib.language}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contribution Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">Contribution Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <div className="text-2xl font-bold text-primary mb-1">{contributions.length}</div>
              <div className="text-sm text-muted-foreground">Public Projects</div>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <div className="text-2xl font-bold text-primary mb-1">{contributions.reduce((sum, c) => sum + c.stars, 0)}</div>
              <div className="text-sm text-muted-foreground">Total Stars</div>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <div className="text-2xl font-bold text-primary mb-1">{contributions.reduce((sum, c) => sum + c.forks, 0)}</div>
              <div className="text-sm text-muted-foreground">Total Forks</div>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Active</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
