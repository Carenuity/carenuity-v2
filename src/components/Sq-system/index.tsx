import SectionTitle from "../Common/SectionTitle";
import SingleSystem from "./singleSystem";
import SystemData from "./systemData";
import Image from "next/image";
import Video from "./video";

const System = () => {
  return (
    <>
      <section
        id="features"
        className="bg-green-bg py-8 md:py-2 lg:py-10 dark:bg-gray-900"
      >
        <div className="container pb-30">
          {/* SQ-System */}
          <div className="pb-20">
            <h2>SQ-System</h2>

            <p className="text-body-color dark:text-green mb-6">
              The Carenuity SQ-System is a modular indoor monitoring solution
              made up of the SQ-Panel, SQ-Power, SQ-Connector, and SQ-Table
              Stand, designed to work together as one intelligent unit. At its
              core, the SQ-Panel houses advanced environmental sensors that
              continuously measure air quality, temperature, humidity, pressure,
              carbon dioxide (CO₂), TVOC levels, and presence. The SQ-Power
              ensures reliable energy supply, while the SQ-Connector enables
              seamless communication and integration with the Carenuity mobile
              app for real-time monitoring and commissioning. Supported by the
              SQ-Table Stand for flexible placement, the SQ-System delivers
              accurate insights, easy setup, and dependable performance to
              maintain a healthy, comfortable indoor environment.
            </p>

            <div className="grid grid-cols-1 gap-x-8 gap-y-14 pb-20 md:grid-cols-2 lg:grid-cols-2">
              {SystemData.map((system) => (
                <SingleSystem key={system.id} system={system} />
              ))}
            </div>

            <h2 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[32px] dark:text-white">
              Videos showing SQ-Panel and SQ-Power
            </h2>
            {/* <div className="relative w-full h-full  ">
                    <video
                      src="/video/sq-panel-en.MP4"
                      className="mb-4 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div> */}

            <div className="relative h-full w-full">
              <h2 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[20px] dark:text-white">
                Sq-Panel
              </h2>
              <video
                src="/video/sq-panel-en.MP4"
                className="mb-12 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="relative h-full w-full">
              <h2 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[20px] dark:text-white">
                SQ-Power
              </h2>
              <video
                src="/video/sq-power-en.MP4"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default System;
