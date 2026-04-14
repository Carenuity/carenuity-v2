"use client";
import Image from "next/image";
import Link from "next/link";
import BudgetFriendlySection from "../components/BudgetFriendlySection";

const specs = [
  ["Operating Voltage", "3.3V"],
  ["Digital I/O Pins", "12"],
  ["Clock Speed", "160 MHz"],
  ["Flash", "4 MB"],
  ["Size", "34.3 × 25.4 mm"],
  ["Weight", "2.6 g"],
];

const versions = [
  { label: "V2.2.1", desc: "Carenuity EU version" },
  { label: "V2.1.0", desc: "Lolin version" },
  { label: "V1.0.0", desc: "Original version" },
];

const standaloneApps = [
  {
    title: "WLED Lighting Control",
    desc: "Run WLED firmware to control addressable LED strips with effects, music reactivity, and smart home integration.",
    image: "/images/c3-mini/wled.jpeg",
    href: "https://chipglobe-dev.web.app/cloudfree/WLED/C3-Mini",
  },
  {
    title: "GPIO Viewer",
    desc: "Monitor all GPIO pins live in your browser — ideal for debugging hardware projects and sensor circuits.",
    image: "/images/c3-mini/gpio-banner.jpeg",
    href: "https://chipglobe-dev.web.app/cloudfree/GPIO/C3-Mini",
  },
  {
    title: "YouTube Counter",
    desc: "Display real-time YouTube channel statistics — subscribers and likes — on a small OLED screen.",
    image: "/images/c3-mini/youtube-meter.jpeg",
    href: "https://chipglobe-dev.web.app/cloudfree/YOUTUBE-METEER/C3-Mini",
  },
];

const sensorDevices = [
  { title: "Barometer", desc: "Measure atmospheric pressure and altitude." },
  { title: "Hygrometer", desc: "Track relative humidity and temperature." },
  { title: "Thermometer", desc: "Precise ambient temperature sensing." },
  { title: "Luxmeter", desc: "Measure ambient light intensity in lux." },
  { title: "IR Radiometer", desc: "Non-contact infrared temperature measurement." },
  { title: "Motion Detector", desc: "PIR-based motion detection for automations." },
  { title: "Presence Button", desc: "Capacitive or tactile user interaction input." },
];

const docs = [
  { name: "C3-Mini Datasheet V2.2.1 [PDF]", href: "/docs/c3-mini/datasheet-v2.2.1.pdf" },
  { name: "Getting Started with MicroPython [PDF]", href: "/docs/c3-mini/getting-started-micropython.pdf" },
  { name: "Getting Started with Arduino [PDF]", href: "/docs/c3-mini/getting-started-arduino.pdf" },
  { name: "Getting Started with CircuitPython [PDF]", href: "/docs/c3-mini/getting-started-circuitpython.pdf" },
  { name: "C3-Mini Pinout Reference [PDF]", href: "/docs/c3-mini/pinout-reference.pdf" },
  { name: "ESP-IDF Setup Guide [PDF]", href: "/docs/c3-mini/espidf-setup.pdf" },
];

export default function C3MiniClient() {
  return (
    <main>
      {/* ── Hero ── */}
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
            <span className="font-medium text-white">C3-Mini</span>
          </nav>
          <div className="grid grid-cols-12 min-h-[440px] items-center">
            <div className="col-span-12 md:col-span-8 pb-16 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">
                  Budget Friendly IoT
                </span>
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                C3-Mini™ Applications
                <br />
                <span className="text-green-300">Build Anything</span>
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-white/80 md:text-xl">
                A mini Wi-Fi &amp; Bluetooth 5 (LE) board based on ESP32-C3FH4.
                Compatible with MicroPython, Arduino, CircuitPython, and ESP-IDF.
              </p>
              <Link
                href="/c3-mini/applications"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white text-sm shadow-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(134,239,172,0.5)",
                }}
              >
                C3-Mini™ Applications
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget Friendly (first after hero) ── */}
      <BudgetFriendlySection activeHref="/c3-mini" />

      {/* ── What is C3-Mini ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
                What is C3-Mini™?
              </h2>
              <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed">
                The C3-Mini™ is a compact, powerful microcontroller board based on the
                ESP32-C3 chip with a RISC-V Single-Core CPU running at 160 MHz. It features
                Wi-Fi and Bluetooth LE 5.0, a Type-C USB connector, 4 MB of Flash, and
                12 GPIO pins with ADC, I2C, SPI, and UART interfaces.
              </p>
              <p className="text-body-color dark:text-green mb-6 text-base leading-relaxed">
                It shares the same footprint and pinout as the popular D1 Mini, making it
                compatible with the world&apos;s largest sensor and actuator shield portfolio.
                The default firmware is MicroPython, but it also supports Arduino,
                CircuitPython, and ESP-IDF.
              </p>
              <p className="text-body-color dark:text-green text-sm italic">
                Tip: To flash the C3-Mini, hold the BOOT button, click the RST button briefly
                while keeping BOOT pressed, then start WebFlashing.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-two">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
                style={{ display: "block" }}
              >
                <source src="/video/c3-mini.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Specifications + Versions ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Specs table + Versions below */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-two bg-white dark:bg-gray-950">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: "#174f2e" }}>
                      <th className="px-6 py-4 text-left text-white font-semibold">Specification</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map(([key, val], i) => (
                      <tr
                        key={key}
                        className={i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50 dark:bg-gray-900"}
                      >
                        <td className="px-6 py-3 font-medium text-black dark:text-white">{key}</td>
                        <td className="px-6 py-3 text-body-color dark:text-green">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Versions under table */}
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Versions</h3>
                <div className="space-y-3">
                  {versions.map((v) => (
                    <div
                      key={v.label}
                      className="flex items-center gap-4 rounded-xl bg-white dark:bg-gray-950 px-5 py-3 shadow-two"
                    >
                      <span
                        className="text-xs font-bold text-white px-3 py-1 rounded-full shrink-0"
                        style={{ backgroundColor: "#174f2e" }}
                      >
                        {v.label}
                      </span>
                      <span className="text-sm text-body-color dark:text-green">{v.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hardware features */}
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-5">Hardware Features</h3>
              <ul className="space-y-3">
                {[
                  "ESP32-C3 Wi-Fi & Bluetooth LE with RISC-V Single-Core CPU",
                  "Type-C USB connectivity",
                  "1× WS2812B RGB LED on-board",
                  "ADC, I2C, SPI, UART interfaces",
                  "Compatible with LOLIN D1 Mini shields",
                  "Supports MicroPython, Arduino, CircuitPython, ESP-IDF",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-body-color dark:text-green">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "#174f2e" }}
                    >
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 16 13">
                        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Build your own device ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Build your own device within seconds:
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {standaloneApps.map((app, i) => (
              <a
                key={i}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-white dark:bg-gray-950 shadow-two overflow-hidden hover:shadow-one hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800 block"
              >
                <div className="relative h-[180px] w-full overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-black dark:text-white mb-2 group-hover:text-primary transition-colors">{app.title}</h3>
                    <p className="text-body-color dark:text-green text-sm leading-relaxed">{app.desc}</p>
                  </div>
                  <svg className="w-4 h-4 text-primary dark:text-green-400 shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* 7 sensor devices */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sensorDevices.map((device, i) => (
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
                  <p className="text-sm font-bold text-black dark:text-white">{device.title}</p>
                  <p className="text-xs text-body-color dark:text-green leading-relaxed mt-0.5">{device.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tutorials ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Tutorials
          </h2>
          <p className="text-body-color dark:text-green mb-10 text-base max-w-2xl">
            Get started with the C3-Mini™ using our step-by-step video tutorial covering MicroPython initialisation and WebFlashing.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <a
              href="https://www.youtube.com/watch?v=WGcBlZnaca0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full overflow-hidden rounded-2xl bg-gray-900 shadow-two"
              style={{ aspectRatio: "16/9" }}
              aria-label="C3-Mini Tutorial Video"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://img.youtube.com/vi/WGcBlZnaca0/hqdefault.jpg"
                alt="C3-Mini Tutorial"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/50">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-200 group-hover:scale-110">
                  <svg className="ml-1 h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black dark:text-white">
                Getting Started with C3-Mini™
              </h3>
              <p className="text-body-color dark:text-green text-base leading-relaxed">
                Learn how to initialise your C3-Mini™ with MicroPython using WebFlashing — no special tools required.
              </p>
              <ul className="space-y-3">
                {[
                  "Flashing MicroPython via WebFlasher",
                  "Arduino IDE setup and first sketch",
                  "CircuitPython installation guide",
                  "Using ESP-IDF for advanced development",
                  "Compatible with LOLIN D1 Mini shields and accessories",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-body-color dark:text-green">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "#174f2e" }}
                    >
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 16 13">
                        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── D1 vs C3-Mini ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
                What is the difference between the D1 and the C3-Mini™?
              </h2>
              <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed">
                The two super popular boards — the D1 and C3-Mini™ — share the same footprint
                and pinout, making them a perfect fit for the world&apos;s largest sensor and
                actuator portfolio.
              </p>
              <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed">
                The C3-Mini™ is the successor to the ESP32-Mini, adding Bluetooth LE 5.0 and
                future-proofing your projects with support for the upcoming Matter standard.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { label: "D1 Mini", points: ["ESP8266", "Wi-Fi only", "No Bluetooth", "2.4 GHz"] },
                  { label: "C3-Mini™", points: ["ESP32-C3", "Wi-Fi + BLE 5.0", "Matter ready", "RISC-V CPU"] },
                ].map((col) => (
                  <div key={col.label} className="rounded-xl p-4 bg-gray-50 dark:bg-gray-900">
                    <p
                      className="text-xs font-bold text-white px-2 py-1 rounded-full inline-block mb-3"
                      style={{ backgroundColor: "#174f2e" }}
                    >
                      {col.label}
                    </p>
                    <ul className="space-y-1.5">
                      {col.points.map((p) => (
                        <li key={p} className="text-sm text-body-color dark:text-green">{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[320px] w-full">
              <Image
                src="/images/c3-mini/d1-versus-c3-mini.png"
                alt="D1 Mini vs C3-Mini comparison"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Documentation ── */}
      <section className="bg-green-bg py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Documentation
          </h2>
          <ul className="mb-8 space-y-3">
            {docs.map((f, i) => (
              <li key={i}>
                <a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline dark:text-green"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  {f.name}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href="/c3-mini/applications"
            className="shadow-btn bg-primary hover:bg-primary-light inline-block rounded-full px-8 py-3 text-base font-semibold text-white transition duration-300"
          >
            Explore C3-Mini™ Applications →
          </Link>
        </div>
      </section>
    </main>
  );
}
