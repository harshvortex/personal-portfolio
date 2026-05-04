"use client"

import { motion } from "framer-motion"
import { Code2, Database, Globe, Server, Smartphone, Palette, Wrench, Layers, Zap, CodeSquare } from "lucide-react"

// Skill categories with real-world workshop metaphor
const skills = [
  {
    category: "Frontend Arsenal",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    description: "User-facing experiences",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    badge: "Presentation Layer"
  },
  {
    category: "Backend Engine",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    description: "Core logic & processing",
    items: ["Node.js", "Express", "Python", "Django", "REST APIs"],
    badge: "Server Side"
  },
  {
    category: "Data Vault",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    description: "Information storage",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    badge: "Data Layer"
  },
  {
    category: "Mobile Workshop",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    description: "Cross-platform apps",
    items: ["React Native", "Flutter", "Dart", "PWA", "Mobile-First"],
    badge: "Touch Interface"
  },
  {
    category: "DevOps Pipeline",
    icon: Wrench,
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-500/10",
    description: "Build & deployment",
    items: ["Git", "Docker", "Vercel", "AWS", "CI/CD"],
    badge: "Automation"
  },
  {
    category: "Design Studio",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    description: "Visual & UX craft",
    items: ["Figma", "UI/UX Design", "Responsive Design", "Accessibility"],
    badge: "Creative"
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
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-primary/20 backdrop-blur-sm mb-4"
          >
            <Wrench className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">Developer&apos;s Workshop</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">My Toolkit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A well-equipped workshop where every tool has a purpose. From frontend brushes to backend machinery,
            creating everything with precision and care.
          </p>
        </motion.div>

        {/* Skills Grid - Workshop Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 60, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -12, rotateX: 5, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              className={`group relative p-8 rounded-3xl ${skill.bgColor} border-2 border-border/30 backdrop-blur-md hover:border-primary/60 transition-all duration-300 overflow-hidden`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Top accent bar */}
              <motion.div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              />

              {/* Animated background orb */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              />

              {/* Corner glow */}
              <motion.div
                className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${skill.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.1 }}
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} bg-clip-text text-transparent mb-3 border border-primary/20`}
                >
                  {skill.badge}
                </motion.div>

                {/* Icon with 3D effect */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.15 + 0.05 }}
                  whileHover={{ scale: 1.15, rotate: 15 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${skill.color} mb-4 shadow-lg shadow-current/30`}
                >
                  <skill.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Category & Description */}
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {skill.category}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 italic">
                  {skill.description}
                </p>

                {/* Skills list with staggered reveal */}
                <div className="space-y-2 mb-4">
                  {skill.items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.1, ease: "easeOut" }}
                      className="flex items-center gap-3 group/item"
                    >
                      <motion.div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
                        whileHover={{ scale: 2, boxShadow: "0 0 10px currentColor" }}
                      />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground group-hover/item:font-semibold transition-all duration-300">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover indicator */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="text-xs text-primary font-medium flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Ready to use
                </motion.div>
              </div>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Workshop Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Constantly upgrading tools & sharpening skills
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 hover:border-primary/60 transition-all backdrop-blur-sm"
          >
            <motion.div
              className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-mono text-foreground font-semibold">Exploring: Advanced AI/ML & Full-Stack Architecture</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
