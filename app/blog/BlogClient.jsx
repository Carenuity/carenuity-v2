"use client";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { useLanguage } from "../context/LanguageContext";

const blogImages = [
  "/images/blog/blog-01.jpg",
  "/images/blog/blog-02.jpg",
  "/images/blog/blog-03.jpg",
];
const authorImages = [
  "/images/blog/author-03.png",
  "/images/blog/author-02.png",
  "/images/blog/author-03.png",
];
const authorNames = ["Samuyl Joshi", "Musharof Chy", "Lethium Deo"];
const authorRoles = ["Graphic Designer", "Content Writer", "Graphic Designer"];

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
                    <Link href="/blog">{post.title}</Link>
                  </h3>
                  <p className="text-body-color dark:text-green text-sm leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={authorImages[i]}
                          alt={authorNames[i]}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-black dark:text-white">
                          {authorNames[i]}
                        </p>
                        <p className="text-xs text-body-color dark:text-green">
                          {authorRoles[i]}
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/blog"
                      className="text-xs font-semibold flex items-center gap-1 transition-colors hover:text-primary"
                      style={{ color: "#174f2e" }}
                    >
                      Read
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
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-14">
            {[1, 2, 3, "...", 12].map((p, i) => (
              <button
                key={i}
                className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  p === 1
                    ? "text-white"
                    : "text-body-color dark:text-green bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary"
                }`}
                style={p === 1 ? { backgroundColor: "#174f2e" } : {}}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
