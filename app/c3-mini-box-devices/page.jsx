"use client";
import Image from "next/image";
import Link from "next/link";

const SolutionWidget = ({ solutionId }) => {
  const baseUrl = "https://solutions.carenuity.com/widgets/solutions/";
  return (
    <div
      className="relative w-full overflow-hidden dark:ring-2 dark:ring-gray-700"
      style={{ height: "19rem" }}
    >
      <iframe
        src={baseUrl + solutionId}
        allow="usb *; serial *;"
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full border-0"
      />
    </div>
  );
};

const devices = [
  {
    title: "Barometer",
    desc: "Measures atmospheric pressure. It can be equipped with a display to show pressure readings or a buzzer to signal significant changes, which may indicate weather shifts.",
    assembleUrl: "https://www.instagram.com/p/DMu1xu1NIEp/",
    installUrl: "https://www.instagram.com/p/DMu5_BgtxYJ/",
    widgets: ["nzeAXNAV3LOeRA2avVDM", "mROIhGQ4xc7dgA1bcTd4"],
  },
  {
    title: "Hygrometer",
    desc: "Monitors air humidity. It may use a display to show relative humidity or a buzzer to alert when humidity levels fall outside a desired range.",
    assembleUrl: "https://www.instagram.com/p/DMxBFH7tDSY/",
    installUrl: null,
    widgets: ["KiKMCrAtAioE0f3vcQ3Q", "5v3QisKoW3z20dzPP9gf"],
  },
  {
    title: "IR Radiometer",
    desc: "Detects thermal radiation without contact. It can use a display to show surface temperatures or a buzzer to indicate abnormal thermal readings.",
    assembleUrl: "https://www.instagram.com/p/DMxWqowNWAo/",
    installUrl: null,
    widgets: ["KzjsdjS3rA1J5ABAn9Uu", "uEzTHcu5LHthUsDmH195"],
  },
  {
    title: "Luxmeter",
    desc: "Measures light intensity. It may have a display showing lux values or a buzzer that activates when light levels are too high or too low.",
    assembleUrl: "https://www.instagram.com/p/DMxcpzuthU5/",
    installUrl: null,
    widgets: ["74eP4Syrjw85D0UWmqqi", "7C7ry0cBJ2igYiv8OS8q"],
  },
  {
    title: "Thermometer",
    desc: "Measures temperature. It can feature a display for real-time temperature readings or a buzzer to notify when temperatures exceed or drop below set thresholds.",
    assembleUrl: "https://www.instagram.com/p/DMxD5ILtbvc/",
    installUrl: "https://www.instagram.com/solutions.carenuity/reel/DNAkYVetFUD/",
    widgets: ["T8iq4WKgvGuCrREcLNzC", "NCKgNpqMMPWE68tBoNGW"],
  },
  {
    title: "Motion Detector",
    desc: "Senses movement. It may show motion status on a display or use a buzzer to audibly alert when movement is detected.",
    assembleUrl: "https://www.instagram.com/p/DM-BLZttwyd/",
    installUrl: null,
    widgets: ["UvGo54vaf9rNgSVCuuDp", "ce57xKxHhSJGVzb4P1Jk"],
  },
  {
    title: "Presence Button",
    desc: "Detects user presence through interaction. It can confirm activation via a display or provide feedback through a buzzer when pressed.",
    assembleUrl: "https://www.instagram.com/p/DNAb3TGN9UA/",
    installUrl: null,
    widgets: ["yvn3zXHy5FO0549khDk9", "1H6rdCdC4OX5q88hnYv5"],
  },
];

export default function C3MiniBoxDevicesPage() {
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
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm flex-wrap">
            <Link href="/" className="text-green-300/70 transition-colors hover:text-green-300">
              Home
            </Link>
            <span className="text-green-300/40">/</span>
            <Link href="/selection-box" className="text-green-300/70 transition-colors hover:text-green-300">
              C3-Mini Sensor Selection Box
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">C3-Mini Sensor Box Devices</span>
          </nav>
          <div className="grid grid-cols-12 min-h-[360px] items-center">
            <div className="col-span-12 md:col-span-8 pb-16 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">
                  C3-Mini Sensor Box
                </span>
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                C3-Mini Sensor Box
                <br />
                <span className="text-green-300">Devices</span>
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                Get the box so that you can build all these C3-Mini Devices within 3 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro + 3 Cards ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <p className="text-body-color dark:text-green mb-10 text-base leading-relaxed max-w-3xl">
            Select your S-M-A Triple, grab the available parts from your drawer or go shopping
            for getting more suited sensor boxes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 — SMA video */}
            <div className="rounded-2xl overflow-hidden shadow-two bg-black">
              <video
                src="/video/sma.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ minHeight: "220px" }}
              />
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl overflow-hidden shadow-two">
              <div className="relative h-[220px] w-full">
                <Image
                  src="/images/install-for-free/install-for-free.png"
                  alt="Install for free"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl overflow-hidden shadow-two">
              <div className="relative h-[220px] w-full">
                <Image
                  src="/images/install-for-free/install.png"
                  alt="Install application"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Device Applications ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Applications
          </h2>
          <p className="text-body-color dark:text-green mb-12 text-base max-w-3xl">
            Stack one of the seven sensor boards onto the Triple-Adapter, place the C3-Mini
            in the middle and add the display or buzzer on the right.
          </p>

          <div className="flex flex-col gap-12">
            {devices.map((device, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {device.title}
                </h3>
                <p className="text-body-color dark:text-green text-base leading-relaxed mb-2 max-w-3xl">
                  {device.desc}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {device.assembleUrl && (
                    <a
                      href={device.assembleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary dark:text-green-400 hover:underline"
                    >
                      See how to assemble
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {device.installUrl && (
                    <a
                      href={device.installUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary dark:text-green-400 hover:underline"
                    >
                      How to install
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {device.widgets.map((id) => (
                    <SolutionWidget key={id} solutionId={id} />
                  ))}
                </div>
                {i < devices.length - 1 && (
                  <hr className="mt-12 border-gray-200 dark:border-gray-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Installing App Video ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Installing the App on C3-Mini
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-two">
            <video
              src="/video/installing-app-on-c3-mini.mov"
              controls
              playsInline
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
