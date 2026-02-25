import { Section } from "@/components/layout/Section";

const testimoniale = [
  {
    quote: "Am integrat cu Pipedrive în 20 de minute. A doua zi aveam deja programări automate din leaduri care au intrat noaptea.",
    name: "Andrei M.",
    role: "Director Vânzări · Imobiliare",
    initials: "AM",
    color: "#F56E0F",
  },
  {
    quote: "Rata de contact a crescut de la 40% la 92% în prima lună. Leadurile nu mai sunt uitate în niciun caz.",
    name: "Maria C.",
    role: "CEO · Agenție Marketing",
    initials: "MC",
    color: "#7C3AED",
  },
  {
    quote: "Escaladarea automată ne-a salvat deal-uri. Dacă un agent nu preluase în 10 min, eu primeam notificare instant.",
    name: "Bogdan T.",
    role: "Sales Manager · SaaS",
    initials: "BT",
    color: "#16A34A",
  },
];

export function TestimonialeSection() {
  return (
    <Section alternate secondary>
      {/* Eyebrow */}
      <p className="mb-2 text-center text-[11px] font-bold uppercase tracking-[.08em] text-orange-500">
        Ce spun clienții
      </p>

      {/* Headline */}
      <h2 className="mb-10 text-center font-heading font-extrabold leading-[1.1] text-[#0D0D0D]"
        style={{ fontSize: "clamp(26px, 3vw, 36px)" }}>
        Rezultate reale, de la echipe reale din România.
      </h2>

      {/* Cards grid */}
      <div className="grid gap-5 sm:grid-cols-3">
        {testimoniale.map(({ quote, name, role, initials, color }) => (
          <div
            key={name}
            className="flex flex-col rounded-2xl border border-[#E2E0DA] bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/8"
          >
            {/* Stars */}
            <div className="mb-3 text-[16px] text-yellow-400">★★★★★</div>

            {/* Quote */}
            <p className="flex-1 text-sm italic leading-relaxed text-[#4B5563]">
              "{quote}"
            </p>

            {/* Author */}
            <div className="mt-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white"
                style={{ background: color }}
              >
                {initials}
              </div>
              <div>
                <p className="text-[14px] font-bold text-slate-900">{name}</p>
                <p className="text-[12px] text-[#9CA3AF]">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">
        Testimoniale bazate pe feedback din discuții cu potențiali clienți · Se înlocuiesc cu citate reale la lansare
      </p>
    </Section>
  );
}
