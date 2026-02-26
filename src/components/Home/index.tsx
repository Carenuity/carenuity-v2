import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./singleProduct";
import whyusdata from "@/types/whyusdata";
import productsData from "./productsData";
import Image from "next/image";
import WhyCarenuityGrid from "./whyCarenuityGrid";

const Home = () => {
  return (
    <>
      <section
        id="features"
        className="bg-green-bg py-8 md:py-2 lg:py-10 dark:bg-gray-900"
      >
        <div className="container pb-30">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="">
              <SectionTitle
                title="About us"
                paragraph="Carenuity is an intelligent indoor monitoring solution designed to keep homes and loved ones safe, comfortable, 
            and well-ventilated. Powered by advanced environmental sensors, the system tracks air quality, temperature, humidity, 
            pressure, carbon dioxide (CO₂), TVOC levels, and presence in real time. Through the Carenuity mobile app, users can remotely 
            monitor their space, receive insights, and stay connected from anywhere. By turning sensor data into meaningful information, 
            Carenuity helps you create a healthier living environment and peace of mind every day.
            
           
      
            "
                button="Learn More About Us"
              />
            </div>

            <div className="relative h-[400px] w-full">
              <Image
                src="/images/home/sq-panel.PNG"
                alt="Carenuity Device"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Lines */}
          <div className="pb-20">
            <h2 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[32px] dark:text-white">
              Product Lines
            </h2>

            <p className="text-body-color dark:text-green mb-6">
              Flexible solutions designed for different needs-from premium,
              long-term system systerns to budget-friendly entry products
            </p>

            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
              {productsData.map((product) => (
                <SingleProduct key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Why Carenuity    */}
          <div>
            <h2 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[32px] dark:text-white">
              Why Carenuity
            </h2>

            <p className="text-body-color dark:text-green mb-6">
              Carenuity empowers you to monitor and improve your home
              environment, ensuring comfort, safety, and wellbeing for your
              loved ones with smart, easy-to-use IoT solutions.
            </p>
          </div>

          <WhyCarenuityGrid whyusdata={whyusdata} />
        </div>
      </section>

      {/* award */}
      <section className="-mt-20 bg-gray-100 dark:bg-gray-950">
        <div className="container pt-8 pb-8">
          <h2 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[32px] dark:text-white">
            Award
          </h2>

          <p className="text-body-color dark:text-green mb-6">
            Awarded the BSFZ Seal 2025 for Research & Development
          </p>

          <div className="grid grid-cols-12 gap-x-8 gap-y-14">
            <div className="col-span-12 lg:col-span-3">
              <img
                src="/images/home/bsfz-siegel.PNG"
                alt="bsfz-siegel Budge"
                className="object-contain"
              />
            </div>

            <div className="col-span-12 lg:col-span-9">
              <p>
                The red BSFZ Seal, awarded by the Federal Republic of Germany,
                certifies that Carenuity conducts its own research and
                development. The SQ-Panel is officially recognized as a result
                of innovative R&D. The BSFZ Seal (issued by the German
                Certification Office for Research Grants) is an official quality
                mark of the Federal Republic of Germany confirming that a
                product or project is based on research and development. It
                strengthens trust among customers, partners, and investors by
                signaling official recognition of innovation and credibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
