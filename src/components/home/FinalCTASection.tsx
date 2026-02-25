import { Link } from "react-router-dom";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <Section highlightBlue>
      <div className="text-center max-w-2xl mx-auto">

        {/* Headline cu urgency */}
        <h2 className="text-white font-extrabold leading-[1.05]" style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}>
          Fiecare oră fără Pinggo<br />
          <span style={{ color: "#F56E0F" }}> = leaduri pierdute.</span>
        </h2>

        <p className="mt-4 leading-snug text-white/75" style={{ fontSize: "16px" }}>
          Setup în mai puțin de 1h. Primul lead automat în aceeași zi.
        </p>

        {/* Garanții */}
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <span className="flex items-center gap-1.5 text-[13px] font-semibold text-white/80">✅ Setup inclus</span>
          <span className="flex items-center gap-1.5 text-[13px] font-semibold text-white/80">🔒 GDPR compliant</span>
          <span className="flex items-center gap-1.5 text-[13px] font-semibold text-white/80">🇷🇴 Suport în română</span>
        </div>

        {/* CTA buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="rounded-[10px] text-[15px] font-bold" asChild>
            <Link to="/contact">Solicită setup →</Link>
          </Button>
          <Button size="lg" variant="outlineWhite" className="rounded-[10px] text-[15px]" asChild>
            <Link to="/contact">▶ Demo în 2 minute</Link>
          </Button>
        </div>

        <p className="mt-3 text-[12px] text-white/50">
          Fără card bancar · Setup inclus · GDPR compliant
        </p>

      </div>
    </Section>
  );
}
