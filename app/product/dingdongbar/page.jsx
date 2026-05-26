import DingDongBarClient from "./DingDongBarClient";

export const metadata = {
  title: "DingDongBar | Carenuity Products",
  description:
    "A compact smart alert device that detects human movement with a PIR sensor and triggers a buzzer — fully automatic, day and night, no setup required.",
};

export default function DingDongBarPage() {
  return <DingDongBarClient />;
}
