"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scan, Database, Globe, BookOpen, History, Award } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

export default function ProjectExplanation() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 0.8])
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0.8])
  const scale1 = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])
  const scale2 = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1])

  return (
    <div ref={containerRef} className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            What is <span className="text-primary">Scan 4 3D</span>?
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div className="md:pr-8" style={{ y: y1, opacity: opacity1, scale: scale1 }}>
            <ScrollAnimation>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">The Vision</h3>
              <p className="text-muted-foreground mb-6">
                Scan 4 3D is an ambitious initiative to create the world's largest academic 3D asset library, with a
                special focus on preserving and digitizing cultural artifacts, historical objects, and educational
                resources from across the MENA region and beyond.
              </p>
              <p className="text-muted-foreground mb-6">
                By creating high-quality 3D scans of important objects and making them accessible to students,
                educators, and researchers, we're building a digital repository that transcends physical limitations and
                democratizes access to valuable educational resources.
              </p>
              <div className="h-1 w-20 bg-primary"></div>
            </ScrollAnimation>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-4" style={{ y: y1, opacity: opacity1, scale: scale1 }}>
            <ScrollAnimation delay={100}>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Scan className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-bold mb-2">3D Scanning</h4>
                  <p className="text-sm text-muted-foreground">
                    High-precision scanning of physical objects using advanced technologies
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Database className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-bold mb-2">Digital Repository</h4>
                  <p className="text-sm text-muted-foreground">
                    Secure cloud storage with advanced search and categorization
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Globe className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-bold mb-2">Global Access</h4>
                  <p className="text-sm text-muted-foreground">Worldwide accessibility for educational institutions</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <BookOpen className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-bold mb-2">Educational Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Designed specifically for academic and research purposes
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1 grid grid-cols-1 gap-4"
            style={{ y: y2, opacity: opacity2, scale: scale2 }}
          >
            <ScrollAnimation>
              <Tabs defaultValue="cultural">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="cultural" className="flex items-center gap-2">
                    <History className="h-4 w-4" />
                    <span>Cultural Heritage</span>
                  </TabsTrigger>
                  <TabsTrigger value="educational" className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span>Educational Value</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="cultural" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-4">Preserving Cultural Heritage</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                            1
                          </span>
                          <span>Digitally preserving artifacts at risk of damage or destruction</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                            2
                          </span>
                          <span>Creating detailed 3D records of historical objects for future generations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                            3
                          </span>
                          <span>Enabling virtual exhibitions of cultural artifacts from across the MENA region</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                            4
                          </span>
                          <span>Documenting traditional crafts and techniques through 3D visualization</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="educational" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-4">Educational Applications</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                            1
                          </span>
                          <span>Providing students with access to rare specimens and artifacts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                            2
                          </span>
                          <span>Enabling interactive learning experiences in VR and AR environments</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                            3
                          </span>
                          <span>Supporting research through detailed 3D models with accurate measurements</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                            4
                          </span>
                          <span>Creating cross-disciplinary learning opportunities across institutions</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </ScrollAnimation>
          </motion.div>

          <motion.div className="order-1 lg:order-2 md:pl-8" style={{ y: y2, opacity: opacity2, scale: scale2 }}>
            <ScrollAnimation>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why It Matters</h3>
              <p className="text-muted-foreground mb-6">
                The MENA region is home to some of the world's most significant historical and cultural artifacts, many
                of which are inaccessible to the broader public due to geographical, political, or preservation
                constraints.
              </p>
              <p className="text-muted-foreground mb-6">
                By creating detailed 3D scans of these objects, we're not only preserving them digitally for future
                generations but also democratizing access to educational resources that were previously available only
                to a privileged few.
              </p>
              <p className="text-muted-foreground mb-6">
                Our growing library of 3D assets serves as a valuable resource for educators, researchers, and students
                across disciplines, from archaeology and anthropology to art, design, and engineering.
              </p>
              <div className="h-1 w-20 bg-primary"></div>
            </ScrollAnimation>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

