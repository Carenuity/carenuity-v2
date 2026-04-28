"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function SqPowerClient() {
  const { lang } = useLanguage();
  const isDe = lang === "de";

  return (
    <main>
      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden bg-dark pt-[120px] md:pt-[100px] xl:pt-[140px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/sq-power/hero.png')" }}
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
            <span className="font-medium text-white">SQ-Power</span>
          </nav>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 pb-16 pt-4">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                {isDe
                  ? "Saubere Energie.\nNahtlose Installation."
                  : "Clean power.\nSeamless installation."}
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                {isDe
                  ? "SQ-Power liefert stabile Wandstromversorgung für Ihr SQ-Panel – für ein ordentliches, kabelfreies, professionelles Setup."
                  : "SQ-Power delivers stable in-wall power to your SQ-Panel for a neat, cable-free, professional setup."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT IS SQ-POWER ══ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-primary dark:text-green md:text-4xl">
            {isDe ? "Was ist SQ-Power?" : "What is SQ-Power"}
          </h2>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
            <div>
              <p className="mb-5 text-base leading-relaxed text-body-color dark:text-gray-300">
                {isDe
                  ? "Das Carenuity SQ-Power ist ein dediziertes In-Wall-Netzteilmodul, das eine stabile und kontinuierliche Stromversorgung für das SQ-Panel bereitstellt. Es passt genau in eine Standard-Unterputzdose und liefert eine zuverlässige 5V-Gleichspannung ohne externe Adapter oder sichtbare Kabel. Dadurch wird sichergestellt, dass das SQ-Panel jederzeit reibungslos arbeitet und die Luftqualität, Temperatur, Luftfeuchtigkeit, CO₂, TVOC und Anwesenheit in Echtzeit überwacht."
                  : "The Carenuity SQ-Power is a dedicated in-wall power module designed to provide stable and continuous power to the SQ-Panel. It fits neatly into a standard flush-mounted electrical box, delivering a reliable 5 V DC supply without the need for external adapters or visible cables. This ensures that the SQ-Panel operates smoothly at all times, maintaining accurate real-time monitoring of air quality, temperature, humidity, CO₂, TVOC, and presence."}
              </p>
              <p className="text-base leading-relaxed text-body-color dark:text-gray-300">
                {isDe
                  ? "Durch die direkte Integration in die Wand garantiert das SQ-Power nicht nur eine professionelle und saubere Installation, sondern vereinfacht auch den Einrichtungsprozess. Einmal angeschlossen, ermöglicht es dem SQ-System, ununterbrochen zu funktionieren und gibt den Benutzern die Gewissheit, dass ihre Innenumgebung dauerhaft überwacht wird. Sein kompaktes Design und robuste Konstruktion machen es zu einer sicheren und effizienten Stromversorgungslösung für Häuser, Büros und Pflegeeinrichtungen."
                  : "By integrating directly into the wall, the SQ-Power not only guarantees a professional and clean installation but also simplifies the setup process. Once connected, it allows the SQ-System to function uninterrupted, giving users peace of mind that their indoor environment is consistently monitored. Its compact design and durable construction make it a safe and efficient power solution for homes, offices, and care facilities."}
              </p>
            </div>
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/images/sq-power/children.png"
                alt="Family with SQ-Panel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW DOES SQ-POWER WORK ══ */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-primary dark:text-green md:text-4xl">
            {isDe ? "Wie funktioniert SQ-Power?" : "How does SQ-Power work?"}
          </h2>
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-body-color dark:text-gray-300">
            {isDe
              ? "Das SQ-Power ermöglicht es Ihnen, das SQ-Panel an der Wand zu befestigen, anstatt den Tischständer zu verwenden oder es direkt zu nageln. Der schwarze Clip an der Seite des SQ-Panels rastet sicher in das SQ-Power-Modul ein, das in der Wand installiert ist, und bietet eine saubere, kabelfreie Verbindung und kontinuierliche Stromversorgung, während das Panel ordentlich montiert und voll funktionsfähig bleibt."
              : "The SQ-Power allows you to flush-mount the SQ-Panel on the wall instead of using the table stand or nailing it directly. The black clip on the side of the SQ-Panel securely locks it into the SQ-Power module installed inside the wall, providing a clean, cable-free connection and continuous power while keeping the panel neatly mounted and fully operational."}
          </p>
          <div className="w-full overflow-hidden rounded-2xl bg-black">
            <video
              src="/video/sq-power.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
              style={{ aspectRatio: "16/9" }}
            />
          </div>
        </div>
      </section>

      {/* ══ TOP SIDE SPECS ══ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-primary dark:text-green md:text-3xl">
            {isDe
              ? "Oberseite des SQ-Power mit 2×4pin Sockel zur Befestigung des SQ-Panels"
              : "Top side of the SQ-Power with 2×4pin Socket for attaching the SQ-Panel"}
          </h2>
          <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="relative h-[260px] overflow-hidden rounded-xl">
                <Image
                  src="/images/sq-power/sq-power-front.png"
                  alt="SQ-Power top side"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="mb-3 text-base font-bold text-primary dark:text-green">
                    {isDe ? "Grundlegende Informationen" : "Basic Information"}
                  </h3>
                  <dl className="space-y-1.5 text-sm text-body-color dark:text-gray-300">
                    {[
                      [
                        isDe ? "Produktserie:" : "Product series:",
                        isDe
                          ? "Wandmontage-Netzteilmodul"
                          : "Wall mounting power module",
                      ],
                      ["Type:", "Flyback"],
                      [isDe ? "Spannung:" : "Voltage:", "85-265 VAC 50/60Hz"],
                      [isDe ? "Max. Leistung:" : "Max power:", "5W 1A"],
                      [
                        isDe ? "Sicherheitsstandard:" : "Safety standard:",
                        "EN 60669-2-5",
                      ],
                      [
                        isDe
                          ? "Installationskategorie:"
                          : "Installation category:",
                        "III",
                      ],
                      [
                        isDe ? "Zertifizierung:" : "Certification:",
                        "CE/ROHS/WEEE",
                      ],
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-2">
                        <span className="shrink-0 text-gray-500 w-[150px]">
                          {k}
                        </span>
                        <span>{v}</span>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h3 className="mb-3 text-base font-bold text-primary dark:text-green">
                    {isDe ? "Betriebsumgebung" : "Working Environment"}
                  </h3>
                  <dl className="space-y-1.5 text-sm text-body-color dark:text-gray-300">
                    {[
                      [
                        isDe ? "Einsatzort:" : "Applicable place:",
                        isDe ? "Innenbereich" : "Indoor",
                      ],
                      [
                        isDe ? "Betriebstemperatur:" : "Working temperature:",
                        "-40 ~ 80 °C",
                      ],
                      [
                        isDe ? "Betriebsfeuchtigkeit:" : "Working humidity:",
                        isDe ? "Bis zu 90 % RH" : "Up to 90 % RH",
                      ],
                      [
                        isDe ? "Zertifizierung:" : "Certification:",
                        "CE/ROHS/WEEE",
                      ],
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-2">
                        <span className="shrink-0 text-gray-500 w-[150px]">
                          {k}
                        </span>
                        <span>{v}</span>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM SIDE SPECS ══ */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-primary dark:text-green md:text-3xl">
            {isDe
              ? "Unterseite des SQ-Power mit Klemmen für 22V-Kabel für Hausinstallationen."
              : "Bottom side of the SQ-Power with terminals to connect 22V cables for domestic installations."}
          </h2>
          <div className="rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="relative h-[260px] overflow-hidden rounded-xl">
                <Image
                  src="/images/sq-power/sq-power-back.png"
                  alt="SQ-Power bottom side"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="mb-3 text-base font-bold text-primary dark:text-green">
                    {isDe ? "Installation" : "Installation"}
                  </h3>
                  <dl className="space-y-1.5 text-sm text-body-color dark:text-gray-300">
                    {[
                      [
                        isDe ? "Installationsmethode:" : "Installation method:",
                        isDe ? "Unterputzdose" : "Flush mounting box",
                      ],
                      [
                        isDe ? "Installationstyp:" : "Installation type:",
                        isDe ? "Schraubeninstallation" : "Screws installation",
                      ],
                      [isDe ? "Verdrahtungsweise:" : "Wiring way:", "N and L"],
                      [
                        isDe ? "Leitungsquerschnitt:" : "Wire diameter:",
                        "0.75 - 2.5 mm2",
                      ],
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-2">
                        <span className="shrink-0 text-gray-500 w-[160px]">
                          {k}
                        </span>
                        <span>{v}</span>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h3 className="mb-3 text-base font-bold text-primary dark:text-green">
                    {isDe ? "Erscheinungsbild" : "Appearance"}
                  </h3>
                  <dl className="space-y-1.5 text-sm text-body-color dark:text-gray-300">
                    {[
                      [isDe ? "Gewicht:" : "Weight:", "49g"],
                      [
                        isDe ? "Gehäusematerial:" : "Casing materials:",
                        "PCLEXAN121R",
                      ],
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-2">
                        <span className="shrink-0 text-gray-500 w-[160px]">
                          {k}
                        </span>
                        <span>{v}</span>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TECHNICAL DRAWINGS ══ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-primary dark:text-green md:text-3xl">
            {isDe
              ? "SQ-Power (Technische Zeichnungen)"
              : "SQ-Power (Technical Drawings)"}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div
              className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/images/sq-power/sq-powerdrawing1.png"
                alt="Technical drawing 1"
                fill
                className="object-contain p-6"
              />
            </div>
            <div
              className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/images/sq-power/sq-powerdrawing2.png"
                alt="Technical drawing 2"
                fill
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SIMPLY CONNECT ══ */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-3 text-2xl font-bold text-primary dark:text-green md:text-3xl">
            {isDe
              ? "Einfach verbinden, einsetzen und fertig:"
              : "Simply connect, insert, and you're done:"}
          </h2>
          <p className="mb-10 text-base text-body-color dark:text-gray-300">
            {isDe
              ? "Das SQ-Power-Modul passt in jede Standard-Unterputzdose (Ø 68 mm) und versorgt das SQ-Panel automatisch mit 5 V DC."
              : "The SQ-Power module fits into any standard flush-mounted box (Ø 68 mm) and automatically supplies the SQ-Panel with 5 V DC."}
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Left — Compatible */}
            <div className="rounded-2xl bg-white dark:bg-gray-950 p-6 shadow-sm flex flex-col">
              <h3 className="mb-1 text-center text-base font-bold text-black dark:text-white">
                {isDe
                  ? "Kompatibel mit Standard-Unterputzdosen"
                  : "Compatible with standard flush-mounted boxes"}
              </h3>
              <p className="mb-4 text-center text-sm text-body-color dark:text-gray-400">
                {isDe
                  ? "Passt in alle Standard-Unterputzdosen (Ø68 mm)"
                  : "Fits all standard flush-mounted boxes (Ø68 mm)"}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="relative h-[150px] overflow-hidden rounded-xl">
                  <Image
                    src={
                      isDe
                        ? "/images/sq-power/flush-box-de.jpeg"
                        : "/images/sq-power/flush-box-en.png"
                    }
                    alt="Flush box"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[150px] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/images/sq-power/sq-power-front.png"
                    alt="SQ-Power"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <div className="flex justify-around mb-5">
                {[
                  {
                    label: "Standard\nUP-Dose",
                    icon: <circle cx="12" cy="12" r="9" />,
                  },
                  {
                    label: isDe ? "Leichter\nZugang" : "Easy\nAccess",
                    icon: (
                      <>
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </>
                    ),
                  },
                  {
                    label: isDe ? "Geschützt" : "Protected",
                    icon: (
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    ),
                  },
                  {
                    label: isDe ? "5V\nAusgang" : "5V\nOutput",
                    icon: (
                      <>
                        <rect x="6" y="6" width="4" height="6" />
                        <rect x="14" y="6" width="4" height="6" />
                        <path d="M12 20v-8M12 20H8M12 20h4" />
                      </>
                    ),
                  },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex flex-col items-center gap-1 text-center"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      {f.icon}
                    </svg>
                    <span className="text-xs text-body-color dark:text-gray-400 whitespace-pre-line leading-tight">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-body-color dark:text-gray-400 mb-3">
                {isDe
                  ? "Einfach einsetzen, anschließen und fertig: Das SQ-Power-Modul passt in jede Standard-Unterputzdose (68 mm) und versorgt das SQ-Panel automatisch mit 5 V DC."
                  : "Simply insert, connect, and you're done: The SQ-Power module fits into any standard flush-mounted box (68 mm) and automatically supplies the SQ-Panel with 5 V DC."}
              </p>
              <p className="mt-auto text-center text-xs text-gray-400">
                Made in Germany - ChipGlobe / Carenuity
              </p>
            </div>

            {/* Right — Connections */}
            <div className="rounded-2xl bg-white dark:bg-gray-950 p-6 shadow-sm flex flex-col">
              <h3 className="mb-1 text-center text-base font-bold text-black dark:text-white">
                {isDe ? "Anschlüsse & Verkabelung" : "Connections & Wiring"}
              </h3>
              <p className="mb-4 text-center text-sm text-body-color dark:text-gray-400">
                {isDe
                  ? "Sichere, klare Anschlussoptionen für Unterputzinstallation"
                  : "Safe, clear connection options for flush-mounted installation"}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="relative h-[150px] overflow-hidden rounded-xl">
                  <Image
                    src={
                      isDe
                        ? "/images/sq-power/connection-de.jpeg"
                        : "/images/sq-power/connection-en.png"
                    }
                    alt="Connections"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[150px] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/images/sq-power/sq-power-back.png"
                    alt="SQ-Power back"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <div className="flex justify-around mb-5">
                {[
                  {
                    label: isDe ? "Strom\n(L/N)" : "Power\n(L/N)",
                    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
                  },
                  {
                    label: isDe ? "Leichter\nZugang" : "Easy\nAccess",
                    icon: (
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    ),
                  },
                  {
                    label: isDe ? "Geschützt" : "Protected",
                    icon: (
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    ),
                  },
                  {
                    label: isDe ? "5V\nAusgang" : "5V\nOutput",
                    icon: (
                      <>
                        <rect x="6" y="6" width="4" height="6" />
                        <rect x="14" y="6" width="4" height="6" />
                      </>
                    ),
                  },
                  {
                    label: isDe
                      ? "Höchste\nSicherheit\nEN 60669-2-5"
                      : "Meets highest\nsafety standards\nEN 60669-2-5",
                    icon: (
                      <>
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </>
                    ),
                  },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex flex-col items-center gap-1 text-center max-w-[52px]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      {f.icon}
                    </svg>
                    <span className="text-xs text-body-color dark:text-gray-400 whitespace-pre-line leading-tight">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-auto text-center text-xs text-gray-400">
                Made in Germany - ChipGlobe / Carenuity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SHOP WITH US ══ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-primary dark:text-green md:text-3xl">
            {isDe ? "Bei uns kaufen" : "Shop with us"}
          </h2>
          <div className="overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-sm">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-4 relative h-[280px] md:h-auto min-h-[280px]">
                <Image
                  src="/images/sq-power/sq-power3.png"
                  alt="SQ-Power"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-12 md:col-span-8 p-8 flex flex-col justify-center">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  {isDe
                    ? "Carenuity SQ-Power – In-Wall Netzteilmodul für SQ-Panel"
                    : "Carenuity SQ-Power - In-Wall Power Module for SQ-Panel"}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-body-color dark:text-gray-300">
                  {isDe
                    ? "Das Carenuity SQ-Power-Modul ist für die sichere und dauerhaft installierte Stromversorgung des Carenuity SQ-Panels konzipiert..."
                    : "The Carenuity SQ-Power module is designed for the safe and permanently installed power supply of the Carenuity SQ-Panel when..."}
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
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-primary dark:text-green md:text-4xl">
            {isDe ? "Dokumentation" : "Documentation"}
          </h2>
          <ul className="space-y-3">
            {(isDe
              ? [
                  {
                    name: "Datasheet_SQ-Panel_V1.1.3 [PDF]",
                    href: "/docs/datasheet/datasheet-sq-panel-v1.1.3-de.pdf",
                  },
                  {
                    name: "Datasheet_SQ-Power_V1.1.3 [PDF]",
                    href: "/docs/datasheet/datasheet-sq-power-v1.1.3-de.pdf",
                  },
                  {
                    name: "Datasheet_SQ-Connector_V1.1.3 [PDF]",
                    href: "/docs/datasheet/datasheet-sq-connector-v1.1.3-de.pdf",
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
                    href: "/docs/commissioning-de.pdf",
                  },
                  {
                    name: "SQ-Panel Benutzerhandbuch [PDF]",
                    href: "/docs/sq-panel-user-guide.pdf",
                  },
                ]
              : [
                  {
                    name: "Datasheet_SQ-Panel_V1.1.3 [PDF]",
                    href: "/docs/datasheet/datasheet-sq-panel-v1.1.3.pdf",
                  },
                  {
                    name: "Datasheet_SQ-Power_V1.1.3 [PDF]",
                    href: "/docs/datasheet/datasheet-sq-power-v1.1.3.pdf",
                  },
                  {
                    name: "Datasheet_SQ-Connector_V1.1.3 [PDF]",
                    href: "/docs/datasheet/datasheet-sq-connector-v1.1.3.pdf",
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
                    href: "/docs/commissioning-en.pdf",
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
