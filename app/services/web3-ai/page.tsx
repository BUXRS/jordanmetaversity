"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import Link from "next/link"
import Web3AIHero from "@/components/web3-ai-hero"
import ServiceOverview from "@/components/service-overview"
import AnimatedUseCases from "@/components/animated-use-cases"
import PricingTiers from "@/components/pricing-tiers"
import ImplementationProcess from "@/components/implementation-process"

export default function Web3AIPage() {
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
      <Web3AIHero />

      {/* Service Overview */}
      <ServiceOverview />

      {/* Animated Use Cases */}
      <AnimatedUseCases />

      {/* Implementation Process */}
      <ImplementationProcess />

      {/* Pricing Tiers */}
      <PricingTiers />

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Take the first step toward leveraging the power of Web3 and AI technologies for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Download Service Brochure</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

