"use client";
import Link from "next/link";

const SolutionWidget = ({ solutionId, title }) => {
  const baseUrl = "https://solutions.carenuity.com/widgets/solutions/";
  return (
    <div
      className="relative w-full overflow-hidden p-0 dark:ring-2 dark:ring-gray-700 dark:rounded-lg"
      style={{ height: "19rem" }}
    >
      <iframe
        src={baseUrl + solutionId}
        allow="usb *; serial *;"
        loading="lazy"
        title={title}
        className="absolute top-0 left-0 w-full h-full border-0"
      />
    </div>
  );
};

export default function C3MiniApplicationsPage() {
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
            <Link href="/c3-mini" className="text-green-300/70 transition-colors hover:text-green-300">
              C3-Mini
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">Applications</span>
          </nav>
          <div className="grid grid-cols-12 min-h-[360px] items-center">
            <div className="col-span-12 md:col-span-8 pb-16 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">
                  C3-Mini™ Applications
                </span>
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Build your own device
                <br />
                <span className="text-green-300">within seconds</span>
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                The C3-Mini™ supports install-for-free applications for{" "}
                <strong className="text-white">CloudFree</strong>,{" "}
                <strong className="text-white">Home Assistant</strong>,{" "}
                <strong className="text-white">IoT AppStore</strong> and{" "}
                <strong className="text-white">Matter/ESPZero</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Standalone — no Display or Sensor ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container mb-8">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white md:text-3xl">
            Applications for the plain C3-Mini™ &mdash; no Display or Sensor required
          </h2>
          <p className="text-body-color dark:text-green text-base leading-relaxed max-w-3xl">
            Grab your plain C3-Mini and build your own device within 3 minutes, by installing
            the popular{" "}
            <a href="https://chipglobe-dev.web.app/cloudfree/WLED/C3-Mini" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary dark:text-green-400 hover:underline">
              WLED-Application
            </a>
            , the helpful{" "}
            <a href="https://chipglobe-dev.web.app/cloudfree/GPIO/C3-Mini" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary dark:text-green-400 hover:underline">
              GPIO-Viewer
            </a>{" "}
            or a plain &ldquo;empty&rdquo; ESPHome device for Home Assistant with no special features built-in.
            Ready to make it your own.
          </p>
        </div>
        <div className="container flex flex-col gap-6">
          <SolutionWidget solutionId="mKjGP6fwSk1SotR7VjmK" title="GPIO Viewer" />
          <SolutionWidget solutionId="pDNf45XWUJcTJcMBGM4z" title="WLED" />
        </div>
      </section>

      {/* ── With Display ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container mb-8">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white md:text-3xl">
            Applications for the C3-Mini™ with Display
          </h2>
          <p className="text-body-color dark:text-green text-base leading-relaxed max-w-3xl">
            Grab your C3-Mini and build your own device within 3 minutes, by attaching a display{" "}
            <strong>
              [<a href="https://www.chipglobe.shop/p/0-66-zoll-oled-shield" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-green-400 hover:underline">
                buy here
              </a>]
            </strong>{" "}
            to enable applications like a WiFi Signal Strength Meter, a Weather-Station or a{" "}
            <a href="https://chipglobe-dev.web.app/cloudfree/YOUTUBE-METEER/C3-Mini" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary dark:text-green-400 hover:underline">
              YouTube-Counter
            </a>{" "}
            for Followers and Likes.
          </p>
        </div>
        <div className="container flex flex-col gap-6">
          <SolutionWidget solutionId="33ShEVCKo7u5L24bznXc" title="YouTube Meter" />
          <SolutionWidget solutionId="9SlDg2KjWjK8UDr51Bpj" title="WiFi Signal Strength" />
        </div>
      </section>

      {/* ── With Sensor & Display ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container mb-8">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white md:text-3xl">
            Applications for the C3-Mini™ with Sensor &amp; Display
          </h2>
          <p className="text-body-color dark:text-green text-base leading-relaxed max-w-3xl">
            Grab your C3-Mini and build your own device within 3 minutes, by free-installing
            various sensor applications like a Barometer, Hygrometer, Luxmeter or Motion Detector.
          </p>
        </div>
        <div className="container flex flex-col gap-6">
          <SolutionWidget solutionId="eieQlkAmwh1LUePfYXmW" title="Air Quality" />
          <SolutionWidget solutionId="nzeAXNAV3LOeRA2avVDM" title="BMP180 Barometer" />
          <SolutionWidget solutionId="QucQ05EfksGSmSeHVHZY" title="Bio-Pulse" />
          <SolutionWidget solutionId="EVfcgU5gUOrAKLN3Ik0Y" title="EnviroSense" />
          <SolutionWidget solutionId="hOKYr6kDq4FQmG3oamNe" title="Home Challenge" />
          <SolutionWidget solutionId="wcs3mCGrCzP5BnAHjjIH" title="SHT30 Hygrometer" />
          <SolutionWidget solutionId="HgZnhYqfUiktMbMPin16" title="DHT22" />
          <SolutionWidget solutionId="KiKMCrAtAioE0f3vcQ3Q" title="Hygrometer" />
        </div>
      </section>

      <section className="bg-green-bg dark:bg-gray-900 py-10">
        <div className="container">
          <Link
            href="/c3-mini"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: "#174f2e" }}
          >
            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Back to C3-Mini Overview
          </Link>
        </div>
      </section>
    </main>
  );
}
