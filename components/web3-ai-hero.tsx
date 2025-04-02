"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Text, Float } from "@react-three/drei"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import * as THREE from "three"

function Web3Node({ position = [0, 0, 0], color = "#3b82f6", pulsate = true, size = 0.2 }) {
  const nodeRef = useRef()

  useFrame(({ clock }) => {
    if (nodeRef.current && pulsate) {
      // Pulsate effect
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.1
      nodeRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <mesh ref={nodeRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.2} metalness={0.8} />
    </mesh>
  )
}

function ConnectionLine({ start, end, color = "#3b82f6", opacity = 0.5 }) {
  const lineRef = useRef()

  useFrame(({ clock }) => {
    if (lineRef.current) {
      // Pulse the opacity
      lineRef.current.material.opacity = (Math.sin(clock.getElapsedTime() * 2) * 0.2 + 0.8) * opacity
    }
  })

  return (
    <line ref={lineRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          array={new Float32Array([...start, ...end])}
          count={2}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color={color} transparent opacity={opacity} />
    </line>
  )
}

function AIBrain({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const brainRef = useRef()

  useFrame(({ clock }) => {
    if (brainRef.current) {
      // Gentle rotation
      brainRef.current.rotation.y = clock.getElapsedTime() * 0.2
    }
  })

  // Create a simplified brain-like structure
  return (
    <group ref={brainRef} position={position} scale={scale} rotation={rotation}>
      {/* Central sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Neural connections */}
      {Array.from({ length: 20 }).map((_, i) => {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI
        const r = 0.5 + Math.random() * 0.3

        const x = r * Math.sin(phi) * Math.cos(theta)
        const y = r * Math.sin(phi) * Math.sin(theta)
        const z = r * Math.cos(phi)

        return (
          <Web3Node
            key={i}
            position={[x, y, z]}
            color="#8b5cf6"
            pulsate={Math.random() > 0.5}
            size={0.05 + Math.random() * 0.05}
          />
        )
      })}

      {/* Neural pathways */}
      {Array.from({ length: 30 }).map((_, i) => {
        const theta1 = Math.random() * Math.PI * 2
        const phi1 = Math.random() * Math.PI
        const r1 = 0.5 + Math.random() * 0.3

        const x1 = r1 * Math.sin(phi1) * Math.cos(theta1)
        const y1 = r1 * Math.sin(phi1) * Math.sin(theta1)
        const z1 = r1 * Math.cos(phi1)

        const theta2 = Math.random() * Math.PI * 2
        const phi2 = Math.random() * Math.PI
        const r2 = 0.5 + Math.random() * 0.3

        const x2 = r2 * Math.sin(phi2) * Math.cos(theta2)
        const y2 = r2 * Math.sin(phi2) * Math.sin(theta2)
        const z2 = r2 * Math.cos(phi2)

        return (
          <ConnectionLine
            key={i}
            start={[x1, y1, z1]}
            end={[x2, y2, z2]}
            color="#8b5cf6"
            opacity={0.3 + Math.random() * 0.3}
          />
        )
      })}
    </group>
  )
}

function BlockchainNetwork({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const networkRef = useRef()

  useFrame(({ clock }) => {
    if (networkRef.current) {
      // Gentle rotation
      networkRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  // Create a network of nodes representing a blockchain
  const nodes = []
  const connections = []

  // Create nodes in a structured pattern
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      const x = (i - 2) * 0.6
      const y = (j - 1) * 0.6
      const z = 0

      nodes.push({ id: i * 3 + j, position: [x, y, z] })
    }
  }

  // Create connections between nodes
  for (let i = 0; i < nodes.length; i++) {
    // Connect to next node in chain
    if (i < nodes.length - 1) {
      connections.push({
        id: `${i}-${i + 1}`,
        start: nodes[i].position,
        end: nodes[i + 1].position,
      })
    }

    // Add some cross connections for a more network-like appearance
    if (i % 3 !== 2 && i + 3 < nodes.length) {
      connections.push({
        id: `${i}-${i + 3}`,
        start: nodes[i].position,
        end: nodes[i + 3].position,
      })
    }
  }

  return (
    <group ref={networkRef} position={position} scale={scale} rotation={rotation}>
      {nodes.map((node) => (
        <Web3Node key={node.id} position={node.position} color="#3b82f6" pulsate={node.id % 3 === 0} />
      ))}

      {connections.map((connection) => (
        <ConnectionLine key={connection.id} start={connection.start} end={connection.end} color="#3b82f6" />
      ))}
    </group>
  )
}

function Web3AIScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Background sphere */}
      <mesh>
        <sphereGeometry args={[15, 32, 32]} />
        <meshStandardMaterial color="#111827" side={THREE.BackSide} />
      </mesh>

      {/* Blockchain network on the left */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <BlockchainNetwork position={[-2.5, 0, 0]} scale={1} />
      </Float>

      {/* AI brain on the right */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.7}>
        <AIBrain position={[2.5, 0, 0]} scale={1} />
      </Float>

      {/* Connection between Web3 and AI */}
      <ConnectionLine start={[-1.5, 0, 0]} end={[1.5, 0, 0]} color="#10b981" opacity={0.7} />
      <Web3Node position={[0, 0, 0]} color="#10b981" size={0.3} />

      {/* Text elements */}
      <Text
        position={[-2.5, 1.5, 0]}
        fontSize={0.4}
        color="#3b82f6"
        font="/fonts/Geist-Bold.ttf"
        anchorX="center"
        anchorY="middle"
      >
        Web3
      </Text>

      <Text
        position={[2.5, 1.5, 0]}
        fontSize={0.4}
        color="#8b5cf6"
        font="/fonts/Geist-Bold.ttf"
        anchorX="center"
        anchorY="middle"
      >
        AI
      </Text>

      <Text
        position={[0, -1.5, 0]}
        fontSize={0.3}
        color="#10b981"
        font="/fonts/Geist-Bold.ttf"
        anchorX="center"
        anchorY="middle"
      >
        Integrated Solutions
      </Text>

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

export default function Web3AIHero() {
  const [scrolled, setScrolled] = useState(false)

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

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-screen w-full">
      <Canvas className="absolute inset-0">
        <Web3AIScene />
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Web3 & AI Services</h1>
        <p className="text-lg md:text-xl text-white/90">
          Cutting-edge blockchain solutions and artificial intelligence integration for the future of business
        </p>
      </motion.div>
    </div>
  )
}

