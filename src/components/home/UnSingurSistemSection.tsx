import { Zap, MessageSquare, Calendar, AlertTriangle, Eye, BarChart3 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { cn } from "@/lib/utils";

const BORDER_COLORS = [
  "border-t-2 border-t-orange-500",
  "border-t-2 border-t-blue-500",
  "border-t-2 border-t-violet-500",
  "border-t-2 border-t-teal-500",
  "border-t-2 border-t-orange-500",
  "border-t-2 border-t-blue-500",
] as const;

const ITEMS = [
  {
    icon: Zap,
    title: "Răspuns automat în 15 secunde",
    description: "Fiecare lead primește confirmare instant pe WhatsApp, chiar dacă echipa e ocupată.",
  },
  {
    icon: MessageSquare,
    title: "Conversație ghidată pe WhatsApp",
    description: "Pinggo pune 2-3 întrebări și colectează informațiile necesare automat.",
  },
  {
    icon: Calendar,
    title: "Programare directă în Google Calendar",
    description: "Clientul alege slotul, Pinggo creează întâlnirea automat.",
  },
  {
    icon: AlertTriangle,
    title: "Escaladare dacă nimeni nu preia",
    description: "Dacă lead-ul nu e preluat în 10 minute, Pinggo alertează managerul.",
  },
  {
    icon: Eye,
    title: "Vezi exact cine a preluat și când",
    description: "Istoric complet: cine a răspuns, la ce oră, ce s-a discutat.",
  },
  {
    icon: BarChart3,
    title: "Raport săptămânal: leaduri, răspunsuri, programări",
    description: "Email automat vinerea cu statistici: câte leaduri, câte răspunsuri, cât de repede.",
  },
];

export function UnSingurSistemSection() {
  return (
    <Section alternate canvas>
      <SectionHeading
        title="In sfarsit, un singur sistem care nu lasa leadurile sa se piarda."
        subtitle="Răspuns instant, programare automată și escaladare. Ca să fie execuție, nu presupuneri."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <div
            key={item.title}
            className={cn(
              "rounded-2xl bg-white border-2 border-slate-200 p-5",
              "shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_12px_40px_-8px_rgba(15,23,42,0.12)]",
              "transition-all duration-300 hover:-translate-y-0.5",
              BORDER_COLORS[i]
            )}
          >
            <div className="pb-2">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-extrabold leading-tight tracking-tight text-slate-900">
                {item.title}
              </h3>
            </div>
            <p className="text-slate-600 text-sm leading-snug">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
