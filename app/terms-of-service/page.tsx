"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-12 max-w-3xl">Last updated: March 23, 2025</p>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to Beyond Universe XR Solutions. These Terms of Service govern your use of our website and
                  services. By accessing our website or using our services, you agree to be bound by these Terms.
                </p>
                <p>
                  Please read these Terms carefully. If you do not agree with any part of these Terms, you may not
                  access the website or use our services.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">2. Use of Our Services</h2>
                <p className="mb-4">
                  Our services are intended for business and educational purposes. You agree to use our services only
                  for lawful purposes and in accordance with these Terms.
                </p>
                <p>
                  You are prohibited from using our services in any way that could damage, disable, overburden, or
                  impair our servers or networks, or interfere with any other party's use and enjoyment of our services.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">3. Intellectual Property</h2>
                <p className="mb-4">
                  The content on our website, including text, graphics, logos, images, and software, is the property of
                  Beyond Universe XR Solutions and is protected by copyright and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                  perform, republish, download, store, or transmit any of the material on our website without our prior
                  written consent.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">4. User Accounts</h2>
                <p className="mb-4">
                  Some features of our services may require you to create an account. You are responsible for
                  maintaining the confidentiality of your account credentials and for all activities that occur under
                  your account.
                </p>
                <p>
                  You agree to notify us immediately of any unauthorized use of your account or any other breach of
                  security. We cannot and will not be liable for any loss or damage arising from your failure to comply
                  with this provision.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">5. Limitation of Liability</h2>
                <p className="mb-4">
                  In no event shall Beyond Universe XR Solutions, its directors, employees, partners, agents, suppliers,
                  or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages,
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                  resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your access to or use of or inability to access or use our services</li>
                  <li>Any conduct or content of any third party on our services</li>
                  <li>Any content obtained from our services</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">6. Indemnification</h2>
                <p className="mb-4">
                  You agree to defend, indemnify, and hold harmless Beyond Universe XR Solutions, its directors,
                  employees, partners, agents, suppliers, and affiliates from and against any claims, liabilities,
                  damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees)
                  arising out of or relating to your violation of these Terms or your use of our services.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">7. Governing Law</h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the United Arab
                  Emirates, without regard to its conflict of law provisions.
                </p>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                  rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the
                  remaining provisions of these Terms will remain in effect.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">8. Changes to These Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                  provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material
                  change will be determined at our sole discretion.
                </p>
                <p>
                  By continuing to access or use our services after any revisions become effective, you agree to be
                  bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use
                  our services.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">9. Contact Us</h2>
                <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>By email: legal@beyonduniverse.com</li>
                  <li>
                    By visiting the contact page on our website:{" "}
                    <a href="/contact" className="text-primary hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

