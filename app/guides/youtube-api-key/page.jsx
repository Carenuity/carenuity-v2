"use client";
import Link from "next/link";
import ProgramsSidebar from "../../components/ProgramsSidebar";
import { useLanguage } from "../../context/LanguageContext";

const steps = Array.from({ length: 10 }, (_, i) => ({
  n: i + 1,
  src: `/images/youtube-api/step${i + 1}.png`,
}));

export default function YouTubeApiKeyPage() {
  const { t } = useLanguage();
  const c = t.programsGuides.youtube;
  const s = t.programsGuides.shared;
  const sb = t.programsGuides.sidebar;

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[140px]"
        style={{
          background:
            "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container relative">
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm">
            <Link
              href="/"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {t.breadcrumb.home}
            </Link>
            <span className="text-green-300/40">/</span>
            <Link
              href="/programs/kenya"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {sb.kicker}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">{c.pageName}</span>
          </nav>

          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-base leading-none">🔑</span>
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {sb.guidesGroup}
              </span>
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {c.heading}
            </h1>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProgramsSidebar />

            <div className="flex-1 min-w-0">
              <div className="rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm p-6 md:p-8">
                <p className="text-body-color dark:text-green text-base leading-relaxed mb-8">
                  {c.introPre}{" "}
                  <a
                    href="https://console.cloud.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-green-400 hover:underline"
                  >
                    {c.introLink}
                  </a>
                  {c.introPost}
                </p>

                <div className="space-y-10">
                  {steps.map((step) => (
                    <div key={step.n}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-bg dark:bg-gray-800 text-sm font-bold text-primary dark:text-green-400 shrink-0">
                          {step.n}
                        </span>
                        <h2 className="text-lg font-bold text-black dark:text-white">
                          {s.step} {step.n}
                        </h2>
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={step.src}
                        alt={`YouTube API step ${step.n}`}
                        className="w-full rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://solutions.carenuity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#174f2e" }}
                >
                  {s.enjoyApps}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
