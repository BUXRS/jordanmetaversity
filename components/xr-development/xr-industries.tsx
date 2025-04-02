"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Building2,
  GraduationCap,
  ShoppingBag,
  HeartPulse,
  Factory,
  Plane,
  Gamepad2,
  Building,
  Landmark,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function XRIndustries() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const industries = [
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: "Real Estate & Architecture",
      description: "Virtual property tours, architectural visualization, and interactive building exploration.",
      useCases: [
        "Virtual property tours",
        "Architectural visualization",
        "Interior design previews",
        "Construction planning",
      ],
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: "Education & Training",
      description: "Immersive learning environments, skill training simulations, and virtual classrooms.",
      useCases: [
        "Virtual classrooms",
        "Skill training simulations",
        "Interactive learning modules",
        "Historical recreations",
      ],
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      title: "Retail & E-commerce",
      description: "Virtual try-ons, product visualizations, and immersive shopping experiences.",
      useCases: ["Virtual try-ons", "Product visualization", "Interactive catalogs", "Virtual showrooms"],
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-primary" />,
      title: "Healthcare & Medical",
      description: "Medical training simulations, therapy applications, and patient education tools.",
      useCases: ["Surgical training", "Phobia therapy", "Patient education", "Rehabilitation exercises"],
    },
    {
      icon: <Factory className="h-10 w-10 text-primary" />,
      title: "Manufacturing & Industry",
      description: "Assembly training, maintenance assistance, and industrial visualization tools.",
      useCases: ["Assembly instructions", "Maintenance guidance", "Safety training", "Quality control"],
    },
    {
      icon: <Plane className="h-10 w-10 text-primary" />,
      title: "Tourism & Hospitality",
      description: "Virtual destination tours, hotel previews, and interactive travel experiences.",
      useCases: [
        "Virtual destination tours",
        "Hotel room previews",
        "Interactive attractions",
        "Travel planning tools",
      ],
    },
    {
      icon: <Gamepad2 className="h-10 w-10 text-primary" />,
      title: "Entertainment & Gaming",
      description: "Immersive games, interactive storytelling, and location-based entertainment.",
      useCases: ["AR mobile games", "VR experiences", "Interactive narratives", "Location-based entertainment"],
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Corporate & Enterprise",
      description: "Virtual meetings, training programs, and collaborative workspaces.",
      useCases: ["Virtual meetings", "Remote collaboration", "Employee training", "Data visualization"],
    },
    {
      icon: <Landmark className="h-10 w-10 text-primary" />,
      title: "Government & Public Sector",
      description: "Urban planning, public service training, and citizen engagement applications.",
      useCases: [
        "Urban planning visualization",
        "Emergency response training",
        "Public service education",
        "Cultural heritage preservation",
      ],
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
    <section className="py-20 bg-secondary/10" id="industries" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">XR Solutions Across Industries</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our XR development services deliver transformative experiences across a wide range of industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-border hover:border-primary/30">
                <CardHeader>
                  <div className="mb-4">{industry.icon}</div>
                  <CardTitle>{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Use Cases:</h4>
                  <ul className="space-y-1">
                    {industry.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

