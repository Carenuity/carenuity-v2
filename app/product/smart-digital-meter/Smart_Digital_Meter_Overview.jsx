"use client";
import Link from "next/link";
import ProductSidebar from "../../components/ProductSidebar";
import { useLanguage } from "../../context/LanguageContext";

const PDF = "/docs/Smart_Digital_Meter_Overview.pdf";

export default function SmartDigitalMeterOverview() {
  const { lang } = useLanguage();
  const en = lang !== "de";

  const advantages = [
    {
      title: en ? "High accuracy" : "Hohe Genauigkeit",
      desc: en
        ? "Built on Infineon's TLI4971 — the most accurate coreless magnetic current sensor available."
        : "Basiert auf dem Infineon TLI4971 — dem genauesten kernlosen magnetischen Stromsensor.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: en ? "Compact design" : "Kompaktes Design",
      desc: en
        ? "A small footprint that fits both residential and industrial installations."
        : "Geringer Platzbedarf für Wohn- und Industrieinstallationen.",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    },
    {
      title: en ? "Non-intrusive measurement" : "Berührungslose Messung",
      desc: en
        ? "Coreless magnetic sensing measures current without breaking the circuit."
        : "Kernlose magnetische Erfassung misst Strom, ohne den Stromkreis zu unterbrechen.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: en ? "Scalability" : "Skalierbarkeit",
      desc: en
        ? "Designed to support large-scale rollouts across entire grids."
        : "Konzipiert für großflächige Rollouts über ganze Netze hinweg.",
      icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
    },
    {
      title: en ? "Smart-grid ready" : "Smart-Grid-fähig",
      desc: en
        ? "Ready for integration into modern smart-grid infrastructure."
        : "Bereit für die Integration in moderne Smart-Grid-Infrastruktur.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
  ];

  const steps = en
    ? [
        "Finalize the product design",
        "Obtain certifications",
        "Pilot deployment with government partners",
        "Scale manufacturing",
      ]
    : [
        "Produktdesign finalisieren",
        "Zertifizierungen erhalten",
        "Pilotbereitstellung mit Regierungspartnern",
        "Fertigung skalieren",
      ];

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[150px]"
        style={{
          background:
            "linear-gradient(135deg, #0a2417 0%, #0f3520 45%, #1e6b3e 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-green-300/10 blur-3xl" />

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
            <span className="font-medium text-white">Smart Digital Meter</span>
          </nav>

          <div className="max-w-3xl pb-24 pt-4">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
              <span className="text-xs font-semibold uppercase tracking-wide text-white">
                {en ? "Prototype validated" : "Prototyp validiert"}
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
              {en ? "Smart Digital Meter" : "Smart Digital Meter"}
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">
                {en ? "for Home & Industry" : "für Haus & Industrie"}
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              {en
                ? "ChipGlobe is developing an advanced Smart Digital Meter for accurate, real-time electricity consumption monitoring. A functional prototype has already been successfully built and validated."
                : "ChipGlobe entwickelt einen fortschrittlichen Smart Digital Meter für die genaue Echtzeit-Überwachung des Stromverbrauchs. Ein funktionsfähiger Prototyp wurde bereits erfolgreich gebaut und validiert."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3 text-sm font-bold text-[#174f2e] transition-all duration-300 hover:scale-105"
              >
                {en ? "Request documentation" : "Dokumentation anfragen"}
              </Link>
              <a
                href={PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {en
                  ? "Download overview (PDF)"
                  : "Übersicht herunterladen (PDF)"}
              </a>
            </div>
          </div>
        </div>

        <svg
          className="block w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="fill-gray-50 dark:fill-gray-900"
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />
            <div className="flex-1 min-w-0 space-y-16">
              {/* Technology + Prototype */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
                    {en ? "How it works" : "So funktioniert es"}
                  </h2>
                  <p className="text-body-color dark:text-gray-300 leading-relaxed mb-5">
                    {en
                      ? "The system measures real-time voltage and current, calculates power and integrates it over time to determine energy consumption in kilowatt-hours (kWh). It is based on Infineon's TLI4971, the most accurate coreless magnetic current sensor available."
                      : "Das System misst Spannung und Strom in Echtzeit, berechnet die Leistung und integriert sie über die Zeit, um den Energieverbrauch in Kilowattstunden (kWh) zu bestimmen. Es basiert auf dem Infineon TLI4971, dem genauesten kernlosen magnetischen Stromsensor."}
                  </p>
                  <div className="inline-flex items-center gap-3 rounded-xl bg-primary/5 dark:bg-primary/20 px-5 py-3">
                    <span className="text-sm font-medium text-body-color dark:text-gray-300">
                      {en ? "Power" : "Leistung"}
                    </span>
                    <span className="text-xl font-bold text-primary dark:text-green-400">
                      P = V × I
                    </span>
                    <span className="text-sm text-body-color dark:text-gray-400">
                      → kWh
                    </span>
                  </div>
                </div>

                <div
                  className="rounded-2xl p-8 text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #0a2318 0%, #174f2e 60%, #1e6b3e 100%)",
                  }}
                >
                  <h2 className="text-2xl font-bold mb-3">
                    {en ? "Prototype status" : "Prototyp-Status"}
                  </h2>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {en
                      ? "A working DC Smart Meter prototype exists, including real-time measurement and processing. It is ready for productization — final industrialization and certification are pending."
                      : "Ein funktionierender DC-Smart-Meter-Prototyp existiert, einschließlich Echtzeitmessung und -verarbeitung. Er ist bereit für die Produktisierung — finale Industrialisierung und Zertifizierung stehen noch aus."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(en
                      ? [
                          "Real-time measurement",
                          "Processing validated",
                          "Ready for productization",
                        ]
                      : [
                          "Echtzeitmessung",
                          "Verarbeitung validiert",
                          "Bereit für Produktisierung",
                        ]
                    ).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key advantages */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-8 text-center">
                  {en ? "Key advantages" : "Wesentliche Vorteile"}
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {advantages.map((a) => (
                    <div
                      key={a.title}
                      className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                    >
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-green-400">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={a.icon}
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                        {a.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-body-color dark:text-gray-400">
                        {a.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market relevance + Track record */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
                    {en ? "Market relevance" : "Marktrelevanz"}
                  </h2>
                  <p className="text-body-color dark:text-gray-300 leading-relaxed">
                    {en
                      ? "Highly suitable for countries like Bangladesh, supporting large-scale smart metering, improved billing accuracy and grid transparency."
                      : "Besonders geeignet für Länder wie Bangladesch — unterstützt großflächiges Smart Metering, höhere Abrechnungsgenauigkeit und Netztransparenz."}
                  </p>
                </div>
                <div className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
                    {en ? "Track record" : "Erfolgsbilanz"}
                  </h2>
                  <p className="text-body-color dark:text-gray-300 leading-relaxed">
                    {en
                      ? "ChipGlobe has successfully brought hardware products to market, including the "
                      : "ChipGlobe hat bereits erfolgreich Hardwareprodukte auf den Markt gebracht, darunter den "}
                    <Link
                      href="/sq-system/sq-panel"
                      className="font-semibold text-primary dark:text-green-400 hover:underline"
                    >
                      {en
                        ? "SQ-Panel air quality sensor"
                        : "SQ-Panel-Luftqualitätssensor"}
                    </Link>
                    {en
                      ? ", demonstrating strong execution capabilities."
                      : " — und damit starke Umsetzungskompetenz bewiesen."}
                  </p>
                </div>
              </div>

              {/* Next steps */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-8 text-center">
                  {en ? "Next steps" : "Nächste Schritte"}
                </h2>
                <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {steps.map((step, i) => (
                    <li
                      key={step}
                      className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                      <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <p className="text-sm font-medium text-black dark:text-white">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact CTA */}
              <div
                className="rounded-2xl p-10 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, #0a2318 0%, #174f2e 60%, #1e6b3e 100%)",
                }}
              >
                <h2 className="text-2xl font-bold text-white mb-3">
                  {en
                    ? "Interested in a pilot?"
                    : "Interesse an einem Pilotprojekt?"}
                </h2>
                <p className="text-green-100/80 mb-7 max-w-2xl mx-auto">
                  {en
                    ? "Additional technical documentation and pilot discussions are available upon request."
                    : "Weitere technische Dokumentation und Pilotgespräche sind auf Anfrage verfügbar."}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-[#174f2e] transition-all duration-300 hover:scale-105"
                >
                  {en ? "Get in touch" : "Kontakt aufnehmen"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
