"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Text, Float } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import * as THREE from "three"

function Model({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const { scene } = useGLTF("/assets/3d/duck.glb")

  // Clone the scene to avoid modifying the cached original
  const clonedScene = useRef()

  useEffect(() => {
    clonedScene.current = scene.clone()

    // Apply blue material to all meshes
    clonedScene.current.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#3b82f6"),
          metalness: 0.2,
          roughness: 0.3,
        })
      }
    })
  }, [scene])

  useFrame((state) => {
    if (clonedScene.current) {
      clonedScene.current.rotation.y += 0.005
    }
  })

  if (!clonedScene.current) return null

  return <primitive object={clonedScene.current} position={position} scale={scale} rotation={rotation} />
}

function FloatingText({ position, children, fontSize = 1, color = "#ffffff" }) {
  return (
    <Float
      speed={2} // Animation speed
      rotationIntensity={0.2} // XYZ rotation intensity
      floatIntensity={0.5} // Up/down float intensity
    >
      <Text
        position={position}
        fontSize={fontSize}
        color={color}
        font="/fonts/Geist-Bold.ttf"
        anchorX="center"
        anchorY="middle"
      >
        {children}
      </Text>
    </Float>
  )
}

function Scene() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, 10)
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Main 3D model */}
      <Model position={[0, -1, 0]} scale={2} />

      {/* Floating text elements */}
      <FloatingText position={[-4, 2, 0]} fontSize={0.5} color="#3b82f6">
        Metaverse
      </FloatingText>

      <FloatingText position={[4, 2.5, 0]} fontSize={0.5} color="#3b82f6">
        XR Solutions
      </FloatingText>

      <FloatingText position={[-3, -2, 0]} fontSize={0.5} color="#3b82f6">
        Web3
      </FloatingText>

      <FloatingText position={[3, -2.5, 0]} fontSize={0.5} color="#3b82f6">
        AI
      </FloatingText>

      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  )
}

export default function ThreeIntroSection() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window === "undefined") return

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    try {
      window.addEventListener("scroll", handleScroll)
    } catch (error) {
      console.error("Failed to add scroll event listener:", error)
    }

    return () => {
      try {
        window.removeEventListener("scroll", handleScroll)
      } catch (error) {
        console.error("Failed to remove scroll event listener:", error)
      }
    }
  }, [])

  const handleScrollDown = () => {
    if (typeof window === "undefined") return

    try {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      })
    } catch (error) {
      console.error("Failed to scroll:", error)
    }
  }

  return (
    <div className="relative h-screen w-full">
      <Canvas className="absolute inset-0">
        <Scene />
      </Canvas>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          Beyond <span className="text-primary">Universe</span> XR
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90 drop-shadow-md">
          Leading the future of immersive technologies in the MENA region
        </p>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`}
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/30"
          onClick={handleScrollDown}
        >
          <ArrowDown className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  )
}

