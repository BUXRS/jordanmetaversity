"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Chart } from "@/components/ui/chart"

export default function DemandChartSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Chart data
  const chartData = {
    labels: ["2023", "2024", "2025", "2026", "2027"],
    datasets: [
      {
        label: "XR in Education",
        data: [30, 45, 65, 80, 95],
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
      },
      {
        label: "Metaverse Solutions",
        data: [20, 38, 60, 85, 100],
        borderColor: "rgba(139, 92, 246, 1)",
        backgroundColor: "rgba(139, 92, 246, 0.2)",
        tension: 0.4,
      },
      {
        label: "Web3 & AI Integration",
        data: [15, 30, 55, 75, 90],
        borderColor: "rgba(236, 72, 153, 1)",
        backgroundColor: "rgba(236, 72, 153, 0.2)",
        tension: 0.4,
      },
    ],
  }

  if (!isMounted) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Market Demand Forecast</h2>
          <div className="h-[400px] flex items-center justify-center">
            <p>Loading chart...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4 text-center"
        >
          Market Demand Forecast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        >
          The demand for immersive technologies in the MENA region is projected to grow exponentially over the next five
          years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-card p-6 rounded-lg shadow-lg"
        >
          <div className="h-[400px]">
            <Chart type="line" data={chartData} />
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-card p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-3 text-blue-500">XR in Education</h3>
            <p className="text-muted-foreground">
              Educational institutions are rapidly adopting XR technologies to enhance learning experiences and
              outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-card p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-3 text-purple-500">Metaverse Solutions</h3>
            <p className="text-muted-foreground">
              Businesses are investing in metaverse environments for collaboration, training, and customer engagement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-card p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-3 text-pink-500">Web3 & AI Integration</h3>
            <p className="text-muted-foreground">
              The convergence of Web3 and AI with immersive technologies is creating new opportunities for innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

