import ScrollUp from "@/components/Common/ScrollUp";
import System from "@/components/Sq-system";
import Hero from "@/components/Sq-system/hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  // other metadata
};

export default function Sqsystem() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <System />
    </>
  );
}
