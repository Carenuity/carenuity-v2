"use client";
import Image from "next/image";
import Link from "next/link";
import BudgetFriendlySection from "../components/BudgetFriendlySection";

export default function AiAssistedPage() {
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
            <span className="font-medium text-white">
              AI Assisted Solutions
            </span>
          </nav>
          <div className="grid grid-cols-12 min-h-[440px] items-center">
            <div className="col-span-12 md:col-span-7 pb-16 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">
                  AI Assisted Solutions
                </span>
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                AI-Assisted Devices
                <br />
                <span className="text-green-300">at your Fingertip</span>
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                AI-assisted Carenuity devices combine cutting edge sensor
                technology with artificial intelligence to gather, process, and
                analyze data from their environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BudgetFriendlySection activeHref="/ai-assisted" />

      {/* ── Featured AI-Assisted Devices ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            AI-assisted devices
          </h2>
          <p className="text-body-color dark:text-green mb-12 text-base max-w-3xl">
            These sensors detect various physical parameters including
            temperature, motion, and light, applying AI to make informed
            decisions based on gathered data.
          </p>

          {/* Radar Sensor — 12-col */}
          <div className="col-span-12 mb-8">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
              C3-Mini Radar Sensor
            </h3>
            <p className="text-sm font-semibold text-primary dark:text-green-400 mb-4 uppercase tracking-wide">
              Your Radar Occupancy Sensor for Smart Home
            </p>
            <p className="text-body-color dark:text-green text-base leading-relaxed mb-3 max-w-4xl">
              A radar sensor employs radio waves to detect stationary,
              approaching, departing or missing objects and measure their
              distance, speed, and other characteristics through area
              segmentation.
            </p>
            <p className="text-body-color dark:text-green text-base leading-relaxed max-w-4xl">
              Unlike conventional PIR sensors that rely on heat signatures and
              struggle with subtle motion or presence detection, the Carenuity™
              SQ-Panel features a highly precise 60 GHz radar sensor. This
              advanced sensing technology enables real-time detection of
              micro-movements, even through materials, making it suitable for
              modern presence automation. Whether designing intelligent HVAC or
              lighting control or building a Home Assistant setup, the
              Carenuity™ SQ-Panel provides accurate occupancy data via MQTT and
              seamlessly integrates into smart ecosystems.
            </p>
          </div>

          {/* Blog cards — 3 col */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <a
              href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/template-how-to-write-a-tips-blog-post-1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-two overflow-hidden hover:shadow-one hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-[180px] w-full">
                <Image
                  src="/images/ai-assisted/radar-sensor1.png"
                  alt="HLK-LD2410C Radar Sensor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-black dark:text-white text-sm mb-2">
                  A Beginner&rsquo;s Guide to HLK-LD2410C 24GHz Radar Sensor
                </h4>
                <p className="text-xs text-body-color dark:text-green leading-relaxed mb-3">
                  Explores the HLK-LD2410, a 24GHz Human Presence sensor.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary dark:text-green-400">
                  Read more
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
            <a
              href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/discovering-the-ld2410c-radar-sensor"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-two overflow-hidden hover:shadow-one hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-[180px] w-full">
                <Image
                  src="/images/ai-assisted/radar-sensor2.png"
                  alt="LD2410C Radar Sensor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-black dark:text-white text-sm mb-2">
                  Discovering the LD2410C Radar Sensor
                </h4>
                <p className="text-xs text-body-color dark:text-green leading-relaxed mb-3">
                  Covers detection capabilities through walls, fog, and
                  darkness.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary dark:text-green-400">
                  Read more
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
            <a
              href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/using-the-bgt60ltr11-radar-shield2go-with-esp32-for-ai-applications"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-two overflow-hidden hover:shadow-one hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-[180px] w-full">
                <Image
                  src="/images/ai-assisted/esp32-cam1.png"
                  alt="BGT60LTR11 Radar Shield2Go"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-black dark:text-white text-sm mb-2">
                  Using the BGT60LTR11 Radar Shield2Go with ESP32 for AI
                  Applications
                </h4>
                <p className="text-xs text-body-color dark:text-green leading-relaxed mb-3">
                  Discusses the compact BGT60LTR11 Radar Shield2Go.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary dark:text-green-400">
                  Read more
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>

          {/* Canva iframe */}
          <div
            className="w-full mb-16"
            style={{ position: "relative", height: 0, paddingTop: "56.25%" }}
          >
            <iframe
              src="https://www.canva.com/design/DAGZXDtiuow/MkQupxfpCixuz8NGVmZ37Q/view?embed"
              allow="fullscreen"
              loading="lazy"
              title="C3-Mini Radar Sensor Presentation"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>

          {/* ESP32-CAM — 12-col */}
          <div className="col-span-12 mt-6">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
              C3-Mini Adapter with ESP32-Cam
            </h3>
            <p className="text-body-color dark:text-green text-base leading-relaxed mb-3 max-w-4xl">
              The ESP32-CAM is a compact, low-cost module that combines an
              ESP32-S microcontroller with an OV2640 camera. In object detection
              applications, it proves particularly valuable due to built-in
              Wi-Fi and Bluetooth capabilities, enabling wireless image
              transmission and processing.
            </p>
            <p className="text-body-color dark:text-green text-base leading-relaxed mb-8 max-w-4xl">
              Leveraging libraries like OpenCV and machine learning models, the
              ESP32-CAM performs real-time object detection and identification.
              This makes it ideal for home automation, security systems, and IoT
              projects requiring visual data capture and analysis.
            </p>

            {/* ESP32-CAM blog card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a
                href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/template-how-to-write-a-tips-blog-post"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-two overflow-hidden hover:shadow-one hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-[180px] w-full">
                  <Image
                    src="/images/ai-assisted/esp32-cam2.png"
                    alt="ESP32-CAM Smart Object Detector"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-black dark:text-white text-sm mb-2">
                    Turning Your ESP32-CAM into a Smart Object Detector with
                    Edge Impulse
                  </h4>
                  <p className="text-xs text-body-color dark:text-green leading-relaxed mb-3">
                    Tutorial on creating object detection models on ESP32-CAM
                    using Edge Impulse.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary dark:text-green-400">
                    Read more
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Autonomous Driving Car ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl mb-4">
                Autonomous Driving Car
              </h2>
              <p className="text-body-color dark:text-green text-base leading-relaxed mb-4">
                In the world of automotive innovation, history often serves as a
                foundation for future advancements. The Autonomous Driving
                Infineon Car, built by ChipGlobe&rsquo;s Carenuity team, is a
                testament to this principle.
              </p>
              <p className="text-body-color dark:text-green text-base leading-relaxed mb-4">
                This vehicle embodies the latest autonomous driving technology
                while honoring the legendary Schaeffler FAG Model MF3, unveiled
                in June 2009. The shark-like design of the MF3, symbolizing
                speed and precision, has been reincarnated in 2025 in a 1:10
                ratio model, showcasing the blend of past and present
                engineering achievements.
              </p>
              <p className="text-body-color dark:text-green text-base leading-relaxed mb-6">
                The Schaeffler FAG Model MF3 unveiling occurred at an evening
                event at Schaeffler&rsquo;s foyer, attended by Dr. Grunau,
                former representative of the FAG Schaeffler Group Industry
                management board, and Dipl.-Ing. Seubert, former chairman of the
                Unterfranken district association of the Verein Deutscher
                Ingenieure (VDI).
              </p>
              <Link
                href="/product/autonomous-driving-car"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#174f2e" }}
              >
                Learn more
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="relative h-[320px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/ai-assisted/autonomous-car.png"
                  alt="Autonomous Driving Infineon Car"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
