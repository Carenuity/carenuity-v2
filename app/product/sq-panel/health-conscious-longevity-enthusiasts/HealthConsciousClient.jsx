"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function HealthConsciousClient() {
  const { lang } = useLanguage();
  const en = lang === "en";

  const reasons = [
    {
      en: {
        title: "1. Proactive environmental sensing",
        desc: "The SQ-Panel continuously monitors air quality, temperature, humidity, and more. Having real-time insight into your environment helps you proactively reduce exposure to harmful conditions that accelerate aging or cause chronic issues.",
      },
      de: {
        title: "1. Proaktive Umweltüberwachung",
        desc: "Das SQ-Panel überwacht kontinuierlich Luftqualität, Temperatur, Luftfeuchtigkeit und mehr. Wer seine Gesundheit langfristig schützen will, profitiert von Echtzeitdaten zur Reduzierung gesundheitsschädlicher Umwelteinflüsse.",
      },
    },
    {
      en: {
        title: "2. Smart alerts for a safer lifestyle",
        desc: "Whether it's detecting harmful gases, unusual humidity that could lead to mold, or temperature fluctuations — the panel notifies you immediately. It's like having a silent guardian keeping your living or working space optimized for long-term wellness.",
      },
      de: {
        title: "2. Intelligente Warnungen für ein sicheres Leben",
        desc: "Ob schädliche Gase, zu hohe Luftfeuchtigkeit oder plötzliche Temperaturschwankungen - das Panel warnt Sie sofort. Es ist wie ein stiller Wächter, der Ihr Zuhause oder Büro auf gesundheitliche Risiken prüft.",
      },
    },
    {
      en: {
        title: "3. Data-driven longevity",
        desc: "Track trends over time to understand how your environment impacts your sleep, energy, and well-being. Make smarter lifestyle choices based on actual conditions, not guesswork.",
      },
      de: {
        title: "3. Datengesteuerte Langlebigkeit",
        desc: "Verfolgen Sie Umwelttrends über Zeiträume hinweg, um zu verstehen, wie Ihre Umgebung Ihren Schlaf, Ihre Energie und Ihr Wohlbefinden beeinflusst. Treffen Sie fundierte Entscheidungen für Ihre Gesundheit.",
      },
    },
    {
      en: {
        title: "4. Integrates with your wellness ecosystem",
        desc: "The Carenuity SQ-Panel can integrate with smart homes, HVAC systems, and wellness platforms. When CO₂ is high, windows open. When the air is too dry, your humidifier activates. It optimizes your space to support better breathing and deeper sleep.",
      },
      de: {
        title: "4. Integriert sich in Ihr Wellness-Ökosystem",
        desc: "Das Carenuity SQ-Panel lässt sich in Smart-Home-Systeme, Lüftungsanlagen oder Gesundheitsplattformen integrieren. Beispiel: Bei zu hoher CO₂-Konzentration öffnen sich Fenster automatisch. Ist die Luft zu trocken, startet der Luftbefeuchter.",
      },
    },
    {
      en: {
        title: "5. Built by experts in embedded health tech",
        desc: "Carenuity and ChipGlobe bring years of experience in embedded systems for healthcare and safety. This isn't a gimmick — it's engineered with precision for people who take health seriously.",
      },
      de: {
        title:
          "5. Entwickelt von Experten für eingebettete Gesundheitstechnologie",
        desc: "Carenuity und ChipGlobe bringen jahrelange Erfahrung in der Entwicklung medizinischer und sicherheitsrelevanter Systeme mit. Das SQ-Panel ist ein hochpräzises Werkzeug für alle, die Gesundheit ernst nehmen.",
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
              Health-Conscious Longevity Enthusiasts
            </span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {en ? "Longevity & Health" : "Gesundheit & Langlebigkeit"}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {en
                ? "Health-Conscious Longevity Enthusiasts"
                : "Gesundheitsbewusste Langlebigkeitsbegeisterte"}
              <br />
              <span className="text-green-300">
                {en
                  ? "Optimize Your Environment for Life"
                  : "Optimieren Sie Ihre Umgebung für Ihr Leben"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "Extend your healthspan by actively managing all aspects of your physical environment."
                : "Verlängern Sie Ihre Gesundheitsspanne, indem Sie alle Aspekte Ihrer körperlichen Umgebung aktiv verwalten."}
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
                {en
                  ? "Health-Conscious Longevity Enthusiasts"
                  : "Gesundheitsbewusste Langlebigkeitsbegeisterte"}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-10">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-56 shrink-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/products/sq-panel/health.png"
                      alt="Health Conscious"
                      className="object-contain max-h-64 w-full"
                    />
                  </div>
                  <div className="flex-1 p-6 space-y-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {en
                        ? "Health Conscious Longevity Enthusiasts are individuals dedicated to extending their healthspan by actively managing all aspects of their physical and mental well-being. They focus not only on diet, exercise, and sleep but also on optimizing their daily environment to reduce long-term health risks. These individuals are highly informed, often integrating technology and data into their wellness routines."
                        : "Gesundheitsbewusste Langlebigkeitsbegeisterte sind Personen, die sich dafür einsetzen, ihre Gesundheit zu verlängern, indem sie alle Aspekte ihres körperlichen und geistigen Wohlbefindens aktiv verwalten. Sie konzentrieren sich nicht nur auf Ernährung, Bewegung und Schlaf, sondern auch auf die Optimierung ihrer täglichen Umgebung."}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {en
                        ? "The SQ panel is a powerful tool for this lifestyle, providing real-time insights into key indoor environmental factors that directly affect health. By displaying data on air quality, temperature, humidity, air pressure, CO₂, TVOC, and presence detection, the panel helps users identify and respond to invisible threats in their surroundings."
                        : "Das SQ-Panel ist ein leistungsstarkes Tool für diesen Lebensstil und bietet Echtzeit-Einblicke in wichtige Raumklimafaktoren, die sich direkt auf die Gesundheit auswirken. Es ermöglicht Langlebigkeitsbegeisterten, ihre Umgebung für besseren Schlaf, Konzentration und allgemeines Wohlbefinden zu optimieren."}
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {en
                  ? "Reasons Why Health-Conscious Longevity Enthusiasts Should Buy the Carenuity SQ-Panel"
                  : "Warum gesundheitsbewusste Langlebigkeitsbegeisterte das Carenuity SQ-Panel kaufen sollten"}
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
