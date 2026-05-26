import AqiInsightsClient from "./AqiInsightsClient";

export const metadata = {
  title: "AQI Insights | Carenuity Products",
  description:
    "Real-time Air Quality Index monitoring with the Carenuity SQ-Panel — track PM2.5, ozone, nitrogen dioxide, and more to protect your health.",
};

export default function AqiInsightsPage() {
  return <AqiInsightsClient />;
}
