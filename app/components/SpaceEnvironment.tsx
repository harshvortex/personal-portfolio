"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial, useScroll } from "@react-three/drei"
import * as random from "maath/random"

export default function SpaceEnvironment() {
    const ref = useRef<any>(null)
    const scroll = useScroll()
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 10 }) as Float32Array)

    useFrame((state, delta) => {
        if (ref.current) {
            // Rotate the universe slowly
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15

            // "Warp Speed" effect: stretch z-axis based on scroll delta
            // Note: scroll.delta is normalized (0-1), usually very small
            const warpFactor = scroll ? scroll.delta * 100 : 0

            // Need to cast to any to avoid strict TS on 'scale' of Points which is Vector3
            ref.current.scale.z = 1 + warpFactor
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={2} // AdditiveBlending
                />
            </Points>
        </group>
    )
}
