"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Heart,
  MessageSquare,
  Share2,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import type { SocialPlatform } from "./social-media-filter"

export interface SocialMediaPost {
  id: string
  platform: SocialPlatform
  content: string
  media?: string
  mediaType?: "image" | "video"
  author: {
    name: string
    avatar: string
  }
  date: string
  stats: {
    likes: number
    comments: number
    shares: number
  }
  url: string
}

interface SocialMediaCardProps {
  post: SocialMediaPost
}

export default function SocialMediaCard({ post }: SocialMediaCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getPlatformIcon = (platform: SocialPlatform) => {
    switch (platform) {
      case "linkedin":
        return <Linkedin className="h-5 w-5 text-[#0A66C2]" />
      case "youtube":
        return <Youtube className="h-5 w-5 text-[#FF0000]" />
      case "instagram":
        return <Instagram className="h-5 w-5 text-[#E4405F]" />
      case "facebook":
        return <Facebook className="h-5 w-5 text-[#1877F2]" />
      case "twitter":
        return <Twitter className="h-5 w-5 text-[#1DA1F2]" />
      default:
        return null
    }
  }

  const getPlatformColor = (platform: SocialPlatform) => {
    switch (platform) {
      case "linkedin":
        return "bg-[#0A66C2]/10 text-[#0A66C2] border-[#0A66C2]/20"
      case "youtube":
        return "bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/20"
      case "instagram":
        return "bg-[#E4405F]/10 text-[#E4405F] border-[#E4405F]/20"
      case "facebook":
        return "bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/20"
      case "twitter":
        return "bg-[#1DA1F2]/10 text-[#1DA1F2] border-[#1DA1F2]/20"
      default:
        return "bg-primary/10 text-primary border-primary/20"
    }
  }

  return (
    <Card
      className={`overflow-hidden h-full flex flex-col transition-all duration-300 ${
        isHovered ? "shadow-lg transform -translate-y-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={post.author.avatar || "/placeholder.svg?height=40&width=40"}
              alt={post.author.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          </div>
          <Badge variant="outline" className={`${getPlatformColor(post.platform)}`}>
            <span className="flex items-center">
              {getPlatformIcon(post.platform)}
              <span className="ml-1 hidden sm:inline">
                {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
              </span>
            </span>
          </Badge>
        </div>

        <div className="mb-4">
          <p className="text-sm whitespace-pre-line">{post.content}</p>
        </div>

        {post.media && (
          <div className="mb-4 rounded-md overflow-hidden">
            {post.mediaType === "video" ? (
              <div className="aspect-video bg-black relative">
                <img
                  src={post.media || "/placeholder.svg"}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            ) : (
              <img src={post.media || "/placeholder.svg"} alt="Post media" className="w-full h-auto" />
            )}
          </div>
        )}

        <div className="flex items-center text-sm text-muted-foreground space-x-4">
          <div className="flex items-center">
            <Heart className="h-4 w-4 mr-1" />
            <span>{post.stats.likes}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>{post.stats.comments}</span>
          </div>
          <div className="flex items-center">
            <Share2 className="h-4 w-4 mr-1" />
            <span>{post.stats.shares}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 mt-auto">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            View Original Post
            <ExternalLink className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

