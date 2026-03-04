"use client"

import { motion } from "framer-motion"
import { BookOpen, Calendar, ArrowRight, ExternalLink } from "lucide-react"

const articles = [
  {
    title: "Building Scalable Python Applications with Machine Learning",
    description: "Explore best practices for scaling Python applications with ML models, including deployment strategies and optimization techniques.",
    category: "Python",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    link: "#",
    featured: true
  },
  {
    title: "Android Development with Kotlin: Advanced Patterns",
    description: "Deep dive into advanced Kotlin patterns and practices for building robust Android applications with clean architecture.",
    category: "Android",
    date: "Mar 8, 2024",
    readTime: "10 min read",
    link: "#",
    featured: true
  },
  {
    title: "Cross-Platform Mobile Development with Flutter",
    description: "Complete guide to building beautiful and performant mobile apps with Flutter, from state management to deployment.",
    category: "Flutter",
    date: "Feb 28, 2024",
    readTime: "12 min read",
    link: "#",
    featured: false
  },
  {
    title: "Web Development Trends in 2024",
    description: "Latest trends and technologies shaping modern web development, including AI integration and performance optimization.",
    category: "Web Development",
    date: "Feb 20, 2024",
    readTime: "7 min read",
    link: "#",
    featured: false
  }
]

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-primary/20 backdrop-blur-sm mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">Insights & Articles</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Latest Articles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical insights, tutorials, and thoughts on software development
          </p>
        </motion.div>

        {/* Featured Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {articles.filter(a => a.featured).map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                  {article.category}
                </span>
                <motion.div whileHover={{ rotate: 45 }} className="text-primary">
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex-1">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-6 line-clamp-2">
                {article.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <span>{article.readTime}</span>
                </div>
                <motion.div whileHover={{ x: 5 }} className="text-primary">
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* All Articles List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-card/30 border border-border backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-foreground">All Articles</h3>
          <div className="space-y-4">
            {articles.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5 }}
                className="group flex items-center justify-between p-4 rounded-lg hover:bg-card/50 transition-colors cursor-pointer"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="px-2 py-1 rounded bg-muted text-muted-foreground">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <motion.div whileHover={{ x: 5 }} className="ml-4 text-primary">
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Discover more articles and technical insights
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
          >
            <BookOpen className="w-5 h-5" />
            Read All Articles
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
