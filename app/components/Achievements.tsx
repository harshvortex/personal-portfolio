import { Award, TrendingUp, Users, Code, Target, Zap } from "lucide-react"

const achievements = [
  {
    icon: <Code className="w-6 h-6" />,
    number: "15+",
    label: "Projects Completed",
    description: "Delivered production-ready applications"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    number: "95+",
    label: "Performance Score",
    description: "Average Lighthouse performance rating"
  },
  {
    icon: <Target className="w-6 h-6" />,
    number: "100%",
    label: "Client Satisfaction",
    description: "Projects delivered on time and budget"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    number: "20+",
    label: "Technologies",
    description: "Modern tools and frameworks mastered"
  },
]

const professionalHighlights = [
  {
    title: "Code Quality",
    description: "Writing maintainable, scalable code following industry best practices and design patterns",
    icon: <Code className="w-5 h-5" />
  },
  {
    title: "Performance Optimization",
    description: "Delivering fast, responsive applications with optimized load times and smooth user experiences",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Problem Solving",
    description: "Analyzing complex requirements and architecting elegant solutions that meet business objectives",
    icon: <Target className="w-5 h-5" />
  },
  {
    title: "Collaboration",
    description: "Working effectively in teams, communicating technical concepts clearly to stakeholders",
    icon: <Users className="w-5 h-5" />
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-card/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-secondary" />
              <span className="text-sm md:text-base font-semibold text-secondary uppercase tracking-wide">
                Professional Excellence
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Proven <span className="glow-text">Results</span>
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto font-source-sans">
              Delivering measurable value through technical expertise and professional execution
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="card-hover bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-border/50 group"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-secondary/20 rounded-xl text-secondary group-hover:bg-secondary/30 transition-colors">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-1">
                  {achievement.number}
                </div>
                <div className="text-sm md:text-base font-semibold text-foreground mb-1">
                  {achievement.label}
                </div>
                <div className="text-xs md:text-sm text-muted">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>

          {/* Professional Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalHighlights.map((highlight, index) => (
              <div
                key={index}
                className="card-hover bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-border/50 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-xl text-secondary group-hover:bg-secondary/30 transition-colors flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-playfair font-bold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted leading-relaxed font-source-sans">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

