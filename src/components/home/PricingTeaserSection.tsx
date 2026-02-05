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
      <div className="grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <Card
            key={plan.name}
            className={`relative ${plan.popular ? "border-t-4 border-t-primary border-2 border-primary shadow-card-hover ring-1 ring-primary/20" : i === 0 ? "card-accent-orange" : i === 2 ? "card-accent-blue" : "card-accent-violet"}`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Popular
                </span>
              </div>
            )}
            <CardHeader className="text-center pb-2 pt-6">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-foreground leading-none">{plan.price}</span>
                <span className="text-muted-foreground font-medium text-sm"> EUR/luna</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{plan.leads}</p>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-primary" />
                    </div>
                    <span className="font-medium text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-3">
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
        <div className="inline-flex items-center gap-2 bg-card rounded-2xl px-5 py-3 shadow-card border border-border-card">
          <span className="text-muted-foreground text-sm">Add-on:</span>
          <span className="font-bold text-foreground text-sm">AI Pack - 49 EUR/luna</span>
          <span className="text-muted-foreground text-sm">(intent detection + draft messages)</span>
        </div>
        <div className="mt-4">
          <Button variant="link" asChild className="text-accent font-semibold">
            <Link to="/pricing">Vezi pricing complet</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
