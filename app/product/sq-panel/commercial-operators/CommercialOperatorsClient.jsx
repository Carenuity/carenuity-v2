"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function CommercialOperatorsClient() {
  const { lang } = useLanguage();
  const en = lang === "en";

  const reasons = [
    {
      en: {
        title: "1. Protect people, enhance reputation",
        desc: "Indoor air quality, temperature, and humidity directly affect health, comfort, and productivity. By installing the SQ-Panel, you show your commitment to a safe and healthy environment—whether for customers, tenants, or employees.",
      },
      de: {
        title: "1. Menschen schützen, Image stärken",
        desc: "Luftqualität, Temperatur und Luftfeuchtigkeit haben direkten Einfluss auf Gesundheit, Komfort und Produktivität. Mit dem SQ-Panel zeigen Sie Verantwortung für ein sicheres und gesundes Umfeld.",
      },
    },
    {
      en: {
        title: "2. Prevent costly damage",
        desc: "The SQ-Panel alerts you to conditions that can lead to mold, equipment failure, or poor air quality. Early detection means you can act fast—saving on repairs, liability, and operational downtime.",
      },
      de: {
        title: "2. Teure Schäden vermeiden",
        desc: "Das SQ-Panel warnt Sie frühzeitig bei Risiken wie Schimmelbildung, Geräteausfällen oder schlechter Luftqualität. So können Sie rechtzeitig eingreifen und Reparaturkosten, Haftungsrisiken und Betriebsausfälle vermeiden.",
      },
    },
    {
      en: {
        title: "3. Meet sustainability and compliance goals",
        desc: "Environmental monitoring is key to meeting modern ESG and workplace safety standards. The SQ-Panel provides measurable data to support certifications like LEED, WELL, or ISO standards.",
      },
      de: {
        title: "3. Nachhaltigkeits- und Compliance-Ziele erfüllen",
        desc: "Umweltüberwachung ist zentral für ESG-Ziele und Arbeitssicherheitsstandards. Das SQ-Panel liefert messbare Daten zur Unterstützung von Zertifizierungen wie LEED, WELL oder ISO.",
      },
    },
    {
      en: {
        title: "4. Smart building integration",
        desc: "Whether managing an office, retail space, hotel, or residential complex, the SQ-Panel connects easily with HVAC systems, building automation tools, and cloud platforms—making buildings smarter, greener, and more efficient.",
      },
      de: {
        title: "4. Integration in smarte Gebäudetechnik",
        desc: "Ob Bürogebäude, Verkaufsflächen, Hotels oder Wohnanlagen - das SQ-Panel lässt sich einfach mit HLK-Systemen, Gebäudeautomatisierung und Cloud-Plattformen vernetzen.",
      },
    },
    {
      en: {
        title: "5. Scalable across locations",
        desc: "The Carenuity SQ-Panel supports scalable deployment, remote access, and centralized monitoring—ideal for operators managing several properties or large facilities.",
      },
      de: {
        title: "5. Skalierbar für mehrere Standorte",
        desc: "Das Carenuity SQ-Panel unterstützt eine skalierbare Nutzung mit Fernzugriff und zentralem Monitoring - perfekt für Betreiber mit mehreren Liegenschaften.",
      },
    },
    {
      en: {
        title: "6. Built for reliability by experts",
        desc: "Backed by ChipGlobe's and Carenuity's expertise in embedded systems and industrial-grade tech, the SQ-Panel is engineered for long-term, 24/7 reliability in demanding environments.",
      },
      de: {
        title: "6. Zuverlässigkeit made by Experten",
        desc: "Entwickelt mit der Industriekompetenz von ChipGlobe und Carenuity bietet das SQ-Panel langlebige, hochverfügbare Technologie für den Dauerbetrieb in anspruchsvollen Umgebungen.",
      },
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
            <span className="font-medium text-white">Commercial Operators</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {en ? "Commercial Use" : "Gewerbliche Nutzung"}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {en ? "Commercial Operators" : "Gewerbliche Betreiber"}
              <br />
              <span className="text-green-300">
                {en
                  ? "Smarter Indoor Environments"
                  : "Intelligentere Innenräume"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "Maintain safe, comfortable, and efficient environments for employees, customers, and visitors."
                : "Erhalten Sie sichere, komfortable und effiziente Umgebungen für Mitarbeiter, Kunden und Besucher."}
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
                {en ? "Commercial Operators" : "Gewerbliche Betreiber"}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-10">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-56 shrink-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/products/sq-panel/commercial.png"
                      alt="Commercial Operators"
                      className="object-contain max-h-64 w-full"
                    />
                  </div>
                  <div className="flex-1 p-6 space-y-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {en
                        ? "Commercial Operators—such as facility managers, office administrators, and building owners—are responsible for maintaining safe, comfortable, and efficient environments for employees, customers, and visitors. Ensuring high air quality and environmental comfort is increasingly becoming a priority, especially in workplaces, hospitality venues, and retail environments."
                        : "Gewerbliche Betreiber - wie Facility Manager, Büroadministratoren und Gebäudeeigentümer - sind für die Aufrechterhaltung einer sicheren, komfortablen und effizienten Umgebung verantwortlich. Die Gewährleistung einer hohen Luftqualität wird zunehmend zu einer Priorität."}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {en
                        ? "The SQ panel serves as a vital tool for Commercial Operators by providing real-time, visible data on key indoor environmental conditions including air quality, temperature, humidity, atmospheric pressure, carbon dioxide (CO₂), TVOC, and presence detection."
                        : "Das SQ-Panel dient als wichtiges Werkzeug für gewerbliche Betreiber, indem es in Echtzeit sichtbare Daten über wichtige Raumklimabedingungen liefert einschließlich Luftqualität, Temperatur, Luftfeuchtigkeit, CO₂, TVOC und Anwesenheitserkennung."}
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {en
                  ? "Reasons Why Commercial Operators Should Buy the Carenuity SQ-Panel"
                  : "Gründe, warum gewerbliche Betreiber das Carenuity SQ-Panel kaufen sollten"}
              </h2>
              <div className="space-y-4 mb-10">
                {reasons.map((r) => (
                  <div
                    key={r.en.title}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5"
                  >
                    <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-2">
                      {en ? r.en.title : r.de.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {en ? r.en.desc : r.de.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/product/sq-panel/launch-page"
                  className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-6 py-2.5 text-sm font-semibold text-white transition duration-300"
                >
                  {en ? "Get the SQ-Panel now" : "SQ-Panel jetzt kaufen"}
                </Link>
                <Link
                  href="/product/sq-panel/aqi-insights"
                  className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary dark:text-green-400 hover:bg-primary/5 transition duration-300"
                >
                  {en ? "Learn more on SQ-Panel" : "Mehr zum SQ-Panel"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
