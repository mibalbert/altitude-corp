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
    <section className="bg-blue-600 w-full py-24 lg:py-16">
      <div className="max-w-7xl  w-full mx-auto px-10 xl:px-0  flex ">
        <div className="space-y-3 flex flex-col  w-full md:w-1/2 h-full text-white">
          <EditableComp comp={servicesSecTitle} isEditable={isEditable} />
          <EditableComp comp={servicesSecSubtitle} isEditable={isEditable} />
          {/* <h1 className="text-3xl md:text-6xl font-bold">
              Servoces
            </h1>
            <p className="text-lg md:text-xl">
              Lorem ipsum dolor sit amet.
            </p> */}
        </div>
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
      </div>
    </section>
  );
};

export default ServicesSecSection;
