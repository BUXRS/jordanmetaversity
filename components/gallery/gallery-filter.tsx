"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface GalleryFilterProps {
  category: string
  timeframe: string
  onFilterChange: (filterType: string, value: string) => void
}

export default function GalleryFilter({ category, timeframe, onFilterChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-end">
      <div className="flex flex-col gap-2">
        <Label htmlFor="category-filter">Category</Label>
        <Select value={category} onValueChange={(value) => onFilterChange("category", value)}>
          <SelectTrigger id="category-filter" className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="educational">Educational</SelectItem>
            <SelectItem value="entertainment">Entertainment</SelectItem>
            <SelectItem value="medical">Medical</SelectItem>
            <SelectItem value="industrial">Industrial</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="timeframe-filter">Time Period</Label>
        <Select value={timeframe} onValueChange={(value) => onFilterChange("timeframe", value)}>
          <SelectTrigger id="timeframe-filter" className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="week">Past Week</SelectItem>
            <SelectItem value="month">Past Month</SelectItem>
            <SelectItem value="year">Past Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

