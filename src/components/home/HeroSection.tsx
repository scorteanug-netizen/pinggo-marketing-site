import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

/* ── Hero Section ── */
export function HeroSection() {
  return (
    <section className="section-premium bg-background" style={{ paddingBottom: "80px" }}>
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">

          {/* Left Column */}
          <div className="max-w-2xl lg:max-w-none">

            {/* Eyebrow pill */}
            <div
              className="inline-block mb-[14px] px-[14px] py-1 rounded-full text-[12px] font-bold tracking-[.08em] uppercase text-[#C2410C]"
              style={{ background: "#FFF3E0", border: "1px solid #FDBA74" }}
            >
              ⚡ Lead automation · Setup în mai puțin de 1h
            </div>

            {/* Headline */}
            <h1
              className="font-heading font-extrabold leading-[1.05] tracking-[-0.03em] max-w-[540px]"
              style={{ fontSize: "clamp(40px, 5vw, 68px)" }}
            >
              <span className="block text-[#0D0D0D]">De la lead la conversație</span>
              <span className="block text-orange-500">în 15 secunde.</span>
            </h1>

            {/* Sub-headline */}
            <p
              className="leading-relaxed text-[#4B4B55] max-w-[460px]"
              style={{ fontSize: "17px", marginTop: "18px" }}
            >
              Pinggo preia fiecare lead pe WhatsApp, îl programează automat și
              escaladează dacă nimeni nu răspunde. Tu știi tot, tot timpul.
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-col sm:flex-row" style={{ gap: "12px" }}>
              <Button
                size="lg"
                className="rounded-[10px] text-[15px] font-bold"
                asChild
              >
                <Link to="/contact">Solicită setup →</Link>
              </Button>

              <button
                className="inline-flex items-center justify-center h-11 px-6 text-[15px] font-semibold rounded-[10px] bg-transparent text-[#374151] transition-all duration-200 hover:border-[#9CA3AF] hover:bg-gray-50"
                style={{ border: "1.5px solid #D1D5DB" }}
              >
                ▶ Demo în 2 minute
              </button>
            </div>

            {/* Sub-CTA reassurance */}
            <p className="mt-[10px] text-[12px] text-[#9CA3AF]">
              Setup inclus · Live în mai puțin de 1h · Fără surprize
            </p>

            {/* Scarcity row */}
            <div className="mt-[20px] flex items-center gap-2 text-[13px] text-[#6B7280]">
              <span className="scarcity-dot" />
              <span>
                Acceptăm{" "}
                <strong className="text-[#111827]">primele 20 de echipe</strong>{" "}
                în programul de lansare
              </span>
            </div>
          </div>

          {/* Right Column — Hub & Spoke Diagram */}
          <div className="mx-auto w-full flex items-center justify-center">
            <iframe
              src="/pinggo-diagram.html"
              title="Pinggo — Hub & Spoke Diagram"
              className="border-0"
              style={{ width: 560, height: 520, pointerEvents: "none" }}
              scrolling="no"
              tabIndex={-1}
              aria-hidden
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
