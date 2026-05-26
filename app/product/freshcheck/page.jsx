import FreshCheckClient from "./FreshCheckClient";

export const metadata = {
  title: "FreshCheck | Carenuity Products",
  description:
    "FreshCheck instantly measures bathroom air quality and tells you if the air is fresh or if it still needs ventilation. Powered by the C3-Mini and a high-precision VOC sensor.",
};

export default function FreshCheckPage() {
  return <FreshCheckClient />;
}
