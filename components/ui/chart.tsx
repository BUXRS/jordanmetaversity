"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

interface ChartProps {
  type: "line" | "bar" | "pie" | "doughnut"
  data: ChartData<any>
  options?: ChartOptions<any>
}

export function Chart({ type, data, options = {} }: ChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)
  const [chartOptions, setChartOptions] = useState<ChartOptions>({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    ...options,
  })

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Update chart options when theme changes - only run once after mount
  useEffect(() => {
    if (!isMounted) return

    const isDarkMode = document.documentElement.classList.contains("dark")

    // Apply theme-based styling once
    setChartOptions((prev) => ({
      ...prev,
      scales: {
        ...(prev.scales || {}),
        x: {
          ...(prev.scales?.x || {}),
          grid: {
            ...(prev.scales?.x?.grid || {}),
            color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            ...(prev.scales?.x?.ticks || {}),
            color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
          },
        },
        y: {
          ...(prev.scales?.y || {}),
          grid: {
            ...(prev.scales?.y?.grid || {}),
            color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            ...(prev.scales?.y?.ticks || {}),
            color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
          },
        },
      },
      plugins: {
        ...(prev.plugins || {}),
        legend: {
          ...(prev.plugins?.legend || {}),
          labels: {
            ...(prev.plugins?.legend?.labels || {}),
            color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
          },
        },
      },
    }))

    // Set up a theme change observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class" && mutation.target === document.documentElement) {
          const isDarkMode = document.documentElement.classList.contains("dark")

          setChartOptions((prev) => ({
            ...prev,
            scales: {
              ...(prev.scales || {}),
              x: {
                ...(prev.scales?.x || {}),
                grid: {
                  ...(prev.scales?.x?.grid || {}),
                  color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                },
                ticks: {
                  ...(prev.scales?.x?.ticks || {}),
                  color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
                },
              },
              y: {
                ...(prev.scales?.y || {}),
                grid: {
                  ...(prev.scales?.y?.grid || {}),
                  color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                },
                ticks: {
                  ...(prev.scales?.y?.ticks || {}),
                  color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
                },
              },
            },
            plugins: {
              ...(prev.plugins || {}),
              legend: {
                ...(prev.plugins?.legend || {}),
                labels: {
                  ...(prev.plugins?.legend?.labels || {}),
                  color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
                },
              },
            },
          }))
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => {
      observer.disconnect()
    }
  }, [isMounted]) // Remove options from dependencies

  if (!isMounted) {
    return (
      <div ref={chartRef} className="w-full h-full flex items-center justify-center">
        Loading chart...
      </div>
    )
  }

  switch (type) {
    case "line":
      return <Line data={data} options={chartOptions} />
    case "bar":
      return <Bar data={data} options={chartOptions} />
    case "pie":
      return <Pie data={data} options={chartOptions} />
    case "doughnut":
      return <Doughnut data={data} options={chartOptions} />
    default:
      return <Line data={data} options={chartOptions} />
  }
}

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative">{children}</div>
}

export const ChartTooltip = () => {
  return null
}

export const ChartTooltipContent = () => {
  return null
}

export const ChartLegend = () => {
  return null
}

export const ChartLegendContent = () => {
  return null
}

export const ChartStyle = () => {
  return null
}

