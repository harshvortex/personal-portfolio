
"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, MeshTransmissionMaterial } from "@react-three/drei"
import * as THREE from "three"

function GeometricShape({
    position,
    geometry,
    color,
    scale = 1
}: {
    position: [number, number, number]
    geometry: string
    color: string
    scale?: number
}) {
    const meshRef = useRef<THREE.Mesh>(null)
    const [hovered, setHover] = useState(false)

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Organic compound rotation
            meshRef.current.rotation.x += delta * (hovered ? 0.3 : 0.1)
            meshRef.current.rotation.y += delta * (hovered ? 0.3 : 0.15)
            // Gentle floating pulse
            meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.001
        }
    })

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh
                ref={meshRef}
                position={position}
                scale={hovered ? scale * 1.1 : scale}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {geometry === "torus" && <torusKnotGeometry args={[0.5, 0.2, 128, 32]} />}
                {geometry === "icosahedron" && <icosahedronGeometry args={[0.8, 0]} />}
                {geometry === "dodecahedron" && <dodecahedronGeometry args={[0.8, 0]} />}
                {geometry === "octahedron" && <octahedronGeometry args={[0.8, 0]} />}

                {/* Premium Glass Material */}
                <MeshTransmissionMaterial
                    backside
                    samples={4}
                    thickness={0.5}
                    chromaticAberration={0.1}
                    anisotropy={0.1}
                    distortion={0.1}
                    distortionScale={0.1}
                    temporalDistortion={0.1}
                    ior={1.2}
                    color={color}
                    roughness={0.1}
                />
            </mesh>
        </Float>
    )
}

export default function FloatingShapes() {
    return (
        <group>
            {/* Strategic placement for composition */}
            <GeometricShape position={[-5, 3, -8]} geometry="torus" color="#a855f7" scale={1.2} />
            <GeometricShape position={[6, -4, -10]} geometry="icosahedron" color="#3b82f6" scale={1.5} />
            <GeometricShape position={[-6, -3, -12]} geometry="dodecahedron" color="#ec4899" />
            <GeometricShape position={[4, 5, -15]} geometry="octahedron" color="#14b8a6" />
            <GeometricShape position={[0, -6, -20]} geometry="torus" color="#6366f1" scale={2} />

            {/* Background depth elements */}
            <GeometricShape position={[-10, 0, -25]} geometry="icosahedron" color="#8b5cf6" scale={3} />
            <GeometricShape position={[12, 4, -30]} geometry="dodecahedron" color="#06b6d4" scale={3} />
        </group>
    )
}

