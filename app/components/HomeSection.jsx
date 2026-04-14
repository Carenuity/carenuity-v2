"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const whyImages = [
  "/images/home/living-room.png",
  "/images/home/office.png",
  "/images/home/hospital-room.png",
  "/images/home/class-room.png",
  "/images/home/home-challenge.png",
];
const productImages = [
  "/images/home/sq-panel-frontview.webp",
  "/images/home/C3-mini_selection-box_case.png",
];
const productLinks = ["/sq-system", "/c3-mini"];

export default function HomeSection() {
  const { t } = useLanguage();
  const { home } = t;

  return (
    <>
      {/* About + Products + Why */}
      <section
        id="features"
        className="bg-green-bg dark:bg-gray-900 py-16 lg:py-24"
      >
        <div className="container">
          {/* About us */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white mb-5"
                style={{ backgroundColor: "#174f2e" }}
              >
                {home.aboutTitle}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-6 leading-tight">
                {home.aboutTitle}
              </h2>
              <p className="text-body-color dark:text-green leading-relaxed mb-8 text-base">
                {home.aboutDesc}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#174f2e" }}
              >
                {home.aboutBtn}
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
            <div className="relative h-[380px] w-full">
              <Image
                src="/images/home/sq-panel.png"
                alt="Carenuity SQ-Panel"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Product Lines */}
          <div className="mb-24">
            <div className="mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-3">
                {home.productsTitle}
              </h2>
              <p className="text-body-color dark:text-green text-base max-w-2xl">
                {home.productsDesc}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {home.products.map((p, i) => (
                <div
                  key={i}
                  className="group flex flex-col rounded-2xl bg-white dark:bg-gray-950 shadow-two hover:shadow-one dark:shadow-three transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative h-[290px] w-full overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <Image
                      src={productImages[i]}
                      alt={p.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                      {p.title}
                    </h3>
                    <p className="text-body-color dark:text-green text-sm leading-relaxed mb-4 flex-1">
                      {p.paragraph}
                    </p>
                    {p.list && (
                      <ul className="mb-5 space-y-1.5">
                        {p.list.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-2 text-sm text-body-color dark:text-green"
                          >
                            <span
                              className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                              style={{ backgroundColor: "#174f2e" }}
                            >
                              <svg
                                className="w-2.5 h-2.5 text-white"
                                fill="currentColor"
                                viewBox="0 0 16 13"
                              >
                                <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                              </svg>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link
                      href={productLinks[i]}
                      className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-white text-sm font-semibold shadow-btn transition-all duration-300 hover:opacity-90 self-start"
                      style={{ backgroundColor: "#174f2e" }}
                    >
                      {i === 0 ? home.exploreSystem : home.exploreC3}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Carenuity */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-3">
                {home.whyTitle}
              </h2>
              <p className="text-body-color dark:text-green text-base max-w-2xl">
                {home.whyDesc}
              </p>
            </div>
            <div className="grid grid-cols-12 gap-6">
              {home.whyItems.map((item, i) => (
                <div
                  key={i}
                  className={`${i < 3 ? "col-span-12 md:col-span-4" : "col-span-12 md:col-span-6"} group rounded-2xl bg-white dark:bg-gray-950 shadow-two hover:shadow-one dark:shadow-three transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={whyImages[i]}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5 text-center">
                    <h5 className="font-bold text-black dark:text-white mb-1">
                      {item.title}
                    </h5>
                    <p className="text-body-color dark:text-green text-sm leading-relaxed">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Award */}
      <section className="bg-gray-50 dark:bg-gray-950 py-16">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
              {home.awardTitle}
            </h2>
            <p className="text-body-color dark:text-green">{home.awardDesc}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative h-64 w-64">
                <Image
                  src="/images/home/bsfz-siegel.png"
                  alt="BSFZ Seal"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="lg:col-span-9">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-two border border-gray-100 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-1"
                    style={{ backgroundColor: "#174f2e" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <p className="text-body-color dark:text-green leading-relaxed">
                    {home.awardBody}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
