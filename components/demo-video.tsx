"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

export default function DemoVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    setShowModal(true)
    setTimeout(() => {
      setIsPlaying(true)
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, 100)
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

  const closeModal = () => {
    setIsPlaying(false)
    setShowModal(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-6 text-center">See Scan It App in Action</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Watch our demo video to see how easy it is to create high-quality 3D scans using our Scan It mobile
            application.
          </p>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div
              className="aspect-video bg-black rounded-lg overflow-hidden relative cursor-pointer group"
              onClick={handlePlayClick}
            >
              <img
                src="/placeholder.svg?height=720&width=1280"
                alt="Scan It App Demo Video"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center">
                  <Play className="h-10 w-10 text-white" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">3:45</div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <ScrollAnimation delay={100}>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2">Easy to Use</h3>
                  <p className="text-sm text-muted-foreground">
                    Simple interface designed for users of all technical levels
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2">High-Quality Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced algorithms ensure detailed and accurate 3D models
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2">Instant Sharing</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload directly to the Scan 4 3D library with metadata
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>

        {/* Video modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl"
            >
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                {/* In a real implementation, you would use the actual video source */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  poster="/placeholder.svg?height=720&width=1280"
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
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="mt-4 text-white">
                <h3 className="text-xl font-bold">Scan It App Demo</h3>
                <p className="text-white/80">
                  See how to scan objects, process 3D models, and contribute to the Scan 4 3D library.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

