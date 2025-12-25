"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Palette } from "lucide-react"
import { useTheme, type Theme } from "./ThemeProvider"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isThemeMenuOpen && !(event.target as Element).closest(".relative")) {
        setIsThemeMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isThemeMenuOpen])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl shadow-2xl border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-playfair font-bold glow-text hover:scale-105 transition-all duration-300 float-animation"
          >
            Harshwardhan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-secondary font-medium transition-all duration-300 relative group py-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-500"></span>
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                  className="p-3 rounded-full bg-card hover:bg-secondary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg relative"
                  aria-label="Select theme"
                >
                  <Palette className="w-5 h-5 text-muted transition-transform duration-300" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-secondary"></span>
                </button>
                {isThemeMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50 fade-in">
                    <button
                      onClick={() => {
                        setTheme("purple")
                        setIsThemeMenuOpen(false)
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-secondary/10 transition-colors flex items-center gap-2 ${
                        theme === "purple" ? "bg-secondary/20 text-secondary" : "text-foreground"
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-700"></div>
                      <span>Purple</span>
                    </button>
                    <button
                      onClick={() => {
                        setTheme("blue")
                        setIsThemeMenuOpen(false)
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-secondary/10 transition-colors flex items-center gap-2 ${
                        theme === "blue" ? "bg-secondary/20 text-secondary" : "text-foreground"
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700"></div>
                      <span>Blue</span>
                    </button>
                  </div>
                )}
              </div>

              <Link
                href="#contact"
                className="btn-dynamic bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="p-2 rounded-full bg-card hover:bg-secondary/10 transition-all duration-300 relative"
                aria-label="Select theme"
              >
                <Palette className="w-5 h-5 text-muted" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-secondary"></span>
              </button>
              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50 fade-in">
                  <button
                    onClick={() => {
                      setTheme("purple")
                      setIsThemeMenuOpen(false)
                    }}
                    className={`w-full px-3 py-2.5 text-left hover:bg-secondary/10 transition-colors flex items-center gap-2 text-sm ${
                      theme === "purple" ? "bg-secondary/20 text-secondary" : "text-foreground"
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700"></div>
                    <span>Purple</span>
                  </button>
                  <button
                    onClick={() => {
                      setTheme("blue")
                      setIsThemeMenuOpen(false)
                    }}
                    className={`w-full px-3 py-2.5 text-left hover:bg-secondary/10 transition-colors flex items-center gap-2 text-sm ${
                      theme === "blue" ? "bg-secondary/20 text-secondary" : "text-foreground"
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700"></div>
                    <span>Blue</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-card hover:bg-secondary/10 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-muted" /> : <Menu className="w-6 h-6 text-muted" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-6 bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 fade-in">
            <div className="flex flex-col space-y-4 px-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-secondary font-medium transition-all duration-300 py-3 border-b border-border/30 last:border-b-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-dynamic bg-gradient-to-r from-secondary to-accent text-secondary-foreground px-6 py-3 rounded-full font-medium text-center mt-4"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
