"use client"

import { Terminal, Github, Linkedin, Mail, Heart, Rocket, Code2 } from "lucide-react"
import Link from "next/link"

// X icon SVG component
const XIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.1-6.657-5.856 6.657H2.306l7.73-8.835L1.75 2.25h6.969l4.613 6.231 5.206-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

// LeetCode icon SVG component
const LeetCodeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.102 17.93h2.747L14.3 3.5h-2.946l4.748 14.43zm-9.556-5.46h2.616l1.72-4.174h-2.616l-1.72 4.174zm6.588-5.46h2.616l-1.72 4.174h-2.616l1.72-4.174z"/>
  </svg>
)

const socialLinks = [
  { icon: Github, href: "https://github.com/harshvortex", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/harshvortex", label: "LinkedIn" },
  { icon: Mail, href: "mailto:harshvortex@gmail.com", label: "Email" },
  { icon: XIcon, href: "https://x.com/harshvortex", label: "X" },
  { icon: LeetCodeIcon, href: "https://leetcode.com/harshvortex", label: "LeetCode" },
]

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur-sm">
      {/* Agency Promotion Section */}
      <div className="relative bg-gradient-to-r from-primary/5 via-transparent to-accent/5 py-8 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="https://codecyclon.vercel.app" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center gap-3 group cursor-pointer">
              <Rocket className="w-5 h-5 text-primary group-hover:scale-110 group-hover:rotate-45 transition-transform" />
              <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                CodeCyclon - Your Software Agency Partner
              </span>
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">→</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold font-mono">
                <span className="text-primary">&lt;</span>
                HV
                <span className="text-primary">/&gt;</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Building digital experiences with modern technologies and clean code.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:harshvortex@gmail.com" className="hover:text-primary transition-colors">
                  harshvortex@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/harshvortex" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  github.com/harshvortex
                </a>
              </li>
              <li>
                <a href="https://codecyclon.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                  <Rocket className="w-3 h-3" />
                  CodeCyclon Agency
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Harshwardhan. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
