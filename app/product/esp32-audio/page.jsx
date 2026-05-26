import ESP32AudioClient from "./ESP32AudioClient";

export const metadata = {
  title: "ESP32 Audio | Carenuity Products",
  description:
    "Modular ESP32 audio recording and playback project based on the Carenuity S-M-A architecture. Combines a MAX9814 microphone, ESP32-WROOM-32, and MAX98357A audio DAC.",
};

export default function ESP32AudioPage() {
  return <ESP32AudioClient />;
}
