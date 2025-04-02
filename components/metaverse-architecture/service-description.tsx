"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Layers, Palette, Compass, Users, Globe } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

const services = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Virtual Real Estate Development",
    description: "Design and develop virtual properties, buildings, and landscapes for metaverse platforms.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "3D Environment Design",
    description: "Create immersive 3D environments with attention to detail, lighting, textures, and spatial design.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Custom Metaverse Spaces",
    description: "Design custom virtual spaces for events, exhibitions, retail, education, and entertainment.",
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Spatial Experience Design",
    description: "Craft intuitive user journeys and spatial experiences that engage and delight users.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaborative Workspaces",
    description: "Design virtual offices and collaborative spaces optimized for remote work and team interaction.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Cross-Platform Development",
    description: "Create architecture that works seamlessly across multiple metaverse platforms and VR/AR devices.",
  },
]

export default function ServiceDescription() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Redefining Spaces in the <span className="text-primary">Digital Realm</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our metaverse architecture services blend cutting-edge technology with timeless design principles to
              create immersive digital spaces that captivate and engage.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-600/10 border border-amber-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Choose Our Metaverse Architecture Services?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Expert team of architects, 3D artists, and UX designers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Cutting-edge technology and rendering capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Focus on user experience and intuitive navigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Cross-platform compatibility and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Sustainable and scalable design approaches</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-full min-h-[250px] rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Metaverse architecture design process"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

