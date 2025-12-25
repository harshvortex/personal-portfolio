import { Code, Brain, Database, Zap } from "lucide-react"

const aiProjects = [
  {
    title: "Machine Learning Pipeline",
    description:
      "End-to-end ML pipeline with data preprocessing, model training, and deployment using scikit-learn and TensorFlow.",
    tech: ["Python", "TensorFlow", "scikit-learn", "Pandas"],
    icon: <Brain className="w-8 h-8" />,
  },
  {
    title: "Natural Language Processing",
    description: "Advanced NLP models for sentiment analysis, text classification, and language translation.",
    tech: ["Python", "NLTK", "spaCy", "Transformers"],
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Interactive data visualization and analytics platform with real-time insights and predictive modeling.",
    tech: ["Python", "Plotly", "Streamlit", "NumPy"],
    icon: <Database className="w-8 h-8" />,
  },
  {
    title: "AI Automation Tools",
    description: "Intelligent automation scripts for workflow optimization and process enhancement.",
    tech: ["Python", "OpenAI API", "Selenium", "FastAPI"],
    icon: <Zap className="w-8 h-8" />,
  },
]

export default function PythonAI() {
  return (
    <section
      id="python-ai"
      className="py-24 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-blue-900/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">Python & AI Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leveraging the power of Python and artificial intelligence to create intelligent, data-driven solutions that
            solve complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aiProjects.map((project, index) => (
            <div key={index} className="tech-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 dark:bg-blue-900/30 rounded-xl text-green-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white ml-4">{project.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-green-100 dark:bg-blue-900/30 text-green-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 tech-card">
          <h3 className="text-3xl font-bold text-center gradient-text mb-8">AI & ML Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-green-600 dark:text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Deep Learning</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Neural networks, CNNs, RNNs, and transformer architectures
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-green-600 dark:text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Data Science</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Statistical analysis, data mining, and predictive modeling
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600 dark:text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Automation</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Intelligent process automation and workflow optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
