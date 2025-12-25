import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Building Scalable AI Applications with Python and TensorFlow",
    excerpt:
      "Learn how to architect and deploy machine learning models that can handle millions of requests while maintaining high performance and accuracy.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    tags: ["Python", "TensorFlow", "AI", "Scalability"],
    slug: "scalable-ai-applications-python-tensorflow",
  },
  {
    title: "Next.js 14 App Router: Complete Guide to Modern Web Development",
    excerpt:
      "Explore the latest features of Next.js 14 and learn how to build performant, SEO-friendly web applications with the new App Router.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "Web Development", "Performance"],
    slug: "nextjs-14-app-router-guide",
  },
  {
    title: "Implementing Real-time Features with WebSockets and Socket.io",
    excerpt:
      "Step-by-step guide to adding real-time functionality to your web applications using WebSockets, Socket.io, and modern JavaScript frameworks.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Backend Development",
    tags: ["WebSockets", "Socket.io", "Real-time", "Node.js"],
    slug: "real-time-features-websockets-socketio",
  },
  {
    title: "Mobile App Development with React Native: Best Practices",
    excerpt:
      "Discover the best practices for building cross-platform mobile applications with React Native, including performance optimization and native integrations.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-12-28",
    readTime: "15 min read",
    category: "Mobile Development",
    tags: ["React Native", "Mobile", "Cross-platform", "Performance"],
    slug: "react-native-best-practices",
  },
  {
    title: "Database Design Patterns for Modern Applications",
    excerpt:
      "Explore advanced database design patterns and learn how to choose the right database architecture for your specific use case and scale requirements.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-12-20",
    readTime: "11 min read",
    category: "Database",
    tags: ["Database", "PostgreSQL", "MongoDB", "Architecture"],
    slug: "database-design-patterns-modern-applications",
  },
  {
    title: "DevOps Automation with Docker and Kubernetes",
    excerpt:
      "Learn how to streamline your development workflow with containerization and orchestration tools for better deployment and scaling strategies.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-12-15",
    readTime: "13 min read",
    category: "DevOps",
    tags: ["Docker", "Kubernetes", "DevOps", "Automation"],
    slug: "devops-automation-docker-kubernetes",
  },
]

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-24 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-blue-900/10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">Latest Articles</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sharing knowledge and insights about modern web development, AI, and technology trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="tech-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">{post.title}</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-green-100 dark:bg-blue-900/30 text-green-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-green-600 dark:text-blue-400 hover:text-green-700 dark:hover:text-blue-300 font-medium transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/blog"
              className="bg-green-500 dark:bg-blue-500 hover:bg-green-600 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 glow-effect"
            >
              View All Articles
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
