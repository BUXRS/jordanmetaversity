import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Beyond Universe XR</h3>
            <p className="text-muted-foreground mb-4">
              Leading company in Metaverse, XR, Web3, and AI solutions in the MENA region.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/beyonduniversexr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com/beyonduniversexr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com/beyonduniversexr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com/company/beyonduniverse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://youtube.com/beyonduniverse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/metaversity-labs" className="text-muted-foreground hover:text-primary">
                  Metaversity Labs
                </Link>
              </li>
              <li>
                <Link href="/services/scan-4-3d" className="text-muted-foreground hover:text-primary">
                  Scan 4 3D
                </Link>
              </li>
              <li>
                <Link href="/services/web3-ai" className="text-muted-foreground hover:text-primary">
                  Web3 & AI Services
                </Link>
              </li>
              <li>
                <Link href="/services/spatial-metaverse" className="text-muted-foreground hover:text-primary">
                  Spatial.io Metaverse
                </Link>
              </li>
              <li>
                <Link href="/services/metaverse-architecture" className="text-muted-foreground hover:text-primary">
                  Metaverse Architecture
                </Link>
              </li>
              <li>
                <Link href="/services/xr-development" className="text-muted-foreground hover:text-primary">
                  XR Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary">
                  Projects & Partners
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary">
                  News
                </Link>
              </li>
              <li>
                <Link href="/social" className="text-muted-foreground hover:text-primary">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sitemap" className="text-muted-foreground hover:text-primary">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-muted-foreground hover:text-primary">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-bold mb-4">Complete Sitemap</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Main Pages</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Services</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/services/metaversity-labs" className="text-muted-foreground hover:text-primary">
                    Metaversity Labs
                  </Link>
                </li>
                <li>
                  <Link href="/services/scan-4-3d" className="text-muted-foreground hover:text-primary">
                    Scan 4 3D
                  </Link>
                </li>
                <li>
                  <Link href="/services/web3-ai" className="text-muted-foreground hover:text-primary">
                    Web3 & AI
                  </Link>
                </li>
                <li>
                  <Link href="/services/spatial-metaverse" className="text-muted-foreground hover:text-primary">
                    Spatial.io Metaverse
                  </Link>
                </li>
                <li>
                  <Link href="/services/metaverse-architecture" className="text-muted-foreground hover:text-primary">
                    Metaverse Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/services/xr-development" className="text-muted-foreground hover:text-primary">
                    XR Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Projects</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-primary">
                    All Projects
                  </Link>
                </li>
                <li>
                  <Link href="/projects?category=education" className="text-muted-foreground hover:text-primary">
                    Education Projects
                  </Link>
                </li>
                <li>
                  <Link href="/projects?category=government" className="text-muted-foreground hover:text-primary">
                    Government Projects
                  </Link>
                </li>
                <li>
                  <Link href="/projects?category=healthcare" className="text-muted-foreground hover:text-primary">
                    Healthcare Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Gallery</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                    All Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/gallery?type=photo" className="text-muted-foreground hover:text-primary">
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/gallery?type=video" className="text-muted-foreground hover:text-primary">
                    Video Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Content</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-muted-foreground hover:text-primary">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/social" className="text-muted-foreground hover:text-primary">
                    Social Media
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Legal</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility" className="text-muted-foreground hover:text-primary">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Other</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-primary">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-muted-foreground hover:text-primary">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Beyond Universe XR Solutions. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-primary">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

