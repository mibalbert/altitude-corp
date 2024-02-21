/**
 *
 */

import Image from "next/image";
import React from "react";

const ServicesLetUsHelp = ({ data }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="space-y-2 container  mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {data?.servicesPageLetUsHelpTitle}
        </h2>
        <p className=" text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {data?.servicesPageLetUsHelpSubtitle}
        </p>
      </div>
      <div className="grid w-full grid-cols-1  max-w-screen-2xl justify-center md:grid-cols-3">
        <div className="mx-auto flex w-full items-center justify-center gap-8  p-4 sm:p-8">
          <Image
            alt="Service 1"
            className="aspect-video overflow-hidden rounded-xl w-1/2 object-cover object-center"
            height="250"
            src="/placeholder.svg"
            width="400"
          />
          <div className="space-y-2 mt-4 text-left w-1/2">
            <h3 className="text-xl font-bold">
              {data?.servicesPageLetUsHelpService1Title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {data?.servicesPageLetUsHelpService1Desc}
            </p>
          </div>
        </div>
        <div className="mx-auto flex w-full items-center justify-center gap-8 p-4 sm:p-8">
          <Image
            alt="Service 2"
            className="aspect-video overflow-hidden rounded-xl w-1/2 object-cover object-center"
            height="250"
            src="/placeholder.svg"
            width="400"
          />
          <div className="space-y-2 mt-4 text-left w-1/2">
            <h3 className="text-xl font-bold">
              {data?.servicesPageLetUsHelpService2Title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {data?.servicesPageLetUsHelpService2Desc}{" "}
            </p>
          </div>
        </div>
        <div className="mx-auto flex w-full items-center justify-center gap-8 p-4 sm:p-8">
          <Image
            alt="Service 3"
            className="aspect-video overflow-hidden rounded-xl w-1/2 object-cover object-center"
            height="250"
            src="/placeholder.svg"
            width="400"
          />
          <div className="space-y-2 mt-4 text-left w-1/2">
            <h3 className="text-xl font-bold">
              {data?.servicesPageLetUsHelpService3Title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {data?.servicesPageLetUsHelpService3Desc}{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesLetUsHelp;
