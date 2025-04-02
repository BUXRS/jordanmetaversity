"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Building, GraduationCap, ShoppingBag, Users, Briefcase, Home } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

const industries = [
  {
    icon: <Building className="h-8 w-8" />,
    title: "Corporate",
    description: "Virtual headquarters, meeting spaces, and collaborative environments for remote teams.",
    examples: [
      "Virtual offices for remote work",
      "Digital twin corporate campuses",
      "Interactive presentation spaces",
      "Virtual product showcases",
    ],
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Education",
    description: "Immersive learning environments, virtual campuses, and interactive educational spaces.",
    examples: [
      "Virtual classrooms and lecture halls",
      "Interactive learning laboratories",
      "Historical reconstructions",
      "Educational simulations",
    ],
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: "Retail",
    description: "Virtual stores, showrooms, and interactive shopping experiences for brands and retailers.",
    examples: [
      "Virtual storefronts and malls",
      "Interactive product demonstrations",
      "Virtual try-on experiences",
      "Exclusive VIP shopping environments",
    ],
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Entertainment",
    description: "Venues, experiences, and interactive environments for events, performances, and social gatherings.",
    examples: [
      "Virtual concert venues",
      "Interactive museums and galleries",
      "Immersive theme experiences",
      "Social gathering spaces",
    ],
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Professional Services",
    description: "Virtual consultation spaces, professional environments, and client experience centers.",
    examples: [
      "Virtual consultation rooms",
      "Interactive portfolio showcases",
      "Client experience centers",
      "Professional networking spaces",
    ],
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Real Estate",
    description: "Virtual properties, developments, and interactive architectural visualizations.",
    examples: [
      "Pre-construction visualizations",
      "Virtual property tours",
      "Interactive development showcases",
      "Customizable virtual homes",
    ],
  },
]

export default function IndustryApplications() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry <span className="text-primary">Applications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our metaverse architectural services are tailored to meet the unique needs of various industries.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    {industry.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-muted-foreground mb-6">{industry.description}</p>

                  <h4 className="font-semibold mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {industry.examples.map((example, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

