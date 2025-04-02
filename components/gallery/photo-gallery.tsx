"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, Tag, Download, Share2 } from "lucide-react"
import { galleryData } from "@/data/gallery-data"

interface PhotoGalleryProps {
  category: string
  timeframe: string
}

export default function PhotoGallery({ category, timeframe }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null)

  // Filter photos based on category and timeframe
  const photos = galleryData.photos.filter((photo) => {
    const categoryMatch = category === "all" || photo.category === category

    if (timeframe === "all") return categoryMatch

    const now = new Date()
    const photoDate = new Date(photo.date)

    if (timeframe === "week") {
      const weekAgo = new Date(now.setDate(now.getDate() - 7))
      return categoryMatch && photoDate >= weekAgo
    }

    if (timeframe === "month") {
      const monthAgo = new Date(now.setMonth(now.getMonth() - 1))
      return categoryMatch && photoDate >= monthAgo
    }

    if (timeframe === "year") {
      const yearAgo = new Date(now.setFullYear(now.getFullYear() - 1))
      return categoryMatch && photoDate >= yearAgo
    }

    return categoryMatch
  })

  // Sort by date (newest first)
  const sortedPhotos = [...photos].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedPhotos.length > 0 ? (
          sortedPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer ${
                photo.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedPhoto(photo)}
              whileHover={{ scale: 1.03 }}
            >
              <div className="aspect-square relative">
                <Image src={photo.imageUrl || "/placeholder.svg"} alt={photo.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium">{photo.title}</h3>
                  <p className="text-white/80 text-sm">{new Date(photo.date).toLocaleDateString()}</p>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No photos found matching your filters.</p>
          </div>
        )}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-square">
              {selectedPhoto && (
                <Image
                  src={selectedPhoto.imageUrl || "/placeholder.svg"}
                  alt={selectedPhoto.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <div className="p-6">
              {selectedPhoto && (
                <>
                  <h2 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h2>
                  <p className="text-muted-foreground mb-4">{selectedPhoto.description}</p>

                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {new Date(selectedPhoto.date).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground capitalize">{selectedPhoto.category}</span>
                  </div>

                  <div className="flex gap-2 mt-6">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

