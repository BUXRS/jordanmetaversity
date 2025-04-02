"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Facebook, Copy, Check, Share2 } from 'lucide-react'

interface NewsShareProps {
    title: string
    slug?: string
    url: string
    isOpen?: boolean  // Add these props to match how it's used in news/[slug]/page.tsx
    onClose?: () => void
}

export default function NewsShare({ title, slug, url, isOpen, onClose }: NewsShareProps) {
    const [copied, setCopied] = useState(false)
    const [shareUrl, setShareUrl] = useState("")

    useEffect(() => {
        // If url is provided, use it, otherwise construct from window location
        setShareUrl(url || window.location.href)
    }, [url])

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl)
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    const encodedTitle = encodeURIComponent(title)
    const encodedUrl = encodeURIComponent(shareUrl)

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`

    // If this is being used as a modal and isOpen is false, don't render anything
    if (isOpen === false) {
        return null
    }

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

            {/* Add close button if this is being used as a modal */}
            {onClose && (
                <Button variant="ghost" className="mt-4" onClick={onClose}>
                    Close
                </Button>
            )}
        </div>
    )
}