import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { AccentCard } from "@/components/AccentCard";

const plans = [
  {
    name: "Pornire",
    price: "149",
    leads: "Până la 100 leaduri/lună",
    features: ["WhatsApp inclus", "Răspuns automat", "Raport săptămânal"],
    accent: "orange" as const,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-500",
    hoverShadow: "hover:shadow-[0_4px_12px_rgba(249,115,22,0.15)]",
  },
  {
    name: "Creștere",
    price: "249",
    leads: "Până la 500 leaduri/lună",
    features: ["WhatsApp + E-mail", "Escaladare automată la manager", "Rapoarte săptămânale email"],
    popular: true,
    accent: "orange" as const,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-500",
    hoverShadow: "hover:shadow-[0_4px_12px_rgba(249,115,22,0.15)]",
  },
  {
    name: "Avansat",
    price: "499",
    leads: "Până la 3,000 leaduri/lună",
    features: ["Alocare avansată + reguli", "Lanț complet de escaladare", "Manager dedicat"],
    accent: "violet" as const,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    hoverBorder: "hover:border-violet-500",
    hoverShadow: "hover:shadow-[0_4px_12px_rgba(139,92,246,0.16)]",
  },
];

export function PricingTeaserSection() {
  return (
    <Section alternate>
      <SectionHeading
        title="Pret simplu, fara surprize"
        subtitle="Toate planurile includ testare 14 zile."
      />
      <div className="grid gap-6 lg:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
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
                <span className="text-4xl font-extrabold text-foreground leading-none">{plan.price}</span>
                <span className="text-muted-foreground font-medium text-sm"> EUR/luna</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{plan.leads}</p>
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
                <Link to="/pricing">Vezi detalii</Link>
              </Button>
            </div>
          </AccentCard>
        ))}
      </div>

      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg">
          <span className="text-muted-foreground text-sm">Supliment:</span>
          <span className="font-bold text-foreground text-sm">AI Pack - 49 EUR/luna</span>
          <span className="text-muted-foreground text-sm">(conversație ghidată + programare automată)</span>
        </div>
        <div className="mt-4">
          <Button variant="link" asChild className="text-orange-500 font-semibold hover:text-orange-600">
            <Link to="/pricing">Vezi pricing complet</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
