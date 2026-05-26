"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import UniversitySidebar from "../UniversitySidebar";
import { useLanguage } from "../../../context/LanguageContext";

const NewsletterHostname = process.env.NEXT_PUBLIC_NEWSLETTER_HOSTNAME || "";

export default function CertificateClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [certificate, setCertificate] = useState(null);
  const { t } = useLanguage();
  const c = t.homeChallengeUniversity.common;
  const p = t.homeChallengeUniversity.certificate;

  useEffect(() => {
    const email = searchParams.get("email");
    if (!email) {
      router.replace("/home-challenge");
      return;
    }

    const controller = new AbortController();
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(`${NewsletterHostname}/v1/certificates/check`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
          signal: controller.signal,
        });
        if (res.ok) {
          const data = await res.json();
          setCertificate(data.data);
        }
      } catch {
        router.replace("/home-challenge");
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [searchParams, router]);

  return (
    <main>
      <section className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[140px]" style={{ background: "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)" }}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="container relative">
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm">
            <Link href="/" className="text-green-300/70 hover:text-green-300 transition-colors">{c.home}</Link>
            <span className="text-green-300/40">/</span>
            <Link href="/home-challenge" className="text-green-300/70 hover:text-green-300 transition-colors">{c.homeChallenge}</Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">{p.crumb}</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">{p.badge}</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {p.title}
              <br /><span className="text-green-300">{p.subtitle}</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <UniversitySidebar />
            <div className="flex-1 min-w-0">
              {loading && <p className="text-center text-sm text-gray-600 dark:text-gray-400">{p.loading}</p>}

              {certificate?.isCertified && (
                <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm border-2 border-primary p-8">
                  <div className="border-4 border-primary rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-2">{p.certHeading}</h2>
                    <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-4">{p.certifies}</p>
                    <h3 className="text-3xl font-bold text-primary mb-4">{certificate.name}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      {p.achievedIntro} <strong>{p.iot}</strong> {p.and} <strong>{p.ai}</strong>.
                    </p>
                    <h4 className="text-base font-bold text-[#0d2137] dark:text-white mb-3 text-left">{p.competenciesTitle}</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-6 text-left mb-6">
                      {p.competencies.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{p.informalNote}</p>
                    <hr className="border-primary mb-4" />
                    <p className="text-xs italic text-gray-600 dark:text-gray-400 leading-relaxed">{p.chipglobeNote}</p>
                  </div>
                </div>
              )}

              {certificate && !certificate.isCertified && (
                <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm border-2 border-primary p-8 text-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300"><strong>{certificate.name}</strong> {p.notCompleted}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
