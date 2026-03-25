"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function SqTableStandClient() {
  const { lang } = useLanguage();
  const isDe = lang === "de";

  return (
    <main>
      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden bg-dark pt-[120px] md:pt-[100px] xl:pt-[140px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/sq-tablestand/hero.png')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 40%, transparent 55%)",
          }}
        />
        <div className="container relative">
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm">
            <Link
              href="/"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link
              href="/sq-system"
              className="text-gray-400 transition-colors hover:text-white"
            >
              SQ-System
            </Link>
            <span className="text-gray-500">/</span>
            <span className="font-medium text-white">SQ-TableStand</span>
          </nav>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 pb-16 pt-4">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                {isDe
                  ? "Überall platzieren. Keine Montage erforderlich."
                  : "Place it anywhere. No mounting needed."}
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                {isDe
                  ? "SQ-Table Stand lässt Ihr SQ-Panel auf jeder flachen Oberfläche mit stabiler, flexibler Positionierung laufen."
                  : "SQ-Table Stand lets your SQ-Panel run on any flat surface with stable, flexible positioning."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SQ-TABLESTAND ══ */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-6 text-3xl font-bold text-primary dark:text-green md:text-4xl">
            SQ-TableStand
          </h2>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
            <div className="space-y-4 text-base leading-relaxed text-body-color dark:text-gray-300">
              <p>
                {isDe
                  ? "Der Carenuity SQ-Tablestand verwandelt das SQ-Panel in eine flexible, mobile Luftqualitätsmesslösung – ideal für dynamische Umgebungen wie Pflegeräume, Arbeitsbereiche, Schulungen oder den Heimgebrauch."
                  : "The Carenuity SQ-Tablestand transforms the SQ-Panel into a flexible, mobile air quality monitoring solution – ideal for dynamic environments like care rooms, workspaces, training sessions, or home use."}
              </p>
              <p>
                {isDe
                  ? "Das Panel gleitet einfach über den Stand und nutzt dasselbe mechanische Verbindungssystem wie das SQ-Power-Modul. Die Stromversorgung erfolgt über den USB-C-Anschluss auf der Rückseite des Panels. Ein kompatibles USB-C-Kabel und Netzteil sind nicht enthalten und können nach Nutzerpräferenz gewählt werden."
                  : "The panel simply slides onto the stand using the same mechanical connection system as the SQ-Power module. Power is supplied via the USB-C port on the back of the panel. A compatible USB-C cable and power supply are not included and can be selected according to user preference."}
              </p>
              <p>
                {isDe
                  ? "Der Ständer verfügt über eine rutschfeste, gummierte Basis, die Stabilität auf jeder flachen Oberfläche gewährleistet – keine Wandmontage oder Werkzeuge erforderlich."
                  : "The stand features a non-slip, rubberized base that ensures stability on any flat surface – no wall mounting or tools required."}
              </p>
            </div>
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/images/sq-tablestand/sq-stand.png"
                alt="SQ-TableStand on table"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ KEY BENEFITS + TECHNICAL SPECS ══ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-5 text-3xl font-bold text-primary dark:text-green md:text-4xl">
                {isDe
                  ? "Hauptvorteile auf einen Blick:"
                  : "Key Benefits at a Glance:"}
              </h2>
              <ul className="mb-10 space-y-2">
                {(isDe
                  ? [
                      "Ermöglicht mobile Nutzung des SQ-Panels – keine Wandinstallation erforderlich",
                      "Verwendet dasselbe mechanische Interface wie das SQ-Power-Modul",
                      "Stromversorgung über USB-C (Adapter und Kabel nicht enthalten)",
                      "Schnelle Einrichtung – werkzeugfrei und sofort einsatzbereit",
                      "Kompakt, stabil und leicht für flexiblen Einsatz",
                      "Gummierte Basis für sicheres Aufstellen auf Schreibtischen, Theken und mehr",
                    ]
                  : [
                      "Enables mobile use of the SQ-Panel - no wall installation required",
                      "Uses the same mechanical interface as the SQ-Power module",
                      "Power supplied via USB-C (adapter and cable not included)",
                      "Quick setup – tool-free and instantly ready",
                      "Compact, stable and lightweight for flexible deployment",
                      "Rubberized base for safe placement on desks, counters, and more",
                    ]
                ).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-body-color dark:text-gray-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="mb-5 text-3xl font-bold text-primary dark:text-green md:text-4xl">
                {isDe
                  ? "Technische Spezifikationen:"
                  : "Technical Specifications:"}
              </h2>
              <ul className="space-y-2">
                {(isDe
                  ? [
                      "Funktion: Mobiler Tischständer für Carenuity SQ-Panel",
                      "Material: Stabiler Kunststoffkörper mit Gummibasis",
                      "Montagesystem: Einrastsystem (kompatibel mit SQ-Power)",
                      "Stromeingang: USB-C (Netzteil und Kabel nicht enthalten)",
                      "Installation: Werkzeugfrei, Plug & Use",
                      "Kompatibilität: Nur kompatibel mit Carenuity SQ-Panel",
                    ]
                  : [
                      "Function: Mobile table stand for Carenuity SQ-Panel",
                      "Material: Durable plastic body with rubber base",
                      "Mounting system: Snap-on interface (compatible with SQ-Power)",
                      "Power input: USB-C (power supply and cable not included)",
                      "Installation: Tool-free, plug & use",
                      "Compatibility: Only compatible with Carenuity SQ-Panel",
                    ]
                ).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-body-color dark:text-gray-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SQ-Panel image on green circle */}
            <div className="flex items-center justify-center lg:sticky lg:top-24">
              <div
                className="relative flex items-center justify-center rounded-full bg-[#3a7d44]/20 dark:bg-[#3a7d44]/30"
                style={{ width: "420px", height: "420px" }}
              >
                <div className="relative w-[340px] h-[340px]">
                  <Image
                    src="/images/sq-tablestand/sq-panel.png"
                    alt="SQ-Panel on TableStand"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SYSTEM NOTE ══ */}
      <section className="bg-gray-50 py-12 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-primary dark:text-green md:text-4xl">
            {isDe ? "Systemhinweis:" : "System Note:"}
          </h2>
          <p className="text-base leading-relaxed text-body-color dark:text-gray-300 max-w-3xl">
            {isDe
              ? "Um Cloud-Konnektivität und Fernüberwachung zu ermöglichen, ist ein separater SQ-Connector erforderlich (nicht enthalten). Ein SQ-Connector kann mehrere SQ-Panels gleichzeitig unterstützen, wodurch das System hochskalierbar und effizient wird. App-Unterstützung:"
              : "To enable cloud connectivity and remote monitoring, a separate SQ-Connector is required (not included). One SQ-Connector can support multiple SQ-Panels at the same time, making the system highly scalable and efficient. App Support:"}
          </p>
        </div>
      </section>

      {/* ══ TYPICAL USE CASES ══ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-primary dark:text-green md:text-4xl">
            {isDe ? "Typische Anwendungsfälle:" : "Typical Use Cases:"}
          </h2>
          <div className="space-y-8">
            {(isDe
              ? [
                  {
                    title: "1. Patientenzimmer & Pflegeumgebungen",
                    body: "In Krankenhaus- oder Pflegeeinrichtungen ermöglicht der SQ-TableStand die sichere Platzierung des SQ-Panels auf einem Nachttisch oder Regal ohne Wandinstallation. Dies ermöglicht eine kontinuierliche Überwachung von Luftqualitätsparametern wie CO₂, Luftfeuchtigkeit und Temperatur in Patientenzimmern – Bedingungen, die Genesung und Wohlbefinden erheblich beeinflussen können. Die Fähigkeit zur Erkennung menschlicher Anwesenheit (unter Ignorierung von Haustieren oder Bewegungen nicht-menschlicher Quellen) hilft Pflegepersonal sicherzustellen, dass der Raum ordnungsgemäß belegt und belüftet ist.",
                  },
                  {
                    title:
                      "2. Büroschreibtische, Empfangstheken, mobile Stationen",
                    body: "In Gesundheits- oder Unternehmensbereichen positioniert der SQ-TableStand das SQ-Panel prominent auf Theken oder Schreibtischen zur Überwachung der Innenraumumgebung. Dies ist besonders in gemeinsam genutzten Räumen nützlich, wo die Aufrechterhaltung optimaler Luftqualität dazu beiträgt, die Ausbreitung von Atemwegserkrankungen zu reduzieren und die kognitive Leistung zu verbessern. Als mobiles Stationszubehör bietet es Flexibilität – Mitarbeiter können das Gerät bei Bedarf in verschiedene Räume verlegen, ohne zu bohren oder dauerhaft zu installieren.",
                  },
                  {
                    title:
                      "3. Schulungsräume, Ausstellungen, flexible Einsätze",
                    body: "Auf Messen oder internen Schulungen ermöglicht der SQ-TableStand es Carenuity, das SQ-Panel in temporären Setups vorzustellen. Auf Podesten oder Demonstrationstischen platziert, bietet der Ständer eine stabile Plattform zur Demonstration der Echtzeit-Umgebungsüberwachung und macht es einfach, die Funktionen und Vorteile des Systems zu erläutern. Das moderne Design trägt auch dazu bei, ein sauberes und professionelles Erscheinungsbild zu wahren, was in Ausstellungsumgebungen unerlässlich ist.",
                  },
                  {
                    title: "4. Smart Homes und private Überwachung",
                    body: "Im Smart Home ermöglicht der SQ-TableStand Bewohnern, das SQ-Panel auf einem Küchenregal oder einem Schlafzimmerkommode zu platzieren, um CO₂-Werte, Temperatur, Luftfeuchtigkeit und mehr zu verfolgen – alles ohne die Wände zu verändern. Für Mieter oder Personen in temporären Unterkünften ist dies besonders wertvoll, da es Schäden an der Immobilie vermeidet. Die Anwesenheitserkennung fügt eine weitere Ebene der Smart-Home-Automatisierung hinzu und ermöglicht es dem System, Alarme oder Belüftung nur zu aktivieren, wenn Personen – nicht Haustiere – im Raum sind.",
                  },
                ]
              : [
                  {
                    title: "1. Patient Rooms & Care Environments",
                    body: "In hospital or eldercare settings, the SQ-TableStand allows the SQ-Panel to be placed securely on a bedside table or shelf without the need for wall installation. This enables continuous monitoring of air quality parameters such as CO₂, humidity, and temperature in patient rooms—conditions that can significantly impact recovery and comfort. Its ability to detect human presence (while ignoring pets or movement from non-human sources) helps caregivers ensure the space is properly occupied and ventilated.",
                  },
                  {
                    title:
                      "2. Office Desks, Reception Counters, Mobile Stations",
                    body: "In healthcare or corporate reception areas, the SQ-TableStand positions the SQ-Panel prominently on counters or desks to monitor indoor environmental conditions. This is particularly useful in shared spaces, where maintaining optimal air quality helps reduce the spread of airborne illnesses and improves cognitive performance. As a mobile station accessory, it provides flexibility—allowing staff to relocate the device to different rooms as needed without drilling or permanent installation.",
                  },
                  {
                    title:
                      "3. Training Rooms, Exhibitions, Flexible Deployments",
                    body: "At trade fairs or internal training sessions, the SQ-TableStand enables Carenuity to showcase the SQ-Panel in temporary setups. Placed on podiums or demo tables, the stand provides a stable platform to demonstrate real-time environmental monitoring, making it easy to explain the features and benefits of the system. Its modern design also helps maintain a clean and professional look, which is essential in exhibition environments.",
                  },
                  {
                    title: "4. Smart Homes and Private Monitoring",
                    body: "In a smart home, the SQ-TableStand allows residents to place the SQ-Panel on a kitchen shelf or a bedroom dresser to track CO₂ levels, temperature, humidity, and more—all without modifying the walls. For renters or people living in temporary accommodations, this is especially valuable as it avoids damage to the property. The presence detection feature adds another layer of smart automation, allowing the system to activate alerts or ventilation only when people—not pets—are in the room.",
                  },
                ]
            ).map((uc) => (
              <div key={uc.title}>
                <h3 className="mb-2 text-base font-bold text-black dark:text-white">
                  {uc.title}
                </h3>
                <p className="text-base leading-relaxed text-body-color dark:text-gray-300">
                  {uc.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SHOP WITH US ══ */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-primary dark:text-green md:text-3xl">
            {isDe ? "Bei uns kaufen" : "Shop with us"}
          </h2>
          <div className="overflow-hidden rounded-2xl bg-white dark:bg-gray-950 shadow-sm">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-4 relative h-[280px] md:h-auto min-h-[280px]">
                <Image
                  src="/images/sq-tablestand/sq-tablestand.png"
                  alt="SQ-TableStand"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-12 md:col-span-8 p-8 flex flex-col justify-center">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  {isDe
                    ? "Carenuity SQ-Connector – LAN Gateway mit 868 MHz für SQ-Panel"
                    : "Carenuity SQ-Connector - LAN Gateway with 868 MHz for SQ-Panel"}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-body-color dark:text-gray-300">
                  {isDe
                    ? "Der Carenuity SQ-Tablestand verwandelt das SQ-Panel in eine flexible, mobile Luftqualitätsmesslösung – ideal für dynamische Umgebungen wie Pflegeräume, Arbeitsbereiche..."
                    : "The Carenuity SQ-Tablestand transforms the SQ-Panel into a flexible, mobile air quality monitoring solution - ideal for dynamic environments like care rooms, workspaces..."}
                </p>
                <a
                  href="#"
                  className="inline-block w-fit rounded-xl px-10 py-3 text-sm font-bold text-white transition hover:opacity-90"
                  style={{ backgroundColor: "#174f2e" }}
                >
                  {isDe ? "Jetzt kaufen" : "Buy Now"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
