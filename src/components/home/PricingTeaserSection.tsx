import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Start",
    price: "149",
    leads: "300 leads/luna",
    features: ["Email", "Slack notifications", "Basic SLA"],
  },
  {
    name: "Growth",
    price: "249",
    leads: "1,000 leads/luna",
    features: ["WhatsApp", "Email", "Slack", "Custom SLA"],
    popular: true,
  },
  {
    name: "Pro",
    price: "499",
    leads: "3,000 leads/luna",
    features: ["Routing avansat", "Escalation chains", "Priority support"],
  },
];

export function PricingTeaserSection() {
  return (
    <Section alternate>
      <SectionHeading
        title="Pricing simplu, fara surprize"
        subtitle="Toate planurile includ setup gratuit si 14 zile trial"
      />
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative ${plan.popular ? "border-primary shadow-lg" : "border-0 shadow-sm"}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
            )}
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground"> EUR/luna</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{plan.leads}</p>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <Link to="/pricing">Vezi detalii</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Add-on */}
      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          Add-on: <span className="font-semibold text-foreground">AI Pack - 49 EUR/luna</span> (intent detection + draft messages)
        </p>
        <Button variant="link" asChild className="mt-2">
          <Link to="/pricing">Vezi pricing complet</Link>
        </Button>
      </div>
    </Section>
  );
}
