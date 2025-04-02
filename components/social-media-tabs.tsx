"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Linkedin, Youtube, Instagram, Facebook, Twitter } from "lucide-react"
import SocialMediaEmbed from "./social-media-embed"

export default function SocialMediaTabs() {
  return (
    <Tabs defaultValue="linkedin" className="w-full">
      <TabsList className="grid grid-cols-5 mb-8">
        <TabsTrigger value="linkedin" className="flex items-center gap-2">
          <Linkedin className="h-4 w-4" />
          <span className="hidden md:inline">LinkedIn</span>
        </TabsTrigger>
        <TabsTrigger value="youtube" className="flex items-center gap-2">
          <Youtube className="h-4 w-4" />
          <span className="hidden md:inline">YouTube</span>
        </TabsTrigger>
        <TabsTrigger value="instagram" className="flex items-center gap-2">
          <Instagram className="h-4 w-4" />
          <span className="hidden md:inline">Instagram</span>
        </TabsTrigger>
        <TabsTrigger value="facebook" className="flex items-center gap-2">
          <Facebook className="h-4 w-4" />
          <span className="hidden md:inline">Facebook</span>
        </TabsTrigger>
        <TabsTrigger value="twitter" className="flex items-center gap-2">
          <Twitter className="h-4 w-4" />
          <span className="hidden md:inline">X/Twitter</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="linkedin">
        <SocialMediaEmbed platform="linkedin" />
      </TabsContent>

      <TabsContent value="youtube">
        <SocialMediaEmbed platform="youtube" />
      </TabsContent>

      <TabsContent value="instagram">
        <SocialMediaEmbed platform="instagram" />
      </TabsContent>

      <TabsContent value="facebook">
        <SocialMediaEmbed platform="facebook" />
      </TabsContent>

      <TabsContent value="twitter">
        <SocialMediaEmbed platform="twitter" />
      </TabsContent>
    </Tabs>
  )
}

