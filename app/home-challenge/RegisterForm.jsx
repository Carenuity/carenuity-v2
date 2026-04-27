"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { schools } from "./schools";

export default function RegisterForm() {
  const [slug, setSlug] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    if (!slug) return;
    router.push(`/home-challenge/register/${slug}`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-lg mx-auto">
      <div className="relative w-full sm:flex-1">
        <select
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full appearance-none px-5 py-3 pr-10 rounded-full text-sm font-medium text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white/60 shadow-lg cursor-pointer"
        >
          <option value="" disabled>
            Select your school
          </option>
          {schools.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
      <button
        onClick={handleRegister}
        disabled={!slug}
        className="text-sm font-bold text-white underline underline-offset-4 decoration-white/50 hover:decoration-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 whitespace-nowrap"
      >
        Register →
      </button>
    </div>
  );
}
