"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList, Code, CheckCircle, BarChart, Rocket, ArrowRight } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

interface ProcessStep {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Requirements",
    description:
      "We begin with a thorough consultation to understand your business goals, technical requirements, and desired outcomes for your Web3 or AI implementation.",
    icon: <ClipboardList className="h-8 w-8" />,
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Design & Development",
    description:
      "Our expert team designs and develops custom solutions tailored to your specific needs, whether it's smart contracts, NFT platforms, or AI integrations.",
    icon: <Code className="h-8 w-8" />,
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "Testing & Validation",
    description:
      "Rigorous testing and validation ensure your solution is secure, efficient, and ready for deployment, with all potential issues identified and resolved.",
    icon: <CheckCircle className="h-8 w-8" />,
    color: "#10b981",
  },
  {
    id: 4,
    title: "Deployment & Monitoring",
    description:
      "We handle the deployment process and implement monitoring systems to track performance, usage, and other key metrics for your solution.",
    icon: <BarChart className="h-8 w-8" />,
    color: "#f59e0b",
  },
  {
    id: 5,
    title: "Ongoing Support & Optimization",
    description:
      "Our relationship continues with ongoing support, maintenance, and optimization to ensure your Web3 or AI solution evolves with your business needs.",
    icon: <Rocket className="h-8 w-8" />,
    color: "#ec4899",
  },
]

export default function ImplementationProcess() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Implementation Process</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            A structured, transparent approach to delivering successful Web3 and AI solutions.
          </p>
        </ScrollAnimation>

        <div className="relative mb-12">
          <div className="hidden md:block h-1 bg-secondary absolute top-12 left-0 right-0 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <button
                  className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === step.id ? "scale-110 shadow-lg" : "bg-secondary hover:bg-secondary/80"
                  }`}
                  style={activeStep === step.id ? { backgroundColor: `${step.color}20`, color: step.color } : {}}
                  onClick={() => setActiveStep(step.id)}
                >
                  {step.icon}
                </button>
                <h3
                  className={`mt-4 text-center text-sm font-medium ${
                    activeStep === step.id ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {processSteps.map(
            (step) =>
              activeStep === step.id && (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card style={{ borderColor: `${step.color}30` }}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                          style={{ backgroundColor: `${step.color}20`, color: step.color }}
                        >
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold" style={{ color: step.color }}>
                            Step {step.id}: {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">{step.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StepDetail step={step.id} />
                      </div>

                      <div className="flex justify-between mt-6">
                        <button
                          className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setActiveStep(step.id > 1 ? step.id - 1 : processSteps.length)}
                          aria-label="Previous step"
                        >
                          <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
                          Previous Step
                        </button>

                        <button
                          className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setActiveStep(step.id < processSteps.length ? step.id + 1 : 1)}
                          aria-label="Next step"
                        >
                          Next Step
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function StepDetail({ step }: { step: number }) {
  // Additional details for each step
  const stepDetails = {
    1: [
      {
        title: "Needs Assessment",
        description: "Comprehensive analysis of your current systems and future requirements.",
      },
      {
        title: "Stakeholder Workshops",
        description: "Collaborative sessions with key stakeholders to align on objectives.",
      },
      {
        title: "Technical Feasibility",
        description: "Evaluation of technical constraints and opportunities for implementation.",
      },
    ],
    2: [
      {
        title: "Architecture Design",
        description: "Creating the blueprint for your Web3 or AI solution.",
      },
      {
        title: "Iterative Development",
        description: "Agile development process with regular feedback and adjustments.",
      },
      {
        title: "Integration Planning",
        description: "Strategies for seamless integration with existing systems.",
      },
    ],
    3: [
      {
        title: "Security Audits",
        description: "Thorough security testing to identify and address vulnerabilities.",
      },
      {
        title: "Performance Testing",
        description: "Ensuring optimal performance under various conditions and loads.",
      },
      {
        title: "User Acceptance Testing",
        description: "Validation with end-users to ensure the solution meets their needs.",
      },
    ],
    4: [
      {
        title: "Deployment Strategy",
        description: "Carefully planned rollout to minimize disruption and maximize adoption.",
      },
      {
        title: "Analytics Setup",
        description: "Implementation of monitoring tools to track key performance indicators.",
      },
      {
        title: "Training & Documentation",
        description: "Comprehensive training and documentation for your team.",
      },
    ],
    5: [
      {
        title: "Ongoing Maintenance",
        description: "Regular updates and maintenance to ensure continued performance.",
      },
      {
        title: "Performance Optimization",
        description: "Continuous improvement based on usage data and feedback.",
      },
      {
        title: "Strategic Consulting",
        description: "Ongoing advice on leveraging your solution for maximum business impact.",
      },
    ],
  }

  const details = stepDetails[step as keyof typeof stepDetails]

  return (
    <>
      {details.map((detail, index) => (
        <Card key={index} className="bg-secondary/50 border-none">
          <CardContent className="p-4">
            <h4 className="font-bold mb-2">{detail.title}</h4>
            <p className="text-sm text-muted-foreground">{detail.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

