"use client"

import { Image, Text, Float } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useRef } from "react"
import { motion } from "framer-motion-3d"

const projects = [
    {
        title: "Modern Portfolio",
        description: "Next.js 14 + R3F",
        position: [2, -10, 0], // x, y (scroll), z
        color: "#a855f7"
    },
    {
        title: "Task Master",
        description: "Productivity App",
        position: [-2, -20, 0],
        color: "#3b82f6"
    },
    {
        title: "Weather Station",
        description: "Real-time Analytics",
        position: [2, -30, 0],
        color: "#10b981"
    }
]

function ProjectItem({ project, index, width }: { project: any, index: number, width: number }) {
    // Alternate sides based on index
    const xPos = index % 2 === 0 ? width / 4 : -width / 4
    // Calculate Y position based on viewport height (approximate scroll landing spots)
    // We'll pass this manually for now in the logic below

    return (
        <group position={[xPos, -index * 7 - 10, 0]}>
            <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8} floatingRange={[-0.2, 0.2]}>
                {/* The "Card" Background */}
                <mesh position={[0, 0, -0.1]}>
                    <planeGeometry args={[4, 2.5]} />
                    <meshBasicMaterial color="black" transparent opacity={0.5} />
                </mesh>

                {/* Glow Border */}
                <mesh position={[0, 0, -0.15]}>
                    <planeGeometry args={[4.2, 2.7]} />
                    <meshBasicMaterial color={project.color} transparent opacity={0.3} />
                </mesh>

                <Text
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    fontSize={0.3}
                    position={[0, 0.5, 0.1]}
                    maxWidth={3.5}
                >
                    {project.title}
                </Text>

                <Text
                    color="#cccccc"
                    anchorX="center"
                    anchorY="middle"
                    fontSize={0.15}
                    position={[0, 0, 0.1]}
                    maxWidth={3.5}
                >
                    {project.description}
                </Text>
            </Float>
        </group>
    )
}

export default function ProjectGallery3D() {
    const { viewport } = useThree()

    return (
        <group position={[0, -viewport.height * 1.5, 0]}>
            {/* Offset starting position so it doesn't overlap header */}
            {projects.map((project, i) => (
                <ProjectItem key={i} project={project} index={i} width={viewport.width} />
            ))}
        </group>
    )
}
