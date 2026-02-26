import ScrollUp from "@/components/Common/ScrollUp";
import Home from "@/components/Home";
import Hero from "@/components/Home/hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import Video from "@/components/Video";

export const metadata: Metadata = {
  title: "",
  description: "",
  // other metadata
};

export default function Homepage() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Home />
      <Testimonials />

      {/* 
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
    </>
  );
}
