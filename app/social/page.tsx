"use client"

import { useState, useEffect } from "react"
import SocialMediaHero from "@/components/social-media-hero"
import SocialMediaFilter, { type SocialPlatform } from "@/components/social-media-filter"
import SocialMediaGrid from "@/components/social-media-grid"
import SocialMediaTabs from "@/components/social-media-tabs"
import type { SocialMediaPost } from "@/components/social-media-card"
import ScrollAnimation from "@/components/scroll-animation"
import { Separator } from "@/components/ui/separator"
import { Linkedin, Youtube, Instagram, Facebook, Twitter } from "lucide-react"

// Sample social media posts data
const samplePosts: SocialMediaPost[] = [
  {
    id: "linkedin-1",
    platform: "linkedin",
    content:
      "We're excited to announce that our CEO Ahmed Al-Mansour has been honored with the prestigious BTX Top CEO Award at the 2025 BTX Technology Excellence Awards! This recognition highlights our team's dedication to innovation in XR, Web3, and AI technologies across the MENA region. #BTXAwards #Leadership #XRTechnology",
    author: {
      name: "Beyond Universe XR Solutions",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2 days ago",
    stats: {
      likes: 342,
      comments: 47,
      shares: 89,
    },
    url: "https://www.linkedin.com/company/beyond-universe",
  },
  {
    id: "youtube-1",
    platform: "youtube",
    content:
      "🎥 NEW VIDEO: Introducing our enhanced Metaversity Curriculum for Engineering Education! Watch this walkthrough of our new specialized XR content modules for mechanical, electrical, civil, and chemical engineering disciplines.",
    media: "/placeholder.svg?height=400&width=600",
    mediaType: "video",
    author: {
      name: "Beyond Universe XR Solutions",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "1 week ago",
    stats: {
      likes: 1204,
      comments: 156,
      shares: 327,
    },
    url: "https://youtube.com/beyonduniverse",
  },
  {
    id: "instagram-1",
    platform: "instagram",
    content:
      "Behind the scenes at our Dubai office! Our team is hard at work preparing for Dubai Future Week 2025, where our CEO will deliver a keynote on 'The Convergence of XR, AI, and Web3 in Shaping Future Learning Environments.' #BeyondUniverseXR #DubaiFutureWeek #XRTechnology",
    media: "/placeholder.svg?height=600&width=600",
    mediaType: "image",
    author: {
      name: "beyonduniversexr",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "3 days ago",
    stats: {
      likes: 876,
      comments: 42,
      shares: 15,
    },
    url: "https://instagram.com/beyonduniversexr",
  },
  {
    id: "facebook-1",
    platform: "facebook",
    content:
      "We're thrilled to announce our strategic partnership with King Saud University to establish the largest Metaversity Lab in Saudi Arabia! This collaboration will support the kingdom's Vision 2030 educational transformation initiatives and provide cutting-edge XR educational experiences across multiple disciplines.\n\nRead the full announcement on our website: https://beyonduniverse.com/news/king-saud-university-partnership",
    media: "/placeholder.svg?height=400&width=800",
    mediaType: "image",
    author: {
      name: "Beyond Universe XR Solutions",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "1 week ago",
    stats: {
      likes: 523,
      comments: 78,
      shares: 112,
    },
    url: "https://facebook.com/beyonduniversexr",
  },
  {
    id: "twitter-1",
    platform: "twitter",
    content:
      "Proud to be named to the M100 list of Top Tech Innovators in the Middle East for 2025! Ranked #14 overall and #1 in the XR/Metaverse category. Thank you to our amazing team and partners for making this possible! #M100 #Innovation #XR #Metaverse",
    author: {
      name: "Beyond Universe XR",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "5 days ago",
    stats: {
      likes: 289,
      comments: 31,
      shares: 67,
    },
    url: "https://twitter.com/beyonduniversexr",
  },
  {
    id: "linkedin-2",
    platform: "linkedin",
    content:
      "We're hiring! Beyond Universe XR is looking for talented XR Developers, 3D Artists, and AI Engineers to join our growing team in Dubai, Amman, and Riyadh. Help us build the future of immersive education and business solutions across the MENA region.\n\nSee all open positions and apply here: https://beyonduniverse.com/careers",
    author: {
      name: "Beyond Universe XR Solutions",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "1 week ago",
    stats: {
      likes: 187,
      comments: 23,
      shares: 45,
    },
    url: "https://www.linkedin.com/company/beyond-universe",
  },
  {
    id: "youtube-2",
    platform: "youtube",
    content:
      "🎬 Watch the highlights from our recent implementation of a Metaversity Lab at the University of Jordan's Faculty of Engineering. See how students and faculty are using XR technology to enhance learning across multiple engineering disciplines.",
    media: "/placeholder.svg?height=400&width=600",
    mediaType: "video",
    author: {
      name: "Beyond Universe XR Solutions",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2 weeks ago",
    stats: {
      likes: 876,
      comments: 92,
      shares: 134,
    },
    url: "https://youtube.com/beyonduniverse",
  },
  {
    id: "instagram-2",
    platform: "instagram",
    content:
      "Celebrating the expansion of our Scan 4 3D library to over 12,000 high-quality 3D models! This growing collection is helping preserve cultural heritage across the MENA region while providing valuable educational resources. #Scan4D #CulturalHeritage #3DScanning #Education",
    media: "/placeholder.svg?height=600&width=600",
    mediaType: "image",
    author: {
      name: "beyonduniversexr",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "1 week ago",
    stats: {
      likes: 654,
      comments: 37,
      shares: 21,
    },
    url: "https://instagram.com/beyonduniversexr",
  },
  {
    id: "facebook-2",
    platform: "facebook",
    content:
      "We're excited to announce our collaboration with Smart Dubai on a groundbreaking Metaverse City Planning Initiative! This project will develop digital twins of urban environments to enhance city planning, citizen engagement, and sustainable development.\n\nLearn more: https://beyonduniverse.com/news/smart-dubai-collaboration",
    author: {
      name: "Beyond Universe XR Solutions",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2 weeks ago",
    stats: {
      likes: 412,
      comments: 53,
      shares: 87,
    },
    url: "https://facebook.com/beyonduniversexr",
  },
  {
    id: "twitter-2",
    platform: "twitter",
    content:
      "Just announced our Q1 2025 financial results with 42% year-over-year revenue growth! Strong demand for Metaversity Labs and our expanding Web3 & AI service offerings. Thanks to our team and partners for making this possible! $BUXR #FinancialResults #Growth",
    author: {
      name: "Beyond Universe XR",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2 weeks ago",
    stats: {
      likes: 176,
      comments: 24,
      shares: 38,
    },
    url: "https://twitter.com/beyonduniversexr",
  },
]

export default function SocialPage() {
  const [activePlatform, setActivePlatform] = useState<SocialPlatform>("all")

  // Set padding for fixed navbar
  useEffect(() => {
    document.body.style.paddingTop = "4rem"
    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [])

  return (
    <>
      <SocialMediaHero />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimation>
          <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
          <SocialMediaFilter activePlatform={activePlatform} onFilterChange={setActivePlatform} />
        </ScrollAnimation>

        <ScrollAnimation>
          <SocialMediaGrid posts={samplePosts} activePlatform={activePlatform} />
        </ScrollAnimation>

        <Separator className="my-16" />

        <ScrollAnimation>
          <h2 className="text-2xl font-bold mb-6">Live Feeds</h2>
          <p className="text-muted-foreground mb-8">
            Connect directly with our social media platforms through these live feeds. These embeds provide real-time
            updates from our official accounts.
          </p>
          <SocialMediaTabs />
        </ScrollAnimation>

        <div className="mt-16 bg-primary/10 rounded-lg p-8 text-center">
          <ScrollAnimation>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay connected with Beyond Universe XR Solutions across all our social media platforms for the latest
              updates, insights, and announcements.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/company/beyond-universe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0A66C2] text-white rounded-full hover:bg-[#0A66C2]/80 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://youtube.com/beyonduniverse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#FF0000] text-white rounded-full hover:bg-[#FF0000]/80 transition-colors"
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://instagram.com/beyonduniversexr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#E4405F] text-white rounded-full hover:bg-[#E4405F]/80 transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://facebook.com/beyonduniversexr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1877F2] text-white rounded-full hover:bg-[#1877F2]/80 transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com/beyonduniversexr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1DA1F2]/80 transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">X/Twitter</span>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </>
  )
}

