"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, School, Building, ChevronRight } from "lucide-react"
import ScrollAnimation from "./scroll-animation"
import Link from "next/link"

interface AudienceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  benefits: string[]
  cta: string
  href: string
  color: string
}

const audiences: AudienceCardProps[] = [
  {
    title: "Students",
    description: "Access a vast library of 3D models to enhance your learning experience across disciplines.",
    icon: <GraduationCap className="h-8 w-8" />,
    benefits: [
      "Interact with rare artifacts and specimens that would otherwise be inaccessible",
      "Enhance understanding of complex 3D concepts through hands-on virtual exploration",
      "Use 3D models in projects, presentations, and research",
      "Learn 3D scanning techniques through our educational programs",
    ],
    cta: "Explore Student Resources",
    href: "/contact",
    color: "#3b82f6",
  },
  {
    title: "Teachers",
    description: "Transform your teaching with interactive 3D models that bring subjects to life.",
    icon: <School className="h-8 w-8" />,
    benefits: [
      "Incorporate 3D models into lesson plans across subjects",
      "Create engaging, interactive learning experiences",
      "Access educational resources and teaching guides",
      "Participate in professional development workshops on 3D technologies",
    ],
    cta: "Discover Teaching Tools",
    href: "/contact",
    color: "#8b5cf6",
  },
  {
    title: "Universities",
    description: "Partner with us to contribute to and benefit from the world's largest academic 3D asset library.",
    icon: <Building className="h-8 w-8" />,
    benefits: [
      "Establish a 3D scanning center on your campus",
      "Digitize your institution's collections and artifacts",
      "Provide students and faculty with access to our complete 3D library",
      "Participate in collaborative research and preservation projects",
    ],
    cta: "Explore Partnership Opportunities",
    href: "/contact",
    color: "#10b981",
  },
]

function AudienceCard({
  audience,
  isActive,
  onClick,
}: { audience: AudienceCardProps; isActive: boolean; onClick: () => void }) {
  return (
    <Card
      className={`cursor-pointer transition-all duration-300 ${
        isActive ? "border-primary/50 shadow-lg" : "hover:border-primary/30"
      }`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
            style={{ backgroundColor: `${audience.color}20`, color: audience.color }}
          >
            {audience.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
            <p className="text-muted-foreground">{audience.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TargetAudience() {
  const [activeAudience, setActiveAudience] = useState(0)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-6 text-center">Who Can Benefit</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Scan 4 3D is designed to serve a diverse range of educational users, from individual students to major
            universities.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {audiences.map((audience, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <AudienceCard
                audience={audience}
                isActive={activeAudience === index}
                onClick={() => setActiveAudience(index)}
              />
            </ScrollAnimation>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeAudience}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden" style={{ borderColor: `${audiences[activeAudience].color}40` }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: audiences[activeAudience].color }}>
                    {audiences[activeAudience].title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{audiences[activeAudience].description}</p>

                  <h4 className="font-bold mb-4">Key Benefits:</h4>
                  <ul className="space-y-3 mb-6">
                    {audiences[activeAudience].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild>
                    <Link href={audiences[activeAudience].href}>{audiences[activeAudience].cta}</Link>
                  </Button>
                </div>

                <div
                  className="aspect-video flex items-center justify-center"
                  style={{ backgroundColor: `${audiences[activeAudience].color}10` }}
                >
                  <div className="text-center p-6">
                    <div
                      className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: `${audiences[activeAudience].color}20`,
                        color: audiences[activeAudience].color,
                      }}
                    >
                      {audiences[activeAudience].icon}
                    </div>
                    <p className="text-muted-foreground">Interactive demonstration coming soon</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

