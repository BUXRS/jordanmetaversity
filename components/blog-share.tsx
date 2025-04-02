"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Facebook, Copy, Check, Share2 } from "lucide-react"

interface BlogShareProps {
  title: string
  slug: string
}

export default function BlogShare({ title, slug }: BlogShareProps) {
  const [copied, setCopied] = useState(false)
  const [url, setUrl] = useState("")

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`

  return (
    <div className="flex flex-col items-center my-8">
      <p className="text-muted-foreground mb-4 flex items-center">
        <Share2 className="h-4 w-4 mr-2" />
        Share this article
      </p>

      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => window.open(twitterUrl, "_blank")}
        >
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Share on Twitter</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => window.open(facebookUrl, "_blank")}
        >
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Share on Facebook</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => window.open(linkedinUrl, "_blank")}
        >
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">Share on LinkedIn</span>
        </Button>

        <Button variant="outline" size="icon" className="rounded-full" onClick={handleCopyLink}>
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy link</span>
        </Button>
      </div>
    </div>
  )
}

