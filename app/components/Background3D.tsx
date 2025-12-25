"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function FloatingOrb({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2
            meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3
        }
    })

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[1, 32, 32]} position={position}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.4}
                    metalness={0.8}
                    transparent
                    opacity={0.6}
                />
            </Sphere>
        </Float>
    )
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} color="#22c55e" intensity={0.5} />

            {/* Floating orbs */}
            <FloatingOrb position={[-4, 2, -5]} color="#22c55e" speed={1.5} />
            <FloatingOrb position={[4, -2, -8]} color="#10b981" speed={1.2} />
            <FloatingOrb position={[0, 0, -6]} color="#14f195" speed={1.8} />
        </>
    )
}

export default function Background3D() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 1.5]} // Limit pixel ratio for performance
            >
                <Scene />
            </Canvas>
        </div>
    )
}
