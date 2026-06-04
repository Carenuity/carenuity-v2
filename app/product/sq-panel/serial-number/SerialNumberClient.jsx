"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function SerialNumberClient() {
  const { lang } = useLanguage();
  const en = lang === "en";

  const components = en
    ? [
        {
          title: "Product Code",
          desc: "Identifies the product category and model.",
        },
        {
          title: "Year Identifier",
          desc: "Indicates the manufacturing year.",
        },
        {
          title: "Batch Number",
          desc: "Tracks the specific production batch.",
        },
        {
          title: "Individual Item Number",
          desc: "A unique identifier assigned to each individual item.",
        },
      ]
    : [
        {
          title: "Produktcode",
          desc: "Kennzeichnet die Produktkategorie und das Modell.",
        },
        {
          title: "Jahreskennung",
          desc: "Gibt das Herstellungsjahr an.",
        },
        {
          title: "Chargennummer",
          desc: "Verfolgt die jeweilige Produktionscharge.",
        },
        {
          title: "Individuelle Artikelnummer",
          desc: "Eine eindeutige Kennung, die jedem einzelnen Artikel zugewiesen wird.",
        },
      ];

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
            <span className="font-medium text-white">
              {en ? "Serial Number" : "Seriennummer"}
            </span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {en ? "Serial Number" : "Seriennummer"}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {en ? "Serial Number" : "Seriennummer"}
              <br />
              <span className="text-green-300">
                {en
                  ? "Clarity, Organization & Traceability"
                  : "Klarheit, Ordnung & Rückverfolgbarkeit"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "How Carenuity structures every SQ-Panel serial number for clear identification and full traceability."
                : "Wie Carenuity jede SQ-Panel-Seriennummer für eine klare Identifikation und vollständige Rückverfolgbarkeit strukturiert."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {en ? "Serial Number" : "Seriennummer"}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {en
                  ? "Carenuity's serial number assignment system is a structured methodology designed for clarity, organization, and traceability. Each serial number is composed of distinct segments that together describe exactly what a product is and where it comes from."
                  : "Das Seriennummernsystem von Carenuity ist eine strukturierte Methodik, die auf Klarheit, Ordnung und Rückverfolgbarkeit ausgelegt ist. Jede Seriennummer besteht aus eindeutigen Segmenten, die zusammen genau beschreiben, was ein Produkt ist und woher es stammt."}
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-8">
                <img
                  src="/images/products/sq-panel/serial-number/serial-number.jpeg"
                  alt={
                    en ? "Serial number example" : "Beispiel einer Seriennummer"
                  }
                  className="w-full object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {en ? "Key Components" : "Wesentliche Bestandteile"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {components.map((c) => (
                  <div
                    key={c.title}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3.5 h-3.5 text-primary dark:text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#0d2137] dark:text-white mb-1">
                          {c.title}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {c.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {en
                  ? "The visual representation above simplifies understanding by mapping these segments in a clear, linear format, with color-coded sections and labels."
                  : "Die obige visuelle Darstellung erleichtert das Verständnis, indem sie diese Segmente in einem klaren, linearen Format mit farblich gekennzeichneten Abschnitten und Beschriftungen abbildet."}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/product/sq-panel/documentation"
                  className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-6 py-2.5 text-sm font-semibold text-white transition duration-300"
                >
                  {en ? "Documentation" : "Dokumentation"}
                </Link>
                <Link
                  href="/product/sq-panel/sq-panel-user-guide"
                  className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary dark:text-green-400 hover:bg-primary/5 transition duration-300"
                >
                  {en ? "SQ-Panel User Guide" : "SQ-Panel Benutzerhandbuch"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
