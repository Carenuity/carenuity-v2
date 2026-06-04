"use client";
import { useState } from "react";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function DocumentationClient() {
  const { lang } = useLanguage();
  const en = lang === "en";
  const [italy, setItaly] = useState(false);

  const enDocs = [
    {
      href: "/docs/datasheet/datasheet-sq-panel-v1.1.3.pdf",
      label: "Datasheet_SQ-Panel_V1.1.3 [PDF]",
    },
    {
      href: "/docs/datasheet/datasheet-sq-power-v1.1.3.pdf",
      label: "Datasheet_SQ-Power_V1.1.3 [PDF]",
    },
    {
      href: "/docs/datasheet/datasheet-sq-connector-v1.1.3.pdf",
      label: "Datasheet_SQ-Connector_V1.1.3 [PDF]",
    },
    {
      href: "/docs/declaration-of-conformity.pdf",
      label: "Declaration-of-Conformity V.1.3.0 [PDF]",
    },
    { href: "/docs/leaflet/leaflet.pdf", label: "Leaflet V1.0.0 [PDF]" },
    {
      href: "/docs/commissioning-en.pdf",
      label: "Manual-for-Commissioning 1.1.0 [PDF]",
    },
    { href: "/product/sq-panel/serial-number", label: "Serial Number V2.0.1" },
    {
      href: "/docs/sq-panel-user-guide.pdf",
      label: "SQ-Panel user guide [PDF]",
    },
  ];

  const deDocs = [
    {
      href: "/docs/datasheet/datasheet-sq-panel-v1.1.3-de.pdf",
      label: "Datasheet_SQ-Panel_V1.1.3 [PDF]",
    },
    {
      href: "/docs/datasheet/datasheet-sq-power-v1.1.3-de.pdf",
      label: "Datasheet_SQ-Power_V1.1.3 [PDF]",
    },
    {
      href: "/docs/datasheet/datasheet-sq-connector-v1.1.3-de.pdf",
      label: "Datasheet_SQ-Connector_V1.1.3 [PDF]",
    },
    {
      href: "/docs/declaration-de.pdf",
      label: "Konformitätserklärung V.1.3.0 [PDF]",
    },
    {
      href: "/docs/leaflet/leaflet-de.pdf",
      label: "Beipackzettel V1.0.1 [PDF]",
    },
    {
      href: "/docs/commissioning-de.pdf",
      label: "Handbuch zur Inbetriebnahme 1.1.0 [PDF]",
    },
    { href: "/product/sq-panel/serial-number", label: "Serien-Nummer V2.0.1" },
  ];

  const itDocs = [
    {
      href: "/docs/datasheet/datasheet-sq-panel-v1.1.3-it.pdf",
      label: "Scheda tecnica_SQ-Panel_V1.1.3 [PDF]",
    },
    {
      href: "/docs/datasheet/datasheet-sq-power-v1.1.3-it.pdf",
      label: "Scheda tecnica_SQ-Power_V1.1.3 [PDF]",
    },
    {
      href: "/docs/datasheet/datasheet-sq-connector-v1.1.3-it.pdf",
      label: "Scheda tecnica_SQ-Connector_V1.1.3 [PDF]",
    },
    {
      href: "/docs/declaration-it.pdf",
      label: "Dichiarazione di conformità V.1.3.0 [PDF]",
    },
    {
      href: "/docs/leaflet/leaflet-it.pdf",
      label: "Foglio illustrativo V1.0.0 [PDF]",
    },
    {
      href: "/docs/commissioning-it.pdf",
      label: "Manuale di messa in servizio 1.0.3 [PDF]",
    },
    {
      href: "/product/sq-panel/serial-number",
      label: "Numero di serie V2.0.1",
    },
  ];

  const docs = italy ? itDocs : en ? enDocs : deDocs;

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
            <span className="font-medium text-white">Documentation</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                Documentation
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              SQ-Panel Documentation
              <br />
              <span className="text-green-300">
                {en ? "All Technical Documents" : "Alle technischen Dokumente"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "Datasheets, manuals, and compliance documents for the Carenuity SQ-Panel."
                : "Datenblätter, Handbücher und Konformitätsdokumente für das Carenuity SQ-Panel."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />
            <div className="flex-1 min-w-0">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h2 className="text-xl font-bold text-[#0d2137] dark:text-white">
                    SQ-Panel Documentation
                  </h2>
                  <label className="cursor-pointer self-start sm:self-auto">
                    <span className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-4 py-2 text-xs font-semibold text-white transition duration-300 inline-block whitespace-nowrap">
                      {!italy ? "Read in Italian" : "Turn off Italian"}
                    </span>
                    <input
                      type="checkbox"
                      className="hidden"
                      onChange={(e) => setItaly(e.target.checked)}
                    />
                  </label>
                </div>
                <ul className="space-y-3">
                  {docs.map((doc) => (
                    <li key={doc.href}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-primary dark:text-green-400 hover:underline"
                      >
                        <svg
                          className="w-4 h-4 text-primary dark:text-green-400 shrink-0"
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
                        {doc.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/product/sq-panel/aqi-insights"
                className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-6 py-2.5 text-sm font-semibold text-white transition duration-300 inline-block"
              >
                SQ-Panel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
