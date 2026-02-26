import WhyCarenuity from "./whyCarenuity";
import { Whyus } from "@/types/whyus";

interface WhyCarenuityGridProps {
  whyusdata: Whyus[];
}

const WhyCarenuityGrid = ({ whyusdata }: WhyCarenuityGridProps) => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {whyusdata.map((item, index) => (
        <div
          key={item.id}
          className={
            index < 3
              ? "col-span-12 md:col-span-4"
              : "col-span-12 md:col-span-6"
          }
        >
          <WhyCarenuity whyus={item} />
        </div>
      ))}
    </div>
  );
};

export default WhyCarenuityGrid;
