"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

export default function XRPricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const pricingPlans = [
    {
      name: "Starter XR",
      description: "Perfect for small businesses looking to explore XR technology.",
      monthlyPrice: 4999,
      annualPrice: 4499,
      features: [
        "Single AR or VR application",
        "Basic 3D modeling and design",
        "Standard interactions",
        "Mobile platform support",
        "3 months of maintenance",
        "Basic analytics",
      ],
      limitations: ["Limited customization", "Standard templates only", "Basic support"],
    },
    {
      name: "Business XR",
      description: "Comprehensive XR solutions for growing businesses.",
      monthlyPrice: 9999,
      annualPrice: 8999,
      popular: true,
      features: [
        "Multiple AR/VR applications",
        "Advanced 3D modeling and design",
        "Complex interactions",
        "Multi-platform support",
        "6 months of maintenance",
        "Advanced analytics",
        "Custom branding",
        "Priority support",
      ],
      limitations: [],
    },
    {
      name: "Enterprise XR",
      description: "Full-scale XR ecosystem for large organizations.",
      monthlyPrice: 19999,
      annualPrice: 17999,
      features: [
        "Comprehensive XR ecosystem",
        "Premium 3D modeling and design",
        "Advanced interactions and AI integration",
        "All platform support",
        "12 months of maintenance",
        "Enterprise analytics",
        "Custom development",
        "Dedicated support team",
        "White-label solution",
        "API integrations",
      ],
      limitations: [],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="py-20" id="pricing" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent XR Development Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the right XR development package for your business needs with our flexible pricing options.
          </p>

          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${!isAnnual ? "font-medium text-primary" : "text-muted-foreground"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} aria-label="Toggle annual billing" />
            <span className={`ml-3 ${isAnnual ? "font-medium text-primary" : "text-muted-foreground"}`}>
              Annual <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full ml-1">Save 10%</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div
                className={`h-full rounded-xl border ${plan.popular ? "border-primary shadow-lg shadow-primary/10" : "border-border"} overflow-hidden`}
              >
                <div className={`p-6 ${plan.popular ? "bg-primary text-primary-foreground" : "bg-card"}`}>
                  {plan.popular && (
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p
                    className={`text-sm mb-6 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      {formatPrice(isAnnual ? plan.annualPrice : plan.monthlyPrice)}
                    </span>
                    <span
                      className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                    >
                      {isAnnual ? " / year" : " / project"}
                    </span>
                  </div>

                  <Button variant={plan.popular ? "secondary" : "default"} className="w-full" asChild>
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </div>

                <div className="p-6 bg-background">
                  <h4 className="font-medium mb-4">What's included:</h4>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className="font-medium mb-4 text-muted-foreground">Limitations:</h4>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-start text-muted-foreground">
                            <span className="h-5 w-5 text-muted-foreground mr-2 flex items-center justify-center">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <HelpCircle className="h-4 w-4" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Upgrade for full access</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </span>
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We offer tailored XR development services for specific requirements.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">Contact for Custom Quote</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

