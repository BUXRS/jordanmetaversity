import type { Metadata } from "next"
import GalleryClientPage from "./GalleryClientPage"

export const metadata: Metadata = {
  title: "Gallery | Beyond Universe XR",
  description: "Explore our collection of immersive XR experiences through videos and photos",
}

export default function GalleryPage() {
  return <GalleryClientPage />
}

