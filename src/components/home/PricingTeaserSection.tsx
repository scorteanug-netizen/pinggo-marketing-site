import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { AccentCard } from "@/components/AccentCard";

const plans = [
  {
    name: "Start",
    price: "149",
    leads: "300 leads/luna",
    features: ["Email", "Slack notifications", "Basic SLA"],
    accent: "orange" as const,
  },
  {
    name: "Growth",
    price: "249",
    leads: "1,000 leads/luna",
    features: ["WhatsApp", "Email", "Slack", "Custom SLA"],
    popular: true,
    accent: "orange" as const,
  },
  {
    name: "Pro",
    price: "499",
    leads: "3,000 leads/luna",
    features: ["Routing avansat", "Escalation chains", "Priority support"],
    accent: "blue" as const,
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
          <AccentCard
            key={plan.name}
            accent={plan.accent}
            variant="top"
            className={`relative ${plan.popular ? "ring-2 ring-primary/30 border-primary/30" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Popular
                </span>
              </div>
            )}
            <div className="text-center pb-2 pt-6">
              <h3 className="text-xl font-extrabold leading-tight tracking-tight text-foreground">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-foreground leading-none">{plan.price}</span>
                <span className="text-muted-foreground font-medium text-sm"> EUR/luna</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{plan.leads}</p>
            </div>
            <ul className="space-y-3 pt-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-2.5 w-2.5 text-primary" />
                  </div>
                  <span className="font-medium text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <Link to="/pricing">Vezi detalii</Link>
              </Button>
            </div>
          </AccentCard>
        ))}
      </div>

      {/* Add-on */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white rounded-2xl px-5 py-3 shadow-lg border border-slate-200">
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
