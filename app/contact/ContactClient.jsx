"use client";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { submitContactForm } from "./contactus-form";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/C3.Mini" },
  { label: "Instagram", href: "https://www.instagram.com/carenuity" },
  { label: "YouTube", href: "https://www.youtube.com/@carenuity" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/carenuity/" },
];

const MAP_QUERY =
  "Professor-Messerschmitt-Strasse 1a, 85579 Neubiberg, Germany";

const PhoneIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);
const MailIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const PinIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const ClockIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

function ContactCard({ icon, title, desc, action }) {
  return (
    <div className="group relative rounded-2xl bg-white dark:bg-gray-800 p-7 shadow-lg shadow-black/5 dark:shadow-black/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-green-400 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-black dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-body-color dark:text-gray-400 mb-4">
        {desc}
      </p>
      {action}
    </div>
  );
}

export default function ContactClient() {
  const { t } = useLanguage();
  const c = t.contact;
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    try {
      await submitContactForm(form);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-5 py-3 text-gray-900 dark:text-white text-sm outline-none focus:border-primary dark:focus:border-green-400 transition-colors placeholder-gray-400 dark:placeholder-gray-500";

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[150px]"
        style={{
          background:
            "linear-gradient(135deg, #0a2417 0%, #0f3520 45%, #1e6b3e 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-green-300/10 blur-3xl" />

        <div className="container relative">
          <div className="max-w-3xl pb-28 pt-6 text-center mx-auto">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
              <span className="text-xs font-semibold uppercase tracking-wide text-white">
                {c.heroKicker}
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
              {c.heroTitle}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              {c.heroSubtitle}
            </p>
          </div>
        </div>

        <svg
          className="block w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="fill-gray-50 dark:fill-gray-900"
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900 pb-16 lg:pb-24">
        <div className="container">
          {/* Contact cards — overlap the hero */}
          <div className="-mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <ContactCard
              icon={<PhoneIcon className="h-6 w-6" />}
              title={c.phoneTitle}
              desc={c.phoneDesc}
              action={
                <a
                  href={`tel:${c.phone.replace(/[^+\d]/g, "")}`}
                  className="text-sm font-semibold text-primary dark:text-green-400 hover:underline"
                >
                  {c.phone}
                </a>
              }
            />
            <ContactCard
              icon={<MailIcon className="h-6 w-6" />}
              title={c.emailTitle}
              desc={c.emailDesc}
              action={
                <a
                  href={`mailto:${c.email}`}
                  className="text-sm font-semibold text-primary dark:text-green-400 hover:underline"
                >
                  {c.email}
                </a>
              }
            />
            <ContactCard
              icon={<PinIcon className="h-6 w-6" />}
              title={c.addressTitle}
              desc={c.addressDesc}
              action={
                <a
                  href={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary dark:text-green-400 hover:underline"
                >
                  {c.addressLine1}
                  <br />
                  {c.addressLine2}
                </a>
              }
            />
          </div>

          {/* Form + side panel */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white dark:bg-gray-800 p-8 sm:p-10 shadow-lg shadow-black/5 dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2">
                  {c.title}
                </h2>
                <p className="text-body-color dark:text-gray-400 mb-8">
                  {c.subtitle}
                </p>
                <form id="contactUs" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        {c.yourName}
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder={c.namePlaceholder}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        {c.yourEmail}
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder={c.emailPlaceholder}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        {c.company}
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder={c.companyPh}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        {c.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder={c.phonePh}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        {c.street}
                      </label>
                      <input
                        type="text"
                        name="street"
                        placeholder={c.streetPh}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        {c.zip}
                      </label>
                      <input
                        type="text"
                        name="zip"
                        placeholder={c.zipPh}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                      {c.subject}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder={c.subjectPh}
                      className={inputClass}
                    />
                  </div>
                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                      {c.yourMessage}
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder={c.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-9 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary-light hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {status === "loading" ? c.sendingBtn : c.submitBtn}
                    {status === "loading" ? (
                      <svg
                        className="h-4 w-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    )}
                  </button>

                  {status === "success" && (
                    <p className="mt-4 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">
                      {c.successMsg}
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-4 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 px-4 py-3 text-sm font-medium text-red-700 dark:text-red-300">
                      {c.errorMsg}
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* Side panel: map + hours + social */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-1 flex-col overflow-hidden rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-5 py-3 text-sm font-semibold text-black dark:text-white">
                  <PinIcon className="h-4 w-4 text-primary dark:text-green-400" />
                  {c.mapTitle}
                </div>
                <iframe
                  title={c.mapTitle}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
                  className="w-full flex-1 border-0 min-h-[224px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-green-400">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-black dark:text-white">
                      {c.hoursTitle}
                    </h3>
                    <p className="text-sm text-body-color dark:text-gray-400">
                      {c.hours}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl p-6 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #0a2318 0%, #174f2e 60%, #1e6b3e 100%)",
                }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wide mb-4">
                  {c.socialTitle}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-primary"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
