import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

interface RelatedPost {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  categories: string[]
}

interface RelatedPostsProps {
  posts: RelatedPost[]
  currentPostSlug: string
}

export default function RelatedPosts({ posts, currentPostSlug }: RelatedPostsProps) {
  // Filter out the current post and limit to 3 posts
  const filteredPosts = posts.filter((post) => post.slug !== currentPostSlug).slice(0, 3)

  if (filteredPosts.length === 0) {
    return null
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.slug} className="overflow-hidden h-full flex flex-col">
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {post.categories.slice(0, 1).map((category) => (
                    <Badge key={category} variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>

            <CardContent className="flex-grow p-4">
              <div className="flex items-center text-xs text-muted-foreground mb-2">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{post.date}</span>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h4 className="font-bold mb-2 line-clamp-2 hover:text-primary transition-colors">{post.title}</h4>
              </Link>

              <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

