import { Code, Database, Wrench, BookOpen } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="w-5 h-5" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Backend",
    icon: <Database className="w-5 h-5" />,
    skills: ["Python", "Node.js", "Express.js", "MongoDB"],
    color: "from-green-500 to-blue-500",
  },
  {
    title: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "VS Code", "Figma", "Vercel"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Learning",
    icon: <BookOpen className="w-5 h-5" />,
    skills: ["TypeScript", "Next.js", "PostgreSQL", "Docker"],
    color: "from-orange-500 to-red-500",
  },
]

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
              Technical{" "}
              <span className="bg-gradient-to-r from-green-500 to-blue-600 dark:from-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology stack for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg text-white`}>{category.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${category.title === "Learning"
                        ? "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Professional Note */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6">
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-semibold">Continuous Growth:</span> Actively expanding expertise through hands-on projects,
                industry best practices, and emerging technologies to deliver cutting-edge solutions.
              </p>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                Committed to staying current with the latest frameworks, tools, and methodologies in software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
