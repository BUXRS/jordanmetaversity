"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Youtube, Instagram, Facebook, Twitter } from "lucide-react"
import type { SocialPlatform } from "./social-media-filter"

interface SocialMediaEmbedProps {
  platform: SocialPlatform
}

export default function SocialMediaEmbed({ platform }: SocialMediaEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

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
        return "border-[#0A66C2]"
      case "youtube":
        return "border-[#FF0000]"
      case "instagram":
        return "border-[#E4405F]"
      case "facebook":
        return "border-[#1877F2]"
      case "twitter":
        return "border-[#1DA1F2]"
      default:
        return "border-primary"
    }
  }

  const renderEmbedPlaceholder = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-96 bg-secondary/30 animate-pulse">
          <div className="text-center">
            <div className="inline-block rounded-full p-3 bg-secondary">{getPlatformIcon(platform)}</div>
            <p className="mt-2 text-muted-foreground">Loading {platform} feed...</p>
          </div>
        </div>
      )
    }

    return (
      <div className="flex items-center justify-center h-96 bg-secondary/10">
        <div className="text-center p-6">
          <div className="inline-block rounded-full p-4 bg-secondary mb-4">{getPlatformIcon(platform)}</div>
          <h3 className="text-lg font-bold mb-2">{platform.charAt(0).toUpperCase() + platform.slice(1)} Feed</h3>
          <p className="text-muted-foreground mb-4">
            This is where the embedded {platform} feed would appear.
            <br />
            In a production environment, this would use the {platform} API or embed code.
          </p>
          <div className="text-xs text-muted-foreground">
            Note: Actual social media embeds require API keys and OAuth authentication
          </div>
        </div>
      </div>
    )
  }

  return (
    <Card className={`border-t-4 ${getPlatformColor(platform)}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          {getPlatformIcon(platform)}
          <span className="ml-2">{platform.charAt(0).toUpperCase() + platform.slice(1)} Feed</span>
        </CardTitle>
      </CardHeader>
      <CardContent>{renderEmbedPlaceholder()}</CardContent>
    </Card>
  )
}

