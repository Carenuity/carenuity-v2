"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function SmartHomeEnthusiastsClient() {
  const { lang } = useLanguage();
  const en = lang === "en";

  const reasons = [
    { en: { title: "1. Smarter living starts with healthier air", desc: "The Carenuity SQ-Panel continuously monitors indoor air quality, humidity, and temperature — ensuring your home environment is always optimized for comfort, health, and peace of mind." }, de: { title: "1. Intelligenter wohnen beginnt mit gesünderer Luft", desc: "Das Carenuity SQ-Panel überwacht kontinuierlich die Luftqualität, Luftfeuchtigkeit und Temperatur in Innenräumen - für ein Zuhause, das stets auf Komfort, Gesundheit und Wohlbefinden optimiert ist." } },
    { en: { title: "2. Seamless integration into your smart home ecosystem", desc: "Compatible with smart home platforms, the SQ-Panel can trigger actions such as adjusting your HVAC, sending alerts, or activating air purifiers when conditions change — all automatically." }, de: { title: "2. Nahtlose Integration in Ihr Smart-Home-Ökosystem", desc: "Kompatibel mit gängigen Smart-Home-Plattformen kann das SQ-Panel automatisch Aktionen auslösen - z.B. das HVAC-System regulieren, Luftreiniger einschalten oder Benachrichtigungen senden, wenn sich Umweltbedingungen ändern." } },
    { en: { title: "3. Real-time insights at your fingertips", desc: "Track and analyze environmental trends in your home via intuitive dashboards. Know when to ventilate, humidify, or make other adjustments for peak indoor well-being." }, de: { title: "3. Echtzeit-Einblicke auf einen Blick", desc: "Verfolgen und analysieren Sie Umwelttrends in Ihrem Zuhause über intuitive Dashboards. Erfahren Sie genau, wann Sie lüften, befeuchten oder andere Anpassungen vornehmen sollten - für ein optimales Wohnklima." } },
    { en: { title: "4. Peace of mind, even when you're away", desc: "With remote access and alerts, you'll always know your home is safe, healthy, and running efficiently — whether you're out for the day or on vacation." }, de: { title: "4. Ein gutes Gefühl - auch von unterwegs", desc: "Mit Fernzugriff und Benachrichtigungen wissen Sie immer, dass Ihr Zuhause sicher, gesund und effizient läuft - egal ob Sie nur kurz weg sind oder im Urlaub." } },
    { en: { title: "5. Future-proof your smart home", desc: "The SQ-Panel isn't just a gadget — it's a proactive health and energy-saving tool that keeps getting smarter via updates and integrations with future smart systems." }, de: { title: "5. Machen Sie Ihr Smart Home zukunftssicher", desc: "Das SQ-Panel ist kein bloßes Gadget - es ist ein aktives Gesundheits- und Energiespar-Tool, das durch Updates und Integrationen mit zukünftigen Smart-Systemen immer besser wird." } },
  ];

  return (
    <main>
      <section className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[140px]" style={{ background: "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)" }}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="container relative">
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm">
            <Link href="/" className="text-green-300/70 hover:text-green-300 transition-colors">{en ? "Home" : "Start"}</Link>
            <span className="text-green-300/40">/</span>
            <Link href="/products" className="text-green-300/70 hover:text-green-300 transition-colors">{en ? "Products" : "Produkte"}</Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">{en ? "Smart Home Enthusiasts" : "Smart-Home-Enthusiasten"}</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">{en ? "Smart Home" : "Intelligentes Zuhause"}</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {en ? "Smart Home Enthusiasts" : "Smart-Home-Enthusiasten"}
              <br /><span className="text-green-300">{en ? "The Perfect Addition to Your Connected Home" : "Die perfekte Ergänzung für Ihr vernetztes Zuhause"}</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">{en ? "Optimize your home environment for comfort, health, and efficiency." : "Optimieren Sie Ihre Wohnumgebung für Komfort, Gesundheit und Effizienz."}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />
            <div className="flex-1 min-w-0">

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">{en ? "Smart Home Enthusiasts" : "Smart-Home-Enthusiasten"}</h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-10">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-56 shrink-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
                    <img src="/images/products/sq-panel/family.png" alt="Smart Home Enthusiasts" className="object-contain max-h-64 w-full" />
                  </div>
                  <div className="flex-1 p-6 space-y-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {en ? <><strong>Smart Home Enthusiasts</strong> are individuals who embrace technology to automate and enhance their living environments, integrating various devices and systems to increase comfort, convenience, and efficiency. Their focus is on creating a connected, intelligent home that improves their quality of life while promoting sustainability and energy efficiency.</>
                        : <><strong>Smart Home-Enthusiasten</strong> sind Personen, die Technologie nutzen, um ihre Wohnumgebung zu automatisieren und zu verbessern. Ihr Fokus liegt auf der Schaffung eines vernetzten, intelligenten Zuhauses, das ihre Lebensqualität verbessert und gleichzeitig Nachhaltigkeit und Energieeffizienz fördert.</>}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {en ? <>The <strong>SQ panel</strong> is a valuable addition to a smart home, providing real-time data on air quality, temperature, humidity, pressure, CO₂, TVOC, and presence detection. With the ability to integrate with other smart home systems, the SQ panel can trigger actions like adjusting the HVAC system or activating air purifiers when specific thresholds are met.</>
                        : <>Das <strong>SQ-Panel</strong> ist eine wertvolle Ergänzung für ein Smart Home und liefert Echtzeitdaten zu Luftqualität, Temperatur, Luftfeuchtigkeit, Druck, CO₂, TVOC und Anwesenheitserkennung. Durch die Integration mit anderen Smart-Home-Systemen kann das SQ-Panel Aktionen wie die Anpassung des HVAC-Systems oder die Aktivierung von Luftreinigern auslösen.</>}
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {en ? "Reasons Why Smart Home Enthusiasts Should Buy the Carenuity SQ-Panel" : "Gründe, warum Smart-Home-Enthusiasten das Carenuity SQ-Panel kaufen sollten"}
              </h2>
              <div className="space-y-4 mb-10">
                {reasons.map((r) => (
                  <div key={r.en.title} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                    <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-2">{en ? r.en.title : r.de.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{en ? r.en.desc : r.de.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/product/sq-panel/launch-page" className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-6 py-2.5 text-sm font-semibold text-white transition duration-300">
                  {en ? "Get the SQ-Panel now" : "SQ-Panel jetzt kaufen"}
                </Link>
                <Link href="/product/sq-panel/aqi-insights" className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary dark:text-green-400 hover:bg-primary/5 transition duration-300">
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
