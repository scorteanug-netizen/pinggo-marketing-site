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
            className={`relative ${plan.popular ? "border-2 border-primary shadow-premium ring-1 ring-primary/20" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Popular
                </span>
              </div>
            )}
            <CardHeader className="text-center pb-3 pt-8">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-5">
                <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground font-medium"> EUR/luna</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3">{plan.leads}</p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-4">
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
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 bg-card rounded-2xl px-6 py-4 shadow-soft border border-border/50">
          <span className="text-muted-foreground">Add-on:</span>
          <span className="font-bold text-foreground">AI Pack - 49 EUR/luna</span>
          <span className="text-muted-foreground">(intent detection + draft messages)</span>
        </div>
        <div className="mt-6">
          <Button variant="link" asChild className="text-accent font-semibold">
            <Link to="/pricing">Vezi pricing complet</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
