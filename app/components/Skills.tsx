"use client"

import { motion } from "framer-motion"
import { Code2, Database, Globe, Server, Smartphone, Palette } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    items: ["Node.js", "Express", "Python", "Django", "REST APIs"]
  },
  {
    category: "Database",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    items: ["React Native", "PWA", "Responsive Design", "Mobile-First"]
  },
  {
    category: "Tools & Others",
    icon: Code2,
    color: "from-yellow-500 to-amber-500",
    items: ["Git", "Docker", "AWS", "Vercel", "CI/CD"]
  },
  {
    category: "Design",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    items: ["Figma", "UI/UX", "Responsive Design", "Accessibility"]
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-xl bg-card/30 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${skill.color} mb-4`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>

                {/* Category */}
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {skill.category}
                </h3>

                {/* Skills list */}
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
