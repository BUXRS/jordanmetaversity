"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ScrollAnimation from "../scroll-animation"

const technologies = {
  modeling: [
    {
      name: "Blender",
      description: "Open-source 3D creation suite supporting the entire 3D pipeline.",
      icon: "🔷",
      expertise: 95,
    },
    {
      name: "Autodesk Maya",
      description: "Professional 3D computer animation and modeling software.",
      icon: "🔶",
      expertise: 90,
    },
    {
      name: "Cinema 4D",
      description: "Professional 3D modeling, animation, and rendering software.",
      icon: "🔴",
      expertise: 85,
    },
    {
      name: "SketchUp",
      description: "3D modeling computer program for a wide range of drawing applications.",
      icon: "🔺",
      expertise: 80,
    },
  ],
  rendering: [
    {
      name: "Unreal Engine",
      description: "Powerful real-time 3D creation tool for photorealistic visuals and immersive experiences.",
      icon: "🎮",
      expertise: 95,
    },
    {
      name: "Unity",
      description: "Cross-platform game engine used to develop video games and simulations.",
      icon: "🎯",
      expertise: 90,
    },
    {
      name: "V-Ray",
      description: "3D rendering software for high-quality visualizations.",
      icon: "✨",
      expertise: 85,
    },
    {
      name: "Twinmotion",
      description: "Real-time 3D immersion and VR exploration for architectural visualization.",
      icon: "🏙️",
      expertise: 80,
    },
  ],
  platforms: [
    {
      name: "Spatial.io",
      description: "Platform for creating and sharing 3D virtual spaces for collaboration.",
      icon: "🌐",
      expertise: 95,
    },
    {
      name: "Decentraland",
      description: "Virtual reality platform powered by the Ethereum blockchain.",
      icon: "🌍",
      expertise: 90,
    },
    {
      name: "The Sandbox",
      description: "Virtual world where players can build, own, and monetize their gaming experiences.",
      icon: "🎲",
      expertise: 85,
    },
    {
      name: "Horizon Worlds",
      description: "Social VR experience where you can create and explore together.",
      icon: "👥",
      expertise: 80,
    },
  ],
  development: [
    {
      name: "Three.js",
      description: "JavaScript 3D library for creating and displaying animated 3D computer graphics.",
      icon: "🧩",
      expertise: 95,
    },
    {
      name: "WebXR",
      description: "Group of standards used together to support rendering 3D scenes to hardware designed for XR.",
      icon: "🕶️",
      expertise: 90,
    },
    {
      name: "A-Frame",
      description: "Web framework for building virtual reality experiences.",
      icon: "🖼️",
      expertise: 85,
    },
    {
      name: "React Three Fiber",
      description: "React renderer for Three.js, making it easy to create 3D graphics with React.",
      icon: "⚛️",
      expertise: 90,
    },
  ],
}

export default function TechnologyStack() {
  const [activeTab, setActiveTab] = useState("modeling")

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Technology Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge technologies to create immersive and performant metaverse architectural
              experiences.
            </p>
          </div>
        </ScrollAnimation>

        <Tabs defaultValue="modeling" value={activeTab} onValueChange={setActiveTab}>
          <ScrollAnimation>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="modeling">3D Modeling</TabsTrigger>
              <TabsTrigger value="rendering">Rendering</TabsTrigger>
              <TabsTrigger value="platforms">Platforms</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
            </TabsList>
          </ScrollAnimation>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies[activeTab].map((tech, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">{tech.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                      <p className="text-muted-foreground mb-4">{tech.description}</p>

                      <div className="mt-auto">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Expertise</span>
                          <span className="text-sm font-medium">{tech.expertise}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${tech.expertise}%` }}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

