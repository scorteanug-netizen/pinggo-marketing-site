import { Link } from "react-router-dom";
import { Check, Clock, TrendingUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { AccentCard } from "@/components/AccentCard";
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

          {/* Right Column - Product Card Mock */}
          <div className="relative">
            <AccentCard accent="orange" variant="top" className="border-slate-200 shadow-xl hover:shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Termen lead</span>
                  <h3 className="text-lg font-extrabold text-foreground mt-1 leading-tight">Termen: 30 min (Intent ridicat)</h3>
                </div>
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="badge-proof mb-4">
                <Check className="h-4 w-4" />
                Dovada: trimis pe WhatsApp
              </div>

              <div className="flex items-center gap-3 py-4 border-t border-border-card">
                <div className="h-9 w-9 rounded-lg bg-accent/15 flex items-center justify-center">
                  <User className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">Responsabil: Ioana</p>
                  <p className="text-xs text-muted-foreground">Asignat acum 5 min</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border-card">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-muted-foreground">TTFC Trend</span>
                  <TrendingUp className="h-4 w-4 text-proof" />
                </div>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 60, 35, 80, 55, 70, 45, 65, 50, 75, 60, 85].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-primary/20 transition-all hover:bg-primary/40"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </AccentCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
