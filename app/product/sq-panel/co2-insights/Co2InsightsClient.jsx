"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function Co2InsightsClient() {
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
            <span className="font-medium text-white">CO2 Insights</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                CO₂ Insights
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {en ? "CO2 Measurement Methods" : "CO2-Messmethoden"}
              <br />
              <span className="text-green-300">
                {en
                  ? "Breathe Easy, Live Better"
                  : "Einfacher atmen, besser leben"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "Why CO₂ Awareness is Essential for Your Health."
                : "Warum CO₂-Bewusstsein wichtig für Ihre Gesundheit ist."}
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
                {en ? "CO₂ Insights" : "CO₂ Einblicke"}
              </h2>
              <div className="space-y-4 mb-10">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {en
                    ? "We often take indoor air for granted, but its quality plays a critical role in our overall health and wellbeing. One of the most underestimated factors affecting indoor environments is carbon dioxide (CO₂). While CO₂ is naturally present in the air, poor ventilation can cause it to accumulate to unhealthy levels in homes, offices, classrooms, and other enclosed spaces. Elevated CO₂ levels have been directly linked to headaches, fatigue, poor concentration, drowsiness, and even reduced cognitive function. Over time, consistent exposure can lead to chronic discomfort, poor sleep, and a decline in mental performance—especially concerning for children, the elderly, and those with respiratory conditions."
                    : "Wir nehmen die Raumluft oft als selbstverständlich hin, aber ihre Qualität spielt eine entscheidende Rolle für unsere allgemeine Gesundheit und unser Wohlbefinden. Einer der am meisten unterschätzten Faktoren, die das Innenraumklima beeinflussen, ist Kohlendioxid (CO₂). CO₂ ist zwar von Natur aus in der Luft vorhanden, doch kann es sich bei schlechter Belüftung in Wohnungen, Büros, Homeoffice, Klassenzimmern und anderen geschlossenen Räumen in ungesunden Mengen anreichern. Erhöhte CO₂-Werte stehen in direktem Zusammenhang mit Kopfschmerzen, Müdigkeit, Konzentrationsschwäche, Schläfrigkeit und sogar eingeschränkten kognitiven Funktionen."}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {en
                    ? "The danger lies in CO₂'s invisibility—it has no color or smell, so its presence often goes unnoticed until symptoms arise. This makes regular monitoring essential. Understanding and controlling indoor CO₂ levels is not just about comfort; it's about safeguarding your health. With real-time insights and proactive ventilation strategies, you can ensure your indoor environment supports focus, energy, and long-term wellness."
                    : "Die Gefahr liegt in der Unsichtbarkeit von CO₂ - es hat keine Farbe und keinen Geruch, so dass seine Anwesenheit oft unbemerkt bleibt, bis Symptome auftreten. Dies macht eine regelmäßige Überwachung unerlässlich. Das Verständnis und die Kontrolle der CO₂-Werte in Innenräumen sind nicht nur eine Frage des Komforts, sondern auch des Gesundheitsschutzes. Mit Echtzeit-Einblicken und proaktiven Belüftungsstrategien können Sie sicherstellen, dass Ihre Innenraumumgebung Konzentration, Energie und langfristiges Wohlbefinden fördert."}
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {en ? "Measurement Methods" : "Messmethoden"}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {en
                  ? "Carbon dioxide (CO₂) is a greenhouse gas that affects the climate and the quality of life on Earth. Measuring the CO₂ level in the air is important for various applications, such as environmental monitoring, industrial process control, indoor air quality, and health and safety. Some of the common methods are:"
                  : "Kohlendioxid (CO₂) ist ein Treibhausgas, das das Klima und die Lebensqualität auf der Erde beeinflusst. Die Messung des CO₂-Gehalts in der Luft ist für verschiedene Anwendungen wichtig. Einige der gängigen Methoden sind:"}
              </p>

              <div className="space-y-4 mb-10">
                {[
                  {
                    en: {
                      title: "Cavity Ring-Down Spectroscopy (CRDS)",
                      desc: "This method uses a laser beam that is reflected inside a cavity with mirrors. The laser light is absorbed by the CO₂ molecules in the cavity, and the time it takes for the light to decay is measured. This method is very precise and accurate, and can measure CO₂ levels from ambient to high concentrations.",
                    },
                    de: {
                      title: "Hohlraum-Ring-Down-Spektroskopie",
                      desc: "Bei dieser Methode wird ein Laserstrahl in einem Hohlraum mit Spiegeln reflektiert. Das Laserlicht wird von den CO₂-Molekülen im Hohlraum absorbiert, und es wird die Zeit gemessen, die das Licht zum Abklingen benötigt. Diese Methode ist sehr präzise und genau.",
                    },
                  },
                  {
                    en: {
                      title:
                        "Non-Dispersive Infrared (NDIR) e.g. TechnolineWL1030",
                      desc: "This method uses an infrared light source that passes through a sample of air. The CO₂ molecules in the air absorb some of the infrared light, and the remaining light is detected by a sensor. The amount of light absorbed is proportional to the CO₂ concentration in the air. Widely used for indoor air quality monitoring.",
                    },
                    de: {
                      title: "Nicht-dispersives Infrarot e.g. TechnolineWL1030",
                      desc: "Bei dieser Methode wird eine Infrarotlichtquelle verwendet, die eine Luftprobe durchdringt. Die CO₂-Moleküle in der Luft absorbieren einen Teil des Infrarotlichts, und das restliche Licht wird von einem Sensor erfasst. Diese Methode ist weit verbreitet für die Überwachung der Luftqualität in Innenräumen.",
                    },
                  },
                  {
                    en: {
                      title: "Gas Chromatography (GC)",
                      desc: "This method separates the different components of a gas mixture using a column and a carrier gas. The CO₂ concentration is calculated based on the peak area and the calibration curve. This method is accurate and sensitive, but requires more complex equipment. Used for laboratory analysis and research purposes.",
                    },
                    de: {
                      title: "Gaschromatographie",
                      desc: "Bei dieser Methode werden die verschiedenen Komponenten eines Gasgemischs mithilfe einer Säule und eines Trägergases getrennt. Die CO₂-Konzentration wird auf der Grundlage der Peakfläche und der Kalibrierungskurve berechnet. Sie wird für Laboranalysen und Forschungszwecke verwendet.",
                    },
                  },
                  {
                    en: {
                      title:
                        "Photoacoustic Spectroscopy (PAS) e.g. Infineon PAS CO₂",
                      desc: "This method uses a modulated laser beam to excite the CO₂ molecules and measure the resulting sound waves. This method is very small, accurate, and low-power, and can be used for smart home and building applications. Infineon's XENSIV™ PAS CO₂ sensor meets the criteria of the WELL Building Standard.",
                    },
                    de: {
                      title:
                        "Photoakustische Spektroskopie e.g. Infineon PAS CO₂",
                      desc: "Bei dieser Methode wird ein modulierter Laserstrahl verwendet, um die CO₂-Moleküle anzuregen und die daraus resultierenden Schallwellen zu messen. Diese Methode ist sehr klein, genau und stromsparend und kann für Smart-Home- und Gebäudeanwendungen eingesetzt werden.",
                    },
                  },
                  {
                    en: {
                      title: "Metal Oxide (MOX) e.g. Carenuity SQ-Panel",
                      desc: "This method uses a metal oxide layer that changes its electrical resistance when it interacts with gas molecules. It is based on the detection of volatile organic compounds (VOCs) that are correlated with CO₂ levels. This method is compact, digital, and multi-gas, providing outputs such as equivalent CO₂ (eCO₂), total VOCs (TVOC), and air quality index (AQI).",
                    },
                    de: {
                      title: "Metal Oxide (MOX) e.g. Carenuity SQ-Panel",
                      desc: "Bei dieser Methode wird eine Metalloxidschicht verwendet, die ihren elektrischen Widerstand ändert, wenn sie mit Gasmolekülen in Kontakt kommt. Die Methode basiert auf dem Nachweis flüchtiger organischer Verbindungen (VOC), die mit CO₂ korreliert sind. Diese Methode ist kompakt, digital und mehrgasfähig.",
                    },
                  },
                ].map((item) => (
                  <div
                    key={en ? item.en.title : item.de.title}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5"
                  >
                    <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-2">
                      {en ? item.en.title : item.de.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {en ? item.en.desc : item.de.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                <h3 className="text-base font-bold text-[#0d2137] dark:text-white mb-2">
                  {en ? "Conclusion" : "Abschluss"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {en
                    ? "These are the main methods to measure the CO₂ level in the air. Each method has its own advantages and disadvantages, and the choice of the best method depends on the application and the requirements."
                    : "Dies sind die wichtigsten Methoden zur Messung des CO₂-Gehalts in der Luft. Jede Methode hat ihre eigenen Vor- und Nachteile, und die Wahl der besten Methode hängt von der Anwendung und den Anforderungen ab."}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {en
                    ? "Carenuity specializes in sensor devices, offering a portfolio of 24 sensor products that come with enclosures and can be customized on all levels to meet your specific needs."
                    : "Carenuity hat sich auf Sensorgeräte spezialisiert und bietet ein Portfolio von 24 Sensorprodukten an, die auf allen Ebenen an Ihre spezifischen Anforderungen angepasst werden können."}
                </p>
                <Link
                  href="/product/sq-panel/launch-page"
                  className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-6 py-2.5 text-sm font-semibold text-white transition duration-300 inline-block"
                >
                  {en ? "Learn more" : "Mehr erfahren"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
