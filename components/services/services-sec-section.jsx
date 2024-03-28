/**
 * components/services/services-hero.jsx
 */

import React from "react";
import Image from "next/image";
import EditableComp from "../editableComp";

const ServicesSecSection = ({ data, isEditable }) => {
  const servicesSecTitle = data.find(
    (el) => el.compName === "services-sec-title"
  );
  const servicesSecSubtitle = data.find(
    (el) => el.compName === "services-sec-subtitle"
  );

  return (
    <section className=" w-full py-24 lg:py-16 px-10 xl:px-0 space-y-10">
      <div className="text-center flex flex-col">
        <EditableComp comp={servicesSecTitle} isEditable={isEditable} />
        <EditableComp comp={servicesSecSubtitle} isEditable={isEditable} />
      </div>
      <div className="grid grid-cols-2  md:grid-cols-4   border divide-x divide-y justify max-w-sm  md:max-w-3xl mx-auto w-full">
        <div className="relative col-span-1 w-full h-[130px] lg:h-[180px]">
          <Image
            src={"/services-logos/charles-schwab-corporation.svg"}
            alt="charles-schwab-corporation"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative col-span-1 w-full h-[130px] lg:h-[180px]">
          <Image
            src={"/services-logos/charles-schwab-corporation.svg"}
            alt="charles-schwab-corporation"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative col-span-1 w-full h-[130px] lg:h-[180px]">
          <Image
            src={"/services-logos/charles-schwab-corporation.svg"}
            alt="charles-schwab-corporation"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative col-span-1 w-full h-[130px] lg:h-[180px]">
          <Image
            src={"/services-logos/charles-schwab-corporation.svg"}
            alt="charles-schwab-corporation"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative col-span-1 w-full h-[130px] lg:h-[180px]">
          <Image
            src={"/services-logos/charles-schwab-corporation.svg"}
            alt="charles-schwab-corporation"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative col-span-1 w-full h-[130px] lg:h-[180px]">
          <Image
            src={"/services-logos/charles-schwab-corporation.svg"}
            alt="charles-schwab-corporation"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative col-span-1 w-full h-[130px] lg:h-[180px]">
          <Image
            src={"/services-logos/charles-schwab-corporation.svg"}
            alt="charles-schwab-corporation"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative col-span-1 w-full h-[130px] lg:h-[180px]">
          <Image
            src={"/services-logos/charles-schwab-corporation.svg"}
            alt="charles-schwab-corporation"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* <div className="max-w-7xl  w-full mx-auto px-10 xl:px-0  flex ">
        <div className="space-y-3 flex flex-col  w-full md:w-1/2 h-full text-white">
          <EditableComp comp={servicesSecTitle} isEditable={isEditable} />
          <EditableComp comp={servicesSecSubtitle} isEditable={isEditable} /> */}
      {/* <h1 className="text-3xl md:text-6xl font-bold">
              Servoces
            </h1>
            <p className="text-lg md:text-xl">
              Lorem ipsum dolor sit amet.
            </p> */}
      {/* </div>
        <div className="w-full md:w-1/2">
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
      </div> */}
    </section>
  );
};

export default ServicesSecSection;
