"use client"

import { useState, useEffect } from "react"
import SocialMediaCard, { type SocialMediaPost } from "./social-media-card"
import type { SocialPlatform } from "./social-media-filter"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

interface SocialMediaGridProps {
  posts: SocialMediaPost[]
  activePlatform: SocialPlatform
}

export default function SocialMediaGrid({ posts, activePlatform }: SocialMediaGridProps) {
  const [filteredPosts, setFilteredPosts] = useState<SocialMediaPost[]>([])
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date())

  // Filter posts based on active platform
  useEffect(() => {
    if (activePlatform === "all") {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(posts.filter((post) => post.platform === activePlatform))
    }
  }, [posts, activePlatform])

  // Simulate refresh functionality
  const handleRefresh = () => {
    setIsRefreshing(true)

    // Simulate API call delay
    setTimeout(() => {
      setIsRefreshing(false)
      setLastRefreshed(new Date())

      // In a real implementation, this would fetch fresh data from social media APIs
      // For now, we just update the timestamp
    }, 1500)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {filteredPosts.length} posts from {activePlatform === "all" ? "all platforms" : activePlatform}
        </p>

        <div className="flex items-center">
          <span className="text-sm text-muted-foreground mr-3">Last updated: {lastRefreshed.toLocaleTimeString()}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <SocialMediaCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-secondary/30 rounded-lg">
          <h3 className="text-xl font-bold mb-2">No posts found</h3>
          <p className="text-muted-foreground">
            {activePlatform === "all"
              ? "There are currently no social media posts to display."
              : `There are currently no posts from ${activePlatform} to display.`}
          </p>
        </div>
      )}
    </div>
  )
}

