"use client";
import Link from "next/link";
import ProgramsSidebar from "../../components/ProgramsSidebar";
import { useLanguage } from "../../context/LanguageContext";

function UniCard({ logo, name, children }) {
  return (
    <div className="rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm p-6 flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={name}
        className="w-16 h-16 rounded-full object-contain bg-white p-1 shadow shrink-0"
      />
      <div className="min-w-0">
        <h3 className="text-base font-bold text-black dark:text-white mb-1.5">
          {name}
        </h3>
        <div className="text-body-color dark:text-green text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function GermanyProgramPage() {
  const { t } = useLanguage();
  const c = t.programsGuides.germany;
  const news = t.programsGuides.shared.news;
  const group = t.programsGuides.sidebar.universityGroup;

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
              {t.programsGuides.sidebar.kicker}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">{c.region}</span>
          </nav>

          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-base leading-none">🇩🇪</span>
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {group}
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              {c.region}
            </h1>
            <p className="text-lg leading-relaxed text-white/80 md:text-xl">
              {c.pageDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProgramsSidebar />

            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                <UniCard
                  logo="/images/germany/landshut-logo.svg"
                  name="Hochschule für angewandte Wissenschaften Landshut (HAW)"
                >
                  {news}
                </UniCard>

                <UniCard
                  logo="/images/germany/thws-logo.png"
                  name="Technical Hochschule Würzburg-Schweinfurt (THWS)"
                >
                  {news}
                </UniCard>

                <UniCard
                  logo="/images/germany/hochschule-logo.jfif"
                  name="Hochschule für angewandtes Management (HAM)"
                >
                  {news}
                </UniCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
