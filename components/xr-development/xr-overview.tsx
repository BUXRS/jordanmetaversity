"use client"

import { motion } from "framer-motion"
import { Smartphone, Headset, Glasses } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function XROverview() {
  const technologies = [
    {
      title: "Augmented Reality (AR)",
      description:
        "Overlay digital content onto the real world through smartphones, tablets, and AR glasses, enhancing how users interact with their environment.",
      icon: <Smartphone className="h-12 w-12 text-blue-500" />,
      color: "bg-blue-500/10 border-blue-500/20",
      textColor: "text-blue-500",
      features: [
        "Mobile AR Applications",
        "WebAR Experiences",
        "AR Product Visualization",
        "Location-based AR",
        "AR Navigation Systems",
      ],
    },
    {
      title: "Virtual Reality (VR)",
      description:
        "Immerse users in fully digital environments that transport them to new worlds and experiences through VR headsets.",
      icon: <Headset className="h-12 w-12 text-purple-500" />,
      color: "bg-purple-500/10 border-purple-500/20",
      textColor: "text-purple-500",
      features: [
        "Immersive VR Applications",
        "360° Virtual Tours",
        "VR Training Simulations",
        "Virtual Showrooms",
        "VR Gaming Experiences",
      ],
    },
    {
      title: "Mixed Reality (MR)",
      description:
        "Blend physical and digital worlds where virtual objects interact with the real environment in real-time.",
      icon: <Glasses className="h-12 w-12 text-emerald-500" />,
      color: "bg-emerald-500/10 border-emerald-500/20",
      textColor: "text-emerald-500",
      features: [
        "Holographic Interfaces",
        "Interactive Digital Twins",
        "Spatial Computing",
        "Collaborative MR Workspaces",
        "MR Remote Assistance",
      ],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Extended Reality Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We develop cutting-edge XR solutions that bridge the gap between physical and digital worlds, creating
            immersive experiences that engage, educate, and inspire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`h-full border ${tech.color} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className={`p-3 rounded-full ${tech.color} mb-4`}>{tech.icon}</div>
                    <h3 className={`text-2xl font-bold mb-2 ${tech.textColor}`}>{tech.title}</h3>
                    <p className="text-muted-foreground">{tech.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {tech.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full ${tech.textColor} mr-2`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

