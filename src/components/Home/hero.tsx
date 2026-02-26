import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-[120px] md:pt-[100px] xl:pt-[140px] 2xl:pt-[150px]"
      >
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero/sq-panel.PNG')" }}
        >
          <div className="container">
            <div className="-mx-4">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[1500px] text-left">
                  <h1 className="mb-5 pt-[120px] text-3xl leading-tight font-bold text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Healthy, comfortable,
                    <br /> and connected
                  </h1>
                  <p className="mb-12 pb-[80px] text-base leading-relaxed! text-white sm:text-lg md:text-xl">
                    Monitor air quality, presence, and more anytime,
                    <br /> anywhere through the Carenuity app.
                  </p>
                  <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
