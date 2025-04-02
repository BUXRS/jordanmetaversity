"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text, Html } from "@react-three/drei"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import * as THREE from "three"

function Model3D({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0], color = "#3b82f6" }) {
  return (
    <group position={position} scale={scale} rotation={rotation}>
      {/* Base */}
      <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1, 1.2, 0.2, 32]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} envMapIntensity={1} />
      </mesh>

      {/* Base details */}
      <mesh position={[0, -0.4, 0]} receiveShadow>
        <torusGeometry args={[0.9, 0.05, 16, 32]} />
        <meshStandardMaterial color="#444444" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Center column */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.25, 1, 16]} />
        <meshStandardMaterial color="#555555" metalness={0.6} roughness={0.4} envMapIntensity={0.8} />
      </mesh>

      {/* Column details */}
      <mesh position={[0, 0.2, 0]}>
        <torusGeometry args={[0.22, 0.03, 16, 32]} />
        <meshStandardMaterial color="#666666" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Scanning arm */}
      <mesh position={[0, 0.3, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <capsuleGeometry args={[0.04, 1.9, 8, 16]} />
        <meshStandardMaterial color="#777777" metalness={0.7} roughness={0.3} envMapIntensity={0.9} />
      </mesh>

      {/* Arm joints */}
      <mesh position={[0.95, 0.3, 0]} castShadow>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Scanner head */}
      <group position={[1.1, 0.3, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.3, 0.2, 0.2]} />
          <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.2} envMapIntensity={1} />
        </mesh>

        {/* Scanner details */}
        <mesh position={[0, 0.1, 0]} castShadow>
          <boxGeometry args={[0.25, 0.05, 0.15]} />
          <meshStandardMaterial color="#333333" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Scanner lens */}
        <mesh position={[0, 0, 0.11]} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.02, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.1} envMapIntensity={1.2} />
        </mesh>

        {/* Scanner light */}
        <mesh position={[0, 0, 0.12]}>
          <cylinderGeometry args={[0.05, 0.05, 0.01, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={3} toneMapped={false} />
        </mesh>

        {/* Small indicator lights */}
        <mesh position={[0.12, 0, 0.11]}>
          <boxGeometry args={[0.02, 0.02, 0.01]} />
          <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} toneMapped={false} />
        </mesh>

        <mesh position={[-0.12, 0, 0.11]}>
          <boxGeometry args={[0.02, 0.02, 0.01]} />
          <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={2} toneMapped={false} />
        </mesh>
      </group>
    </group>
  )
}

function ArtifactModel({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  // Create texture once during initialization
  const [normalMap] = useState(() => {
    const texture = new THREE.TextureLoader().load("/placeholder.svg?height=512&width=512")
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(2, 2)
    return texture
  })

  return (
    <group position={position} scale={scale} rotation={rotation}>
      {/* Main vase body */}
      <mesh castShadow receiveShadow>
        <latheGeometry
          args={[
            [
              new THREE.Vector2(0, -0.5),
              new THREE.Vector2(0.1, -0.5),
              new THREE.Vector2(0.15, -0.4),
              new THREE.Vector2(0.5, -0.3),
              new THREE.Vector2(0.35, 0),
              new THREE.Vector2(0.3, 0.3),
              new THREE.Vector2(0.4, 0.5),
              new THREE.Vector2(0.1, 0.6),
              new THREE.Vector2(0, 0.6),
            ],
            32,
            0,
            Math.PI * 2,
          ]}
        />
        <meshStandardMaterial
          color="#d4a373"
          metalness={0.1}
          roughness={0.7}
          normalMap={normalMap}
          normalScale={new THREE.Vector2(0.5, 0.5)}
          envMapIntensity={0.8}
        />
      </mesh>

      {/* Decorative patterns */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <torusGeometry args={[0.32, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#b08968"
          metalness={0.4}
          roughness={0.6}
          normalMap={normalMap}
          normalScale={new THREE.Vector2(1, 1)}
        />
      </mesh>

      <mesh position={[0, -0.1, 0]} castShadow>
        <torusGeometry args={[0.38, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#b08968"
          metalness={0.4}
          roughness={0.6}
          normalMap={normalMap}
          normalScale={new THREE.Vector2(1, 1)}
        />
      </mesh>

      {/* Ancient patterns - small bumps around the vase */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh
          key={i}
          position={[0.33 * Math.cos((i * Math.PI) / 6), 0.3, 0.33 * Math.sin((i * Math.PI) / 6)]}
          castShadow
        >
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#c8a080" metalness={0.3} roughness={0.7} />
        </mesh>
      ))}
    </group>
  )
}

function ScanningBeam({ position = [0, 0, 0], targetPosition = [0, 0, 0] }) {
  const beamRef = useRef()
  const [beamPoints] = useState(() => {
    // Initialize points once during component mount
    const points = []
    points.push(new THREE.Vector3(position[0], position[1], position[2]))
    points.push(
      new THREE.Vector3(
        (position[0] + targetPosition[0]) / 2,
        (position[1] + targetPosition[1]) / 2 + 0.05,
        (position[2] + targetPosition[2]) / 2,
      ),
    )
    points.push(new THREE.Vector3(targetPosition[0], targetPosition[1], targetPosition[2]))
    return points
  })

  // Create geometry once during initialization
  const [geometry] = useState(() => {
    const curve = new THREE.CatmullRomCurve3(beamPoints)
    return new THREE.BufferGeometry().setFromPoints(curve.getPoints(20))
  })

  useFrame(({ clock }) => {
    if (beamRef.current) {
      // Pulse the opacity of the beam
      const time = clock.getElapsedTime()
      beamRef.current.material.opacity = (Math.sin(time * 5) + 1) / 4 + 0.4

      // Add some subtle movement to the beam without recreating geometry
      const midPoint = beamPoints[1]
      midPoint.y = (position[1] + targetPosition[1]) / 2 + 0.05 + Math.sin(time * 3) * 0.02

      const curve = new THREE.CatmullRomCurve3(beamPoints)
      const points = curve.getPoints(20)
      beamRef.current.geometry.setFromPoints(points)
    }
  })

  return (
    <>
      <line ref={beamRef}>
        <bufferGeometry attach="geometry" {...geometry} />
        <lineBasicMaterial attach="material" color="#4f9fff" transparent opacity={0.7} linewidth={1} />
      </line>

      {/* Add a glow effect */}
      <mesh position={position}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color="#4f9fff" transparent opacity={0.7} />
      </mesh>

      <mesh position={targetPosition}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#4f9fff" transparent opacity={0.5} />
      </mesh>
    </>
  )
}

function PointCloud({ position = [0, 0, 0], count = 1000, radius = 0.5 }) {
  const pointsRef = useRef()

  // Create points and geometry once during initialization
  const [pointsGeometry] = useState(() => {
    const points = []
    const colors = []

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const r = Math.random() * radius

      // Create a more realistic distribution - denser near the surface
      const adjustedR = Math.pow(r, 1.5) * radius

      const x = position[0] + adjustedR * Math.sin(phi) * Math.cos(theta)
      const y = position[1] + adjustedR * Math.sin(phi) * Math.sin(theta)
      const z = position[2] + adjustedR * Math.cos(phi)

      points.push(new THREE.Vector3(x, y, z))

      // Vary the colors slightly for more realism
      const intensity = 0.5 + Math.random() * 0.5
      const color = new THREE.Color(0.2 * intensity, 0.5 * intensity, 1.0 * intensity)
      colors.push(color.r, color.g, color.b)
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))
    return geometry
  })

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      // Rotate the point cloud slowly with some wobble
      const time = clock.getElapsedTime()
      pointsRef.current.rotation.y = time * 0.1
      pointsRef.current.rotation.x = Math.sin(time * 0.2) * 0.05

      // Pulse the size of the points slightly
      pointsRef.current.material.size = 0.01 + Math.sin(time * 2) * 0.002
    }
  })

  return (
    <points ref={pointsRef} position={position}>
      <bufferGeometry attach="geometry" {...pointsGeometry} />
      <pointsMaterial
        attach="material"
        vertexColors
        size={0.01}
        sizeAttenuation
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  )
}

function ScanningScene() {
  const [scanProgress, setScanProgress] = useState(0)
  const [showPointCloud, setShowPointCloud] = useState(false)
  const [showModel, setShowModel] = useState(false)
  const scannerRef = useRef()

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    if (scannerRef.current) {
      // Rotate the scanner arm around the artifact with a slight wobble
      scannerRef.current.rotation.y = time * 0.5
      scannerRef.current.rotation.x = Math.sin(time * 0.7) * 0.03
    }

    // Update scan progress - use modulo to cycle between 0-1
    const progress = (time % 10) / 10
    setScanProgress(progress)

    // Show point cloud after 3 seconds of the cycle
    const shouldShowPointCloud = progress > 0.3
    if (shouldShowPointCloud !== showPointCloud) {
      setShowPointCloud(shouldShowPointCloud)
    }

    // Show 3D model after 7 seconds of the cycle
    const shouldShowModel = progress > 0.7
    if (shouldShowModel !== showModel) {
      setShowModel(shouldShowModel)
    }
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={0.8}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 3, -5]} intensity={0.5} />
      <pointLight position={[1.65, -0.35, 0.11]} intensity={0.5} color="#4f9fff" distance={3} />

      {/* Scanning platform */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <cylinderGeometry args={[2, 2, 0.1, 32]} />
        <meshStandardMaterial color="#1a365d" />
      </mesh>

      {/* Artifact being scanned */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
        <ArtifactModel position={[0, -0.5, 0]} scale={0.8} />
      </Float>

      {/* Scanner */}
      <group ref={scannerRef}>
        <Model3D position={[1.5, -0.5, 0]} scale={0.5} />

        {/* Scanning beam */}
        <ScanningBeam position={[1.65, -0.35, 0.11]} targetPosition={[0, -0.5, 0]} />
      </group>

      {/* Point cloud representation */}
      {showPointCloud && <PointCloud position={[0, -0.5, 0]} count={2000} radius={0.6} />}

      {/* 3D model representation */}
      {showModel && (
        <Html position={[0, 1, 0]}>
          <div className="bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-primary/20 shadow-lg">
            <h3 className="text-sm font-bold mb-1">3D Model Generated</h3>
            <div className="flex items-center gap-2">
              <div className="w-full bg-secondary h-2 rounded-full">
                <div className="bg-primary h-2 rounded-full" style={{ width: `${scanProgress * 100}%` }}></div>
              </div>
              <span className="text-xs">{Math.floor(scanProgress * 100)}%</span>
            </div>
          </div>
        </Html>
      )}

      {/* Text elements */}
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.5}
        color="white"
        font="/fonts/Geist-Bold.ttf"
        anchorX="center"
        anchorY="middle"
      >
        Scan 4 3D
      </Text>

      <Text
        position={[0, 1, 0]}
        fontSize={0.2}
        color="white"
        font="/fonts/Geist-Regular.ttf"
        anchorX="center"
        anchorY="middle"
      >
        Building the world's largest academic 3D asset library
      </Text>

      <Environment preset="city" background={false} blur={0.8} />
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

export default function Scan3DHero() {
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

  // Add post-processing effects
  const [hasSSR, setHasSSR] = useState(false)

  useEffect(() => {
    // Check if we're running on the client side
    setHasSSR(true)
  }, [])

  return (
    <div className="relative h-screen w-full">
      <Canvas
        className="absolute inset-0"
        shadows
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
      >
        {hasSSR && (
          <>
            <ScanningScene />
            <fog attach="fog" args={["#000", 4, 20]} />
          </>
        )}
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Scan 4 3D</h1>
        <p className="text-lg md:text-xl text-white/90">Building the world's largest academic 3D asset library</p>
      </motion.div>
    </div>
  )
}

