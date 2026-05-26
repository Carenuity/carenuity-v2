"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/products/autonomous/car1.jpg",
  "/images/products/autonomous/car2.jpg",
  "/images/products/autonomous/car3.jpg",
  "/images/products/autonomous/car4.jpg",
  "/images/products/autonomous/car5.jpg",
  "/images/products/autonomous/car6.jpg",
  "/images/products/autonomous/car7.jpg",
  "/images/products/autonomous/car8.jpg",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={images[current]}
          alt={`Autonomous Driving Car image ${current + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority={current === 0}
        />
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        style={{ backgroundColor: "rgba(23,79,46,0.85)" }}
        aria-label="Previous image"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        style={{ backgroundColor: "rgba(23,79,46,0.85)" }}
        aria-label="Next image"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div
        className="absolute top-3 right-3 text-xs font-semibold text-white px-2.5 py-1 rounded-full"
        style={{ backgroundColor: "rgba(23,79,46,0.85)" }}
      >
        {current + 1} / {images.length}
      </div>
    </div>
  );
}
