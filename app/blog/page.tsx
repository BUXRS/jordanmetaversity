"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import BlogCard from "@/components/blog-card"
import BlogFilter from "@/components/blog-filter"
import BlogPagination from "@/components/blog-pagination"

// Sample blog posts data
const blogPosts = [
  {
    slug: "future-of-xr-education",
    title: "The Future of XR in Education: Beyond the Classroom",
    excerpt:
      "Explore how extended reality technologies are transforming educational experiences and creating new possibilities for immersive learning environments.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "March 15, 2025",
    readingTime: "8 min read",
    author: {
      name: "Sarah Khalid",
      image: "/placeholder.svg?height=100&width=100",
      role: "Chief Technology Officer",
      bio: "Technology innovator specializing in XR development and AI integration with over 10 years of experience in immersive technologies.",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    categories: ["XR Technology", "Education", "Innovation"],
    featured: true,
    content: `
      <p>The educational landscape is undergoing a profound transformation, driven by the rapid advancement and adoption of Extended Reality (XR) technologies. As we move beyond traditional classroom settings, XR—encompassing Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR)—is creating unprecedented opportunities for immersive, experiential learning that transcends physical limitations.</p>
      
      <h2>Breaking Down Physical Barriers</h2>
      
      <p>One of the most significant advantages of XR in education is its ability to eliminate physical constraints. Students no longer need to be in the same location to share learning experiences. Virtual classrooms can bring together learners from across the globe, creating diverse educational environments that would be impossible to achieve in traditional settings.</p>
      
      <p>Moreover, XR enables access to locations and experiences that would otherwise be inaccessible. Medical students can practice complex surgeries in virtual environments, history classes can "visit" ancient civilizations, and astronomy students can "travel" through the solar system—all without leaving their learning spaces.</p>
      
      <h2>Enhancing Engagement and Retention</h2>
      
      <p>Research consistently shows that immersive learning experiences lead to higher engagement and better information retention. By engaging multiple senses simultaneously, XR creates stronger neural connections and more memorable learning experiences.</p>
      
      <p>A study conducted by the University of Maryland found that people recall information with 8.8% higher accuracy when learning in VR environments compared to traditional methods. This enhanced retention is particularly valuable for complex subjects where visualization and spatial understanding play crucial roles.</p>
      
      <h2>Personalized Learning Pathways</h2>
      
      <p>XR technologies, especially when combined with artificial intelligence, enable truly personalized education. Adaptive learning systems can analyze student performance in real-time and adjust the difficulty, pace, and style of content delivery to match individual learning needs.</p>
      
      <p>This personalization extends beyond academic content to learning environments themselves. Students with different learning preferences can customize their virtual surroundings to minimize distractions and maximize focus—something impossible to achieve in traditional classroom settings where all students share the same physical space.</p>
      
      <h2>Developing Future-Ready Skills</h2>
      
      <p>As the workplace evolves, so too must education. XR not only teaches subject matter but also helps students develop the digital literacy and adaptability they'll need in tomorrow's job market. By engaging with cutting-edge technology as part of their education, students become comfortable with the tools and interfaces they're likely to encounter in their professional lives.</p>
      
      <p>Collaborative VR environments also foster teamwork and communication skills as students work together on projects in shared virtual spaces, developing the soft skills that remain essential even as technical requirements change.</p>
      
      <h2>Challenges and Considerations</h2>
      
      <p>Despite its transformative potential, XR in education faces several challenges. Hardware costs, though decreasing, still present barriers to widespread adoption, particularly in under-resourced educational settings. Technical issues and the learning curve associated with new technologies can also disrupt the educational experience if not properly managed.</p>
      
      <p>Additionally, there are valid concerns about the physiological and psychological effects of prolonged XR use, particularly for younger students. Responsible implementation requires careful consideration of age-appropriate content and usage guidelines.</p>
      
      <h2>The Path Forward</h2>
      
      <p>As XR technologies continue to mature and become more accessible, their integration into educational frameworks will likely accelerate. The most successful implementations will be those that thoughtfully blend immersive experiences with traditional learning methods, creating hybrid approaches that leverage the strengths of each.</p>
      
      <p>Educational institutions that embrace XR now will be better positioned to evolve with the technology, developing the expertise and infrastructure needed to provide cutting-edge learning experiences as these tools become increasingly sophisticated.</p>
      
      <h2>Conclusion</h2>
      
      <p>The future of XR in education extends far beyond simply digitizing existing content or creating virtual versions of physical classrooms. At its best, XR has the potential to fundamentally reimagine what education can be—creating learning experiences that are more engaging, accessible, and effective than ever before.</p>
      
      <p>As we continue to explore and refine these technologies, we move closer to an educational paradigm where learning is limited not by physical resources or geographic location, but only by imagination and curiosity—the very qualities education should foster.</p>
    `,
  },
  {
    slug: "blockchain-cultural-heritage",
    title: "Preserving Cultural Heritage Through Blockchain and 3D Scanning",
    excerpt:
      "How emerging technologies are helping to digitally preserve and protect cultural artifacts and historical sites for future generations.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "March 10, 2025",
    readingTime: "6 min read",
    author: {
      name: "Ahmed Al-Mansour",
      image: "/placeholder.svg?height=100&width=100",
      role: "Founder & CEO",
      bio: "Visionary leader with 15+ years of experience in technology and education, passionate about using immersive technologies to preserve cultural heritage.",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        website: "https://example.com",
      },
    },
    categories: ["Blockchain", "Cultural Heritage", "3D Scanning"],
    content: `
      <p>In an era where cultural heritage faces unprecedented threats from conflict, climate change, tourism, and time itself, technology offers new hope for preservation. The combination of high-precision 3D scanning and blockchain technology is creating a digital safety net for the world's most precious cultural artifacts and historical sites, ensuring they can be experienced by future generations regardless of what happens to their physical counterparts.</p>
      
      <h2>The Vulnerability of Cultural Heritage</h2>
      
      <p>Recent years have seen alarming destruction of irreplaceable cultural heritage. From the deliberate demolition of ancient sites by extremist groups to the accidental fire at Notre-Dame Cathedral in Paris, we've witnessed how quickly centuries of history can be lost. Even without catastrophic events, many artifacts and structures face gradual degradation from environmental factors, tourism pressure, and limited conservation resources.</p>
      
      <p>The MENA region, home to some of humanity's oldest civilizations, is particularly rich in cultural heritage—and particularly vulnerable to these threats. This reality has spurred innovative approaches to preservation that leverage cutting-edge technologies.</p>
      
      <h2>Digital Preservation Through 3D Scanning</h2>
      
      <p>High-precision 3D scanning technology allows for the creation of incredibly detailed digital replicas of artifacts and sites. Using techniques like photogrammetry, laser scanning, and structured light scanning, preservationists can capture objects with sub-millimeter accuracy, recording not just their shape but also color, texture, and material properties.</p>
      
      <p>These digital twins serve multiple purposes:</p>
      
      <ul>
        <li>They provide a precise record of the artifact's condition at a specific point in time, useful for monitoring degradation</li>
        <li>They enable virtual access to objects that may be too fragile for regular display or handling</li>
        <li>They allow for the creation of physical replicas through 3D printing</li>
        <li>They make possible immersive virtual experiences of sites that may be inaccessible due to geography, conflict, or conservation concerns</li>
      </ul>
      
      <p>The technology has already been used to document thousands of artifacts across the MENA region, from the intricate carvings of Petra to delicate manuscripts and pottery that tell the story of ancient civilizations.</p>
      
      <h2>Blockchain: Ensuring Authenticity and Provenance</h2>
      
      <p>While 3D scanning creates the digital record, blockchain technology ensures its authenticity and permanence. By recording the provenance and digital fingerprint of each scan on a distributed ledger, blockchain provides:</p>
      
      <ul>
        <li>Immutable verification of when and how the scan was created</li>
        <li>Transparent tracking of ownership and usage rights</li>
        <li>Protection against unauthorized modification</li>
        <li>Decentralized storage that isn't vulnerable to single points of failure</li>
      </ul>
      
      <p>This blockchain verification is particularly valuable in combating the growing problem of digital forgeries and ensuring that future generations can trust the authenticity of digital heritage records.</p>
      
      <h2>Beyond Preservation: Democratizing Access</h2>
      
      <p>The combination of these technologies does more than just preserve cultural heritage—it democratizes access to it. Many priceless artifacts are housed in major museums in wealthy countries, far from their places of origin and inaccessible to most of the world's population. Digital preservation creates opportunities for people everywhere to experience these cultural treasures.</p>
      
      <p>Virtual reality museums, augmented reality educational experiences, and online repositories of 3D models are making it possible for anyone with internet access to explore cultural heritage in immersive ways. This expanded access fosters greater cross-cultural understanding and appreciation for shared human history.</p>
      
      <h2>Challenges and Ethical Considerations</h2>
      
      <p>Despite its promise, this technological approach to preservation faces several challenges:</p>
      
      <ul>
        <li>Questions of ownership and intellectual property rights for digital replicas of cultural artifacts</li>
        <li>The need for standards to ensure consistency and interoperability of digital preservation efforts</li>
        <li>Concerns about the environmental impact of blockchain technology, particularly energy-intensive consensus mechanisms</li>
        <li>The risk that digital preservation might be seen as a substitute for physical conservation rather than a complement to it</li>
      </ul>
      
      <p>Addressing these challenges requires collaboration between technologists, cultural heritage experts, legal scholars, and communities with historical connections to the preserved artifacts and sites.</p>
      
      <h2>The Future of Digital Heritage</h2>
      
      <p>As scanning technology becomes more portable and affordable, and as blockchain systems become more energy-efficient and user-friendly, we can expect to see exponential growth in digital preservation efforts. Community-led initiatives are already emerging, with local populations taking ownership of digitizing their cultural heritage rather than waiting for external institutions to do so.</p>
      
      <p>The next frontier may be the integration of artificial intelligence to help reconstruct damaged or partially destroyed artifacts and sites based on existing data, historical records, and similar examples. While such reconstructions would be clearly identified as AI-assisted, they could provide valuable insights and more complete experiences of heritage that has been lost.</p>
      
      <h2>Conclusion</h2>
      
      <p>The marriage of 3D scanning and blockchain technology represents a powerful new approach to cultural heritage preservation—one that creates permanent, verifiable records while expanding global access. While these digital twins can never fully replace the experience of physical artifacts and sites, they ensure that even if the worst happens, the knowledge, beauty, and cultural significance of our shared heritage will not be lost to time.</p>
      
      <p>As we continue to develop and refine these technologies, we move closer to a future where cultural heritage is both better protected and more widely accessible—a future where the treasures of human civilization can be studied, appreciated, and preserved for generations to come.</p>
    `,
  },
  {
    slug: "ai-powered-metaverse",
    title: "AI-Powered Metaverse: Creating Intelligent Virtual Worlds",
    excerpt:
      "Examining how artificial intelligence is enhancing metaverse experiences with intelligent NPCs, adaptive environments, and personalized interactions.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "March 5, 2025",
    readingTime: "7 min read",
    author: {
      name: "Omar Nasser",
      image: "/placeholder.svg?height=100&width=100",
      role: "Chief Operations Officer",
      bio: "Operations expert with a background in scaling technology companies across MENA, specializing in AI implementation and metaverse development.",
      social: {
        linkedin: "https://linkedin.com",
      },
    },
    categories: ["Artificial Intelligence", "Metaverse", "Virtual Worlds"],
    content: `
      <p>The concept of the metaverse—a persistent, shared virtual universe where physical and digital realities converge—has captured the imagination of technologists, businesses, and consumers alike. As this digital frontier continues to evolve, artificial intelligence is emerging as the critical technology that will transform metaverse platforms from static, programmed environments into dynamic, responsive worlds that adapt to and learn from their users.</p>
      
      <h2>Beyond Scripted Interactions</h2>
      
      <p>Early virtual worlds and gaming environments relied on pre-scripted interactions and behaviors, creating experiences that, while entertaining, often felt artificial and limited. The integration of advanced AI is fundamentally changing this paradigm by enabling:</p>
      
      <ul>
        <li>Non-player characters (NPCs) with sophisticated conversational abilities and emotional intelligence</li>
        <li>Environments that evolve based on collective user behavior and preferences</li>
        <li>Personalized experiences that adapt to individual users' interests and interaction patterns</li>
        <li>Procedurally generated content that ensures environments remain fresh and engaging</li>
      </ul>
      
      <p>These AI-driven capabilities are transforming the metaverse from a collection of digital spaces into living, breathing virtual worlds that can surprise and delight even frequent visitors.</p>
      
      <h2>Intelligent Virtual Beings</h2>
      
      <p>Perhaps the most visible application of AI in the metaverse is the creation of intelligent virtual beings or NPCs. Unlike their predecessors, which followed simple scripts and decision trees, these AI-powered entities can:</p>
      
      <ul>
        <li>Engage in natural, open-ended conversations using large language models</li>
        <li>Remember past interactions with specific users and reference them in future encounters</li>
        <li>Express emotions through facial expressions, body language, and voice modulation</li>
        <li>Learn and adapt their behavior based on how users interact with them</li>
        <li>Pursue their own goals and activities when not interacting with users</li>
      </ul>
      
      <p>These capabilities create the impression of interacting with sentient beings rather than computer programs, dramatically increasing the sense of presence and social connection in virtual environments.</p>
      
      <h2>Adaptive Environments</h2>
      
      <p>Beyond individual entities, AI is enabling entire metaverse environments to become responsive and adaptive. Weather patterns might change based on user activities, architecture could evolve to accommodate popular gathering spots, and natural elements like vegetation might grow or recede depending on how users interact with the environment.</p>
      
      <p>This environmental intelligence creates virtual worlds that feel organic and alive rather than static and artificial. It also enables the creation of "living histories" where the environment itself records and reflects the collective experiences of its inhabitants over time.</p>
      
      <h2>Personalization at Scale</h2>
      
      <p>One of the most powerful applications of AI in the metaverse is the ability to create personalized experiences for each user without requiring manual customization. By analyzing user preferences, behavior patterns, and explicit choices, AI systems can:</p>
      
      <ul>
        <li>Recommend relevant events, spaces, and connections</li>
        <li>Adjust environmental details to match aesthetic preferences</li>
        <li>Customize difficulty levels in gaming or learning experiences</li>
        <li>Present information in formats that align with individual learning styles</li>
      </ul>
      
      <p>This personalization makes the metaverse more engaging and accessible to diverse users with different needs and preferences.</p>
      
      <h2>Content Generation and Evolution</h2>
      
      <p>Creating enough content to populate vast virtual worlds has traditionally been a bottleneck in metaverse development. AI-powered generative systems are addressing this challenge by enabling:</p>
      
      <ul>
        <li>Procedural generation of landscapes, buildings, and objects</li>
        <li>AI-assisted creation of music, art, and narrative content</li>
        <li>Dynamic modification of existing content to create variations and keep experiences fresh</li>
        <li>User-initiated content creation through natural language or simple controls</li>
      </ul>
      
      <p>These capabilities not only reduce development costs but also create metaverse environments that can continuously evolve and expand without constant human intervention.</p>
      
      <h2>Challenges and Considerations</h2>
      
      <p>Despite its transformative potential, the integration of AI into the metaverse presents several challenges:</p>
      
      <ul>
        <li>Computational demands of running sophisticated AI models in real-time virtual environments</li>
        <li>Privacy concerns related to the collection and analysis of user behavior data</li>
        <li>Potential for AI systems to perpetuate or amplify biases present in their training data</li>
        <li>Questions about ownership and attribution for AI-generated content</li>
        <li>The uncanny valley effect when AI entities approach but don't quite achieve human-like behavior</li>
      </ul>
      
      <p>Addressing these challenges requires thoughtful design, transparent policies, and ongoing dialogue between developers, users, and regulators.</p>
      
      <h2>The Future of AI in the Metaverse</h2>
      
      <p>Looking ahead, we can expect AI to become even more deeply integrated into metaverse platforms, with several emerging trends:</p>
      
      <ul>
        <li>Multimodal AI that can process and generate text, images, audio, and 3D content simultaneously</li>
        <li>Embodied AI that understands and can navigate physical spaces represented in the metaverse</li>
        <li>Collective intelligence systems that enable large-scale collaboration between humans and AI</li>
        <li>Emotional intelligence that creates more meaningful and nuanced social interactions</li>
      </ul>
      
      <p>These advancements will continue to blur the line between programmed and emergent behavior, creating virtual worlds that surprise even their creators with their complexity and responsiveness.</p>
      
      <h2>Conclusion</h2>
      
      <p>The marriage of AI and the metaverse represents one of the most exciting frontiers in digital experience. By infusing virtual worlds with intelligence, adaptivity, and personalization, AI is transforming the metaverse from a collection of digital spaces into a complex, evolving ecosystem that responds to and learns from its inhabitants.</p>
      
      <p>As these technologies continue to mature, we can expect virtual worlds to become increasingly indistinguishable from physical reality in terms of their complexity, unpredictability, and capacity for meaningful interaction. The result will be not just a new medium for entertainment and social connection, but potentially new forms of culture, commerce, and community that exist at the intersection of human creativity and artificial intelligence.</p>
    `,
  },
]

// Extract all unique categories
const allCategories = Array.from(new Set(blogPosts.flatMap((post) => post.categories)))

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.categories.includes(activeCategory)
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  // Get featured post (if any)
  const featuredPost = filteredPosts.find((post) => post.featured)

  // Get regular posts (excluding featured if it exists)
  const regularPosts = featuredPost ? filteredPosts.filter((post) => post !== featuredPost) : filteredPosts

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(regularPosts.length / postsPerPage)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, searchTerm])

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h1 className="text-4xl font-bold mb-4 text-center">Blog</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Insights, news, and perspectives on XR, Web3, and AI technologies from the Beyond Universe team.
          </p>
        </ScrollAnimation>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <BlogCard post={featuredPost} featured={true} />
          </div>
        )}

        {/* Blog Filter */}
        <BlogFilter
          categories={allCategories}
          onFilterChange={setActiveCategory}
          onSearchChange={setSearchTerm}
          activeCategory={activeCategory}
        />

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-4">No posts found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <Button
              onClick={() => {
                setActiveCategory("all")
                setSearchTerm("")
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-primary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights on XR, Web3, and AI technologies directly in your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md border border-border flex-grow"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

