"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const deviceUrls = [
  {
    assembleUrl: "https://www.instagram.com/p/DMu1xu1NIEp/",
    installUrl: "https://www.instagram.com/p/DMu5_BgtxYJ/",
    widgets: ["nzeAXNAV3LOeRA2avVDM", "mROIhGQ4xc7dgA1bcTd4"],
  },
  {
    assembleUrl: "https://www.instagram.com/p/DMxBFH7tDSY/",
    installUrl: null,
    widgets: ["KiKMCrAtAioE0f3vcQ3Q", "5v3QisKoW3z20dzPP9gf"],
  },
  {
    assembleUrl: "https://www.instagram.com/p/DMxWqowNWAo/",
    installUrl: null,
    widgets: ["KzjsdjS3rA1J5ABAn9Uu", "uEzTHcu5LHthUsDmH195"],
  },
  {
    assembleUrl: "https://www.instagram.com/p/DMxcpzuthU5/",
    installUrl: null,
    widgets: ["74eP4Syrjw85D0UWmqqi", "7C7ry0cBJ2igYiv8OS8q"],
  },
  {
    assembleUrl: "https://www.instagram.com/p/DMxD5ILtbvc/",
    installUrl:
      "https://www.instagram.com/solutions.carenuity/reel/DNAkYVetFUD/",
    widgets: ["T8iq4WKgvGuCrREcLNzC", "NCKgNpqMMPWE68tBoNGW"],
  },
  {
    assembleUrl: "https://www.instagram.com/p/DM-BLZttwyd/",
    installUrl: null,
    widgets: ["UvGo54vaf9rNgSVCuuDp", "ce57xKxHhSJGVzb4P1Jk"],
  },
  {
    assembleUrl: "https://www.instagram.com/p/DNAb3TGN9UA/",
    installUrl: null,
    widgets: ["yvn3zXHy5FO0549khDk9", "1H6rdCdC4OX5q88hnYv5"],
  },
];

const SolutionWidget = ({ solutionId }) => {
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
        className="absolute top-0 left-0 w-full h-full border-0"
      />
    </div>
  );
};

const ExternalLinkIcon = () => (
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
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

export default function C3MiniBoxDevicesPage() {
  const { t } = useLanguage();
  const c = t.c3miniBoxDevices;

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
            <Link
              href="/"
              className="text-green-300/70 transition-colors hover:text-green-300"
            >
              {t.breadcrumb.home}
            </Link>
            <span className="text-green-300/40">/</span>
            <Link
              href="/selection-box"
              className="text-green-300/70 transition-colors hover:text-green-300"
            >
              {c.breadcrumbBox}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">
              {c.breadcrumbCurrent}
            </span>
          </nav>
          <div className="grid grid-cols-12 min-h-[360px] items-center">
            <div className="col-span-12 md:col-span-8 pb-16 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">
                  {c.badge}
                </span>
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                {c.heroTitle1}
                <br />
                <span className="text-green-300">{c.heroTitle2}</span>
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                {c.heroSub}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro + 3 Cards ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {c.introTitle}
          </h2>
          <p className="text-body-color dark:text-green mb-10 text-base leading-relaxed max-w-3xl">
            {c.introDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 — SMA video */}
            <div className="rounded-2xl overflow-hidden shadow-two bg-black flex flex-col">
              <video
                src="/video/sma.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full object-cover"
                style={{ minHeight: "220px" }}
              />
              <div className="p-5 bg-white dark:bg-gray-900 flex-1">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                  {c.cards[0].title}
                </h3>
                <p className="text-body-color dark:text-gray-400 text-sm leading-relaxed">
                  {c.cards[0].desc}
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl overflow-hidden shadow-two flex flex-col">
              <div className="relative w-full" style={{ minHeight: "220px" }}>
                <Image
                  src="/images/install-for-free/install-for-free.png"
                  alt="Install for free"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 flex-1">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                  {c.cards[1].title}
                </h3>
                <p className="text-body-color dark:text-gray-400 text-sm leading-relaxed">
                  {c.cards[1].desc}
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl overflow-hidden shadow-two flex flex-col">
              <div className="relative w-full" style={{ minHeight: "220px" }}>
                <Image
                  src="/images/install-for-free/install.png"
                  alt="Install application"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 flex-1">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                  {c.cards[2].title}
                </h3>
                <p className="text-body-color dark:text-gray-400 text-sm leading-relaxed">
                  {c.cards[2].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Device Applications ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {c.appsTitle}
          </h2>
          <p className="text-body-color dark:text-green mb-12 text-base max-w-3xl">
            {c.appsDesc}
          </p>

          <div className="flex flex-col gap-12">
            {c.devices.map((device, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {device.title}
                </h3>
                <p className="text-body-color dark:text-green text-base leading-relaxed mb-2 max-w-3xl">
                  {device.desc}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {deviceUrls[i].assembleUrl && (
                    <a
                      href={deviceUrls[i].assembleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary dark:text-green-400 hover:underline"
                    >
                      {c.assemble} <ExternalLinkIcon />
                    </a>
                  )}
                  {deviceUrls[i].installUrl && (
                    <a
                      href={deviceUrls[i].installUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary dark:text-green-400 hover:underline"
                    >
                      {c.install} <ExternalLinkIcon />
                    </a>
                  )}
                </div>
                <div className="flex flex-col gap-6">
                  {deviceUrls[i].widgets.map((id) => (
                    <SolutionWidget key={id} solutionId={id} />
                  ))}
                </div>
                {i < c.devices.length - 1 && (
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
            {c.installVideoTitle}
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
