"use client";
import Image from "next/image";
import Link from "next/link";
import BudgetFriendlySection from "../components/BudgetFriendlySection";

export default function SensorBoxesPage() {
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
            <Link href="/" className="text-green-300/70 transition-colors hover:text-green-300">
              Home
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">All-for-One Sensor Boxes</span>
          </nav>
          <div className="grid grid-cols-12 min-h-[440px] items-center">
            <div className="col-span-12 md:col-span-7 pb-16 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">
                  Single Sensor Box
                </span>
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Build your own device
                <br />
                <span className="text-green-300">within 3 minutes.</span>
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                Single Sensor Boxes contain all you need to build your own device within 3 minutes.
                Build devices like a Barometer, Hygrometer, Luxmeter or a Motion Detector.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BudgetFriendlySection activeHref="/sensor-boxes" />

      {/* ── What is a Sensor Box — 12-col ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
            What is a Sensor Box?
          </h2>
          <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed max-w-4xl">
            Each Single Sensor Box comes in an Acrylic Box, which includes a Triple-Adapter,
            three stackable boards (S-M-A), a 3D-printed enclosure and a USB Type-C cable to
            power it.
          </p>
          <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed max-w-4xl">
            The three slots with letters <strong className="text-black dark:text-white">S-M-A</strong> stand
            for <strong className="text-black dark:text-white">Sensor</strong>,{" "}
            <strong className="text-black dark:text-white">Microcontroller</strong> and{" "}
            <strong className="text-black dark:text-white">Actuator</strong>, typically a display.
            Besides the sensor, the core part is the C3-Mini microcontroller.
          </p>
          <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed max-w-4xl">
            The plastic casing, a 3D-printed enclosure, houses all the electronics. You can also
            print yourself enclosures in your preferred color and customized style. Find our free
            3D-models on Thingiverse.
          </p>
          <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed max-w-4xl">
            The Triple-Adapter makes it a breeze connecting the three boards — sensor,
            microcontroller and actuator — and you can even build new combinations of S-M-A by
            this base board, using the IoT Triple Selector of the Solution Builder.
          </p>
          <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed max-w-4xl">
            All Sensor Boxes contain an actuator (display, buzzer or LED) to make the sensor
            measurements readable or to trigger acoustic or optical alarms.
          </p>
          <p className="text-body-color dark:text-green text-base leading-relaxed max-w-4xl">
            The USB Type-C data cable finally allows to inject a certain software
            (install-for-free from a browser window) and later on powering your built device at
            any location, e.g. by a phone charger.
          </p>
        </div>
      </section>

      {/* ── Healthcare Assisting Devices — 12-col, cards 6-col ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-black dark:text-white md:text-3xl">
            Healthcare Assisting Devices
          </h2>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6 rounded-2xl bg-white dark:bg-gray-950 shadow-two overflow-hidden hover:shadow-one hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src="/images/selection-boxes/c3-mini-selection-box-case.png"
                  alt="Air-Quality-Meter"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">Air-Quality-Meter</h3>
                <p className="text-body-color dark:text-green text-sm leading-relaxed">
                  Air Quality (VOCs, CO2 &amp; Humidity)
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 rounded-2xl bg-white dark:bg-gray-950 shadow-two overflow-hidden hover:shadow-one hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src="/images/selection-boxes/bio-pulse-meter.jpeg"
                  alt="Bio-Pulse Meter"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">Bio-Pulse Meter</h3>
                <p className="text-body-color dark:text-green text-sm leading-relaxed">
                  Monitor heart rate and biometric data with the C3-Mini™ powered pulse sensor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Motion Detection Devices — 12-col, card 6-col ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-black dark:text-white md:text-3xl">
            Motion Detection Devices
          </h2>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6 rounded-2xl bg-white dark:bg-gray-950 shadow-two overflow-hidden hover:shadow-one hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src="/images/selection-boxes/pir-c3-mini-0.66-oled.jpeg"
                  alt="Fridge Openings Counter"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">Fridge Openings Counter</h3>
                <p className="text-body-color dark:text-green text-sm leading-relaxed">
                  Track how many times your fridge is opened using a PIR motion sensor and OLED display.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Weather Station Devices ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-black dark:text-white md:text-3xl">
            Weather Station Devices
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl bg-white dark:bg-gray-950 shadow-two overflow-hidden hover:shadow-one hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src="/images/selection-boxes/envirosence.jpeg"
                  alt="EnviroSense 680"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">EnviroSense 680</h3>
                <p className="text-body-color dark:text-green text-sm leading-relaxed mb-4">
                  Advanced Environmental Monitoring Solution — temperature, humidity, pressure,
                  and air quality in one device.
                </p>
                <Link
                  href="/envirosense-680"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary dark:text-green-400 hover:underline"
                >
                  Click here to learn more on EnviroSence 680
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-two">
              <video
                src="/video/weather.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Buttons ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-12">
        <div className="container">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/install-for-free"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#174f2e" }}
            >
              Install For Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="https://www.chipglobe.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90 border-2 text-black dark:text-white"
              style={{ borderColor: "#174f2e" }}
            >
              Buy C3-Mini Parts
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
