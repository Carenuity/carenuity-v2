import PlantBarClient from "./PlantBarClient";

export const metadata = {
  title: "PlantBar | Carenuity Products",
  description:
    "The Carenuity Plant Bar monitors soil moisture, temperature, and humidity with real-time alerts on a 0.96-inch OLED display. Built on C3-Mini architecture.",
};

export default function PlantBarPage() {
  return <PlantBarClient />;
}
