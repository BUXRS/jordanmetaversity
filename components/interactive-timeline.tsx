"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

interface TimelineEvent {
  id: number
  year: number
  title: string
  description: string
  icon?: React.ReactNode
  image?: string
  category: "milestone" | "award" | "expansion"
  location?: string
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: 2018,
    title: "Company Founded",
    description:
      "Beyond Universe XR Solutions was established in Dubai with a vision to transform education and business through immersive technologies.",
    category: "milestone",
    location: "Dubai, UAE",
  },
  {
    id: 2,
    year: 2019,
    title: "First Major Partnership",
    description: "Partnered with University of Jordan to develop prototype XR educational solutions.",
    category: "milestone",
    location: "Amman, Jordan",
  },
  {
    id: 3,
    year: 2020,
    title: "First Metaversity Lab",
    description:
      "Launched our first Metaversity Lab at the University of Jordan, setting the foundation for our educational XR solutions.",
    category: "milestone",
    location: "Amman, Jordan",
  },
  {
    id: 4,
    year: 2020,
    title: "MENA EdTech Innovation Award",
    description: "Recognized for innovation in educational technology at the MENA EdTech Summit.",
    category: "award",
    location: "Dubai, UAE",
  },
  {
    id: 5,
    year: 2021,
    title: "Expansion to UAE",
    description:
      "Established our regional headquarters in Dubai to better serve the growing demand for immersive technologies in the Gulf region.",
    category: "expansion",
    location: "Dubai, UAE",
  },
  {
    id: 6,
    year: 2021,
    title: "Dubai Future Accelerator",
    description:
      "Selected for the prestigious Dubai Future Accelerator program to develop XR solutions for government entities.",
    category: "milestone",
    location: "Dubai, UAE",
  },
  {
    id: 7,
    year: 2022,
    title: "Launch of Scan 4 3D",
    description:
      "Initiated the Scan 4 3D project to build the world's largest academic 3D asset library, revolutionizing access to 3D educational resources.",
    category: "milestone",
    location: "Amman, Jordan",
  },
  {
    id: 8,
    year: 2022,
    title: "Best XR Solution Award",
    description: "Received the Best XR Solution Award at the Global EdTech Congress for our Metaversity Labs platform.",
    category: "award",
    location: "London, UK",
  },
  {
    id: 9,
    year: 2023,
    title: "Web3 & AI Integration",
    description:
      "Expanded our service offerings to include Web3 and AI solutions, providing comprehensive digital transformation services to our clients.",
    category: "milestone",
    location: "Dubai, UAE",
  },
  {
    id: 10,
    year: 2023,
    title: "US Office Opening",
    description:
      "Opened our first US office in Silicon Valley to facilitate partnerships with tech giants and expand our global reach.",
    category: "expansion",
    location: "San Francisco, USA",
  },
  {
    id: 11,
    year: 2024,
    title: "Saudi Arabia Expansion",
    description:
      "Opened operations in Riyadh to support Saudi Vision 2030 initiatives and the growing demand for immersive technologies in the Kingdom.",
    category: "expansion",
    location: "Riyadh, KSA",
  },
  {
    id: 12,
    year: 2024,
    title: "LEAP Innovation Award",
    description: "Honored with the Innovation in Education Technology award at LEAP conference in Saudi Arabia.",
    category: "award",
    location: "Riyadh, KSA",
  },
]

export default function InteractiveTimeline() {
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [visibleEvents, setVisibleEvents] = useState<TimelineEvent[]>(timelineEvents)
  const [currentPage, setCurrentPage] = useState(0)
  const [yearRange, setYearRange] = useState({ start: 2018, end: 2024 })
  const timelineRef = useRef<HTMLDivElement>(null)
  const eventsPerPage = 4

  useEffect(() => {
    // Filter events based on the active filter
    let filtered = timelineEvents
    if (activeFilter !== "all") {
      filtered = timelineEvents.filter((event) => event.category === activeFilter)
    }

    // Sort by year
    filtered = filtered.sort((a, b) => a.year - b.year)

    setVisibleEvents(filtered)
    setCurrentPage(0)

    // Update year range
    if (filtered.length > 0) {
      const minYear = Math.min(...filtered.map((e) => e.year))
      const maxYear = Math.max(...filtered.map((e) => e.year))
      setYearRange({ start: minYear, end: maxYear })
    }
  }, [activeFilter])

  const totalPages = Math.ceil(visibleEvents.length / eventsPerPage)
  const currentEvents = visibleEvents.slice(currentPage * eventsPerPage, (currentPage + 1) * eventsPerPage)

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "milestone":
        return "bg-blue-500"
      case "award":
        return "bg-amber-500"
      case "expansion":
        return "bg-emerald-500"
      default:
        return "bg-primary"
    }
  }

  return (
    <div className="py-12" ref={timelineRef}>
      <ScrollAnimation>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
          Explore the key milestones, awards, and expansions that have shaped Beyond Universe XR Solutions since our
          founding in 2018.
        </p>
      </ScrollAnimation>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <Button
          variant={activeFilter === "all" ? "default" : "outline"}
          onClick={() => setActiveFilter("all")}
          className="rounded-full"
        >
          All
        </Button>
        <Button
          variant={activeFilter === "milestone" ? "default" : "outline"}
          onClick={() => setActiveFilter("milestone")}
          className="rounded-full"
        >
          Milestones
        </Button>
        <Button
          variant={activeFilter === "award" ? "default" : "outline"}
          onClick={() => setActiveFilter("award")}
          className="rounded-full"
        >
          Awards
        </Button>
        <Button
          variant={activeFilter === "expansion" ? "default" : "outline"}
          onClick={() => setActiveFilter("expansion")}
          className="rounded-full"
        >
          Expansions
        </Button>
      </div>

      {/* Year range indicator */}
      <div className="relative max-w-4xl mx-auto mb-8">
        <div className="h-1 bg-secondary rounded-full"></div>
        <div
          className="absolute top-0 h-1 bg-primary rounded-full"
          style={{
            left: `${((yearRange.start - 2018) / (2024 - 2018)) * 100}%`,
            right: `${100 - ((yearRange.end - 2018) / (2024 - 2018)) * 100}%`,
          }}
        ></div>

        {/* Year markers */}
        {[2018, 2019, 2020, 2021, 2022, 2023, 2024].map((year) => (
          <div
            key={year}
            className="absolute top-4 transform -translate-x-1/2 text-sm text-muted-foreground"
            style={{ left: `${((year - 2018) / (2024 - 2018)) * 100}%` }}
          >
            {year}
          </div>
        ))}
      </div>

      {/* Timeline events */}
      <div className="relative max-w-5xl mx-auto">
        {/* Navigation buttons */}
        {totalPages > 1 && (
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="rounded-full bg-background/80 backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="rounded-full bg-background/80 backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {currentEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col h-full">
                    <div className={`${getCategoryColor(event.category)} h-2`}></div>
                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary">
                            {event.year}
                          </span>
                          <span className="ml-2 text-xs text-muted-foreground">{event.location}</span>
                        </div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary capitalize">
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${index === currentPage ? "bg-primary" : "bg-secondary"}`}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

