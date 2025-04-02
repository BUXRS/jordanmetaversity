"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Globe, Users, Clock } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

interface StatProps {
  label: string
  value: number
  icon: React.ReactNode
  increment: number
  suffix?: string
  delay?: number
}

function StatCounter({ label, value, icon, increment, suffix = "", delay = 0 }: StatProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Simulate counter incrementing to create a "live" effect
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= value) {
            clearInterval(interval)
            return value
          }
          return prevCount + increment
        })
      }, 50)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [value, increment, delay])

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-medium">{label}</h3>
          </div>
        </div>

        <div className="text-4xl font-bold text-center">
          <motion.span
            key={count}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {count.toLocaleString()}
            {suffix}
          </motion.span>
        </div>
      </CardContent>
    </Card>
  )
}

export default function LibraryStats() {
  // In a real implementation, these values would be fetched from an API
  const stats = [
    {
      label: "3D Models in Library",
      value: 12584,
      icon: <Database className="h-6 w-6" />,
      increment: 123,
      suffix: "+",
      delay: 0,
    },
    {
      label: "Contributing Institutions",
      value: 87,
      icon: <Globe className="h-6 w-6" />,
      increment: 1,
      suffix: "",
      delay: 200,
    },
    {
      label: "Active Users",
      value: 45729,
      icon: <Users className="h-6 w-6" />,
      increment: 567,
      suffix: "+",
      delay: 400,
    },
    {
      label: "New Models This Month",
      value: 1243,
      icon: <Clock className="h-6 w-6" />,
      increment: 12,
      suffix: "",
      delay: 600,
    },
  ]

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-6 text-center">Library Growth</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 opacity-90">
            Our 3D asset library is growing rapidly thanks to contributions from institutions and individuals across the
            globe.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} delay={stat.delay}>
              <StatCounter {...stat} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

