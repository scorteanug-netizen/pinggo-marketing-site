import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/layout/Section";
import { HOME_FAQ_ITEMS } from "@/content/faqs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buildFAQSchema } from "@/lib/structuredData";

type Plan = {
  name: string;
  audience: string;
  priceLine: string;
  priceDetail?: string;
  leads: string;
  includes: string[];
  excludes?: string[];
  popular?: boolean;
};

type ComparisonRow = {
  capability: string;
  starter: string;
  pro: string;
  business: string;
  enterprise: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    audience: "Cabinet solo, agent individual, business mic. Primii pași cu AI.",
    priceLine: "€99/lună",
    priceDetail: "Anual: €79/lună — 2 luni gratuit",
    leads: "200 lead-uri AI/lună",
    includes: [
      "AI Setter complet: preia, califică cu 2-3 întrebări și execută end-state.",
      "End-state configurat: booking sau handover sau nurture, setat la onboarding.",
      "Configurare completă inclusă: Pinggo gata în 48h pe business-ul tău.",
      "Utilizatori nelimitați.",
      "Dashboard conversații cu istoricul complet al interacțiunilor AI.",
    ],
    excludes: [
      "Routing către agenți.",
      "SLA enforcement.",
      "Escaladare automată.",
      "Rapoarte operaționale.",
      "Status lead după handover.",
    ],
  },
  {
    name: "Pro",
    audience: "Clinici, agenții imobiliare, companii solar cu echipă activă de vânzări.",
    priceLine: "€199/lună",
    priceDetail: "Anual: €159/lună — 2 luni gratuit",
    leads: "500 lead-uri AI/lună",
    popular: true,
    includes: [
      "Tot din Starter.",
      "Routing automat: lead-ul ajunge la agentul potrivit după reguli configurate.",
      "SLA enforcement: dacă agentul nu preia în X minute, alertă imediată.",
      "Escaladare automată 1 nivel: agent către manager dacă SLA e depășit.",
      "Status lead per agent: contactat, ofertă trimisă, câștigat, pierdut, reprogramat.",
      "Raport săptămânal automat: timp de răspuns, lead-uri fără răspuns, performanță echipă.",
      "Flow builder cu template-uri preconfigurate per nișă (dental, imobiliare, solar).",
    ],
  },
  {
    name: "Business",
    audience: "Operațiuni mari, multiple locații, volum ridicat de lead-uri.",
    priceLine: "€399/lună",
    priceDetail: "Anual: €319/lună — 2 luni gratuit",
    leads: "2000 lead-uri AI/lună",
    includes: [
      "Tot din Pro.",
      "Routing avansat cu reguli custom: locație, tip lead, disponibilitate agent, scoring.",
      "SLA custom per tip lead.",
      "Escaladare multi-nivel: agent către manager către director.",
      "Analytics detaliate per agent: timp mediu răspuns, rata de conversie, lead-uri gestionate.",
      "Flow builder avansat: fluxuri custom, condiționale, A/B testing pe mesaje.",
      "API access și webhooks pentru integrare cu CRM existent.",
    ],
  },
  {
    name: "Enterprise",
    audience: "Agenții de marketing, francize, multi-locație (5+ sedii), white-label.",
    priceLine: "Preț personalizat",
    priceDetail: "de la €799/lună",
    leads: "Lead-uri AI nelimitate",
    includes: [
      "Tot din Business.",
      "Lead-uri nelimitate.",
      "Multi-workspace.",
      "White-label.",
      "CSM dedicat.",
      "SLA garantat pentru suport.",
    ],
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    capability: "Lead-uri AI/lună",
    starter: "200",
    pro: "500",
    business: "2000",
    enterprise: "Nelimitat",
  },
  {
    capability: "Utilizatori",
    starter: "Nelimitat",
    pro: "Nelimitat",
    business: "Nelimitat",
    enterprise: "Nelimitat",
  },
  {
    capability: "Configurare inclusă",
    starter: "Da",
    pro: "Da",
    business: "Da",
    enterprise: "Da",
  },
  {
    capability: "AI Setter (preia + califică)",
    starter: "Da",
    pro: "Da",
    business: "Da",
    enterprise: "Da",
  },
  {
    capability: "End-state configurat (booking / handover / nurture)",
    starter: "Da",
    pro: "Da",
    business: "Da",
    enterprise: "Da",
  },
  {
    capability: "Routing către agenți",
    starter: "Nu",
    pro: "Basic",
    business: "Avansat",
    enterprise: "Custom",
  },
  {
    capability: "SLA enforcement",
    starter: "Nu",
    pro: "Standard",
    business: "Custom / tip lead",
    enterprise: "Custom",
  },
  {
    capability: "Escaladare automată",
    starter: "Nu",
    pro: "1 nivel",
    business: "Multi-nivel",
    enterprise: "Custom",
  },
  {
    capability: "Status lead per agent",
    starter: "Nu",
    pro: "Da",
    business: "Da",
    enterprise: "Da",
  },
  {
    capability: "Rapoarte operaționale",
    starter: "Nu",
    pro: "Săptămânal",
    business: "Avansate",
    enterprise: "Custom",
  },
  {
    capability: "Flow builder",
    starter: "Nu",
    pro: "Template-uri",
    business: "Custom + A/B",
    enterprise: "Full",
  },
  {
    capability: "API + webhooks",
    starter: "Nu",
    pro: "Nu",
    business: "Da",
    enterprise: "Da",
  },
  {
    capability: "White-label / multi-workspace",
    starter: "Nu",
    pro: "Nu",
    business: "Nu",
    enterprise: "Da",
  },
];

const Pricing = () => {
  return (
    <Layout>
      <SEOHead
        title="Prețuri Pinggo"
        description="Planurile Pinggo pentru România: Starter, Pro, Business și Enterprise, plus tabel comparativ complet."
        path="/pricing"
        structuredData={buildFAQSchema(HOME_FAQ_ITEMS)}
      />

      {/* Plans */}
      <Section alternate>
        <div className="grid gap-8 xl:grid-cols-4 md:grid-cols-2 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Cel mai popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-extrabold text-foreground leading-none">{plan.priceLine}</span>
                </div>
                {plan.priceDetail && <p className="text-xs text-muted-foreground mt-1">{plan.priceDetail}</p>}
                <p className="text-sm font-semibold text-foreground mt-4">{plan.leads}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-snug">{plan.audience}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Ce include</p>
                <ul className="space-y-2 text-sm mt-3">
                  {plan.includes.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 text-orange-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.excludes && plan.excludes.length > 0 && (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mt-5">Nu include</p>
                    <ul className="space-y-2 text-sm mt-3">
                      {plan.excludes.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                          <X className="h-4 w-4 mt-0.5 text-slate-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/contact">{plan.name === "Enterprise" ? "Discută cu sales" : "Solicită demo"}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section canvas>
        <div className="max-w-7xl mx-auto rounded-xl border border-gray-200 bg-white shadow-sm overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="bg-secondary">
              <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:text-left [&>th]:font-semibold">
                <th>Capabilitate</th>
                <th>Starter €99</th>
                <th>Pro €199</th>
                <th>Business €399</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.capability} className="border-t border-gray-100 [&>td]:px-4 [&>td]:py-3">
                  <td className="font-medium">{row.capability}</td>
                  <td>{row.starter}</td>
                  <td>{row.pro}</td>
                  <td>{row.business}</td>
                  <td>{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </Layout>
  );
};

export default Pricing;
