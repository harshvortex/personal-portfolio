import { ExternalLink, Github, Star } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

const projects = [
  {
    id: 1,
    title: "Modern Portfolio Platform",
    description: "High-performance portfolio website with dual theme system, optimized animations, and SEO best practices. Built with Next.js 14 and deployed on Vercel for maximum performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    impact: "95+ Lighthouse Score, Fully Responsive"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "Full-featured productivity application with real-time updates, data persistence, and intuitive UX. Implements modern state management and responsive design patterns.",
    tech: ["React", "TypeScript", "LocalStorage API", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    impact: "Zero Dependencies, Fast Performance"
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description: "Real-time weather monitoring application with geolocation support, 5-day forecasting, and interactive data visualization. Integrates with multiple weather APIs for reliability.",
    tech: ["HTML5", "JavaScript", "Weather API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    impact: "Real-time Data, Accurate Forecasts"
  },
  {
    id: 4,
    title: "Advanced Calculator Suite",
    description: "Scientific calculator application with calculation history, keyboard shortcuts, and multiple operation modes. Features error handling and user-friendly interface design.",
    tech: ["React", "TypeScript", "CSS3", "Math.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    impact: "100% Keyboard Accessible"
  },
]

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <AnimatedSection id="projects" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
              Featured{" "}
              <span className="bg-gradient-to-r from-green-500 to-blue-600 dark:from-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real-world projects demonstrating technical expertise and business value
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="h-32 md:h-40 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 relative">
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-3 h-3 text-yellow-300 fill-current" />
                    <span className="text-xs text-white font-medium">Featured</span>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  {project.impact && (
                    <div className="mb-4 p-2 bg-green-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-xs md:text-sm text-green-700 dark:text-blue-300 font-semibold">
                        ✨ {project.impact}
                      </p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-green-100 dark:bg-blue-900/30 text-green-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h4>
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        className="p-1 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-1 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Ready to Build Your Next Project?</h3>
              <p className="text-sm md:text-base mb-4 opacity-90">
                I'm always working on new projects and exploring cutting-edge technologies.
                Let's discuss how I can help bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-2 px-6 rounded-full text-sm transition-all"
                >
                  Start a Project
                </a>
                <a
                  href="https://github.com/harshvortex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-2 px-6 rounded-full text-sm transition-all"
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
