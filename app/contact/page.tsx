"use client"

import type React from "react"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Linkedin, MessageSquare } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function ContactPage() {
  useEffect(() => {
    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = "4rem"

    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Form submitted! This would connect to your backend in a real application.")
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Have questions about our services or want to discuss a potential partnership? Get in touch with our team.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service of Interest
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="metaversity">Metaversity Labs</SelectItem>
                        <SelectItem value="scan4d">Scan 4 3D</SelectItem>
                        <SelectItem value="web3ai">Web3 & AI Services</SelectItem>
                        <SelectItem value="spatial">Spatial.io Metaverse</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your project or inquiry" rows={5} required />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium mb-2">Our Locations</h3>
                          <p className="text-muted-foreground">Dubai, UAE</p>
                          <p className="text-muted-foreground">Amman, Jordan</p>
                          <p className="text-muted-foreground">Riyadh, KSA</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium mb-2">Phone</h3>
                          <p className="text-muted-foreground">+971 4 123 4567 (UAE)</p>
                          <p className="text-muted-foreground">+962 6 987 6543 (Jordan)</p>
                          <p className="text-muted-foreground">+966 11 234 5678 (KSA)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Mail className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium mb-2">Email</h3>
                          <p className="text-muted-foreground">info@beyonduniverse.com</p>
                          <p className="text-muted-foreground">support@beyonduniverse.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Linkedin className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium mb-2">Connect</h3>
                          <p className="text-muted-foreground">Follow us on LinkedIn for the latest updates</p>
                          <a href="#" className="text-primary hover:underline">
                            linkedin.com/company/beyonduniverse
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <MessageSquare className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium mb-2">WhatsApp</h3>
                          <p className="text-muted-foreground">Chat with us directly</p>
                          <a href="#" className="text-primary hover:underline">
                            +971 50 123 4567
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl font-bold mb-6 text-center">Visit Us</h2>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">Interactive Map Coming Soon</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">What industries do you serve?</h3>
                  <p className="text-muted-foreground">
                    We primarily serve education, healthcare, defense, and corporate sectors with our immersive
                    technology solutions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">How long does it take to set up a Metaversity Lab?</h3>
                  <p className="text-muted-foreground">
                    Typically, a Metaversity Lab can be set up within 2-3 months, including planning, installation, and
                    training.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Do you offer training for our staff?</h3>
                  <p className="text-muted-foreground">
                    Yes, we provide comprehensive training programs for all our solutions to ensure your team can
                    maximize the benefits of our technologies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Can you customize solutions for our specific needs?</h3>
                  <p className="text-muted-foreground">
                    We specialize in creating tailored immersive experiences that address your unique challenges and
                    objectives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

