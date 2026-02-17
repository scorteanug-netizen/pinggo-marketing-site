import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Pornire",
    price: "149",
    leads: "Până la 100 leaduri/lună",
    description: "Pentru echipe mici care vor răspuns automat din prima zi",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-500",
    hoverShadow: "hover:shadow-[0_4px_12px_rgba(249,115,22,0.15)]",
    features: {
      leads: "100",
      channels: ["WhatsApp", "E-mail", "Slack"],
      sla: "Reguli de răspuns (1 regulă)",
      routing: "Răspuns automat inclus",
      escalation: "Simplu",
      reports: "Raport săptămânal pe e-mail",
      support: "E-mail",
    },
  },
  {
    name: "Creștere",
    price: "249",
    leads: "Până la 500 leaduri/lună",
    description: "Pentru echipe în creștere cu volume mai mari",
    popular: true,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-500",
    hoverShadow: "hover:shadow-[0_4px_12px_rgba(249,115,22,0.15)]",
    features: {
      leads: "500",
      channels: ["WhatsApp", "E-mail", "Slack"],
      sla: "Reguli personalizate (5 reguli)",
      routing: "Alocare automată echipei",
      escalation: "Escaladare automată la manager",
      reports: "Rapoarte săptămânale email + dashboard",
      support: "E-mail prioritar",
    },
  },
  {
    name: "Avansat",
    price: "499",
    leads: "Până la 3,000 leaduri/lună",
    description: "Pentru agenții și echipe mari",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    hoverBorder: "hover:border-violet-500",
    hoverShadow: "hover:shadow-[0_4px_12px_rgba(139,92,246,0.16)]",
    features: {
      leads: "3,000",
      channels: ["WhatsApp", "E-mail", "Slack", "Webhook"],
      sla: "Reguli nelimitate",
      routing: "Avansat + reguli custom",
      escalation: "Lanț complet de escaladare",
      reports: "În timp real + API",
      support: "Manager dedicat",
    },
  },
];

const addons = [
  {
    name: "AI Pack",
    price: "49",
    description: "Conversație ghidată + programare automată în calendar",
  },
  {
    name: "Leaduri extra",
    price: "0.15",
    unit: "/lead",
    description: "Peste limita planului",
  },
];

const setupFees = [
  {
    name: "Setup inclus",
    price: "0",
    description: "Configurare de bază inclusă gratuit în toate planurile",
  },
  {
    name: "Asistat",
    price: "199",
    description: "Apel 1 oră + configurare inițială",
  },
  {
    name: "Complet",
    price: "399",
    description: "Configurare completă + training echipă",
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-foreground tracking-[-0.02em] leading-[1.0]">
            Pricing simplu, <span className="text-orange-500 font-extrabold">fara surprize</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-snug">
            Alege planul potrivit pentru echipa ta. Toate planurile includ 14 zile testare gratuita.
          </p>
        </div>
      </Section>

      {/* Plans */}
      <Section alternate>
        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.hoverBorder} ${plan.hoverShadow}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <div className={`mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${plan.iconBg}`}>
                  <Check className={`h-5 w-5 ${plan.iconColor}`} />
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-foreground leading-none">{plan.price}</span>
                  <span className="text-muted-foreground font-medium text-sm"> EUR/luna</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{plan.leads}</p>
                <p className="text-sm text-muted-foreground mt-1.5 leading-snug">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between py-1.5 border-b border-border-card">
                    <span className="text-muted-foreground">Leaduri/luna</span>
                    <span className="font-semibold">{plan.features.leads}</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-border-card">
                    <span className="text-muted-foreground">Canale</span>
                    <span className="font-semibold text-right">{plan.features.channels.join(", ")}</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-border-card">
                    <span className="text-muted-foreground">Reguli de răspuns</span>
                    <span className="font-semibold">{plan.features.sla}</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-border-card">
                    <span className="text-muted-foreground">Alocare automată</span>
                    <span className="font-semibold">
                      {plan.features.routing ? plan.features.routing : <X className="h-4 w-4 text-muted-foreground" />}
                    </span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-border-card">
                    <span className="text-muted-foreground">Escaladare</span>
                    <span className="font-semibold">{plan.features.escalation}</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-border-card">
                    <span className="text-muted-foreground">Rapoarte</span>
                    <span className="font-semibold">{plan.features.reports}</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5">
                    <span className="text-muted-foreground">Suport</span>
                    <span className="font-semibold">{plan.features.support}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/contact">Incepe testarea</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* Add-ons */}
      <Section canvas>
        <SectionHeading title="Suplimente" subtitle="Functionalitati extra pentru echipe avansate" />
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          {addons.map((addon) => (
            <Card key={addon.name} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{addon.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-2xl font-extrabold text-foreground leading-none">{addon.price}</span>
                  <span className="text-muted-foreground font-medium text-sm"> EUR{addon.unit || "/luna"}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-snug">{addon.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Setup Fees */}
      <Section alternate>
        <SectionHeading title="Configurare" subtitle="Alege nivelul de suport pentru configurare" />
        <div className="grid gap-6 lg:gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {setupFees.map((setup) => (
            <Card key={setup.name} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{setup.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-2xl font-extrabold text-foreground leading-none">{setup.price}</span>
                  <span className="text-muted-foreground font-medium text-sm"> EUR</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-snug">{setup.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section highlightBlue>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white font-extrabold mb-3 leading-[1.05]">
            Ai intrebari despre pricing?
          </h2>
          <p className="text-white/80 mb-6 text-base leading-snug">
            Discuta cu echipa noastra pentru a gasi planul potrivit.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Solicita demo</Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Pricing;
