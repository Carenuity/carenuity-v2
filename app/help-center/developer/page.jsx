"use client";
import HelpCenterShell, {
  HcCard,
  FaqAccordion,
} from "../../components/HelpCenterShell";
import { useLanguage } from "../../context/LanguageContext";

const sections = [
  {
    title: { en: "General", de: "Allgemein" },
    items: [
      {
        q: { en: "What is Carenuity?", de: "Was ist Carenuity?" },
        a: {
          en: "Carenuity is a modular IoT ecosystem focused on rapid, user-friendly creation of smart home and sensor-based devices. It combines standardized hardware, pre-configured software, and cloud-based installation services to enable fully functional IoT devices within minutes.",
          de: "Carenuity ist ein modulares IoT-Ökosystem, das sich auf die schnelle und benutzerfreundliche Erstellung von Smart-Home- und sensorbasierten Geräten konzentriert. Es kombiniert standardisierte Hardware, vorkonfigurierte Software und cloudbasierte Installationsdienste, um voll funktionsfähige IoT-Geräte innerhalb von Minuten bereitzustellen.",
        },
      },
      {
        q: { en: "Who is Carenuity for?", de: "Für wen ist Carenuity geeignet?" },
        a: {
          en: "Carenuity addresses end users without programming knowledge, advanced makers, students, and professional developers who want fast prototyping, reliable sensor data, and long-term upgradability.",
          de: "Carenuity richtet sich an Endbenutzer ohne Programmierkenntnisse, fortgeschrittene Maker, Studenten und professionelle Entwickler, die schnelles Prototyping, zuverlässige Sensordaten und langfristige Upgrade-Fähigkeit wünschen.",
        },
      },
    ],
  },
  {
    title: {
      en: "Core Concept: S–M–A Architecture",
      de: "Kernkonzept: S–M–A-Architektur",
    },
    items: [
      {
        q: { en: "What does S–M–A mean?", de: "Was bedeutet S–M–A?" },
        a: {
          en: "S–M–A stands for Sensor, Microcontroller, and Actuator. These three components form the core building blocks of every Carenuity IoT device.",
          de: "S–M–A steht für Sensor, Mikrocontroller und Aktuator. Diese drei Komponenten bilden die Kernbausteine jedes Carenuity-IoT-Geräts.",
        },
      },
      {
        q: {
          en: "Why is the S–M–A concept important?",
          de: "Warum ist das S–M–A-Konzept wichtig?",
        },
        a: {
          en: "It enables full modularity. Sensors, microcontrollers, and actuators can be exchanged independently, allowing rapid iteration, easy upgrades, and reuse of components.",
          de: "Es ermöglicht vollständige Modularität. Sensoren, Mikrocontroller und Aktuatoren können unabhängig ausgetauscht werden, was schnelles Iterieren, einfache Upgrades und Wiederverwendung von Komponenten erlaubt.",
        },
      },
    ],
  },
  {
    title: { en: "C3-Mini", de: "C3-Mini" },
    items: [
      {
        q: { en: "What is the C3-Mini?", de: "Was ist das C3-Mini?" },
        a: {
          en: "The C3-Mini is a compact ESP8266/ESP32-based microcontroller designed as the central processing unit for Carenuity IoT devices. It shares a standardized pinout compatible with common boards such as the D1 Mini.",
          de: "Das C3-Mini ist ein kompakter Mikrocontroller auf ESP8266/ESP32-Basis, der als zentrale Verarbeitungseinheit für Carenuity-IoT-Geräte dient. Es verfügt über ein standardisiertes Pinout, das mit gängigen Boards wie dem D1 Mini kompatibel ist.",
        },
      },
      {
        q: { en: "What makes the C3-Mini unique?", de: "Was macht das C3-Mini einzigartig?" },
        a: {
          en: "The C3-Mini supports plug-and-play sensor integration, Install-for-Free provisioning, OTA updates, Matter compatibility, and seamless Home Assistant integration.",
          de: "Das C3-Mini unterstützt Plug-and-Play-Sensorintegration, Install-for-Free-Bereitstellung, OTA-Updates, Matter-Kompatibilität und nahtlose Home-Assistant-Integration.",
        },
      },
      {
        q: { en: "Can I program the C3-Mini myself?", de: "Kann ich das C3-Mini selbst programmieren?" },
        a: {
          en: "Yes. Users may install custom firmware, write their own applications, or deploy AI algorithms in addition to using Carenuity’s pre-installed apps.",
          de: "Ja. Benutzer können eigene Firmware installieren, eigene Anwendungen schreiben oder KI-Algorithmen bereitstellen, zusätzlich zu den vorinstallierten Carenuity-Apps.",
        },
      },
    ],
  },
  {
    title: { en: "Triple-Adapter", de: "Triple-Adapter" },
    items: [
      {
        q: { en: "What is a Carenuity Triple-Adapter?", de: "Was ist ein Carenuity Triple-Adapter?" },
        a: {
          en: "The Triple-Adapter is a standardized connector board with three slots labeled S (Sensor), M (Microcontroller), and A (Actuator).",
          de: "Der Triple-Adapter ist eine standardisierte Anschlussplatine mit drei Slots, beschriftet mit S (Sensor), M (Mikrocontroller) und A (Aktuator).",
        },
      },
      {
        q: { en: "Are the slots technically different?", de: "Sind die Slots technisch unterschiedlich?" },
        a: {
          en: "No. The slots are electrically identical. The printed labels are a functional guide to simplify configuration.",
          de: "Nein. Die Slots sind elektrisch identisch. Die Beschriftungen dienen lediglich als funktionale Orientierung zur Vereinfachung der Konfiguration.",
        },
      },
      {
        q: { en: "What is the benefit of the Triple-Adapter?", de: "Was ist der Vorteil des Triple-Adapters?" },
        a: {
          en: "It allows fast stacking, swapping, and recombination of components, turning individual boards into a complete IoT solution within minutes.",
          de: "Es ermöglicht schnelles Stapeln, Austauschen und Neukombinieren von Komponenten und verwandelt einzelne Boards in wenigen Minuten in eine vollständige IoT-Lösung.",
        },
      },
    ],
  },
  {
    title: {
      en: "Sensorboxes and All-for-One Sensor Boxes",
      de: "Sensorboxen und All-for-One-Sensorboxen",
    },
    items: [
      {
        q: { en: "What is a Sensorbox?", de: "Was ist eine Sensorbox?" },
        a: {
          en: "A Sensorbox is a complete, ready-to-use IoT device consisting of a sensor, a C3-Mini microcontroller, an actuator, a Triple-Adapter, and a USB-C data cable.",
          de: "Eine Sensorbox ist ein komplettes, einsatzbereites IoT-Gerät, bestehend aus Sensor, C3-Mini-Mikrocontroller, Aktuator, Triple-Adapter und USB-C-Datenkabel.",
        },
      },
      {
        q: { en: "What is pre-installed on a Sensorbox?", de: "Was ist auf einer Sensorbox vorinstalliert?" },
        a: {
          en: "Each Sensorbox ships with a pre-installed application. By default, it operates as a hygrometer using a DHT11 sensor.",
          de: "Jede Sensorbox wird mit einer vorinstallierten Anwendung geliefert. Standardmäßig funktioniert sie als Hygrometer mit einem DHT11-Sensor.",
        },
      },
      {
        q: { en: "What is an All-for-One Sensor Box?", de: "Was ist eine All-for-One Sensor Box?" },
        a: {
          en: "An All-for-One Sensor Box is a packaged Sensorbox including a specific high-precision sensor (or sensor combination), a C3-Mini, a 0.96-inch OLED display, a Triple-Adapter, a USB-C cable, and a 3D-printed enclosure, all delivered in an acrylic box.",
          de: "Eine All-for-One Sensor Box ist eine verpackte Sensorbox, die einen bestimmten Hochpräzisionssensor (oder Sensorenkombination), ein C3-Mini, ein 0,96-Zoll-OLED-Display, einen Triple-Adapter, ein USB-C-Kabel und ein 3D-gedrucktes Gehäuse enthält, alles in einer Acrylbox geliefert.",
        },
      },
      {
        q: {
          en: "How many All-for-One Sensor Boxes are available?",
          de: "Wie viele All-for-One Sensor Boxes gibt es?",
        },
        a: {
          en: "There are currently 23 variants, covering environmental sensing, air quality, radar-based presence detection, biometric sensing, and gas detection.",
          de: "Derzeit gibt es 23 Varianten, die Umweltmessung, Luftqualität, radarbasierte Anwesenheitserkennung, biometrische Messung und Gaserkennung abdecken.",
        },
      },
    ],
  },
  {
    title: { en: "Sensors", de: "Sensoren" },
    items: [
      {
        q: { en: "Which sensor manufacturers are supported?", de: "Welche Sensorhersteller werden unterstützt?" },
        a: {
          en: "Carenuity integrates sensors from leading manufacturers such as Bosch, Sensirion, Aosong, AMS, ScioSense, Hi-Link, Maxim Integrated, SGX Sensortech, and Winsen.",
          de: "Carenuity integriert Sensoren führender Hersteller wie Bosch, Sensirion, Aosong, AMS, ScioSense, Hi-Link, Maxim Integrated, SGX Sensortech und Winsen.",
        },
      },
      {
        q: { en: "Can sensors be swapped?", de: "Können Sensoren ausgetauscht werden?" },
        a: {
          en: "Yes. Sensors can be exchanged within approximately three minutes using the Quick-Change feature.",
          de: "Ja. Sensoren können innerhalb von etwa drei Minuten über die Quick-Change-Funktion ausgetauscht werden.",
        },
      },
      {
        q: {
          en: "Do I need to change software when swapping sensors?",
          de: "Muss die Software beim Austausch von Sensoren geändert werden?",
        },
        a: {
          en: "No manual programming is required. Carenuity provides matching YAML integrations and apps via its portals.",
          de: "Es ist keine manuelle Programmierung erforderlich. Carenuity stellt passende YAML-Integrationen und Apps über seine Portale bereit.",
        },
      },
    ],
  },
  {
    title: { en: "Actuators", de: "Aktuatoren" },
    items: [
      {
        q: { en: "What actuators are supported?", de: "Welche Aktuatoren werden unterstützt?" },
        a: {
          en: "Common actuators include OLED displays (0.66-inch and 0.96-inch), buzzers, and other output devices compatible with ESP-based systems.",
          de: "Gängige Aktuatoren umfassen OLED-Displays (0,66 Zoll und 0,96 Zoll), Summer und andere Ausgabegeräte, die mit ESP-basierten Systemen kompatibel sind.",
        },
      },
      {
        q: { en: "Can actuators be exchanged like sensors?", de: "Können Aktuatoren wie Sensoren ausgetauscht werden?" },
        a: {
          en: "Yes. Actuators follow the same modular principle and can be swapped freely.",
          de: "Ja. Aktuatoren folgen demselben modularen Prinzip und können frei ausgetauscht werden.",
        },
      },
    ],
  },
  {
    title: { en: "Installation and Updates", de: "Installation und Updates" },
    items: [
      {
        q: { en: "What is Install-for-Free?", de: "Was ist Install-for-Free?" },
        a: {
          en: "Install-for-Free is Carenuity’s provisioning service. Users connect the device via USB, open a browser, and install a complete application with a single click.",
          de: "Install-for-Free ist der Bereitstellungsdienst von Carenuity. Benutzer verbinden das Gerät über USB, öffnen einen Browser und installieren mit einem Klick eine vollständige Anwendung.",
        },
      },
      {
        q: {
          en: "Is any software installation required on my PC?",
          de: "Ist eine Softwareinstallation auf meinem PC erforderlich?",
        },
        a: { en: "No. Only a Chrome browser is required.", de: "Nein. Es wird nur ein Chrome-Browser benötigt." },
      },
      {
        q: { en: "Are OTA updates supported?", de: "Werden OTA-Updates unterstützt?" },
        a: {
          en: "Yes. Once connected to Home Assistant, devices receive wireless Over-the-Air updates.",
          de: "Ja. Sobald sie mit Home Assistant verbunden sind, erhalten Geräte drahtlose Over-the-Air-Updates.",
        },
      },
    ],
  },
  {
    title: { en: "Ecosystem Integration", de: "Ökosystemintegration" },
    items: [
      {
        q: { en: "Which smart home systems are supported?", de: "Welche Smart-Home-Systeme werden unterstützt?" },
        a: {
          en: "Carenuity devices integrate with Home Assistant and Matter coordinators such as Amazon Alexa, Google Home, Apple HomeKit, and Samsung SmartThings.",
          de: "Carenuity-Geräte integrieren sich in Home Assistant und Matter-Koordinatoren wie Amazon Alexa, Google Home, Apple HomeKit und Samsung SmartThings.",
        },
      },
      {
        q: { en: "Is Matter mandatory?", de: "Ist Matter verpflichtend?" },
        a: {
          en: "No. Matter is supported but not required. Devices can also operate cloud-free with Home Assistant.",
          de: "Nein. Matter wird unterstützt, ist aber nicht erforderlich. Geräte können auch cloudfrei mit Home Assistant betrieben werden.",
        },
      },
    ],
  },
  {
    title: {
      en: "Solution Builder and Sensorbox Portal",
      de: "Solution Builder und Sensorbox-Portal",
    },
    items: [
      {
        q: { en: "What is the Solution Builder?", de: "Was ist der Solution Builder?" },
        a: {
          en: "The Solution Builder is a web platform that allows users to select hardware, install pre-configured apps, and deploy ready-to-use IoT solutions within minutes.",
          de: "Der Solution Builder ist eine Webplattform, die es Benutzern ermöglicht, Hardware auszuwählen, vorkonfigurierte Apps zu installieren und innerhalb von Minuten einsatzbereite IoT-Lösungen bereitzustellen.",
        },
      },
      {
        q: { en: "What is the Sensorbox Portal?", de: "Was ist das Sensorbox-Portal?" },
        a: {
          en: "The Sensorbox Portal allows users to install additional applications, modify device behavior, and experiment with new use cases.",
          de: "Das Sensorbox-Portal ermöglicht Benutzern, zusätzliche Anwendungen zu installieren, das Geräteverhalten zu ändern und neue Anwendungsfälle auszuprobieren.",
        },
      },
    ],
  },
  {
    title: { en: "Services", de: "Dienstleistungen" },
    items: [
      {
        q: { en: "What is Evaluate-at-Home?", de: "Was ist Evaluate-at-Home?" },
        a: {
          en: "Evaluate-at-Home enables users to test sensor solutions in real environments before committing to a final purchase.",
          de: "Evaluate-at-Home ermöglicht es Benutzern, Sensorsysteme in realen Umgebungen zu testen, bevor sie sich für einen Kauf entscheiden.",
        },
      },
      {
        q: { en: "What is Swap-your-Sensor?", de: "Was ist Swap-your-Sensor?" },
        a: {
          en: "Swap-your-Sensor allows users to test and replace sensors quickly until the optimal sensor for a specific use case is found.",
          de: "Swap-your-Sensor ermöglicht es Benutzern, Sensoren schnell zu testen und auszutauschen, bis der optimale Sensor für einen bestimmten Anwendungsfall gefunden ist.",
        },
      },
      {
        q: { en: "What is the Home-Challenge?", de: "Was ist die Home-Challenge?" },
        a: {
          en: "The Home-Challenge is a program for students and makers to develop, share, and refine IoT devices using Carenuity hardware and platforms.",
          de: "Die Home-Challenge ist ein Programm für Studenten und Maker, um IoT-Geräte mit Carenuity-Hardware und -Plattformen zu entwickeln, zu teilen und zu optimieren.",
        },
      },
    ],
  },
  {
    title: { en: "Housing Extension Kit", de: "Gehäuse-Erweiterungsset" },
    items: [
      {
        q: { en: "What is the Housing Extension Kit?", de: "Was ist das Housing Extension Kit?" },
        a: {
          en: "It is an add-on for the C3-Mini Sensor Selection Box that provides a complete 3D-printed enclosure system.",
          de: "Es ist ein Add-on für die C3-Mini Sensor Selection Box, das ein komplettes 3D-gedrucktes Gehäusesystem bereitstellt.",
        },
      },
      {
        q: { en: "What problem does it solve?", de: "Welches Problem löst es?" },
        a: {
          en: "It improves durability, aesthetics, environmental protection, and acceptance in living spaces.",
          de: "Es verbessert Haltbarkeit, Ästhetik, Umweltschutz und Akzeptanz in Wohnräumen.",
        },
      },
      {
        q: { en: "What is included in the kit?", de: "Was ist im Kit enthalten?" },
        a: {
          en: "The kit contains twelve snap-fit caps for sensors, microcontrollers, and actuators, including variants with open or closed GPIO access.",
          de: "Das Kit enthält zwölf Steckkappen für Sensoren, Mikrocontroller und Aktuatoren, einschließlich Varianten mit offenem oder geschlossenem GPIO-Zugang.",
        },
      },
      {
        q: { en: "Are additional designs available?", de: "Gibt es zusätzliche Designs?" },
        a: {
          en: "Yes. Sensor-specific snap-fit caps are available on Thingiverse for self-printing.",
          de: "Ja. Sensorspezifische Steckkappen sind auf Thingiverse zum Selbstdrucken verfügbar.",
        },
      },
    ],
  },
  {
    title: { en: "Developers and Makers", de: "Entwickler und Maker" },
    items: [
      {
        q: { en: "Is the platform open to developers?", de: "Ist die Plattform für Entwickler offen?" },
        a: {
          en: "Yes. Developers can build, share, and distribute applications and solutions through the Carenuity ecosystem.",
          de: "Ja. Entwickler können Anwendungen und Lösungen über das Carenuity-Ökosystem erstellen, teilen und vertreiben.",
        },
      },
      {
        q: { en: "How do users and makers interact?", de: "Wie interagieren Benutzer und Entwickler?" },
        a: {
          en: "Users provide feedback and use-case ideas, while makers refine and improve apps through rapid deployment and testing cycles.",
          de: "Benutzer geben Feedback und Anwendungsbeispiele, während Entwickler Apps durch schnelle Bereitstellung und Testzyklen verfeinern und verbessern.",
        },
      },
    ],
  },
  {
    title: { en: "Summary", de: "Zusammenfassung" },
    items: [
      {
        q: { en: "What is the key benefit of Carenuity?", de: "Was ist der Hauptvorteil von Carenuity?" },
        a: {
          en: "Carenuity combines modular hardware, zero-friction installation, and an open ecosystem to enable fast, flexible, and future-proof IoT solutions for users and developers alike.",
          de: "Carenuity kombiniert modulare Hardware, installationsfreie Einrichtung und ein offenes Ökosystem, um schnelle, flexible und zukunftssichere IoT-Lösungen für Benutzer und Entwickler gleichermaßen zu ermöglichen.",
        },
      },
    ],
  },
];

export default function DeveloperHelpCenterPage() {
  const { lang } = useLanguage();
  const de = lang === "de";

  return (
    <HelpCenterShell
      title={de ? "Entwickler-Hilfe-Center" : "Developer Help Center"}
      badge={de ? "Für Entwickler" : "For Developers"}
      subtitle={
        de
          ? "Carenuity – Häufig gestellte Fragen (FAQ) zu Architektur, Hardware, Ökosystem und Plattformen."
          : "Carenuity – Frequently Asked Questions (FAQ) on architecture, hardware, ecosystem, and platforms."
      }
    >
      <HcCard>
        {sections.map((section) => (
          <div key={section.title.en} className="mb-8 last:mb-0">
            <h2 className="text-lg font-bold text-primary dark:text-green-400 mb-4 uppercase tracking-wide">
              {de ? section.title.de : section.title.en}
            </h2>
            <FaqAccordion
              items={section.items.map((x) => ({
                question: de ? x.q.de : x.q.en,
                answer: de ? x.a.de : x.a.en,
              }))}
            />
          </div>
        ))}
      </HcCard>
    </HelpCenterShell>
  );
}
