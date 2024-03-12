/**
 * components/services/services-hero.jsx
 */

import React from "react";
import Image from "next/image";

const ServicesSecSection = ({ data }) => {
  return (
    <section className="relative">
      <div className="max-w-screen-xl  w-full mx-auto  py-12 md:py-24 px-5  sm:px-16 md:px-24 lg:px-5">
        <div className="grid lg:grid-cols-6   items-center w-full h-full ">
          <div className="space-y-6 py-6 flex w-full h-full  flex-col justify-center  col-span-6 lg:col-span-3">
            <h1 className="text-3xl md:text-6xl font-bold">
              {data?.servicesPageHeroTitle}
            </h1>
            <p className="text-lg md:text-xl">
              {data?.servicesPageHeroSubtitle}
            </p>
          </div>
          <div className=" col-span-6 lg:col-span-3   mx-auto w-full    md:max-w-[100%]">
            <div className="relative w-full h-full flex items-center justify-end">
              <Image
                src={"/placeholder.svg"}
                alt="placeholder"
                width={500}
                height={500}
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSecSection;
