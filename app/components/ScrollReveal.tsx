"use client"

import { motion, useInView, Variant } from "framer-motion"
import { useRef, ReactNode } from "react"

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-up"
    delay?: number
    duration?: number
    viewport?: { once?: boolean; margin?: string }
    staggerChildren?: number
}

const variants: Record<string, { hidden: Variant; visible: Variant }> = {
    "fade-up": {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    "fade-in": {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    "fade-left": {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    "fade-right": {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
    "scale-up": {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
}

export default function ScrollReveal({
    children,
    className = "",
    animation = "fade-up",
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: "-10% 0px" },
    staggerChildren = 0,
}: ScrollRevealProps) {
    const ref = useRef(null)

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{
                duration: 0.9,
                delay,
                ease: [0.17, 0.55, 0.55, 1], // Smoother glide
                staggerChildren
            }}
            variants={variants[animation]}
            className={className}
        >
            {children}
        </motion.div>
    )
}
