"use client"

import { motion } from "framer-motion"
import { Award, Trophy, CheckCircle, ExternalLink, Calendar } from "lucide-react"

const certifications = [
  {
    title: "Advanced Python for Machine Learning",
    issuer: "Coursera",
    date: "Dec 2023",
    link: "#",
    skills: ["Python", "TensorFlow", "Data Science"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Android Development Specialization",
    issuer: "Google Developers",
    date: "Oct 2023",
    link: "#",
    skills: ["Kotlin", "Android", "Mobile Development"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udacity",
    date: "Aug 2023",
    link: "#",
    skills: ["React", "Node.js", "Databases"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Flutter Mobile Development",
    issuer: "Google Cloud Skills Boost",
    date: "Jun 2023",
    link: "#",
    skills: ["Flutter", "Dart", "Cross-Platform"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Cloud Architecture Fundamentals",
    issuer: "AWS Training",
    date: "Apr 2023",
    link: "#",
    skills: ["AWS", "Cloud Architecture", "DevOps"],
    color: "from-yellow-500 to-amber-500"
  },
  {
    title: "Web Performance & Optimization",
    issuer: "Google Analytics Academy",
    date: "Feb 2023",
    link: "#",
    skills: ["Performance", "Optimization", "Web Development"],
    color: "from-teal-500 to-cyan-500"
  }
]

const achievements = [
  {
    icon: Trophy,
    title: "Open Source Contributor",
    description: "Active contributor to multiple open source projects with 143 total stars"
  },
  {
    icon: CheckCircle,
    title: "Technical Speaker",
    description: "Speaker at tech meetups and conferences sharing knowledge with developers"
  },
  {
    icon: Award,
    title: "Tech Innovator",
    description: "Building cutting-edge solutions with Python, Kotlin, and Flutter"
  }
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
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
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">Credentials & Achievements</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Certifications & Awards</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognitions in software development and cloud technologies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-xl bg-card/30 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Gradient border on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}
              />

              <div className="flex items-start justify-between mb-3">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${cert.color}`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <motion.div whileHover={{ rotate: 45 }} className="text-primary">
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>

              <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {cert.date}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border backdrop-blur-sm hover:border-primary/50 transition-all"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/20 mb-4">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-card/30 border border-border backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{certifications.length}</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Completion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{achievements.length}+</div>
              <div className="text-sm text-muted-foreground">Achievements</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
