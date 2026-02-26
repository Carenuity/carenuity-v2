import { System } from "@/types/sq-system";
import Image from "next/image";
import Link from "next/link";

const SingleSystem = ({ system }: { system: System }) => {
  const { image, name, title, paragraph, button } = system;
  return (
    <div className="shadow-two hover:shadow-one dark:shadow-three dark:hover:shadow-gray-dark flex h-full flex-col rounded-2xl bg-white duration-300 dark:bg-gray-950">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="relative mr-4 mb-4 h-[290px] w-full max-w-[100%] overflow-hidden rounded-t-2xl bg-contain bg-center bg-no-repeat">
          <Image src={image} alt={name} fill />
        </div>
        <div className="p-20px">
          <h3 className="mb-2 pl-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
            {title}
          </h3>
          <p className="text-body-color dark:text-green pl-5 text-base leading-relaxed font-medium">
            {paragraph}
          </p>

          <div className="mt-auto">
            <Link
              href={system.link}
              className="shadow-btn bg-primary hover:bg-primary/90 mt-4 mb-5 ml-5 inline-block rounded-full px-8 py-1 text-white transition duration-300"
            >
              {system.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSystem;
