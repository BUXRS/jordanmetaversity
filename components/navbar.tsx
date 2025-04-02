"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./mode-toggle"
import VisitorAssistant from "./visitor-assistant"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "#",
    submenu: [
      { name: "Metaversity Labs", href: "/services/metaversity-labs" },
      { name: "Scan 4 3D", href: "/services/scan-4-3d" },
      { name: "Web3 & AI", href: "/services/web3-ai" },
      { name: "Spatial.io Metaverse", href: "/services/spatial-metaverse" },
      { name: "Metaverse Architecture", href: "/services/metaverse-architecture" },
      { name: "XR Development", href: "/services/xr-development" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "News", href: "/news" },
  { name: "Social Media", href: "/social" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showAssistant, setShowAssistant] = useState(false)
  const pathname = usePathname()

  // Replace the scroll effect with this more defensive version
  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window === "undefined") return

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    try {
      window.addEventListener("scroll", handleScroll)
    } catch (error) {
      console.error("Failed to add scroll event listener:", error)
    }

    return () => {
      try {
        window.removeEventListener("scroll", handleScroll)
      } catch (error) {
        console.error("Failed to remove scroll event listener:", error)
      }
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary">Beyond Universe</span>
                <span className="ml-1 text-sm font-semibold text-muted-foreground">XR</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) =>
                link.submenu ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-1 px-3">
                        {link.name}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {link.submenu.map((sublink) => (
                        <DropdownMenuItem key={sublink.name}>
                          <Link href={sublink.href} className="w-full" onClick={() => setIsOpen(false)}>
                            {sublink.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ),
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAssistant(!showAssistant)}
                className="ml-1"
                aria-label="Visitor Assistant"
              >
                <HelpCircle className="h-5 w-5" />
              </Button>
              <ModeToggle />
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAssistant(!showAssistant)}
                aria-label="Visitor Assistant"
              >
                <HelpCircle className="h-5 w-5" />
              </Button>
              <ModeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.name} className="py-2">
                    <div className="px-3 py-2 text-base font-medium text-primary">{link.name}</div>
                    <div className="pl-4 space-y-1">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </div>
          </div>
        )}
      </header>

      {/* Visitor Assistant */}
      <VisitorAssistant isOpen={showAssistant} onClose={() => setShowAssistant(false)} />
    </>
  )
}

