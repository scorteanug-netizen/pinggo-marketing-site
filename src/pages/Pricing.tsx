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
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Pricing simplu, fara surprize
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Alege planul potrivit pentru echipa ta. Toate planurile includ 14 zile trial gratuit.
          </p>
        </div>
      </Section>

      {/* Plans */}
      <Section alternate>
        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground"> EUR/luna</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.leads}</p>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Leads/luna</span>
                    <span className="font-medium">{plan.features.leads}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Channels</span>
                    <span className="font-medium text-right">{plan.features.channels.join(", ")}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">SLA policies</span>
                    <span className="font-medium">{plan.features.sla}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Routing</span>
                    <span className="font-medium">
                      {plan.features.routing ? plan.features.routing : <X className="h-4 w-4 text-muted-foreground" />}
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Escalation</span>
                    <span className="font-medium">{plan.features.escalation}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Reports</span>
                    <span className="font-medium">{plan.features.reports}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Support</span>
                    <span className="font-medium">{plan.features.support}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
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
      <Section>
        <SectionHeading title="Add-ons" subtitle="Functionalitati extra pentru echipe avansate" />
        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {addons.map((addon) => (
            <Card key={addon.name} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{addon.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-2xl font-bold text-foreground">{addon.price}</span>
                  <span className="text-muted-foreground"> EUR{addon.unit || "/luna"}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{addon.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Setup Fees */}
      <Section alternate>
        <SectionHeading title="Setup" subtitle="Alege nivelul de suport pentru configurare" />
        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {setupFees.map((setup) => (
            <Card key={setup.name} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{setup.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-2xl font-bold text-foreground">{setup.price}</span>
                  <span className="text-muted-foreground"> EUR</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{setup.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ai intrebari despre pricing?
          </h2>
          <p className="text-muted-foreground mb-6">
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
