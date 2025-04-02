"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Globe, Users, Building, Laptop, Headphones, ChevronRight, Play, ExternalLink, CheckCircle } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Link from "next/link"

export default function SpatialMetaversePage() {
  const [activeTab, setActiveTab] = useState("explore")
  const [isPlaying, setIsPlaying] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = "4rem"

    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [])

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would submit the form data to a backend
    setFormSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 3000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-[#0a2540] to-[#1a365d]">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-white/10 z-10"></div>
          <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Spatial.io Metaverse</h1>
              <p className="text-xl text-blue-100 mb-8">
                Step into our immersive virtual environments built on Spatial.io, where collaboration, learning, and
                innovation come together in the metaverse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => setActiveTab("join")}>
                  Join Our Space
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  onClick={() => setActiveTab("explore")}
                >
                  Explore Features
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="explore" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="explore">Explore</TabsTrigger>
              <TabsTrigger value="walkthrough">Walkthrough</TabsTrigger>
              <TabsTrigger value="join">Join Us</TabsTrigger>
            </TabsList>

            {/* Explore Tab */}
            <TabsContent value="explore" className="space-y-8">
              <ScrollAnimation>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://sjc.microlink.io/uKcYA7IGy87qBy9V6o1y-aLn0nxa1Arr8JTgNW4Xk0TDU5p4XKOzP-D0w1gIQDLCB6PzSYteZ4L0M_oBWX2bdg.jpeg"
                      alt="Beyond Universe XR Spatial.io Environment"
                      className="w-full h-auto"
                    />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold mb-4">Beyond Universe XR Metaverse Hub</h2>
                    <p className="text-muted-foreground mb-6">
                      Our custom-built Spatial.io environment serves as a central hub for collaboration, learning, and
                      innovation. Designed with both functionality and aesthetics in mind, our metaverse space provides
                      an immersive experience for clients, partners, and team members.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mt-1 bg-primary/10 p-2 rounded-full mr-4">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Accessible Anywhere</h3>
                          <p className="text-muted-foreground">
                            Join from any device - VR headset, computer, or mobile device
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mt-1 bg-primary/10 p-2 rounded-full mr-4">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Collaborative Spaces</h3>
                          <p className="text-muted-foreground">
                            Interactive meeting rooms, presentation areas, and networking zones
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mt-1 bg-primary/10 p-2 rounded-full mr-4">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Showcase Gallery</h3>
                          <p className="text-muted-foreground">
                            Explore our projects, 3D models, and interactive demonstrations
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button asChild>
                        <Link
                          href="https://spatial.io/s/Beyond-Universe-XR-Hub"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          Visit Live Space
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="mt-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                          <Laptop className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Interactive Presentations</h3>
                        <p className="text-muted-foreground">
                          Share screens, 3D models, and interactive content with participants in real-time.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                          <Headphones className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Spatial Audio</h3>
                        <p className="text-muted-foreground">
                          Experience realistic audio that changes based on your position in the virtual space.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Customizable Avatars</h3>
                        <p className="text-muted-foreground">
                          Create personalized avatars that represent you in the metaverse environment.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="mt-16 bg-secondary/30 rounded-lg p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Interactive Spatial.io Embed</h2>
                      <p className="text-muted-foreground mb-6">
                        Experience a preview of our Spatial.io environment directly in your browser. This interactive
                        embed allows you to explore a portion of our virtual space without leaving the website.
                      </p>
                      <p className="text-muted-foreground mb-6">
                        For the full experience, including voice chat and collaboration features, click the "Visit Live
                        Space" button to open the complete environment in a new tab.
                      </p>
                      <Button asChild>
                        <Link
                          href="https://spatial.io/s/Beyond-Universe-XR-Hub"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          Visit Full Experience
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div className="aspect-video bg-black rounded-lg overflow-hidden">
                      {/* In a real implementation, this would be an iframe embed from Spatial.io */}
                      <div className="w-full h-full flex items-center justify-center bg-[#0a2540] text-white p-6 text-center">
                        <div>
                          <Globe className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p className="mb-2">Interactive Spatial.io Embed</p>
                          <p className="text-sm text-blue-300/70">
                            In a production environment, this would be an embedded Spatial.io iframe
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </TabsContent>

            {/* Walkthrough Tab */}
            <TabsContent value="walkthrough">
              <ScrollAnimation>
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">Virtual Space Walkthrough</h2>
                  <p className="text-muted-foreground text-center mb-8">
                    Take a guided tour of our Spatial.io metaverse environment and discover the interactive features and
                    collaborative spaces we've created.
                  </p>

                  <div className="aspect-video bg-black rounded-lg overflow-hidden relative mb-8">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      poster="https://sjc.microlink.io/uKcYA7IGy87qBy9V6o1y-aLn0nxa1Arr8JTgNW4Xk0TDU5p4XKOzP-D0w1gIQDLCB6PzSYteZ4L0M_oBWX2bdg.jpeg"
                      controls={false}
                    >
                      <source src="/videos/spatial-walkthrough.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {!isPlaying && (
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30"
                        onClick={handlePlayVideo}
                      >
                        <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center">
                          <Play className="h-10 w-10 text-white" />
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-black/50 text-white border-white/20 hover:bg-black/70"
                        onClick={handlePlayVideo}
                      >
                        {isPlaying ? "Pause" : "Play"}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Walkthrough Highlights</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <p>
                            <span className="font-medium">0:00 - 1:30</span> - Welcome area and navigation overview
                          </p>
                        </div>
                        <div className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <p>
                            <span className="font-medium">1:31 - 3:45</span> - Collaborative meeting spaces and
                            presentation tools
                          </p>
                        </div>
                        <div className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <p>
                            <span className="font-medium">3:46 - 5:20</span> - Interactive 3D model gallery and showcase
                            areas
                          </p>
                        </div>
                        <div className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <p>
                            <span className="font-medium">5:21 - 7:00</span> - Educational spaces and training
                            environments
                          </p>
                        </div>
                        <div className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <p>
                            <span className="font-medium">7:01 - 8:30</span> - Social and networking areas
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">Experience It Yourself</h3>
                      <p className="mb-4">
                        While the video provides a great overview, nothing compares to experiencing our Spatial.io
                        environment firsthand. Join us in the metaverse to explore, interact, and collaborate in
                        real-time.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild>
                          <Link
                            href="https://spatial.io/s/Beyond-Universe-XR-Hub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            Visit Live Space
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" onClick={() => setActiveTab("join")}>
                          Request Guided Tour
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </TabsContent>

            {/* Join Tab */}
            <TabsContent value="join">
              <ScrollAnimation>
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">Join Our Metaverse Space</h2>
                  <p className="text-muted-foreground text-center mb-8">
                    Experience the Beyond Universe XR Spatial.io environment firsthand. You can visit as a guest or
                    request a guided tour from our team.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-4">Self-Guided Visit</h3>
                        <p className="text-muted-foreground mb-6">
                          Explore our Spatial.io environment at your own pace. Create a free Spatial.io account or join
                          as a guest.
                        </p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <p>Available 24/7</p>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <p>Access from any device (VR, desktop, or mobile)</p>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <p>Explore public areas and interactive exhibits</p>
                          </li>
                        </ul>
                        <Button asChild className="w-full">
                          <Link
                            href="https://spatial.io/s/Beyond-Universe-XR-Hub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            Visit Now
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-4">Guided Tour</h3>
                        <p className="text-muted-foreground mb-6">
                          Schedule a personalized tour with one of our metaverse specialists who will guide you through
                          the space and answer your questions.
                        </p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <p>Personalized experience tailored to your interests</p>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <p>Live demonstration of collaboration features</p>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <p>Access to private areas and premium content</p>
                          </li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => {
                            const formElement = document.getElementById("tour-request-form")
                            if (formElement) {
                              formElement.scrollIntoView({ behavior: "smooth" })
                            }
                          }}
                        >
                          Request Tour
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div id="tour-request-form" className="bg-secondary/30 p-8 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Request a Guided Tour</h3>

                    {formSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h4 className="text-xl font-bold mb-2">Request Submitted!</h4>
                        <p className="text-muted-foreground">
                          Thank you for your interest in our Spatial.io metaverse environment. One of our team members
                          will contact you shortly to schedule your guided tour.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Name
                            </label>
                            <Input id="name" placeholder="Your name" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email
                            </label>
                            <Input id="email" type="email" placeholder="Your email" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="organization" className="text-sm font-medium">
                              Organization
                            </label>
                            <Input id="organization" placeholder="Your organization" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium">
                              Phone (Optional)
                            </label>
                            <Input id="phone" placeholder="Your phone number" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="interest" className="text-sm font-medium">
                            What aspects of our metaverse space are you most interested in?
                          </label>
                          <Textarea
                            id="interest"
                            placeholder="Tell us about your interests and goals for the tour"
                            rows={4}
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="preferred-date" className="text-sm font-medium">
                            Preferred date and time for your tour
                          </label>
                          <Input id="preferred-date" placeholder="e.g., April 15, 2025 at 10:00 AM GST" />
                        </div>

                        <Button type="submit" className="w-full">
                          Submit Request
                        </Button>
                      </form>
                    )}
                  </div>
                </div>
              </ScrollAnimation>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6 text-center">Metaverse Use Cases</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Our Spatial.io environments can be customized for a variety of applications across education, business,
              and entertainment.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Virtual Classrooms</h3>
                  <p className="text-muted-foreground mb-4">
                    Immersive learning environments that bring subjects to life through interactive 3D models,
                    simulations, and collaborative activities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Interactive learning modules</p>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Virtual field trips and explorations</p>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Collaborative student projects</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Corporate Environments</h3>
                  <p className="text-muted-foreground mb-4">
                    Virtual offices and meeting spaces that enhance remote collaboration, team building, and client
                    presentations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Virtual offices and workspaces</p>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Immersive product demonstrations</p>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Virtual team building activities</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Virtual Events</h3>
                  <p className="text-muted-foreground mb-4">
                    Engaging virtual venues for conferences, exhibitions, product launches, and networking events.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Virtual conferences and exhibitions</p>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Interactive product launches</p>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Networking and social events</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">Ready to Step Into the Metaverse?</h2>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Experience the future of collaboration, learning, and engagement with our custom Spatial.io environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="https://spatial.io/s/Beyond-Universe-XR-Hub" target="_blank" rel="noopener noreferrer">
                  Visit Our Space
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => setActiveTab("join")}>
                Request a Guided Tour
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

