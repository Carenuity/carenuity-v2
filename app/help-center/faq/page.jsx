"use client";
import HelpCenterShell, {
  HcCard,
  FaqAccordion,
} from "../../components/HelpCenterShell";
import { useLanguage } from "../../context/LanguageContext";

const product = [
  {
    q: { en: "What is the SQ-Panel?", de: "Was ist das SQ-Panel?" },
    a: {
      en: "The SQ-Panel is a smart and user-friendly sensor display equipped with built-in environmental sensors. It provides real-time monitoring of indoor air quality and human presence detection, making it ideal for homes, offices, and shared indoor spaces.",
      de: "Das SQ-Panel ist ein intelligentes und benutzerfreundliches Sensordisplay mit integrierten Umweltsensoren. Es bietet eine Echtzeitüberwachung der Raumluftqualität und der Anwesenheit von Personen, ideal für Wohnungen, Büros und gemeinsame Innenräume.",
    },
  },
  {
    q: {
      en: "Which sensors are included?",
      de: "Welche Sensoren sind enthalten?",
    },
    a: {
      en: "The SQ-Panel integrates multiple sensors for temperature, humidity, air pressure, CO2 levels, volatile organic compounds (VOCs), and air quality index (AQI). These combined measurements help you maintain a healthier and more comfortable indoor environment.",
      de: "Das SQ-Panel integriert mehrere Sensoren für Temperatur, Luftfeuchtigkeit, Luftdruck, CO2-Werte, flüchtige organische Verbindungen (VOCs) und Luftqualitätsindex (AQI). Diese kombinierten Messungen helfen Ihnen, ein gesünderes und komfortableres Innenraumklima zu erhalten.",
    },
  },
  {
    q: {
      en: "What mounting options are available?",
      de: "Welche Montageoptionen gibt es?",
    },
    a: {
      en: "The SQ-Panel offers flexible installation. It can be wall-mounted for a clean, integrated look, or placed on a stand for easy relocation. Both options ensure accessibility and visibility in various environments.",
      de: "Das SQ-Panel bietet eine flexible Installation. Es kann für ein sauberes, integriertes Erscheinungsbild an der Wand montiert oder auf einem Ständer platziert werden, um eine einfache Standortänderung zu ermöglichen. Beide Optionen gewährleisten Zugänglichkeit und Sichtbarkeit in verschiedenen Umgebungen.",
    },
  },
  {
    q: {
      en: "Can the SQ-Panel be used in multiple rooms?",
      de: "Kann das SQ-Panel in mehreren Räumen verwendet werden?",
    },
    a: {
      en: "Yes. You can deploy several SQ-Panels across different rooms to create a connected monitoring network. All devices can be managed from one app or ecosystem, giving you a complete overview of your indoor air quality.",
      de: "Ja. Sie können mehrere SQ-Panels in verschiedenen Räumen installieren, um ein vernetztes Überwachungsnetzwerk zu erstellen. Alle Geräte können über eine App oder ein Ökosystem verwaltet werden, sodass Sie einen vollständigen Überblick über die Raumluftqualität haben.",
    },
  },
  {
    q: {
      en: "What is the range of the Matter-enabled SQ-Panel?",
      de: "Wie groß ist die Reichweite des Matter-unterstützten SQ-Panels?",
    },
    a: {
      en: "The SQ-Panel supports a wireless range of up to 80 meters indoors (depending on building structure). This ensures stable and reliable connectivity within most homes and office environments.",
      de: "Das SQ-Panel unterstützt eine kabellose Reichweite von bis zu 80 Metern im Innenbereich (abhängig von der Gebäudestruktur). Dies gewährleistet eine stabile und zuverlässige Verbindung in den meisten Wohnungen und Büros.",
    },
  },
];

const setup = [
  {
    q: {
      en: "How do I set up the SQ-Panel via Matter?",
      de: "Wie richte ich das SQ-Panel per Matter ein?",
    },
    a: {
      en: "Setup is simple: open the Carenuity app and scan the QR code displayed on the panel. The device will automatically connect to your preferred Matter-compatible ecosystem (such as Alexa, Google Home, or Apple Home), allowing quick and seamless integration.",
      de: "Die Einrichtung ist einfach: Öffnen Sie die Carenuity-App und scannen Sie den auf dem Panel angezeigten QR-Code. Das Gerät verbindet sich automatisch mit Ihrem bevorzugten Matter-kompatiblen Ökosystem (z. B. Alexa, Google Home oder Apple Home) und ermöglicht eine schnelle und nahtlose Integration.",
    },
  },
  {
    q: {
      en: "Do I still need the Carenuity app after setup?",
      de: "Brauche ich die Carenuity-App nach der Einrichtung?",
    },
    a: {
      en: "The Carenuity app is mainly required for the initial setup and advanced configurations. Once connected, you can manage and control the SQ-Panel directly through your chosen Matter ecosystem, while the app remains useful for monitoring, firmware updates, and troubleshooting.",
      de: "Die Carenuity-App wird hauptsächlich für die anfängliche Einrichtung und erweiterte Konfigurationen benötigt. Nach der Verbindung können Sie das SQ-Panel direkt über Ihr ausgewähltes Matter-Ökosystem steuern, während die App weiterhin für Überwachung, Firmware-Updates und Fehlerbehebung nützlich ist.",
    },
  },
  {
    q: {
      en: "How do I manage user profiles?",
      de: "Wie verwalte ich Benutzerprofile?",
    },
    a: {
      en: "User profiles can be managed via the Carenuity app or within your Matter ecosystem. This lets you set personalized preferences, adjust notification thresholds for specific sensors, and define alerts tailored to different family members or workplace requirements.",
      de: "Benutzerprofile können über die Carenuity-App oder innerhalb Ihres Matter-Ökosystems verwaltet werden. So können Sie persönliche Einstellungen festlegen, Benachrichtigungsschwellen für bestimmte Sensoren anpassen und Warnungen für unterschiedliche Familienmitglieder oder Arbeitsumgebungen definieren.",
    },
  },
  {
    q: {
      en: "How can I adjust sensor thresholds?",
      de: "Wie kann ich Sensor-Schwellenwerte anpassen?",
    },
    a: {
      en: "Thresholds for temperature, CO<sub>2</sub>, VOCs, and other metrics can be customized through the Carenuity app or any Matter-compatible platform. Once set, you will receive alerts when values exceed your defined safety or comfort levels.",
      de: "Schwellenwerte für Temperatur, CO<sub>2</sub>, VOCs und andere Messgrößen können über die Carenuity-App oder jede Matter-kompatible Plattform angepasst werden. Sobald festgelegt, erhalten Sie Warnungen, wenn Werte Ihre definierten Sicherheits- oder Komfortgrenzen überschreiten.",
    },
  },
];

const integration = [
  {
    q: {
      en: "Is the SQ-Panel compatible with other smart home systems?",
      de: "Ist das SQ-Panel mit anderen Smart-Home-Systemen kompatibel?",
    },
    a: {
      en: "Yes. Thanks to Matter support, the SQ-Panel integrates seamlessly with popular ecosystems including Alexa, Google Home, and Apple Home. This ensures interoperability and future-proof compatibility with your smart home setup.",
      de: "Ja. Dank Matter-Unterstützung lässt sich das SQ-Panel nahtlos in beliebte Ökosysteme wie Alexa, Google Home und Apple Home integrieren. Dies gewährleistet Interoperabilität und zukunftssichere Kompatibilität mit Ihrem Smart-Home-Setup.",
    },
  },
  {
    q: {
      en: "How does the SQ-Panel ensure data security?",
      de: "Wie gewährleistet das SQ-Panel die Datensicherheit?",
    },
    a: {
      en: "The SQ-Panel employs advanced end-to-end encryption for all sensor data and communicates only with Gaia-X-certified European servers. This guarantees that your information is stored and processed under strict data protection regulations.",
      de: "Das SQ-Panel verwendet fortschrittliche End-to-End-Verschlüsselung für alle Sensordaten und kommuniziert ausschließlich mit Gaia-X-zertifizierten europäischen Servern. Dies garantiert, dass Ihre Informationen unter strengen Datenschutzbestimmungen gespeichert und verarbeitet werden.",
    },
  },
  {
    q: {
      en: "Can I monitor air quality remotely?",
      de: "Kann ich die Luftqualität aus der Ferne überwachen?",
    },
    a: {
      en: "Absolutely. With the Carenuity app, you can access real-time and historical air quality data from anywhere. Whether at home, in the office, or while traveling, you stay informed about your indoor environment.",
      de: "Absolut. Mit der Carenuity-App können Sie jederzeit auf Echtzeit- und historische Luftqualitätsdaten zugreifen. Ob zu Hause, im Büro oder unterwegs – Sie bleiben über Ihre Innenraumumgebung informiert.",
    },
  },
];

export default function FaqPage() {
  const { lang } = useLanguage();
  const de = lang === "de";
  const map = (arr) =>
    arr.map((x) => ({
      question: de ? x.q.de : x.q.en,
      answer: de ? x.a.de : x.a.en,
    }));

  return (
    <HelpCenterShell
      title="SQ-Panel FAQ"
      subtitle={
        de
          ? "Antworten auf die häufigsten Fragen zum SQ-Panel, seiner Funktion, Einrichtung und Integration."
          : "Detailed answers to the most common questions about the SQ-Panel, its functionality, setup, and integration."
      }
    >
      <HcCard>
        <h2 className="text-lg font-bold text-primary dark:text-green-400 mb-4 uppercase tracking-wide">
          {de ? "Produkt & Hardware" : "Product & Hardware"}
        </h2>
        <FaqAccordion items={map(product)} />

        <h2 className="text-lg font-bold text-primary dark:text-green-400 mb-4 mt-8 uppercase tracking-wide">
          {de ? "Einrichtung & Bedienung" : "Setup & Usage"}
        </h2>
        <FaqAccordion items={map(setup)} />

        <h2 className="text-lg font-bold text-primary dark:text-green-400 mb-4 mt-8 uppercase tracking-wide">
          {de
            ? "Integration, Kompatibilität & Sicherheit"
            : "Integration, Compatibility & Security"}
        </h2>
        <FaqAccordion items={map(integration)} />
      </HcCard>
    </HelpCenterShell>
  );
}
