"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, X } from "lucide-react"
import ScrollAnimation from "./scroll-animation"
import Link from "next/link"

interface PricingTier {
  id: string
  title: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: {
    included: string[]
    excluded: string[]
  }
  cta: string
  popular?: boolean
  color: string
}

const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    title: "Starter",
    description: "Essential Web3 & AI services for small businesses and startups.",
    monthlyPrice: 2500,
    yearlyPrice: 24000,
    features: {
      included: [
        "Basic smart contract development",
        "NFT minting setup",
        "Tokenomics consultation (5 hours)",
        "Web3 fundamentals training (1 session)",
        "AI strategy assessment",
        "Email support",
      ],
      excluded: [
        "Custom DAO implementation",
        "Advanced security audits",
        "Dedicated account manager",
        "Custom AI model development",
      ],
    },
    cta: "Get Started",
    color: "#3b82f6",
  },
  {
    id: "professional",
    title: "Professional",
    description: "Comprehensive solutions for growing organizations.",
    monthlyPrice: 5000,
    yearlyPrice: 48000,
    features: {
      included: [
        "Advanced smart contract development",
        "Complete NFT marketplace setup",
        "Basic DAO implementation",
        "Tokenomics design & implementation",
        "Web3 training program (3 sessions)",
        "AI integration with existing systems",
        "Security audit & testing",
        "Priority support",
      ],
      excluded: ["Custom AI model development", "24/7 support"],
    },
    cta: "Upgrade Now",
    popular: true,
    color: "#8b5cf6",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Full-scale Web3 & AI transformation for large organizations.",
    monthlyPrice: 10000,
    yearlyPrice: 96000,
    features: {
      included: [
        "Custom smart contract ecosystem",
        "Enterprise NFT platform development",
        "Complete DAO governance system",
        "Advanced tokenomics modeling & simulation",
        "Comprehensive Web3 training program",
        "Custom AI model development",
        "Advanced security audits & monitoring",
        "Dedicated account manager",
        "24/7 support",
        "Quarterly strategy reviews",
      ],
      excluded: [],
    },
    cta: "Contact Sales",
    color: "#10b981",
  },
]

export default function PricingTiers() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
  }

  const getDiscountPercentage = (monthly: number, yearly: number) => {
    const monthlyTotal = monthly * 12
    const savings = monthlyTotal - yearly
    return Math.round((savings / monthlyTotal) * 100)
  }

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-6 text-center">Transparent Pricing</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Choose the plan that best fits your organization's needs and scale as you grow.
          </p>
        </ScrollAnimation>

        <div className="flex items-center justify-center mb-12">
          <span className={`mr-2 ${billingCycle === "monthly" ? "font-medium" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <Switch checked={billingCycle === "yearly"} onCheckedChange={toggleBillingCycle} />
          <span className={`ml-2 ${billingCycle === "yearly" ? "font-medium" : "text-muted-foreground"}`}>Yearly</span>
          {billingCycle === "yearly" && (
            <Badge
              variant="outline"
              className="ml-2 bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20"
            >
              Save up to 20%
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {pricingTiers.map((tier) => (
              <motion.div
                key={`${tier.id}-${billingCycle}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`h-full flex flex-col relative ${tier.popular ? "border-primary shadow-lg" : ""}`}>
                  {tier.popular && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: tier.color }}></span>
                      {tier.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{tier.description}</p>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <div className="mb-6">
                      <p className="text-4xl font-bold">
                        $
                        {billingCycle === "monthly"
                          ? tier.monthlyPrice.toLocaleString()
                          : (tier.yearlyPrice / 12).toLocaleString()}
                      </p>
                      <p className="text-muted-foreground">per month</p>

                      {billingCycle === "yearly" && (
                        <p className="text-sm text-green-500 mt-1">
                          Save {getDiscountPercentage(tier.monthlyPrice, tier.yearlyPrice)}% with annual billing
                        </p>
                      )}
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">What's included:</h4>
                      <ul className="space-y-2">
                        {tier.features.included.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {tier.features.excluded.length > 0 && (
                        <>
                          <h4 className="font-medium">Not included:</h4>
                          <ul className="space-y-2">
                            {tier.features.excluded.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      asChild
                      className="w-full"
                      variant={tier.popular ? "default" : "outline"}
                      style={tier.popular ? {} : { borderColor: `${tier.color}50`, color: tier.color }}
                    >
                      <Link href="/contact">{tier.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Contact our sales team for a tailored package.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

