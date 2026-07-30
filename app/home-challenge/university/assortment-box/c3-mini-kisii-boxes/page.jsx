"use client";
import Link from "next/link";
import UniversitySidebar from "../../UniversitySidebar";
import { useLanguage } from "../../../../context/LanguageContext";

const box1 = [
  [
    {
      name: "ESP32 Microcontroller",
      href: "https://www.chipglobe.shop/search?q=2404111-1",
    },
    {
      name: "Triple Adapter",
      href: "https://www.chipglobe.shop/search?q=2411115-1",
    },
    {
      name: "DHT22 Sensor",
      href: "https://www.chipglobe.shop/search?q=230199-1",
    },
    {
      name: "PIR Motion Sensor",
      href: "https://www.chipglobe.shop/search?q=19017-1",
    },
    {
      name: "Light Sensor",
      href: "https://www.chipglobe.shop/search?q=light+sensor+LDR",
    },
  ],
  [
    {
      name: "MQ-2 Gas Sensor",
      href: "https://www.chipglobe.shop/search?q=MQ-2",
    },
    {
      name: "Relay Module",
      href: "https://www.chipglobe.shop/search?q=relay+module",
    },
    {
      name: "RGB Smart Bulb",
      href: "https://www.chipglobe.shop/search?q=2301100-1",
    },
    {
      name: "SG90 Servo Motor",
      href: "https://www.chipglobe.shop/search?q=2510200-1",
    },
    { name: "ESP32-CAM", href: "https://www.chipglobe.shop/search?q=230195-1" },
  ],
  [
    {
      name: "Breadboard",
      href: "https://www.chipglobe.shop/search?q=2501123-1",
    },
    {
      name: "Jumper Wires",
      href: "https://www.chipglobe.shop/search?q=2510197-1",
    },
    {
      name: "OLED Display",
      href: "https://www.chipglobe.shop/search?q=2411116-1",
    },
    { name: "Buzzer", href: "https://www.chipglobe.shop/search?q=230198-1" },
    {
      name: "SG90 Connector PCB",
      href: "https://www.chipglobe.shop/search?q=SG90+connector+pcb",
    },
  ],
];

const box2 = [
  [
    {
      name: "ESP32 Microcontroller",
      href: "https://www.chipglobe.shop/search?q=2404111-1",
    },
    {
      name: "Triple Adapter",
      href: "https://www.chipglobe.shop/search?q=2411115-1",
    },
    {
      name: "DHT22 Sensor",
      href: "https://www.chipglobe.shop/search?q=230199-1",
    },
    {
      name: "PIR Motion Sensor",
      href: "https://www.chipglobe.shop/search?q=19017-1",
    },
    {
      name: "Light Sensor",
      href: "https://www.chipglobe.shop/search?q=light+sensor+LDR",
    },
  ],
  [
    {
      name: "MQ-2 Gas Sensor",
      href: "https://www.chipglobe.shop/search?q=MQ-2",
    },
    {
      name: "RGB Smart Bulb",
      href: "https://www.chipglobe.shop/search?q=2301100-1",
    },
    {
      name: "SG90 Servo Motor",
      href: "https://www.chipglobe.shop/search?q=2510200-1",
    },
    { name: "ESP32-CAM", href: "https://www.chipglobe.shop/search?q=230195-1" },
    {
      name: "Micro-USB Cable",
      href: "https://www.chipglobe.shop/search?q=2501125-1",
    },
  ],
  [
    {
      name: "Breadboard",
      href: "https://www.chipglobe.shop/search?q=2501123-1",
    },
    {
      name: "Jumper Wires",
      href: "https://www.chipglobe.shop/search?q=2510197-1",
    },
    { name: "Buzzer", href: "https://www.chipglobe.shop/search?q=230198-1" },
    {
      name: "OLED Display",
      href: "https://www.chipglobe.shop/search?q=2411116-1",
    },
  ],
];

function BoxComponentList({ columns }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {columns.map((col, i) => (
        <ul key={i} className="space-y-1.5 text-sm">
          {col.map((c) => (
            <li key={c.name}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default function C3MiniKisiiBoxesPage() {
  const { t } = useLanguage();
  const cm = t.homeChallengeUniversity.common;
  const p = t.homeChallengeUniversity.c3Mini;
  return (
    <main>
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
            <Link
              href="/"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {cm.home}
            </Link>
            <span className="text-green-300/40">/</span>
            <Link
              href="/home-challenge"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {cm.homeChallenge}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">{p.crumb}</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {p.badge}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {p.title}
              <br />
              <span className="text-green-300">{p.subtitle}</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {p.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <UniversitySidebar />
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {p.overviewTitle}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
                {p.overviewBody}
              </p>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {p.solutionBuilderTitle}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {p.solutionBuilderBody}
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      <strong>{p.howItWorks}</strong>
                    </p>
                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300 list-disc pl-5 mb-4">
                      {p.howItWorksList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      {p.githubNote}
                    </p>
                    <a
                      href="https://carenuity.netlify.app/solution-builder"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      {p.exploreLink}
                    </a>
                  </div>
                  <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/home-challenge/universities/c3-mini-kisii-boxes/image003.png"
                      alt="Solution Builder"
                      className="w-full object-contain rounded"
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {p.threeMinutesTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {p.steps.map(({ step, desc }) => (
                  <div
                    key={step}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5"
                  >
                    <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-2">
                      {step}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              <h2
                id="boxes"
                className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6"
              >
                {p.boxesTitle}
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-6">
                <h3 className="text-lg font-bold text-[#0d2137] dark:text-white mb-4">
                  {p.box1Title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/home-challenge/universities/c3-mini-kisii-boxes/modular-c3-mini-ai-product-dev-box-1-top-side.png"
                      alt="Box 1 top"
                      className="w-full object-contain rounded"
                    />
                  </div>
                  <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/home-challenge/universities/c3-mini-kisii-boxes/modular-c3-mini-ai-product-dev-box-1-bottom-side.png"
                      alt="Box 1 bottom"
                      className="w-full object-contain rounded"
                    />
                  </div>
                </div>
                <BoxComponentList columns={box1} />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-10">
                <h3 className="text-lg font-bold text-[#0d2137] dark:text-white mb-4">
                  {p.box2Title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/home-challenge/universities/c3-mini-kisii-boxes/modular-c3-mini-ai-product-dev-box-2-top-side.png"
                      alt="Box 2 top"
                      className="w-full object-contain rounded"
                    />
                  </div>
                  <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/home-challenge/universities/c3-mini-kisii-boxes/modular-c3-mini-ai-product-dev-box-2-bottom-side.png"
                      alt="Box 2 bottom"
                      className="w-full object-contain rounded"
                    />
                  </div>
                </div>
                <BoxComponentList columns={box2} />
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {p.impactTitle}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
                {p.impactBody}
              </p>

              <h2
                id="cta"
                className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4"
              >
                {p.bringTitle}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {p.bringBody}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-6 py-2.5 text-sm font-semibold text-white transition duration-300 inline-block"
                >
                  {p.contactUs}
                </Link>
                <Link
                  href="/home-challenge/university/assortment-box/press"
                  className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary dark:text-green-400 hover:bg-primary/5 transition duration-300 inline-block"
                >
                  {p.pressMaterial}
                </Link>
                <Link
                  href="/home-challenge/university/assortment-box/kisii-onepager"
                  className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary dark:text-green-400 hover:bg-primary/5 transition duration-300 inline-block"
                >
                  {p.kisiiOnepager}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
