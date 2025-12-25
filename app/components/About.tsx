import { Code, Brain, Rocket, Users, Lightbulb, Target } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

export default function About() {
  const highlights = [
    { icon: <Code className="w-6 h-6" />, title: "Clean Code", desc: "Maintainable, scalable solutions" },
    { icon: <Brain className="w-6 h-6" />, title: "Fast Adaptation", desc: "Quickly master new technologies" },
    { icon: <Rocket className="w-6 h-6" />, title: "Problem Solving", desc: "Complex challenges, elegant solutions" },
    { icon: <Users className="w-6 h-6" />, title: "Collaboration", desc: "Effective team communication" },
  ];

  return (
    <AnimatedSection id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              About <span className="glow-text">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto font-source-sans">
              Delivering high-quality software solutions with a focus on performance, scalability, and user experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 md:mb-16">
            <div className="card-hover bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/20 rounded-2xl">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground">My Journey</h3>
              </div>
              <div className="space-y-4 font-source-sans">
                <p className="text-muted leading-relaxed text-base md:text-lg">
                  A dedicated Computer Science student and full-stack developer with expertise in building
                  modern web applications. I combine technical proficiency with a passion for creating
                  solutions that solve real business problems.
                </p>
                <p className="text-muted leading-relaxed text-base md:text-lg">
                  With hands-on experience in React, Next.js, Python, and cloud technologies, I deliver
                  scalable, maintainable code that meets industry standards. I thrive in collaborative
                  environments and am committed to continuous learning and professional growth.
                </p>
              </div>
            </div>

            <div className="card-hover bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/20 rounded-2xl">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground">What Drives Me</h3>
              </div>
              <div className="space-y-6 font-source-sans">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-2xl flex-shrink-0">
                    <Brain className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-2">Technical Excellence</h4>
                    <p className="text-muted">Committed to writing clean, efficient code following industry best practices and design patterns</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-2xl flex-shrink-0">
                    <Rocket className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-2">Business-Focused Development</h4>
                    <p className="text-muted">Building solutions that drive measurable results and deliver value to clients and stakeholders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="card-hover bg-card/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-xl border border-border/50 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 bg-secondary/20 rounded-2xl text-secondary w-fit mx-auto mb-4 group-hover:bg-secondary/30 transition-colors duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-base md:text-lg font-playfair font-bold text-foreground mb-2">{highlight.title}</h4>
                <p className="text-sm md:text-base text-muted font-source-sans leading-relaxed">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
