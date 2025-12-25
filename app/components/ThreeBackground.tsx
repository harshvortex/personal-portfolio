
"use client"

import { Canvas } from "@react-three/fiber"
import { Stars, Environment } from "@react-three/drei"
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing"
import { Suspense } from "react"
import FloatingShapes from "./FloatingShapes"

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: false, alpha: false }} dpr={[1, 1.5]}>
                <color attach="background" args={['#050505']} />
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="purple" />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="blue" />

                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <FloatingShapes />
                    <Environment preset="city" />

                    {/* <EffectComposer disableNormalPass>
                        <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.5} />
                        <Noise opacity={0.05} />
                        <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    </EffectComposer> */}
                </Suspense>
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-background/10 to-transparent opacity-80 mix-blend-overlay" />
        </div>
    )
}

