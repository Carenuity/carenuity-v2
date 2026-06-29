"use client";
import { useLanguage } from "../context/LanguageContext";

const APPLE = "https://apps.apple.com/ie/app/carenuity/id6472718918";
const GOOGLE =
  "https://play.google.com/store/apps/details?id=com.carenuity.home";
const SHOP =
  "https://www.chipglobe.shop/en/p/carenuity-sq-system-customizable-bundle-with-air-quality-display-and-accessories";

function StoreBadges() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
      <a href={GOOGLE} target="_blank" rel="noreferrer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/user-guide/google.png"
          alt="Get it on Google Play"
          className="h-14 w-auto object-contain"
        />
      </a>
      <a href={APPLE} target="_blank" rel="noreferrer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/user-guide/app-store.png"
          alt="Download on the App Store"
          className="h-14 w-auto object-contain"
        />
      </a>
    </div>
  );
}

function PhoneMockup({ de }) {
  const metrics = [
    { icon: "🌡️", label: de ? "Temperatur" : "Temperature", value: "21.4°C" },
    { icon: "💧", label: de ? "Luftfeuchtigkeit" : "Humidity", value: "48%" },
    { icon: "🫁", label: "CO₂", value: "612 ppm" },
    { icon: "🧪", label: "VOC", value: de ? "Niedrig" : "Low" },
  ];

  return (
    <div className="relative mx-auto w-[260px]">
      {/* Phone frame */}
      <div className="relative rotate-[4deg] rounded-[2.5rem] border-[6px] border-gray-900/80 bg-gray-950 p-3 shadow-2xl shadow-black/40 transition-transform duration-500 hover:rotate-0">
        {/* notch */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-gray-900" />
        <div className="overflow-hidden rounded-[1.9rem] bg-gradient-to-b from-[#0f3520] to-[#1e6b3e] p-4 pt-8">
          <div className="flex items-center justify-between text-[11px] text-white/70">
            <span>{de ? "Wohnzimmer" : "Living Room"}</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
              Live
            </span>
          </div>

          {/* AQI dial */}
          <div className="my-4 flex flex-col items-center">
            <div className="relative grid h-28 w-28 place-items-center rounded-full bg-white/5 ring-4 ring-emerald-400/30">
              <span className="absolute inset-0 animate-ping rounded-full ring-2 ring-emerald-400/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">42</div>
                <div className="text-[10px] uppercase tracking-wide text-emerald-300">
                  {de ? "AQI · Gut" : "AQI · Good"}
                </div>
              </div>
            </div>
          </div>

          {/* Metric rows */}
          <div className="space-y-2">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2 text-[11px] text-white/80">
                  <span>{m.icon}</span>
                  {m.label}
                </span>
                <span className="text-[11px] font-semibold text-emerald-300">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating QR card */}
      <div className="absolute -bottom-6 -left-8 w-32 -rotate-6 rounded-2xl bg-white p-3 shadow-xl shadow-black/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/user-guide/apple.jpeg"
          alt={
            de
              ? "Zum Installieren der Carenuity App scannen"
              : "Scan to install the Carenuity app"
          }
          className="h-20 w-full object-contain"
        />
        <p className="mt-1 text-center text-[9px] font-semibold uppercase tracking-wide text-gray-500">
          {de ? "Scannen zum Installieren" : "Scan to install"}
        </p>
      </div>
    </div>
  );
}

export default function CarenuityAppGuideClient() {
  const { lang } = useLanguage();
  const de = lang === "de";

  const walkthrough = [
    {
      src: "/images/user-guide/intro.png",
      alt: de
        ? "Einführung in die Carenuity Mobile App"
        : "Carenuity mobile app introduction",
    },
    {
      src: "/images/user-guide/goal.png",
      alt: de
        ? "Ziele der Carenuity SQ-Panel App und Überwachungsübersicht"
        : "Carenuity SQ-Panel app goals and monitoring overview",
    },
    {
      src: "/images/user-guide/guide.png",
      alt: de
        ? "Designsprache und Onboarding der Carenuity App"
        : "Carenuity app design language and onboarding overview",
    },
    {
      src: "/images/user-guide/ux.png",
      alt: de
        ? "Carenuity App: Anmelden, Startseite, SQ-Panel per QR-Code verbinden und Raumwerte ansehen"
        : "Carenuity app: login, home, connect SQ-Panel via QR code and view room values",
    },
    {
      src: "/images/user-guide/ux2.png",
      alt: de
        ? "Carenuity App: Benachrichtigungen, Warnungen und Passwort zurücksetzen"
        : "Carenuity app notifications, alerts and password reset flow",
    },
  ];

  const chips = de
    ? [
        "🌡️ Temperatur",
        "💧 Luftfeuchtigkeit",
        "🫁 CO₂",
        "🧪 VOC",
        "👤 Anwesenheit",
      ]
    : ["🌡️ Temperature", "💧 Humidity", "🫁 CO₂", "🧪 VOC", "👤 Presence"];

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[150px]"
        style={{
          background:
            "linear-gradient(135deg, #0a2417 0%, #0f3520 45%, #1e6b3e 100%)",
        }}
      >
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* glowing blobs */}
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-green-300/10 blur-3xl" />

        <div className="container relative">
          <div className="grid grid-cols-12 items-center gap-10 pb-20 pt-6">
            {/* Copy */}
            <div className="col-span-12 md:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                <span className="text-xs font-semibold uppercase tracking-wide text-white">
                  Carenuity Mobile App
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
                {de ? (
                  <>
                    Sehen Sie die Luft,
                    <br />
                    die Sie atmen —{" "}
                    <span className="bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">
                      in Ihrer Tasche
                    </span>
                  </>
                ) : (
                  <>
                    See the air
                    <br />
                    you breathe —{" "}
                    <span className="bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">
                      in your pocket
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                {de
                  ? "Verbinden Sie Ihr SQ-Panel mit der Carenuity App, um Temperatur, Luftfeuchtigkeit, Luftqualität und Anwesenheit in Echtzeit zu überwachen — und werden Sie benachrichtigt, sobald sich etwas ändert."
                  : "Pair your SQ-Panel with the Carenuity app to monitor temperature, humidity, air quality and presence in real time — and get alerted the moment something changes."}
              </p>

              {/* Store badges */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={GOOGLE}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/user-guide/google.png"
                    alt="Get it on Google Play"
                    className="h-12 w-auto object-contain"
                  />
                </a>
                <a
                  href={APPLE}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/user-guide/app-store.png"
                    alt="Download on the App Store"
                    className="h-12 w-auto object-contain"
                  />
                </a>
              </div>

              {/* Metric chips */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="col-span-12 md:col-span-5">
              <PhoneMockup de={de} />
            </div>
          </div>
        </div>

        {/* wave divider */}
        <svg
          className="block w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="fill-gray-50 dark:fill-gray-900"
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          {/* Download via QR */}
          <h4 className="text-xl font-semibold text-black dark:text-white mb-6">
            {de
              ? "Scannen Sie zum Herunterladen der Carenuity Mobile App"
              : "Scan to Download the Carenuity Mobile App"}
          </h4>
          <div className="max-w-2xl mb-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              <div className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/user-guide/android.jpeg"
                  alt="Google Play QR code"
                  className="w-44 h-44 object-contain"
                />
                <span className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Android
                </span>
              </div>
              <div className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/user-guide/apple.jpeg"
                  alt="App Store QR code"
                  className="w-44 h-44 object-contain"
                />
                <span className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  iOS
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-200 dark:border-gray-700 mb-8" />

          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-8">
            {de ? "Benutzerhandbuch" : "User Guide"}
          </h2>

          {/* Walkthrough */}
          <div className="space-y-6 mb-12">
            {walkthrough.map((img) => (
              <div key={img.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Store badges again */}
          <div className="max-w-2xl mx-auto mb-10">
            <StoreBadges />
          </div>

          {/* Buy CTA */}
          <p className="text-center">
            <a
              href={SHOP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary hover:bg-primary-light text-white font-bold text-sm transition-all duration-300 hover:scale-105"
            >
              {de
                ? "Kaufen Sie jetzt Ihr erstes SQ-Panel"
                : "Buy your first SQ-Panel now"}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
