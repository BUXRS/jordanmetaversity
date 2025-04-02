"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "../scroll-animation"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Vision into a <span className="text-primary">Virtual Reality</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate to create immersive metaverse architectural experiences that captivate and engage your
              audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/projects" className="flex items-center">
                  Explore More Projects
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

