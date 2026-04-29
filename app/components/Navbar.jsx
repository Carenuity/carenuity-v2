"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const col1 = {
  heading: "PREMIUM FOR YOUR BELOVED",
  items: [
    {
      label: "SQ-Panel Sensor Display",
      href: "/sq-system/sq-panel",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12" y2="18.01" />
        </svg>
      ),
    },
    {
      label: "SQ-Connector Matter",
      href: "/sq-system/sq-connector",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="10" rx="2" />
          <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      ),
    },
    {
      label: "SQ-Power Supply",
      href: "/sq-system/sq-power",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      label: "SQ-TableStand",
      href: "/sq-system/sq-tablestand",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
    {
      label: "Feature Evaluation",
      href: null,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
  ],
};

const col2 = {
  heading: "B2B FOR REAL ESTATE TYCOONS",
  items: [
    {
      label: "Smartphone SQ-App",
      href: null,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      label: "Solution Builder",
      href: "https://solutions.carenuity.com/",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
    {
      label: "WebShop",
      href: "https://www.chipglobe.shop/en",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
    },
    {
      label: "Home Challenge",
      href: "/home-challenge",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ],
};

const col3 = {
  heading: "BUDGET FRIENDLY NOT ONLY FOR STUDENTS",
  items: [
    {
      label: "C3-Mini™ Applications",
      href: "/c3-mini",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      label: "AI Assisted Solutions",
      href: "/ai-assisted",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z" />
        </svg>
      ),
    },
    {
      label: "All-for-One Sensor Boxes",
      href: "/sensor-boxes",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
    },
    {
      label: "C3-Mini™ Sensor Selection Box",
      href: "/selection-box",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      ),
    },
  ],
};

function DropdownCol({ col, onClose }) {
  return (
    <div className="flex flex-col">
      <p className="text-sm font-extrabold uppercase tracking-wider text-[#0d2137] dark:text-white mb-4 leading-tight">
        {col.heading}
      </p>
      <ul className="space-y-3">
        {col.items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              item.href.startsWith("http") ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center gap-3 text-sm font-semibold text-[#0d2137] dark:text-gray-200 hover:text-primary dark:hover:text-green-400 transition-colors group"
                >
                  <span className="text-[#0d2137] dark:text-gray-300 group-hover:text-primary dark:group-hover:text-green-400 transition-colors shrink-0">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 text-sm font-semibold text-[#0d2137] dark:text-gray-200 hover:text-primary dark:hover:text-green-400 transition-colors group"
                >
                  <span className="text-[#0d2137] dark:text-gray-300 group-hover:text-primary dark:group-hover:text-green-400 transition-colors shrink-0">
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              )
            ) : (
              <span className="flex items-center gap-3 text-sm font-semibold text-gray-400 dark:text-gray-500 cursor-default">
                <span className="text-gray-400 dark:text-gray-500 shrink-0">
                  {item.icon}
                </span>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const resourcesItems = [
  { labelKey: "helpCenter", href: "/help-center" },
  { labelKey: "programs", href: "/programs" },
  { labelKey: "blogs", href: "/blog" },
  { labelKey: "team", href: "/team" },
  { labelKey: "contact", href: "/contact" },
];

export default function Navbar() {
  const { dark, setDark } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const resourcesRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
    setProductOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm dark:bg-gray-dark dark:border-gray-800 transition-all duration-300">
      <div className="container" style={{ paddingInline: "3rem" }}>
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/images/logo/logo.png"
              alt="Carenuity"
              width={190}
              height={52}
              className="h-10 lg:h-12 w-auto object-contain dark:hidden"
              priority
            />
            <Image
              src="/images/logo/logo-2.png"
              alt="Carenuity"
              width={190}
              height={52}
              className="h-10 lg:h-12 w-auto object-contain hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                pathname === "/"
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-green-400"
              }`}
            >
              {t.nav.home}
            </Link>

            {/* Product mega dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  pathname.startsWith("/sq-system")
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-green-400"
                }`}
              >
                {t.nav.product}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${productOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {productOpen && (
                <div
                  className="absolute top-full left-0 w-[900px] bg-white dark:bg-gray-dark rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 z-50"
                  onMouseEnter={() => setProductOpen(true)}
                  onMouseLeave={() => setProductOpen(false)}
                >
                  <div className="grid grid-cols-3 gap-10">
                    <DropdownCol
                      col={col1}
                      onClose={() => setProductOpen(false)}
                    />
                    <DropdownCol
                      col={col2}
                      onClose={() => setProductOpen(false)}
                    />
                    <DropdownCol
                      col={col3}
                      onClose={() => setProductOpen(false)}
                    />
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/benefits"
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                pathname === "/benefits"
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-green-400"
              }`}
            >
              {t.nav.benefits}
            </Link>
            {/* Resources dropdown */}
            <div
              className="relative"
              ref={resourcesRef}
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  [
                    "/blog",
                    "/about",
                    "/contact",
                    "/team",
                    "/help-center",
                    "/programs",
                  ].includes(pathname)
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-green-400"
                }`}
              >
                {t.nav.resources}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {resourcesOpen && (
                <div
                  className="absolute top-full left-0 w-56 bg-white dark:bg-gray-dark rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 pt-1 pb-2 z-50"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setResourcesOpen(false)}
                      className={`flex items-center gap-3 px-5 py-2.5 text-sm font-semibold transition-colors ${
                        pathname === item.href
                          ? "text-primary dark:text-green-400"
                          : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-green-400"
                      }`}
                    >
                      {t.nav[item.labelKey] ?? item.labelKey}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/install-for-free"
              className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                pathname === "/install-for-free"
                  ? "text-white"
                  : "text-white hover:opacity-90"
              }`}
              style={{ backgroundColor: "#174f2e" }}
            >
              {t.nav.install}
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "de" : "en")}
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition-all duration-200 dark:border-gray-600 dark:text-gray-200 dark:hover:border-green-400 dark:hover:text-green-400"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              {lang === "en" ? "DE" : "EN"}
            </button>

            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-all duration-200 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              {dark ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            <Link
              href="/signin"
              className="text-sm font-semibold px-4 py-2 rounded-full text-gray-700 hover:text-primary transition-all duration-200 dark:text-gray-200 dark:hover:text-green-400"
            >
              {t.nav.signin}
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold text-white px-6 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#174f2e" }}
            >
              {t.nav.signup}
            </Link>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-200"
            >
              {dark ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-gray-700 dark:text-gray-200"
            >
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[700px] pb-4" : "max-h-0"}`}
        >
          <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-3 mt-2">
            <ul className="space-y-1 mb-3">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === "/"
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  {t.nav.product}
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileProductOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileProductOpen && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {[...col1.items, ...col2.items, ...col3.items].map(
                      (item) => (
                        <li key={item.label}>
                          {item.href ? (
                            <Link
                              href={item.href}
                              onClick={() => {
                                setOpen(false);
                                setMobileProductOpen(false);
                              }}
                              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                            >
                              <span className="shrink-0">{item.icon}</span>
                              {item.label}
                            </Link>
                          ) : (
                            <span className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs text-gray-400 dark:text-gray-500 cursor-default">
                              <span className="shrink-0">{item.icon}</span>
                              {item.label}
                            </span>
                          )}
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/benefits"
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === "/benefits"
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {t.nav.benefits}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  {t.nav.resources}
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileResourcesOpen && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {resourcesItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => {
                            setOpen(false);
                            setMobileResourcesOpen(false);
                          }}
                          className="block px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                        >
                          {t.nav[item.labelKey] ?? item.labelKey}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/install-for-free"
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === "/install-for-free"
                      ? "text-white"
                      : "text-white"
                  }`}
                  style={{ backgroundColor: "#174f2e" }}
                >
                  {t.nav.install}
                </Link>
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-2 px-3 pt-3 border-t border-gray-100 dark:border-gray-700">
              <button
                onClick={() => setLang(lang === "en" ? "de" : "en")}
                className="text-xs font-bold px-3 py-1.5 rounded-full border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-200"
              >
                {lang === "en" ? "DE" : "EN"}
              </button>
              <Link
                href="/signin"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-gray-700 dark:text-gray-200"
              >
                {t.nav.signin}
              </Link>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-white px-5 py-2 rounded-full"
                style={{ backgroundColor: "#174f2e" }}
              >
                {t.nav.signup}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
