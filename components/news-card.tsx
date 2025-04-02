import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface NewsCardProps {
  news: {
    id: string
    slug: string
    title: string
    excerpt: string
    date: string
    image: string
    category: string
    author: {
      name: string
      avatar: string
    }
    readTime: number
  }
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={news.image || "/placeholder.svg"}
          alt={news.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <Badge className="absolute top-3 right-3">{news.category}</Badge>
      </div>
      <CardContent className="p-5">
        <div className="text-sm text-muted-foreground mb-2">{news.date}</div>
        <Link href={`/news/${news.slug}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">{news.title}</h3>
        </Link>
        <p className="text-muted-foreground line-clamp-2 mb-4">{news.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={news.author.avatar || "/placeholder.svg"}
              alt={news.author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm">{news.author.name}</span>
          </div>
          <span className="text-sm text-muted-foreground">{news.readTime} min read</span>
        </div>
      </CardContent>
    </Card>
  )
}

