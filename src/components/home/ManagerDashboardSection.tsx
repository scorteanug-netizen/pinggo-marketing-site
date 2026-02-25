import { Clock, CheckCircle2, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";

const KPI_CARDS = [
  {
    icon: Clock,
    value: "0:08",
    label: "Timp mediu de răspuns",
    sublabel: "vs. 4h media echipelor fără Pinggo",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-500",
  },
  {
    icon: CheckCircle2,
    value: "94%",
    label: "Contact rate",
    sublabel: "vs. 31% medie industrie*",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    hoverBorder: "hover:border-violet-500",
  },
  {
    icon: TrendingUp,
    value: "3.2×",
    label: "Programări față de manual",
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

        {/* Dashboard mockup */}
        <div className="dashboard-screenshot mx-auto mt-8 max-w-5xl">
          <iframe
            src="/pinggo-dashboard-mockup.html"
            title="Pinggo Dashboard Preview"
            className="w-full block border-0"
            style={{ height: "560px", pointerEvents: "none" }}
            scrolling="no"
            tabIndex={-1}
            aria-hidden
          />
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
              <p className="mt-1 text-xs font-semibold text-green-600">
                {kpi.sublabel}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          *conform Harvard Business Review — "The short life of online sales leads"
        </p>
      </Container>
    </section>
  );
}
