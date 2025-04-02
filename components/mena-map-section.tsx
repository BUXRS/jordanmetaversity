"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Define countries with their positions (simplified for this example)
const countries = [
  { id: "uae", name: "UAE", x: 65, y: 45, active: true },
  { id: "ksa", name: "Saudi Arabia", x: 55, y: 50, active: true },
  { id: "qatar", name: "Qatar", x: 62, y: 48, active: true },
  { id: "kuwait", name: "Kuwait", x: 60, y: 40, active: false },
  { id: "bahrain", name: "Bahrain", x: 63, y: 46, active: false },
  { id: "oman", name: "Oman", x: 68, y: 55, active: false },
  { id: "egypt", name: "Egypt", x: 40, y: 40, active: false },
  { id: "jordan", name: "Jordan", x: 45, y: 35, active: false },
]

export default function MENAMapSection() {
  const [activeCountry, setActiveCountry] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our MENA Presence</h2>
          <div className="h-[400px] flex items-center justify-center">
            <p>Loading map...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Our MENA Presence
        </motion.h2>

        <div className="relative h-[400px] md:h-[500px] bg-muted/20 rounded-xl overflow-hidden">
          {/* Map background */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-20"></div>

          {/* Map overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background/70"></div>

          {/* Country markers */}
          {countries.map((country) => (
            <div
              key={country.id}
              className="absolute"
              style={{ left: `${country.x}%`, top: `${country.y}%` }}
              onMouseEnter={() => setActiveCountry(country.id)}
              onMouseLeave={() => setActiveCountry(null)}
            >
              <div
                className={`w-4 h-4 rounded-full ${
                  country.active ? "bg-primary" : "bg-muted-foreground/50"
                } relative cursor-pointer transition-all duration-300 ${
                  activeCountry === country.id ? "scale-150" : ""
                }`}
              >
                <div
                  className={`absolute -inset-1 rounded-full ${
                    country.active ? "bg-primary/30" : "bg-muted-foreground/20"
                  } animate-ping ${activeCountry === country.id ? "opacity-100" : "opacity-50"}`}
                ></div>
              </div>

              {/* Country name tooltip */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 -translate-y-full -top-2 bg-card px-3 py-1 rounded shadow-lg text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCountry === country.id ? "opacity-100 -translate-y-full" : "opacity-0 -translate-y-3/4"
                }`}
              >
                {country.name}
                {country.active && <span className="ml-1 text-primary">•</span>}
              </div>

              {/* Connection lines for active countries */}
              {country.active && (
                <div className="absolute left-1/2 top-1/2 w-px h-20 bg-primary/30 -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
              )}
            </div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-card/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
              <span className="text-sm">Active Presence</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/50 mr-2"></div>
              <span className="text-sm">Future Expansion</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-3">UAE Hub</h3>
            <p className="text-muted-foreground">
              Our headquarters in Dubai serves as the innovation center for our XR and Metaverse solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-3">Saudi Arabia</h3>
            <p className="text-muted-foreground">
              Strategic partnerships with educational institutions and businesses aligned with Vision 2030.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-card p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-3">Qatar</h3>
            <p className="text-muted-foreground">
              Delivering cutting-edge XR solutions for education and cultural heritage preservation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

