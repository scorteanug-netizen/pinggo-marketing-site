import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
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

const coreRules = [
  "Singurul gate real între planuri: număr de lead-uri procesate lunar + acces la Control Tower.",
  "Utilizatori nelimitați la toate planurile. Onboarding-ul este făcut de Pinggo, nu există limitare pe seats.",
  "Clientul conectează propriul număr WhatsApp prin Meta Direct. Numărul de numere reflectă dimensiunea business-ului, nu planul.",
];

const autopilotModes = [
  {
    title: "Booking",
    description: "Clinici dentare, saloane, educație: programare directă în calendar.",
  },
  {
    title: "Handover",
    description: "Solar, imobiliare: lead calificat trimis agentului cu context complet.",
  },
  {
    title: "Nurture",
    description: "Lead valid dar nu e gata: marcat, urmărit și recontactat automat.",
  },
];

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
        title="Strategia de Pricing Pinggo v2.0"
        description="Planuri simple pentru România: Starter, Pro, Business, Enterprise. Diferența reală: lead-uri procesate lunar și capabilități Control Tower."
        path="/pricing"
        structuredData={buildFAQSchema(HOME_FAQ_ITEMS)}
      />
      {/* Hero */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-foreground tracking-[-0.02em] leading-[1.0]">
            Strategia de pricing Pinggo, <span className="text-orange-500 font-extrabold">v2.0</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-snug">
            Model flat monthly pentru piața din România. Diferența între planuri este clară: volum lunar de lead-uri și accesul la capabilitățile Control Tower.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <span className="rounded-full border border-gray-200 px-3 py-1">Flat Monthly</span>
            <span className="rounded-full border border-gray-200 px-3 py-1">România</span>
            <span className="rounded-full border border-gray-200 px-3 py-1">Martie 2026</span>
          </div>
        </div>
      </Section>

      {/* Core Logic */}
      <Section canvas>
        <SectionHeading
          title="Logica de bază a planurilor"
          subtitle="Aceeași fundație AI în toate planurile. Deblochezi capabilități operaționale pe măsură ce crește volumul."
        />
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Ce rămâne fix în toate planurile</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                {coreRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-orange-500 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Autopilotul execută end-state-ul configurat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Flux standard: preia lead-ul, îl califică și îl duce în următorul pas setat la onboarding.</p>
              <ul className="space-y-3 text-sm">
                {autopilotModes.map((mode) => (
                  <li key={mode.title}>
                    <span className="font-semibold text-foreground">{mode.title}</span>
                    <span className="text-muted-foreground">: {mode.description}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Plans */}
      <Section alternate>
        <SectionHeading
          title="Planurile Pinggo"
          subtitle="Fără limită la utilizatori. Fără gating pe numere WhatsApp. Alegi planul după volumul lunar de lead-uri și nivelul de control operațional."
        />
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
        <SectionHeading
          title="Comparație rapidă"
          subtitle="Ce deblochează fiecare plan pe măsură ce scalezi operațiunea."
        />
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

      {/* CTA */}
      <Section highlightBlue>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white font-extrabold mb-3 leading-[1.05]">
            Vrei să validăm planul potrivit pentru echipa ta?
          </h2>
          <p className="text-white/80 mb-6 text-base leading-snug">
            Îți recomandăm planul în funcție de volumul actual de lead-uri și fluxul de lucru dorit: booking, handover sau nurture.
          </p>
          <Button size="lg" variant="outlineWhite" asChild>
            <Link to="/contact">Programează un demo</Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Pricing;
