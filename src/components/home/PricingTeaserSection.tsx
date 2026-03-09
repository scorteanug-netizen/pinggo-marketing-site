import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { AccentCard } from "@/components/AccentCard";

const plans = [
  {
    name: "Starter",
    price: "€99/lună",
    leads: "200 lead-uri AI/lună",
    features: ["AI Setter complet", "Onboarding complet în 48h", "Utilizatori nelimitați"],
    accent: "orange" as const,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-500",
    hoverShadow: "hover:shadow-[0_4px_12px_rgba(249,115,22,0.15)]",
  },
  {
    name: "Pro",
    price: "€199/lună",
    leads: "500 lead-uri AI/lună",
    features: ["Routing automat", "SLA enforcement", "Escaladare 1 nivel"],
    popular: true,
    accent: "orange" as const,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-500",
    hoverShadow: "hover:shadow-[0_4px_12px_rgba(249,115,22,0.15)]",
  },
  {
    name: "Business",
    price: "€399/lună",
    leads: "2000 lead-uri AI/lună",
    features: ["Routing avansat", "Escaladare multi-nivel", "API + webhooks"],
    accent: "violet" as const,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    hoverBorder: "hover:border-violet-500",
    hoverShadow: "hover:shadow-[0_4px_12px_rgba(139,92,246,0.16)]",
  },
  {
    name: "Enterprise",
    price: "Preț personalizat",
    leads: "de la €799/lună",
    features: ["Lead-uri nelimitate", "Multi-workspace", "White-label + CSM dedicat"],
    accent: "blue" as const,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    hoverBorder: "hover:border-sky-500",
    hoverShadow: "hover:shadow-[0_4px_12px_rgba(14,165,233,0.16)]",
  },
];

export function PricingTeaserSection() {
  return (
    <Section alternate>
      <SectionHeading
        title="Alege planul potrivit echipei tale"
        subtitle="Model flat monthly pentru România. Utilizatori nelimitați în toate planurile."
      />
      <div className="grid gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <AccentCard
            key={plan.name}
            accent={plan.accent}
            variant="top"
            className={`relative ${plan.hoverBorder} ${plan.hoverShadow}`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Popular
                </span>
              </div>
            )}
            <div className="text-center pb-2 pt-8">
              <h3 className="text-xl font-extrabold leading-tight tracking-tight text-foreground">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-3xl font-extrabold text-foreground leading-none">{plan.price}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 font-medium">{plan.leads}</p>
            </div>
            <ul className="space-y-3 pt-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className={`h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.iconBg}`}>
                    <Check className={`h-2.5 w-2.5 ${plan.iconColor}`} />
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
                <Link to="/preturi">Vezi detalii</Link>
              </Button>
            </div>
          </AccentCard>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">Starter, Pro și Business au opțiune anuală cu 2 luni gratuite.</p>
        <div className="mt-4">
          <Button variant="link" asChild className="text-orange-500 font-semibold hover:text-orange-600">
            <Link to="/preturi">Vezi pricing complet</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
