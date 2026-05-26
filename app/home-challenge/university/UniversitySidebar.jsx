"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const universityHrefs = [
  {
    key: "c3Mini",
    href: "/home-challenge/university/assortment-box/c3-mini-kisii-boxes",
    featured: true,
  },
  { key: "auth", href: "/home-challenge/university/auth" },
  { key: "oauth", href: "/home-challenge/university/oauth" },
  { key: "duth", href: "/home-challenge/university/duth" },
  { key: "uop", href: "/home-challenge/university/uop" },
  { key: "thws", href: "/home-challenge/university/thws" },
  { key: "tum", href: "/home-challenge/university/tum" },
  { key: "tuk", href: "/home-challenge/university/tuk" },
  { key: "nairobi", href: "/home-challenge/university/nairobi" },
  { key: "girlsDay", href: "/home-challenge/university/girls-day" },
  { key: "nightSessions", href: "/home-challenge/university/night-sessions" },
  { key: "certificate", href: "/home-challenge/university/certificate" },
];

function isActive(pathname, href) {
  if (
    href === "/home-challenge/university/assortment-box/c3-mini-kisii-boxes"
  ) {
    return pathname.startsWith("/home-challenge/university/assortment-box");
  }
  return pathname === href || pathname.startsWith(href + "/");
}

export default function UniversitySidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const s = t.homeChallengeUniversity.sidebar;
  const active = universityHrefs.find((u) => isActive(pathname, u.href));

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
              {s.header}
            </p>
            <p className="text-sm font-semibold text-white mt-0.5">
              {s.subheader}
            </p>
          </div>
          <button
            className="lg:hidden flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle list"
          >
            <span className="text-xs text-white/50">
              {isOpen ? s.close : s.all}
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
        {active && !isOpen && (
          <div
            className="lg:hidden flex items-center justify-between px-5 py-3 bg-green-400/20 border-l-2 border-green-300 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {s.items[active.key].label}
              </p>
              <p className="text-[11px] text-white/60 truncate">
                {s.items[active.key].desc}
              </p>
            </div>
            <svg
              className="w-4 h-4 text-green-300 shrink-0 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}

        {/* Nav list */}
        <nav
          className={`py-2 lg:max-h-[calc(100vh-14rem)] lg:overflow-y-auto ${isOpen ? "block max-h-[60vh] overflow-y-auto" : "hidden"} lg:block`}
        >
          {universityHrefs.map((u) => {
            const a = isActive(pathname, u.href);
            const item = s.items[u.key];
            return (
              <Link
                key={u.href}
                href={u.href}
                onClick={() => setIsOpen(false)}
                className={`flex flex-col px-5 py-2.5 transition-all duration-200 border-l-2 ${
                  a
                    ? "bg-green-400/20 text-white border-green-300"
                    : "text-white/80 hover:bg-white/10 hover:text-white border-transparent"
                }`}
              >
                <span
                  className={`text-sm truncate ${a ? "font-semibold" : "font-medium"} ${u.featured ? "text-green-300" : ""}`}
                >
                  {item.label}
                  {u.featured && !a && (
                    <span className="ml-1.5 text-[9px] uppercase tracking-wider text-green-300/70">
                      {s.guideBadge}
                    </span>
                  )}
                </span>
                <span className="text-[11px] text-white/50 truncate">
                  {item.desc}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer: Back link */}
        <div className="px-5 py-3 border-t border-white/10">
          <Link
            href="/home-challenge"
            className="flex items-center gap-2 text-xs font-semibold text-green-300 hover:text-white transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {s.back}
          </Link>
        </div>
      </div>
    </aside>
  );
}
