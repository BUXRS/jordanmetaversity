"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function XRFAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const faqs = [
    {
      question: "What is the difference between AR, VR, and MR?",
      answer:
        "Augmented Reality (AR) overlays digital content onto the real world, typically through smartphones or AR glasses. Virtual Reality (VR) immerses users in a completely digital environment using VR headsets. Mixed Reality (MR) blends physical and digital worlds where virtual objects interact with real environments in real-time.",
    },
    {
      question: "What devices are needed for XR experiences?",
      answer:
        "For AR, you typically need a smartphone, tablet, or AR glasses. For VR, you need a VR headset like Oculus Quest, HTC Vive, or Valve Index. For MR, you need specialized devices like Microsoft HoloLens or Magic Leap. We can help determine the best hardware for your specific XR project needs.",
    },
    {
      question: "How long does it take to develop an XR application?",
      answer:
        "Development timelines vary based on complexity, features, and platforms. Simple AR applications might take 2-3 months, while complex VR or MR experiences can take 6-12 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
    },
    {
      question: "Can XR applications work on multiple platforms?",
      answer:
        "Yes, we develop cross-platform XR applications that can work across various devices. For AR, we can target iOS and Android devices. For VR, we can develop for Oculus, HTC Vive, Valve Index, and other platforms. We'll recommend the best approach based on your target audience and business goals.",
    },
    {
      question: "What industries benefit most from XR technology?",
      answer:
        "XR technology benefits numerous industries including education, healthcare, real estate, retail, manufacturing, tourism, entertainment, and more. Any industry that can benefit from immersive visualization, training, or interactive experiences can leverage XR technology effectively.",
    },
    {
      question: "How much does XR development cost?",
      answer:
        "XR development costs vary widely based on complexity, features, platforms, and content requirements. Simple AR applications might start around $5,000, while comprehensive VR or MR experiences can range from $10,000 to $100,000+. We provide detailed quotes after understanding your specific project requirements.",
    },
    {
      question: "Do you provide ongoing support after development?",
      answer:
        "Yes, we offer various maintenance and support packages to ensure your XR application continues to perform optimally. This includes bug fixes, platform updates, content additions, and performance optimizations. We can tailor a support plan to meet your specific needs.",
    },
    {
      question: "Can you integrate XR with our existing systems?",
      answer:
        "Yes, we can integrate XR applications with your existing systems, databases, CRMs, and other business tools through APIs and custom development. This ensures your XR solution works seamlessly with your current technology stack.",
    },
  ]

  return (
    <section className="py-20 bg-secondary/5" id="faq" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our XR development services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Have more questions? Contact our XR specialists for personalized answers.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

