"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function SmartCareProvidersClient() {
  const { lang } = useLanguage();
  const en = lang === "en";

  const reasons = [
    {
      en: {
        title: "1. Enhance resident safety and comfort",
        desc: "The Carenuity SQ-Panel continuously monitors indoor environmental conditions such as air quality, humidity, and temperature—ensuring safer, healthier living spaces for patients, residents, or elderly individuals under care.",
      },
      de: {
        title: "1. Sicherheit und Komfort der Bewohner erhöhen",
        desc: "Das Carenuity SQ-Panel überwacht kontinuierlich die Raumluftqualität, Luftfeuchtigkeit und Temperatur - und sorgt so für sichere, gesunde Lebensräume für Patienten, Bewohner oder pflegebedürftige ältere Menschen.",
      },
    },
    {
      en: {
        title: "2. Early detection for preventive action",
        desc: "By identifying issues like poor ventilation, excessive moisture, or temperature fluctuations early on, care providers can intervene before conditions escalate into health risks or facility damage.",
      },
      de: {
        title: "2. Früherkennung für vorbeugende Maßnahmen",
        desc: "Durch die frühzeitige Erkennung von Problemen wie schlechter Belüftung, übermäßiger Feuchtigkeit oder Temperaturschwankungen können Pflegekräfte eingreifen, bevor Gesundheitsrisiken oder Gebäudeschäden entstehen.",
      },
    },
    {
      en: {
        title: "3. Data-driven care decisions",
        desc: "With real-time environmental data at their fingertips, care teams can tailor responses, improve patient outcomes, and provide more personalized care, particularly in assisted living or medical environments.",
      },
      de: {
        title: "3. Datengesteuerte Pflegeentscheidungen",
        desc: "Mit Echtzeitdaten zur Umgebung können Pflegeteams gezielt reagieren, die Betreuung verbessern und individuellere Pflege bieten - besonders in betreuten Wohnformen oder medizinischen Einrichtungen.",
      },
    },
    {
      en: {
        title: "4. Support compliance and accreditation",
        desc: "Regulatory compliance and health standards are vital in care settings. The SQ-Panel helps meet environmental quality guidelines and supports documentation for audits and certifications.",
      },
      de: {
        title: "4. Compliance und Akkreditierung unterstützen",
        desc: "Regulatorische Anforderungen und Gesundheitsstandards sind in der Pflege essenziell. Das SQ-Panel unterstützt die Einhaltung von Umweltrichtlinien und erleichtert Dokumentation bei Audits und Zertifizierungen.",
      },
    },
    {
      en: {
        title: "5. Seamless integration and remote monitoring",
        desc: "The device is easy to install and allows remote monitoring—enabling care staff to manage multiple rooms or locations efficiently and proactively, even with limited resources.",
      },
      de: {
        title: "5. Nahtlose Integration und Fernüberwachung",
        desc: "Das Gerät ist leicht zu installieren und ermöglicht die Fernüberwachung - so können Pflegekräfte auch bei begrenzten Ressourcen mehrere Räume oder Standorte effizient betreuen.",
      },
    },
    {
      en: {
        title: "6. Reinforce trust and professionalism",
        desc: "Using advanced technology like the SQ-Panel demonstrates a provider's commitment to quality care, building trust with families, patients, and regulatory bodies.",
      },
      de: {
        title: "6. Vertrauen und Professionalität stärken",
        desc: "Der Einsatz moderner Technologie wie des SQ-Panels zeigt Engagement für hochwertige Pflege und stärkt das Vertrauen von Familien, Patienten und Aufsichtsbehörden.",
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
              {en ? "Smart Care Providers" : "Smart Care Anbieter"}
            </span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {en ? "Healthcare & Care" : "Gesundheitsversorgung & Pflege"}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {en ? "Smart Care Providers" : "Smart Care Anbieter"}
              <br />
              <span className="text-green-300">
                {en
                  ? "Technology-Driven Patient Environments"
                  : "Technologiegestützte Patientenumgebungen"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "Ensure optimal conditions for patient recovery and well-being."
                : "Gewährleisten Sie optimale Bedingungen für die Genesung und das Wohlbefinden der Patienten."}
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
                {en ? "Smart Care Providers" : "Smart Care Anbieter"}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-10">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-56 shrink-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
                    <img
                      src="/images/products/sq-panel/care.png"
                      alt="Smart Care Providers"
                      className="object-contain max-h-64 w-full"
                    />
                  </div>
                  <div className="flex-1 p-6 space-y-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {en ? (
                        <>
                          <strong>Smart Care Providers</strong> are healthcare
                          professionals and organizations that leverage
                          technology to enhance patient care, improve
                          operational efficiency, and promote wellness. These
                          providers often focus on creating environments that
                          support the health and comfort of individuals,
                          especially in settings like hospitals, nursing homes,
                          rehabilitation centers, and home care services.
                        </>
                      ) : (
                        <>
                          <strong>Smart Care Providers</strong> sind
                          medizinische Fachkräfte und Organisationen, die
                          Technologie nutzen, um die Patientenversorgung zu
                          verbessern und das Wohlbefinden zu fördern. Sie
                          konzentrieren sich auf die Schaffung von Umgebungen,
                          die Gesundheit und Wohlbefinden in Krankenhäusern,
                          Pflegeheimen, Rehabilitationszentren und häuslichen
                          Pflegediensten unterstützen.
                        </>
                      )}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {en ? (
                        <>
                          The <strong>SQ panel</strong> is an essential tool for
                          Smart Care Providers, offering real-time monitoring of
                          indoor air quality, temperature, humidity, pressure,
                          CO₂, TVOC, and presence. By continuously displaying
                          these key metrics, the panel allows care providers to
                          maintain optimal conditions for patients, quickly
                          adjust the environment as needed, and ensure
                          compliance with health and safety regulations.
                        </>
                      ) : (
                        <>
                          Das <strong>SQ-Panel</strong> ist ein unverzichtbares
                          Tool für Smart-Care-Anbieter mit Echtzeitüberwachung
                          der Raumluftqualität, Temperatur, Luftfeuchtigkeit,
                          Druck, CO₂, TVOC und Anwesenheit. Es ermöglicht
                          Pflegedienstleistern, optimale Bedingungen
                          aufrechtzuerhalten und die Einhaltung von Gesundheits-
                          und Sicherheitsvorschriften sicherzustellen.
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {en
                  ? "Reasons Why Smart Care Providers Should Buy the Carenuity SQ-Panel"
                  : "Gründe, warum Smart Care Anbieter das Carenuity SQ-Panel kaufen sollten"}
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
