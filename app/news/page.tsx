"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight, Bell } from "lucide-react"
import Link from "next/link"
import NewsCard from "@/components/news-card"
import NewsFilter from "@/components/news-filter"
import NewsPagination from "@/components/news-pagination"
import ScrollAnimation from "@/components/scroll-animation"
import { newsData } from "@/data/news-data"

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredNews, setFilteredNews] = useState(newsData)
  const itemsPerPage = 6

  useEffect(() => {
    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = "4rem"

    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [])

  useEffect(() => {
    let result = newsData

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.excerpt.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query),
      )
    }

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory)
    }

    setFilteredNews(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchQuery, activeCategory])

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)

  // Get featured news (most recent 3 items)
  const featuredNews = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3)

  // Get trending news (most viewed 4 items)
  const trendingNews = [...newsData].sort((a, b) => b.views - a.views).slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/50 to-background pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News & Updates</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stay informed about the latest developments in XR, Metaverse, Web3, and AI technologies
              </p>

              <div className="relative max-w-xl mx-auto">
                <Input
                  type="text"
                  placeholder="Search news articles..."
                  className="pl-10 pr-4 py-6 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Featured News</h2>
              <Link href="/news?featured=true" className="text-primary flex items-center hover:underline">
                View all featured <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredNews.map((item, index) => (
                <Card key={item.id} className="overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <Badge className="absolute top-3 right-3">{item.category}</Badge>
                  </div>
                  <CardContent className="p-5">
                    <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                    <Link href={`/news/${item.slug}`}>
                      <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{item.title}</h3>
                    </Link>
                    <p className="text-muted-foreground line-clamp-2">{item.excerpt}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src={item.author.avatar || "/placeholder.svg"}
                          alt={item.author.name}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm">{item.author.name}</span>
                      </div>
                      <Link href={`/news/${item.slug}`} className="text-primary text-sm hover:underline">
                        Read more
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main News Content */}
      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollAnimation>
                <div className="sticky top-20">
                  <Card className="mb-6">
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold mb-4">Categories</h3>
                      <NewsFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                    </CardContent>
                  </Card>

                  <Card className="mb-6">
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold mb-4">Trending News</h3>
                      <div className="space-y-4">
                        {trendingNews.map((item) => (
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
                      <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                      <p className="text-muted-foreground mb-4">
                        Subscribe to our newsletter to receive the latest news and updates.
                      </p>
                      <div className="space-y-3">
                        <Input placeholder="Your email address" type="email" />
                        <Button className="w-full">
                          <Bell className="mr-2 h-4 w-4" />
                          Subscribe
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollAnimation>
            </div>

            {/* News Grid */}
            <div className="lg:col-span-2">
              <ScrollAnimation>
                <Tabs defaultValue="latest" className="mb-8">
                  <TabsList className="mb-6">
                    <TabsTrigger value="latest">Latest</TabsTrigger>
                    <TabsTrigger value="popular">Most Popular</TabsTrigger>
                    <TabsTrigger value="press">Press Releases</TabsTrigger>
                  </TabsList>

                  <TabsContent value="latest" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {currentItems.map((item) => (
                        <NewsCard key={item.id} news={item} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="popular" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[...newsData]
                        .sort((a, b) => b.views - a.views)
                        .slice(0, 6)
                        .map((item) => (
                          <NewsCard key={item.id} news={item} />
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="press" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {newsData
                        .filter((item) => item.type === "press-release")
                        .slice(0, 6)
                        .map((item) => (
                          <NewsCard key={item.id} news={item} />
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Pagination */}
                {filteredNews.length > 0 ? (
                  <NewsPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground mb-4">
                      We couldn't find any news articles matching your search criteria.
                    </p>
                    <Button
                      onClick={() => {
                        setSearchQuery("")
                        setActiveCategory("all")
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                )}
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Follow us on social media for real-time updates and behind-the-scenes content
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" asChild>
                  <Link href="/social">View Social Media Hub</Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

