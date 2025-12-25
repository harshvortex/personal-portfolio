"use client"

import { Canvas, useThree } from "@react-three/fiber"
import { ScrollControls, Scroll, useScroll, Environment, Float } from "@react-three/drei"
import { Suspense, useRef } from "react" // Added useRef import
import { useFrame } from "@react-three/fiber" // Added useFrame import
import SpaceEnvironment from "./SpaceEnvironment"
import FloatingShapes from "./FloatingShapes"
import ProjectGallery3D from "./ProjectGallery3D"
import AppDevelopment from "./AppDevelopment"

// Import existing (or adapted) 2D content
import Header from "./Header"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"
import Footer from "./Footer"

function Content() {
    const scroll = useScroll()
    const shapesRef = useRef<any>(null)

    useFrame((state, delta) => {
        // Parallax logic for 3D elements
        if (shapesRef.current) {
            // Example: Rotate shapes based on scroll position
            shapesRef.current.rotation.y = scroll.offset * Math.PI * 2
        }
    })

    return (
        <>
            <SpaceEnvironment />

            {/* 3D Content Layer (The "Planets" or objects you pass) */}
            <Scroll>
                {/* Hero Area Stars - deeply background */}
                <Float floatIntensity={2} speed={2}>
                    <FloatingShapes />
                </Float>

                <ProjectGallery3D />
            </Scroll>

            {/* HTML Content Layer (Overlays) */}
            <Scroll html style={{ width: '100vw' }}>
                {/* 
           We place content in absolute sections or a big flow.
           Since Scroll html flows naturally, we can just dump our components here.
           Each component assumes it takes up 100vh usually.
        */}
                <div className="w-full">
                    <Header />
                    <main>
                        <Hero />
                        <About />
                        <Projects />
                        <AppDevelopment />
                        <Skills />
                        <Contact />
                    </main>
                    <Footer />
                </div>
            </Scroll>
        </>
    )
}

export default function Scene() {
    return (
        <div className="fixed inset-0 w-full h-full bg-[#050505]">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true }}>
                <color attach="background" args={['#050505']} />
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />

                    <ScrollControls pages={7} damping={0.3} distance={1}>
                        <Content />
                    </ScrollControls>

                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    )
}
