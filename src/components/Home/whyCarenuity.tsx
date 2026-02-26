import { Whyus } from "@/types/whyus";
import Image from "next/image";

const WhyUs = ({ whyus }: { whyus: Whyus }) => {
  const { image, name, title, paragraph } = whyus;
  return (
    <div className="shadow-two hover:shadow-one dark:shadow-three dark:hover:shadow-gray-dark flex h-full flex-col rounded-2xl bg-white duration-300 dark:bg-gray-950">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="relative h-[200px] w-full overflow-hidden rounded-t-2xl">
          <Image src={image} alt={name} fill className=" " />
        </div>
        <div className="p-0px text-center">
          <h5 className="mb-1 pt-1 text-sm font-bold text-black sm:text-sm lg:text-sm xl:text-xl dark:text-white">
            {title}
          </h5>
          <p className="text-body-color dark:text-green mb-5 pr-[10px] text-base leading-relaxed font-medium">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
