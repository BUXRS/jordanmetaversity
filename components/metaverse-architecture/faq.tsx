"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ScrollAnimation from "../scroll-animation"

const faqs = [
  {
    question: "What is metaverse architecture?",
    answer:
      "Metaverse architecture involves designing and creating virtual spaces, buildings, and environments within digital platforms. It combines principles of traditional architecture with digital design to create immersive, functional, and aesthetically pleasing virtual spaces that users can explore and interact with.",
  },
  {
    question: "Which metaverse platforms do you design for?",
    answer:
      "We design for all major metaverse platforms including Spatial.io, Decentraland, The Sandbox, Horizon Worlds, and custom WebXR environments. Our designs can be adapted to work across multiple platforms based on your specific needs.",
  },
  {
    question: "How long does it take to complete a metaverse architecture project?",
    answer:
      "Project timelines vary depending on complexity, size, and specific requirements. A simple virtual space might take 2-4 weeks, while complex environments with extensive interactivity could take 2-3 months or more. During our initial consultation, we'll provide a detailed timeline based on your project specifications.",
  },
  {
    question: "Can you recreate my physical office or store in the metaverse?",
    answer:
      "Yes, we can create digital twins of existing physical spaces, enhancing them with virtual capabilities that wouldn't be possible in the physical world. We can work from floor plans, photos, or 3D scans of your existing space to create an accurate virtual representation.",
  },
  {
    question: "Do you handle the technical implementation or just the design?",
    answer:
      "We offer end-to-end services, from initial concept and design through to technical implementation and deployment. Our team includes both designers and developers who work together to ensure your virtual space is not only beautiful but also fully functional and optimized for performance.",
  },
  {
    question: "Can metaverse spaces be updated after they're built?",
    answer:
      "Absolutely. One of the advantages of virtual architecture is its flexibility. Spaces can be updated, expanded, or completely transformed based on changing needs. We offer maintenance packages to help keep your virtual spaces current and functioning optimally.",
  },
  {
    question: "How do you ensure good user experience in virtual spaces?",
    answer:
      "We prioritize user experience by focusing on intuitive navigation, clear wayfinding, optimized performance, and engaging interactive elements. We conduct user testing throughout the development process to identify and address any usability issues before final deployment.",
  },
  {
    question: "Do you offer virtual reality (VR) compatibility?",
    answer:
      "Yes, we design our metaverse environments to be compatible with VR headsets where appropriate. We optimize for various devices including Oculus/Meta Quest, HTC Vive, and other popular VR platforms to ensure an immersive experience for users with VR capabilities.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our metaverse architecture services.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <ScrollAnimation>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions? We're here to help.</p>
            <div className="inline-flex gap-4">
              <a href="/contact" className="text-primary hover:underline">
                Contact Us
              </a>
              <span className="text-muted-foreground">or</span>
              <a href="tel:+1234567890" className="text-primary hover:underline">
                Call (123) 456-7890
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

