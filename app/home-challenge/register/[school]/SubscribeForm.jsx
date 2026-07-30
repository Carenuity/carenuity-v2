"use client";
import { useState } from "react";
import { subscribeToNewsletters } from "../../subscribe-newsletter";

// Each interest maps to a newsletter category id from the Carenuity newsletter
// API catalog. "Home Challenge" resolves to the school-specific category passed
// in via props, so its id is filled in at render time.
const INTERESTS = [
  { label: "Home Challenge", categoryId: null },
  { label: "ChipGlobe products", categoryId: 11 },
  { label: "Open positions", categoryId: 12 },
  { label: "Internship", categoryId: 13 },
  { label: "Open Office Day", categoryId: 14 },
];

export default function SubscribeForm({ schoolName, homeChallengeCategoryId }) {
  // Fill in the Home Challenge category from the school, or drop the option
  // entirely when this school has no dedicated newsletter — so we never
  // subscribe someone to an unrelated newsletter under the school's name.
  const interests = INTERESTS.flatMap((item) => {
    if (item.label !== "Home Challenge") return [item];
    if (!homeChallengeCategoryId) return [];
    return [{ ...item, categoryId: homeChallengeCategoryId }];
  });

  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(
    homeChallengeCategoryId ? { "Home Challenge": true } : {},
  );
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggle = (label) =>
    setChecked((prev) => ({ ...prev, [label]: !prev[label] }));

  const anyChecked = Object.values(checked).some(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!anyChecked || !email.trim() || submitting) return;

    const categoryIds = interests
      .filter((item) => checked[item.label])
      .map((item) => item.categoryId)
      .filter(Boolean);

    setSubmitting(true);
    setError("");

    const result = await subscribeToNewsletters(email.trim(), categoryIds);

    setSubmitting(false);

    if (result.ok) {
      setSubmitted(true);
      return;
    }

    // Name the interests whose verification email could not be sent so the
    // failure is visible instead of the user silently receiving fewer emails.
    const labelOf = (id) =>
      interests.find((item) => item.categoryId === id)?.label ||
      `category ${id}`;
    const failedLabels = result.failed
      .map((f) => labelOf(f.categoryId))
      .join(", ");
    const reason = result.failed[0]?.message;

    if (result.sent.length) {
      setError(
        `We sent verification emails for some interests, but couldn't for: ${failedLabels}` +
          (reason ? ` (${reason}).` : ".") +
          " Please try those again shortly.",
      );
    } else {
      setError(reason || "Subscription failed. Please try again.");
    }
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

      <div>
        <label
          htmlFor="subscribe-email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Email address
        </label>
        <input
          id="subscribe-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {interests.map((item) => (
          <label
            key={item.label}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span
              className={`w-5 h-5 rounded flex items-center justify-center border-2 shrink-0 transition-all duration-200 ${
                checked[item.label]
                  ? "border-transparent"
                  : "border-gray-300 dark:border-gray-600 group-hover:border-green-500"
              }`}
              style={checked[item.label] ? { backgroundColor: "#174f2e" } : {}}
            >
              {checked[item.label] && (
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
              checked={!!checked[item.label]}
              onChange={() => toggle(item.label)}
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
              {item.label}
            </span>
          </label>
        ))}
      </div>

      {error && (
        <p className="text-sm font-medium text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!anyChecked || !email.trim() || submitting}
        className="w-full py-3 rounded-full font-bold text-sm text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{ backgroundColor: "#174f2e" }}
      >
        {submitting ? "Subscribing…" : "Subscribe"}
      </button>

      <p className="text-xs text-gray-400 dark:text-gray-500 text-center leading-relaxed">
        Please check your spam folder for the subscription email should it be
        flagged as spam.
      </p>

      <div className="pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
        <a
          href={`/home-challenge/register/student-survey/?school=${encodeURIComponent(schoolName)}`}
          className="text-sm font-semibold text-primary dark:text-green-400 underline underline-offset-4 transition-colors"
        >
          Fill in Carenuity student survey &amp; questionnaire →
        </a>
      </div>
    </form>
  );
}
