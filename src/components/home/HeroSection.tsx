import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="section-premium bg-background">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <h1 className="text-slate-950 font-heading font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
              Răspuns în 15 secunde. Programare automată.
              <br />
              Știi exact cine a preluat.
            </h1>
            <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              Pinggo preia fiecare lead pe WhatsApp, pune 2-3 întrebări,
              și programează. Dacă ceva nu merge, escaldează automat.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link to="/contact">Solicită demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Începe testarea</Link>
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
