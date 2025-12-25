"use client"

import { motion } from "framer-motion"
import { User, Briefcase, Award, Target } from "lucide-react"

const highlights = [
  {
    icon: Briefcase,
    title: "Professional Experience",
    description: "2+ years building scalable web applications and delivering client solutions"
  },
  {
    icon: Award,
    title: "Quality Focused",
    description: "Committed to clean code, best practices, and exceptional user experiences"
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Focused on delivering measurable impact and business value"
  }
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-primary/20 backdrop-blur-sm mb-6">
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">About Me</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Building Digital Excellence</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-primary font-semibold">Full-Stack Developer</span> passionate about creating
                elegant solutions to complex problems. With expertise in modern web technologies, I transform ideas
                into scalable, user-centric applications.
              </p>
              <p>
                My journey in tech has been driven by curiosity and a commitment to continuous learning.
                I specialize in <span className="text-primary font-semibold">React, Next.js, and Python</span>,
                building everything from responsive frontends to robust backend systems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source,
                or solving algorithmic challenges on competitive programming platforms.
              </p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group p-6 rounded-xl bg-card/30 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Code snippet decoration */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-xl bg-card/50 border border-primary/20 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <code className="text-muted-foreground">
                <span className="text-primary">const</span> developer = &#123;<br />
                &nbsp;&nbsp;name: <span className="text-green-400">"Harshwardhan"</span>,<br />
                &nbsp;&nbsp;role: <span className="text-green-400">"Full-Stack Developer"</span>,<br />
                &nbsp;&nbsp;passion: <span className="text-green-400">"Building Amazing Things"</span><br />
                &#125;;
              </code>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
