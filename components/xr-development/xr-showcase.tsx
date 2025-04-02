"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"

export default function XRShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<null | {
    title: string
    description: string
    type: string
    image: string
    video?: string
  }>(null)

  const projects = [
    {
      title: "Virtual Showroom Experience",
      description:
        "An immersive VR showroom allowing customers to explore and interact with products in a virtual environment.",
      type: "VR",
      image: "/placeholder.svg?height=600&width=800",
      video: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "AR Product Visualization App",
      description: "Mobile AR application that lets users visualize products in their own space before purchasing.",
      type: "AR",
      image: "/placeholder.svg?height=600&width=800",
      video: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Mixed Reality Training Simulator",
      description:
        "MR training solution for industrial equipment operation with interactive 3D guides and real-time feedback.",
      type: "MR",
      image: "/placeholder.svg?height=600&width=800",
      video: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Virtual Campus Tour",
      description:
        "Interactive VR campus tour allowing prospective students to explore facilities and attend virtual information sessions.",
      type: "VR",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "AR Navigation System",
      description: "Indoor AR navigation system for large venues with turn-by-turn directions and points of interest.",
      type: "AR",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Holographic Medical Visualization",
      description: "MR application for medical professionals to visualize and interact with 3D anatomical models.",
      type: "MR",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-secondary/5" id="showcase" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured XR Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of immersive AR, VR, and MR experiences that showcase our expertise in XR development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div
                className="group relative overflow-hidden rounded-lg cursor-pointer h-[300px]"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full mb-2">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
                </div>

                {project.video && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-primary/90 rounded-full p-3">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            View All Projects <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.type} Project</DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                {selectedProject.video ? (
                  <div className="relative aspect-video">
                    <video
                      src={selectedProject.video}
                      controls
                      className="w-full h-full rounded-md"
                      poster={selectedProject.image}
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video">
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                )}

                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">About this project</h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Technologies Used</h4>
                      <p className="text-sm text-muted-foreground">Unity, ARKit, ARCore, WebXR</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Client Industry</h4>
                      <p className="text-sm text-muted-foreground">Retail, Education, Healthcare</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Platform</h4>
                      <p className="text-sm text-muted-foreground">iOS, Android, Web, Oculus</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Completion Date</h4>
                      <p className="text-sm text-muted-foreground">2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

