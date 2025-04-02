"use client"

import { useEffect } from "react"
import ThreeIntroSection from "@/components/three-intro-section"
import ParallaxStorySection from "@/components/parallax-story-section"
import MENAMapSection from "@/components/mena-map-section"
import DemandChartSection from "@/components/demand-chart-section"
import AwardsSection from "@/components/awards-section"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import ScrollAnimation from "@/components/scroll-animation"
import FeaturedProjects from "@/components/featured-projects"
import { CuboidIcon as Cube, Scan, Braces, Globe } from "lucide-react"
import Link from "next/link"

export default function Home() {
  useEffect(() => {
    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = "0" // Changed to 0 for full-screen hero

    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [])

  return (
    <>
      {/* 3D Animated Intro Section */}
      <ThreeIntroSection />

      {/* Apple-style Storytelling Section */}
      <ParallaxStorySection />

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Discover our comprehensive range of immersive technology solutions designed to transform education,
              business, and entertainment.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimation delay={100}>
              <ServiceCard
                title="Metaversity Labs"
                description="Immersive XR labs for educational institutions"
                icon={<Cube className="h-6 w-6" />}
                href="/services/metaversity-labs"
              />
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <ServiceCard
                title="Scan 4 3D"
                description="Building the world's largest academic 3D asset library"
                icon={<Scan className="h-6 w-6" />}
                href="/services/scan-4-3d"
              />
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <ServiceCard
                title="Web3 & AI Services"
                description="Smart contracts, NFTs, and custom AI solutions"
                icon={<Braces className="h-6 w-6" />}
                href="/services/web3-ai"
              />
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <ServiceCard
                title="Spatial.io Metaverse"
                description="Custom metaverse environments for collaboration"
                icon={<Globe className="h-6 w-6" />}
                href="/services/spatial-metaverse"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <AwardsSection />

      {/* Interactive 3D MENA Map Section */}
      <MENAMapSection />

      {/* Animated Chart Section */}
      <DemandChartSection />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">Ready to Step Into the Future?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Partner with Beyond Universe XR Solutions to transform your business or educational institution with
              cutting-edge XR, Metaverse, Web3, and AI technologies.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-primary">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

