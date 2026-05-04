"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

// X icon SVG component
const XIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.1-6.657-5.856 6.657H2.306l7.73-8.835L1.75 2.25h6.969l4.613 6.231 5.206-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/harshvortex",
    icon: Github,
    color: "from-slate-500 to-slate-700",
    description: "View my code"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/harshvortex",
    icon: Linkedin,
    color: "from-blue-500 to-blue-700",
    description: "Connect with me"
  },
  {
    name: "X",
    href: "https://x.com/harshvortex",
    icon: XIcon,
    color: "from-black to-gray-800",
    description: "Follow my thoughts"
  },
  {
    name: "Email",
    href: "mailto:harshvortex@gmail.com",
    icon: Mail,
    color: "from-red-500 to-red-700",
    description: "Get in touch"
  }
]

export default function SocialLinks() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Let&apos;s Connect
          </h3>
          <p className="text-muted-foreground">
            Reach out across platforms
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-br ${link.color} text-white font-medium flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Hover background glow */}
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-20 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Icon className="w-5 h-5 relative z-10" />
                </motion.div>

                {/* Text */}
                <span className="relative z-10 text-sm sm:text-base">{link.name}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
