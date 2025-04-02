"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollAnimationProps {
  children: React.ReactNode
  delay?: number
}

export default function ScrollAnimation({ children, delay = 0 }: ScrollAnimationProps) {
  const ref = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isMounted) {
      setIsInView(inView)
    }
  }, [inView, isMounted])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  )
}

