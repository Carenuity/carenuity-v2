"use client";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import { useLanguage } from "../context/LanguageContext";

const blogImages = [
  "/images/blog/blog1.webp", // BGT60LTR11 Radar
  "/images/blog/sq-panel.webp", // SQ Panel
  "/images/blog/yaml.webp", // YAML File
  "/images/blog/google.webp", // Google Sheets
  "/images/blog/sensor.webp", // Sensor Data
  "/images/blog/revolutionizing.webp", // Revolutionizing Home Living
  "/images/blog/automating1.jpg", // Automating Lights
  "/images/blog/detecting.webp", // Object Detection
  "/images/blog/cam.webp", // ESP32-CAM
  "/images/blog/welcome.webp", // Welcome
];

export default function BlogClient() {
  const { t } = useLanguage();
  const b = t.blog;

  return (
    <main>
      <Breadcrumb pageName={b.pageName} description={b.pageDesc} />

      <section className="pt-16 pb-20 lg:pt-20 lg:pb-28 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mb-14 text-center">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white mb-4"
              style={{ backgroundColor: "#174f2e" }}
            >
              Blog
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white">
              {b.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {b.posts.map((post, i) => (
              <article
                key={post.id}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-950 shadow-two hover:shadow-one dark:shadow-three transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={blogImages[i]}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: "#174f2e" }}
                    >
                      {post.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4 text-xs text-body-color dark:text-green">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-black dark:text-white mb-3 leading-snug group-hover:text-primary transition-colors">
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-body-color dark:text-green text-sm leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-end pt-4 border-t border-gray-100 dark:border-gray-800">
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold flex items-center gap-1 transition-colors hover:text-primary"
                      style={{ color: "#174f2e" }}
                    >
                      {b.readMore}
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
