"use client"

import { useRef, useState, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, Html } from "@react-three/drei"
import * as THREE from "three"
import ScrollAnimation from "./scroll-animation"

interface Location {
    id: number
    name: string
    country: string
    position: [number, number, number]
    established: number
    team: number
    focus: string
    color: string
}

interface LocationMarkerProps {
    location: Location
    isHovered: boolean
    onHover: (id: number) => void
    onLeave: () => void
}

const locations: Location[] = [
    {
        id: 1,
        name: "Dubai",
        country: "UAE",
        position: [2, 0, 0],
        established: 2018,
        team: 25,
        focus: "Regional HQ & Innovation Hub",
        color: "#3b82f6",
    },
    {
        id: 2,
        name: "Amman",
        country: "Jordan",
        position: [-2, 0, 0],
        established: 2019,
        team: 30,
        focus: "Development & R&D Center",
        color: "#3b82f6",
    },
    {
        id: 3,
        name: "Riyadh",
        country: "KSA",
        position: [0, 0, 2],
        established: 2024,
        team: 15,
        focus: "Saudi Vision 2030 Initiatives",
        color: "#3b82f6",
    },
    {
        id: 4,
        name: "San Francisco",
        country: "USA",
        position: [0, 0, -2],
        established: 2023,
        team: 10,
        focus: "Global Partnerships & Investment",
        color: "#3b82f6",
    },
]

function LocationMarker({ location, isHovered, onHover, onLeave }: LocationMarkerProps) {
    const markerRef = useRef<THREE.Mesh>(null)
    const buildingRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (markerRef.current) {
            // Rotate the marker
            markerRef.current.rotation.y += 0.01

            // Scale effect when hovered
            if (isHovered) {
                markerRef.current.scale.x = THREE.MathUtils.lerp(markerRef.current.scale.x, 1.2, 0.1)
                markerRef.current.scale.y = THREE.MathUtils.lerp(markerRef.current.scale.y, 1.2, 0.1)
                markerRef.current.scale.z = THREE.MathUtils.lerp(markerRef.current.scale.z, 1.2, 0.1)
            } else {
                markerRef.current.scale.x = THREE.MathUtils.lerp(markerRef.current.scale.x, 1, 0.1)
                markerRef.current.scale.y = THREE.MathUtils.lerp(markerRef.current.scale.y, 1, 0.1)
                markerRef.current.scale.z = THREE.MathUtils.lerp(markerRef.current.scale.z, 1, 0.1)
            }
        }

        if (buildingRef.current) {
            // Floating animation for building
            buildingRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05 + 0.2
        }
    })

    return (
        <group position={location.position}>
            {/* Base platform */}
            <mesh position={[0, -0.1, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
                <meshStandardMaterial color={location.color} opacity={0.7} transparent />
            </mesh>

            {/* Building */}
            <mesh
                ref={buildingRef}
                position={[0, 0.2, 0]}
                onPointerOver={() => onHover(location.id)}
                onPointerOut={() => onLeave()}
            >
                <boxGeometry args={[0.15, 0.4, 0.15]} />
                <meshStandardMaterial color={location.color} />
            </mesh>

            {/* Marker */}
            <mesh
                ref={markerRef}
                position={[0, 0.6, 0]}
                onPointerOver={() => onHover(location.id)}
                onPointerOut={() => onLeave()}
            >
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color={location.color} metalness={0.5} roughness={0.2} />
            </mesh>

            {/* Location name */}
            <Text position={[0, -0.3, 0]} fontSize={0.15} color="white" anchorX="center" anchorY="middle">
                {location.name}
            </Text>

            {/* Info popup when hovered */}
            {isHovered && (
                <Html position={[0, 1, 0]} center>
                    <div className="bg-background/90 backdrop-blur-sm p-3 rounded-md shadow-lg border border-primary/20 w-48">
                        <h3 className="font-bold text-sm mb-1">
                            {location.name}, {location.country}
                        </h3>
                        <div className="text-xs space-y-1">
                            <p>
                                <span className="text-muted-foreground">Established:</span> {location.established}
                            </p>
                            <p>
                                <span className="text-muted-foreground">Team Size:</span> {location.team} people
                            </p>
                            <p>
                                <span className="text-muted-foreground">Focus:</span> {location.focus}
                            </p>
                        </div>
                    </div>
                </Html>
            )}
        </group>
    )
}

function Earth() {
    const earthRef = useRef<THREE.Mesh>(null)

    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.001
        }
    })

    return (
        <mesh ref={earthRef}>
            <sphereGeometry args={[3, 32, 32]} />
            <meshStandardMaterial color="#1a365d" metalness={0.1} roughness={0.8} opacity={0.2} transparent wireframe />
        </mesh>
    )
}

function ConnectionLines() {
    // Create connection lines between locations
    const connectionLines = useMemo(() => {
        const lines = []

        for (let i = 0; i < locations.length; i++) {
            for (let j = i + 1; j < locations.length; j++) {
                const points = []
                points.push(new THREE.Vector3(...locations[i].position))
                points.push(new THREE.Vector3(...locations[j].position))

                const geometry = new THREE.BufferGeometry().setFromPoints(points)

                lines.push({
                    key: `${locations[i].id}-${locations[j].id}`,
                    geometry: geometry
                })
            }
        }

        return lines
    }, [])

    return (
        <>
            {connectionLines.map(line => (
                <line key={line.key}>
                    <bufferGeometry attach="geometry" {...line.geometry} />
                    <lineBasicMaterial attach="material" color="#3b82f6" opacity={0.3} transparent />
                </line>
            ))}
        </>
    )
}

function WorldMap() {
    const [hoveredLocation, setHoveredLocation] = useState<number | null>(null)

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            {/* Earth background */}
            <Earth />

            {/* Connection lines between locations */}
            <ConnectionLines />

            {/* Location markers */}
            {locations.map((location) => (
                <LocationMarker
                    key={location.id}
                    location={location}
                    isHovered={hoveredLocation === location.id}
                    onHover={setHoveredLocation}
                    onLeave={() => setHoveredLocation(null)}
                />
            ))}

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

export default function GeographicExpansionMap() {
    return (
        <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="text-3xl font-bold mb-6 text-center">Global Presence</h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Beyond Universe XR Solutions has established a strategic global presence to serve clients across the MENA
                        region and beyond.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollAnimation>
                        <div className="aspect-square relative bg-black/80 rounded-lg overflow-hidden">
                            <Canvas>
                                <WorldMap />
                            </Canvas>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation delay={200}>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Strategic Global Expansion</h3>
                            <p className="text-muted-foreground mb-6">
                                Our global footprint enables us to leverage diverse talent, access emerging markets, and build strategic
                                partnerships with leading institutions and technology providers worldwide.
                            </p>

                            <div className="space-y-6">
                                {locations.map((location) => (
                                    <div key={location.id} className="flex items-start">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                                            <span className="font-bold">{location.established}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">
                                                {location.name}, {location.country}
                                            </h4>
                                            <p className="text-muted-foreground text-sm mb-1">{location.team} team members</p>
                                            <p className="text-sm">
                                                <span className="text-primary font-medium">Focus:</span> {location.focus}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}