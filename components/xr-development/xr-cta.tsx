"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Mail, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function XRCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-primary text-primary-foreground" id="contact" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with XR?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact our XR development team to discuss your project and explore how we can bring your vision to life.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-3" />
                <a href="mailto:contact@beyonduniversexr.com" className="hover:underline">
                  contact@beyonduniversexr.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3" />
                <a href="tel:+12345678900" className="hover:underline">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 mr-3" />
                <span>Live chat available during business hours</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white text-foreground p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Start Your XR Journey</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-1">
                  Project Type
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select project type</option>
                  <option value="ar">AR Development</option>
                  <option value="vr">VR Development</option>
                  <option value="mr">MR Development</option>
                  <option value="multiple">Multiple XR Technologies</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your project and requirements..."
                ></textarea>
              </div>

              <Button className="w-full">
                Submit Request <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

