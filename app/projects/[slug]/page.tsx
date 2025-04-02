"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, CheckCircle, ExternalLink } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Link from "next/link"
import ProjectCard from "@/components/project-card"
import { projectsData } from "@/data/projects-data"

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const [project, setProject] = useState<any>(null)
  const [relatedProjects, setRelatedProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = "4rem"

    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [])

  useEffect(() => {
    // Find the project data based on the slug
    const foundProject = projectsData.find((p) => p.slug === slug)

    if (foundProject) {
      setProject(foundProject)

      // Find related projects in the same category
      const related = projectsData.filter((p) => p.category === foundProject.category && p.slug !== slug).slice(0, 3)

      setRelatedProjects(related)
    }

    setLoading(false)
  }, [slug])

  if (loading) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-secondary rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-secondary rounded w-1/4 mb-12"></div>
            <div className="h-64 bg-secondary rounded mb-6"></div>
            <div className="h-4 bg-secondary rounded mb-2"></div>
            <div className="h-4 bg-secondary rounded mb-2"></div>
            <div className="h-4 bg-secondary rounded mb-2"></div>
            <div className="h-4 bg-secondary rounded w-2/3 mb-6"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" asChild className="group">
              <Link href="/projects" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </Button>
          </div>

          <ScrollAnimation>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</Badge>
              {project.tags &&
                project.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
            </div>

            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>{project.users} users</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollAnimation>
                <div className="rounded-lg overflow-hidden mb-8">
                  <img
                    src={project.image || "/placeholder.svg?height=600&width=1200"}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="results">Results</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                      <p className="text-muted-foreground mb-4">
                        {project.fullDescription ||
                          `The ${project.title} project represents a significant collaboration between Beyond Universe XR Solutions and ${project.partner}. This initiative aims to leverage cutting-edge XR, Web3, and AI technologies to address specific challenges and create innovative solutions in the ${project.category} sector.`}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Implemented in {project.year}, this project has already demonstrated significant impact, serving{" "}
                        {project.users} users and establishing a new benchmark for immersive technology applications in{" "}
                        {project.location}.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                      <p className="text-muted-foreground mb-4">
                        {project.challenge ||
                          `${project.partner} faced several challenges that traditional approaches couldn't adequately address. These included limitations in visualization capabilities, engagement levels, and accessibility of complex information. The organization needed an innovative solution that could transform how they approach ${project.category}-related activities and provide more immersive, interactive experiences.`}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                      <p className="text-muted-foreground mb-4">
                        {project.approach ||
                          `Beyond Universe XR Solutions developed a comprehensive strategy that combined ${project.tags?.join(", ")} technologies to create a tailored solution. Our team worked closely with ${project.partner} stakeholders to understand their specific needs and design an implementation that would deliver maximum value.`}
                      </p>
                      <p className="text-muted-foreground">
                        The project was implemented in phases, with continuous feedback and refinement to ensure optimal
                        results. Our agile approach allowed for flexibility and adaptation throughout the development
                        process.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                      <p className="text-muted-foreground mb-6">
                        The {project.title} implementation includes several innovative features designed to address
                        specific needs and deliver exceptional user experiences.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {(
                          project.features || [
                            "Immersive 3D environments for interactive learning and exploration",
                            "Real-time collaboration capabilities for multiple simultaneous users",
                            "Data visualization tools that transform complex information into intuitive visual formats",
                            "Customizable user interfaces adapted to different skill levels and use cases",
                            "Integration with existing systems and databases for seamless workflow",
                            "Analytics dashboard for tracking usage patterns and measuring outcomes",
                          ]
                        ).map((feature: string, index: number) => (
                          <Card key={index}>
                            <CardContent className="p-6">
                              <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                                  <CheckCircle className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <p>{feature}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
                      <p className="text-muted-foreground mb-6">
                        This project leverages a combination of cutting-edge technologies to deliver a powerful and
                        scalable solution.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {(
                          project.technologies || [
                            "Unity 3D",
                            "WebXR",
                            "Spatial Audio",
                            "Cloud Infrastructure",
                            "AI Integration",
                            "Blockchain",
                            "Real-time Database",
                            "Custom Analytics",
                          ]
                        ).map((tech: string, index: number) => (
                          <div key={index} className="bg-secondary/30 rounded-lg p-3 text-center">
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="results" className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Project Outcomes</h2>
                      <p className="text-muted-foreground mb-6">
                        The implementation of the {project.title} project has delivered significant results and created
                        measurable impact for {project.partner}.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {(
                          project.outcomes || [
                            {
                              metric: "User Engagement",
                              value: "+75%",
                              description: "Increase in user engagement compared to traditional methods",
                            },
                            {
                              metric: "Learning Outcomes",
                              value: "+40%",
                              description: "Improvement in knowledge retention and application",
                            },
                            {
                              metric: "Operational Efficiency",
                              value: "+60%",
                              description: "Increase in process efficiency and resource utilization",
                            },
                          ]
                        ).map((outcome: any, index: number) => (
                          <Card key={index}>
                            <CardContent className="p-6 text-center">
                              <h4 className="font-bold text-lg mb-2">{outcome.metric}</h4>
                              <p className="text-3xl font-bold text-primary mb-2">{outcome.value}</p>
                              <p className="text-sm text-muted-foreground">{outcome.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Testimonial</h3>
                      <Card>
                        <CardContent className="p-8">
                          <div className="mb-6">
                            <svg className="h-8 w-8 text-primary opacity-50" fill="currentColor" viewBox="0 0 32 32">
                              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                          </div>
                          <p className="text-lg mb-6">
                            {project.testimonial?.quote ||
                              `The implementation of this project has transformed how we approach ${project.category}-related activities. Beyond Universe XR Solutions delivered not just technology, but a comprehensive solution that addresses our specific needs and creates real value for our organization and stakeholders.`}
                          </p>
                          <div className="flex items-center">
                            <div className="mr-4">
                              <img
                                src={project.testimonial?.image || "/placeholder.svg?height=60&width=60"}
                                alt={project.testimonial?.author || "Project Stakeholder"}
                                className="h-12 w-12 rounded-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-bold">{project.testimonial?.author || "Project Stakeholder"}</p>
                              <p className="text-sm text-muted-foreground">
                                {project.testimonial?.title || `${project.partner}`}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </ScrollAnimation>
            </div>

            {/* Sidebar */}
            <div>
              <ScrollAnimation>
                <div className="space-y-8">
                  {/* Partner Info */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">About the Partner</h3>
                      <div className="flex justify-center mb-6">
                        <div className="bg-white rounded-lg p-4 h-24 w-40 flex items-center justify-center">
                          <img
                            src={project.logo || "/placeholder.svg?height=80&width=120"}
                            alt={project.partner}
                            className="max-h-16 max-w-full object-contain"
                          />
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {project.partnerDescription ||
                          `${project.partner} is a leading institution in the ${project.category} sector, committed to innovation and excellence. Through this partnership with Beyond Universe XR Solutions, they have demonstrated their forward-thinking approach and dedication to leveraging cutting-edge technologies.`}
                      </p>

                      {project.partnerWebsite && (
                        <Button asChild variant="outline" className="w-full">
                          <Link
                            href={project.partnerWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            Visit Partner Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>

                  {/* Project Details */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Project Details</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Project Type</p>
                          <p className="text-muted-foreground">{project.type || "XR Implementation"}</p>
                        </div>
                        <div>
                          <p className="font-medium">Duration</p>
                          <p className="text-muted-foreground">{project.duration || "6 months"}</p>
                        </div>
                        <div>
                          <p className="font-medium">Team Size</p>
                          <p className="text-muted-foreground">{project.teamSize || "8 specialists"}</p>
                        </div>
                        <div>
                          <p className="font-medium">Technologies</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {(project.technologies || ["XR", "AI", "Web3"])
                              .slice(0, 3)
                              .map((tech: string, index: number) => (
                                <Badge key={index} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact CTA */}
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Interested in a Similar Solution?</h3>
                      <p className="mb-6 opacity-90">
                        Contact us to discuss how we can implement a customized solution for your organization.
                      </p>
                      <Button asChild variant="secondary" className="w-full">
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold mb-8 text-center">Related Projects</h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <ScrollAnimation key={relatedProject.slug} delay={100}>
                  <ProjectCard project={relatedProject} />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Button variant="ghost" asChild className="mb-4 sm:mb-0 group">
              <Link href="/projects" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                All Projects
              </Link>
            </Button>

            <Button asChild>
              <Link href="/contact" className="flex items-center">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

