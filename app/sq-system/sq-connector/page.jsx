import SqConnectorClient from "./SqConnectorClient";

export const metadata = {
  title: "SQ-Connector | Carenuity SQ-System",
  description:
    "Central 868 MHz gateway connecting SQ-Panels to your local network and the Carenuity cloud for real-time remote monitoring.",
};

export default function SqConnectorPage() {
  return <SqConnectorClient />;
}
