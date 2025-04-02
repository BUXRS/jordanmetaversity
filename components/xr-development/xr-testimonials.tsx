"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function XRTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "RetailTech Innovations",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "The AR product visualization app developed by Beyond Universe XR has transformed our customer experience. We've seen a 35% increase in online conversions since implementing their solution.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Head of Training",
      company: "Global Manufacturing Corp",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Their VR training simulations have reduced our onboarding time by 40% while improving knowledge retention. The team's technical expertise and attention to detail are exceptional.",
      rating: 5,
    },
    {
      name: "Dr. Amelia Rodriguez",
      position: "Chief Medical Officer",
      company: "HealthTech Solutions",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Beyond Universe XR developed a mixed reality surgical training platform that has revolutionized how we prepare our medical staff. Their understanding of both technology and healthcare needs is impressive.",
      rating: 5,
    },
    {
      name: "David Wilson",
      position: "Director of Innovation",
      company: "EduTech Academy",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Working with Beyond Universe XR on our virtual campus tour was a seamless experience. They delivered an immersive VR solution that has significantly increased student applications.",
      rating: 4,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-secondary/10" id="testimonials" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our clients about how our XR solutions have transformed their businesses.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-lg p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl italic mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div>
                  <h4 className="text-lg font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-primary" : "bg-primary/30"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

