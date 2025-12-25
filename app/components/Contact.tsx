import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
              Let's{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Let's discuss how I can help bring your project to life. Open to freelance opportunities,
              internships, and full-time positions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Info */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">Get In Touch</h3>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card/80 backdrop-blur-sm rounded-lg shadow-md border border-border/30 card-hover">
                  <div className="p-2 md:p-3 bg-secondary/10 rounded-lg">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-gray-800 dark:text-white">Email</h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">harshvortex@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card/80 backdrop-blur-sm rounded-lg shadow-md border border-border/30 card-hover">
                  <div className="p-2 md:p-3 bg-secondary/10 rounded-lg">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-gray-800 dark:text-white">Phone</h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">+91 9520535135</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card/80 backdrop-blur-sm rounded-lg shadow-md border border-border/30 card-hover">
                  <div className="p-2 md:p-3 bg-secondary/10 rounded-lg">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-gray-800 dark:text-white">Location</h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                      Bilsanda, Pilibhit (UP) -262202
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-sm md:text-base font-semibold text-gray-800 dark:text-white mb-3">Connect With Me</h4>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <a
                    href="https://github.com/harshvortex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 md:px-5 py-2.5 md:py-3 rounded-lg transition-all duration-300 text-xs md:text-sm shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/harshvortex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 md:px-5 py-2.5 md:py-3 rounded-lg transition-all duration-300 text-xs md:text-sm shadow-lg hover:shadow-xl hover:scale-105 font-medium"
                  >
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://leetcode.com/harshvortex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-4 md:px-5 py-2.5 md:py-3 rounded-lg transition-all duration-300 text-xs md:text-sm shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
                  >
                    <span className="text-base md:text-lg font-bold">LC</span>
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-card/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl border border-border/50 card-hover">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">Send Message</h3>

              <div className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-accent text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg text-sm md:text-base"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
