"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Chief Innovation Officer",
    company: "Global Tech Solutions",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Beyond Universe XR transformed our corporate headquarters into an immersive virtual environment that has revolutionized how our global team collaborates. The attention to detail and user experience is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Director of Digital Experiences",
    company: "Contemporary Arts Foundation",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The virtual art gallery designed by Beyond Universe XR has allowed us to showcase exhibitions to a global audience in ways we never thought possible. The space is not only beautiful but highly functional.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Amelia Rodriguez",
    position: "Dean of Innovation",
    company: "Future Learning Institute",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Our virtual campus has transformed how we deliver education. Students from around the world can now access immersive learning experiences that were previously impossible. The team at Beyond Universe XR truly understood our vision.",
    rating: 5,
  },
  {
    id: 4,
    name: "Thomas Weber",
    position: "Head of Digital Retail",
    company: "Prestige Brands Collective",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The metaverse retail experience created for our luxury brands has set a new standard in digital commerce. Customer engagement has increased dramatically, and the virtual try-on features are revolutionary.",
    rating: 4,
  },
  {
    id: 5,
    name: "Olivia Martinez",
    position: "Events Director",
    company: "Global Entertainment Group",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Our virtual concert venue has allowed us to reach audiences worldwide with immersive performances. The acoustics and visual design of the space create an experience that rivals physical venues.",
    rating: 5,
  },
]

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working with us.
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[currentIndex].rating
                            ? "text-amber-500 fill-amber-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg italic mb-6">"{testimonials[currentIndex].quote}"</blockquote>

                  <div>
                    <p className="font-bold">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? "bg-primary scale-125" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

