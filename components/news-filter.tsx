"use client"

import { Button } from "@/components/ui/button"

interface NewsFilterProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export default function NewsFilter({ activeCategory, setActiveCategory }: NewsFilterProps) {
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "company", name: "Company News" },
    { id: "technology", name: "Technology" },
    { id: "events", name: "Events" },
    { id: "industry", name: "Industry" },
    { id: "partnerships", name: "Partnerships" },
    { id: "research", name: "Research" },
  ]

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveCategory(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}

