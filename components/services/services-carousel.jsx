/**
 *
 */

"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { createRef, useRef } from "react";
import ServicesSecSection from "./services-sec-section";
import EditableComp from "../editableComp";
import ServicesMockup from "./services-mockup";
import NewMockup from "./new-mockup";

const ServicesCarousel = ({ data, isEditable }) => {
  const servicesCarTitle = data.find(
    (el) => el.compName === "services-car-title"
  );
  const servicesCarSubtitle = data.find(
    (el) => el.compName === "services-car-subtitle"
  );

  const carTitleData = data.filter(
    (el) => el.compName === "services-car-comp-title"
  );

  // console.log(carTitleData)

  const carSubtitleData = data.filter(
    (el) => el.compName === "services-car-comp-subtitle"
  );

  const refs = useRef(Array.from({ length: 6 }, () => createRef()));

  const executeScroll = (index) => {
    refs.current[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <section>
      <div className="flex justify-end overflow-hidden">
        <div className="block lg:flex  w-full space-x-10  md:px-20 lg:px-10 2xl:px-0   max-w-[1560px] pb-20  md:pb-10 md:py-20 space-y-16 lg:space-y-0  lg:py-24 overflow-hidden">
          <div className="w-full lg:w-1/4 pt-5 text-center px-10 lg:text-left  xl:pt-20 space-y-10 md:space-y-5 flex flex-col">
            <EditableComp comp={servicesCarTitle} isEditable={isEditable} />
            <EditableComp comp={servicesCarSubtitle} isEditable={isEditable} />
          </div>
          <Carousel
            opts={{
              align: "start",
              // dragFree: true,
              // skipSnaps: true,
              loog: false,
              // containScroll: true,
            }}
            className="w-full  lg:w-3/4  "
          >
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    // "md:basis-1/2 lg:basis-1/4   lg:hover:basis-1/3 hover:cursor-pointer   transition-all duration-700"
                    "basis-3/4 sm:basis-2/3 md:basis-1/3 "
                  )}
                >
                  <div className="p-1">
                    <Card
                      className="rounded-none"
                      onClick={() => executeScroll(index)}
                    >
                      {/* <CardContent className="h-[50vh] hover:bg-blue-600 active:bg-blue-500 text-white flex aspect-square items-center justify-center p-6  transition-all duration-500"> */}
                      <CardContent className="h-[50vh] hover:bg-blue-500 relative active:bg-blue-500 bg-blue-600 text-white flex aspect-square items-center justify-center p-6  transition-all duration-500">
                        <span className="text-xl font-semibold absolute bottom-10 left-10  ">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <div className="absolute flex items-center  -top-10 left-0  lg:bottom-10   xl:bottom-0 xl:top-3/4 lg-left-36 xl:-left-48 2xl:-left-60 "> */}
            <div className="absolute flex items-center max-w-[10px]  w-full -bottom-10 left-16">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
      <NewMockup />
      {/* <ServicesMockup /> */}

      <div className="">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            ref={refs.current[index]}
            className={cn(
              "h-[40vh] lg:h-[60vh] w-full    transition-all duration-200  ",
              index % 2 ? "bg-white " : "bg-gray-50"
            )}
          >
            <div className="grid grid-cols-2 max-w-7xl mx-auto w-full h-full py-20 gap-10">
              <div className="space-y-10 pt-10 lg:px-10 ">
                <div
                  className={cn(
                    "text-3xl"
                    // index % 2 ? "text-end" : "text-start"
                  )}
                >
                  <EditableComp
                    comp={carTitleData[index]}
                    isEditable={isEditable}
                  />
                </div>
                <div
                  className={cn(
                    "line-clamp-5"
                    // index % 2 ? "text-end" : "text-start"
                  )}
                >
                  <EditableComp
                    comp={carSubtitleData[index]}
                    isEditable={isEditable}
                  />
                </div>
              </div>
              <div
                className={cn("col-span-2  lg:col-span-1 relative bg-sky-900")}
              >
                {/* <Image
                  src={service.imgUrl}
                  alt={service.title + "Image"}
                  fill
                  className="object-cover object-center z-0"
                /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ServicesCarousel;

// /**
//  *
//  */

// import Image from "next/image";
// import React from "react";

// const ServicesLetUsHelp = ({ data }) => {
//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32">
//       <div className="space-y-2 container  mx-auto text-center">
//         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//           {data?.servicesPageLetUsHelpTitle}
//         </h2>
//         <p className=" text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//           {data?.servicesPageLetUsHelpSubtitle}
//         </p>
//       </div>
//       <div className="grid w-full grid-cols-1  max-w-screen-2xl justify-center md:grid-cols-3">
//         <div className="mx-auto flex w-full items-center justify-center gap-8  p-4 sm:p-8">
//           <Image
//             alt="Service 1"
//             className="aspect-video overflow-hidden rounded-xl w-1/2 object-cover object-center"
//             height="250"
//             src="/placeholder.svg"
//             width="400"
//           />
//           <div className="space-y-2 mt-4 text-left w-1/2">
//             <h3 className="text-xl font-bold">
//               {data?.servicesPageLetUsHelpService1Title}
//             </h3>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               {data?.servicesPageLetUsHelpService1Desc}
//             </p>
//           </div>
//         </div>
//         <div className="mx-auto flex w-full items-center justify-center gap-8 p-4 sm:p-8">
//           <Image
//             alt="Service 2"
//             className="aspect-video overflow-hidden rounded-xl w-1/2 object-cover object-center"
//             height="250"
//             src="/placeholder.svg"
//             width="400"
//           />
//           <div className="space-y-2 mt-4 text-left w-1/2">
//             <h3 className="text-xl font-bold">
//               {data?.servicesPageLetUsHelpService2Title}
//             </h3>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               {data?.servicesPageLetUsHelpService2Desc}{" "}
//             </p>
//           </div>
//         </div>
//         <div className="mx-auto flex w-full items-center justify-center gap-8 p-4 sm:p-8">
//           <Image
//             alt="Service 3"
//             className="aspect-video overflow-hidden rounded-xl w-1/2 object-cover object-center"
//             height="250"
//             src="/placeholder.svg"
//             width="400"
//           />
//           <div className="space-y-2 mt-4 text-left w-1/2">
//             <h3 className="text-xl font-bold">
//               {data?.servicesPageLetUsHelpService3Title}
//             </h3>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               {data?.servicesPageLetUsHelpService3Desc}{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesLetUsHelp;
