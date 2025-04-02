"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Text, Float, Html, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import * as THREE from "three"

function VRHeadset({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  // In a real implementation, you would use a proper VR headset model
  // For this example, we'll create a simplified representation
  return (
    <group position={position} scale={scale} rotation={rotation}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 0.6, 0.8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      {/* Lenses */}
      <mesh position={[0, 0, 0.41]}>
        <boxGeometry args={[0.9, 0.5, 0.01]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
      {/* Strap */}
      <mesh position={[0, 0, -0.2]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.5, 0.05, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </group>
  )
}

function Tablet({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  return (
    <group position={position} scale={scale} rotation={rotation}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.8, 0.05]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0, 0.03]}>
        <boxGeometry args={[1.1, 0.7, 0.01]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

function Computer({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  return (
    <group position={position} scale={scale} rotation={rotation}>
      {/* Monitor */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.2, 0.8, 0.1]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0.5, 0.06]}>
        <boxGeometry args={[1.1, 0.7, 0.01]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
      </mesh>
      {/* Stand */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.2, 0.5, 16]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      {/* Base */}
      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05, 16]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </group>
  )
}

function FloatingCard({ position, children, width = 2, height = 1, visible = true, onClick }) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef()

  useFrame(() => {
    if (cardRef.current) {
      // Subtle floating animation
      cardRef.current.position.y = position[1] + Math.sin(Date.now() * 0.001) * 0.05

      // Scale effect when hovered
      if (hovered) {
        cardRef.current.scale.x = THREE.MathUtils.lerp(cardRef.current.scale.x, 1.05, 0.1)
        cardRef.current.scale.y = THREE.MathUtils.lerp(cardRef.current.scale.y, 1.05, 0.1)
        cardRef.current.scale.z = THREE.MathUtils.lerp(cardRef.current.scale.z, 1.05, 0.1)
      } else {
        cardRef.current.scale.x = THREE.MathUtils.lerp(cardRef.current.scale.x, 1, 0.1)
        cardRef.current.scale.y = THREE.MathUtils.lerp(cardRef.current.scale.y, 1, 0.1)
        cardRef.current.scale.z = THREE.MathUtils.lerp(cardRef.current.scale.z, 1, 0.1)
      }
    }
  })

  if (!visible) return null

  return (
    <group
      ref={cardRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Card background */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial color={hovered ? "#4b92ff" : "#3b82f6"} transparent opacity={0.8} />
      </mesh>

      {/* Card content */}
      <Html
        transform
        position={[0, 0, 0.01]}
        style={{
          width: `${width * 100}px`,
          height: `${height * 100}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          pointerEvents: "none",
        }}
      >
        <div className="text-white text-center">{children}</div>
      </Html>
    </group>
  )
}

function MetaversityLabScene({ setActiveSection }) {
  const [step, setStep] = useState(0)
  const maxSteps = 4
  const { camera } = useThree()

  // Camera positions for each step
  const cameraPositions = [
    [0, 0, 5], // Initial overview
    [-2, 0, 3], // Focus on VR headset
    [0, 0, 3], // Focus on center
    [2, 0, 3], // Focus on computer
  ]

  // Camera targets for each step
  const cameraTargets = [
    [0, 0, 0], // Look at center
    [-2, 0, 0], // Look at VR headset
    [0, 0, 0], // Look at center
    [2, 0, 0], // Look at computer
  ]

  useEffect(() => {
    // Move camera to position for current step
    const position = cameraPositions[step]
    const target = cameraTargets[step]

    camera.position.set(position[0], position[1], position[2])
    camera.lookAt(target[0], target[1], target[2])
  }, [step, camera])

  const nextStep = () => {
    if (step < maxSteps - 1) {
      setStep(step + 1)
    } else {
      // When we reach the end, signal to scroll to the next section
      setActiveSection("university")
    }
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Central platform */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[3, 3, 0.1, 32]} />
        <meshStandardMaterial color="#1a365d" />
      </mesh>

      {/* Devices */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <VRHeadset position={[-2, 0, 0]} scale={0.8} rotation={[0, Math.PI / 4, 0]} />
      </Float>

      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
        <Tablet position={[0, 0, 0]} scale={0.8} rotation={[-Math.PI / 6, 0, 0]} />
      </Float>

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Computer position={[2, -0.5, 0]} scale={0.8} rotation={[0, -Math.PI / 4, 0]} />
      </Float>

      {/* Text elements */}
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.5}
        color="white"
        font="/fonts/Geist-Bold.ttf"
        anchorX="center"
        anchorY="middle"
      >
        Metaversity Labs
      </Text>

      {/* Information cards for each step */}
      <FloatingCard position={[0, 0.5, 0]} visible={step === 0} onClick={nextStep}>
        <h3 className="text-lg font-bold mb-2">Welcome to Metaversity Labs</h3>
        <p className="text-sm">Immersive XR laboratories designed to transform education</p>
        <p className="text-xs mt-2 text-blue-200">Click to explore →</p>
      </FloatingCard>

      <FloatingCard position={[-2, 0.8, 0]} visible={step === 1} onClick={nextStep}>
        <h3 className="text-lg font-bold mb-2">VR Learning</h3>
        <p className="text-sm">State-of-the-art VR headsets for immersive educational experiences</p>
        <p className="text-xs mt-2 text-blue-200">Continue →</p>
      </FloatingCard>

      <FloatingCard position={[0, 0.8, 0]} visible={step === 2} onClick={nextStep}>
        <h3 className="text-lg font-bold mb-2">Mobile Learning</h3>
        <p className="text-sm">AR applications for tablets and mobile devices extend learning beyond the lab</p>
        <p className="text-xs mt-2 text-blue-200">Continue →</p>
      </FloatingCard>

      <FloatingCard position={[2, 0.8, 0]} visible={step === 3} onClick={nextStep}>
        <h3 className="text-lg font-bold mb-2">Desktop XR</h3>
        <p className="text-sm">Powerful workstations for content creation and advanced simulations</p>
        <p className="text-xs mt-2 text-blue-200">Explore our solutions →</p>
      </FloatingCard>

      <Environment preset="city" />
    </>
  )
}

export default function Metaversity3DHero() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (activeSection !== "hero") {
      // Scroll to the section
      const element = document.getElementById(activeSection)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [activeSection])

  const handleScrollDown = () => {
    setActiveSection("university")
  }

  return (
    <div className="relative h-screen w-full">
      <Canvas className="absolute inset-0">
        <MetaversityLabScene setActiveSection={setActiveSection} />
      </Canvas>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" />

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/30"
          onClick={handleScrollDown}
        >
          <ChevronDown className="h-6 w-6 text-white" />
        </Button>
      </div>

      <motion.div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center text-white max-w-xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Metaversity Labs</h1>
        <p className="text-lg md:text-xl text-white/90">Transforming education through immersive XR technologies</p>
      </motion.div>
    </div>
  )
}

