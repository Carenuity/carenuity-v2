"use client";
import { useState } from "react";

const iotInterests = [
  "Smart Homes & Buildings",
  "IoT Devices & Sensors",
  "Embedded Systems & Microcontrollers",
  "IoT Security & Privacy",
  "Data Analytics for IoT",
  "Cloud Computing & Edge Computing for IoT",
  "AI & Machine Learning for IoT",
  "Other",
];

const careerInterests = [
  "IoT Product Development",
  "Software Development for IoT Systems",
  "Hardware Design",
  "IoT Project Management",
  "Research & Development in IoT",
  "Marketing and Sales in IoT Technologies",
];

const tools = [
  "Raspberry Pi",
  "Arduino",
  "Python",
  "C/C++",
  "Cloud Platforms",
  "IoT-specific Software",
];

function CheckboxGroup({ options, selected, onChange }) {
  const toggle = (opt) =>
    onChange(
      selected.includes(opt)
        ? selected.filter((o) => o !== opt)
        : [...selected, opt]
    );

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => {
        const active = selected.includes(opt);
        return (
          <label key={opt} className="flex items-center gap-2 cursor-pointer group">
            <span
              className={`w-5 h-5 rounded flex items-center justify-center border-2 shrink-0 transition-all duration-200 ${
                active
                  ? "border-transparent"
                  : "border-gray-300 dark:border-gray-600 group-hover:border-green-500"
              }`}
              style={active ? { backgroundColor: "#174f2e" } : {}}
            >
              {active && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
            <input type="checkbox" className="sr-only" checked={active} onChange={() => toggle(opt)} />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
              {opt}
            </span>
          </label>
        );
      })}
    </div>
  );
}

function RadioGroup({ options, value, onChange }) {
  return (
    <div className="flex gap-6">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <label key={opt} className="flex items-center gap-2 cursor-pointer group">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center border-2 shrink-0 transition-all duration-200 ${
                active
                  ? "border-transparent"
                  : "border-gray-300 dark:border-gray-600 group-hover:border-green-500"
              }`}
              style={active ? { backgroundColor: "#174f2e" } : {}}
            >
              {active && <span className="w-2 h-2 rounded-full bg-white" />}
            </span>
            <input type="radio" className="sr-only" checked={active} onChange={() => onChange(opt)} />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
              {opt}
            </span>
          </label>
        );
      })}
    </div>
  );
}

function SectionLabel({ number, children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
        style={{ backgroundColor: "#174f2e" }}
      >
        {number}
      </span>
      <h2 className="text-base font-bold text-black dark:text-white">{children}</h2>
    </div>
  );
}

export default function SurveyForm({ school }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    yearOfStudy: "",
    fieldOfStudy: "",
    newsletter: "",
    iotInterests: [],
    careerInterests: [],
    tools: [],
    hackathon: "",
    feedback: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <span
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#174f2e" }}
        >
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <p className="text-2xl font-bold text-black dark:text-white">Thank you, {form.firstName}!</p>
        <p className="text-body-color dark:text-gray-300 text-base max-w-sm">
          Your survey response has been submitted successfully. We&apos;ll be in touch with relevant opportunities.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* Section 1: Personal Information */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-two">
        <SectionLabel number="1">Personal Information</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter your first name"
              value={form.firstName}
              onChange={(e) => set("firstName", e.target.value)}
              className={inputClass}
              style={{ "--tw-ring-color": "#174f2e" }}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter your last name"
              value={form.lastName}
              onChange={(e) => set("lastName", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
              Year of Study <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={form.yearOfStudy}
              onChange={(e) => set("yearOfStudy", e.target.value)}
              className={inputClass}
            >
              <option value="" disabled>Select year</option>
              {["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "Masters", "PhD"].map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
              Field of Study <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Electrical Engineering, Computer Science…"
              value={form.fieldOfStudy}
              onChange={(e) => set("fieldOfStudy", e.target.value)}
              className={inputClass}
            />
          </div>
          {school && (
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                University / School
              </label>
              <input
                type="text"
                readOnly
                value={school}
                className={`${inputClass} bg-gray-50 dark:bg-gray-800/50 cursor-default`}
              />
            </div>
          )}
        </div>
      </div>

      {/* Section 2: Newsletter */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-two">
        <SectionLabel number="2">Newsletter Subscription</SectionLabel>
        <p className="text-sm text-body-color dark:text-gray-300 mb-4">
          Have you subscribed to our Open Office Day newsletter?
        </p>
        <RadioGroup
          options={["Yes", "No"]}
          value={form.newsletter}
          onChange={(v) => set("newsletter", v)}
        />
      </div>

      {/* Section 3: IoT Interests */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-two">
        <SectionLabel number="3">IoT Industry Interests</SectionLabel>
        <p className="text-sm text-body-color dark:text-gray-300 mb-4">
          What areas of the IoT industry are you most interested in?{" "}
          <span className="italic text-gray-400">(Select all that apply)</span>
        </p>
        <CheckboxGroup
          options={iotInterests}
          selected={form.iotInterests}
          onChange={(v) => set("iotInterests", v)}
        />
      </div>

      {/* Section 4: Career Interests */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-two">
        <SectionLabel number="4">Career Interests</SectionLabel>
        <p className="text-sm text-body-color dark:text-gray-300 mb-4">
          Which of the following areas would you like to work in?{" "}
          <span className="italic text-gray-400">(Select all that apply)</span>
        </p>
        <CheckboxGroup
          options={careerInterests}
          selected={form.careerInterests}
          onChange={(v) => set("careerInterests", v)}
        />
      </div>

      {/* Section 5: Skills & Tools */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-two">
        <SectionLabel number="5">Skills &amp; Tools</SectionLabel>
        <p className="text-sm text-body-color dark:text-gray-300 mb-4">
          What IoT-related tools, programming languages, or hardware platforms are you familiar with?
        </p>
        <CheckboxGroup
          options={tools}
          selected={form.tools}
          onChange={(v) => set("tools", v)}
        />
      </div>

      {/* Section 6: Future Participation */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-two">
        <SectionLabel number="6">Future Participation</SectionLabel>
        <p className="text-sm text-body-color dark:text-gray-300 mb-4">
          Would you be interested in participating in other IoT Challenges or Hackathons organised by ChipGlobe?
        </p>
        <RadioGroup
          options={["Yes", "No"]}
          value={form.hackathon}
          onChange={(v) => set("hackathon", v)}
        />
      </div>

      {/* Section 7: Additional Feedback */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-two">
        <SectionLabel number="7">Additional Feedback</SectionLabel>
        <p className="text-sm text-body-color dark:text-gray-300 mb-4">
          Any comments or suggestions for us?
        </p>
        <textarea
          rows={4}
          placeholder="Share your thoughts…"
          value={form.feedback}
          onChange={(e) => set("feedback", e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-full font-bold text-sm text-white shadow-lg hover:scale-[1.02] transition-all duration-300"
        style={{ backgroundColor: "#174f2e" }}
      >
        Submit Survey
      </button>
    </form>
  );
}
