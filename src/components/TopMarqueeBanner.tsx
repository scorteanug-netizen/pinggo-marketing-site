import { useState, useEffect } from "react";
import { ArrowRight, Zap } from "lucide-react";

const BANNER_HEIGHT = 44;
const STORAGE_KEY = "pinggo_banner_closed";

export function TopMarqueeBanner() {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) !== "true") {
      setClosed(false);
    }
  }, []);

  const handleClose = () => {
    setClosed(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, "true");
    }
  };

  if (closed) return null;

  return (
    <>
      <div style={{ height: BANNER_HEIGHT }} className="flex-shrink-0" aria-hidden />
      <div
        className="fixed top-0 left-0 right-0 z-[100] flex items-center overflow-hidden text-white"
        style={{
          height: BANNER_HEIGHT,
          background: "linear-gradient(135deg, #1e3a5f 0%, #2d1b4e 100%)",
        }}
      >
        <div className="marquee-inner flex items-center flex-1 min-w-0 h-full">
          <div className="marquee-track flex items-center h-full shrink-0">
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>
        <button
          type="button"
          onClick={handleClose}
          className="flex-shrink-0 p-2 h-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Inchide banner"
        >
          <span className="text-lg leading-none font-bold">&#215;</span>
        </button>
      </div>
    </>
  );
}

function MarqueeContent() {
  return (
    <div className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 whitespace-nowrap h-full">
      <span className="text-xs sm:text-sm font-medium">
        Raspuns lent inseamna leaduri pierdute
      </span>
      <span className="text-orange-400" aria-hidden>
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </span>
      <span className="text-xs sm:text-sm font-medium">
        Calculeaza pierderea (gratis)
      </span>
      <span className="text-white/50 text-sm" aria-hidden>
        |
      </span>
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" />
        Pinggo: dovada primului contact + termene respectate
      </span>
      <span className="text-white/40 text-lg px-2" aria-hidden>
        &#8226;
      </span>
    </div>
  );
}
