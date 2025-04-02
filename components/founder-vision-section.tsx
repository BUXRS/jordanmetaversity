"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Quote } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

export default function FounderVisionSection() {
  const [activeTab, setActiveTab] = useState("vision")

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-12 text-center">Our Foundation</h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary/50">
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Ahmed Al-Mansour, Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>

              <Card className="absolute -bottom-6 -right-6 max-w-md">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/40 mb-2" />
                  <p className="text-muted-foreground italic mb-4">
                    "Our mission is to democratize access to immersive technologies across the MENA region, empowering
                    the next generation with the tools they need to thrive in the digital future."
                  </p>
                  <p className="font-medium">Ahmed Al-Mansour</p>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div>
              <h3 className="text-2xl font-bold mb-4">Ahmed Al-Mansour</h3>
              <p className="text-primary font-medium mb-2">Founder & CEO</p>
              <p className="text-muted-foreground mb-6">
                With over 15 years of experience in technology and education, Ahmed founded Beyond Universe XR Solutions
                in 2018 with a vision to transform how people learn, work, and interact through immersive technologies.
              </p>
              <p className="text-muted-foreground mb-6">
                Prior to founding Beyond Universe XR, Ahmed held leadership positions at several technology companies
                and educational institutions across the MENA region. He holds a Master's degree in Computer Science from
                MIT and an MBA from INSEAD.
              </p>

              <Tabs defaultValue="vision" value={activeTab} onValueChange={setActiveTab} className="mt-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="vision">Vision</TabsTrigger>
                  <TabsTrigger value="mission">Mission</TabsTrigger>
                  <TabsTrigger value="values">Values</TabsTrigger>
                </TabsList>

                <div className="mt-6 min-h-[200px] relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      {activeTab === "vision" && (
                        <TabsContent value="vision" forceMount>
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold">Our Vision</h4>
                            <p className="text-muted-foreground">
                              To be the leading provider of immersive technology solutions in the MENA region,
                              transforming education, business, and entertainment through innovative XR, Metaverse,
                              Web3, and AI technologies.
                            </p>
                            <p className="text-muted-foreground">
                              We envision a future where immersive technologies are accessible to all, breaking down
                              barriers to education and enabling new forms of collaboration, creativity, and commerce.
                            </p>
                          </div>
                        </TabsContent>
                      )}

                      {activeTab === "mission" && (
                        <TabsContent value="mission" forceMount>
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold">Our Mission</h4>
                            <p className="text-muted-foreground">
                              To empower organizations and individuals with cutting-edge immersive technologies that
                              enhance learning, productivity, and creativity, while fostering a culture of innovation
                              and digital transformation across the MENA region.
                            </p>
                            <p className="text-muted-foreground">
                              We are committed to developing solutions that address real-world challenges, creating
                              measurable impact for our clients and partners.
                            </p>
                          </div>
                        </TabsContent>
                      )}

                      {activeTab === "values" && (
                        <TabsContent value="values" forceMount>
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold">Our Core Values</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              <li className="flex items-start">
                                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                                  1
                                </span>
                                <span>
                                  <strong className="text-foreground">Innovation:</strong> We constantly push the
                                  boundaries of what's possible with immersive technologies.
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                                  2
                                </span>
                                <span>
                                  <strong className="text-foreground">Impact:</strong> We measure our success by the
                                  positive change we create for our clients and communities.
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                                  3
                                </span>
                                <span>
                                  <strong className="text-foreground">Inclusion:</strong> We believe in making advanced
                                  technologies accessible to all.
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                                  4
                                </span>
                                <span>
                                  <strong className="text-foreground">Excellence:</strong> We strive for the highest
                                  quality in everything we do.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </TabsContent>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Tabs>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

