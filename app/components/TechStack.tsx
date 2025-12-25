import { Code2, Database, Cloud, Wrench, Smartphone, Brain } from "lucide-react"

const techCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-8 h-8" />,
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Sass", "Webpack", "Vite"],
  },
  {
    title: "Backend Development",
    icon: <Database className="w-8 h-8" />,
    technologies: ["Node.js", "Python", "Express", "FastAPI", "Django", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-8 h-8" />,
    technologies: ["React Native", "Flutter", "Expo", "iOS", "Android", "PWA", "Ionic", "Cordova"],
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    technologies: ["TensorFlow", "PyTorch", "scikit-learn", "OpenAI API", "Hugging Face", "NLTK", "spaCy", "Pandas"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-8 h-8" />,
    technologies: ["AWS", "Vercel", "Docker", "Kubernetes", "GitHub Actions", "Nginx", "Linux", "CI/CD"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-8 h-8" />,
    technologies: ["Git", "Slack", "Jira", "Figma", "Postman", "VS Code", "Jupyter", "Notion"],
  },
]

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-24 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-blue-900/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">Tech Stack & Tools</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies, frameworks, and platforms that I use to build robust and
            scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <div key={index} className="tech-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 dark:bg-blue-900/30 rounded-xl text-green-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white ml-4">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-green-100 dark:bg-blue-900/30 text-green-700 dark:text-blue-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-200 dark:hover:bg-blue-800/50 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 tech-card text-center">
          <h3 className="text-3xl font-bold gradient-text mb-6">Collaboration Tools</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Experienced with modern development workflows and team collaboration platforms
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Slack", "Discord", "Zoom", "Teams", "Jira", "Trello", "Notion", "Figma"].map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-green-50 dark:bg-blue-900/20 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
                  <Wrench className="w-6 h-6 text-green-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
