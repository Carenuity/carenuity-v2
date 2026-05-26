import FridgeBarClient from "./FridgeBarClient";

export const metadata = {
  title: "FridgeBar | Carenuity Products",
  description:
    "FridgeBar continuously monitors your fridge temperature and shows you at a glance whether your food is stored safely — with smart alerts when something goes wrong.",
};

export default function FridgeBarPage() {
  return <FridgeBarClient />;
}
