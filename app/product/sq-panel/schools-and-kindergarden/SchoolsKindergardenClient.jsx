"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function SchoolsKindergardenClient() {
  const { lang } = useLanguage();
  const en = lang === "en";

  const reasons = [
    {
      en: {
        title: "1. Protect Children's Health",
        desc: "Young children are more sensitive to poor air quality. The SQ-Panel continuously monitors harmful substances like VOCs and CO₂, helping reduce risks of headaches, fatigue, asthma, or long-term respiratory issues.",
      },
      de: {
        title: "1. Schutz der Gesundheit von Kindern",
        desc: "Kleine Kinder reagieren besonders empfindlich auf schlechte Luftqualität. Das SQ-Panel überwacht kontinuierlich Schadstoffe wie VOCs und CO₂ und trägt dazu bei, das Risiko von Kopfschmerzen, Müdigkeit, Asthma oder langfristigen Atemproblemen zu verringern.",
      },
    },
    {
      en: {
        title: "2. Improve Learning and Concentration",
        desc: "Studies show that fresh, clean air boosts attention spans, memory, and academic performance. By ensuring optimal air quality, the SQ-Panel supports better learning environments.",
      },
      de: {
        title: "2. Verbesserung von Lernen und Konzentration",
        desc: "Studien zeigen, dass frische, saubere Luft die Aufmerksamkeitsspanne, das Gedächtnis und die schulischen Leistungen verbessert. Durch die Gewährleistung einer optimalen Luftqualität unterstützt das SQ-Panel eine bessere Lernumgebung.",
      },
    },
    {
      en: {
        title: "3. Immediate Alerts for Action",
        desc: "The device provides real-time data and alerts when air quality drops below healthy levels, so teachers or staff can quickly ventilate rooms or adjust conditions.",
      },
      de: {
        title: "3. Sofortige Warnungen",
        desc: "Das Gerät liefert Echtzeitdaten und -warnungen, wenn die Luftqualität unter ein gesundes Niveau sinkt, so dass Lehrer oder Mitarbeiter schnell lüften oder die Bedingungen anpassen können.",
      },
    },
    {
      en: {
        title: "4. Compliance with Health Standards",
        desc: "Many local regulations and health guidelines now emphasize indoor air quality. The SQ-Panel helps schools document and maintain compliance effortlessly.",
      },
      de: {
        title: "4. Einhaltung von Gesundheitsstandards",
        desc: "Viele örtliche Verordnungen und Gesundheitsrichtlinien legen heute Wert auf die Luftqualität in Innenräumen. Mit dem SQ-Panel können Schulen die Einhaltung dieser Vorschriften mühelos dokumentieren und einhalten.",
      },
    },
    {
      en: {
        title: "5. Build Trust with Parents",
        desc: "Parents value schools and kindergartens that actively safeguard their children's environment. Showing your commitment to healthy indoor air enhances your reputation and builds trust.",
      },
      de: {
        title: "5. Vertrauen bei Eltern aufbauen",
        desc: "Eltern schätzen Schulen und Kindergärten, die sich aktiv für die Umwelt ihrer Kinder einsetzen. Wenn Sie Ihr Engagement für gesunde Innenraumluft zeigen, verbessert das Ihren Ruf und schafft Vertrauen.",
      },
    },
    {
      en: {
        title: "6. Easy to Use and Maintain",
        desc: "Carenuity's SQ-Panel is designed to be user-friendly, requiring minimal training or upkeep, so staff can focus on teaching, not managing complex systems.",
      },
      de: {
        title: "6. Einfache Bedienung und Wartung",
        desc: "Das SQ-Panel von Carenuity ist benutzerfreundlich gestaltet und erfordert nur minimale Schulung oder Wartung, so dass sich das Personal auf den Unterricht konzentrieren kann.",
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
              {en ? "Schools and Kindergartens" : "Schulen und Kindergärten"}
            </span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {en ? "Education & Child Care" : "Bildung & Kinderbetreuung"}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {en ? "Schools and Kindergartens" : "Schulen und Kindergärten"}
              <br />
              <span className="text-green-300">
                {en
                  ? "Healthier Air for Better Learning"
                  : "Gesündere Luft für besseres Lernen"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "Protect children's health and improve learning outcomes with real-time air quality monitoring."
                : "Schützen Sie die Gesundheit der Kinder und verbessern Sie die Lernergebnisse mit Echtzeit-Luftqualitätsüberwachung."}
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
                {en ? "Schools and Kindergartens" : "Schulen und Kindergärten"}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-10">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-56 shrink-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/products/sq-panel/school.png"
                      alt="Schools and Kindergartens"
                      className="object-contain max-h-64 w-full"
                    />
                  </div>
                  <div className="flex-1 p-6 space-y-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {en
                        ? "The SQ-Panel helps monitor and improve indoor air quality by measuring parameters like VOCs, CO₂, humidity, and temperature. In schools and kindergartens, where children spend many hours indoors, maintaining healthy air is critical for concentration, learning, and overall well-being. Poor air quality can lead to headaches, fatigue, and reduced cognitive performance."
                        : "Das SQ-Panel hilft bei der Überwachung und Verbesserung der Luftqualität in Innenräumen durch Messung von Parametern wie VOC, CO₂, Luftfeuchtigkeit und Temperatur. In Schulen und Kindergärten, in denen Kinder viele Stunden in Innenräumen verbringen, ist eine gesunde Luft entscheidend für Konzentration, Lernen und allgemeines Wohlbefinden."}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {en
                        ? "By using the SQ-Panel, schools and kindergartens can detect when ventilation is needed, ensure classrooms stay within recommended air quality standards, and create a healthier environment that supports children's development and learning outcomes."
                        : "Mit dem SQ-Panel können Schulen und Kindergärten erkennen, wann gelüftet werden muss, und sicherstellen, dass Klassenräume die empfohlenen Luftqualitätsstandards einhalten und eine gesündere Umgebung schaffen, die die Entwicklung und die Lernergebnisse der Kinder unterstützt."}
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {en
                  ? "Reasons Why Schools and Kindergartens Should Buy the Carenuity SQ-Panel"
                  : "Gründe, warum Schulen und Kindergärten das Carenuity SQ-Panel kaufen sollten"}
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
