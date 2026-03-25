"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function SqConnectorClient() {
  const { lang } = useLanguage();
  const isDe = lang === "de";

  return (
    <main>
      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden bg-dark pt-[120px] md:pt-[100px] xl:pt-[140px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/sq-connector/hero.png')" }}
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
            <span className="font-medium text-white">SQ-Connector</span>
          </nav>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 pb-16 pt-4">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                {isDe
                  ? "Verbinden Sie Ihr SQ-System nahtlos"
                  : "Connect your SQ-System seamlessly"}
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                {isDe
                  ? "Der SQ-Connector verbindet Ihre SQ-Panels mit dem Internet für Echtzeit-Überwachung."
                  : "The SQ-Connector links your SQ-Panels to the internet for real-time monitoring."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MATTER GATEWAY ══ */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-5 text-3xl font-bold text-primary dark:text-green md:text-4xl">
                {isDe
                  ? "SQ-Connector, Ihr Matter Gateway"
                  : "SQ-Connector, your Matter Gateway"}
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-gray-300">
                {isDe
                  ? "Der SQ-Connector fungiert als Matter Gateway, ein zentraler Bestandteil des Matter-Protokolls, eines vereinheitlichenden IP-basierten Konnektivitätsstandards, der von der Connectivity Standards Alliance (CSA) entwickelt wurde. Matter zielt darauf ab, eine sichere, zuverlässige und nahtlose Kommunikation zwischen Smart-Home-Geräten, mobilen Apps und Cloud-Diensten zu gewährleisten. Das Matter Gateway erleichtert die Integration von Geräten, die verschiedene Kommunikationsprotokolle verwenden – wie Zigbee, Bluetooth und Wi-Fi – in ein einheitliches Matter-Ökosystem. Dieser Standard trägt dazu bei, die Fragmentierung im Smart-Home-Markt zu reduzieren, indem er die Interoperabilität zwischen Geräten verschiedener Hersteller ermöglicht und sicherstellt, dass sie reibungslos zusammenarbeiten. Das Matter Gateway spielt eine entscheidende Rolle bei der Überbrückung verschiedener Technologien und der Gewährleistung einer kohärenten Smart-Home-Erfahrung."
                  : "The SQ-Connector acts as Matter Gateway, a core part of the Matter protocol, a unifying IP-based connectivity standard developed by the Connectivity Standards Alliance (CSA). Matter aims to ensure secure, reliable, and seamless communication between smart home devices, mobile apps, and cloud services. The Matter Gateway specifically facilitates the integration of devices using different communication protocols, such as Zigbee, Bluetooth, and Wi-Fi, into a unified Matter ecosystem. This standard helps reduce fragmentation in the smart home market by enabling interoperability between devices from various manufacturers, ensuring they work together smoothly. The Matter Gateway plays a crucial role in bridging different technologies and ensuring a cohesive smart home experience."}
              </p>
            </div>
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/images/sq-connector/sq-connector.png"
                alt="SQ-Connector device"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONNECTIVITY CARDS ══ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Connections & Connectivity */}
            <div className="overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-sm">
              <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
                <Image
                  src={
                    isDe
                      ? "/images/sq-connector/sq-connector4.jpeg"
                      : "/images/sq-connector/sq-connector3.png"
                  }
                  alt={
                    isDe
                      ? "Anschlüsse & Konnektivität"
                      : "Connections & Connectivity"
                  }
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Inside Technology */}
            <div className="overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-sm">
              <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
                <Image
                  src={
                    isDe
                      ? "/images/sq-connector/sq-connector2.png"
                      : "/images/sq-connector/sq-connector1.png"
                  }
                  alt={
                    isDe
                      ? "SQ-Connector – Technologie im Inneren"
                      : "SQ-Connector – Inside Technology"
                  }
                  fill
                  className="object-contain"
                />
              </div>
            </div>
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
                  src="/images/sq-connector/sq-connector.png"
                  alt="SQ-Connector"
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
                    ? "Der Carenuity SQ-Connector ist das zentrale Gateway für die Integration des SQ-Panels in die Carenuity-Cloud-Infrastruktur. Er empfängt Sensordaten vom Panel über..."
                    : "The Carenuity SQ-Connector is the central gateway for integrating the SQ-Panel into the Carenuity cloud infrastructure. It receives sensor data from the panel via..."}
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

      {/* ══ DOCUMENTATION ══ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-primary dark:text-green md:text-4xl">
            {isDe ? "Dokumentation" : "Documentation"}
          </h2>
          <ul className="space-y-3">
            {(isDe
              ? [
                  {
                    name: "Datasheet_SQ-Panel_V1.1.3 [PDF]",
                    href: "/docs/datasheet/Datasheet_SQ-Panel_V1.1.3_de.pdf",
                  },
                  {
                    name: "Datasheet_SQ-Power_V1.1.3 [PDF]",
                    href: "/docs/datasheet/Datasheet_SQ-Power_V1.1.3_de.pdf",
                  },
                  {
                    name: "Datasheet_SQ-Connector_V1.1.3 [PDF]",
                    href: "/docs/datasheet/Datasheet_SQ-Connector_V1.1.3_de.pdf",
                  },
                  {
                    name: "Konformitätserklärung V1.3.0 [PDF]",
                    href: "/docs/declaration-de.pdf",
                  },
                  {
                    name: "Flugblatt V1.0.0 [PDF]",
                    href: "/docs/leaflet/leaflet_de.pdf",
                  },
                  {
                    name: "Inbetriebnahme-Handbuch V1.1.0 [PDF]",
                    href: "/docs/Commissioning-de.pdf",
                  },
                  {
                    name: "SQ-Panel Benutzerhandbuch [PDF]",
                    href: "/docs/sq-panel-user-guide.pdf",
                  },
                ]
              : [
                  {
                    name: "Datasheet_SQ-Panel_V1.1.3 [PDF]",
                    href: "/docs/datasheet/Datasheet_SQ-Panel_V1.1.3.pdf",
                  },
                  {
                    name: "Datasheet_SQ-Power_V1.1.3 [PDF]",
                    href: "/docs/datasheet/Datasheet_SQ-Power_V1.1.3.pdf",
                  },
                  {
                    name: "Datasheet_SQ-Connector_V1.1.3 [PDF]",
                    href: "/docs/datasheet/Datasheet_SQ-Connector_V1.1.3.pdf",
                  },
                  {
                    name: "Declaration-of-Conformity V1.3.0 [PDF]",
                    href: "/docs/declaration-of-conformity.pdf",
                  },
                  {
                    name: "Leaflet V1.0.0 [PDF]",
                    href: "/docs/leaflet/leaflet.pdf",
                  },
                  {
                    name: "Manual-for-Commissioning V1.1.0 [PDF]",
                    href: "/docs/Commissioning-en.pdf",
                  },
                  {
                    name: "SQ-Panel User Guide [PDF]",
                    href: "/docs/sq-panel-user-guide.pdf",
                  },
                ]
            ).map((f, i) => (
              <li key={i}>
                <a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline dark:text-green"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  {f.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
