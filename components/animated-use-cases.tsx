"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Code,
  Image,
  Users,
  BarChart3,
  GraduationCap,
  Brain,
  ChevronLeft,
  ChevronRight,
  Building,
  ShoppingBag,
  Ticket,
  Palette,
  Landmark,
  Lightbulb,
  Banknote,
  Handshake,
  BookOpen,
  Briefcase,
  LineChart,
  MessageSquare,
  Search,
} from "lucide-react"
import ScrollAnimation from "./scroll-animation"

interface UseCase {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  category: string
  color: string
}

const useCases: UseCase[] = [
  // Smart Contract Use Cases
  {
    id: 1,
    title: "Supply Chain Tracking",
    description:
      "Transparent tracking of products from manufacturer to consumer with immutable verification at each step.",
    icon: <ShoppingBag className="h-10 w-10" />,
    category: "smart-contracts",
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Automated Escrow",
    description:
      "Secure funds in a neutral account until contractual conditions are met, then automatically release payment.",
    icon: <Handshake className="h-10 w-10" />,
    category: "smart-contracts",
    color: "#3b82f6",
  },
  {
    id: 3,
    title: "Intellectual Property Rights",
    description: "Register and manage IP rights on the blockchain with automated royalty distribution.",
    icon: <Lightbulb className="h-10 w-10" />,
    category: "smart-contracts",
    color: "#3b82f6",
  },

  // NFT Use Cases
  {
    id: 4,
    title: "Digital Art Collections",
    description: "Create, mint, and sell unique digital artworks with verifiable ownership and provenance.",
    icon: <Palette className="h-10 w-10" />,
    category: "nft",
    color: "#8b5cf6",
  },
  {
    id: 5,
    title: "Event Ticketing",
    description: "Issue NFT tickets that prevent counterfeiting and enable secondary market royalties.",
    icon: <Ticket className="h-10 w-10" />,
    category: "nft",
    color: "#8b5cf6",
  },
  {
    id: 6,
    title: "Brand Loyalty Programs",
    description: "Create exclusive NFT-based membership programs with special benefits and experiences.",
    icon: <Building className="h-10 w-10" />,
    category: "nft",
    color: "#8b5cf6",
  },

  // DAO Use Cases
  {
    id: 7,
    title: "Investment Collectives",
    description: "Pool resources and make collective investment decisions through transparent voting mechanisms.",
    icon: <Landmark className="h-10 w-10" />,
    category: "dao",
    color: "#10b981",
  },
  {
    id: 8,
    title: "Grant Distribution",
    description: "Community-governed funding allocation for projects and initiatives through proposal systems.",
    icon: <Banknote className="h-10 w-10" />,
    category: "dao",
    color: "#10b981",
  },
  {
    id: 9,
    title: "Protocol Governance",
    description: "Decentralized management of protocol parameters and upgrades through token-based voting.",
    icon: <Users className="h-10 w-10" />,
    category: "dao",
    color: "#10b981",
  },

  // Tokenomics Use Cases
  {
    id: 10,
    title: "Utility Token Design",
    description: "Create tokens that provide access to services while generating sustainable value for holders.",
    icon: <BarChart3 className="h-10 w-10" />,
    category: "tokenomics",
    color: "#f59e0b",
  },
  {
    id: 11,
    title: "Incentive Mechanisms",
    description: "Design token-based rewards that align user behavior with platform growth objectives.",
    icon: <LineChart className="h-10 w-10" />,
    category: "tokenomics",
    color: "#f59e0b",
  },
  {
    id: 12,
    title: "Economic Modeling",
    description: "Simulate token economics under various conditions to ensure long-term sustainability.",
    icon: <Briefcase className="h-10 w-10" />,
    category: "tokenomics",
    color: "#f59e0b",
  },

  // Web3 Training Use Cases
  {
    id: 13,
    title: "Developer Bootcamps",
    description: "Intensive training programs to upskill developers in blockchain and smart contract development.",
    icon: <Code className="h-10 w-10" />,
    category: "web3-training",
    color: "#ec4899",
  },
  {
    id: 14,
    title: "Executive Education",
    description: "Strategic workshops for leadership teams on Web3 business models and opportunities.",
    icon: <BookOpen className="h-10 w-10" />,
    category: "web3-training",
    color: "#ec4899",
  },
  {
    id: 15,
    title: "Compliance Training",
    description: "Educational programs on regulatory considerations and best practices in the Web3 space.",
    icon: <GraduationCap className="h-10 w-10" />,
    category: "web3-training",
    color: "#ec4899",
  },

  // AI Solutions Use Cases
  {
    id: 16,
    title: "Predictive Analytics",
    description:
      "Leverage AI to forecast trends, demand, and potential issues before they occur, enabling proactive decision-making.",
    icon: <LineChart className="h-10 w-10" />,
    category: "ai-solutions",
    color: "#6366f1",
  },
  {
    id: 17,
    title: "Natural Language Processing",
    description:
      "Implement AI-powered chatbots and content analysis tools to enhance customer interactions and data insights.",
    icon: <MessageSquare className="h-10 w-10" />,
    category: "ai-solutions",
    color: "#6366f1",
  },
  {
    id: 18,
    title: "Computer Vision",
    description:
      "Utilize visual recognition systems for quality control, security, and automated visual data processing.",
    icon: <Search className="h-10 w-10" />,
    category: "ai-solutions",
    color: "#6366f1",
  },
]

export default function AnimatedUseCases() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredCases =
    activeCategory === "all" ? useCases : useCases.filter((useCase) => useCase.category === activeCategory)

  const totalPages = Math.ceil(filteredCases.length / 6)
  const currentCases = filteredCases.slice(currentPage * 6, (currentPage + 1) * 6)

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(0)
  }, [activeCategory])

  return (
    <section className="py-16" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-6 text-center">Use Cases & Applications</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Explore real-world applications of our Web3 and AI services across various industries and use cases.
          </p>
        </ScrollAnimation>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
            className="rounded-full"
          >
            All Use Cases
          </Button>
          <Button
            variant={activeCategory === "smart-contracts" ? "default" : "outline"}
            onClick={() => setActiveCategory("smart-contracts")}
            className="rounded-full"
          >
            <Code className="h-4 w-4 mr-2" />
            Smart Contracts
          </Button>
          <Button
            variant={activeCategory === "nft" ? "default" : "outline"}
            onClick={() => setActiveCategory("nft")}
            className="rounded-full"
          >
            <Image className="h-4 w-4 mr-2" />
            NFT Solutions
          </Button>
          <Button
            variant={activeCategory === "dao" ? "default" : "outline"}
            onClick={() => setActiveCategory("dao")}
            className="rounded-full"
          >
            <Users className="h-4 w-4 mr-2" />
            DAO Setup
          </Button>
          <Button
            variant={activeCategory === "tokenomics" ? "default" : "outline"}
            onClick={() => setActiveCategory("tokenomics")}
            className="rounded-full"
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Tokenomics
          </Button>
          <Button
            variant={activeCategory === "web3-training" ? "default" : "outline"}
            onClick={() => setActiveCategory("web3-training")}
            className="rounded-full"
          >
            <GraduationCap className="h-4 w-4 mr-2" />
            Web3 Training
          </Button>
          <Button
            variant={activeCategory === "ai-solutions" ? "default" : "outline"}
            onClick={() => setActiveCategory("ai-solutions")}
            className="rounded-full"
          >
            <Brain className="h-4 w-4 mr-2" />
            AI Solutions
          </Button>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          {totalPages > 1 && (
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                disabled={currentPage === 0}
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentCases.map((useCase) => (
                <Card key={useCase.id} style={{ borderColor: `${useCase.color}30` }}>
                  <CardContent className="p-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                      style={{ backgroundColor: `${useCase.color}20`, color: useCase.color }}
                    >
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center" style={{ color: useCase.color }}>
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground text-center">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${index === currentPage ? "bg-primary" : "bg-secondary"}`}
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

