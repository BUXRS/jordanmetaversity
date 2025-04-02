"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { CuboidIcon as Cube, Scan, Braces, Brain } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

interface QuickAccessButtonProps {
  icon: React.ReactNode
  label: string
  href: string
  color: string
  delay?: number
}

function QuickAccessButton({ icon, label, href, color, delay = 0 }: QuickAccessButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1 + 0.3, duration: 0.5 }}
    >
      <Link href={href}>
        <div
          className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
          style={{
            backgroundColor: isHovered ? color : "hsl(var(--card))",
            borderColor: color,
            borderWidth: "1px",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{ background: `linear-gradient(45deg, ${color}20, ${color}50)` }}
          ></div>

          <div className="p-6 flex flex-col items-center text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300"
              style={{
                backgroundColor: isHovered ? "white" : `${color}20`,
                color: isHovered ? color : "hsl(var(--primary))",
              }}
            >
              {icon}
            </div>

            <h3
              className={`text-lg font-bold mb-2 transition-colors duration-300 ${isHovered ? "text-white" : "text-foreground"}`}
            >
              {label}
            </h3>

            <div
              className={`mt-2 inline-flex items-center justify-center rounded-full py-1 px-3 text-sm transition-colors duration-300 ${
                isHovered ? "bg-white text-foreground" : "bg-primary/10 text-primary"
              }`}
            >
              Explore Now
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function QuickAccessButtons() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-4 text-center">Quick Access</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Explore our featured products and services that are transforming education and business across the MENA
            region
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickAccessButton
            icon={<Cube className="h-8 w-8" />}
            label="Metaversity Labs"
            href="/services/metaversity-labs"
            color="#3b82f6"
            delay={1}
          />

          <QuickAccessButton
            icon={<Scan className="h-8 w-8" />}
            label="Scan 4 3D"
            href="/services/scan-4-3d"
            color="#8b5cf6"
            delay={2}
          />

          <QuickAccessButton
            icon={<Braces className="h-8 w-8" />}
            label="Web3 Services"
            href="/services/web3-ai"
            color="#10b981"
            delay={3}
          />

          <QuickAccessButton
            icon={<Brain className="h-8 w-8" />}
            label="AI Solutions"
            href="/services/web3-ai"
            color="#f59e0b"
            delay={4}
          />
        </div>
      </div>
    </section>
  )
}

