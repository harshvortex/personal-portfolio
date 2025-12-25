"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
    children: ReactNode
    className?: string
}

export default function AnimatedSection({ children, className = "", ...props }: AnimatedSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}
