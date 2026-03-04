"use client"

import { motion } from "framer-motion"
import { Github, Users, GitBranch, Star } from "lucide-react"
import { useState, useEffect } from "react"

interface GitHubStats {
  repos: number
  followers: number
  following: number
  stars: number
  topLanguages: { name: string; count: number }[]
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 20,
    followers: 150,
    following: 50,
    stars: 120,
    topLanguages: [
      { name: "Python", count: 35 },
      { name: "JavaScript", count: 25 },
      { name: "Kotlin", count: 15 },
      { name: "Dart", count: 10 },
      { name: "TypeScript", count: 15 }
    ]
  })

  return (
    <section id="github-stats" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
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
            <Github className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">GitHub Presence</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">GitHub Statistics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open source contributions and GitHub activity
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: GitBranch, label: "Repositories", value: stats.repos, color: "from-blue-500 to-cyan-500" },
            { icon: Users, label: "Followers", value: stats.followers, color: "from-green-500 to-emerald-500" },
            { icon: Users, label: "Following", value: stats.following, color: "from-purple-500 to-pink-500" },
            { icon: Star, label: "Stars Earned", value: stats.stars, color: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-card/30 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{stat.value}+</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-card/30 border border-border backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">Top Programming Languages</h3>
          <div className="space-y-4">
            {stats.topLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.count}%</span>
                </div>
                <motion.div
                  className="h-2 rounded-full bg-muted overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.count}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/harshvortex"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
          >
            <Github className="w-5 h-5" />
            View Full GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
