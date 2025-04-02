"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import GalleryHero from "@/components/gallery/gallery-hero"
import GalleryTabs from "@/components/gallery/gallery-tabs"
import PhotoGallery from "@/components/gallery/photo-gallery"
import VideoGallery from "@/components/gallery/video-gallery"
import GalleryFilter from "@/components/gallery/gallery-filter"

export default function GalleryClientPage() {
  const [activeTab, setActiveTab] = useState("photo")
  const [category, setCategory] = useState("all")
  const [timeframe, setTimeframe] = useState("all")
  const searchParams = useSearchParams()

  useEffect(() => {
    // Set initial tab based on URL parameter if present
    const typeParam = searchParams.get("type")
    if (typeParam === "photo" || typeParam === "video") {
      setActiveTab(typeParam)
    }

    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = "4rem"

    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [searchParams])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const handleFilterChange = (filterType: string, value: string) => {
    if (filterType === "category") {
      setCategory(value)
    } else if (filterType === "timeframe") {
      setTimeframe(value)
    }
  }

  return (
    <div className="min-h-screen">
      <GalleryHero />

      <div className="container mx-auto px-4 py-12">
        <GalleryTabs activeTab={activeTab} onTabChange={handleTabChange} />

        <div className="mt-8">
          <GalleryFilter category={category} timeframe={timeframe} onFilterChange={handleFilterChange} />
        </div>

        <div className="mt-8">
          {activeTab === "photo" ? (
            <PhotoGallery category={category} timeframe={timeframe} />
          ) : (
            <VideoGallery category={category} timeframe={timeframe} />
          )}
        </div>
      </div>
    </div>
  )
}

