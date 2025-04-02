"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ScrollAnimation from "@/components/scroll-animation"

export default function SitemapPage() {
  useEffect(() => {
    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = "4rem"

    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [])

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h1 className="text-4xl font-bold mb-6">Sitemap</h1>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            A complete overview of all pages available on the Beyond Universe XR Solutions website.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollAnimation>
            <Card>
              <CardHeader>
                <CardTitle>Main Pages</CardTitle>
                <CardDescription>Primary navigation pages</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-primary hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-primary hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="text-primary hover:underline">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-primary hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <Card>
              <CardHeader>
                <CardTitle>Services</CardTitle>
                <CardDescription>Our core offerings</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/metaversity-labs" className="text-primary hover:underline">
                      Metaversity Labs
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/scan-4-3d" className="text-primary hover:underline">
                      Scan 4 3D
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web3-ai" className="text-primary hover:underline">
                      Web3 & AI Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/spatial-metaverse" className="text-primary hover:underline">
                      Spatial.io Metaverse
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <Card>
              <CardHeader>
                <CardTitle>Projects & Partners</CardTitle>
                <CardDescription>Our implementations and collaborations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/projects" className="text-primary hover:underline">
                      All Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects?category=education" className="text-primary hover:underline">
                      Education Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects?category=government" className="text-primary hover:underline">
                      Government Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects?category=media" className="text-primary hover:underline">
                      Media Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects?category=healthcare" className="text-primary hover:underline">
                      Healthcare Projects
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <Card>
              <CardHeader>
                <CardTitle>Gallery</CardTitle>
                <CardDescription>Photos and videos</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/gallery" className="text-primary hover:underline">
                      All Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery?type=photo" className="text-primary hover:underline">
                      Photo Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery?type=video" className="text-primary hover:underline">
                      Video Gallery
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>Blog, news, and social media</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog" className="text-primary hover:underline">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="text-primary hover:underline">
                      News
                    </Link>
                  </li>
                  <li>
                    <Link href="/social" className="text-primary hover:underline">
                      Social Media
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={500}>
            <Card>
              <CardHeader>
                <CardTitle>Legal</CardTitle>
                <CardDescription>Policies and legal information</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/accessibility" className="text-primary hover:underline">
                      Accessibility Statement
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <Card>
              <CardHeader>
                <CardTitle>Other Pages</CardTitle>
                <CardDescription>Additional resources</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/faq" className="text-primary hover:underline">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-primary hover:underline">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap" className="text-primary hover:underline">
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        <Separator className="my-16" />

        <ScrollAnimation>
          <h2 className="text-2xl font-bold mb-6">XML Sitemap</h2>
          <p className="text-muted-foreground mb-6">For search engines, we also provide an XML sitemap at:</p>
          <Card>
            <CardContent className="p-4">
              <code className="text-sm">https://beyonduniverse.com/sitemap.xml</code>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  )
}

