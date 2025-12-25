import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

export default function Footer() {
  return (
    <AnimatedSection className="bg-black/50 backdrop-blur-lg text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold gradient-text mb-4">Harshwardhan</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Full-stack developer specializing in modern web technologies.
              Building scalable solutions that drive business results and deliver exceptional user experiences.
            </p>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Connect</h4>
            <p className="text-gray-400 text-sm mb-4">Let's connect and collaborate!</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/harshvortex"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com/in/harshvortex"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ring-2 ring-blue-500/30 hover:ring-blue-500/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://twitter.com/harshvortex"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://leetcode.com/harshvortex"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center ring-2 ring-yellow-500/30 hover:ring-yellow-500/50"
                aria-label="LeetCode"
              >
                <span className="text-xs sm:text-sm font-bold">LC</span>
              </a>
              <a
                href="mailto:harshvortex@gmail.com"
                className="p-2 sm:p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-2">
            &copy; {new Date().getFullYear()} Harshwardhan. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built with Next.js, TypeScript, and Tailwind CSS • Optimized for performance and accessibility
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
