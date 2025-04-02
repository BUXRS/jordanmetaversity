"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, X, Play, Maximize, Volume2, VolumeX } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Virtual Corporate Headquarters",
    description:
      "A fully interactive corporate headquarters designed for a Fortune 500 company, featuring meeting spaces, presentation areas, and collaborative workspaces.",
    client: "Global Tech Solutions",
    category: "corporate",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    video: {
      thumbnail: "/placeholder.svg?height=400&width=600",
      url: "/placeholder-video.mp4",
    },
    features: [
      "Interactive meeting rooms with presentation capabilities",
      "Virtual offices for remote employees",
      "Digital asset showcase areas",
      "Immersive brand experience zones",
    ],
  },
  {
    id: 2,
    title: "Metaverse Art Gallery",
    description:
      "An expansive virtual art gallery featuring interactive exhibits, artist spaces, and immersive art installations that transcend physical limitations.",
    client: "Contemporary Arts Foundation",
    category: "cultural",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    video: {
      thumbnail: "/placeholder.svg?height=400&width=600",
      url: "/placeholder-video.mp4",
    },
    features: [
      "Dynamic exhibition spaces that transform with content",
      "Interactive art installations",
      "Virtual artist residency spaces",
      "NFT gallery and marketplace integration",
    ],
  },
  {
    id: 3,
    title: "Virtual Education Campus",
    description:
      "A comprehensive educational environment designed for immersive learning experiences, featuring classrooms, laboratories, and collaborative study areas.",
    client: "Future Learning Institute",
    category: "educational",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    video: {
      thumbnail: "/placeholder.svg?height=400&width=600",
      url: "/placeholder-video.mp4",
    },
    features: [
      "Interactive classrooms with 3D learning materials",
      "Virtual science laboratories",
      "Collaborative project spaces",
      "Digital library and resource center",
    ],
  },
  {
    id: 4,
    title: "Luxury Metaverse Retail Experience",
    description:
      "A high-end virtual retail environment for luxury brands, featuring immersive product showcases, virtual try-ons, and exclusive customer experiences.",
    client: "Prestige Brands Collective",
    category: "retail",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    video: {
      thumbnail: "/placeholder.svg?height=400&width=600",
      url: "/placeholder-video.mp4",
    },
    features: [
      "Virtual product showcases with detailed 3D models",
      "Avatar try-on experiences",
      "Exclusive VIP customer lounges",
      "Integrated e-commerce functionality",
    ],
  },
  {
    id: 5,
    title: "Virtual Concert Venue",
    description:
      "A dynamic concert and event space designed for virtual performances, featuring customizable stages, immersive lighting, and interactive audience areas.",
    client: "Global Entertainment Group",
    category: "entertainment",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    video: {
      thumbnail: "/placeholder.svg?height=400&width=600",
      url: "/placeholder-video.mp4",
    },
    features: [
      "Dynamically transforming stage environments",
      "Interactive audience participation features",
      "VIP viewing areas and meet-and-greet spaces",
      "Integrated ticketing and merchandise systems",
    ],
  },
  {
    id: 6,
    title: "Metaverse Real Estate Development",
    description:
      "A comprehensive virtual real estate development featuring residential, commercial, and recreational spaces in a cohesive metaverse neighborhood.",
    client: "Digital Horizons Properties",
    category: "real-estate",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    video: {
      thumbnail: "/placeholder.svg?height=400&width=600",
      url: "/placeholder-video.mp4",
    },
    features: [
      "Customizable residential properties",
      "Commercial spaces for virtual businesses",
      "Community gathering areas and parks",
      "Integrated transportation system",
    ],
  },
]

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef(null)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "corporate", label: "Corporate" },
    { id: "cultural", label: "Cultural" },
    { id: "educational", label: "Educational" },
    { id: "retail", label: "Retail" },
    { id: "entertainment", label: "Entertainment" },
    { id: "real-estate", label: "Real Estate" },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setShowVideo(false)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of metaverse architectural designs and immersive 3D environments.
            </p>
          </div>
        </ScrollAnimation>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <ScrollAnimation>
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="rounded-full">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollAnimation>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ScrollAnimation key={project.id} delay={index * 0.1}>
                  <Card
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="relative aspect-video">
                      <img
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium px-4 py-2 rounded-full bg-primary/80">
                          View Project
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{project.description.substring(0, 100)}...</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-primary">{project.client}</span>
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full capitalize">
                          {project.category}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto"
          >
            <div className="relative w-full max-w-6xl bg-background rounded-lg overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                <div>
                  {!showVideo ? (
                    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                      <img
                        src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                        alt={selectedProject.title}
                        className="w-full h-full object-contain"
                      />

                      {/* Image navigation */}
                      <div className="absolute inset-y-0 left-0 flex items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation()
                            handlePrevImage()
                          }}
                          className="bg-black/50 text-white hover:bg-black/70 ml-2"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                      </div>

                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleNextImage()
                          }}
                          className="bg-black/50 text-white hover:bg-black/70 mr-2"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </div>

                      {/* Image counter */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                      <video
                        ref={videoRef}
                        className="w-full h-full object-contain"
                        poster={selectedProject.video.thumbnail}
                        controls={false}
                        autoPlay={isPlaying}
                        muted={isMuted}
                      >
                        <source src={selectedProject.video.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Video controls */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={togglePlay}
                          className="text-white hover:bg-white/20"
                        >
                          {isPlaying ? <X className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={toggleMute}
                          className="text-white hover:bg-white/20"
                        >
                          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </Button>

                        <div className="flex-grow mx-4">
                          <div className="h-1 bg-white/30 rounded-full">
                            <div className="h-full w-1/3 bg-primary rounded-full"></div>
                          </div>
                        </div>

                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                          <Maximize className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 mt-4">
                    <Button
                      variant={!showVideo ? "default" : "outline"}
                      onClick={() => setShowVideo(false)}
                      className="flex-1"
                    >
                      Images
                    </Button>
                    <Button
                      variant={showVideo ? "default" : "outline"}
                      onClick={() => {
                        setShowVideo(true)
                        setIsPlaying(true)
                      }}
                      className="flex-1"
                    >
                      Video Tour
                    </Button>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                  <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Client</h3>
                    <p>{selectedProject.client}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full">Request Similar Project</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

