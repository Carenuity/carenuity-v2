"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";

/* ─────────────────────────────────────────────────────────
   Images: /images/sq-panel/tile-en.png  tile-de.png
                             slide-en.png slide-de.png
───────────────────────────────────────────────────────── */
function LangImg({ name, alt, className = "" }) {
  const { lang } = useLanguage();
  const src = `/images/sq-panel/${name}-${lang === "de" ? "de" : "en"}.png`;
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width:768px) 100vw, 90vw"
      />
    </div>
  );
}

/* HTML5 video player — autoplay, loop, no controls */
function VideoPlayer({ src, className = "" }) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl bg-black ${className}`}>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full"
        style={{ aspectRatio: "16/9" }}
      />
    </div>
  );
}

const en = {
  breadcrumb: ["Home", "SQ-System", "SQ-Panel", "Technicalities"],
  hero: {
    headline: "Your indoor health, at a glance.",
    subline:
      "SQ-Panel shows live environmental readings so you can act quickly and breathe easier.",
  },
  tiles: {
    heading: "All tiles with explanation at a glance.",
    body: "The tiles change color as soon as values become critical. Using the colors of a traffic light, for example, this tile changes to red when the CO2 level is high.",
    list: [
      "Room temperature",
      "Relative humidity",
      "Air pressure (soon in mbar)",
      "Air quality index",
      "Carbon dioxide content of the air / CO2",
      "Number of organic comp. VOC",
    ],
  },
  alarms: {
    heading: "Room temperature, humidity, etc. with alarm function",
    body: "To monitor the temperature and humidity as well as other air parameters, you can set threshold values that, if exceeded, automatically trigger a flashing alarm on the display and a notification on your smartphone.",
    cards: [
      {
        caption: "Here is an example of the setting option for the temperature",
        img: "/images/sq-panel/temperature.png",
      },
      {
        caption:
          "Control and display of the humidity. This can help you prevent possible mold formation.",
        img: "/images/sq-panel/humidit.png",
      },
    ],
  },
  radar: {
    heading: "What other radar features are on the roadmap?",
    body: "A latest 60 GHz radar sensor (mmWave) is integrated in the SQ-Panel, which will allow further features to be activated on the SQ-Panel. This allows us to enable various functions for your smart home that improve energy efficiency as well as security and comfort. Here are some features that will be implemented once the funding goal is reached:",
    list: [
      "Energy efficiency: By monitoring occupancy, the sensor can detect whether people are in the room and control the activity of devices accordingly to save energy.",
      "Safety: Radar sensors can help improve safety by detecting movement and triggering alarms when an unauthorized person is detected or when a person is in danger of falling or falls and assistance is needed.",
      "Comfort: Automatic lighting and temperature control based on the detection of people in the room for greater comfort.",
      "Non-invasive monitoring: For the elderly or patients, the sensor can monitor movements and vital signs without violating privacy.",
      "Precise motion detection: With high sensitivity, even sub-millimeter movements can be detected, which can be useful for applications such as sleep monitoring or sensitive gesture control.",
    ],
    community:
      "Your participation is desired: Join our community via our website to be directly involved in defining and prioritizing these features. Your voice and suggestions will help us to make the SQ-Panel the central building block for every room monitoring.",
    ai: "Our AI competence team is constantly developing concepts to recognize recurring patterns from the wealth of different measurement data from the SQ-Panel. These patterns represent relevant life situations that can further improve the comfort of the smart home at home or in the office.",
  },
  placement: {
    heading: "Can I place the SQ-Panel anywhere?",
    body: "On our website we offer you detailed information on what considerations you should make in order to identify the optimal location for the SQ-Panel.",
    intro:
      "Using the SQ-Panel as a tabletop device or wall-mounted offers its own advantages:",
    list: [
      "Flexibility: Easy to move and reposition.",
      "Easy installation: No need for drilling or wall mounting.",
      "Accessibility: Easy access for maintenance or replacement, but less reliable operation.",
    ],
  },
  mounting: {
    heading:
      "Wall mounting with SQ-Power in the flush-mounted installation, which supplies the SQ-Panel with 220V:",
    intro: "The advantages of the flush-mounted solution are in the wall:",
    list: [
      "Space-saving: The SQ-Panel does not take up valuable space on work surfaces or shelves such as tables, dressers or shelves.",
      "Aesthetics: Wall mounting ensures a modern and tidy appearance. No cables - cable-free!",
      "Safety: Reduced risk of the device being knocked over or moved. Accuracy and comparability of measurement results. Ensuring that the SQ-Panel is not accidentally or intentionally switched off, thereby deactivating safety functions.",
    ],
  },
  theft: {
    heading: "Theft protection through flush-mounted installation.",
    p1: "To minimize the risk of the Carenuity SQ panel being stolen in public spaces, Flush mounting is recommended instead of placing it on a table as a 5V USB device. By flush-mounting, the display is firmly integrated into the wall, which increases the likelihood The risk of theft is significantly reduced compared to a free-standing device with a USB cable. This Measure can be viewed as a form of structural security in accordance with applicable safety standards.",
    p2: "Although the display can still be removed, it is less likely to be stolen because it is firmly anchored probably. Additionally, the cloud-bound device can be configured to allow removal from the wall is registered. This enables a warning if the device is removed without authorization and therefore increases the security of the system. In legal terms, this is considered a preventive measure to secure Property in accordance with relevant regulations and standards.",
  },
  conclusion: {
    heading: "Conclusion on the mounting options.",
    body: "Both mounting options have their advantages and the choice depends on your specific requirements and preferences. We recommend wall mounting for permanent installation and table stand (docking station) for the initial phase of familiarizing yourself with the SQ-Panel.",
  },
  specs: {
    heading: "Technical Details",
    rows: [
      { f: "Product Type", d: "Sensor Panel" },
      {
        f: "Power Consumption",
        d: "(direct connection with 220–240V AC Transformer) max 5W · 120–240V AC 50/60Hz",
      },
      { f: "Light Output", d: "200 lumen/meter²/steradian" },
      { f: "Display Size", d: "2.6-inch touchscreen" },
      { f: "60-GHz Radar Sensor", d: "60-GHz Radar Sensor" },
      {
        f: "Radar Field of View (FoV)",
        d: "90° Horizontal Plane Beamwidth (HPBW) · −45° Azimuth & +40° Elevation FoV",
      },
      {
        f: "Radar Applications",
        d: "Micro-motion detection, industrial and consumer IoT",
      },
      {
        f: "Antenna",
        d: "Antennas-in-Package (AiP) design for compact integration",
      },
      {
        f: "Environmental Usage",
        d: "Suitable for indoor applications, optimized for IoT",
      },
      {
        f: "Temperature Sensor",
        d: "Monitors the ambient temperature, enabling climate control systems and user comfort adjustments",
      },
      {
        f: "Humidity Sensor",
        d: "Tracks humidity levels to support air quality monitoring and HVAC optimization",
      },
      {
        f: "VOC Sensor",
        d: "Measures total volatile organic compounds to monitor air quality",
      },
      {
        f: "CO₂ Sensor",
        d: "Monitors carbon dioxide levels to ensure a healthy indoor environment",
      },
      {
        f: "Indoor Air Quality Sensor",
        d: "Monitors overall air quality, combining data from multiple sensors",
      },
      {
        f: "Pressure Sensor",
        d: "Measures air pressure to provide comprehensive environmental monitoring",
      },
    ],
  },
  freq: {
    heading: "Advantages of the 868 MHz Frequency",
    list: [
      "Increased Range: The 868 MHz frequency allows for a greater range of wireless connections, which is particularly beneficial in larger homes or buildings.",
      "Better Wall Penetration: Frequency has better penetration through thick walls compared to 2.4 GHz, leading to more reliable connections indoors.",
      "Less Interference and More Bandwidth for Your Home Network: Since the 868 MHz frequency is less congested than the 2.4 GHz band, there is less interference from other devices like Wi-Fi or Bluetooth, resulting in more speed and bandwidth for your devices.",
      "Energy Efficiency: Devices operating on 868 MHz can be more energy-efficient as they require less power to penetrate walls.",
      "Security and Reliability: The bidirectional communication and encryption of all radio packets enhance the security and reliability of the system.",
    ],
  },
  security: {
    heading: "Topic: Data security",
    p1: "The SQ-Panel meets the highest security requirements and has end-to-end encryption. A special security chip (HW-Security) contains our certificate, which ensures a continuous secure connection of the sensor data to our servers. We are a registered partner of Gaia-X and plan to store all data exclusively on European servers. This infrastructure complies with German security standards. Your personal cloud for the automatic storage of your sensor data will be based on the European cloud initiative Gaia-X as soon as it is available.",
    p2: "Gaia-X is an initiative we actively support that aims to create a secure and trusted data infrastructure for Europe.",
    gaiaBenefits: "The benefits on Gaia-X include:",
    list: [
      "Security and data protection: End-to-end encryption ensures that your data remains safe and protected during transmission and storage in accordance with European standards.",
      "Flexibility and interoperability: An open architecture enables easy integration and promotes collaboration between different cloud services.",
      "Innovation and competition: Gaia-X promotes innovation and strengthens competition by supporting European principles such as data sovereignty, GDPR compliance, transparency and open source.",
    ],
  },
  usp: {
    heading: "Unique selling point reach.",
    body: "The extended range is about 80m, which is significantly further than any WLAN.",
  },
  jung: {
    heading: "Perfect design – a question of good taste: JUNG",
    p1: "The SQ-Panel integrates perfectly into the JUNG design switch system, allowing you to control your household appliances in a proven location near the door next to classic JUNG switches, possibly in a multiple frame (two, three, four frames), and enable you to control the settings via the display in an extremely convenient way. In addition to the precise compatibility with JUNG, which arose from direct cooperation with the manufacturer's team, we are also planning integration into other renowned switch systems, such as those from Busch-Jäger and Gira.",
    p2: "Do you want a specific setting to maintain the temperature and brightness of the room when you are working, sleeping or just watching a movie? With SQ-Panel, you will preset different scenes based on certain conditions detected by radar and AI algorithms, which you can then trigger at any time.",
    p3: "With the SQ-Panel, which integrates perfectly with every app of the Matter standard, your smart home experience is significantly optimized. Control over your household appliances is expanded to include automatic situation recognition thanks to radar. In addition to direct control on the SQ-Panel or in the house, you can also provide aspects of security and care for family members in your smart home remotely via the app and be alerted in critical situations.",
    p4: "With the SQ-Panel, your devices can remain in energy-saving mode when you are away and automatically switch to standby when you are there. This saves money. The SQ-Panel will also help you monitor your regular household appliances via the display, automate them with gesture or simple voice control via Alexa, Google, Home Assistant or Siri, making your home smarter and more comfortable.",
    p5: "With powerful built-in sensors and the Thread connection to Matter, the SQ-Panel not only enables comprehensive automation control, but also more information about your environment, including weather, outside temperature, inside temperature, device status, alarm indicator, time and date.",
  },
  outlook: {
    heading: "Outlook",
    p1: "How would it be if the SQ-Panel gave you an easy way to monitor and control other devices in your home or to record other environmental parameters by adding more sensors - and still control all of this with a glance at the SQ-Panel display? That's exactly what the SQ-Panel should offer you: the display of lights, open windows, energy consumption and even electric blinds and curtains - the world of home automation should remain accessible to you at a glance and improve your comfort!",
    p2: "Use the touchscreen up close, get information using voice assistants without being near the SQ-Panel, or use your standard app to control the SQ-Panel in conjunction with all your devices thanks to Matter and monitor your smart home, even if you are miles away! And when you are within sight, you should be able to adjust the font size of the letters and numbers on the tiles of the display depending on the distance.",
  },
  env: {
    heading: "Environmental commitments",
    link: "Visit our Environmental Resources Center",
    linkSuffix: " to learn how Kickstarter encourages sustainable practices.",
    design: "Long-lasting design",
    designBody:
      "The design of the SQ-Panel was developed in collaboration with the German switch system manufacturer JUNG, which is known for its timeless design.",
  },
  helpBtn: "SQ-Panel Help Center →",
};

const de = {
  breadcrumb: ["Startseite", "SQ-System", "SQ-Panel", "Technikdetails"],
  hero: {
    headline: "Ihre Raumluft auf einen Blick.",
    subline:
      "Das SQ-Panel zeigt Live-Umgebungsmesswerte an, damit Sie schnell handeln und leichter atmen können.",
  },
  tiles: {
    heading: "Alle Kacheln mit Erklärung auf einen Blick.",
    body: "Die Kacheln ändern ihre Farbe, sobald Werte kritisch werden. Nach dem Ampelprinzip wird diese Kachel z.B. rot, wenn der CO2-Wert zu hoch ist.",
    list: [
      "Raumtemperatur",
      "Relative Luftfeuchtigkeit",
      "Luftdruck (bald in mbar)",
      "Luftqualitätsindex",
      "Kohlendioxidgehalt der Luft / CO2",
      "Anzahl organischer Verb. VOC",
    ],
  },
  alarms: {
    heading: "Raumtemperatur, Luftfeuchtigkeit usw. mit Alarmfunktion",
    body: "Zur Überwachung der Temperatur und Luftfeuchtigkeit sowie anderer Luftparameter können Sie Schwellenwerte festlegen, bei deren Überschreitung automatisch ein Blinkalarm auf dem Display und eine Benachrichtigung auf Ihrem Smartphone ausgelöst werden.",
    cards: [
      {
        caption:
          "Hier ist ein Beispiel für die Einstellmöglichkeit für die Temperatur",
        img: "/images/sq-panel/temperature.png",
      },
      {
        caption:
          "Steuerung und Anzeige der Luftfeuchtigkeit. Dies kann helfen, mögliche Schimmelbildung zu verhindern.",
        img: "/images/sq-panel/humidit.png",
      },
    ],
  },
  radar: {
    heading: "Welche weiteren Radarfunktionen sind in der Roadmap?",
    body: "Ein neuester 60-GHz-Radarsensor (mmWave) ist in das SQ-Panel integriert, der es ermöglicht, weitere Funktionen zu aktivieren. Dies ermöglicht es uns, verschiedene Funktionen für Ihr Smart Home zu aktivieren, die die Energieeffizienz sowie Sicherheit und Komfort verbessern. Hier sind einige Funktionen, die implementiert werden, sobald das Finanzierungsziel erreicht ist:",
    list: [
      "Energieeffizienz: Durch die Überwachung der Belegung kann der Sensor erkennen, ob sich Personen im Raum befinden, und die Aktivität der Geräte entsprechend steuern, um Energie zu sparen.",
      "Sicherheit: Radarsensoren können die Sicherheit verbessern, indem sie Bewegungen erkennen und Alarme auslösen.",
      "Komfort: Automatische Beleuchtungs- und Temperatursteuerung basierend auf der Erkennung von Personen im Raum.",
      "Nicht-invasive Überwachung: Für ältere Menschen oder Patienten kann der Sensor Bewegungen und Vitalzeichen überwachen, ohne die Privatsphäre zu verletzen.",
      "Präzise Bewegungserkennung: Selbst Bewegungen im Submillimeterbereich können erkannt werden.",
    ],
    community:
      "Ihre Beteiligung ist erwünscht: Treten Sie unserer Community über unsere Website bei, um direkt an der Definition und Priorisierung dieser Funktionen beteiligt zu sein.",
    ai: "Unser KI-Kompetenzteam entwickelt ständig Konzepte, um wiederkehrende Muster aus der Fülle verschiedener Messdaten des SQ-Panels zu erkennen.",
  },
  placement: {
    heading: "Kann ich das SQ-Panel überall aufstellen?",
    body: "Auf unserer Website bieten wir Ihnen detaillierte Informationen darüber, welche Überlegungen Sie anstellen sollten, um den optimalen Standort für das SQ-Panel zu ermitteln.",
    intro:
      "Die Verwendung des SQ-Panels als Tischgerät oder wandmontiert bietet jeweils eigene Vorteile:",
    list: [
      "Flexibilität: Einfach zu bewegen und neu zu positionieren.",
      "Einfache Installation: Kein Bohren oder Wandmontage erforderlich.",
      "Zugänglichkeit: Einfacher Zugang für Wartung oder Austausch, aber weniger zuverlässiger Betrieb.",
    ],
  },
  mounting: {
    heading:
      "Wandmontage mit SQ-Power in der Unterputz-Installation, die das SQ-Panel mit 220V versorgt:",
    intro: "Die Vorteile der Unterputzlösung liegen in der Wand:",
    list: [
      "Platzsparend: Das SQ-Panel nimmt keinen wertvollen Platz auf Arbeitsflächen oder Regalen ein.",
      "Ästhetik: Die Wandmontage sorgt für ein modernes und ordentliches Erscheinungsbild. Keine Kabel — kabellos!",
      "Sicherheit: Geringeres Risiko, dass das Gerät umgestoßen oder bewegt wird. Genauigkeit und Vergleichbarkeit der Messergebnisse.",
    ],
  },
  theft: {
    heading: "Diebstahlschutz durch Unterputz-Montage.",
    p1: "Um das Risiko eines Diebstahls des Carenuity SQ-Panels in öffentlichen Räumen zu minimieren, wird die Unterputzmontage anstelle einer Aufstellung als 5V-USB-Gerät empfohlen. Durch die Unterputzmontage wird das Display fest in die Wand integriert, was das Diebstahlrisiko im Vergleich zu einem freistehenden Gerät mit USB-Kabel erheblich reduziert.",
    p2: "Obwohl das Display noch entfernt werden kann, ist es weniger wahrscheinlich, dass es gestohlen wird, da es wahrscheinlich fest verankert ist. Zusätzlich kann das Cloud-gebundene Gerät so konfiguriert werden, dass eine Entnahme von der Wand registriert wird.",
  },
  conclusion: {
    heading: "Fazit zu den Montageoptionen.",
    body: "Beide Montageoptionen haben ihre Vorteile, und die Wahl hängt von Ihren spezifischen Anforderungen und Vorlieben ab. Wir empfehlen die Wandmontage für eine dauerhafte Installation und den Tischständer (Dockingstation) für die erste Kennenlernphase mit dem SQ-Panel.",
  },
  specs: {
    heading: "Technische Details",
    rows: [
      { f: "Produkttyp", d: "Sensorpanel" },
      {
        f: "Stromverbrauch",
        d: "(Direktanschluss mit 220–240V AC Transformator) max. 5W · 120–240V AC 50/60Hz",
      },
      { f: "Lichtleistung", d: "200 Lumen/Meter²/Steradiant" },
      { f: "Displaygröße", d: "2,6-Zoll-Touchscreen" },
      { f: "60-GHz-Radarsensor", d: "60-GHz-Radarsensor" },
      {
        f: "Radar-Sichtfeld (FoV)",
        d: "90° Horizontale Ebene Strahlbreite (HPBW) · −45° Azimut & +40° Elevation FoV",
      },
      {
        f: "Radaranwendungen",
        d: "Mikrobewegungserkennung, industrielles und Consumer-IoT",
      },
      {
        f: "Antenne",
        d: "Antennas-in-Package (AiP) Design für kompakte Integration",
      },
      {
        f: "Umgebungsnutzung",
        d: "Für Innenanwendungen geeignet, für IoT optimiert",
      },
      {
        f: "Temperatursensor",
        d: "Überwacht die Umgebungstemperatur für Klimasteuerung und Nutzerkomfort",
      },
      {
        f: "Feuchtigkeitssensor",
        d: "Verfolgt Feuchtigkeitswerte zur Luftqualitätsüberwachung und HVAC-Optimierung",
      },
      {
        f: "VOC-Sensor",
        d: "Misst flüchtige organische Gesamtverbindungen zur Luftqualitätsüberwachung",
      },
      {
        f: "CO₂-Sensor",
        d: "Überwacht den Kohlendioxidgehalt für ein gesundes Innenraumklima",
      },
      {
        f: "Innenraumluftqualitätssensor",
        d: "Überwacht die Gesamtluftqualität durch Kombination mehrerer Sensordaten",
      },
      {
        f: "Drucksensor",
        d: "Misst den Luftdruck für umfassendes Umgebungsmonitoring",
      },
    ],
  },
  freq: {
    heading: "Vorteile der 868-MHz-Frequenz",
    list: [
      "Erhöhte Reichweite: Die 868-MHz-Frequenz ermöglicht eine größere Reichweite von Drahtlosverbindungen, was besonders in größeren Häusern oder Gebäuden von Vorteil ist.",
      "Bessere Wanddurchdringung: Die Frequenz hat eine bessere Durchdringung durch dicke Wände im Vergleich zu 2,4 GHz.",
      "Weniger Interferenz und mehr Bandbreite für Ihr Heimnetzwerk: Da die 868-MHz-Frequenz weniger überlastet ist als das 2,4-GHz-Band, gibt es weniger Interferenz.",
      "Energieeffizienz: Geräte, die mit 868 MHz betrieben werden, können energieeffizienter sein.",
      "Sicherheit und Zuverlässigkeit: Die bidirektionale Kommunikation und Verschlüsselung aller Funknachrichten erhöhen die Sicherheit und Zuverlässigkeit.",
    ],
  },
  security: {
    heading: "Thema: Datensicherheit",
    p1: "Das SQ-Panel erfüllt die höchsten Sicherheitsanforderungen und verfügt über eine Ende-zu-Ende-Verschlüsselung. Ein spezieller Sicherheitschip (HW-Security) enthält unser Zertifikat, das eine kontinuierlich sichere Verbindung der Sensordaten zu unseren Servern gewährleistet. Wir sind ein registrierter Partner von Gaia-X und planen, alle Daten ausschließlich auf europäischen Servern zu speichern.",
    p2: "Gaia-X ist eine Initiative, die wir aktiv unterstützen und die darauf abzielt, eine sichere und vertrauenswürdige Dateninfrastruktur für Europa zu schaffen.",
    gaiaBenefits: "Die Vorteile von Gaia-X umfassen:",
    list: [
      "Sicherheit und Datenschutz: Ende-zu-Ende-Verschlüsselung stellt sicher, dass Ihre Daten gemäß europäischen Standards geschützt bleiben.",
      "Flexibilität und Interoperabilität: Eine offene Architektur ermöglicht einfache Integration.",
      "Innovation und Wettbewerb: Gaia-X fördert Innovation und stärkt den Wettbewerb durch europäische Prinzipien wie Datensouveränität und DSGVO-Konformität.",
    ],
  },
  usp: {
    heading: "Einzigartiges Verkaufsargument Reichweite.",
    body: "Die erweiterte Reichweite beträgt etwa 80m, was deutlich weiter ist als jedes WLAN.",
  },
  jung: {
    heading: "Perfektes Design – eine Frage des guten Geschmacks: JUNG",
    p1: "Das SQ-Panel fügt sich perfekt in das JUNG-Design-Schaltersystem ein und ermöglicht es Ihnen, Ihre Haushaltsgeräte an einem bewährten Standort in der Nähe der Tür neben klassischen JUNG-Schaltern zu steuern.",
    p2: "Möchten Sie eine bestimmte Einstellung, um die Temperatur und Helligkeit des Raumes beizubehalten, wenn Sie arbeiten, schlafen oder gerade einen Film schauen?",
    p3: "Mit dem SQ-Panel, das sich perfekt in jede App des Matter-Standards integriert, wird Ihr Smart-Home-Erlebnis erheblich optimiert.",
    p4: "Mit dem SQ-Panel können Ihre Geräte im Energiesparmodus bleiben, wenn Sie weg sind, und automatisch in den Standby wechseln, wenn Sie da sind.",
    p5: "Mit leistungsstarken eingebauten Sensoren und der Thread-Verbindung zu Matter bietet das SQ-Panel nicht nur umfassende Automatisierungssteuerung, sondern auch mehr Informationen über Ihre Umgebung.",
  },
  outlook: {
    heading: "Ausblick",
    p1: "Wie wäre es, wenn das SQ-Panel Ihnen eine einfache Möglichkeit bieten würde, andere Geräte in Ihrem Zuhause zu überwachen und zu steuern oder andere Umgebungsparameter durch das Hinzufügen weiterer Sensoren zu erfassen?",
    p2: "Nutzen Sie den Touchscreen aus der Nähe, erhalten Sie Informationen über Sprachassistenten oder steuern Sie das SQ-Panel in Verbindung mit all Ihren Geräten dank Matter.",
  },
  env: {
    heading: "Umweltverpflichtungen",
    link: "Besuchen Sie unser Umweltressourcenzentrum",
    linkSuffix:
      ", um zu erfahren, wie Kickstarter nachhaltige Praktiken fördert.",
    design: "Langlebiges Design",
    designBody:
      "Das Design des SQ-Panels wurde in Zusammenarbeit mit dem deutschen Schalterhersteller JUNG entwickelt, der für sein zeitloses Design bekannt ist.",
  },
  helpBtn: "SQ-Panel Hilfezentrum →",
};

export default function TechnicalitiesClient() {
  const { lang } = useLanguage();
  const t = lang === "de" ? de : en;
  const isDe = lang === "de";

  return (
    <main>
      {/* ══════════════════════════════════════════
          HERO — dark bg + hero.png
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-dark pt-[120px] md:pt-[100px] xl:pt-[140px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/sq-panel/hero2.png')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 40%, transparent 55%)",
          }}
        />
        <div className="container relative">
          <nav className="flex flex-wrap items-center gap-2 pt-6 pb-4 text-sm">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.breadcrumb[0]}
            </Link>
            <span className="text-gray-500">/</span>
            <Link
              href="/sq-system"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.breadcrumb[1]}
            </Link>
            <span className="text-gray-500">/</span>
            <Link
              href="/sq-system/sq-panel"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.breadcrumb[2]}
            </Link>
            <span className="text-gray-500">/</span>
            <span className="font-medium text-white">{t.breadcrumb[3]}</span>
          </nav>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 pb-16 pt-4">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                {t.hero.headline}
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                {t.hero.subline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ALL TILES WITH EXPLANATION
          text + list  →  TABLE IMAGE (tile-en/de)
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.tiles.heading}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-body-color dark:text-green">
            {t.tiles.body}
          </p>
          <ul className="mb-10 space-y-1">
            {t.tiles.list.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-base text-body-color dark:text-green"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary dark:bg-green" />
                {item}
              </li>
            ))}
          </ul>
          {/* col-5: tile image  |  col-7: slide image */}
          <div className="grid grid-cols-12 gap-6 items-start">
            <div
              className="col-span-12 md:col-span-5"
              style={{ aspectRatio: "1/1", position: "relative" }}
            >
              <LangImg
                name="tile"
                alt="Tile explanation"
                className="absolute inset-0 h-full"
              />
            </div>
            <div
              className="col-span-12 md:col-span-7"
              style={{ aspectRatio: "4/3", position: "relative" }}
            >
              <LangImg
                name="slide"
                alt="Slide explanation"
                className="absolute inset-0 h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ROOM TEMP / HUMIDITY ALARM
          text  →  2 device photo cards
      ══════════════════════════════════════════ */}
      <section className="bg-green-bg py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.alarms.heading}
          </h2>
          <p className="mb-10 text-base leading-relaxed text-body-color dark:text-green">
            {t.alarms.body}
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {t.alarms.cards.map((card, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-white shadow-two dark:bg-gray-950 dark:shadow-three"
              >
                <div className="relative h-[320px] w-full">
                  <Image
                    src={card.img}
                    alt={card.caption}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-body-color dark:text-green">
                    {card.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RADAR FEATURES — text + bullet list
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.radar.heading}
          </h2>
          <p className="mb-6 text-base leading-relaxed text-body-color dark:text-green">
            {t.radar.body}
          </p>
          <ul className="mb-6 space-y-3">
            {t.radar.list.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-base text-body-color dark:text-green"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary dark:bg-green" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mb-4 text-base leading-relaxed text-body-color dark:text-green">
            {t.radar.community}
          </p>
          <p className="text-base leading-relaxed text-body-color dark:text-green">
            {t.radar.ai}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CAN I PLACE ANYWHERE? — text + YouTube video
      ══════════════════════════════════════════ */}
      <section className="bg-green-bg py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.placement.heading}
          </h2>
          <p className="mb-2 text-base leading-relaxed text-body-color dark:text-green">
            {t.placement.body}
          </p>
          <p className="mb-4 text-base leading-relaxed text-body-color dark:text-green">
            {t.placement.intro}
          </p>
          <ul className="mb-4 space-y-2">
            {t.placement.list.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-base text-body-color dark:text-green"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary dark:bg-green" />
                {item}
              </li>
            ))}
          </ul>
          <VideoPlayer src="/video/sq-panel.mp4" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WALL MOUNTING SQ-POWER — text + dark mounting image
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.mounting.heading}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-body-color dark:text-green">
            {t.mounting.intro}
          </p>
          <ul className="mb-4 space-y-3">
            {t.mounting.list.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-base text-body-color dark:text-green"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary dark:bg-green" />
                {item}
              </li>
            ))}
          </ul>
          <VideoPlayer
            src={isDe ? "/video/sq-power-de.mp4" : "/video/sq-power.mp4"}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THEFT PROTECTION — text only
      ══════════════════════════════════════════ */}
      <section className="bg-green-bg py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.theft.heading}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-body-color dark:text-green">
            {t.theft.p1}
          </p>
          <p className="text-base leading-relaxed text-body-color dark:text-green">
            {t.theft.p2}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONCLUSION ON MOUNTING — text only
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.conclusion.heading}
          </h2>
          <p className="text-base leading-relaxed text-body-color dark:text-green">
            {t.conclusion.body}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECHNICAL DETAILS — designed HTML table
      ══════════════════════════════════════════ */}
      <section className="bg-green-bg py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.specs.heading}
          </h2>
          <div className="overflow-x-auto rounded-2xl shadow-two dark:shadow-three">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="w-[35%] px-6 py-4 text-left font-semibold tracking-wide">
                    {isDe ? "Merkmal" : "Feature"}
                  </th>
                  <th className="px-6 py-4 text-left font-semibold tracking-wide">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.specs.rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 dark:border-gray-800 last:border-0 ${
                      i % 2 === 0
                        ? "bg-white dark:bg-gray-950"
                        : "bg-gray-50 dark:bg-gray-900"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-primary dark:text-green">
                      {row.f}
                    </td>
                    <td className="px-6 py-4 text-sm text-body-color dark:text-green">
                      {row.d}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          868 MHz ADVANTAGES — bullet list
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.freq.heading}
          </h2>
          <ul className="space-y-3">
            {t.freq.list.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-base text-body-color dark:text-green"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary dark:bg-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DATA SECURITY — text + Gaia-X badge
      ══════════════════════════════════════════ */}
      <section className="bg-green-bg py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.security.heading}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-body-color dark:text-green">
            {t.security.p1}
          </p>
          <p className="mb-6 text-base leading-relaxed text-body-color dark:text-green">
            {t.security.p2}
          </p>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="mb-3 text-base font-semibold text-body-color dark:text-green">
                {t.security.gaiaBenefits}
              </p>
              <ul className="space-y-3">
                {t.security.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-base text-body-color dark:text-green"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary dark:bg-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Gaia-X image */}
            <div className="flex items-center justify-center">
              <div className="relative h-[140px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/sq-panel/gaia-x.png"
                  alt="Gaia-X — secure and trustworthy data infrastructure for Europe"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          UNIQUE SELLING POINT REACH — text + range diagram image
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.usp.heading}
          </h2>
          <p className="mb-8 text-base leading-relaxed text-body-color dark:text-green">
            {t.usp.body}
          </p>
          <div className="grid grid-cols-12">
            <div
              className="col-span-12 md:col-span-6 relative"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/images/sq-panel/hz.png"
                alt="868 MHz range diagram"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PERFECT DESIGN — JUNG  (text + product photo)
      ══════════════════════════════════════════ */}
      <section className="bg-green-bg py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.jung.heading}
          </h2>
          {/* first 3 paragraphs — full 12 cols */}
          <div className="mb-10 space-y-4">
            <p className="text-base leading-relaxed text-body-color dark:text-green">
              {t.jung.p1}
            </p>
            <p className="text-base leading-relaxed text-body-color dark:text-green">
              {t.jung.p2}
            </p>
            <p className="text-base leading-relaxed text-body-color dark:text-green">
              {t.jung.p3}
            </p>
          </div>
          {/* last 2 paragraphs — col-6 text + col-6 image */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-body-color dark:text-green">
                {t.jung.p4}
              </p>
              <p className="text-base leading-relaxed text-body-color dark:text-green">
                {t.jung.p5}
              </p>
            </div>
            <div className="relative h-[360px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/sq-panel/sq-panel03.png"
                alt="SQ-Panel JUNG design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUTLOOK — text
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.outlook.heading}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-body-color dark:text-green">
            {t.outlook.p1}
          </p>
          <p className="text-base leading-relaxed text-body-color dark:text-green">
            {t.outlook.p2}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ENVIRONMENTAL COMMITMENTS
      ══════════════════════════════════════════ */}
      <section className="bg-green-bg py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.env.heading}
          </h2>
          <p className="mb-6 text-base leading-relaxed text-body-color dark:text-green">
            <a
              href="#"
              className="underline text-primary dark:text-green hover:opacity-80"
            >
              {t.env.link}
            </a>
            {t.env.linkSuffix}
          </p>
          <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
            {t.env.design}
          </h3>
          <p className="text-base leading-relaxed text-body-color dark:text-green">
            {t.env.designBody}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HELP CENTER BUTTON
      ══════════════════════════════════════════ */}
      <section className="bg-white py-12 dark:bg-gray-950">
        <div className="container flex justify-center">
          <Link
            href="/sq-system/sq-panel"
            className="inline-block rounded-full border-2 border-primary px-10 py-3 text-base font-semibold text-primary transition duration-300 hover:bg-primary hover:text-white dark:border-green dark:text-green dark:hover:bg-primary dark:hover:text-white"
          >
            {t.helpBtn}
          </Link>
        </div>
      </section>
    </main>
  );
}
