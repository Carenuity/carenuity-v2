"use client";
import Link from "next/link";
import HelpCenterShell, { HcCard } from "../components/HelpCenterShell";
import { useLanguage } from "../context/LanguageContext";

const cards = [
  {
    icon: "🚀",
    href: "/help-center/get-started",
    title: { en: "Get Started (SQ-Panel)", de: "Erste Schritte (SQ-Panel)" },
    desc: {
      en: "Unbox, mount and commission your SQ-Panel in minutes.",
      de: "Auspacken, montieren und das SQ-Panel in Minuten einrichten.",
    },
  },
  {
    icon: "🛠️",
    href: "/help-center/troubleshooting",
    title: { en: "Troubleshooting", de: "Fehlerbehebung" },
    desc: {
      en: "Step-by-step flows for connectivity, sync and sensor issues.",
      de: "Schritt-für-Schritt-Abläufe für Verbindung, Sync und Sensoren.",
    },
  },
  {
    icon: "📱",
    href: "/help-center/mobile-app",
    title: { en: "Mobile App & Account", de: "Mobile App & Konto" },
    desc: {
      en: "Accounts, roles, permissions and multi-user support.",
      de: "Konten, Rollen, Berechtigungen und Mehrbenutzer.",
    },
  },
  {
    icon: "✨",
    href: "/help-center/features-and-use-cases",
    title: { en: "Features & Use Cases", de: "Funktionen & Anwendungen" },
    desc: {
      en: "Sensors, alerts, trends and real-world scenarios.",
      de: "Sensoren, Warnungen, Trends und reale Szenarien.",
    },
  },
  {
    icon: "❓",
    href: "/help-center/faq",
    title: { en: "FAQ", de: "FAQ" },
    desc: {
      en: "Quick answers about the SQ-Panel and its integrations.",
      de: "Schnelle Antworten zum SQ-Panel und seinen Integrationen.",
    },
  },
  {
    icon: "🧽",
    href: "/help-center/maintenance-and-safety",
    title: { en: "Maintenance & Safety", de: "Wartung & Sicherheit" },
    desc: {
      en: "Cleaning, power, placement and safety guidelines.",
      de: "Reinigung, Strom, Platzierung und Sicherheitshinweise.",
    },
  },
];

export default function HelpCenterPage() {
  const { lang } = useLanguage();
  const de = lang === "de";

  return (
    <HelpCenterShell
      title={de ? "Hilfe-Center" : "Help Center"}
      subtitle={
        de
          ? "Das modulare Premium-System für die professionelle Überwachung der Luftqualität – entwickelt für Festinstallationen und den langfristigen Einsatz."
          : "The modular premium system for professional air-quality monitoring — designed for permanent installations and long-term use."
      }
    >
      {/* User help cards */}
      <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-5">
        {de ? "Benutzer-Hilfe-Center" : "User Help Center"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-green-bg dark:bg-gray-800 flex items-center justify-center text-2xl mb-4">
              {card.icon}
            </div>
            <h3 className="text-base font-bold text-black dark:text-white mb-1.5 group-hover:text-primary dark:group-hover:text-green-400 transition-colors">
              {de ? card.title.de : card.title.en}
            </h3>
            <p className="text-sm text-body-color dark:text-green leading-relaxed">
              {de ? card.desc.de : card.desc.en}
            </p>
          </Link>
        ))}
      </div>

      {/* Documentation + Developer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <Link
          href="/product/sq-panel/documentation"
          className="group rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 flex items-center gap-4 bg-white dark:bg-gray-950 hover:shadow-md transition-all duration-300"
        >
          <span className="text-2xl">📚</span>
          <div>
            <h3 className="text-base font-bold text-black dark:text-white group-hover:text-primary dark:group-hover:text-green-400 transition-colors">
              {de
                ? "Dokumentation des SQ-Systems"
                : "Documentation of the SQ-System"}
            </h3>
            <p className="text-sm text-body-color dark:text-green">
              {de
                ? "Vollständige technische Unterlagen"
                : "Full technical reference"}
            </p>
          </div>
        </Link>

        <Link
          href="/help-center/developer"
          className="group rounded-2xl shadow-sm p-6 flex items-center gap-4 text-white hover:shadow-lg transition-all duration-300"
          style={{ backgroundColor: "#174f2e" }}
        >
          <span className="text-2xl">👨‍💻</span>
          <div>
            <h3 className="text-base font-bold text-white">
              {de ? "Entwickler-Hilfe-Center" : "Developer Help Center"}
            </h3>
            <p className="text-sm text-green-300">
              {de
                ? "Ökosystem, S–M–A, C3-Mini, APIs und mehr"
                : "Ecosystem, S–M–A, C3-Mini, APIs and more"}
            </p>
          </div>
        </Link>
      </div>

      {/* Contact box */}
      <HcCard className="mt-8">
        <p className="text-body-color dark:text-green text-base mb-3">
          {de
            ? "Wenn Sie keine Hilfe erhalten haben, können Sie uns gerne kontaktieren:"
            : "If you haven't found the help you need, feel free to contact us:"}
        </p>
        <ul className="space-y-2 text-body-color dark:text-green text-base mb-3">
          <li>
            <strong className="text-black dark:text-white">Email:</strong>{" "}
            <a
              href="mailto:info@carenuity.com"
              className="text-primary dark:text-green-400 hover:underline"
            >
              info@carenuity.com
            </a>
          </li>
          <li>
            <strong className="text-black dark:text-white">
              {de ? "Telefon:" : "Phone:"}
            </strong>{" "}
            (+49) 89-1222469-40 (Mon–Fri, 9:00–17:00 CET)
          </li>
        </ul>
        <p className="text-body-color dark:text-green text-base">
          {de ? "Oder über unsere " : "Or reach us through our "}
          <Link
            href="/contact"
            className="text-primary dark:text-green-400 font-semibold hover:underline"
          >
            {de ? "Kontaktseite." : "contact page."}
          </Link>{" "}
          {de
            ? "Wir antworten innerhalb von 24 Stunden (werktags)."
            : "We aim to respond within 24 h (working days)."}
        </p>
      </HcCard>
    </HelpCenterShell>
  );
}
