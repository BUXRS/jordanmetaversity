"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12 max-w-3xl">Last updated: March 23, 2025</p>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Beyond Universe XR Solutions ("we," "our," or "us") is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
                  our website or use our services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                  please do not access the site or use our services.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
                <h3 className="text-lg font-semibold mb-2">Personal Data</h3>
                <p className="mb-4">
                  We may collect personal identification information, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Organization name</li>
                  <li>Job title</li>
                  <li>IP address</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Usage Data</h3>
                <p>
                  We may also collect information on how the website is accessed and used. This usage data may include
                  information such as your computer's Internet Protocol address, browser type, browser version, the
                  pages of our website that you visit, the time and date of your visit, the time spent on those pages,
                  and other diagnostic data.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We may use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our services</li>
                  <li>To monitor the usage of our services</li>
                  <li>To detect, prevent, and address technical issues</li>
                  <li>
                    To provide you with news, special offers, and general information about other goods, services, and
                    events which we offer
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">4. Data Security</h2>
                <p className="mb-4">
                  The security of your data is important to us, but remember that no method of transmission over the
                  Internet or method of electronic storage is 100% secure. While we strive to use commercially
                  acceptable means to protect your personal data, we cannot guarantee its absolute security.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">5. Third-Party Services</h2>
                <p className="mb-4">
                  Our website may contain links to other sites that are not operated by us. If you click on a
                  third-party link, you will be directed to that third party's site. We strongly advise you to review
                  the Privacy Policy of every site you visit.
                </p>
                <p>
                  We have no control over and assume no responsibility for the content, privacy policies, or practices
                  of any third-party sites or services.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">6. Your Data Protection Rights</h2>
                <p className="mb-4">
                  Depending on your location, you may have certain rights regarding your personal data, including:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The right to access, update, or delete the information we have on you</li>
                  <li>The right of rectification</li>
                  <li>The right to object</li>
                  <li>The right of restriction</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy
                  Policy.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                  Policy are effective when they are posted on this page.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">8. Contact Us</h2>
                <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>By email: privacy@beyonduniverse.com</li>
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

