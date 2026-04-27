"use client";
import { useState } from "react";

const interests = [
  "Home Challenge",
  "ChipGlobe products",
  "Open positions",
  "Internship",
  "Open Office Day",
];

export default function SubscribeForm({ schoolName }) {
  const [checked, setChecked] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const toggle = (item) =>
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }));

  const anyChecked = Object.values(checked).some(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!anyChecked) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <span
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#174f2e" }}
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
        <p className="text-xl font-bold text-black dark:text-white">
          Subscription confirmed!
        </p>
        <p className="text-body-color dark:text-gray-300 text-sm max-w-sm">
          Please check your inbox — and your{" "}
          <span className="font-semibold">spam folder</span> in case the
          confirmation email was flagged.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm text-body-color dark:text-gray-300 leading-relaxed">
        Please select the interests you would like to follow up.{" "}
        <span className="text-gray-500 dark:text-gray-400 italic">
          (You will be required to verify your subscription for each of your
          selections.)
        </span>
      </p>

      <div className="flex flex-wrap gap-3">
        {interests.map((item) => (
          <label
            key={item}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span
              className={`w-5 h-5 rounded flex items-center justify-center border-2 shrink-0 transition-all duration-200 ${
                checked[item]
                  ? "border-transparent"
                  : "border-gray-300 dark:border-gray-600 group-hover:border-green-500"
              }`}
              style={checked[item] ? { backgroundColor: "#174f2e" } : {}}
            >
              {checked[item] && (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </span>
            <input
              type="checkbox"
              className="sr-only"
              checked={!!checked[item]}
              onChange={() => toggle(item)}
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
              {item}
            </span>
          </label>
        ))}
      </div>

      <button
        type="submit"
        disabled={!anyChecked}
        className="w-full py-3 rounded-full font-bold text-sm text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{ backgroundColor: "#174f2e" }}
      >
        Subscribe
      </button>

      <p className="text-xs text-gray-400 dark:text-gray-500 text-center leading-relaxed">
        Please check your spam folder for the subscription email should it be
        flagged as spam.
      </p>

      <div className="pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
        <a
          href={`/home-challenge/register/student-survey/?school=${encodeURIComponent(schoolName)}`}
          className="text-sm font-semibold underline underline-offset-4 transition-colors"
          style={{ color: "#174f2e" }}
        >
          Fill in Carenuity student survey &amp; questionnaire →
        </a>
      </div>
    </form>
  );
}
