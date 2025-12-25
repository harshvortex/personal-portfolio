import { Award, Calendar, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SA-2023-001",
    description: "Demonstrated expertise in designing distributed systems on AWS platform",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
    verifyUrl: "#",
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PD-2023-002",
    description: "Certified in developing scalable applications on Google Cloud Platform",
    skills: ["GCP Services", "Kubernetes", "Cloud Functions", "BigQuery"],
    verifyUrl: "#",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "2022",
    credentialId: "TF-DEV-2022-003",
    description: "Proficiency in using TensorFlow to solve deep learning and ML problems",
    skills: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
    verifyUrl: "#",
  },
  {
    title: "Meta React Developer",
    issuer: "Meta (Facebook)",
    date: "2022",
    credentialId: "META-REACT-2022-004",
    description: "Advanced React development skills and modern frontend practices",
    skills: ["React", "Redux", "Testing", "Performance Optimization"],
    verifyUrl: "#",
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2021",
    credentialId: "MONGO-DEV-2021-005",
    description: "Expertise in MongoDB database design and development",
    skills: ["NoSQL", "Database Design", "Aggregation", "Performance Tuning"],
    verifyUrl: "#",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2021",
    credentialId: "CKA-2021-006",
    description: "Skills in Kubernetes cluster administration and management",
    skills: ["Kubernetes", "Container Orchestration", "DevOps", "Cluster Management"],
    verifyUrl: "#",
  },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-blue-900/10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">Certifications & Credentials</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Continuous learning and professional development through industry-recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="tech-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-green-100 dark:bg-blue-900/30 rounded-xl text-green-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8" />
                  </div>
                  <a
                    href={cert.verifyUrl}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    title="Verify Certificate"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{cert.title}</h3>
                <p className="text-green-600 dark:text-blue-400 font-semibold mb-2">{cert.issuer}</p>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{cert.description}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Credential ID: {cert.credentialId}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Skills Validated:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-green-100 dark:bg-blue-900/30 text-green-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 tech-card inline-block">
              <h3 className="text-2xl font-bold gradient-text mb-4">Commitment to Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                I believe in continuous learning and staying updated with the latest industry standards. These
                certifications represent my commitment to maintaining the highest level of professional expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
