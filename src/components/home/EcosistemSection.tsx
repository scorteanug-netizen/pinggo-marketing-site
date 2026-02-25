import { Link } from "react-router-dom";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

const integrations = [
  {
    name: "HubSpot",
    logo: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.5 19.8V14.4a4.2 4.2 0 1 0-3.6 0v5.4a11.9 11.9 0 0 0-5.5 3.1L20.8 14a6 6 0 1 0-2.2 2.8l13.3 8.8a11.9 11.9 0 0 0 0 8.8L18.6 43.2a6 6 0 1 0 2.2 2.8l13.3-8.8a11.9 11.9 0 1 0 9.4-17.4zm-2 20.4a8.3 8.3 0 1 1 0-16.6 8.3 8.3 0 0 1 0 16.6z" fill="#FF7A59"/>
      </svg>
    ),
  },
  {
    name: "Pipedrive",
    logo: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 6C16.7 6 6 16.7 6 30s10.7 24 24 24 24-10.7 24-24S43.3 6 30 6zm0 10.5c5.2 0 9.5 4.3 9.5 9.5S35.2 35.5 30 35.5a9.5 9.5 0 0 1 0-19zM30 48c-5.8 0-10.9-2.6-14.4-6.8 1.8-4.6 6.2-7.8 11.4-8.1.9.2 1.9.4 3 .4 1.1 0 2.1-.1 3-.4 5.2.3 9.6 3.5 11.4 8.1C40.9 45.4 35.8 48 30 48z" fill="#1A9244"/>
      </svg>
    ),
  },
  {
    name: "Zoho CRM",
    logo: (
      <svg viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 4h18.5L6.2 20.5H18.5V24H0V20.5l12-16.5H0V4zM22 14c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10S22 19.5 22 14zm16 0c0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6 6-2.7 6-6zM44 4h4v10l8-10h5L53 13l8 11h-5L50 15l-2 2.5V24h-4V4zM63 4h12c2.8 0 5 2.2 5 5v.5c0 1.8-.9 3.3-2.2 4.2 1.5.8 2.5 2.4 2.5 4.3V18c0 3.3-2.7 6-6 6H63V4zm4 8h7.5c1.1 0 2-.9 2-2s-.9-2-2-2H67v4zm0 8h8c1.1 0 2-.9 2-2s-.9-2-2-2h-8v4z" fill="#E42527"/>
      </svg>
    ),
  },
  {
    name: "ActiveCampaign",
    logo: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 30L24 12l6 6-12 12 12 12-6 6L6 30z" fill="#356AE6"/>
        <path d="M20 30l14-14 6 6-8 8 8 8-6 6L20 30z" fill="#356AE6" opacity=".6"/>
        <path d="M34 30l10-10 6 6-4 4 4 4-6 6L34 30z" fill="#356AE6" opacity=".3"/>
      </svg>
    ),
  },
  {
    name: "Google Calendar",
    logo: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="44" height="40" rx="4" fill="#4285F4"/>
        <rect x="8" y="22" width="44" height="30" rx="2" fill="white"/>
        <rect x="8" y="12" width="44" height="14" rx="4" fill="#4285F4"/>
        <rect x="8" y="20" width="44" height="6" fill="#4285F4"/>
        <text x="30" y="44" fontSize="14" fontWeight="800" fill="#1A73E8" textAnchor="middle" fontFamily="sans-serif">17</text>
        <line x1="19" y1="8" x2="19" y2="17" stroke="#4285F4" strokeWidth="3" strokeLinecap="round"/>
        <line x1="41" y1="8" x2="41" y2="17" stroke="#4285F4" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    logo: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M30 6C16.7 6 6 16.7 6 30c0 4.2 1.1 8.2 3.1 11.6L6 54l12.7-3.3A23.9 23.9 0 0 0 30 54c13.3 0 24-10.7 24-24S43.3 6 30 6zm0 44c-3.7 0-7.2-1-10.2-2.7l-.7-.4-7.5 2 2-7.3-.5-.8A20 20 0 0 1 10 30c0-11 9-20 20-20s20 9 20 20-9 20-20 20zm11-15.1c-.6-.3-3.5-1.7-4-1.9-.6-.2-1-.3-1.4.3-.4.6-1.6 1.9-2 2.3-.3.4-.7.5-1.3.2-.6-.3-2.5-.9-4.8-2.9-1.8-1.6-3-3.5-3.3-4.1-.3-.6 0-.9.3-1.2.3-.3.6-.7.9-1.1.3-.4.4-.6.6-1 .2-.4.1-.7 0-1-.2-.3-1.4-3.4-1.9-4.6-.5-1.2-1-1-1.4-1h-1.2c-.4 0-1 .1-1.6.8-.5.6-2 2-2 4.8 0 2.8 2.1 5.6 2.4 5.9.3.4 4.1 6.3 10 8.8 1.4.6 2.5 1 3.3 1.2 1.4.4 2.7.4 3.7.2 1.1-.2 3.5-1.4 4-2.8.5-1.4.5-2.5.3-2.8-.1-.2-.5-.4-1.1-.6z" fill="#25D366"/>
      </svg>
    ),
  },
  {
    name: "Slack",
    logo: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 36a4.5 4.5 0 0 1-4.5-4.5A4.5 4.5 0 0 1 13.5 27H18v4.5A4.5 4.5 0 0 1 13.5 36z" fill="#E01E5A"/>
        <path d="M27 13.5A4.5 4.5 0 0 1 31.5 9 4.5 4.5 0 0 1 36 13.5V18h-4.5A4.5 4.5 0 0 1 27 13.5z" fill="#36C5F0"/>
        <path d="M9 27a4.5 4.5 0 0 1 4.5-4.5H18V27h-4.5A4.5 4.5 0 0 1 9 27z" fill="#E01E5A" opacity=".7"/>
        <path d="M31.5 9A4.5 4.5 0 0 1 36 13.5V18h-4.5A4.5 4.5 0 0 1 27 13.5 4.5 4.5 0 0 1 31.5 9z" fill="#36C5F0" opacity=".7"/>
        <path d="M46.5 27a4.5 4.5 0 0 1 4.5 4.5 4.5 4.5 0 0 1-4.5 4.5H42v-4.5A4.5 4.5 0 0 1 46.5 27z" fill="#2EB67D"/>
        <path d="M33 46.5A4.5 4.5 0 0 1 28.5 51 4.5 4.5 0 0 1 24 46.5V42h4.5A4.5 4.5 0 0 1 33 46.5z" fill="#ECB22E"/>
        <path d="M42 31.5A4.5 4.5 0 0 1 46.5 27H51v4.5a4.5 4.5 0 0 1-4.5 4.5H42v-4.5z" fill="#2EB67D" opacity=".7"/>
        <path d="M28.5 51A4.5 4.5 0 0 1 24 46.5V42h4.5a4.5 4.5 0 0 1 4.5 4.5A4.5 4.5 0 0 1 28.5 51z" fill="#ECB22E" opacity=".7"/>
        <rect x="18" y="18" width="13.5" height="13.5" rx="1" fill="#36C5F0"/>
        <rect x="28.5" y="18" width="13.5" height="13.5" rx="1" fill="#2EB67D"/>
        <rect x="18" y="28.5" width="13.5" height="13.5" rx="1" fill="#E01E5A"/>
        <rect x="28.5" y="28.5" width="13.5" height="13.5" rx="1" fill="#ECB22E"/>
      </svg>
    ),
  },
  {
    name: "Webhook",
    logo: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 38h-8a10 10 0 1 1 0-20h2M38 22h8a10 10 0 1 1 0 20h-2" stroke="#6366F1" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M22 30a8 8 0 1 0 16 0 8 8 0 0 0-16 0z" stroke="#6366F1" strokeWidth="3.5"/>
        <circle cx="30" cy="30" r="3" fill="#6366F1"/>
      </svg>
    ),
  },
] as const;

export function EcosistemSection() {
  return (
    <Section canvas secondary>
      <SectionHeading
        title="Se integrează cu stack-ul tău existent"
        subtitle="Nu înlocuiește CRM-ul — se conectează cu el."
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {integrations.map(({ name, logo }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-5 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-lg"
            style={{ minHeight: 110 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#F56E0F";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 3px rgba(245,110,15,.08), 0 8px 24px rgba(0,0,0,.08)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "";
            }}
          >
            <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-green-700">
              Integrat
            </span>
            <div style={{ height: 32, width: "auto", display: "flex", alignItems: "center" }}>
              <div style={{ height: 32, width: 32 }}>
                {logo}
              </div>
            </div>
            <span className="text-sm font-bold text-slate-800 text-center leading-tight">
              {name}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">
        Toate integrările sunt configurate de client prin ghid pas cu pas.
      </p>

      <div className="mt-3 text-center">
        <Link
          to="/docs"
          className="link-underline text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
        >
          Vezi toate integrările &rarr;
        </Link>
      </div>
    </Section>
  );
}
