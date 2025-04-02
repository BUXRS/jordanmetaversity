"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import ScrollAnimation from "../scroll-animation"
import Link from "next/link"

const pricingPlans = {
  monthly: [
    {
      name: "Basic",
      description: "Perfect for small virtual spaces and simple designs",
      price: 2500,
      features: [
        "Single virtual space design",
        "Basic interactivity",
        "Standard textures and lighting",
        "1 revision round",
        "Basic user analytics",
        "30 days of support",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Ideal for businesses needing comprehensive virtual environments",
      price: 5000,
      features: [
        "Multi-room virtual environment",
        "Advanced interactivity",
        "Custom textures and materials",
        "3 revision rounds",
        "Detailed user analytics",
        "90 days of support",
        "Cross-platform optimization",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale metaverse projects with complex requirements",
      price: 10000,
      features: [
        "Complete virtual campus/complex",
        "Full interactivity suite",
        "Premium materials and effects",
        "Unlimited revisions",
        "Advanced analytics dashboard",
        "1 year of support and maintenance",
        "Cross-platform optimization",
        "Custom integrations",
        "Dedicated project manager",
      ],
      highlighted: false,
    },
  ],
  annual: [
    {
      name: "Basic",
      description: "Perfect for small virtual spaces and simple designs",
      price: 2000,
      features: [
        "Single virtual space design",
        "Basic interactivity",
        "Standard textures and lighting",
        "1 revision round",
        "Basic user analytics",
        "30 days of support",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Ideal for businesses needing comprehensive virtual environments",
      price: 4000,
      features: [
        "Multi-room virtual environment",
        "Advanced interactivity",
        "Custom textures and materials",
        "3 revision rounds",
        "Detailed user analytics",
        "90 days of support",
        "Cross-platform optimization",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale metaverse projects with complex requirements",
      price: 8000,
      features: [
        "Complete virtual campus/complex",
        "Full interactivity suite",
        "Premium materials and effects",
        "Unlimited revisions",
        "Advanced analytics dashboard",
        "1 year of support and maintenance",
        "Cross-platform optimization",
        "Custom integrations",
        "Dedicated project manager",
      ],
      highlighted: false,
    },
  ],
}

export default function PricingOptions() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")
  }

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transparent <span className="text-primary">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that best fits your metaverse architectural needs.
            </p>

            <div className="flex items-center justify-center mt-8">
              <Label
                htmlFor="billing-toggle"
                className={billingCycle === "monthly" ? "text-primary" : "text-muted-foreground"}
              >
                Monthly
              </Label>
              <Switch
                id="billing-toggle"
                checked={billingCycle === "annual"}
                onCheckedChange={toggleBillingCycle}
                className="mx-4"
              />
              <Label
                htmlFor="billing-toggle"
                className={billingCycle === "annual" ? "text-primary" : "text-muted-foreground"}
              >
                Annual <span className="text-xs text-primary">(20% off)</span>
              </Label>
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans[billingCycle].map((plan, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card
                className={`h-full flex flex-col ${
                  plan.highlighted ? "border-primary shadow-lg shadow-primary/10" : "border-border"
                }`}
              >
                <CardHeader className={`pb-4 ${plan.highlighted ? "bg-primary/5" : ""}`}>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="py-6 flex-grow">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/{billingCycle === "monthly" ? "mo" : "mo annually"}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.highlighted ? "" : "variant-outline"}`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <Link href="/contact" className="w-full">
                      Get Started
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need a custom solution? Contact us for a personalized quote.</p>
          <Button variant="outline">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

