import ScrollAnimation from "./scroll-animation"

export default function SocialMediaHero() {
  return (
    <section className="pt-20 pb-12 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h1 className="text-4xl font-bold mb-6 text-center">Social Media</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Stay connected with Beyond Universe XR across all our social platforms. Follow us for the latest updates,
            insights, and behind-the-scenes content.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  )
}

