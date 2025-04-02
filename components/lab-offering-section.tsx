"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  School,
  BookOpen,
  Laptop,
  GraduationCapIcon as Graduation,
  HardDrive,
  Users,
  ChevronRight,
  Monitor,
  Headphones,
  Smartphone,
  Cpu,
  Wifi,
  Server,
} from "lucide-react"
import ScrollAnimation from "./scroll-animation"
import Link from "next/link"

interface OfferingProps {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  image: string
  cta: string
}

const offerings: OfferingProps[] = [
  {
    id: "university",
    title: "University XR Labs",
    description:
      "Comprehensive XR labs for universities, featuring high-end VR headsets, AR devices, and specialized software for various disciplines including medicine, engineering, and architecture.",
    icon: <School className="h-6 w-6" />,
    features: [
      "High-end VR headsets (Meta Quest Pro, HTC Vive Pro, etc.)",
      "Specialized software for medical, engineering, and architectural visualization",
      "Motion capture systems for immersive simulations",
      "Collaborative workspaces for multi-user experiences",
      "Custom content development for specific academic disciplines",
    ],
    image: "/placeholder.svg?height=400&width=600",
    cta: "Explore University Solutions",
  },
  {
    id: "school",
    title: "School XR Labs",
    description:
      "Age-appropriate XR labs for K-12 schools, designed to make learning fun and interactive while introducing students to future technologies.",
    icon: <BookOpen className="h-6 w-6" />,
    features: [
      "Durable, student-friendly VR headsets",
      "Educational content aligned with K-12 curriculum",
      "Classroom management tools for teachers",
      "Interactive AR applications for tablets and smartphones",
      "STEM-focused experiences and activities",
    ],
    image: "/placeholder.svg?height=400&width=600",
    cta: "Discover K-12 Solutions",
  },
  {
    id: "curriculum",
    title: "XR Curriculum",
    description:
      "Comprehensive curriculum packages including Metaverse 101/102 courses, designed to teach students about immersive technologies and their applications.",
    icon: <Laptop className="h-6 w-6" />,
    features: [
      "Metaverse 101: Introduction to XR Technologies",
      "Metaverse 102: Advanced Applications and Development",
      "Hands-on projects and assessments",
      "Teacher training and resources",
      "Regular updates to keep pace with evolving technologies",
    ],
    image: "/placeholder.svg?height=400&width=600",
    cta: "View Curriculum Options",
  },
  {
    id: "diplomas",
    title: "XR Diplomas",
    description:
      "Specialized diploma programs in XR development, design, and implementation, preparing students for careers in the growing immersive technology industry.",
    icon: <Graduation className="h-6 w-6" />,
    features: [
      "XR Development Diploma (6-12 months)",
      "3D Modeling and Design for XR",
      "Industry partnerships for internships and job placement",
      "Project-based learning with portfolio development",
      "Certification recognized by leading technology companies",
    ],
    image: "/placeholder.svg?height=400&width=600",
    cta: "Explore Diploma Programs",
  },
  {
    id: "hardware",
    title: "Hardware & Software Stack",
    description:
      "Curated selection of the latest XR hardware and software, tailored to the specific needs of each educational institution.",
    icon: <HardDrive className="h-6 w-6" />,
    features: [
      "VR headsets from leading manufacturers",
      "High-performance computing workstations",
      "Networking infrastructure for multi-user experiences",
      "Software licenses for educational institutions",
      "Regular hardware refreshes to stay current with technology",
    ],
    image: "/placeholder.svg?height=400&width=600",
    cta: "View Tech Specifications",
  },
  {
    id: "training",
    title: "Training & Support",
    description:
      "Comprehensive training programs for faculty and staff, along with ongoing technical support to ensure the successful implementation of XR technologies.",
    icon: <Users className="h-6 w-6" />,
    features: [
      "On-site training for faculty and staff",
      "Virtual training sessions and webinars",
      "24/7 technical support",
      "Regular maintenance and updates",
      "Community of practice for educators using XR",
    ],
    image: "/placeholder.svg?height=400&width=600",
    cta: "Learn About Support",
  },
]

function OfferingSection({ offering }: { offering: OfferingProps }) {
  return (
    <div id={offering.id} className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
              {offering.icon}
            </div>
            <h2 className="text-3xl font-bold">{offering.title}</h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-3xl">{offering.description}</p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
              <img
                src={offering.image || "/placeholder.svg"}
                alt={offering.title}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div>
              <h3 className="text-xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-4">
                {offering.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8">
                <Link href="/contact">{offering.cta}</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

function HardwareShowcase() {
  const [activeTab, setActiveTab] = useState("vr")

  const hardwareCategories = {
    vr: {
      title: "VR Hardware",
      icon: <Monitor className="h-5 w-5" />,
      items: [
        { name: "Meta Quest Pro", description: "Advanced mixed reality headset with eye and face tracking" },
        { name: "HTC Vive Pro 2", description: "High-resolution VR headset for detailed visualizations" },
        { name: "Varjo XR-3", description: "Professional-grade mixed reality for research and development" },
        { name: "Pico Neo 3", description: "Standalone VR headset for educational environments" },
      ],
    },
    audio: {
      title: "Audio Solutions",
      icon: <Headphones className="h-5 w-5" />,
      items: [
        { name: "Spatial Audio Systems", description: "3D audio for immersive learning environments" },
        { name: "Classroom Sound Systems", description: "Integrated audio for group VR experiences" },
        { name: "Wireless Headphones", description: "Individual audio for personalized learning" },
        { name: "Voice Recognition", description: "Voice-controlled interfaces for hands-free interaction" },
      ],
    },
    mobile: {
      title: "Mobile Devices",
      icon: <Smartphone className="h-5 w-5" />,
      items: [
        { name: "iPad Pro", description: "High-performance tablets for AR applications" },
        { name: "Samsung Galaxy Tab S8", description: "Android tablets for cross-platform compatibility" },
        { name: "AR-enabled Smartphones", description: "Mobile AR experiences for field trips and outdoor learning" },
        { name: "Mobile Device Management", description: "Solutions for managing educational device fleets" },
      ],
    },
    computing: {
      title: "Computing",
      icon: <Cpu className="h-5 w-5" />,
      items: [
        { name: "VR-Ready Workstations", description: "High-performance computers for content creation" },
        { name: "NVIDIA RTX GPUs", description: "Graphics processing for real-time rendering" },
        { name: "Rendering Farms", description: "Distributed computing for complex simulations" },
        { name: "Edge Computing Solutions", description: "Low-latency processing for responsive XR" },
      ],
    },
    networking: {
      title: "Networking",
      icon: <Wifi className="h-5 w-5" />,
      items: [
        { name: "High-Speed Wi-Fi 6", description: "Reliable wireless connectivity for multiple devices" },
        { name: "Local Content Servers", description: "On-premises content delivery for reduced latency" },
        { name: "Cloud Connectivity", description: "Secure access to cloud-based XR resources" },
        { name: "Bandwidth Management", description: "Optimized network traffic for XR applications" },
      ],
    },
    infrastructure: {
      title: "Infrastructure",
      icon: <Server className="h-5 w-5" />,
      items: [
        { name: "Charging Stations", description: "Secure storage and charging for VR headsets" },
        { name: "Lab Furniture", description: "Ergonomic workspaces designed for XR use" },
        { name: "Safety Systems", description: "Guardian systems and physical space management" },
        { name: "Environmental Controls", description: "Climate control for optimal hardware performance" },
      ],
    },
  }

  return (
    <div className="py-8">
      <ScrollAnimation>
        <h3 className="text-xl font-bold mb-6">Hardware & Software Components</h3>
      </ScrollAnimation>

      <Tabs defaultValue="vr" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <ScrollAnimation>
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="vr" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              <span className="hidden md:inline">VR</span>
            </TabsTrigger>
            <TabsTrigger value="audio" className="flex items-center gap-2">
              <Headphones className="h-4 w-4" />
              <span className="hidden md:inline">Audio</span>
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span className="hidden md:inline">Mobile</span>
            </TabsTrigger>
            <TabsTrigger value="computing" className="flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              <span className="hidden md:inline">Computing</span>
            </TabsTrigger>
            <TabsTrigger value="networking" className="flex items-center gap-2">
              <Wifi className="h-4 w-4" />
              <span className="hidden md:inline">Networking</span>
            </TabsTrigger>
            <TabsTrigger value="infrastructure" className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              <span className="hidden md:inline">Infrastructure</span>
            </TabsTrigger>
          </TabsList>
        </ScrollAnimation>

        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {Object.entries(hardwareCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} forceMount={activeTab === key}>
                {activeTab === key && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.items.map((item, index) => (
                        <ScrollAnimation key={index} delay={index * 100}>
                          <Card>
                            <CardContent className="p-4">
                              <h4 className="font-bold">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </CardContent>
                          </Card>
                        </ScrollAnimation>
                      ))}
                    </div>
                  </motion.div>
                )}
              </TabsContent>
            ))}
          </AnimatePresence>
        </div>
      </Tabs>
    </div>
  )
}

export default function LabOfferingSection() {
  return (
    <>
      {offerings.map((offering) => (
        <OfferingSection key={offering.id} offering={offering} />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HardwareShowcase />
      </div>
    </>
  )
}

