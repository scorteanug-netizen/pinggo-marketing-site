import { Link } from "react-router-dom";
import { Webhook, Clock, CheckCircle, ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { HOME_FAQ_ITEMS } from "@/content/faqs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildFAQSchema } from "@/lib/structuredData";

const modules = [
  {
    icon: Webhook,
    title: "Intake",
    description: "Leadurile intră în sistem prin webhook sau email forwarding. Suportăm orice sursă: Facebook Ads, Google Ads, website forms, Typeform, JotForm, etc.",
    features: [
      "Webhook universal cu JSON payload",
      "Email forwarding cu parsing automat",
      "Deduplicare pe email sau telefon",
      "Mapping flexibil de câmpuri",
    ],
  },
  {
    icon: Clock,
    title: "Reguli de răspuns",
    description: "Fiecare lead primește un termen de răspuns bazat pe reguli configurabile. Ceasul rulează doar pe ore de lucru.",
    features: [
      "Termene diferite pe sursă, tip, sau valoare",
      "Ore de lucru per echipă sau agent",
      "Reminder automat la 50% din termen",
      "Reasignare la 75%, escaladare la 100%",
    ],
  },
  {
    icon: CheckCircle,
    title: "Confirmare contact",
    description: "Ceasul se oprește doar când există dovadă de contact. Fără confirmare, termenul rămâne deschis.",
    features: [
      "Mesaj WhatsApp trimis",
      "Email outbound tracked",
      "Integrare call log",
      "Confirmare manuală cu notă",
    ],
  },
];

const workflow = [
  "Lead-ul intră prin webhook sau email forwarding",
  "Pinggo aplică reguli de alocare și asignează responsabil",
  "Termenul de răspuns pornește (doar ore de lucru)",
  "Agentul primește notificare pe Slack/email",
  "La 50%: reminder automat",
  "La 75%: reasignare către backup",
  "La 100%: alertă manager",
  "Agentul contactează și trimite confirmare",
  "Termen închis. Lead marcat ca contactat.",
];

const benefits = [
  "Zero leaduri pierdute sau uitate",
  "Timp mediu de răspuns sub 30 minute",
  "Dovadă de contact pentru fiecare lead",
  "Escaladare automată fără intervenție manuală",
  "Rapoarte săptămânale cu statistici",
  "Istoric complet pentru fiecare lead",
];

const Product = () => {
  return (
    <Layout>
      <SEOHead
        title="Controlezi fiecare lead într-un singur sistem"
        description="Descoperă modulele Pinggo pentru intake, reguli de răspuns și confirmare contact, astfel încât niciun lead să nu fie pierdut."
        path="/product"
        structuredData={buildFAQSchema(HOME_FAQ_ITEMS)}
      />
      {/* Hero */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-foreground">
            Cum functioneaza <span className="text-highlight">Pinggo</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Trei module care lucrează împreună pentru a garanta că fiecare lead este contactat la timp, cu dovadă de contact.
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
          subtitle="De la lead nou la confirmare contact"
        />
        <div className="max-w-2xl mx-auto">
          <ol className="space-y-5">
            {workflow.map((step, index) => (
              <li key={index} className="flex items-start gap-5 rounded-2xl border border-border/50 bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
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
        <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card p-6 md:p-8 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
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
              <Link to="/contact">Solicita demo</Link>
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
