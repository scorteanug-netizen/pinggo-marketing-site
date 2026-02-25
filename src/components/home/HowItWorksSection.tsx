import { useRef, useEffect, useState } from "react";
import { Webhook, Zap, Calendar, AlertTriangle, UserRound } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AccentPanel } from "@/components/AccentPanel";

const steps = [
  {
    icon: Webhook,
    title: "Lead intră",
    description: "Lead-ul vine din Facebook/Google/site și ajunge în Pinggo instant.",
  },
  {
    icon: Zap,
    title: "Răspuns automat în 15 secunde",
    description: "Pinggo trimite răspuns pe WhatsApp automat: 'Bună! Când doriți programarea?'",
  },
  {
    icon: Calendar,
    title: "Programare automată",
    description: "Clientul alege un slot. Pinggo sincronizează în Google Calendar automat.",
  },
  {
    icon: AlertTriangle,
    title: "Dacă ceva nu merge, escaladare",
    description: "Dacă nimeni nu răspunde în 10 minute, Pinggo alertează managerul automat.",
  },
];

const flowMessages = [
  { side: "left" as const,  text: "Salut! Vrei o programare pentru consultație?" },
  { side: "right" as const, text: "Da, ideal mâine după-amiază." },
  { side: "left" as const,  text: "Perfect. Am slot la 14:00 sau 16:30." },
  { side: "right" as const, text: "16:30 e perfect." },
  { side: "left" as const,  text: "✅ Programat. Confirmarea a fost trimisă." },
];

export function HowItWorksSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section alternate canvas id="how-it-works">
      <SectionHeading
        title="Cum funcționează Pinggo"
        subtitle="De la lead la programare, în sub 3 minute."
        className="mb-8"
      />

      <div ref={wrapperRef} className={isVisible ? "chat-section-visible" : ""}>
        <AccentPanel accent="gray" className="p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">

            {/* Chat window */}
            <div className="rounded-[1.5rem] border border-gray-200/90 bg-white p-6 md:p-7 shadow-2xl shadow-slate-300/40">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Conversație automată
                </p>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                  <span className="how-flow-live-dot h-2 w-2 rounded-full bg-emerald-500" />
                  Live
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8f5ef] p-4 md:p-5 shadow-inner">
                <div className="space-y-4">
                  {flowMessages.map((message, index) => (
                    <div
                      key={`${message.text}-${index}`}
                      className={[
                        "how-chat-message flex items-end gap-2.5",
                        message.side === "right" ? "justify-end" : "justify-start",
                      ].join(" ")}
                      style={{ animationDelay: `${index * 1.2}s` }}
                    >
                      {message.side === "left" && (
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-extrabold text-white shadow-sm">
                          P
                        </span>
                      )}

                      <div
                        className={[
                          "max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-snug shadow-sm",
                          message.side === "right"
                            ? "rounded-tr-md border border-slate-300 bg-slate-100 text-slate-700"
                            : "rounded-tl-md border border-slate-200 bg-white text-slate-700",
                        ].join(" ")}
                      >
                        {message.text}
                      </div>

                      {message.side === "right" && (
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm">
                          <UserRound className="h-4 w-4 text-slate-500" />
                        </span>
                      )}
                    </div>
                  ))}

                  {/* Typing indicator */}
                  <div
                    className="how-chat-message flex items-end gap-2.5 justify-start"
                    style={{ animationDelay: `${flowMessages.length * 1.2}s` }}
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-extrabold text-white shadow-sm">
                      P
                    </span>
                    <div className="rounded-2xl rounded-tl-md border border-slate-200 bg-white px-3 py-2 shadow-sm">
                      <div className="flex items-center gap-1">
                        <span className="how-typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span className="how-typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span className="how-typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="how-flow-step rounded-2xl border border-orange-200 bg-orange-50/40 p-6 shadow-lg shadow-orange-100/40"
                  style={{ animationDelay: `${0.4 + index * 0.8}s` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-200 bg-orange-100/70">
                      <step.icon className="h-5 w-5 text-orange-600" />
                      <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-orange-500 text-[10px] font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-orange-700/80">
                        Pas {index + 1}
                      </p>
                      <p className="mt-0.5 text-base font-extrabold leading-tight text-slate-900">{step.title}</p>
                      <p className="mt-1 text-sm leading-snug text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </AccentPanel>
      </div>
    </Section>
  );
}
