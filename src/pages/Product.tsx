import { Link } from "react-router-dom";
import { Webhook, Clock, CheckCircle, ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const modules = [
  {
    icon: Webhook,
    title: "Intake",
    description: "Leadurile intra in sistem prin webhook sau email forwarding. Suportam orice sursa: Facebook Ads, Google Ads, website forms, Typeform, JotForm, etc.",
    features: [
      "Webhook universal cu JSON payload",
      "Email forwarding cu parsing automat",
      "Deduplicare pe email sau telefon",
      "Mapping flexibil de campuri",
    ],
  },
  {
    icon: Clock,
    title: "SLA Engine",
    description: "Fiecare lead primeste un deadline bazat pe reguli configurabile. Ceasul ruleaza doar pe business hours.",
    features: [
      "SLA diferite pe sursa, tip, sau valoare",
      "Business hours per echipa sau agent",
      "Reminder automat la 50% din SLA",
      "Reassign la 75%, escalare la 100%",
    ],
  },
  {
    icon: CheckCircle,
    title: "Proof",
    description: "Ceasul se opreste doar cand exista dovada verificabila de contact. Fara proof, SLA-ul ramane deschis.",
    features: [
      "WhatsApp message sent",
      "Email outbound tracked",
      "Call log integration",
      "Manual proof cu nota",
    ],
  },
];

const workflow = [
  "Lead-ul intra prin webhook sau email forwarding",
  "Pinggo aplica reguli de routing si assigneaza owner",
  "Ceasul SLA porneste (business hours only)",
  "Agent primeste notificare pe Slack/email",
  "La 50%: reminder automat",
  "La 75%: reassign catre backup",
  "La 100%: manager alert",
  "Agent contacteaza si trimite proof",
  "Clock stop. Lead marcat ca contacted.",
];

const benefits = [
  "Zero leaduri pierdute sau uitate",
  "Timp mediu de raspuns sub 30 minute",
  "Proof verificabil pentru fiecare lead",
  "Escaladare automata fara interventie manuala",
  "Rapoarte saptamanale cu KPIs",
  "Audit trail complet pentru compliance",
];

const Product = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-foreground">
            Cum functioneaza <span className="text-highlight">Pinggo</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Trei module care lucreaza impreuna pentru a garanta ca fiecare lead este contactat la timp, cu dovada verificabila.
          </p>
        </div>
      </Section>

      {/* Modules */}
      <Section alternate>
        <div className="grid gap-8 lg:grid-cols-3">
          {modules.map((module) => (
            <Card key={module.title}>
              <CardHeader>
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <module.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-5 leading-relaxed">{module.description}</p>
                <ul className="space-y-3">
                  {module.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Workflow */}
      <Section canvas>
        <SectionHeading
          title="Workflow pas cu pas"
          subtitle="De la lead nou la first contact proof"
        />
        <div className="max-w-2xl mx-auto">
          <ol className="space-y-5">
            {workflow.map((step, index) => (
              <li key={index} className="flex items-start gap-5 p-4 rounded-2xl bg-card shadow-soft border border-border/50 transition-all hover:shadow-md hover:-translate-y-0.5">
                <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">
                  {index + 1}
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-foreground font-medium">{step}</span>
                  {index < workflow.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground hidden sm:block" />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* What You Get */}
      <Section alternate>
        <SectionHeading
          title="What you get"
          subtitle="Beneficii concrete din prima zi"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-soft border border-border/50 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-foreground font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section highlightBlue>
        <div className="text-center">
          <h2 className="text-white font-extrabold mb-5">
            Incepe cu Pinggo
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Book a demo</Link>
            </Button>
            <Button size="lg" variant="outlineWhite" asChild>
              <Link to="/pricing">Vezi pricing</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Product;
