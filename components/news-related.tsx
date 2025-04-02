import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from 'lucide-react'

interface RelatedNews {
    slug: string
    title: string
    excerpt: string
    coverImage: string
    date: string
    category: string
}

interface NewsRelatedProps {
    newsItems?: RelatedNews[]
    currentNewsSlug?: string
    articles?: RelatedNews[]  // Add this line to accept the articles prop
}

export default function NewsRelated({ newsItems, currentNewsSlug, articles }: NewsRelatedProps) {
    // Use newsItems or articles prop, whichever is provided
    const items = newsItems || articles || []

    // Filter out the current news and limit to 3 items
    const filteredNews = currentNewsSlug
        ? items.filter((item) => item.slug !== currentNewsSlug).slice(0, 3)
        : items.slice(0, 3)

    if (filteredNews.length === 0) {
        return null
    }

    return (
        <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Related News</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredNews.map((item) => (
                    <Card key={item.slug} className="overflow-hidden h-full flex flex-col">
                        <Link href={`/news/${item.slug}`} className="block overflow-hidden">
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={item.coverImage || "/placeholder.svg"}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute top-3 left-3">
                                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs">
                                        {item.category}
                                    </Badge>
                                </div>
                            </div>
                        </Link>

                        <CardContent className="flex-grow p-4">
                            <div className="flex items-center text-xs text-muted-foreground mb-2">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{item.date}</span>
                            </div>

                            <Link href={`/news/${item.slug}`}>
                                <h4 className="font-bold mb-2 line-clamp-2 hover:text-primary transition-colors">{item.title}</h4>
                            </Link>

                            <p className="text-muted-foreground text-sm line-clamp-2">{item.excerpt}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}