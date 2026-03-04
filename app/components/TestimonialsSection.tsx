"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    company: "TechStart Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote: "Harsh's expertise in full-stack development is exceptional. He delivered our complex platform on time and exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager, CloudSoft",
    company: "CloudSoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote: "Working with Harsh was a game-changer. His innovative approach to problem-solving saved us months of development time.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, DataViz Corp",
    company: "DataViz Corp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote: "Harsh brought cutting-edge AI/ML solutions to our project. His technical depth and communication skills are outstanding.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Founder, AppFlow",
    company: "AppFlow",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    quote: "The Flutter app Harsh developed for us has been a huge success. Clean code, great architecture, and fantastic support.",
    rating: 5
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
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
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">Client Feedback</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">What People Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from clients and collaborators who have experienced my work
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-card/30 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
              </div>

              {/* Quote text */}
              <p className="text-lg text-foreground mb-6 leading-relaxed flex-1 italic">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0 border border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50 backdrop-blur-sm"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="p-4 rounded-lg bg-card/50 border border-border text-center"
          >
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Avg Rating</div>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="p-4 rounded-lg bg-card/50 border border-border text-center"
          >
            <div className="text-3xl font-bold text-primary mb-2">{testimonials.length}+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="p-4 rounded-lg bg-card/50 border border-border text-center"
          >
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="p-4 rounded-lg bg-card/50 border border-border text-center"
          >
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Projects Done</div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to work together on your next project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
