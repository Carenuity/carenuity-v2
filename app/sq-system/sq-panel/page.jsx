import SqPanelClient from "./SqPanelClient";

export const metadata = {
  title: "SQ-Panel | Carenuity SQ-System",
  description:
    "Real-time CO₂, TVOC, temperature, humidity, pressure, and presence monitoring with the Carenuity SQ-Panel.",
};

export default function SqPanelPage() {
  return <SqPanelClient />;
}
