"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function VocInsightsClient() {
  const { lang } = useLanguage();
  const en = lang === "en";

  const methods = [
    {
      enTitle: "1. Photoionization Detector (PID)",
      deTitle: "1. Photoionisationsdetektor (PID)",
      enItems: [
        "How it works: Uses ultraviolet light to ionize VOC molecules in the air.",
        "Advantages: High sensitivity and fast response time.",
        "Applications: Ideal for industrial hygiene, environmental monitoring, and emergency response.",
      ],
      deItems: [
        "Wie es funktioniert: Verwendet ultraviolettes Licht zur Ionisierung von VOC-Molekülen in der Luft.",
        "Vorteile: Hohe Empfindlichkeit und schnelle Reaktionszeit.",
        "Anwendungen: Ideal für Industriehygiene, Umweltüberwachung und Notfallmaßnahmen.",
      ],
    },
    {
      enTitle: "2. Flame Ionization Detector (FID)",
      deTitle: "2. Flammen-Ionisations-Detektor (FID)",
      enItems: [
        "How it works: Burns the VOCs in a hydrogen flame and measures the ions produced.",
        "Advantages: High accuracy and wide range of detectable VOCs.",
        "Applications: Commonly used in laboratory analysis and gas chromatography.",
      ],
      deItems: [
        "Wie es funktioniert: Er verbrennt die flüchtigen organischen Verbindungen in einer Wasserstoffflamme und misst die entstehenden Ionen.",
        "Vorteile: Hohe Genauigkeit und breiter Bereich von nachweisbaren VOCs.",
        "Anwendungen: Häufig in der Laboranalyse und Gaschromatografie eingesetzt.",
      ],
    },
    {
      enTitle: "3. Metal Oxide Sensors (MOS)",
      deTitle: "3. Metall-Oxid-Sensoren (MOS)",
      enItems: [
        "How it works: Uses a metal oxide layer that changes its electrical resistance when exposed to VOCs.",
        "Advantages: Compact, digital, and capable of detecting multiple gases.",
        "Applications: Suitable for smart home devices, building automation, and HVAC systems.",
      ],
      deItems: [
        "Wie es funktioniert: Verwendet eine Metalloxidschicht, die ihren elektrischen Widerstand ändert, wenn sie VOCs ausgesetzt wird.",
        "Vorteile: Kompakt, digital und in der Lage, mehrere Gase zu erkennen.",
        "Anwendungen: Geeignet für Smart-Home-Geräte, Gebäudeautomatisierung und HLK-Systeme.",
      ],
    },
    {
      enTitle: "4. Photoacoustic Spectroscopy (PAS)",
      deTitle: "4. Photoakustische Spektroskopie (PAS)",
      enItems: [
        "How it works: Uses a modulated laser beam to excite VOC molecules and measures the resulting sound waves.",
        "Advantages: High accuracy, small size, and low power consumption.",
        "Applications: Ideal for smart home and building applications.",
      ],
      deItems: [
        "Wie es funktioniert: Verwendet einen modulierten Laserstrahl, um VOC-Moleküle anzuregen, und misst die daraus resultierenden Schallwellen.",
        "Vorteile: Hohe Genauigkeit, geringe Größe und niedriger Stromverbrauch.",
        "Anwendungen: Ideal für Smart-Home- und Gebäudeanwendungen.",
      ],
    },
    {
      enTitle: "5. Gas Chromatography-Mass Spectrometry (GC-MS)",
      deTitle: "5. Gaschromatographie-Massenspektrometrie (GC-MS)",
      enItems: [
        "How it works: Separates VOCs using gas chromatography and identifies them using mass spectrometry.",
        "Advantages: Extremely accurate and capable of identifying a wide range of VOCs.",
        "Applications: Used for detailed laboratory analysis and research.",
      ],
      deItems: [
        "Wie es funktioniert: Trennt flüchtige organische Verbindungen (VOC) mithilfe der Gaschromatografie und identifiziert sie mithilfe der Massenspektrometrie.",
        "Vorteile: Äußerst genau und in der Lage, eine breite Palette von flüchtigen organischen Verbindungen zu identifizieren.",
        "Anwendungen: Wird für detaillierte Laboranalysen und Forschung verwendet.",
      ],
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
            <span className="font-medium text-white">VOC Insights</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                VOC Insights
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {en
                ? "Volatile Organic Compounds"
                : "Flüchtige Organische Verbindungen"}
              <br />
              <span className="text-green-300">
                {en
                  ? "Invisible Threats in the Air"
                  : "Unsichtbare Bedrohungen in der Luft"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "Why VOC Monitoring Matters"
                : "Warum VOC-Überwachung wichtig ist"}
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
                {en ? "VOC Insights" : "VOC Einblicke"}
              </h2>
              <div className="space-y-4 mb-10">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {en
                    ? "Volatile Organic Compounds (VOCs) are all around us—emitted from everyday items like paints, cleaning agents, furniture, and even personal care products. While often undetectable by smell or sight, these invisible chemicals can have serious consequences on your health when left unchecked. Prolonged exposure to high VOC levels can irritate the eyes, nose, and throat, trigger headaches, dizziness, and fatigue, and in more severe cases, damage the liver, kidneys, and central nervous system."
                    : "Flüchtige organische Verbindungen (VOC) sind überall um uns herum - sie werden von alltäglichen Gegenständen wie Farben, Reinigungsmitteln, Möbeln, und sogar Körperpflegeprodukten freigesetzt. Diese unsichtbaren Chemikalien können schwerwiegende Folgen für die Gesundheit haben, wenn sie nicht kontrolliert werden."}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {en
                    ? "Indoor environments—especially those that are sealed or poorly ventilated—can quickly accumulate harmful VOCs, turning seemingly safe spaces into health hazards. Continuous VOC monitoring is essential to identifying exposure before symptoms arise, allowing you to take targeted action to improve air quality."
                    : "In Innenräumen - insbesondere in versiegelten oder schlecht belüfteten - können sich schnell schädliche flüchtige organische Verbindungen (VOC) ansammeln. Eine kontinuierliche VOC-Überwachung ist unerlässlich, um die Belastung zu erkennen, bevor Symptome auftreten."}
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {en ? "Measurement Methods" : "Messmethoden"}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {en
                  ? "Volatile Organic Compounds (VOCs) are a group of organic chemicals that can affect indoor air quality and human health. Measuring VOC levels is crucial for various applications, such as environmental monitoring, indoor air quality assessment, and industrial process control. Here are some common methods to measure VOC levels:"
                  : "Flüchtige organische Verbindungen (VOC) sind eine Gruppe von organischen Chemikalien, die die Luftqualität in Innenräumen und die menschliche Gesundheit beeinträchtigen können. Hier sind einige gängige Methoden zur Messung des VOC-Gehalts:"}
              </p>

              <div className="space-y-4 mb-10">
                {methods.map((m) => (
                  <div
                    key={m.enTitle}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5"
                  >
                    <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-2">
                      {en ? m.enTitle : m.deTitle}
                    </h3>
                    <ul className="space-y-1">
                      {(en ? m.enItems : m.deItems).map((item) => (
                        <li
                          key={item}
                          className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                <h3 className="text-base font-bold text-[#0d2137] dark:text-white mb-2">
                  {en ? "Conclusion" : "Schlussfolgerung"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {en
                    ? "These methods provide various options for measuring VOC levels, each with its own advantages and applications. The choice of method depends on the specific requirements and context of the measurement."
                    : "Diese Methoden bieten verschiedene Möglichkeiten zur Messung des VOC-Gehalts, jede mit ihren eigenen Vorteilen und Anwendungen. Die Wahl der Methode hängt von den spezifischen Anforderungen und dem Kontext der Messung ab."}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {en
                    ? "Carenuity specializes in sensor devices, offering a portfolio of 24 sensor products that come with enclosures and can be customized on various levels to meet your specific needs."
                    : "Carenuity ist auf Sensorgeräte spezialisiert und bietet ein Portfolio von 24 Sensorprodukten an, die auf verschiedenen Ebenen an Ihre spezifischen Anforderungen angepasst werden können."}
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
