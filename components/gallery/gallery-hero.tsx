"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function GalleryHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = 500

    const resize = () => {
      width = window.innerWidth
      height = 500
      canvas.width = width
      canvas.height = height
    }

    resize()
    window.addEventListener("resize", resize)

    // Particle system
    const particles: Particle[] = []
    const particleCount = Math.floor(width / 10)

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = `hsla(${Math.random() * 60 + 200}, 70%, 60%, ${Math.random() * 0.5 + 0.3})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > width) this.x = 0
        else if (this.x < 0) this.x = width

        if (this.y > height) this.y = 0
        else if (this.y < 0) this.y = height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Connect particles with lines
    function connectParticles() {
      if (!ctx) return
      const maxDistance = 150

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/80"
        style={{ height: "500px" }}
      />

      <div
        className="relative container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center z-10"
        style={{ height: "500px" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Immersive Gallery Experience
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our collection of stunning visuals and videos showcasing the future of XR technology and immersive
          experiences
        </motion.p>

        <motion.div
          className="mt-8 grid grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-lg overflow-hidden backdrop-blur-sm"
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

