"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const socials = [
  {
    label: "Facebook",
    icon: (
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
        <path
          d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Twitter",
    icon: (
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg width="18" height="14" viewBox="0 0 18 14" className="fill-current">
        <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 0 9.0627 0 9.0627 0S3.54766 0 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953S0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191S14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953S17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg width="17" height="16" viewBox="0 0 17 16" className="fill-current">
        <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-dark relative z-10">
      {/* Top wave */}
      <div className="overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          className="w-full"
          style={{ marginBottom: "-1px" }}
        >
          <path
            d="M0 48h1440V24C1200 48 960 0 720 24 480 48 240 0 0 24V48z"
            className="fill-green-bg dark:fill-gray-900"
          />
        </svg>
      </div>

      <div className="container pt-16 pb-8">
        <div className="-mx-4 flex flex-wrap">
          {/* Brand */}
          <div className="w-full px-4 lg:w-4/12 mb-12">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo/logo-2.png"
                alt="Carenuity"
                width={120}
                height={34}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-body-color-dark text-sm leading-relaxed mb-6 max-w-[280px]">
              {f.description}
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="/"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 text-white hover:bg-primary transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="w-full px-4 lg:w-4/12 mb-12">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              {f.contactTitle}
            </h3>
            <ul className="space-y-4 text-sm text-body-color-dark">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Chipglobe GmbH
                  <br />
                  Cincinnatistr. 60
                  <br />
                  81549 {f.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@carenuity.com"
                  className="hover:text-primary transition-colors"
                >
                  info@carenuity.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(+49) 89-1222469-40</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full px-4 lg:w-4/12 mb-12">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              {f.newsletterTitle}
            </h3>
            <p className="text-body-color-dark text-sm mb-5 leading-relaxed">
              {f.newsletterText}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="space-y-3"
            >
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white text-sm font-bold transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#174f2e" }}
              >
                {f.subscribe}
              </button>
            </form>
            <ul className="mt-5 space-y-2">
              {[[f.payment], [f.terms], [f.withdrawal]].map(([label]) => (
                <li key={label}>
                  <Link
                    href="/"
                    className="text-body-color-dark text-xs hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-color-dark text-xs text-center md:text-left">
            {f.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-body-color-dark text-xs hover:text-primary transition-colors"
            >
              {f.privacy}
            </Link>
            <Link
              href="/"
              className="text-body-color-dark text-xs hover:text-primary transition-colors"
            >
              {f.legal}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
