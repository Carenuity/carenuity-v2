"use client";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import { useLanguage } from "../context/LanguageContext";

const CheckIcon = () => (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

export default function AboutClient() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <main>
      <Breadcrumb pageName={a.pageName} description={a.pageDesc} />

      {/* Section 1 */}
      <section className="pt-16 md:pt-20 lg:pt-28 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="border-b border-body-color/10 dark:border-white/10 pb-16 md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center gap-y-12">
              <div className="w-full px-4 lg:w-1/2">
                <div className="max-w-[570px] mb-10 lg:mb-0">
                  <span
                    className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white mb-6"
                    style={{ backgroundColor: "#174f2e" }}
                  >
                    About Carenuity
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-6 leading-tight">
                    {a.s1Title}
                  </h2>
                  <p className="text-body-color dark:text-green text-base leading-relaxed mb-8">
                    {a.s1Desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    {a.s1List.map((item) => (
                      <p
                        key={item}
                        className="text-body-color dark:text-green mb-4 flex items-center gap-3 text-base font-medium"
                      >
                        <span className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg shrink-0">
                          <CheckIcon />
                        </span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-square max-w-[500px]">
                  <Image
                    src="/images/about/about-image.svg"
                    alt="About Carenuity"
                    fill
                    className="object-contain dark:hidden drop-shadow-xl"
                  />
                  <Image
                    src="/images/about/about-image-dark.svg"
                    alt="About Carenuity"
                    fill
                    className="object-contain hidden dark:block drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center gap-y-12">
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-square max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image-2.svg"
                  alt="About Carenuity"
                  fill
                  className="object-contain dark:hidden drop-shadow-xl"
                />
                <Image
                  src="/images/about/about-image-2-dark.svg"
                  alt="About Carenuity"
                  fill
                  className="object-contain hidden dark:block drop-shadow-xl"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                {a.s2Items.map((item, i) => (
                  <div
                    key={i}
                    className={`${i < a.s2Items.length - 1 ? "mb-10" : ""}`}
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-black dark:text-white mt-1">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-body-color dark:text-green text-base leading-relaxed pl-14">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
