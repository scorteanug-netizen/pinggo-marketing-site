import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { isHubspotConfigured, submitCalculatorToHubspot } from "@/lib/hubspot";
import { cn } from "@/lib/utils";

const TARGET_RESPONSE_RATE = 95;

interface CalcInputs {
  leads: string;
  convRate: string;
  avgValue: string;
  responseRate: string;
}

interface NumericCalcInputs {
  leads: number;
  convRate: number;
  avgValue: number;
  responseRate: number;
}

interface GateInputs {
  name: string;
  email: string;
  phone: string;
  company: string;
}

interface CalcResults {
  responseGap: number;
  lostLeads: number;
  monthlyLoss: number;
  annualLoss: number;
  recoveredWithPinggo: number;
}

function formatRON(value: number): string {
  return new Intl.NumberFormat("ro-RO", {
    style: "currency",
    currency: "RON",
    maximumFractionDigits: 0,
  }).format(value);
}

function toNumericInputs(inputs: CalcInputs): NumericCalcInputs {
  const leads = Number(inputs.leads);
  const convRate = Number(inputs.convRate);
  const avgValue = Number(inputs.avgValue);
  const responseRate = Number(inputs.responseRate);

  return {
    leads: Number.isFinite(leads) ? leads : 0,
    convRate: Number.isFinite(convRate) ? convRate : 0,
    avgValue: Number.isFinite(avgValue) ? avgValue : 0,
    responseRate: Number.isFinite(responseRate) ? responseRate : 0,
  };
}

function compute(inputs: NumericCalcInputs): CalcResults {
  const leads = Math.max(0, inputs.leads);
  const convRate = Math.min(100, Math.max(0, inputs.convRate));
  const avgValue = Math.max(0, inputs.avgValue);
  const responseRate = Math.min(100, Math.max(0, inputs.responseRate));

  const responseGap = Math.max(0, TARGET_RESPONSE_RATE - responseRate) / 100;
  const lostLeads = leads * responseGap;
  const monthlyLoss = lostLeads * (convRate / 100) * avgValue;
  const annualLoss = monthlyLoss * 12;
  const recoveredWithPinggo = monthlyLoss;

  return { responseGap, lostLeads, monthlyLoss, annualLoss, recoveredWithPinggo };
}

export default function Calculator() {
  const { toast } = useToast();
  const [inputs, setInputs] = useState<CalcInputs>({
    leads: "",
    convRate: "",
    avgValue: "",
    responseRate: "",
  });

  const [gate, setGate] = useState<GateInputs>({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [calculatorError, setCalculatorError] = useState("");
  const [gateError, setGateError] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [hasTriggeredGate, setHasTriggeredGate] = useState(false);
  const [isGateSubmitting, setIsGateSubmitting] = useState(false);

  const resultsCardRef = useRef<HTMLDivElement>(null);
  const numericInputs = useMemo(() => toNumericInputs(inputs), [inputs]);
  const results = useMemo(() => compute(numericInputs), [numericInputs]);
  const isCalculatorComplete = useMemo(() => {
    const { leads, convRate, avgValue, responseRate } = numericInputs;

    return (
      inputs.leads.trim() !== "" &&
      inputs.convRate.trim() !== "" &&
      inputs.avgValue.trim() !== "" &&
      inputs.responseRate.trim() !== "" &&
      leads > 0 &&
      avgValue > 0 &&
      convRate > 0 &&
      convRate <= 100 &&
      responseRate >= 0 &&
      responseRate <= 100
    );
  }, [inputs, numericInputs]);

  useEffect(() => {
    if (isUnlocked || hasTriggeredGate) {
      return;
    }

    const target = resultsCardRef.current;
    if (!target || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggeredGate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [isUnlocked, hasTriggeredGate]);

  const handleInputChange = (field: keyof CalcInputs, rawValue: string) => {
    setInputs((previous) => ({ ...previous, [field]: rawValue }));
    setCalculatorError("");
  };

  const handleOpenGate = () => {
    if (!isCalculatorComplete) {
      setCalculatorError("Completează toate câmpurile din calculator pentru a vedea rezultatele.");
      return;
    }

    setCalculatorError("");
    setIsGateOpen(true);
  };

  const handleReveal = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!gate.name.trim() || !gate.email.trim() || !gate.phone.trim() || !gate.company.trim()) {
      setGateError("Completează nume, email, telefon și companie pentru a vedea rezultatele.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gate.email)) {
      setGateError("Adresă de email invalidă.");
      return;
    }

    const phoneDigits = gate.phone.replace(/\D/g, "");
    if (phoneDigits.length < 9) {
      setGateError("Număr de telefon invalid.");
      return;
    }

    if (!isHubspotConfigured("calculator")) {
      setGateError("Formularul nu este configurat corect. Lipsesc setarile HubSpot.");
      toast({
        variant: "destructive",
        title: "Configurare lipsa",
        description: "Seteaza VITE_HUBSPOT_PORTAL_ID si VITE_HUBSPOT_CALCULATOR_FORM_ID.",
      });
      return;
    }

    setIsGateSubmitting(true);
    setGateError("");
    try {
      await submitCalculatorToHubspot({
        name: gate.name,
        email: gate.email,
        phone: gate.phone,
        company: gate.company,
        leads: numericInputs.leads,
        convRate: numericInputs.convRate,
        avgValue: numericInputs.avgValue,
        responseRate: numericInputs.responseRate,
        monthlyLoss: results.monthlyLoss,
        annualLoss: results.annualLoss,
      });

      setIsUnlocked(true);
      setIsGateOpen(false);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Nu am putut trimite datele.";
      setGateError(message);
      toast({
        variant: "destructive",
        title: "Eroare la trimitere",
        description: message,
      });
    } finally {
      setIsGateSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white py-16">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-violet-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-violet-700">
              Calculator gratuit
            </span>
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900">
              Câți bani pierzi lunar
              <br />
              <span className="text-violet-600">din leaduri fără răspuns rapid?</span>
            </h1>
            <p className="text-base text-gray-500">
              Introdu datele echipei tale și vezi impactul real în RON.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-2">
            <div className="space-y-6 rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-base font-bold uppercase tracking-wide text-gray-800">Date echipă</h2>

              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Leaduri primite / lună</label>
                <input
                  type="number"
                  min={1}
                  value={inputs.leads}
                  placeholder="Ex: 200"
                  onChange={(event) => handleInputChange("leads", event.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Numărul total de leaduri noi care intră într-o lună.
                </p>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Rată de conversie (%)</label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={inputs.convRate}
                  placeholder="Ex: 10"
                  onChange={(event) => handleInputChange("convRate", event.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Procentul de leaduri care devin clienți (ex: 10% = 10 clienți din 100 leaduri).
                </p>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Valoare medie client (RON)</label>
                <input
                  type="number"
                  min={1}
                  value={inputs.avgValue}
                  placeholder="Ex: 1500"
                  onChange={(event) => handleInputChange("avgValue", event.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Suma medie încasată de la un client nou.
                </p>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">
                  Rata actuală de răspuns în 15 min (%)
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={inputs.responseRate}
                  placeholder="Ex: 40"
                  onChange={(event) => handleInputChange("responseRate", event.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Procentul de leaduri la care răspundeți în primele 15 minute.
                </p>
                <p className="mt-1 text-xs text-gray-400">Target recomandat cu Pinggo: 95%+.</p>
              </div>
            </div>

            <div className="space-y-5">
              <div
                ref={resultsCardRef}
                className="relative overflow-hidden rounded-2xl border border-violet-200 bg-violet-50 p-6"
              >
                <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-violet-800">Impact financiar estimat</h2>

                <div className={cn("space-y-3 transition duration-300", !isUnlocked && "select-none blur-[3px]")}>
                  <div className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-3">
                    <span className="text-sm text-gray-600">Gap de răspuns față de 95%</span>
                    <span className="text-base font-extrabold text-gray-900">
                      {Math.round(results.responseGap * 100)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-3">
                    <span className="text-sm text-gray-600">Leaduri pierdute / lună</span>
                    <span className="text-base font-extrabold text-gray-900">{Math.round(results.lostLeads)}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-3">
                    <span className="text-sm text-gray-600">Pierdere lunară estimată</span>
                    <span className="text-lg font-extrabold text-red-600">{formatRON(results.monthlyLoss)}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-3">
                    <span className="text-sm text-gray-600">Pierdere anuală estimată</span>
                    <span className="text-xl font-extrabold text-red-700">{formatRON(results.annualLoss)}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-green-200 bg-green-50 px-4 py-3">
                    <span className="text-sm text-gray-600">Venit recuperabil cu Pinggo / lună</span>
                    <span className="text-xl font-extrabold text-green-700">
                      +{formatRON(results.recoveredWithPinggo)}
                    </span>
                  </div>
                </div>

                {!isUnlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/70 p-6 backdrop-blur-[2px]">
                    <div className="text-center">
                      <p className="mb-3 text-sm font-semibold text-gray-700">Deblochează rezultatele complete</p>
                      <Button
                        type="button"
                        onClick={handleOpenGate}
                        disabled={!isCalculatorComplete}
                        className="bg-violet-600 text-white hover:bg-violet-700"
                      >
                        Vezi rezultatele
                      </Button>
                      {hasTriggeredGate && (
                        <p className="mt-2 text-xs text-gray-500">
                          Popup-ul se deschide doar când apeși butonul.
                        </p>
                      )}
                      {calculatorError && (
                        <p className="mt-2 text-xs text-red-500">{calculatorError}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-gray-900">Cum calculăm rezultatele</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    1. Calculăm gap-ul de răspuns față de targetul 95%:{" "}
                    <strong>
                      95% - {Math.round(Math.min(100, Math.max(0, numericInputs.responseRate)))}% ={" "}
                      {Math.round(results.responseGap * 100)}%
                    </strong>
                    .
                  </p>
                  <p>
                    2. Estimăm leadurile pierdute lunar:{" "}
                    <strong>
                      {Math.round(Math.max(0, numericInputs.leads))} × {Math.round(results.responseGap * 100)}% ={" "}
                      {Math.round(results.lostLeads)}
                    </strong>
                    .
                  </p>
                  <p>
                    3. Estimăm valoarea pierdută pe lună:{" "}
                    <strong>
                      {Math.round(results.lostLeads)} × {Math.round(Math.min(100, Math.max(0, numericInputs.convRate)))}% ×{" "}
                      {formatRON(Math.max(0, numericInputs.avgValue))} = {formatRON(results.monthlyLoss)}
                    </strong>
                    .
                  </p>
                  <p>
                    4. Pierderea anuală: <strong>{formatRON(results.monthlyLoss)} × 12 = {formatRON(results.annualLoss)}</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="mb-2 text-base font-semibold text-gray-900">Vrei să recuperezi acești bani?</p>
            <p className="mb-4 text-sm text-gray-500">Setup în mai puțin de 1 oră. Primul lead automat în aceeași zi.</p>
            <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
              <Link to="/contact">Solicită demo</Link>
            </Button>
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-xs text-gray-400">
            * Calculul este o estimare orientativă bazată pe datele introduse. Rezultatele reale pot varia în funcție de industrie, echipă și flux de leaduri.
          </p>
        </Container>
      </div>

      <Dialog open={isGateOpen && !isUnlocked} onOpenChange={setIsGateOpen}>
        <DialogContent className="border-violet-100 bg-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Rezultatele tale sunt gata</DialogTitle>
            <DialogDescription>
              Completează nume, email, telefon și companie pentru a debloca valorile complete.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleReveal} className="space-y-3">
            <input
              type="text"
              placeholder="Nume și prenume"
              value={gate.name}
              onChange={(event) => setGate((current) => ({ ...current, name: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
            <input
              type="email"
              placeholder="Email profesional"
              value={gate.email}
              onChange={(event) => setGate((current) => ({ ...current, email: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
            <input
              type="tel"
              placeholder="Telefon"
              value={gate.phone}
              onChange={(event) => setGate((current) => ({ ...current, phone: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
            <input
              type="text"
              placeholder="Companie"
              value={gate.company}
              onChange={(event) => setGate((current) => ({ ...current, company: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
            {gateError && <p className="text-xs text-red-500">{gateError}</p>}

            <Button
              type="submit"
              className="w-full bg-violet-600 text-white hover:bg-violet-700"
              disabled={isGateSubmitting}
            >
              {isGateSubmitting ? "Se trimite..." : "Deblochează rezultatele"}
            </Button>
            <p className="text-center text-[11px] text-gray-400">Fără spam · Datele tale sunt în siguranță</p>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
