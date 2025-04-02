"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Youtube, Instagram, Facebook, Twitter } from "lucide-react"

export type SocialPlatform = "all" | "linkedin" | "youtube" | "instagram" | "facebook" | "twitter"

interface SocialMediaFilterProps {
  activePlatform: SocialPlatform
  onFilterChange: (platform: SocialPlatform) => void
}

export default function SocialMediaFilter({ activePlatform, onFilterChange }: SocialMediaFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      <Button
        variant={activePlatform === "all" ? "default" : "outline"}
        onClick={() => onFilterChange("all")}
        className="rounded-full"
      >
        All Platforms
      </Button>

      <Button
        variant={activePlatform === "linkedin" ? "default" : "outline"}
        onClick={() => onFilterChange("linkedin")}
        className="rounded-full"
      >
        <Linkedin className="h-4 w-4 mr-2" />
        LinkedIn
      </Button>

      <Button
        variant={activePlatform === "youtube" ? "default" : "outline"}
        onClick={() => onFilterChange("youtube")}
        className="rounded-full"
      >
        <Youtube className="h-4 w-4 mr-2" />
        YouTube
      </Button>

      <Button
        variant={activePlatform === "instagram" ? "default" : "outline"}
        onClick={() => onFilterChange("instagram")}
        className="rounded-full"
      >
        <Instagram className="h-4 w-4 mr-2" />
        Instagram
      </Button>

      <Button
        variant={activePlatform === "facebook" ? "default" : "outline"}
        onClick={() => onFilterChange("facebook")}
        className="rounded-full"
      >
        <Facebook className="h-4 w-4 mr-2" />
        Facebook
      </Button>

      <Button
        variant={activePlatform === "twitter" ? "default" : "outline"}
        onClick={() => onFilterChange("twitter")}
        className="rounded-full"
      >
        <Twitter className="h-4 w-4 mr-2" />
        X/Twitter
      </Button>
    </div>
  )
}

