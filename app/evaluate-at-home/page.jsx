"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const IMG = "/images/evaluate";

function Btn({ href, children, small }) {
  if (!href) return null;
  const cls = small
    ? "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-semibold transition-all duration-300 hover:opacity-90"
    : "inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90";
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cls}
      style={{ backgroundColor: "#174f2e" }}
    >
      {children}
    </a>
  );
}

export default function EvaluateAtHomePage() {
  const { lang } = useLanguage();
  const de = lang === "de";

  const motto = [
    {
      img: `${IMG}/evaluate01.png`,
      title: de ? "Integrieren" : "Integrate",
      body: de
        ? "Holen Sie sich Ihr Evaluation-Kit, installieren Sie die gewünschte Anwendung kostenlos und integrieren Sie sie in Ihr Zuhause, in Ihr Smart Home oder nutzen Sie sie eigenständig (cloudfrei) – genau an dem gewünschten, ganz bestimmten Ort. Platzieren Sie es z. B. neben Ihrem Bett, auf Ihrem Schreibtisch, auf dem Kleiderschrank oder sogar in etwas anderem."
        : "Get your Evaluation Kit, install-for-free the desired application and integrate it into your home, into your smart home or use it standalone (cloudfree) — exactly in the desired and very specific place. For example, place it next to your bed, on your desk, on top of your wardrobe or even inside something else.",
      contact: true,
    },
    {
      img: `${IMG}/evaluate02.png`,
      title: de ? "Evaluieren" : "Evaluate",
      body: de
        ? "Evaluieren Sie Ihre gewünschte Funktion in den nächsten Wochen zu Hause, bis Sie zu 100 % zufrieden sind – z. B. womit Sie der SQ-Panel-Prototyp benachrichtigt und dass Ihre Automatisierungen wie gewünscht funktionieren."
        : "Evaluate your desired feature for the next weeks at home until you are 100% happy with it, e.g. on what the SQ-Panel Prototype notifies you and that your automations work as desired.",
      extra: de
        ? "SQ-Panel-Gutschriftprogramm: Geben Sie den Prototyp mit Geld-zurück-Garantie zurück, wenn Sie ein SQ-Panel kaufen. Ihr Kaufbetrag wird auf das SQ-Panel angerechnet und reduziert dessen Kosten."
        : "SQ-Panel Credit Program: Return the prototype with a money-back guarantee when buying an SQ-Panel. Your prototype purchase amount will be credited towards the SQ-Panel, reducing its cost.",
    },
    {
      img: `${IMG}/evaluate03.png`,
      title: de ? "Weiterempfehlen" : "Advocate",
      body: de
        ? "Empfehlen Sie Ihre Lösung weiter und posten Sie sie in den sozialen Medien, um mehr Menschen dafür zu begeistern. Vielleicht wird Ihre Lösung zum Trend und zu einer gefragten Funktion für viele Haushalte."
        : "Advocate your solution and post it on social media to get more people into it. Possibly your solution makes a trend and becomes an asked-for feature in many homes.",
    },
  ];

  const kits = [
    {
      img: `${IMG}/kit-s.png`,
      title: de ? "Evaluation-Kit M für Standard-Displays" : "Evaluation Kit M for Standard Displays",
      desc: de
        ? "Geeignet für Raspberry Pi Pico W mit Infineon-WLAN-Modul. Kompatibel mit 0,66- und 0,96-Zoll-Displays."
        : "Suited for Raspberry Pi Pico W that comes with Infineon Wifi module. Compatible with 0.66 inch & 0.96 inch displays.",
      install: "/c3-mini",
    },
    {
      img: `${IMG}/kit.png`,
      title: de ? "Sensor-Auswahlbox für Multi-Sensor-Evaluation" : "Sensor Selection Box for Multi Sensor Evaluation",
      desc: de
        ? "Geeignet für D1- und C3-Mini-Boards, inklusive sieben Sensoren, einem Display und einem Summer. Kompatibel mit 0,66- und 0,96-Zoll-Displays."
        : "Suited for D1- and C3-Mini boards, including seven sensors, a display and a buzzer. Compatible with 0.66 inch & 0.96 inch displays.",
      buy: "https://www.chipglobe.shop/en/p/modular-c3-mini-sensor-selection-box",
      install: "/c3-mini-box-devices",
    },
    {
      img: `${IMG}/kit-l.png`,
      title: de ? "Evaluation-Kit L „Der Triple-Adapter“" : 'Evaluation Kit L "The Triple-Adapter"',
      desc: de
        ? "Geeignet für D1- und C3-Mini-Boards und alle Sensoren. Kompatibel mit 0,66- und 0,96-Zoll-Displays."
        : "Suited for D1- and C3-Mini boards and all sensors. Compatible with 0.66 inch and 0.96 inch displays.",
    },
    {
      img: `${IMG}/kit-xl.png`,
      title: de ? "Evaluation-Kit XL für große Displays" : "Evaluation Kit XL for Large Displays",
      desc: de
        ? "Geeignet für D1- und C3-Mini-Boards und alle Sensoren. Kompatibel mit großen 2,6- und 2,8-Zoll-Displays."
        : "Suited for D1- and C3-Mini boards and all sensors. Compatible with large 2.6 inch and 2.8 inch displays.",
      buy: "https://solutions.carenuity.com/solutions/3EUP0e9QDFbzixeSbbUE",
      install: "https://solutions.carenuity.com/microcontrollers/4OQQy4edGswvbN6boCKw",
    },
  ];

  const enclosures = [
    {
      img: `${IMG}/sq-panel-s-m.png`,
      title: de ? "SQ-Panel-ähnliches Gehäuse – Größe „S/M“" : 'SQ-Panel-like Enclosure — Size "S/M"',
      desc: de
        ? "Ein kleines SQ-Panel-ähnliches Gehäuse in Größe S/M auf dem SQ-TableStand für das 79,1 × 79,1 mm Evaluation-Kit, optimiert für eine Vielzahl von Sensoren mit dem Raspberry Pi Pico W (Infineon WLAN) und dem 0,66- oder 0,96-Zoll-OLED-Display."
        : "A small SQ-Panel-like S/M-sized housing on top of the SQ-TableStand to accommodate the 79.1 × 79.1 mm Evaluation-Kit, optimized to house a variety of sensors with the Raspberry Pi Pico W (Infineon Wifi) and the 0.66 or 0.96 inch OLED display.",
    },
    {
      img: `${IMG}/sq-panel-l.png`,
      title: de ? "SQ-Panel-ähnliches Gehäuse – Größe „L“" : 'SQ-Panel-like Enclosure — Size "L"',
      desc: de
        ? "Ein SQ-Panel-ähnliches Gehäuse in Größe L mit dem SQ-TableStand für das 66,4 × 66,4 mm Evaluation-Kit, optimiert für den Triple-Adapter mit Sensor, C3-Mini und einem 0,66- oder 0,96-Zoll-OLED-Display. Eine S-Variante (64,0 × 64,0 mm) ist in Vorbereitung."
        : "A SQ-Panel-like L-sized housing with the SQ-TableStand to accommodate the 66.4 × 66.4 mm Evaluation-Kit, optimized to house the Triple-Adapter with Sensor, C3-Mini and a 0.66 or 0.96 inch OLED display. An S-sized variant (64.0 × 64.0 mm) is in preparation.",
    },
    {
      img: `${IMG}/sq-panel-xl.png`,
      title: de ? "SQ-Panel-ähnliches Gehäuse – Größe „XL“" : 'SQ-Panel-like Enclosure — Size "XL"',
      desc: de
        ? "Das besonders große SQ-Panel-ähnliche XL-Gehäuse mit dem SQ-TableStand für die großen 2,4- oder 2,8-Zoll-Displays nimmt das 87,0 × 87,0 mm Evaluation-Kit auf. Vorzugsweise wird es mit einer Spionspiegelfolie überzogen, um die Elektronik zu verbergen und ihm das Aussehen eines Smart Mirrors zu verleihen."
        : "The extra large SQ-Panel-like XL-sized housing with the SQ-TableStand for the large 2.4- or 2.8-inch displays can accommodate the 87.0 × 87.0 mm Evaluation-Kit. It preferably gets covered with a spy mirror foil to conceal the electronics and give it the appearance of a smart mirror.",
    },
  ];

  const altEnclosures = [
    {
      img: `${IMG}/sq-panel03.png`,
      title: de ? "Alternatives Gehäuse – Größe „M“" : 'Alternative Enclosure — Size "M"',
      desc: de
        ? "Dieses mittelgroße Gehäuse hat eine quadratische Form und ist optimiert, um flach auf dem Schreibtisch oder Ständer zu liegen. Es ist in Varianten passend zu den Sensoren erhältlich und nimmt das 0,66- oder 0,96-Zoll-OLED-Display auf. Ein TableStand ist auf Anfrage erhältlich."
        : "This medium-sized housing has a square shape and is optimized to lie flat on the desk or stand. It comes in variants to match the sensors and accommodates the 0.66 or 0.96 inch OLED display. A TableStand is available on request.",
    },
    {
      img: `${IMG}/sma.png`,
      title: de ? "Alternatives Gehäuse – Größe „L“" : 'Alternative Enclosure — Size "L"',
      desc: de
        ? "Dieses Gehäuse ist platzsparend für Ihren Schreibtisch optimiert und die erste Wahl für Einsteiger. Es ist in Varianten passend zu verschiedenen Sensoren erhältlich und nimmt das 0,66- oder 0,96-Zoll-OLED-Display auf. Sie können es auf 3D-druckbaren TableStands stapeln."
        : "This enclosure is optimized to save space on your desk and is first choice for beginners. It comes in variants to match various sensors and accommodate the 0.66 or 0.96 inch OLED display. You can stack it on 3D-printable TableStands.",
    },
    {
      img: `${IMG}/sq-panel02.png`,
      title: de ? "Alternatives Gehäuse – Größe „XL“" : 'Alternative Enclosure — Size "XL"',
      desc: de
        ? "Dieses quadratische Gehäuse wird mit einem TableStand geliefert, genau wie das SQ-Panel. Die Elektronik befindet sich neben dem großen 2,4- oder 2,8-Zoll-Display, das vorzugsweise mit einer Spionspiegelfolie überzogen wird, um die Elektronik zu verbergen und ihm das Aussehen eines Smart Mirrors zu verleihen."
        : "This square-shaped housing comes with a TableStand, just like the SQ-Panel. The electronics are located next to the large 2.4- or 2.8-inch display, which preferably is covered with a spy mirror foil to conceal the electronics and give it the appearance of a smart mirror.",
    },
  ];

  return (
    <main>
      {/* Hero */}
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
            <Link href="/" className="text-green-300/70 hover:text-green-300 transition-colors">
              {de ? "Startseite" : "Home"}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">
              {de ? "Feature-Evaluation" : "Feature Evaluation"}
            </span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-base leading-none">🧪</span>
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {de ? "SQ-Labs Evaluate-at-Home" : "SQ-Labs Evaluate-at-Home"}
              </span>
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {de ? "SQ-Labs Feature-Evaluation" : "SQ-Labs Feature Evaluation"}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              {de
                ? "Installieren Sie neue Funktionen kostenlos auf Ihrem Evaluation-Kit und geben Sie Feedback, um es perfekt zu machen."
                : "Install-for-Free new features on your Evaluation Kit and give feedback to make it perfect."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container space-y-12">
          {/* Intro */}
          <div className="rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <video
              src="/video/sma.mp4"
              loop
              autoPlay
              muted
              playsInline
              className="w-full rounded-xl"
            />
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
                {de
                  ? "Neugierig auf neue Funktionen für das SQ-Panel?"
                  : "Curious about new features for the SQ-Panel?"}
              </h2>
              <p className="font-semibold text-primary dark:text-green-400 mb-3">
                {de
                  ? "Installieren Sie neue Funktionen kostenlos auf Ihrem Evaluation-Kit und geben Sie Feedback, um es perfekt zu machen."
                  : "Install-for-Free new features on your Evaluation Kit and feedback to make it perfect."}
              </p>
              <p className="text-body-color dark:text-green leading-relaxed">
                {de
                  ? "So bringen Sie neue Funktionen direkt aus der SQ-Labs-Entwicklung in Ihr Zuhause. Sind Sie neugierig auf Funktionen, die noch nicht auf Ihrem SQ-Panel verfügbar sind? Dann installieren Sie die neuen einfach kostenlos auf Ihrem Evaluation-Kit – und testen Sie sie zu Hause. Wir freuen uns auf Ihr Feedback zu jeder neuen Funktion! Welche Erfahrungen haben Sie damit im Alltag gemacht?"
                  : "This is the way to get new features into your home, directly from the SQ-Labs development. Are you curious about features that are not yet available on your SQ-Panel? Then simply install-for-free the new ones on your evaluation kit — and try them out at home. We look forward to your feedback on each new feature! What experiences have you had with it in your everyday life at home?"}
              </p>
            </div>
          </div>

          {/* Motto */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 text-center">
              {de
                ? "Unser Motto: integrieren – evaluieren – weiterempfehlen!"
                : "Our motto: integrate — evaluate — advocate!"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {motto.map((m, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.title} className="w-full h-auto object-contain bg-white" />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-bg dark:bg-gray-800 text-sm font-bold text-primary dark:text-green-400">
                        {i + 1}
                      </span>
                      <h3 className="text-lg font-bold text-black dark:text-white">{m.title}</h3>
                    </div>
                    <p className="text-body-color dark:text-green text-sm leading-relaxed">{m.body}</p>
                    {m.extra && (
                      <p className="text-body-color dark:text-green text-sm leading-relaxed mt-3">
                        {m.extra}
                      </p>
                    )}
                    {m.contact && (
                      <p className="mt-3 text-sm">
                        <a
                          href="mailto:max.mergenthaler@chipglobe.com"
                          className="text-primary dark:text-green-400 font-semibold hover:underline"
                        >
                          {de ? "Kontaktieren Sie uns" : "Contact us"}
                        </a>{" "}
                        {de ? "für ganz besondere Orte." : "for very special places."}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results flow */}
          <div className="rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm p-6 md:p-8">
            <h3 className="text-lg font-bold text-black dark:text-white mb-6">
              {de
                ? "Vom SQ-Panel-Prototyp zur implementierten Funktion des SQ-Panels"
                : "From SQ-Panel Prototype to an implemented feature of SQ-Panel"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-2 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/check1.png`} alt="check" className="h-24 w-auto object-contain" />
              </div>
              <div className="md:col-span-6">
                <ul className="space-y-3">
                  {[
                    [
                      "It works at that specific place in your home.",
                      "Es funktioniert an genau diesem Ort in Ihrem Zuhause.",
                    ],
                    [
                      "It continuously adds value over a period of time.",
                      "Es bietet über einen längeren Zeitraum kontinuierlich Mehrwert.",
                    ],
                    [
                      "It is interesting for more users with similar use cases.",
                      "Es ist für weitere Nutzer mit ähnlichen Anwendungsfällen interessant.",
                    ],
                  ].map((row, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 text-primary dark:text-green-400">✓</span>
                      <span className="text-black dark:text-white font-semibold text-sm">
                        {de ? row[1] : row[0]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-1 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/arrow.png`} alt="arrow" className="h-24 w-auto object-contain rotate-90 md:rotate-0" />
              </div>
              <div className="md:col-span-3 text-center">
                <p className="text-sm font-semibold text-primary dark:text-green-400 mb-2">
                  {de ? "Implementierung der Funktion" : "Implementation of the feature"}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/sq-panel.png`} alt="SQ-Panel" className="h-24 w-auto object-contain mx-auto" />
              </div>
            </div>
          </div>

          {/* Eval kits overview */}
          <div>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
              {de
                ? "Eval-Kits zum frühen Testen neuer Funktionen"
                : "Eval-Kits for early-bird testing of new features"}
            </h2>
            <p className="text-body-color dark:text-green mb-6 max-w-3xl">
              {de
                ? "Wir bieten Eval-Kits in verschiedenen Größen für die Platzierung an jedem Ort und in jeder Höhe. Welche Größe bevorzugen Sie?"
                : "We provide Eval-Kits in various sizes for placement at any spot and at any height. Which size do you prefer for evaluating the desired features at home?"}
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/evaluation-kits-overview-1.png`}
                alt="Evaluation kits overview"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Three sizes / kit cards */}
          <div>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              {de
                ? "Die Evaluation-Kits gibt es in drei Größen, die perfekt in Ihr Zuhause passen:"
                : "The Evaluation Kits come in three sizes to perfectly fit in your home:"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kits.map((k, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm p-6 flex gap-5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={k.img} alt={k.title} className="w-28 h-28 object-contain shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-primary dark:text-green-400 mb-2">{k.title}</h3>
                    <p className="text-body-color dark:text-green text-sm leading-relaxed mb-3">{k.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      <Btn href={k.buy} small>
                        {de ? "Jetzt kaufen" : "Buy Now"}
                      </Btn>
                      <Btn href={k.install} small>
                        {de ? "Kostenlos installieren" : "Install for free"}
                      </Btn>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Select sensor */}
          <div className="rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
              {de ? "Den richtigen Sensor auswählen" : "Select the right Sensor"}
            </h2>
            <p className="text-body-color dark:text-green mb-5 max-w-3xl">
              {de
                ? "Wählen Sie eine der fertigen Single-Sensor-Boxen oder lassen Sie sich bei einem Rundgang durch die Show-Rooms inspirieren, um Sensor, Mikrocontroller und Aktuator individuell auszuwählen."
                : "Choose one of the ready-made Single Sensor Boxes or get inspired from a walk through the Show-Rooms to select the sensor, microcontroller and actuator individually."}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Btn href="/sensor-boxes">
                {de ? "Single-Sensor-Boxen wählen" : "Choose Single Sensor Boxes"}
              </Btn>
              <span className="text-body-color dark:text-green font-semibold">{de ? "oder" : "or"}</span>
              <Btn href="/selection-box">
                {de ? "Anderen Sensor auswählen" : "Select other Sensor"}
              </Btn>
            </div>
          </div>

          {/* Housings */}
          <div>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
              {de ? "Gehäuse für Ihre Evaluation" : "Housings for your Evaluation"}
            </h2>
            <p className="text-body-color dark:text-green mb-6 max-w-3xl">
              {de
                ? "Single-Sensor-Boxen werden mit Gehäuse geliefert. Möchten Sie Ihr Gerät individuell gestalten, bieten wir 3D-Druckvorlagen auf Thingiverse an."
                : "Single Sensor Boxes come with enclosure. If you want to customize your device, we offer 3D-printables on Thingiverse."}
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm mb-8">
              <video src="/video/sq-panel.mp4" loop autoPlay muted playsInline className="w-full" />
            </div>

            <h3 className="text-lg font-bold text-black dark:text-white mb-4">
              {de ? "SQ-Panel-ähnliche Gehäuse" : "SQ-Panel-like enclosures"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {enclosures.map((e, i) => (
                <EnclosureCard key={i} {...e} />
              ))}
            </div>

            <h3 className="text-lg font-bold text-black dark:text-white mb-4">
              {de ? "Alternative Gehäuse" : "Alternative enclosures"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {altEnclosures.map((e, i) => (
                <EnclosureCard key={i} {...e} />
              ))}
            </div>
          </div>

          {/* STL */}
          <div className="rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm p-6 md:p-8">
            <h3 className="text-lg font-bold text-black dark:text-white mb-3">
              {de ? "Sie können die STL-Dateien hier herunterladen:" : "You can download the STL from here:"}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-body-color dark:text-green text-sm leading-relaxed">
              <li>
                {de
                  ? "Prototyp S: Kleines 66,4 × 66,4 mm Baseboard mit Raspberry Pi Pico W und Sensoren"
                  : "Prototype S: Small 66.4 × 66.4 mm baseboard with Raspberry Pi Pico W and sensors"}
              </li>
              <li>
                {de
                  ? "Prototyp L: Großes 79,1 × 79,1 mm zum direkten Stapeln des klassischen Triple-Adapters"
                  : "Prototype L: Large 79.1 × 79.1 mm for direct stacking of the Classic Triple-Adapter"}
              </li>
              <li>
                {de
                  ? "Prototyp XL: eXtra-Large 97,0 × 97,0 mm für C3-Mini mit 2,8-Zoll-Display"
                  : "Prototype XL: eXtra-Large 97.0 × 97.0 mm for C3-Mini with 2.8 inch display"}
              </li>
            </ul>
          </div>

          {/* Getting started */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
              {de ? "Erste Schritte:" : "Getting started:"}
            </h2>
            <p className="text-body-color dark:text-green mb-6 max-w-2xl mx-auto">
              {de
                ? "Wir fügen kontinuierlich weitere Anwendungen für Ihre Evaluation hinzu. So gelingt der einfache Einstieg:"
                : "We continuously add more applications for your evaluation. Find guidance how to easily get started:"}
            </p>
            <Btn href="/install-for-free">Install-for-Free</Btn>
          </div>
        </div>
      </section>
    </main>
  );
}

function EnclosureCard({ img, title, desc }) {
  return (
    <div className="rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={title} className="w-full h-auto object-contain bg-white" />
      <div className="p-5">
        <h4 className="text-sm font-bold text-primary dark:text-green-400 mb-2">{title}</h4>
        <p className="text-body-color dark:text-green text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
