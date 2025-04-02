"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

interface BlogCardProps {
  post: {
    slug: string
    title: string
    excerpt: string
    coverImage: string
    date: string
    readingTime: string
    author: {
      name: string
      image?: string
    }
    categories: string[]
  }
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`overflow-hidden h-full flex flex-col transition-all duration-300 ${
        isHovered ? "shadow-lg transform -translate-y-1" : ""
      } ${featured ? "md:col-span-2 lg:col-span-3" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
        <div className={`aspect-video relative overflow-hidden ${featured ? "md:aspect-[21/9]" : ""}`}>
          <img
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Badge key={category} variant="secondary" className="bg-background/80 backdrop-blur-sm">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </Link>

      <CardContent className="flex-grow p-6">
        <Link href={`/blog/${post.slug}`}>
          <h3
            className={`font-bold mb-3 hover:text-primary transition-colors ${
              featured ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{post.readingTime}</span>
        </div>
        <div className="flex items-center">
          <User className="h-4 w-4 mr-1" />
          <span>{post.author.name}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

