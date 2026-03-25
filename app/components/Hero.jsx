"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-[120px] md:pt-[100px] xl:pt-[140px]"
    >
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-[520px] flex items-center"
        style={{ backgroundImage: "url('/images/hero/home.png')" }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 40%, transparent 55%)",
          }}
        />
        <div className="relative container z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">
                  Smart Indoor Monitoring
                </span>
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                {t.hero.line1}
                <br />
                <span className="text-green-400">{t.hero.line2}</span>
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-white/80 md:text-xl">
                {t.hero.sub1} {t.hero.sub2}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/sq-system"
                  className="px-8 py-3 rounded-full font-bold text-white text-sm shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "#174f2e",
                    border: "2px solid rgba(74,222,128,0.4)",
                  }}
                >
                  {t.nav.install}
                </a>
                <a
                  href="#features"
                  className="px-8 py-3 rounded-full font-bold text-white text-sm border-2 border-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  {t.home.exploreSystem}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
