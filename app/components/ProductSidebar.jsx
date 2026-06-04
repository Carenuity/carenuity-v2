"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const products = [
  { label: "Autonomous Driving Car", slug: "autonomous-driving-car" },
  { label: "AquaBar", slug: "aquabar" },
  { label: "C3 Mini PiggyBack", slug: "c3-mini-piggyback" },
  { label: "C3 Mini Triple", slug: "c3-mini-triple" },
  { label: "C3-Mini: Bluetooth Beacon", slug: "c3-mini-bluetooth-beacon" },
  { label: "DingDongBar", slug: "dingdongbar" },
  { label: "DinoShrek", slug: "dinoshrek" },
  { label: "Envirosence 680", slug: "envirosence-680" },
  { label: "ESP32 Audio", slug: "esp32-audio" },
  { label: "FreshCheck", slug: "freshcheck" },
  { label: "FridgeBar", slug: "fridgebar" },
  {
    label: "Leaf Temperature Measurement",
    slug: "leaf-temperature-measurement",
  },
  { label: "Magnetic Traffic Counting", slug: "magnetic-traffic-counting" },
  { label: "PlantBar", slug: "plantbar" },
  { label: "Sensor Array", slug: "sensor-array" },
];

const sqPanelPages = [
  { label: "AQI Insights", slug: "aqi-insights" },
  { label: "CO2 Insights", slug: "co2-insights" },
  { label: "Commercial Operators", slug: "commercial-operators" },
  { label: "Documentation", slug: "documentation" },
  {
    label: "Health-Conscious Longevity Enthusiasts",
    slug: "health-conscious-longevity-enthusiasts",
  },
  { label: "Jung Designer Frame", slug: "jung-designer-frame" },
  { label: "Launch Page", slug: "launch-page" },
  { label: "Payment Models", slug: "payment-models" },
  { label: "Product Launch", slug: "product-launch" },
  { label: "Property Managers", slug: "property-managers" },
  { label: "Schools and Kindergarden", slug: "schools-and-kindergarden" },
  { label: "Serial Number", slug: "serial-number" },
  { label: "Smart Care Providers", slug: "smart-care-providers" },
  { label: "Smart Home Enthusiasts", slug: "smart-home-enthusiasts" },
  { label: "SQ-Panel User Guide", slug: "sq-panel-user-guide" },
  { label: "VOC Insights", slug: "voc-insights" },
];

export default function ProductSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isSqPanelMode = pathname.startsWith("/product/sq-panel");
  const items = isSqPanelMode ? sqPanelPages : products;
  const activeProduct = isSqPanelMode
    ? sqPanelPages.find((p) => `/product/sq-panel/${p.slug}` === pathname)
    : products.find((p) => `/product/${p.slug}` === pathname);

  const headerKicker = isSqPanelMode ? "SQ-Panel" : "Catalog";
  const headerTitle = isSqPanelMode ? "More on SQ-Panel" : "Our Products";
  const footerHref = isSqPanelMode
    ? "/products"
    : "/product/sq-panel/aqi-insights";
  const footerLabel = isSqPanelMode ? "Back to Products" : "More on SQ-Panel";

  return (
    <aside className="w-full lg:w-64 shrink-0 self-start lg:sticky lg:top-24 flex flex-col gap-3">
      <div
        className="rounded-2xl overflow-hidden shadow-lg"
        style={{ backgroundColor: "#174f2e" }}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-green-300">
              {headerKicker}
            </p>
            <p className="text-sm font-semibold text-white mt-0.5">
              {headerTitle}
            </p>
          </div>
          <button
            className="lg:hidden flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle list"
          >
            <span className="text-xs text-white/50">
              {isOpen ? "Close" : "All"}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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
          </button>
        </div>

        {/* Mobile active preview when collapsed */}
        {activeProduct && !isOpen && (
          <div
            className="lg:hidden flex items-center justify-between px-5 py-3 bg-green-400/20 border-l-2 border-green-300 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <span className="text-sm font-semibold text-white truncate">
              {activeProduct.label}
            </span>
            <svg
              className="w-4 h-4 text-green-300 shrink-0 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}

        {/* Nav list (scrollable on desktop) */}
        <nav
          className={`py-2 lg:max-h-[calc(100vh-14rem)] lg:overflow-y-auto ${isOpen ? "block max-h-[60vh] overflow-y-auto" : "hidden"} lg:block`}
        >
          {items.map((p) => {
            const href = isSqPanelMode
              ? `/product/sq-panel/${p.slug}`
              : `/product/${p.slug}`;
            const active = pathname === href;
            return (
              <Link
                key={p.slug}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-5 py-2.5 text-sm transition-all duration-200 border-l-2 ${
                  active
                    ? "bg-green-400/20 text-white font-semibold border-green-300"
                    : "text-white/80 hover:bg-white/10 hover:text-white font-medium border-transparent"
                }`}
              >
                <span className="truncate">{p.label}</span>
                {active && (
                  <svg
                    className="w-4 h-4 text-green-300 shrink-0 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer link */}
        <div className="px-5 py-3 border-t border-white/10">
          <Link
            href={footerHref}
            className="flex items-center gap-2 text-xs font-semibold text-green-300 hover:text-white transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isSqPanelMode ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
              />
            </svg>
            {footerLabel}
          </Link>
        </div>
      </div>
    </aside>
  );
}
