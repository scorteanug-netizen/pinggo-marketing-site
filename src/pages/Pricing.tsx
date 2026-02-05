import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Start",
    price: "149",
    leads: "300 leads/luna",
    description: "Pentru echipe mici care vor sa inceapa cu SLA tracking",
    features: {
      leads: "300",
      channels: ["Email", "Slack"],
      sla: "Basic (1 policy)",
      routing: false,
      escalation: "Basic",
      reports: "Weekly email",
      support: "Email",
    },
  },
  {
    name: "Growth",
    price: "249",
    leads: "1,000 leads/luna",
    description: "Pentru echipe in crestere cu volume mai mari",
    popular: true,
    features: {
      leads: "1,000",
      channels: ["WhatsApp", "Email", "Slack"],
      sla: "Custom (5 policies)",
      routing: "Basic",
      escalation: "Advanced",
      reports: "Weekly + dashboard",
      support: "Priority email",
    },
  },
  {
    name: "Pro",
    price: "499",
    leads: "3,000 leads/luna",
    description: "Pentru agentii si echipe enterprise",
    features: {
      leads: "3,000",
      channels: ["WhatsApp", "Email", "Slack", "Webhook"],
      sla: "Unlimited policies",
      routing: "Advanced + rules",
      escalation: "Full chain",
      reports: "Real-time + API",
      support: "Dedicated manager",
    },
  },
];

const addons = [
  {
    name: "AI Pack",
    price: "49",
    description: "Intent detection + draft message suggestions",
  },
  {
    name: "Extra leads",
    price: "0.15",
    unit: "/lead",
    description: "Peste limita planului",
  },
  {
    name: "WhatsApp Business",
    price: "29",
    description: "Conexiune directa la WhatsApp Business API",
  },
];

const setupFees = [
  {
    name: "Self-service",
    price: "0",
    description: "Setup pe cont propriu cu documentatie",
  },
  {
    name: "Assisted setup",
    price: "199",
    description: "Call de 1 ora + configurare initiala",
  },
  {
    name: "Done-for-you",
    price: "399",
    description: "Setup complet + training echipa",
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-foreground tracking-[-0.02em] leading-[1.0]">
            Pricing simplu, <span className="text-highlight">fara surprize</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-snug">
            Alege planul potrivit pentru echipa ta. Toate planurile includ 14 zile trial gratuit.
          </p>
        </div>
      </Section>

      {/* Plans */}
      <Section alternate>
        <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? "border-t-4 border-t-primary border-2 border-primary shadow-card-hover ring-1 ring-primary/20" : i === 0 ? "card-accent-orange" : i === 2 ? "card-accent-blue" : "card-accent-violet"}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Most popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pt-6">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-foreground leading-none">{plan.price}</span>
                  <span className="text-muted-foreground font-medium text-sm"> EUR/luna</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{plan.leads}</p>
                <p className="text-sm text-muted-foreground mt-1.5 leading-snug">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between py-1.5 border-b border-border-card">
                    <span className="text-muted-foreground">Leads/luna</span>
                    <span className="font-semibold">{plan.features.leads}</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-border-card">
                    <span className="text-muted-foreground">Channels</span>
                    <span className="font-semibold text-right">{plan.features.channels.join(", ")}</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-border-card">
                    <span className="text-muted-foreground">SLA policies</span>
                    <span className="font-semibold">{plan.features.sla}</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-border-card">
                    <span className="text-muted-foreground">Routing</span>
                    <span className="font-semibold">
                      {plan.features.routing ? plan.features.routing : <X className="h-4 w-4 text-muted-foreground" />}
                    </span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-border-card">
                    <span className="text-muted-foreground">Escalation</span>
                    <span className="font-semibold">{plan.features.escalation}</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-border-card">
                    <span className="text-muted-foreground">Reports</span>
                    <span className="font-semibold">{plan.features.reports}</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5">
                    <span className="text-muted-foreground">Support</span>
                    <span className="font-semibold">{plan.features.support}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-3">
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/contact">Start trial</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* Add-ons */}
      <Section canvas>
        <SectionHeading title="Add-ons" subtitle="Functionalitati extra pentru echipe avansate" />
        <div className="grid gap-5 md:grid-cols-3 max-w-4xl mx-auto">
          {addons.map((addon, i) => (
            <Card key={addon.name} className={`text-center ${i === 0 ? "card-accent-orange" : i === 1 ? "card-accent-blue" : "card-accent-violet"}`}>
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
        <SectionHeading title="Setup" subtitle="Alege nivelul de suport pentru configurare" />
        <div className="grid gap-5 md:grid-cols-3 max-w-4xl mx-auto">
          {setupFees.map((setup, i) => (
            <Card key={setup.name} className={`text-center ${i === 0 ? "card-accent-orange" : i === 1 ? "card-accent-blue" : "card-accent-violet"}`}>
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
            <Link to="/contact">Book a demo</Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Pricing;
