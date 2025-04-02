"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function XRComparison() {
  const [activeTab, setActiveTab] = useState("ar")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const comparisonData = {
    ar: {
      title: "Augmented Reality",
      description: "Overlay digital content onto the real world through smartphones, tablets, or AR glasses.",
      beforeImage: "/placeholder.svg?height=600&width=800",
      afterImage: "/placeholder.svg?height=600&width=800",
      benefits: [
        "No headset required for mobile AR",
        "Enhances real-world environments",
        "Lower development costs",
        "Wider audience reach",
        "Practical everyday applications",
      ],
    },
    vr: {
      title: "Virtual Reality",
      description: "Immerse users in completely digital environments through VR headsets.",
      beforeImage: "/placeholder.svg?height=600&width=800",
      afterImage: "/placeholder.svg?height=600&width=800",
      benefits: [
        "Complete immersion",
        "Distraction-free experiences",
        "Full control over environment",
        "Deeper emotional engagement",
        "Realistic simulations",
      ],
    },
    mr: {
      title: "Mixed Reality",
      description:
        "Blend physical and digital worlds where virtual objects interact with real environments in real-time.",
      beforeImage: "/placeholder.svg?height=600&width=800",
      afterImage: "/placeholder.svg?height=600&width=800",
      benefits: [
        "Natural interaction with digital objects",
        "Persistent digital content in real space",
        "Collaborative experiences",
        "Spatial understanding",
        "Hands-free operation",
      ],
    },
  }

  const currentData = comparisonData[activeTab as keyof typeof comparisonData]

  return (
    <section className="py-20" id="comparison" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our XR solutions transform ordinary experiences into extraordinary ones.
          </p>
        </motion.div>

        <Tabs defaultValue="ar" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="ar">AR</TabsTrigger>
              <TabsTrigger value="vr">VR</TabsTrigger>
              <TabsTrigger value="mr">MR</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4">{currentData.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{currentData.description}</p>

                <h4 className="text-xl font-semibold mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {currentData.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-center"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 h-full relative overflow-hidden">
                      <Image
                        src={currentData.beforeImage || "/placeholder.svg"}
                        alt="Before XR"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-sm rounded-md">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 h-full relative overflow-hidden">
                      <Image
                        src={currentData.afterImage || "/placeholder.svg"}
                        alt="After XR"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-primary/90 text-white px-3 py-1 text-sm rounded-md">
                        With {activeTab.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[2px] bg-white/80"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

