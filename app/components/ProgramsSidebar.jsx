"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ProgramsSidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const s = t.programsGuides.sidebar;
  const [isOpen, setIsOpen] = useState(false);

  const groups = [
    {
      heading: s.universityGroup,
      items: [
        // Country names are intentionally NOT translated.
        { label: "Kenya", href: "/programs/kenya" },
        { label: "Greece", href: "/programs/greece" },
        { label: "Germany", href: "/programs/germany" },
      ],
    },
    {
      heading: s.guidesGroup,
      items: [
        { label: s.openweather, href: "/guides/openweather-api-key" },
        { label: s.qweather, href: "/guides/q-weather-api-key" },
        { label: s.spotify, href: "/guides/spotify-api-key" },
        { label: s.youtube, href: "/guides/youtube-api-key" },
        { label: s.adafruit, href: "/guides/adafruit-io-api-key" },
        { label: s.thingspeak, href: "/guides/thingspeak-api-key" },
      ],
    },
  ];

  const activeLabel = groups
    .flatMap((g) => g.items)
    .find((i) => i.href === pathname)?.label;

  const ActiveArrow = () => (
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
              {s.kicker}
            </p>
            <p className="text-sm font-semibold text-white mt-0.5">{s.title}</p>
          </div>
          <button
            className="lg:hidden flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle list"
          >
            <span className="text-xs text-white/50">
              {isOpen ? "Close" : "All"}
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

        {/* Mobile active preview when collapsed */}
        {activeLabel && !isOpen && (
          <div
            className="lg:hidden flex items-center justify-between px-5 py-3 bg-green-400/20 border-l-2 border-green-300 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <span className="text-sm font-semibold text-white truncate">
              {activeLabel}
            </span>
            <ActiveArrow />
          </div>
        )}

        {/* Nav groups */}
        <nav
          className={`py-2 lg:max-h-[calc(100vh-14rem)] lg:overflow-y-auto ${isOpen ? "block max-h-[60vh] overflow-y-auto" : "hidden"} lg:block`}
        >
          {groups.map((group, gi) => (
            <div
              key={group.heading}
              className={gi > 0 ? "mt-2 pt-2 border-t border-white/10" : ""}
            >
              <p className="px-5 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-green-300/80">
                {group.heading}
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
                    <span className="truncate">{item.label}</span>
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
