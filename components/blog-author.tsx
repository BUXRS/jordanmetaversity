import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin, Globe } from "lucide-react"
import Link from "next/link"

interface BlogAuthorProps {
  author: {
    name: string
    image?: string
    role: string
    bio: string
    social?: {
      twitter?: string
      linkedin?: string
      website?: string
    }
  }
}

export default function BlogAuthor({ author }: BlogAuthorProps) {
  return (
    <Card className="mt-12">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Avatar className="h-24 w-24">
            {author.image ? (
              <AvatarImage src={author.image} alt={author.name} />
            ) : (
              <AvatarFallback className="text-2xl">
                {author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            )}
          </Avatar>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">{author.name}</h3>
            <p className="text-primary font-medium mb-3">{author.role}</p>
            <p className="text-muted-foreground mb-4">{author.bio}</p>

            {author.social && (
              <div className="flex justify-center md:justify-start space-x-4">
                {author.social.twitter && (
                  <Link
                    href={author.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                )}

                {author.social.linkedin && (
                  <Link
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                )}

                {author.social.website && (
                  <Link
                    href={author.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Website</span>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

