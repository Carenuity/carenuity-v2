"use client";
import Image from "next/image";
import Link from "next/link";

export default function SqProductPage({ product }) {
  const {
    name,
    tagline,
    image,
    video,
    description,
    features,
    specs,
    related,
    breadcrumbLabel,
  } = product;

  return (
    <main>
      {/* Hero — matches sq-system hero.tsx exactly */}
      <section className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-[120px] md:pt-[100px] xl:pt-[140px]">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero/home.png')" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 40%, transparent 55%)",
            }}
          />
          <div className="relative z-10 container">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-6">
                <h1 className="mb-5 pt-[80px] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                  {name}
                </h1>
                <p className="mb-12 pb-[60px] text-lg leading-relaxed text-white/80 md:text-xl">
                  {tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content — matches System index.tsx */}
      <section
        id="features"
        className="bg-green-bg py-8 md:py-2 lg:py-10 dark:bg-gray-900"
      >
        <div className="container pb-30">
          {/* Breadcrumb trail */}
          <nav className="flex items-center gap-2 text-sm pt-8 pb-4">
            <Link
              href="/"
              className="text-body-color dark:text-green hover:text-primary transition-colors"
            >
              Home
            </Link>
            <span className="text-body-color dark:text-green">/</span>
            <Link
              href="/sq-system"
              className="text-body-color dark:text-green hover:text-primary transition-colors"
            >
              SQ-System
            </Link>
            <span className="text-body-color dark:text-green">/</span>
            <span className="text-primary font-medium">
              {breadcrumbLabel || name}
            </span>
          </nav>

          {/* Product overview: image left + description right */}
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 pb-20 pt-4">
            {/* Product image card — same style as singleSystem */}
            <div className="shadow-two hover:shadow-one dark:shadow-three dark:hover:shadow-gray-dark flex h-full flex-col rounded-2xl bg-white duration-300 dark:bg-gray-950">
              <div className="relative h-[290px] w-full overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain p-4"
                  onError={(e) => {
                    e.target.src = "/images/logo/icon.png";
                  }}
                />
              </div>
            </div>

            {/* Description — SectionTitle pattern */}
            <div>
              <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[32px] dark:text-white">
                {name}
              </h2>
              <p className="text-body-color dark:text-green mb-6 text-base font-medium leading-relaxed">
                {description}
              </p>
              <Link
                href="/contact"
                className="shadow-btn bg-primary hover:bg-primary/90 mt-4 inline-block rounded-full px-8 py-2 text-base text-white transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Key Features */}
          <div className="pb-20">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[32px] dark:text-white">
              Key Features
            </h2>
            <p className="text-body-color dark:text-green mb-8 text-base leading-relaxed">
              Everything built into the {name} for a seamless monitoring
              experience.
            </p>
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="shadow-two hover:shadow-one dark:shadow-three dark:hover:shadow-gray-dark flex flex-col rounded-2xl bg-white duration-300 dark:bg-gray-950 p-6"
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: "#174f2e" }}
                  >
                    <FeatureIcon name={f.icon} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-black dark:text-white">
                    {f.title}
                  </h3>
                  <p className="text-body-color dark:text-green text-sm leading-relaxed font-medium">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications — award section pattern */}
          <div className="pb-20">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[32px] dark:text-white">
              Technical Specifications
            </h2>
            <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-950 shadow-two dark:shadow-three">
              {specs.map((s, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-12 gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : "bg-white dark:bg-gray-950"}`}
                >
                  <span className="col-span-12 md:col-span-4 text-sm font-bold text-black dark:text-white">
                    {s.label}
                  </span>
                  <span className="col-span-12 md:col-span-8 text-body-color dark:text-green text-sm font-medium">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Video — matches index.tsx video blocks */}
          {video && (
            <div className="pb-20">
              <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[20px] dark:text-white">
                {name} — Product Video
              </h2>
              <div className="relative h-full w-full">
                <video
                  src={video}
                  className="h-full w-full object-cover rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          )}

          {/* Related Products — same card grid as sq-system */}
          {related && related.length > 0 && (
            <div className="pb-20">
              <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[32px] dark:text-white">
                Related Products
              </h2>
              <p className="text-body-color dark:text-green mb-8 text-base leading-relaxed">
                All components work together as one intelligent SQ-System.
              </p>
              <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <div
                    key={r.slug}
                    className="shadow-two hover:shadow-one dark:shadow-three dark:hover:shadow-gray-dark flex h-full flex-col rounded-2xl bg-white duration-300 dark:bg-gray-950"
                  >
                    <div className="relative h-[200px] w-full overflow-hidden rounded-t-2xl">
                      <Image
                        src={r.image}
                        alt={r.name}
                        fill
                        className="object-contain p-4"
                        onError={(e) => {
                          e.target.src = "/images/logo/icon.png";
                        }}
                      />
                    </div>
                    <div className="flex flex-col flex-1 px-5 pb-5 pt-3">
                      <h3 className="mb-2 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                        {r.name}
                      </h3>
                      <p className="text-body-color dark:text-green text-sm leading-relaxed font-medium flex-1 mb-4">
                        {r.desc}
                      </p>
                      <Link
                        href={`/sq-system/${r.slug}`}
                        className="shadow-btn bg-primary hover:bg-primary/90 inline-block rounded-full px-8 py-1 text-white transition duration-300 self-start text-sm"
                      >
                        Explore {r.name}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function FeatureIcon({ name }) {
  const icons = {
    co2: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.636-6.364l.707.707M12 21v-1"
      />
    ),
    tvoc: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    ),
    temp: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"
      />
    ),
    humidity: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3s-7 6.5-7 11a7 7 0 0014 0c0-4.5-7-11-7-11z"
      />
    ),
    pressure: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    presence: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </>
    ),
    app: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    ),
    power: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    wifi: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
      />
    ),
    lan: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    ),
    cloud: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    ),
    shield: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
    install: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </>
    ),
    stand: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6h16M4 12h16M4 18h7"
      />
    ),
    usbc: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4v16m-4-4l4 4 4-4M8 8l4-4 4 4"
      />
    ),
    flexible: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
      />
    ),
  };
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {icons[name] || icons.shield}
    </svg>
  );
}
