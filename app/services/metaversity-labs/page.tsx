"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import Link from "next/link"
import Metaversity3DHero from "@/components/metaversity-3d-hero"
import LabOfferingSection from "@/components/lab-offering-section"
import PartnerShowcase from "@/components/partner-showcase"
import VideoGallery from "@/components/video-gallery"
import LiveCounter from "@/components/live-counter"

export default function MetaversityLabsPage() {
  useEffect(() => {
    // No padding needed for the hero section
    document.body.style.paddingTop = "0"

    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [])

  return (
    <>
      {/* 3D Hero Section */}
      <Metaversity3DHero />

      {/* Lab Offerings Sections */}
      <LabOfferingSection />

      {/* Partner Showcase */}
      <PartnerShowcase />

      {/* Video Gallery */}
      <VideoGallery />

      {/* Live Counter */}
      <LiveCounter />

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Education?</h2>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Contact us today to learn how Metaversity Labs can revolutionize learning at your institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Download Brochure</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

