"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Lightbulb, Code2, Layers, Paintbrush, Wrench, Rocket, CheckCircle2 } from "lucide-react"

export default function XRProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Discovery & Concept",
      description:
        "We work with you to understand your goals, target audience, and requirements to develop a clear concept for your XR experience.",
      details: [
        "Requirements gathering",
        "User research",
        "Concept development",
        "Technical feasibility assessment",
        "Project scope definition",
      ],
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Design & Storyboarding",
      description:
        "Our designers create detailed wireframes, UI/UX designs, and storyboards to visualize the XR experience before development begins.",
      details: [
        "User experience design",
        "Interface wireframing",
        "3D asset planning",
        "Interaction design",
        "Visual storyboarding",
      ],
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "3D Modeling & Asset Creation",
      description: "We develop high-quality 3D models, environments, and assets that will populate your XR experience.",
      details: ["3D modeling", "Texturing", "Animation", "Environment design", "Asset optimization"],
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Development & Programming",
      description:
        "Our developers build the XR application using industry-leading tools and frameworks, implementing all planned features and interactions.",
      details: [
        "Core functionality development",
        "Integration with platforms",
        "Backend development",
        "API integrations",
        "Performance optimization",
      ],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Testing & Refinement",
      description:
        "We rigorously test the XR experience across target devices to ensure optimal performance, usability, and bug-free operation.",
      details: [
        "Functionality testing",
        "User experience testing",
        "Performance optimization",
        "Cross-device compatibility",
        "Iterative refinement",
      ],
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Deployment & Launch",
      description:
        "We handle the deployment of your XR application to the appropriate platforms and provide launch support.",
      details: [
        "Platform submission",
        "Distribution setup",
        "Launch strategy",
        "Marketing support",
        "Analytics implementation",
      ],
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "Maintenance & Updates",
      description:
        "We provide ongoing support, maintenance, and updates to ensure your XR experience continues to perform optimally.",
      details: ["Bug fixes", "Performance monitoring", "Feature enhancements", "Platform updates", "Content additions"],
    },
  ]

  return (
    <section className="py-20" id="process" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our XR Development Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a structured approach to deliver high-quality XR experiences that meet your business objectives.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div
                      className={`bg-card p-6 rounded-lg shadow-md border border-border ${activeStep === index ? "border-primary" : ""}`}
                    >
                      <h3 className="text-xl font-bold mb-2 flex items-center">
                        <span className="inline-block mr-2 text-primary">{index + 1}.</span> {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>

                      <ul className={`space-y-1 text-sm ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        {step.details.map((detail, i) => (
                          <li key={i} className={`flex items-center ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                            {index % 2 !== 0 && <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>}
                            {detail}
                            {index % 2 === 0 && <span className="h-1.5 w-1.5 rounded-full bg-primary ml-2"></span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="md:w-2/12 flex justify-center my-6 md:my-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${activeStep === index ? "bg-primary text-white" : "bg-secondary text-primary"} transition-colors duration-300`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="md:w-5/12"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

