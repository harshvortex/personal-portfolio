"use client"

import React, { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface TiltCardProps {
    children: React.ReactNode
    className?: string
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth out the mouse movement - "Gliding" feel
    const mouseX = useSpring(x, { stiffness: 100, damping: 20, mass: 0.5 })
    const mouseY = useSpring(y, { stiffness: 100, damping: 20, mass: 0.5 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()

        // Calculate normalized position [-0.5, 0.5]
        const width = rect.width
        const height = rect.height

        const mouseXPos = e.clientX - rect.left
        const mouseYPos = e.clientY - rect.top

        const xPct = (mouseXPos / width) - 0.5
        const yPct = (mouseYPos / height) - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative transform-gpu ${className}`}
        >
            <div
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className="h-full w-full"
            >
                {children}
            </div>

            {/* Gloss/Sheen effect */}
            <motion.div
                style={{
                    background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.1) 40%, transparent 60%)",
                    x: useTransform(mouseX, [-0.5, 0.5], ["-100%", "100%"]),
                    opacity: useTransform(mouseX, [-0.5, 0, 0.5], [0, 0.5, 0]),
                    pointerEvents: "none"
                }}
                className="absolute inset-0 z-10 rounded-2xl"
            />
        </motion.div>
    )
}
