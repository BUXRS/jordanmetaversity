"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NewsPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function NewsPagination({ currentPage, totalPages, onPageChange }: NewsPaginationProps) {
  const renderPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    // Always show first page
    pages.push(
      <Button
        key={1}
        variant={currentPage === 1 ? "default" : "outline"}
        size="sm"
        onClick={() => onPageChange(1)}
        className="w-10 h-10"
      >
        1
      </Button>,
    )

    // Calculate range of visible pages
    const startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 3)

    // Adjust if we're near the start
    if (startPage > 2) {
      pages.push(
        <span key="start-ellipsis" className="px-2">
          ...
        </span>,
      )
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          variant={currentPage === i ? "default" : "outline"}
          size="sm"
          onClick={() => onPageChange(i)}
          className="w-10 h-10"
        >
          {i}
        </Button>,
      )
    }

    // Add ellipsis if needed
    if (endPage < totalPages - 1) {
      pages.push(
        <span key="end-ellipsis" className="px-2">
          ...
        </span>,
      )
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      pages.push(
        <Button
          key={totalPages}
          variant={currentPage === totalPages ? "default" : "outline"}
          size="sm"
          onClick={() => onPageChange(totalPages)}
          className="w-10 h-10"
        >
          {totalPages}
        </Button>,
      )
    }

    return pages
  }

  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 p-0"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {renderPageNumbers()}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 p-0"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

