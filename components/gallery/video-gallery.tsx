"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Calendar, Tag, Share2 } from "lucide-react"
import { galleryData } from "@/data/gallery-data"

interface VideoGalleryProps {
  category: string
  timeframe: string
}

export default function VideoGallery({ category, timeframe }: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Filter videos based on category and timeframe
  const videos = galleryData.videos.filter((video) => {
    const categoryMatch = category === "all" || video.category === category

    if (timeframe === "all") return categoryMatch

    const now = new Date()
    const videoDate = new Date(video.date)

    if (timeframe === "week") {
      const weekAgo = new Date(now.setDate(now.getDate() - 7))
      return categoryMatch && videoDate >= weekAgo
    }

    if (timeframe === "month") {
      const monthAgo = new Date(now.setMonth(now.getMonth() - 1))
      return categoryMatch && videoDate >= monthAgo
    }

    if (timeframe === "year") {
      const yearAgo = new Date(now.setFullYear(now.getFullYear() - 1))
      return categoryMatch && videoDate >= yearAgo
    }

    return categoryMatch
  })

  // Sort by date (newest first)
  const sortedVideos = [...videos].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedVideos.length > 0 ? (
          sortedVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative overflow-hidden rounded-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedVideo(video)}
              whileHover={{ scale: 1.03 }}
            >
              <div className="aspect-video relative">
                <img
                  src={video.thumbnailUrl || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-black/70 px-2 py-1 m-2 rounded text-xs text-white">
                  {formatDuration(video.duration)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium">{video.title}</h3>
                  <p className="text-white/80 text-sm">{new Date(video.date).toLocaleDateString()}</p>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No videos found matching your filters.</p>
          </div>
        )}
      </div>

      <Dialog
        open={!!selectedVideo}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedVideo(null)
            setIsPlaying(false)
          }
        }}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <div className="flex flex-col">
            {selectedVideo && (
              <>
                <div className="relative aspect-video">
                  <video
                    ref={videoRef}
                    src={selectedVideo.videoUrl}
                    poster={selectedVideo.thumbnailUrl}
                    className="w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation()
                          togglePlay()
                        }}
                        className="text-white hover:bg-white/20"
                      >
                        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleMute()
                        }}
                        className="text-white hover:bg-white/20"
                      >
                        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
                  <p className="text-muted-foreground mb-4">{selectedVideo.description}</p>

                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {new Date(selectedVideo.date).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground capitalize">{selectedVideo.category}</span>
                  </div>

                  <div className="flex gap-2 mt-6">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

