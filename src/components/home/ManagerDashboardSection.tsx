import { Clock, CheckCircle2, Calendar } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { cn } from "@/lib/utils";

const KPI_CARDS = [
  {
    icon: Clock,
    value: "0:08",
    label: "Timp mediu de răspuns",
    sublabel: "Mai rapid decât 95% din echipe",
    accent: "border-t-orange-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: CheckCircle2,
    value: "94%",
    label: "Contact rate",
    sublabel: "Fiecare lead primește răspuns",
    accent: "border-t-blue-500",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Calendar,
    value: "23",
    label: "Programări săptămâna asta",
    sublabel: "Automat, fără intervenție manuală",
    accent: "border-t-violet-500",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
] as const;

export function ManagerDashboardSection() {
  return (
    <Section alternate canvas id="dashboard">
      <SectionHeading
        title="Vezi exact ce se întâmplă cu fiecare lead"
        subtitle="Dashboard în timp real cu toate informațiile într-un singur loc. Știi exact cine a preluat, când, și ce s-a întâmplat."
      />

      {/* Dashboard screenshot */}
      <div className="mt-16 relative">
        <div className="relative rounded-2xl border-2 border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.08)] overflow-hidden bg-white">
          {/* Placeholder — replace with /public/dashboard-preview.png */}
          <div className="aspect-[16/9] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center relative">
            <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500/5 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/5 blur-3xl rounded-full" />

            <div className="text-center z-10">
              <div className="inline-block p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200">
                <p className="text-slate-400 text-sm font-medium">
                  Dashboard Screenshot
                </p>
                <p className="text-slate-300 text-xs mt-1">
                  Înlocuiește cu /public/dashboard-preview.png
                </p>
              </div>
            </div>
          </div>

          {/* UNCOMMENT when you have the real screenshot:
          <img
            src="/dashboard-preview.png"
            alt="Pinggo Dashboard — vizualizare leads în timp real"
            className="w-full h-auto block"
            loading="lazy"
          />
          */}
        </div>
      </div>

      {/* KPI cards */}
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {KPI_CARDS.map((kpi) => (
          <div
            key={kpi.label}
            className={cn(
              "rounded-2xl bg-white border-2 border-slate-200 p-6",
              "shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_8px_28px_rgba(15,23,42,0.1)]",
              "transition-all duration-300 hover:-translate-y-0.5",
              "border-t-4",
              kpi.accent
            )}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center", kpi.iconBg)}>
                <kpi.icon className={cn("h-5 w-5", kpi.iconColor)} />
              </div>
              <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {kpi.value}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-900 mb-1">
              {kpi.label}
            </p>
            <p className="text-xs text-slate-400">
              {kpi.sublabel}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
