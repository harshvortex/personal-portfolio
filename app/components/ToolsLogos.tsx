import Image from "next/image"

const tools = [
  { name: "React", logo: "/placeholder.svg?height=60&width=60", category: "Frontend" },
  { name: "Next.js", logo: "/placeholder.svg?height=60&width=60", category: "Framework" },
  { name: "TypeScript", logo: "/placeholder.svg?height=60&width=60", category: "Language" },
  { name: "Python", logo: "/placeholder.svg?height=60&width=60", category: "Language" },
  { name: "Node.js", logo: "/placeholder.svg?height=60&width=60", category: "Backend" },
  { name: "TensorFlow", logo: "/placeholder.svg?height=60&width=60", category: "AI/ML" },
  { name: "PostgreSQL", logo: "/placeholder.svg?height=60&width=60", category: "Database" },
  { name: "MongoDB", logo: "/placeholder.svg?height=60&width=60", category: "Database" },
  { name: "AWS", logo: "/placeholder.svg?height=60&width=60", category: "Cloud" },
  { name: "Docker", logo: "/placeholder.svg?height=60&width=60", category: "DevOps" },
  { name: "Git", logo: "/placeholder.svg?height=60&width=60", category: "Version Control" },
  { name: "Figma", logo: "/placeholder.svg?height=60&width=60", category: "Design" },
]

export default function ToolsLogos() {
  return (
    <section id="tools" className="mobile-compact section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mobile-spacing">
            <h2 className="mobile-text font-bold gradient-text mb-4 md:mb-6">Tools & Technologies</h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powerful tools I use to bring ideas to life
            </p>
          </div>

          {/* Compact Tools Grid */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-6 mb-8 md:mb-16">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-3 md:p-4 bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 tech-card"
              >
                <div className="relative mb-2 md:mb-3">
                  <Image
                    src={tool.logo || "/placeholder.svg"}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="md:w-[60px] md:h-[60px] rounded-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xs md:text-sm font-semibold text-gray-800 dark:text-white text-center">
                  {tool.name}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 hidden md:block">{tool.category}</span>
              </div>
            ))}
          </div>

          {/* Compact Featured Section */}
          <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white text-center">
            <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">Always Learning</h3>
            <p className="text-sm md:text-xl mb-6 md:mb-8 opacity-90">
              Constantly exploring new technologies to stay at the forefront of development.
            </p>
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 md:gap-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                🚀 Next.js 15
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                🤖 GPT-4
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                ⚡ Rust
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                🔥 Kubernetes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
