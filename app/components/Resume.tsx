import { Download, Mail, Phone, MapPin, Github, Linkedin, Award, Calendar, ExternalLink } from 'lucide-react'

export default function Resume() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Mumbai University",
      year: "2023-2027 (Expected)",
      gpa: "8.2/10.0",
      relevant: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Web Technologies",
        "Software Engineering",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "St. Xavier's College, Mumbai",
      year: "2021-2023",
      gpa: "85.4%",
      relevant: [
        "Mathematics",
        "Physics",
        "Computer Science",
        "English",
      ],
    },
  ]

  const projects = [
    {
      name: "Personal Portfolio Website",
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      description: "Responsive portfolio website showcasing projects and skills with dark mode support",
      highlights: [
        "Built responsive design with mobile-first approach",
        "Implemented dark/light theme toggle functionality",
        "Optimized for performance with Next.js features",
        "Deployed on Vercel with custom domain",
      ],
      github: "https://github.com/harshwardhan/portfolio",
      demo: "https://harshwardhan-portfolio.vercel.app",
    },
    {
      name: "Todo List Application",
      tech: ["React", "JavaScript", "CSS3", "Local Storage"],
      description: "Interactive todo application with CRUD operations and data persistence",
      highlights: [
        "Implemented add, edit, delete, and mark complete features",
        "Used local storage for data persistence",
        "Created clean and intuitive user interface",
        "Added filtering options (all, active, completed)",
      ],
      github: "https://github.com/harshwardhan/todo-app",
      demo: "https://harshwardhan-todo.netlify.app",
    },
    {
      name: "Weather Dashboard",
      tech: ["HTML5", "CSS3", "JavaScript", "Weather API"],
      description: "Weather application displaying current conditions and 5-day forecast",
      highlights: [
        "Integrated OpenWeatherMap API for real-time data",
        "Implemented geolocation for automatic city detection",
        "Created responsive design for all screen sizes",
        "Added search functionality for different cities",
      ],
      github: "https://github.com/harshwardhan/weather-app",
      demo: "https://harshwardhan-weather.netlify.app",
    },
  ]

  const skills = {
    Programming: ["JavaScript", "Python", "Java", "C++", "HTML5", "CSS3"],
    "Frameworks & Libraries": ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Figma", "Netlify", "Vercel"],
    "Currently Learning": ["Node.js", "Express.js", "MongoDB", "TypeScript", "React Native"],
  }

  const certifications = [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2024",
      credentialId: "FCC-RWD-2024-001",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2024",
      credentialId: "FCC-JS-2024-002",
    },
    {
      name: "Introduction to Programming with Python",
      issuer: "Coursera (University of Michigan)",
      date: "2023",
      credentialId: "COURSERA-PY-2023-003",
    },
  ]

  const achievements = [
    "Participated in college hackathon - secured 3rd place",
    "Active member of Computer Science Society",
    "Completed 100+ coding problems on LeetCode",
    "Volunteer at local coding bootcamp for beginners",
  ]

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-4xl font-bold">H</span>
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Harshwardhan</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-4">Computer Science Student</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>harshwardhan@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a
                href="https://github.com/harshwardhan"
                className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/harshwardhan"
                className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Professional Summary */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-green-500 dark:border-blue-500 pb-2">
            Objective
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Motivated Computer Science student with a passion for web development and problem-solving. Seeking 
            internship opportunities to apply academic knowledge in real-world projects while learning from 
            experienced professionals. Eager to contribute to innovative projects and grow technical skills 
            in a collaborative environment.
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-green-500 dark:border-blue-500 pb-2">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
                <span className="text-green-600 dark:text-blue-400 font-medium">{edu.year}</span>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">{edu.school}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {edu.gpa.includes('%') ? `Percentage: ${edu.gpa}` : `CGPA: ${edu.gpa}`}
              </p>
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {index === 0 ? 'Relevant Coursework:' : 'Subjects:'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.relevant.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="bg-green-100 dark:bg-blue-900/30 text-green-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-green-500 dark:border-blue-500 pb-2">
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-0">{project.name}</h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Features:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-gray-600 dark:text-gray-400">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-green-500 dark:border-blue-500 pb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        category === "Currently Learning"
                          ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                          : "bg-green-100 dark:bg-blue-900/30 text-green-700 dark:text-blue-300"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-green-500 dark:border-blue-500 pb-2">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <Award className="w-6 h-6 text-green-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">{cert.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{cert.date}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">ID: {cert.credentialId}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-green-500 dark:border-blue-500 pb-2">
            Achievements & Activities
          </h2>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 dark:bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Download Button */}
        <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 dark:from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download PDF Resume
          </a>
        </div>
      </div>
    </div>
  )
}
