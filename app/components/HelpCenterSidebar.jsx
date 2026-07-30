"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const groups = [
  {
    key: "user",
    title: { en: "User Help Center", de: "Benutzer-Hilfe-Center" },
    items: [
      { label: { en: "Overview", de: "Übersicht" }, href: "/help-center" },
      {
        label: { en: "Get Started", de: "Erste Schritte" },
        href: "/help-center/get-started",
      },
      {
        label: { en: "Troubleshooting", de: "Fehlerbehebung" },
        href: "/help-center/troubleshooting",
      },
      {
        label: { en: "Mobile App & Account", de: "Mobile App & Konto" },
        href: "/help-center/mobile-app",
      },
      {
        label: { en: "Features & Use Cases", de: "Funktionen & Anwendungen" },
        href: "/help-center/features-and-use-cases",
      },
      { label: { en: "FAQ", de: "FAQ" }, href: "/help-center/faq" },
      {
        label: { en: "Maintenance & Safety", de: "Wartung & Sicherheit" },
        href: "/help-center/maintenance-and-safety",
      },
    ],
  },
  {
    key: "dev",
    title: { en: "Developer Help Center", de: "Entwickler-Hilfe-Center" },
    items: [
      {
        label: { en: "Developer FAQ", de: "Entwickler-FAQ" },
        href: "/help-center/developer",
      },
    ],
  },
];

function ActiveArrow() {
  return (
    <svg
      className="w-4 h-4 text-green-300 shrink-0 ml-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function HelpCenterSidebar() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const de = lang === "de";
  const [isOpen, setIsOpen] = useState(false);

  const activeLabel = groups
    .flatMap((g) => g.items)
    .find((i) => i.href === pathname)?.label;

  return (
    <aside className="w-full lg:w-64 shrink-0 self-start lg:sticky lg:top-24 flex flex-col gap-3">
      <div
        className="rounded-2xl overflow-hidden shadow-lg"
        style={{ backgroundColor: "#174f2e" }}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-green-300">
              {de ? "Hilfe-Center" : "Help Center"}
            </p>
            <p className="text-sm font-semibold text-white mt-0.5">
              {de ? "Wie können wir helfen?" : "How can we help?"}
            </p>
          </div>
          <button
            className="lg:hidden flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle list"
          >
            <span className="text-xs text-white/50">
              {isOpen ? (de ? "Zu" : "Close") : de ? "Alle" : "All"}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile active preview */}
        {activeLabel && !isOpen && (
          <div
            className="lg:hidden flex items-center justify-between px-5 py-3 bg-green-400/20 border-l-2 border-green-300 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <span className="text-sm font-semibold text-white truncate">
              {de ? activeLabel.de : activeLabel.en}
            </span>
            <ActiveArrow />
          </div>
        )}

        {/* Groups */}
        <nav
          className={`py-2 lg:max-h-[calc(100vh-14rem)] lg:overflow-y-auto ${isOpen ? "block max-h-[60vh] overflow-y-auto" : "hidden"} lg:block`}
        >
          {groups.map((group, gi) => (
            <div
              key={group.key}
              className={gi > 0 ? "mt-2 pt-2 border-t border-white/10" : ""}
            >
              <p className="px-5 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-green-300/80">
                {de ? group.title.de : group.title.en}
              </p>
              {group.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-5 py-2.5 text-sm transition-all duration-200 border-l-2 ${
                      active
                        ? "bg-green-400/20 text-white font-semibold border-green-300"
                        : "text-white/80 hover:bg-white/10 hover:text-white font-medium border-transparent"
                    }`}
                  >
                    <span className="truncate">
                      {de ? item.label.de : item.label.en}
                    </span>
                    {active && <ActiveArrow />}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
