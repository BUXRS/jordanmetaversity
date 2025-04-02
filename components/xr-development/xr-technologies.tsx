"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function XRTechnologies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const technologies = {
    platforms: [
      { name: "Unity", logo: "/placeholder.svg?height=100&width=100", expertise: 95 },
      { name: "Unreal Engine", logo: "/placeholder.svg?height=100&width=100", expertise: 90 },
      { name: "A-Frame", logo: "/placeholder.svg?height=100&width=100", expertise: 85 },
      { name: "Three.js", logo: "/placeholder.svg?height=100&width=100", expertise: 90 },
      { name: "WebXR", logo: "/placeholder.svg?height=100&width=100", expertise: 85 },
      { name: "ARKit", logo: "/placeholder.svg?height=100&width=100", expertise: 90 },
      { name: "ARCore", logo: "/placeholder.svg?height=100&width=100", expertise: 90 },
      { name: "Vuforia", logo: "/placeholder.svg?height=100&width=100", expertise: 85 },
    ],
    hardware: [
      { name: "Oculus Quest", logo: "/placeholder.svg?height=100&width=100", expertise: 95 },
      { name: "HTC Vive", logo: "/placeholder.svg?height=100&width=100", expertise: 90 },
      { name: "Microsoft HoloLens", logo: "/placeholder.svg?height=100&width=100", expertise: 85 },
      { name: "Magic Leap", logo: "/placeholder.svg?height=100&width=100", expertise: 80 },
      { name: "Apple Vision Pro", logo: "/placeholder.svg?height=100&width=100", expertise: 85 },
      { name: "Pico Neo", logo: "/placeholder.svg?height=100&width=100", expertise: 80 },
      { name: "Varjo XR-3", logo: "/placeholder.svg?height=100&width=100", expertise: 75 },
      { name: "Nreal Light", logo: "/placeholder.svg?height=100&width=100", expertise: 80 },
    ],
    tools: [
      { name: "Blender", logo: "/placeholder.svg?height=100&width=100", expertise: 90 },
      { name: "Maya", logo: "/placeholder.svg?height=100&width=100", expertise: 85 },
      { name: "Substance Painter", logo: "/placeholder.svg?height=100&width=100", expertise: 90 },
      { name: "Photogrammetry", logo: "/placeholder.svg?height=100&width=100", expertise: 85 },
      { name: "ZBrush", logo: "/placeholder.svg?height=100&width=100", expertise: 80 },
      { name: "Adobe Creative Suite", logo: "/placeholder.svg?height=100&width=100", expertise: 95 },
      { name: "Figma", logo: "/placeholder.svg?height=100&width=100", expertise: 90 },
      { name: "Sketch", logo: "/placeholder.svg?height=100&width=100", expertise: 85 },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="py-20" id="technologies" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our XR Technology Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies and platforms to create immersive XR experiences.
          </p>
        </motion.div>

        <Tabs defaultValue="platforms" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="platforms">Development Platforms</TabsTrigger>
              <TabsTrigger value="hardware">Hardware Support</TabsTrigger>
              <TabsTrigger value="tools">Design Tools</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(technologies).map(([category, techs]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              >
                {techs.map((tech, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="bg-card hover:bg-accent transition-colors duration-300 p-6 rounded-lg border border-border flex flex-col items-center text-center">
                      <div className="relative w-16 h-16 mb-4">
                        <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">{tech.name}</h3>

                      <div className="w-full bg-secondary/30 rounded-full h-2 mt-2">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${tech.expertise}%` } : { width: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">Expertise: {tech.expertise}%</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

