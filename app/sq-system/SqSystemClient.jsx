"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const productImages = [
  "/images/sq-system/sq-panel.png",
  "/images/sq-system/sq-power.png",
  "/images/sq-system/sq-stand.png",
  "/images/sq-system/sq-connector.png",
];

const productSlugs = [
  "/sq-system/sq-panel",
  "/sq-system/sq-power",
  "/sq-system/sq-tablestand",
  "/sq-system/sq-connector",
];

export default function SqSystemClient() {
  const { t } = useLanguage();
  const s = t.sqSystem;

  return (
    <main>
      {/* Hero — exactly matches hero.tsx */}
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-[120px] md:pt-[100px] xl:pt-[140px] 2xl:pt-[150px]"
      >
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
                <h1 className="mb-5 pt-[120px] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                  Healthy, comfortable,
                  <br /> and connected
                </h1>
                <p className="mb-12 pb-[80px] text-lg leading-relaxed text-white/80 md:text-xl">
                  Monitor air quality, presence, and more anytime,
                  <br /> anywhere through the Carenuity app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main section — exactly matches index.tsx */}
      <section
        id="features"
        className="bg-green-bg py-8 md:py-2 lg:py-10 dark:bg-gray-900"
      >
        <div className="container pb-30">
          {/* SQ-System heading + description */}
          <div className="pb-20">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[32px] dark:text-white">
              {s.heading}
            </h2>
            <p className="text-body-color dark:text-green mb-6 text-base leading-relaxed">
              {s.description}
            </p>

            {/* Product cards grid — 2 columns matching index.tsx */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 pb-20 md:grid-cols-2 lg:grid-cols-2">
              {s.products.map((p, i) => (
                <div
                  key={i}
                  className="shadow-two hover:shadow-one dark:shadow-three dark:hover:shadow-gray-dark flex h-full flex-col rounded-2xl bg-white duration-300 dark:bg-gray-950"
                >
                  {/* Image — h-[290px] as in singleSystem.tsx */}
                  <div className="relative mb-4 h-[290px] w-full overflow-hidden rounded-t-2xl bg-contain bg-center bg-no-repeat">
                    <Image
                      src={productImages[i]}
                      alt={p.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col px-5 pb-5">
                    <h3 className="mb-2 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                      {p.title}
                    </h3>
                    <p className="text-body-color dark:text-green flex-1 text-base font-medium leading-relaxed">
                      {p.paragraph}
                    </p>
                    <div className="mt-auto pt-4">
                      <Link
                        href={productSlugs[i]}
                        className="shadow-btn bg-primary hover:bg-primary/90 mb-2 inline-block rounded-full px-8 py-1 text-white transition duration-300"
                      >
                        {p.button}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Videos section — exactly matches index.tsx video blocks */}
            <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[32px] dark:text-white">
              {s.videoTitle}
            </h2>

            <div className="relative h-full w-full">
              <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[20px] dark:text-white">
                {s.sqPanel}
              </h2>
              <video
                src="/video/sq-panel-en.mp4"
                className="mb-12 h-full w-full rounded-2xl object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <div className="relative h-full w-full">
              <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[20px] dark:text-white">
                {s.sqPower}
              </h2>
              <video
                src="/video/sq-power-en.mp4"
                className="h-full w-full rounded-2xl object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
