"use client";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const testimonialImages = [
  "/images/testimonials/patrick.png",
  "/images/testimonials/patricia.png",
];

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="bg-green-bg dark:bg-gray-900 py-16 lg:py-24">
      <div className="container">
        <div className="mb-14 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white mb-4"
            style={{ backgroundColor: "#174f2e" }}
          >
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white">
            {t.testimonials.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-two hover:shadow-one dark:shadow-three transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 opacity-10">
                <svg
                  className="w-16 h-16"
                  style={{ color: "#174f2e" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <Stars count={item.star} />
              <p className="text-body-color dark:text-green text-base leading-relaxed mb-6 italic">
                &ldquo;{item.content}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                  <Image
                    src={testimonialImages[i]}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-black dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-body-color dark:text-green">
                    Carenuity User
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
