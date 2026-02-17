import { Zap, MessageSquare, Calendar, AlertTriangle, Eye, BarChart3 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

const ITEMS = [
  {
    icon: Zap,
    title: "Răspuns automat în 15 secunde",
    description: "Fiecare lead primește confirmare instant pe WhatsApp, chiar dacă echipa e ocupată.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-500",
  },
  {
    icon: MessageSquare,
    title: "Conversație ghidată pe WhatsApp",
    description: "Pinggo pune 2-3 întrebări și colectează informațiile necesare automat.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    hoverBorder: "hover:border-violet-500",
  },
  {
    icon: Calendar,
    title: "Programare directă în Google Calendar",
    description: "Clientul alege slotul, Pinggo creează întâlnirea automat.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-500",
  },
  {
    icon: AlertTriangle,
    title: "Escaladare dacă nimeni nu preia",
    description: "Dacă lead-ul nu e preluat în 10 minute, Pinggo alertează managerul.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    hoverBorder: "hover:border-violet-500",
  },
  {
    icon: Eye,
    title: "Vezi exact cine a preluat și când",
    description: "Istoric complet: cine a răspuns, la ce oră, ce s-a discutat.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-500",
  },
  {
    icon: BarChart3,
    title: "Raport săptămânal: leaduri, răspunsuri, programări",
    description: "Email automat vinerea cu statistici: câte leaduri, câte răspunsuri, cât de repede.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    hoverBorder: "hover:border-violet-500",
  },
];

export function UnSingurSistemSection() {
  return (
    <Section alternate canvas>
      <SectionHeading
        title="In sfarsit, un singur sistem care nu lasa leadurile sa se piarda."
        subtitle="Răspuns instant, programare automată și escaladare. Ca să fie execuție, nu presupuneri."
      />
      <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className={`rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${item.hoverBorder}`}
          >
            <div className="pb-2">
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-3 ${item.iconBg}`}>
                <item.icon className={`h-5 w-5 ${item.iconColor}`} />
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
