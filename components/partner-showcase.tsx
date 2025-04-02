"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

interface Partner {
  id: number
  name: string
  logo: string
  country: string
  projectTitle: string
  description: string
  results: string[]
  testimonial?: {
    quote: string
    author: string
    title: string
  }
}

const partners: Partner[] = [
  {
    id: 1,
    name: "University of Jordan",
    logo: "/placeholder.svg?height=100&width=200",
    country: "Jordan",
    projectTitle: "Engineering Metaverse Lab",
    description:
      "Implemented a comprehensive XR lab for the Faculty of Engineering, enabling students to conduct virtual experiments and visualize complex engineering concepts in 3D space.",
    results: [
      "5,000+ students trained annually",
      "30% improvement in student comprehension of complex topics",
      "12 new courses developed utilizing XR technology",
    ],
    testimonial: {
      quote:
        "The Metaversity Lab has revolutionized how we teach engineering concepts. Students can now visualize and interact with complex systems in ways that were impossible before.",
      author: "Dr. Ahmad Khalid",
      title: "Dean of Engineering, University of Jordan",
    },
  },
  {
    id: 2,
    name: "RAK Medical University",
    logo: "/placeholder.svg?height=100&width=200",
    country: "UAE",
    projectTitle: "Medical XR Training Center",
    description:
      "Developed a state-of-the-art medical simulation lab allowing students to practice procedures in virtual reality before working with real patients, significantly enhancing practical training capabilities.",
    results: [
      "800+ medical students trained in virtual procedures",
      "40% reduction in training time for basic procedures",
      "Virtual access to rare medical cases and scenarios",
    ],
    testimonial: {
      quote:
        "The ability to practice complex procedures in VR has been transformative for our medical education program. Students gain confidence and proficiency before ever touching a real patient.",
      author: "Dr. Sarah Al-Maktoum",
      title: "Head of Medical Education, RAK Medical University",
    },
  },
  {
    id: 3,
    name: "JODDB",
    logo: "/placeholder.svg?height=100&width=200",
    country: "Jordan",
    projectTitle: "Defense Training Simulations",
    description:
      "Created immersive training environments for defense personnel, allowing for realistic scenario practice without the logistical challenges and costs of traditional training exercises.",
    results: [
      "1,200+ personnel trained in virtual environments",
      "35% cost reduction compared to traditional training methods",
      "Ability to simulate high-risk scenarios safely",
    ],
    testimonial: {
      quote:
        "The XR training solutions have allowed us to conduct complex training operations that would be logistically challenging and expensive in the real world. The realism and interactivity are exceptional.",
      author: "Colonel Mahmoud Rashid",
      title: "Training Director, JODDB",
    },
  },
  {
    id: 4,
    name: "King Saud University",
    logo: "/placeholder.svg?height=100&width=200",
    country: "KSA",
    projectTitle: "Architecture Visualization Lab",
    description:
      "Implemented an XR lab for the School of Architecture, enabling students to design, visualize, and walk through their architectural creations in immersive 3D environments.",
    results: [
      "3,000+ architecture students utilizing XR design tools",
      "25% improvement in spatial design understanding",
      "Integration with industry-standard CAD software",
    ],
    testimonial: {
      quote:
        "Our students now think differently about space and design. Being able to walk through their creations in VR has fundamentally changed how they approach architectural problems.",
      author: "Dr. Fatima Al-Saud",
      title: "Chair of Architecture Department, King Saud University",
    },
  },
]

export default function PartnerShowcase() {
  const [activePartner, setActivePartner] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextPartner = () => {
    setDirection(1)
    setActivePartner((prev) => (prev === partners.length - 1 ? 0 : prev + 1))
  }

  const prevPartner = () => {
    setDirection(-1)
    setActivePartner((prev) => (prev === 0 ? partners.length - 1 : prev - 1))
  }

  const partner = partners[activePartner]

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Partners</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Discover how leading educational institutions across the MENA region are transforming learning with our
            Metaversity Labs solutions.
          </p>
        </ScrollAnimation>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPartner}
              className="rounded-full bg-background/80 backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={nextPartner}
              className="rounded-full bg-background/80 backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Partner logos */}
          <div className="flex justify-center mb-8 space-x-4">
            {partners.map((p, index) => (
              <button
                key={p.id}
                onClick={() => {
                  setDirection(index > activePartner ? 1 : -1)
                  setActivePartner(index)
                }}
                className={`p-2 rounded-lg transition-all ${
                  index === activePartner ? "bg-primary/20 scale-110" : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                <img src={p.logo || "/placeholder.svg"} alt={p.name} className="h-12 w-24 object-contain" />
              </button>
            ))}
          </div>

          {/* Partner details */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={partner.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold">{partner.name}</h3>
                    <span className="ml-2 px-3 py-1 bg-secondary text-xs rounded-full">{partner.country}</span>
                  </div>

                  <h4 className="text-xl font-medium text-primary mb-4">{partner.projectTitle}</h4>

                  <p className="text-muted-foreground mb-6">{partner.description}</p>

                  <h5 className="font-bold mb-3">Key Results:</h5>
                  <ul className="space-y-2 mb-6">
                    {partner.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0 text-xs">
                          {index + 1}
                        </span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 p-8 flex flex-col justify-between">
                  <div className="aspect-video bg-secondary rounded-lg mb-6">
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-muted-foreground">Project Showcase Video</p>
                    </div>
                  </div>

                  {partner.testimonial && (
                    <Card className="bg-background/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <blockquote className="text-muted-foreground italic mb-4">
                          "{partner.testimonial.quote}"
                        </blockquote>
                        <div>
                          <p className="font-medium">{partner.testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{partner.testimonial.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {partners.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${index === activePartner ? "bg-primary" : "bg-secondary"}`}
                onClick={() => {
                  setDirection(index > activePartner ? 1 : -1)
                  setActivePartner(index)
                }}
                aria-label={`View partner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

