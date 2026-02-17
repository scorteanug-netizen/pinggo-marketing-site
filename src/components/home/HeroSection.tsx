import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Check, MessageSquare, Calendar, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="section-premium bg-background">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
          {/* Left Column - Content */}
          <div className="max-w-2xl lg:max-w-none">
            <h1 className="text-slate-950 font-heading font-extrabold text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.3rem] leading-[0.95] tracking-[-0.03em]">
              <span className="block lg:whitespace-nowrap">
                Răspuns în <span className="text-orange-500">15 secunde</span>
              </span>
              <span className="block text-black lg:whitespace-nowrap">Programare automată</span>
            </h1>
            <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              Fiecare lead primește <span className="font-semibold text-orange-500">răspuns instant</span>,
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

          {/* Right Column - Pyramid Cards */}
          <div className="mx-auto w-full max-w-md">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {/* Top card */}
              <div className="col-span-2 flex justify-center">
                <div className="w-full max-w-[220px] flex flex-col items-center text-center p-6 md:p-8 rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg">
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
              </div>

              {/* Bottom left card */}
              <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-violet-500 hover:shadow-lg">
                <div className="p-3 bg-violet-500 rounded-full mb-3 shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-slate-900 text-sm mb-1">
                  Programare automată
                </p>
                <p className="text-xs text-slate-600">
                  În Google Calendar
                </p>
              </div>

              {/* Bottom right card */}
              <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg">
                <div className="p-3 bg-orange-500 rounded-full mb-3 shadow-lg">
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
        </div>
      </Container>
    </section>
  );
}
