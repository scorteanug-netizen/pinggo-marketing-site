import { Clock, CheckCircle2, Calendar } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";

const KPI_CARDS = [
  {
    icon: Clock,
    value: "0:08",
    label: "Timp mediu de răspuns",
    sublabel: "Mai rapid decât 95% din echipe",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-500",
  },
  {
    icon: CheckCircle2,
    value: "94%",
    label: "Contact rate",
    sublabel: "Fiecare lead primește răspuns",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    hoverBorder: "hover:border-violet-500",
  },
  {
    icon: Calendar,
    value: "23",
    label: "Programări săptămâna asta",
    sublabel: "Automat, fără intervenție manuală",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-500",
  },
] as const;

export function ManagerDashboardSection() {
  return (
    <section id="dashboard" className="dashboard-preview-section">
      <div className="blob-center" aria-hidden />
      <Container className="dashboard-preview-content">
        <SectionHeading
          title="Vezi exact ce se întâmplă cu fiecare lead"
          subtitle="Dashboard în timp real cu toate informațiile într-un singur loc. Știi exact cine a preluat, când, și ce s-a întâmplat."
          light
          className="mb-10 md:mb-12"
        />

        {/* Dashboard screenshot */}
        <div className="dashboard-screenshot mx-auto mt-8 max-w-5xl">
          {/* Placeholder — replace with /public/dashboard-preview.png */}
          <div className="relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="z-10 text-center">
              <div className="inline-block rounded-lg border border-slate-200 bg-white/90 p-6 backdrop-blur-sm">
                <p className="text-sm font-medium text-slate-400">
                  Dashboard Screenshot
                </p>
                <p className="mt-1 text-xs text-slate-300">
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

        {/* KPI cards */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:mt-14 lg:gap-8 sm:grid-cols-3">
          {KPI_CARDS.map((kpi) => (
            <div
              key={kpi.label}
              className={`stats-card-on-gradient ${kpi.hoverBorder}`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${kpi.iconBg}`}>
                  <kpi.icon className={`h-5 w-5 ${kpi.iconColor}`} />
                </div>
                <span className="stat-number">{kpi.value}</span>
              </div>
              <p className="stat-label">
                {kpi.label}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {kpi.sublabel}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
