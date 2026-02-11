import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Check, MessageSquare, Calendar, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="section-premium bg-background">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <h1 className="text-slate-950 font-heading font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
              Răspuns în{' '}
              <span className="text-orange-500">15 secunde</span> pe WhatsApp.{' '}
              <span className="text-blue-500">Programare automată</span>.
            </h1>
            <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              Fiecare lead primește{' '}
              <span className="font-semibold text-orange-500">răspuns instant</span>,
              se programează automat, și știi exact cine a preluat.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-orange-600 stroke-[3]" />
                </div>
                Fiecare lead primește răspuns instant pe WhatsApp
              </li>
              <li className="flex items-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-orange-600 stroke-[3]" />
                </div>
                Dacă nimeni nu preia, altcineva o face automat
              </li>
              <li className="flex items-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-orange-600 stroke-[3]" />
                </div>
                Vezi exact ce face echipa ta, săptămânal
              </li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link to="/contact">Solicită demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Începe testarea</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Icon Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 - Răspuns instant */}
            <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-orange-500 rounded-full mb-3 shadow-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Răspuns instant
              </p>
              <p className="text-xs text-slate-600">
                Sub 15 secunde
              </p>
            </div>

            {/* Card 2 - Programare automată */}
            <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-blue-500 rounded-full mb-3 shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Programare automată
              </p>
              <p className="text-xs text-slate-600">
                În Google Calendar
              </p>
            </div>

            {/* Card 3 - Vizibilitate totală */}
            <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-violet-50 to-white rounded-xl border border-violet-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-violet-500 rounded-full mb-3 shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Vizibilitate totală
              </p>
              <p className="text-xs text-slate-600">
                Știi cine preia
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
