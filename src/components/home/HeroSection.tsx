import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Accent } from "@/components/Accent";

export function HeroSection() {
  return (
    <section className="section-premium bg-background">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <h1 className="text-slate-950 font-heading font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
              Nu lasa <Accent>leadurile</Accent> sa se raceasca.
            </h1>
            <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              Preiei, repartizezi si urmaresti leadurile pana la primul contact, cu dovada verificabila. Dintr-un singur sistem.
            </p>
            
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-slate-700 text-base leading-snug font-body">Dovada: WhatsApp, e-mail, apel</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-slate-700 text-base leading-snug font-body">Memento, reasignare, alerta manager</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-slate-700 text-base leading-snug font-body">Raport saptamanal: TTFC, intarzieri, responsabil</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link to="/contact">Solicita demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Incepe testarea</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - custom image */}
          <div className="relative flex items-center justify-center min-h-[320px] md:min-h-[420px] w-full overflow-visible">
            <img
              src="/PINGGO.png?v=2"
              alt="Diagrama Pinggo"
              className="w-full max-w-[360px] md:max-w-[560px] h-auto"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
