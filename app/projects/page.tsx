"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Building, GraduationCap, Radio, Shield } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Link from "next/link"
import ProjectCard from "@/components/project-card"
import { projectsData } from "@/data/projects-data"

type ProjectCategory = "all" | "education" | "government" | "media" | "healthcare"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const [filteredProjects, setFilteredProjects] = useState(projectsData)

  useEffect(() => {
    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = "4rem"

    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [])

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(projectsData.filter((project) => project.category === activeCategory))
    }
  }, [activeCategory])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h1 className="text-4xl font-bold mb-6 text-center">Projects & Partners</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
              Discover our innovative XR, Web3, and AI implementations with leading institutions across the MENA region.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <Tabs
              defaultValue="all"
              value={activeCategory}
              onValueChange={(value) => setActiveCategory(value as ProjectCategory)}
              className="w-full"
            >
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-5 w-full max-w-3xl">
                  <TabsTrigger value="all" className="flex items-center gap-2">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="education" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 hidden sm:block" />
                    Education
                  </TabsTrigger>
                  <TabsTrigger value="government" className="flex items-center gap-2">
                    <Shield className="h-4 w-4 hidden sm:block" />
                    Government
                  </TabsTrigger>
                  <TabsTrigger value="media" className="flex items-center gap-2">
                    <Radio className="h-4 w-4 hidden sm:block" />
                    Media
                  </TabsTrigger>
                  <TabsTrigger value="healthcare" className="flex items-center gap-2">
                    <Building className="h-4 w-4 hidden sm:block" />
                    Healthcare
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="text-center mb-8">
                <p className="text-muted-foreground">
                  Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} in{" "}
                  {activeCategory === "all" ? "all categories" : `the ${activeCategory} category`}
                </p>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ScrollAnimation key={project.slug} delay={100}>
                      <ProjectCard project={project} />
                    </ScrollAnimation>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="education" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ScrollAnimation key={project.slug} delay={100}>
                      <ProjectCard project={project} />
                    </ScrollAnimation>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="government" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ScrollAnimation key={project.slug} delay={100}>
                      <ProjectCard project={project} />
                    </ScrollAnimation>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="media" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ScrollAnimation key={project.slug} delay={100}>
                      <ProjectCard project={project} />
                    </ScrollAnimation>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="healthcare" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ScrollAnimation key={project.slug} delay={100}>
                      <ProjectCard project={project} />
                    </ScrollAnimation>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Partners Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6 text-center">Featured Partners</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We're proud to collaborate with leading institutions across the MENA region to implement cutting-edge XR,
              Web3, and AI solutions.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {projectsData.slice(0, 5).map((partner) => (
              <ScrollAnimation key={partner.slug} delay={100}>
                <Link
                  href={`/projects/${partner.slug}`}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="bg-white rounded-lg p-4 h-24 w-40 flex items-center justify-center">
                    <img
                      src={partner.logo || "/placeholder.svg?height=80&width=120"}
                      alt={partner.title}
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6 text-center">Partner Testimonials</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Hear what our partners have to say about their experience working with Beyond Universe XR Solutions.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <svg className="h-8 w-8 text-primary opacity-50" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="text-lg mb-6 flex-grow">
                      The XR Medical Lab developed by Beyond Universe XR has revolutionized how we teach complex medical
                      procedures. Students can now practice in a safe, virtual environment before working with real
                      patients, significantly enhancing their confidence and competence.
                    </p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img
                          src="/placeholder.svg?height=60&width=60"
                          alt="Dr. Sarah Al-Maktoum"
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold">Dr. Sarah Al-Maktoum</p>
                        <p className="text-sm text-muted-foreground">
                          Head of Medical Education, RAK Medical University
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <svg className="h-8 w-8 text-primary opacity-50" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="text-lg mb-6 flex-grow">
                      The 3D weather visualization platform developed by Beyond Universe XR has transformed how we
                      present complex meteorological data to our audience. The immersive experience makes weather
                      patterns more intuitive and engaging for viewers across all our platforms.
                    </p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img
                          src="/placeholder.svg?height=60&width=60"
                          alt="Mohammed Al-Shami"
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold">Mohammed Al-Shami</p>
                        <p className="text-sm text-muted-foreground">Director of Technology, ArabiaWeather</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">Become Our Next Success Story</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Ready to transform your organization with cutting-edge XR, Web3, and AI solutions? Contact us today to
              discuss your project.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-primary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

