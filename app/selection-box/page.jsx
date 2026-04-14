"use client";
import Image from "next/image";
import Link from "next/link";
import BudgetFriendlySection from "../components/BudgetFriendlySection";

const sensors = [
  {
    title: "Barometer",
    desc: "Measure atmospheric pressure and altitude. Ideal for weather stations and altitude-aware applications.",
    icon: "🌡",
  },
  {
    title: "Hygrometer",
    desc: "Track relative humidity levels to monitor indoor comfort, condensation risk, and dew point.",
    icon: "💧",
  },
  {
    title: "Thermometer",
    desc: "Precise temperature sensing for climate control, cold-chain monitoring, and environmental logging.",
    icon: "🌡",
  },
  {
    title: "Luxmeter",
    desc: "Measure ambient light intensity in lux to automate lighting or protect photosensitive environments.",
    icon: "☀️",
  },
  {
    title: "IR Radiometer",
    desc: "Detect infrared radiation for non-contact temperature measurement and remote sensing applications.",
    icon: "📡",
  },
  {
    title: "Motion Detector",
    desc: "PIR-based motion detection to trigger alerts, automations, or energy-saving presence logic.",
    icon: "👁",
  },
  {
    title: "Presence Button",
    desc: "A capacitive or tactile input for manual presence confirmation or user interaction in your projects.",
    icon: "🔘",
  },
];

export default function SelectionBoxPage() {
  return (
    <main>
      {/* Hero */}
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
              className="text-green-300/70 transition-colors hover:text-green-300"
            >
              Home
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">Sensor Selection Box</span>
          </nav>
          <div className="grid grid-cols-12 min-h-[360px] items-center">
            <div className="col-span-12 md:col-span-8 pb-16 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">
                  Modular Sensor Kit
                </span>
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                C3-Mini™
                <br />
                <span className="text-green-300">Sensor Selection Box</span>
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                Seven featured sensors in one convenient box — everything you need
                to start building environmental and interactive IoT projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BudgetFriendlySection activeHref="/selection-box" />

      {/* ── What's Included ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
                What is the Sensor Selection Box?
              </h2>
              <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed">
                The C3-Mini™ Sensor Selection Box is a modular starter kit designed for
                students, makers, and developers who want to explore a range of IoT sensor
                types without sourcing components individually.
              </p>
              <p className="text-body-color dark:text-green mb-6 text-base leading-relaxed">
                Each box includes seven sensors compatible with the C3-Mini™ board, along
                with example code and documentation to get you started fast. Swap sensors
                in and out to build exactly the project you have in mind.
              </p>
              <Link
                href="/c3-mini-box-devices"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#174f2e" }}
              >
                Install For Free (14 Devices)
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative h-[320px] w-full">
              <Image
                src="/images/selection-boxes/budget-products.webp"
                alt="C3-Mini™ Budget Products"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── The 7 Sensors ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Build your own device within 3 minutes:
          </h2>
          <p className="text-body-color dark:text-green mb-10 text-base">
            The selection box includes one of each sensor below — a complete toolkit for environmental sensing and interaction projects.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sensors.map((sensor, i) => (
              <div
                key={i}
                className="rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 px-4 py-3 flex items-start gap-3"
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: "#174f2e" }}
                >
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 16 13">
                    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-black dark:text-white">{sensor.title}</p>
                  <p className="text-xs text-body-color dark:text-green leading-relaxed mt-0.5">{sensor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
