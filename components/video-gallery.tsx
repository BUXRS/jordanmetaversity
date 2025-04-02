"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, X, Maximize, Volume2, VolumeX } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

interface Video {
  id: number
  title: string
  description: string
  thumbnail: string
  duration: string
  category: "tour" | "activity" | "testimonial"
}

const videos: Video[] = [
  {
    id: 1,
    title: "University of Jordan XR Lab Tour",
    description:
      "Take a virtual tour of our flagship XR lab at the University of Jordan, featuring state-of-the-art VR headsets and interactive workstations.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "3:45",
    category: "tour",
  },
  {
    id: 2,
    title: "Medical Training in VR",
    description:
      "Watch medical students practice surgical procedures in a safe, virtual environment before working with real patients.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "5:12",
    category: "activity",
  },
  {
    id: 3,
    title: "Engineering Simulation Activity",
    description:
      "Engineering students use VR to visualize and interact with complex mechanical systems, enhancing their understanding of theoretical concepts.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "4:30",
    category: "activity",
  },
  {
    id: 4,
    title: "RAK Medical University Lab Tour",
    description:
      "Explore the specialized medical XR lab at RAK Medical University, designed for advanced healthcare training.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "3:20",
    category: "tour",
  },
  {
    id: 5,
    title: "Student Testimonials",
    description:
      "Hear from students about how XR technology has transformed their learning experience and prepared them for their future careers.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "6:15",
    category: "testimonial",
  },
  {
    id: 6,
    title: "Architectural Design in VR",
    description:
      "Architecture students create and walk through their designs in virtual reality, gaining new perspectives on spatial relationships.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "4:45",
    category: "activity",
  },
]

export default function VideoGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const filteredVideos = activeFilter === "all" ? videos : videos.filter((video) => video.category === activeFilter)

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video)
    setIsPlaying(true)

    // In a real implementation, you would load the actual video
    // For this example, we're just showing a placeholder
  }

  const handleCloseVideo = () => {
    setSelectedVideo(null)
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
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

  const toggleFullscreen = () => {
    if (!videoRef.current) return

    if (!isFullscreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }

    setIsFullscreen(!isFullscreen)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-6 text-center">Video Walkthroughs</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Explore our Metaversity Labs in action through virtual tours, activity demonstrations, and testimonials from
            students and educators.
          </p>
        </ScrollAnimation>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
            className="rounded-full"
          >
            All Videos
          </Button>
          <Button
            variant={activeFilter === "tour" ? "default" : "outline"}
            onClick={() => setActiveFilter("tour")}
            className="rounded-full"
          >
            Lab Tours
          </Button>
          <Button
            variant={activeFilter === "activity" ? "default" : "outline"}
            onClick={() => setActiveFilter("activity")}
            className="rounded-full"
          >
            Activities
          </Button>
          <Button
            variant={activeFilter === "testimonial" ? "default" : "outline"}
            onClick={() => setActiveFilter("testimonial")}
            className="rounded-full"
          >
            Testimonials
          </Button>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-video cursor-pointer group" onClick={() => handleVideoClick(video)}>
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4 flex-grow flex flex-col">
                    <h3 className="font-bold mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">{video.description}</p>
                    <div className="mt-3">
                      <span className="inline-block px-2 py-1 bg-secondary text-xs rounded-full capitalize">
                        {video.category === "tour"
                          ? "Lab Tour"
                          : video.category === "activity"
                            ? "Activity"
                            : "Testimonial"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Video modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            >
              <div className="relative w-full max-w-4xl">
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  {/* In a real implementation, you would use the actual video source */}
                  <video
                    ref={videoRef}
                    className="w-full h-full object-contain"
                    poster={selectedVideo.thumbnail}
                    controls={false}
                    autoPlay={isPlaying}
                    muted={isMuted}
                  >
                    <source src="/placeholder-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center">
                    <Button variant="ghost" size="icon" onClick={togglePlay} className="text-white hover:bg-white/20">
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>

                    <Button variant="ghost" size="icon" onClick={toggleMute} className="text-white hover:bg-white/20">
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </Button>

                    <div className="flex-grow mx-4">
                      <div className="h-1 bg-white/30 rounded-full">
                        <div className="h-full w-1/3 bg-primary rounded-full"></div>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleFullscreen}
                      className="text-white hover:bg-white/20"
                    >
                      <Maximize className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCloseVideo}
                  className="absolute -top-10 right-0 text-white hover:bg-white/20"
                >
                  <X className="h-6 w-6" />
                </Button>

                <div className="mt-4 text-white">
                  <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
                  <p className="text-white/80">{selectedVideo.description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

