"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "metaversity-uae",
    title: "UAE University Metaversity",
    description: "A complete virtual campus with interactive learning environments for remote and hybrid education.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Education",
  },
  {
    id: "heritage-museum",
    title: "Digital Heritage Museum",
    description: "Preserving cultural artifacts through 3D scanning and interactive virtual exhibitions.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Cultural",
  },
  {
    id: "corporate-training",
    title: "Immersive Corporate Training",
    description: "VR-based training simulations for a major energy company in Saudi Arabia.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Corporate",
  },
]

export default function FeaturedProjects() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="h-[400px] flex items-center justify-center">
            <p>Loading projects...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        >
          Explore some of our innovative projects that are transforming education and business in the MENA region.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Link
                  href={`/projects/${project.id}`}
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

