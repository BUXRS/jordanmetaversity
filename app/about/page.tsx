"use client"

import { useEffect } from "react"
import ScrollAnimation from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import InteractiveTimeline from "@/components/interactive-timeline"
import GeographicExpansionMap from "@/components/geographic-expansion-map"
import FounderVisionSection from "@/components/founder-vision-section"

export default function AboutPage() {
  useEffect(() => {
    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = "4rem"

    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h1 className="text-4xl font-bold mb-6">About Beyond Universe XR</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Leading the future of immersive technologies in the MENA region through innovation, education, and
              strategic partnerships.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Founder & Vision Section */}
      <FounderVisionSection />

      {/* Interactive Timeline */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveTimeline />
        </div>
      </section>

      {/* Geographic Expansion Map */}
      <GeographicExpansionMap />

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="text-center">
                <div className="w-40 h-40 rounded-full bg-secondary mx-auto mb-4 overflow-hidden">
                  <img src="/placeholder.svg?height=160&width=160" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Ahmed Al-Mansour</h3>
                <p className="text-primary font-medium mb-2">Founder & CEO</p>
                <p className="text-muted-foreground">
                  Visionary leader with 15+ years of experience in technology and education.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="text-center">
                <div className="w-40 h-40 rounded-full bg-secondary mx-auto mb-4 overflow-hidden">
                  <img src="/placeholder.svg?height=160&width=160" alt="CTO" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Sarah Khalid</h3>
                <p className="text-primary font-medium mb-2">Chief Technology Officer</p>
                <p className="text-muted-foreground">
                  Technology innovator specializing in XR development and AI integration.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="text-center">
                <div className="w-40 h-40 rounded-full bg-secondary mx-auto mb-4 overflow-hidden">
                  <img src="/placeholder.svg?height=160&width=160" alt="COO" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Omar Nasser</h3>
                <p className="text-primary font-medium mb-2">Chief Operations Officer</p>
                <p className="text-muted-foreground">
                  Operations expert with a background in scaling technology companies across MENA.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Partner with Beyond Universe XR Solutions to be at the forefront of the immersive technology revolution in
              the MENA region.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-primary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

