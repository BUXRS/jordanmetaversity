"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import Link from "next/link"
import Scan3DHero from "@/components/scan-3d-hero"
import ProjectExplanation from "@/components/project-explanation"
import TargetAudience from "@/components/target-audience"
import DemoVideo from "@/components/demo-video"
import ContributorInvitation from "@/components/contributor-invitation"
import LibraryStats from "@/components/library-stats"

export default function Scan4_3DPage() {
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
      <Scan3DHero />

      {/* Project Explanation */}
      <ProjectExplanation />

      {/* Target Audience */}
      <TargetAudience />

      {/* Demo Video */}
      <DemoVideo />

      {/* Library Stats */}
      <LibraryStats />

      {/* Contributor Invitation */}
      <ContributorInvitation />

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">Join the Scan 4 3D Initiative</h2>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Whether you're a student, educator, or institution, there are many ways to benefit from and contribute to
              the world's largest academic 3D asset library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Download Information Pack</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

