import XRHero from "@/components/xr-development/xr-hero"
import XROverview from "@/components/xr-development/xr-overview"
import XRCapabilities from "@/components/xr-development/xr-capabilities"
import XRShowcase from "@/components/xr-development/xr-showcase"
import XRIndustries from "@/components/xr-development/xr-industries"
import XRProcess from "@/components/xr-development/xr-process"
import XRTechnologies from "@/components/xr-development/xr-technologies"
import XRComparison from "@/components/xr-development/xr-comparison"
import XRTestimonials from "@/components/xr-development/xr-testimonials"
import XRPricing from "@/components/xr-development/xr-pricing"
import XRFAQ from "@/components/xr-development/xr-faq"
import XRCTA from "@/components/xr-development/xr-cta"

export const metadata = {
  title: "XR Development Services | Beyond Universe",
  description:
    "Cutting-edge AR, VR, and MR development services to transform how your audience experiences content and interacts with your brand.",
}

export default function XRDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <XRHero />
      <XROverview />
      <XRCapabilities />
      <XRShowcase />
      <XRComparison />
      <XRIndustries />
      <XRProcess />
      <XRTechnologies />
      <XRTestimonials />
      <XRPricing />
      <XRFAQ />
      <XRCTA />
    </main>
  )
}

