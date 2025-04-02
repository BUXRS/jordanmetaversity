"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Eye, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import NewsShare from "@/components/news-share"
import NewsRelated from "@/components/news-related"
import { newsData } from "@/data/news-data"

export default function NewsDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [article, setArticle] = useState<any>(null)
  const [relatedArticles, setRelatedArticles] = useState<any[]>([])
  const [isShareOpen, setIsShareOpen] = useState(false)

  useEffect(() => {
    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = "4rem"

    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [])

  useEffect(() => {
    if (slug) {
      const foundArticle = newsData.find((item) => item.slug === slug)

      if (foundArticle) {
        setArticle(foundArticle)

        // Find related articles in the same category
        const related = newsData
          .filter((item) => item.category === foundArticle.category && item.id !== foundArticle.id)
          .slice(0, 3)

        setRelatedArticles(related)
      }
    }
  }, [slug])

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/news">Back to News</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <Link href="/news" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge>{article.category}</Badge>
              {article.tags?.map((tag: string) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <img
                  src={article.author.avatar || "/placeholder.svg"}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium text-foreground">{article.author.name}</div>
                  <div className="text-sm">{article.author.title}</div>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{article.date}</span>
              </div>

              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{article.readTime} min read</span>
              </div>

              <div className="flex items-center">
                <Eye className="mr-2 h-4 w-4" />
                <span>{article.views.toLocaleString()} views</span>
              </div>

              <Button variant="ghost" size="sm" className="flex items-center" onClick={() => setIsShareOpen(true)}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            {article.imageCaption && (
              <p className="text-sm text-muted-foreground mt-2 text-center">{article.imageCaption}</p>
            )}
          </ScrollAnimation>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollAnimation>
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl font-medium mb-6 text-foreground">{article.excerpt}</p>

                  {article.content.map((section: any, index: number) => (
                    <div key={index} className="mb-8">
                      {section.heading && <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>}
                      {section.paragraphs.map((paragraph: string, pIndex: number) => (
                        <p key={pIndex} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                      {section.image && (
                        <div className="my-6">
                          <img
                            src={section.image || "/placeholder.svg"}
                            alt={section.imageAlt || "Article illustration"}
                            className="w-full rounded-lg"
                          />
                          {section.imageCaption && (
                            <p className="text-sm text-muted-foreground mt-2 text-center">{section.imageCaption}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                {/* Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Related Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags?.map((tag: string) => (
                      <Link key={tag} href={`/news?tag=${tag}`}>
                        <Badge variant="outline" className="hover:bg-secondary">
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <img
                        src={article.author.avatar || "/placeholder.svg"}
                        alt={article.author.name}
                        className="w-20 h-20 rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{article.author.name}</h3>
                        <p className="text-muted-foreground mb-3">{article.author.bio}</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/news?author=${article.author.id}`}>View all articles</Link>
                          </Button>
                          {article.author.twitter && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={article.author.twitter} target="_blank" rel="noopener noreferrer">
                                Twitter
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Share */}
                <div className="mb-8 flex justify-between items-center">
                  <Button variant="outline" asChild>
                    <Link href="/news">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to News
                    </Link>
                  </Button>
                  <Button variant="outline" onClick={() => setIsShareOpen(true)}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Article
                  </Button>
                </div>
              </ScrollAnimation>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollAnimation>
                <div className="sticky top-20">
                  <Card className="mb-6">
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                      <NewsRelated articles={relatedArticles} />
                    </CardContent>
                  </Card>

                  <Card className="mb-6">
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold mb-4">Latest News</h3>
                      <div className="space-y-4">
                        {newsData
                          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                          .slice(0, 4)
                          .map((item) => (
                            <div key={item.id} className="flex gap-3">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                className="w-16 h-16 object-cover rounded-md"
                              />
                              <div>
                                <Link href={`/news/${item.slug}`}>
                                  <h4 className="font-medium line-clamp-2 hover:text-primary transition-colors">
                                    {item.title}
                                  </h4>
                                </Link>
                                <p className="text-sm text-muted-foreground">{item.date}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold mb-4">Explore More</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="/blog">Visit our Blog</Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="/projects">Explore Projects</Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="/social">Social Media Hub</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Share Modal */}
      <NewsShare
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        title={article.title}
        url={`https://beyonduniverse.com/news/${article.slug}`}
      />
    </div>
  )
}

