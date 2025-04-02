import MetaverseArchitectureHero from "@/components/metaverse-architecture/hero"
import ServiceDescription from "@/components/metaverse-architecture/service-description"
import ProjectShowcase from "@/components/metaverse-architecture/project-showcase"
import DesignProcess from "@/components/metaverse-architecture/design-process"
import TechnologyStack from "@/components/metaverse-architecture/technology-stack"
import ClientTestimonials from "@/components/metaverse-architecture/client-testimonials"
import IndustryApplications from "@/components/metaverse-architecture/industry-applications"
import PricingOptions from "@/components/metaverse-architecture/pricing-options"
import FAQ from "@/components/metaverse-architecture/faq"
import CTASection from "@/components/metaverse-architecture/cta-section"

export const metadata = {
  title: "Metaverse 3D Architecture Services | Beyond Universe XR",
  description:
    "Transform your vision into immersive 3D architectural experiences with our metaverse design services. From concept to creation, we build stunning virtual spaces.",
  openGraph: {
    title: "Metaverse 3D Architecture Services | Beyond Universe XR",
    description:
      "Transform your vision into immersive 3D architectural experiences with our metaverse design services. From concept to creation, we build stunning virtual spaces.",
    images: [{ url: "/images/metaverse-architecture-og.jpg" }],
  },
}

export default function MetaverseArchitecturePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <MetaverseArchitectureHero />
      <ServiceDescription />
      <ProjectShowcase />
      <DesignProcess />
      <TechnologyStack />
      <IndustryApplications />
      <ClientTestimonials />
      <PricingOptions />
      <FAQ />
      <CTASection />
    </main>
  )
}

