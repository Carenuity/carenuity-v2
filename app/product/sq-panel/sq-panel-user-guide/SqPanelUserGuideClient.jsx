"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function SqPanelUserGuideClient() {
  const { lang } = useLanguage();
  const en = lang === "en";

  return (
    <main>
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
              {en ? "Home" : "Start"}
            </Link>
            <span className="text-green-300/40">/</span>
            <Link
              href="/products"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {en ? "Products" : "Produkte"}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">SQ-Panel User Guide</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {en ? "User Guide" : "Benutzerhandbuch"}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              SQ-Panel User Guide
              <br />
              <span className="text-green-300">
                {en
                  ? "Everything You Need to Get Started"
                  : "Alles, was Sie für den Einstieg benötigen"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "Step-by-step visual guide for using your Carenuity SQ-Panel."
                : "Schritt-für-Schritt-Bildanleitung für die Nutzung Ihres Carenuity SQ-Panels."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                SQ-Panel User Guide
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <img
                    src="/images/products/sq-panel/sq-panel-guide/guide3.png"
                    alt="SQ-Panel User Guide Part 1"
                    className="w-full object-contain"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <img
                    src="/images/products/sq-panel/sq-panel-guide/guide4.png"
                    alt="SQ-Panel User Guide Part 2"
                    className="w-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/carenuity-app-guide"
                  className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-6 py-2.5 text-sm font-semibold text-white transition duration-300"
                >
                  {en ? "Mobile App User Guide" : "Mobile App Benutzerhandbuch"}
                </Link>
                <Link
                  href="/product/sq-panel/documentation"
                  className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary dark:text-green-400 hover:bg-primary/5 transition duration-300"
                >
                  {en ? "Documentation" : "Dokumentation"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
