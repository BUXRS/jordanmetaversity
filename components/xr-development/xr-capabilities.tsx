"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Layers,
  Smartphone,
  Headset,
  Glasses,
  Gamepad2,
  Building2,
  GraduationCap,
  ShoppingBag,
  HeartPulse,
  Factory,
  Plane,
} from "lucide-react"

export default function XRCapabilities() {
  const [activeTab, setActiveTab] = useState("development")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const capabilities = {
    development: [
      {
        icon: <Smartphone className="h-8 w-8 text-primary" />,
        title: "Mobile AR Development",
        description: "Create AR experiences for iOS and Android using ARKit, ARCore, and WebAR technologies.",
      },
      {
        icon: <Headset className="h-8 w-8 text-primary" />,
        title: "VR Application Development",
        description: "Build immersive VR applications for Oculus, HTC Vive, Valve Index, and other VR platforms.",
      },
      {
        icon: <Glasses className="h-8 w-8 text-primary" />,
        title: "Mixed Reality Solutions",
        description: "Develop MR applications for Microsoft HoloLens, Magic Leap, and other MR devices.",
      },
      {
        icon: <Code className="h-8 w-8 text-primary" />,
        title: "WebXR Development",
        description: "Create browser-based XR experiences accessible across devices without app installation.",
      },
      {
        icon: <Gamepad2 className="h-8 w-8 text-primary" />,
        title: "Interactive 3D Experiences",
        description: "Design and develop interactive 3D content with realistic physics and user interactions.",
      },
      {
        icon: <Layers className="h-8 w-8 text-primary" />,
        title: "360° Virtual Tours",
        description: "Create immersive 360° virtual tours with interactive hotspots and multimedia content.",
      },
    ],
    industries: [
      {
        icon: <Building2 className="h-8 w-8 text-primary" />,
        title: "Real Estate & Architecture",
        description: "Virtual property tours, architectural visualization, and interactive building exploration.",
      },
      {
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        title: "Education & Training",
        description: "Immersive learning environments, skill training simulations, and virtual classrooms.",
      },
      {
        icon: <ShoppingBag className="h-8 w-8 text-primary" />,
        title: "Retail & E-commerce",
        description: "Virtual try-ons, product visualizations, and immersive shopping experiences.",
      },
      {
        icon: <HeartPulse className="h-8 w-8 text-primary" />,
        title: "Healthcare & Medical",
        description: "Medical training simulations, therapy applications, and patient education tools.",
      },
      {
        icon: <Factory className="h-8 w-8 text-primary" />,
        title: "Manufacturing & Industry",
        description: "Assembly training, maintenance assistance, and industrial visualization tools.",
      },
      {
        icon: <Plane className="h-8 w-8 text-primary" />,
        title: "Tourism & Hospitality",
        description: "Virtual destination tours, hotel previews, and interactive travel experiences.",
      },
    ],
  }

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
    <section className="py-20" id="capabilities" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our XR Capabilities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive XR development services to bring your vision to life with cutting-edge technology.
          </p>
        </motion.div>

        <Tabs defaultValue="development" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="development">Development Services</TabsTrigger>
              <TabsTrigger value="industries">Industry Solutions</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="development">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView && activeTab === "development" ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {capabilities.development.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="group">
                  <div className="bg-card hover:bg-accent transition-colors duration-300 p-6 rounded-lg h-full border border-border hover:border-primary/50 flex flex-col">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="industries">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView && activeTab === "industries" ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {capabilities.industries.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="group">
                  <div className="bg-card hover:bg-accent transition-colors duration-300 p-6 rounded-lg h-full border border-border hover:border-primary/50 flex flex-col">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

