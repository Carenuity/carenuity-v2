"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function AqiInsightsClient() {
  const { t } = useLanguage();
  const c = t.aqiInsights;

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
              href="/products"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {c.breadcrumbProducts}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">AQI Insights</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {c.badge}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {c.heroTitle}
              <br />
              <span className="text-green-300">{c.heroHighlight}</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {c.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />

            <div className="flex-1 min-w-0">
              {/* Intro paragraphs */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                Air Quality Index
              </h2>
              <div className="space-y-4 mb-10">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {c.introP1}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {c.introP2}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {c.introP3}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {c.introP4}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {c.introP5}
                </p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-relaxed">
                  {c.introP6}
                </p>
              </div>

              {/* Available Applications */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {c.applicationsTitle}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                {c.applications.map((app) => (
                  <div
                    key={app}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 flex items-center gap-3"
                  >
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-gray-800 dark:text-white">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
