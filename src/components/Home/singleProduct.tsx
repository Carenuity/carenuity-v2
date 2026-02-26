"use client";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

const SingleProduct = ({ product }: { product: Product }) => {
  const { image, name, title, paragraph, button } = product;
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

          {product.list && product.list.length > 0 && (
            <ul className="mt-4 space-y-2">
              {product.list.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="color-primary dark:text-green mt-1 pl-5 font-bold">
                    ✔
                  </span>
                  <span className="text-body-color dark:text-green">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto">
            <Link
              href={product.link}
              className="shadow-btn bg-primary hover:bg-primary/90 mt-4 mb-5 ml-5 inline-block rounded-full px-8 py-1 text-white transition duration-300"
            >
              {product.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
