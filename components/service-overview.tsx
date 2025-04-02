"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Image, Users, BarChart3, GraduationCap, Brain, ChevronRight } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

interface ServiceCategory {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "smart-contracts",
    title: "Smart Contract Creation",
    description: "Custom blockchain solutions for secure, automated transactions and agreements.",
    icon: <Code className="h-6 w-6" />,
    color: "#3b82f6",
  },
  {
    id: "nft",
    title: "NFT Solutions",
    description: "End-to-end NFT creation, minting, and marketplace development services.",
    icon: <Image className="h-6 w-6" />,
    color: "#8b5cf6",
  },
  {
    id: "dao",
    title: "DAO Setup",
    description: "Decentralized Autonomous Organization creation and governance implementation.",
    icon: <Users className="h-6 w-6" />,
    color: "#10b981",
  },
  {
    id: "tokenomics",
    title: "Tokenomics Services",
    description: "Strategic token design, distribution models, and economic frameworks.",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "#f59e0b",
  },
  {
    id: "web3-training",
    title: "Web3 Training",
    description: "Comprehensive educational programs for organizations entering the Web3 space.",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "#ec4899",
  },
  {
    id: "ai-solutions",
    title: "AI Strategy & Solutions",
    description: "Custom AI implementation, integration, and strategic consulting services.",
    icon: <Brain className="h-6 w-6" />,
    color: "#6366f1",
  },
]

export default function ServiceOverview() {
  const [activeTab, setActiveTab] = useState("smart-contracts")

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Web3 & AI <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Comprehensive solutions to help your organization leverage the power of blockchain technology and artificial
            intelligence.
          </p>
        </ScrollAnimation>

        <Tabs defaultValue="smart-contracts" value={activeTab} onValueChange={setActiveTab}>
          <ScrollAnimation>
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center gap-2 py-3 px-2 h-auto"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}20`, color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <span className="text-xs text-center">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollAnimation>

          <div className="mt-8">
            <AnimatePresence mode="wait">
              {serviceCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} forceMount={activeTab === category.id}>
                  {activeTab === category.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center mb-6">
                            <div
                              className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                              style={{ backgroundColor: `${category.color}20`, color: category.color }}
                            >
                              {category.icon}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold" style={{ color: category.color }}>
                                {category.title}
                              </h3>
                              <p className="text-muted-foreground">{category.description}</p>
                            </div>
                          </div>

                          <ServiceDetails serviceId={category.id} color={category.color} />
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </TabsContent>
              ))}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

interface ServiceDetailsProps {
  serviceId: string
  color: string
}

function ServiceDetails({ serviceId, color }: ServiceDetailsProps) {
  // Content for each service category
  const serviceDetails = {
    "smart-contracts": {
      description:
        "Our smart contract development services provide secure, efficient, and transparent solutions for automating business processes and agreements on the blockchain.",
      features: [
        "Custom smart contract development for various use cases",
        "Audit and security testing to ensure contract integrity",
        "Integration with existing systems and applications",
        "Deployment on multiple blockchain networks (Ethereum, Polygon, Solana, etc.)",
        "Ongoing maintenance and support",
      ],
      useCases: [
        "Automated payment systems",
        "Supply chain tracking and verification",
        "Decentralized finance (DeFi) applications",
        "Digital identity verification",
        "Intellectual property rights management",
      ],
    },
    nft: {
      description:
        "From concept to marketplace, our NFT solutions help you create, mint, and sell unique digital assets with verified ownership and provenance.",
      features: [
        "Custom NFT smart contract development",
        "NFT minting platform creation",
        "Marketplace development and integration",
        "Metadata management and storage solutions",
        "Royalty and secondary sales implementation",
      ],
      useCases: [
        "Digital art collections",
        "Virtual real estate and metaverse assets",
        "Event tickets and memberships",
        "Educational credentials and certificates",
        "Brand engagement and loyalty programs",
      ],
    },
    dao: {
      description:
        "Build decentralized governance structures that enable community-driven decision making and transparent organizational management.",
      features: [
        "DAO smart contract development",
        "Governance mechanism implementation",
        "Voting systems and proposal frameworks",
        "Treasury management solutions",
        "Member onboarding and management tools",
      ],
      useCases: [
        "Community-owned businesses",
        "Investment collectives",
        "Protocol governance",
        "Grant distribution systems",
        "Decentralized content platforms",
      ],
    },
    tokenomics: {
      description:
        "Strategic token design and economic modeling to create sustainable, value-generating token ecosystems for your project or organization.",
      features: [
        "Token utility and value accrual design",
        "Supply and distribution modeling",
        "Incentive mechanism design",
        "Economic simulation and testing",
        "Regulatory compliance consultation",
      ],
      useCases: [
        "Project funding and capitalization",
        "Community incentives and rewards",
        "Governance and voting rights",
        "Service access and utility tokens",
        "Ecosystem development and growth",
      ],
    },
    "web3-training": {
      description:
        "Comprehensive educational programs to help your team understand and leverage Web3 technologies effectively in your business.",
      features: [
        "Customized training programs for different skill levels",
        "Hands-on workshops and practical exercises",
        "Technical and non-technical tracks available",
        "Certification upon completion",
        "Ongoing learning resources and support",
      ],
      useCases: [
        "Developer upskilling for blockchain development",
        "Executive education on Web3 strategy",
        "Marketing team training for NFT and token campaigns",
        "Legal and compliance education",
        "Product team training for Web3 product development",
      ],
    },
    "ai-solutions": {
      description:
        "Custom AI strategy and implementation services to enhance your business operations, customer experiences, and decision-making processes.",
      features: [
        "AI strategy development and roadmapping",
        "Custom AI model development and training",
        "Integration with existing systems and workflows",
        "Data preparation and management",
        "Ongoing optimization and support",
      ],
      useCases: [
        "Predictive analytics and forecasting",
        "Natural language processing for customer service",
        "Computer vision for quality control",
        "Recommendation systems for personalization",
        "Process automation and optimization",
      ],
    },
  }

  const details = serviceDetails[serviceId]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <p className="text-muted-foreground mb-6">{details.description}</p>

        <h4 className="font-bold mb-4">Key Features:</h4>
        <ul className="space-y-3 mb-6">
          {details.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{ color }} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-4">Common Use Cases:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {details.useCases.map((useCase, index) => (
            <Card key={index} style={{ borderColor: `${color}30` }}>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                    style={{ backgroundColor: `${color}20`, color }}
                  >
                    {index + 1}
                  </div>
                  <span className="text-sm">{useCase}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

