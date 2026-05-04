"use client"

import { motion } from "framer-motion"
import { Code2, Database, Globe, Server, Smartphone, Palette, Zap, GitBranch } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    items: ["Node.js", "Express", "Python", "Django", "REST APIs"]
  },
  {
    category: "Database",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    items: ["React Native", "Flutter", "Dart", "PWA", "Mobile-First"]
  },
  {
    category: "DevOps & Tools",
    icon: GitBranch,
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-500/10",
    items: ["Git", "Docker", "Vercel", "AWS", "CI/CD"]
  },
  {
    category: "Design & UX",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    items: ["Figma", "UI/UX Design", "Responsive Design", "Accessibility"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
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
            <span className="text-sm font-mono text-muted-foreground">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative p-6 rounded-2xl ${skill.bgColor} border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden`}
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
              />

              {/* Blur orb effect */}
              <motion.div
                className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${skill.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon with animation */}
                <motion.div
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4 shadow-lg shadow-current/20`}
                >
                  <skill.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Category */}
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {skill.category}
                </h3>

                {/* Skills list with stagger animation */}
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 + i * 0.08, ease: "easeOut" }}
                      className="flex items-center gap-3 group/item"
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-primary"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground group-hover/item:font-medium transition-all">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-primary/30">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-foreground">Currently exploring: AI/ML & Web3</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
