"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Award, ChevronLeft, ChevronRight, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ScrollAnimation from "@/components/scroll-animation"

interface AwardProps {
  title: string
  organization: string
  year: string
  description: string
  image: string
  color: string
}

const awards: AwardProps[] = [
  {
    title: "Best XR Innovation",
    organization: "MENA Tech Awards",
    year: "2024",
    description: "Recognized for groundbreaking advancements in XR technology for education.",
    image: "/placeholder.svg?height=400&width=600",
    color: "#FFD700", // Gold
  },
  {
    title: "Digital Transformation Excellence",
    organization: "Future Education Summit",
    year: "2023",
    description: "Awarded for transformative impact on educational institutions through metaverse solutions.",
    image: "/placeholder.svg?height=400&width=600",
    color: "#4169E1", // Royal Blue
  },
  {
    title: "Most Innovative Web3 Implementation",
    organization: "Blockchain Innovation Awards",
    year: "2023",
    description: "Honored for creative application of blockchain technology in educational credentialing.",
    image: "/placeholder.svg?height=400&width=600",
    color: "#9370DB", // Medium Purple
  },
  {
    title: "Best Immersive Learning Solution",
    organization: "EdTech Breakthrough Awards",
    year: "2022",
    description: "Recognized for creating engaging and effective immersive learning environments.",
    image: "/placeholder.svg?height=400&width=600",
    color: "#3CB371", // Medium Sea Green
  },
  {
    title: "XR Startup of the Year",
    organization: "Gulf Business Technology Awards",
    year: "2022",
    description: "Selected as the most promising XR startup in the Gulf region.",
    image: "/placeholder.svg?height=400&width=600",
    color: "#FF6347", // Tomato Red
  },
]

export default function AwardsSection() {
  const [activeAward, setActiveAward] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const nextAward = () => {
    setDirection(1)
    setActiveAward((prev) => (prev + 1) % awards.length)
  }

  const prevAward = () => {
    setDirection(-1)
    setActiveAward((prev) => (prev - 1 + awards.length) % awards.length)
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -30 : 30,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 30 : -30,
      transition: {
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-muted/30"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" initial="hidden" animate={controls} variants={variants}>
          <motion.div variants={itemVariants}>
            <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            Award-Winning Excellence
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to innovation and excellence in XR, Metaverse, and Web3 technologies has been recognized by
            leading industry organizations.
          </motion.p>
        </motion.div>

        <div className="relative h-[600px] perspective-1000">
          {/* 3D Award Showcase */}
          <motion.div
            key={activeAward}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
              {/* Award Image */}
              <div className="relative h-[300px] lg:h-[500px] transform hover:scale-105 transition-transform duration-500">
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    backgroundImage: `linear-gradient(45deg, ${awards[activeAward].color}22, ${awards[activeAward].color}44)`,
                    border: `1px solid ${awards[activeAward].color}33`,
                  }}
                >
                  <div className="absolute inset-0 backdrop-blur-sm"></div>
                  <Image
                    src={awards[activeAward].image || "/placeholder.svg"}
                    alt={awards[activeAward].title}
                    fill
                    className="object-cover object-center p-4 rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>

              {/* Award Details */}
              <div className="space-y-6 p-6 lg:p-8 bg-background/80 backdrop-blur-md rounded-2xl border border-muted">
                <div
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: `${awards[activeAward].color}22`, color: awards[activeAward].color }}
                >
                  <Award className="mr-2 h-4 w-4" />
                  {awards[activeAward].year}
                </div>

                <h3 className="text-3xl font-bold">{awards[activeAward].title}</h3>

                <div className="flex items-center">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${awards[activeAward].color}22` }}
                  >
                    <Trophy className="h-5 w-5" style={{ color: awards[activeAward].color }} />
                  </div>
                  <div>
                    <p className="font-medium">Awarded by</p>
                    <p className="text-lg">{awards[activeAward].organization}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">{awards[activeAward].description}</p>

                <div className="pt-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="font-medium">{activeAward + 1}</span> of <span>{awards.length}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevAward}
                        aria-label="Previous award"
                        className="hover:bg-primary/10 transition-colors"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextAward}
                        aria-label="Next award"
                        className="hover:bg-primary/10 transition-colors"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Award Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {awards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeAward ? 1 : -1)
                setActiveAward(index)
              }}
              className={`h-2 rounded-full transition-all ${
                index === activeAward ? `w-8 bg-primary` : `w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50`
              }`}
              aria-label={`Go to award ${index + 1}`}
            />
          ))}
        </div>

        <ScrollAnimation delay={300}>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground italic">
              "Beyond Universe XR continues to push the boundaries of what's possible in immersive technology, setting
              new standards for innovation in the XR industry."
            </p>
            <p className="text-sm font-medium mt-4">— MENA Tech Review, 2024</p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

