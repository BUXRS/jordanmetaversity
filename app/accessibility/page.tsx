"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"

export default function AccessibilityPage() {
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
          <h1 className="text-4xl font-bold mb-6">Accessibility Statement</h1>
          <p className="text-muted-foreground mb-12 max-w-3xl">Last updated: March 23, 2025</p>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Our Commitment</h2>
                <p className="mb-4">
                  Beyond Universe XR Solutions is committed to ensuring digital accessibility for people with
                  disabilities. We are continually improving the user experience for everyone and applying the relevant
                  accessibility standards.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Conformance Status</h2>
                <p className="mb-4">
                  The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to
                  improve accessibility for people with disabilities. It defines three levels of conformance: Level A,
                  Level AA, and Level AAA.
                </p>
                <p>
                  The Beyond Universe XR Solutions website is partially conformant with WCAG 2.1 level AA. Partially
                  conformant means that some parts of the content do not fully conform to the accessibility standard.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Accessibility Features</h2>
                <p className="mb-4">Our website includes the following accessibility features:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Semantic HTML structure for better screen reader navigation</li>
                  <li>Keyboard navigation support</li>
                  <li>Text alternatives for non-text content</li>
                  <li>Color contrast that meets WCAG 2.1 AA standards</li>
                  <li>Resizable text without loss of functionality</li>
                  <li>Clear and consistent navigation</li>
                  <li>Dark mode option for users with light sensitivity</li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Limitations and Alternatives</h2>
                <p className="mb-4">
                  Despite our best efforts to ensure accessibility of the Beyond Universe XR Solutions website, there
                  may be some limitations. Below is a description of known limitations, and potential solutions:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>Interactive 3D Content:</strong> Some of our 3D demonstrations may be difficult to navigate
                    for users with certain disabilities. We provide alternative text descriptions and video walkthroughs
                    as alternatives.
                  </li>
                  <li>
                    <strong>PDF Documents:</strong> Some of our older PDF documents may not be fully accessible. Please
                    contact us if you encounter any difficulties accessing information in PDFs, and we will provide the
                    information in an alternative format.
                  </li>
                  <li>
                    <strong>Third-Party Content:</strong> Some content on our website is provided by third parties and
                    may not be fully accessible. We are working with our partners to improve the accessibility of this
                    content.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Feedback</h2>
                <p className="mb-4">
                  We welcome your feedback on the accessibility of the Beyond Universe XR Solutions website. Please let
                  us know if you encounter accessibility barriers:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Phone: +971 4 123 4567</li>
                  <li>E-mail: accessibility@beyonduniverse.com</li>
                  <li>Visitor address: Dubai, UAE</li>
                  <li>Postal address: P.O. Box 12345, Dubai, UAE</li>
                </ul>
                <p className="mt-4">We try to respond to feedback within 3 business days.</p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Assessment and Compliance</h2>
                <p className="mb-4">
                  The Beyond Universe XR Solutions website was last assessed for accessibility compliance on March 1,
                  2025. The assessment was performed internally using a combination of automated testing tools and
                  manual testing with assistive technologies.
                </p>
                <p>
                  We are committed to continuous improvement and regularly review our website for accessibility issues.
                  We are also working on a formal accessibility roadmap to address known issues and improve overall
                  accessibility.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

