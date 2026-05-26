import LeafTempClient from "./LeafTempClient";

export const metadata = {
  title: "Leaf Temperature Measurement | Carenuity Products",
  description:
    "Leaf temperature is a key indicator of a plant's physiological state — providing valuable information about water stress, photosynthetic activity, transpiration, and environmental responses.",
};

export default function LeafTempPage() {
  return <LeafTempClient />;
}
