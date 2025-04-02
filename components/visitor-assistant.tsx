"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CuboidIcon as Cube, Scan, Braces, Globe, X, ArrowRight } from "lucide-react"
import Link from "next/link"

interface VisitorAssistantProps {
  isOpen: boolean
  onClose: () => void
}

export default function VisitorAssistant({ isOpen, onClose }: VisitorAssistantProps) {
  const [activeTab, setActiveTab] = useState("services")

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md">
      <Card className="shadow-lg border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle>How can we help you?</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>Explore our core offerings or find what you're looking for</CardDescription>
        </CardHeader>
        <Tabs defaultValue="services" value={activeTab} onValueChange={setActiveTab}>
          <div className="px-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="journey">Your Journey</TabsTrigger>
              <TabsTrigger value="quicklinks">Quick Links</TabsTrigger>
            </TabsList>
          </div>

          <CardContent className="pt-4 pb-0">
            <TabsContent value="services" className="mt-0 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Link href="/services/metaversity-labs" onClick={onClose}>
                  <div className="border rounded-lg p-3 hover:bg-primary/5 transition-colors h-full flex flex-col">
                    <div className="mb-2 text-primary">
                      <Cube className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-medium">Metaversity Labs</h3>
                    <p className="text-xs text-muted-foreground mt-1">Immersive XR labs for education</p>
                  </div>
                </Link>

                <Link href="/services/scan-4-3d" onClick={onClose}>
                  <div className="border rounded-lg p-3 hover:bg-primary/5 transition-colors h-full flex flex-col">
                    <div className="mb-2 text-primary">
                      <Scan className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-medium">Scan 4 3D</h3>
                    <p className="text-xs text-muted-foreground mt-1">Building 3D asset libraries</p>
                  </div>
                </Link>

                <Link href="/services/web3-ai" onClick={onClose}>
                  <div className="border rounded-lg p-3 hover:bg-primary/5 transition-colors h-full flex flex-col">
                    <div className="mb-2 text-primary">
                      <Braces className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-medium">Web3 & AI</h3>
                    <p className="text-xs text-muted-foreground mt-1">Smart contracts and AI solutions</p>
                  </div>
                </Link>

                <Link href="/services/spatial-metaverse" onClick={onClose}>
                  <div className="border rounded-lg p-3 hover:bg-primary/5 transition-colors h-full flex flex-col">
                    <div className="mb-2 text-primary">
                      <Globe className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-medium">Spatial.io Metaverse</h3>
                    <p className="text-xs text-muted-foreground mt-1">Custom metaverse environments</p>
                  </div>
                </Link>
              </div>

              <div className="text-center">
                <Button asChild variant="link" size="sm" className="text-xs">
                  <Link href="/services" onClick={onClose}>
                    View all services
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="journey" className="mt-0">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <span className="bg-primary/10 text-primary w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">
                      1
                    </span>
                    Explore Our Solutions
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Discover our range of XR, Web3, and AI solutions tailored for different sectors.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="text-xs h-7">
                      <Link href="/services" onClick={onClose}>
                        Services
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="text-xs h-7">
                      <Link href="/projects" onClick={onClose}>
                        Case Studies
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <span className="bg-primary/10 text-primary w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">
                      2
                    </span>
                    See Our Work
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Browse our projects and partnerships to see real-world implementations.
                  </p>
                  <Button asChild variant="outline" size="sm" className="text-xs h-7">
                    <Link href="/projects" onClick={onClose}>
                      View Projects
                    </Link>
                  </Button>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <span className="bg-primary/10 text-primary w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">
                      3
                    </span>
                    Get in Touch
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Ready to discuss your project? Contact our team for a consultation.
                  </p>
                  <Button asChild size="sm" className="text-xs h-7">
                    <Link href="/contact" onClick={onClose}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="quicklinks" className="mt-0">
              <div className="grid grid-cols-2 gap-3">
                <Link href="/about" onClick={onClose}>
                  <div className="border rounded-lg p-3 hover:bg-primary/5 transition-colors">
                    <h3 className="text-sm font-medium">About Us</h3>
                    <p className="text-xs text-muted-foreground mt-1">Our story and mission</p>
                  </div>
                </Link>

                <Link href="/blog" onClick={onClose}>
                  <div className="border rounded-lg p-3 hover:bg-primary/5 transition-colors">
                    <h3 className="text-sm font-medium">Blog</h3>
                    <p className="text-xs text-muted-foreground mt-1">Insights and articles</p>
                  </div>
                </Link>

                <Link href="/news" onClick={onClose}>
                  <div className="border rounded-lg p-3 hover:bg-primary/5 transition-colors">
                    <h3 className="text-sm font-medium">News</h3>
                    <p className="text-xs text-muted-foreground mt-1">Latest announcements</p>
                  </div>
                </Link>

                <Link href="/social" onClick={onClose}>
                  <div className="border rounded-lg p-3 hover:bg-primary/5 transition-colors">
                    <h3 className="text-sm font-medium">Social Media</h3>
                    <p className="text-xs text-muted-foreground mt-1">Connect with us</p>
                  </div>
                </Link>

                <Link href="/projects" onClick={onClose}>
                  <div className="border rounded-lg p-3 hover:bg-primary/5 transition-colors">
                    <h3 className="text-sm font-medium">Projects</h3>
                    <p className="text-xs text-muted-foreground mt-1">Our implementations</p>
                  </div>
                </Link>

                <Link href="/contact" onClick={onClose}>
                  <div className="border rounded-lg p-3 hover:bg-primary/5 transition-colors">
                    <h3 className="text-sm font-medium">Contact</h3>
                    <p className="text-xs text-muted-foreground mt-1">Get in touch</p>
                  </div>
                </Link>
              </div>
            </TabsContent>
          </CardContent>

          <CardFooter className="pt-4">
            <div className="w-full text-center">
              <p className="text-xs text-muted-foreground mb-2">Need immediate assistance?</p>
              <Button asChild size="sm" className="w-full">
                <Link href="/contact" onClick={onClose}>
                  Contact Our Team
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Tabs>
      </Card>
    </div>
  )
}

