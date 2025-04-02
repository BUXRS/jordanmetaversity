"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  project: {
    slug: string
    title: string
    partner: string
    description: string
    image: string
    logo?: string
    category: string
    tags?: string[]
    location: string
    year: string
    users: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`overflow-hidden h-full flex flex-col transition-all duration-300 ${
        isHovered ? "shadow-lg transform -translate-y-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Link href={`/projects/${project.slug}`} className="block overflow-hidden aspect-video">
          <img
            src={project.image || "/placeholder.svg?height=300&width=500"}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
        </Link>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </Badge>
        </div>
        <div className="absolute -bottom-6 left-4">
          <div className="bg-white rounded-lg p-2 h-12 w-12 shadow-md flex items-center justify-center">
            <img
              src={project.logo || "/placeholder.svg?height=40&width=40"}
              alt={project.partner}
              className="max-h-8 max-w-full object-contain"
            />
          </div>
        </div>
      </div>

      <CardContent className="p-6 pt-8 flex-grow flex flex-col">
        <div className="mb-2 text-sm text-muted-foreground">{project.partner}</div>
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">{project.title}</h3>
        </Link>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <Button asChild variant="ghost" className="justify-self-end group">
          <Link href={`/projects/${project.slug}`} className="flex items-center">
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

