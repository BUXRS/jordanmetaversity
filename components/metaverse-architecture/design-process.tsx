"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, PenTool, Layers, Code, CheckCircle, Repeat } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

const processSteps = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Discovery & Concept",
    description:
      "We begin by understanding your vision, goals, and requirements for the virtual space. Our team develops initial concepts and ideas based on your needs.",
    details: [
      "Client consultation and requirement gathering",
      "Market and platform research",
      "Concept development and ideation",
      "Initial sketches and mood boards",
    ],
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Design & Visualization",
    description:
      "Our designers create detailed 3D models and visualizations of the space, focusing on aesthetics, functionality, and user experience.",
    details: [
      "3D modeling and spatial design",
      "Material and texture selection",
      "Lighting design and atmosphere creation",
      "User experience mapping",
    ],
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Development & Integration",
    description:
      "We transform designs into functional metaverse environments, integrating interactive elements and optimizing for performance.",
    details: [
      "3D asset optimization for platforms",
      "Interactive element programming",
      "Navigation system implementation",
      "Cross-platform compatibility testing",
    ],
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Technical Implementation",
    description:
      "Our developers bring the design to life with code, ensuring smooth functionality across all targeted platforms and devices.",
    details: [
      "Platform-specific development",
      "Backend integration where needed",
      "Performance optimization",
      "Security implementation",
    ],
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Testing & Refinement",
    description:
      "We rigorously test the environment for usability, performance, and bugs, making refinements based on feedback and testing results.",
    details: [
      "User experience testing",
      "Performance benchmarking",
      "Bug identification and fixing",
      "Client review and feedback implementation",
    ],
  },
  {
    icon: <Repeat className="h-6 w-6" />,
    title: "Deployment & Support",
    description:
      "We deploy your metaverse environment and provide ongoing support, updates, and maintenance to ensure long-term success.",
    details: [
      "Platform deployment and launch",
      "User onboarding and training",
      "Analytics implementation",
      "Ongoing maintenance and updates",
    ],
  },
]

export default function DesignProcess() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Design Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a comprehensive, client-centered approach to create metaverse architectural experiences that
              exceed expectations.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-4 sticky top-24">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeStep === index ? "border-primary bg-primary/5" : "hover:border-primary/50"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <CardContent className="p-4 flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                        activeStep === index ? "bg-primary text-white" : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{step.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <ScrollAnimation>
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      {processSteps[activeStep].icon}
                    </div>
                    <h3 className="text-2xl font-bold">{processSteps[activeStep].title}</h3>
                  </div>

                  <p className="text-lg mb-6">{processSteps[activeStep].description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {processSteps[activeStep].details.map((detail, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 aspect-video relative rounded-lg overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=400&width=800&text=Step ${activeStep + 1}: ${processSteps[activeStep].title}`}
                      alt={processSteps[activeStep].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

