"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function ParallaxStorySection() {
  const containerRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Only create scroll animations on the client side
  if (!isMounted) {
    return (
      <section className="relative h-[200vh] bg-background overflow-hidden">
        <div className="h-screen sticky top-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Loading...</h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-[200vh] bg-background overflow-hidden">
      <div ref={containerRef} className="h-screen sticky top-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Transforming Education & Business Through Immersive Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Beyond Universe XR Solutions is at the forefront of the immersive technology revolution in the MENA region,
            providing cutting-edge XR, Metaverse, Web3, and AI solutions for educational institutions and businesses.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Pioneering the integration of immersive technologies in education and business across the MENA region.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3">Expertise</h3>
              <p className="text-muted-foreground">
                A team of specialists with deep knowledge in XR, Metaverse development, Web3, and artificial
                intelligence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3">Impact</h3>
              <p className="text-muted-foreground">
                Creating transformative experiences that enhance learning, collaboration, and business outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

