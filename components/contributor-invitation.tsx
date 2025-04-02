"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LibraryIcon as Museum, School, Building, Users, ChevronRight, CheckCircle } from "lucide-react"
import ScrollAnimation from "./scroll-animation"
import Link from "next/link"

interface ContributorType {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  benefits: string[]
}

const contributorTypes: ContributorType[] = [
  {
    id: "museum",
    title: "Museums & Cultural Institutions",
    description: "Share your collections with the world through high-quality 3D digitization.",
    icon: <Museum className="h-6 w-6" />,
    benefits: [
      "Preserve fragile artifacts digitally for future generations",
      "Expand the reach of your collections to a global audience",
      "Enable interactive virtual exhibitions",
      "Receive professional 3D scanning services at preferential rates",
    ],
  },
  {
    id: "university",
    title: "Universities & Research Institutions",
    description: "Contribute to and benefit from the world's largest academic 3D asset library.",
    icon: <Building className="h-6 w-6" />,
    benefits: [
      "Establish a 3D scanning center on your campus",
      "Train students in advanced 3D scanning techniques",
      "Access the complete Scan 4 3D library for research and teaching",
      "Participate in collaborative research projects",
    ],
  },
  {
    id: "school",
    title: "Schools & Educational Organizations",
    description: "Enhance learning with access to thousands of 3D models across disciplines.",
    icon: <School className="h-6 w-6" />,
    benefits: [
      "Incorporate 3D models into your curriculum",
      "Engage students with interactive learning experiences",
      "Participate in educational programs on 3D technologies",
      "Contribute student projects to the growing library",
    ],
  },
  {
    id: "individual",
    title: "Individual Contributors",
    description: "Share your expertise and contribute to this global educational initiative.",
    icon: <Users className="h-6 w-6" />,
    benefits: [
      "Volunteer as a 3D scanning specialist",
      "Contribute your own 3D models to the library",
      "Participate in community scanning events",
      "Gain recognition for your contributions to education",
    ],
  },
]

export default function ContributorInvitation() {
  const [activeType, setActiveType] = useState("museum")
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would submit the form data to a backend
    setFormSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 3000)
  }

  const activeContributor = contributorTypes.find((type) => type.id === activeType) || contributorTypes[0]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-6 text-center">Become a Contributor</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Join our growing network of contributors helping to build the world's largest academic 3D asset library.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ScrollAnimation>
              <div className="space-y-4">
                {contributorTypes.map((type) => (
                  <Card
                    key={type.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      activeType === type.id ? "border-primary shadow-md" : "hover:border-primary/30"
                    }`}
                    onClick={() => setActiveType(type.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                          {type.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-sm">{type.title}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeType}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                        {activeContributor.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{activeContributor.title}</h3>
                        <p className="text-muted-foreground">{activeContributor.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {activeContributor.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-secondary/50 rounded-lg p-4">
                        <h4 className="font-bold mb-3">How to Participate:</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Fill out the contact form below to express your interest in contributing to the Scan 4 3D
                          project. Our team will reach out to discuss partnership opportunities tailored to your
                          organization.
                        </p>
                        <Button asChild size="sm">
                          <Link href="#contact-form">Contact Us Now</Link>
                        </Button>
                      </div>
                    </div>

                    <div id="contact-form">
                      {formSubmitted ? (
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                          <p className="text-muted-foreground">
                            We've received your information and will contact you shortly to discuss partnership
                            opportunities.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit}>
                          <h4 className="font-bold mb-4">Contact Information</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="space-y-2">
                              <label htmlFor="name" className="text-sm font-medium">
                                Name
                              </label>
                              <Input id="name" placeholder="Your name" required />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="organization" className="text-sm font-medium">
                                Organization
                              </label>
                              <Input id="organization" placeholder="Your organization" required />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="space-y-2">
                              <label htmlFor="email" className="text-sm font-medium">
                                Email
                              </label>
                              <Input id="email" type="email" placeholder="Your email" required />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="phone" className="text-sm font-medium">
                                Phone (Optional)
                              </label>
                              <Input id="phone" placeholder="Your phone number" />
                            </div>
                          </div>

                          <div className="space-y-2 mb-4">
                            <label htmlFor="interest" className="text-sm font-medium">
                              Area of Interest
                            </label>
                            <Select defaultValue={activeType}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your interest" />
                              </SelectTrigger>
                              <SelectContent>
                                {contributorTypes.map((type) => (
                                  <SelectItem key={type.id} value={type.id}>
                                    {type.title}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2 mb-6">
                            <label htmlFor="message" className="text-sm font-medium">
                              Message
                            </label>
                            <Textarea
                              id="message"
                              placeholder="Tell us about your interest in contributing to Scan 4 3D"
                              rows={4}
                              required
                            />
                          </div>

                          <Button type="submit" className="w-full">
                            Submit
                          </Button>
                        </form>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

