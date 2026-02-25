import { Link } from "react-router-dom";

export function LaunchBandSection() {
  return (
    <section className="bg-[#0D0D0D] py-5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-[13px] text-white/70">
          <span className="launch-live-dot" />
          <span>Program de lansare activ</span>
        </div>

        <div className="hidden h-4 w-px bg-white/15 md:block" />

        <div className="flex items-center gap-2 text-[13px] text-white/70">
          <span>
            <strong className="text-white">Primele 20 de echipe</strong> - setup prioritar + pret de lansare
          </span>
        </div>

        <div className="hidden h-4 w-px bg-white/15 md:block" />

        <Link
          to="/contact"
          className="whitespace-nowrap rounded-lg border border-[rgba(245,110,15,0.4)] bg-[rgba(245,110,15,0.15)] px-4 py-1.5 text-[13px] font-bold text-[#FB923C] transition-colors hover:bg-[rgba(245,110,15,0.25)]"
        >
          Rezerva un loc {"->"}
        </Link>
      </div>
    </section>
  );
}
