"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Glasses, Smartphone, Headset } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function XRHero() {
  const [activeTab, setActiveTab] = useState<"ar" | "vr" | "mr">("ar")
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 10
      const y = (e.clientY / window.innerHeight) * 10
      setBgPosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === "ar") return "vr"
        if (prev === "vr") return "mr"
        return "ar"
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const tabContent = {
    ar: {
      title: "Augmented Reality",
      description:
        "Overlay digital content onto the real world, enhancing how users interact with their environment through smartphones and AR glasses.",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      bgClass: "bg-gradient-to-r from-blue-600/20 to-cyan-400/20",
    },
    vr: {
      title: "Virtual Reality",
      description:
        "Immerse users in fully digital environments that transport them to new worlds and experiences through VR headsets.",
      icon: <Headset className="h-8 w-8 text-primary" />,
      bgClass: "bg-gradient-to-r from-purple-600/20 to-pink-400/20",
    },
    mr: {
      title: "Mixed Reality",
      description:
        "Blend physical and digital worlds where virtual objects interact with the real environment in real-time.",
      icon: <Glasses className="h-8 w-8 text-primary" />,
      bgClass: "bg-gradient-to-r from-emerald-600/20 to-teal-400/20",
    },
  }

  const currentTab = tabContent[activeTab]

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{
        backgroundPosition: `${bgPosition.x}px ${bgPosition.y}px`,
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-black/80">
          {/* Animated gradient background instead of video */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-indigo-900/30 animate-gradient-slow"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="text-primary">XR Development</span> Services
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground">
                  AR | VR | MR Solutions
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Transform how your audience experiences content with our cutting-edge extended reality development
                services.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Start Your XR Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#showcase">View Our Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`rounded-2xl p-8 backdrop-blur-sm ${currentTab.bgClass}`}
            >
              <div className="flex items-center mb-4">
                {currentTab.icon}
                <h2 className="text-2xl font-bold ml-3">{currentTab.title}</h2>
              </div>
              <p className="text-lg mb-6">{currentTab.description}</p>

              <div className="flex justify-between mt-8">
                <Button
                  variant={activeTab === "ar" ? "default" : "ghost"}
                  onClick={() => setActiveTab("ar")}
                  className="flex-1 mr-2"
                >
                  <Smartphone className="mr-2 h-4 w-4" /> AR
                </Button>
                <Button
                  variant={activeTab === "vr" ? "default" : "ghost"}
                  onClick={() => setActiveTab("vr")}
                  className="flex-1 mx-2"
                >
                  <Headset className="mr-2 h-4 w-4" /> VR
                </Button>
                <Button
                  variant={activeTab === "mr" ? "default" : "ghost"}
                  onClick={() => setActiveTab("mr")}
                  className="flex-1 ml-2"
                >
                  <Glasses className="mr-2 h-4 w-4" /> MR
                </Button>
              </div>
            </motion.div>

            {/* Floating elements */}
            <div className="absolute -top-12 -right-8 w-24 h-24 rounded-full bg-primary/20 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-12 w-32 h-32 rounded-full bg-secondary/20 blur-3xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: "50+", label: "XR Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "12+", label: "Industries Served" },
            { value: "5+ Years", label: "XR Development Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-4 rounded-lg backdrop-blur-sm bg-card/30"
            >
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-primary flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  )
}

