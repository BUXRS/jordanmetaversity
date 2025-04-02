"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Text3D, Float } from "@react-three/drei"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MousePointer } from "lucide-react"
import Link from "next/link"

function Model({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  // Using a placeholder model - in a real implementation, you would use your own 3D model
  const { scene } = useGLTF("/assets/3d/duck.glb")

  // Replace this with your actual 3D building/architecture model
  return <primitive object={scene} position={position} scale={scale} rotation={rotation} />
}

function FloatingBuilding({ position = [0, 0, 0] }) {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.1
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

function FloatingCity() {
  const buildings = [
    { position: [-2, 0, -1], height: 2, width: 0.8, depth: 0.8 },
    { position: [-1, 0, -2], height: 3, width: 0.6, depth: 0.6 },
    { position: [0, 0, -3], height: 4, width: 1, depth: 1 },
    { position: [1.5, 0, -2], height: 2.5, width: 0.7, depth: 0.7 },
    { position: [2.5, 0, -1], height: 1.8, width: 0.9, depth: 0.9 },
    { position: [-1.5, 0, 1], height: 2.2, width: 0.8, depth: 0.8 },
    { position: [0, 0, 1.5], height: 3.5, width: 0.7, depth: 0.7 },
    { position: [2, 0, 0.5], height: 2.8, width: 0.6, depth: 0.6 },
  ]

  return (
    <group>
      {buildings.map((building, index) => (
        <FloatingBuilding
          key={index}
          position={[building.position[0], building.position[1] + building.height / 2, building.position[2]]}
        />
      ))}

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>

      {/* Title */}
      <Float floatIntensity={0.5} rotationIntensity={0.2} speed={2}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          position={[0, 3, 0]}
          rotation={[0, 0, 0]}
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          METAVERSE
          <meshStandardMaterial color="#f59e0b" />
        </Text3D>
      </Float>

      <Float floatIntensity={0.3} rotationIntensity={0.1} speed={1.5}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          position={[-1.5, 2.2, 0]}
          rotation={[0, 0, 0]}
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          ARCHITECTURE
          <meshStandardMaterial color="#f59e0b" />
        </Text3D>
      </Float>
    </group>
  )
}

function Scene() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(5, 5, 5)
    camera.lookAt(0, 0, 0)
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingCity />
      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

export default function MetaverseArchitectureHero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="relative w-full h-screen">
      {/* 3D Scene */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50">
        {isClient && (
          <Canvas shadows>
            <Scene />
          </Canvas>
        )}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-20 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
            Metaverse 3D Architecture Services
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Transform physical spaces into immersive digital experiences with our cutting-edge metaverse architecture
            and design services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              <Link href="#projects" className="flex items-center">
                View Our Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/contact" className="flex items-center">
                Request a Consultation
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <MousePointer className="h-5 w-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}

