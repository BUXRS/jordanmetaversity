"use client"

import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Video } from "lucide-react"

interface GalleryTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function GalleryTabs({ activeTab, onTabChange }: GalleryTabsProps) {
  return (
    <div className="flex justify-center">
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full max-w-md">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="photo" className="flex items-center gap-2">
            <Camera className="h-4 w-4" />
            <span>Photo Gallery</span>
            {activeTab === "photo" && (
              <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" layoutId="underline" />
            )}
          </TabsTrigger>
          <TabsTrigger value="video" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            <span>Video Gallery</span>
            {activeTab === "video" && (
              <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" layoutId="underline" />
            )}
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

