"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function PropertyManagersClient() {
  const { lang } = useLanguage();
  const en = lang === "en";

  const reasons = [
    {
      en: {
        title: "1. Protect tenants and property",
        desc: "The Carenuity SQ-Panel helps monitor air quality, humidity, and temperature in real time—crucial for maintaining safe and comfortable living environments. It helps prevent issues like mold, poor air circulation, or overheating.",
      },
      de: {
        title: "1. Mieter und Eigentum schützen",
        desc: "Das Carenuity SQ-Panel überwacht in Echtzeit die Luftqualität, Luftfeuchtigkeit und Temperatur - entscheidend für ein sicheres und komfortables Wohnumfeld. So können Probleme wie Schimmelbildung, schlechte Luftzirkulation oder Überhitzung frühzeitig verhindert werden.",
      },
    },
    {
      en: {
        title: "2. Reduce maintenance costs",
        desc: "Early warnings for environmental issues can help property managers take action before problems become costly repairs—saving time, money, and tenant complaints.",
      },
      de: {
        title: "2. Wartungskosten reduzieren",
        desc: "Frühzeitige Warnungen vor Umweltproblemen ermöglichen schnelles Handeln, bevor kostspielige Reparaturen notwendig werden - das spart Zeit, Geld und Beschwerden von Mietern.",
      },
    },
    {
      en: {
        title: "3. Enhance property value and appeal",
        desc: "Smart, health-conscious building technologies are in high demand. The SQ-Panel adds modern functionality that improves tenant satisfaction and makes your properties more competitive.",
      },
      de: {
        title: "3. Wert und Attraktivität der Immobilie steigern",
        desc: "Moderne, gesundheitsbewusste Gebäudetechnologien sind stark gefragt. Das SQ-Panel bietet smarte Funktionen, die die Zufriedenheit der Mieter erhöhen und Ihre Immobilie wettbewerbsfähiger machen.",
      },
    },
    {
      en: {
        title: "4. Support regulatory compliance and sustainability goals",
        desc: "Whether it's meeting indoor air quality standards or ESG targets, the SQ-Panel provides actionable data to help comply with local regulations and sustainability certifications.",
      },
      de: {
        title:
          "4. Einhaltung gesetzlicher Vorschriften und Nachhaltigkeitsziele",
        desc: "Ob zur Erfüllung gesetzlicher Anforderungen an die Luftqualität oder zur Erreichung von ESG-Zielen - das SQ-Panel liefert verwertbare Daten zur Einhaltung von Standards und Nachhaltigkeitszertifizierungen.",
      },
    },
    {
      en: {
        title: "5. Easy installation and remote monitoring",
        desc: "With simple setup and integration into existing systems, the SQ-Panel allows remote access and centralized monitoring—perfect for managing multiple units or buildings efficiently.",
      },
      de: {
        title: "5. Einfache Installation und Fernüberwachung",
        desc: "Dank unkomplizierter Einrichtung und Integration in bestehende Systeme ist eine zentrale und ortsunabhängige Überwachung möglich - ideal für die Verwaltung mehrerer Einheiten oder Gebäude.",
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
            <span className="font-medium text-white">
              {en ? "Property Managers" : "Immobilienverwalter"}
            </span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {en ? "Property Management" : "Immobilienverwaltung"}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {en ? "Property Managers" : "Immobilienverwalter"}
              <br />
              <span className="text-green-300">
                {en
                  ? "Smarter Buildings, Happier Tenants"
                  : "Klügere Gebäude, zufriedenere Mieter"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "Maintain safe, comfortable, and efficient living and working spaces."
                : "Erhalten Sie sichere, komfortable und effiziente Wohn- und Arbeitsräume."}
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
                {en ? "Property Managers" : "Immobilienverwalter"}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-10">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-56 shrink-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
                    <img
                      src="/images/products/sq-panel/property.png"
                      alt="Property Managers"
                      className="object-contain max-h-64 w-full"
                    />
                  </div>
                  <div className="flex-1 p-6 space-y-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {en ? (
                        <>
                          <strong>Property Managers</strong> are responsible for
                          maintaining and overseeing residential, commercial, or
                          mixed-use buildings to ensure they operate smoothly,
                          safely, and efficiently. Their role includes managing
                          tenant satisfaction, maintaining building systems, and
                          complying with health and safety regulations. As
                          awareness of indoor environmental quality grows,
                          property managers are increasingly expected to provide
                          healthier, more comfortable living and working spaces.
                        </>
                      ) : (
                        <>
                          <strong>Immobilienverwalter</strong> sind für die
                          Instandhaltung und Überwachung von Wohn-, Gewerbe-
                          oder gemischt genutzten Gebäuden verantwortlich. Zu
                          ihren Aufgaben gehören die Verwaltung der
                          Mieterzufriedenheit, die Wartung von Gebäudesystemen
                          und die Einhaltung von Gesundheits- und
                          Sicherheitsvorschriften.
                        </>
                      )}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {en ? (
                        <>
                          The <strong>SQ panel</strong> supports property
                          managers by delivering clear, real-time data on indoor
                          air quality, temperature, humidity, pressure, CO₂,
                          TVOC, and presence. This insight enables proactive
                          maintenance of HVAC systems, ensures compliance with
                          ventilation standards, and helps identify potential
                          environmental concerns before they become tenant
                          complaints.
                        </>
                      ) : (
                        <>
                          Das <strong>SQ-Panel</strong> unterstützt
                          Immobilienverwalter mit klaren Echtzeitdaten zu
                          Raumluftqualität, Temperatur, Luftfeuchtigkeit, Druck,
                          CO₂, TVOC und Anwesenheit. Diese Erkenntnisse
                          ermöglichen proaktive Wartung und helfen dabei,
                          potenzielle Probleme zu erkennen, bevor sie zu
                          Mieterbeschwerden werden.
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {en
                  ? "Reasons Why Property Managers Should Buy the Carenuity SQ-Panel"
                  : "Gründe, warum Immobilienverwalter das Carenuity SQ-Panel kaufen sollten"}
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
