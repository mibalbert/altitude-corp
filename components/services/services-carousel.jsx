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
import { createRef, useRef } from "react";

const ServicesCarousel = ({ servicesData }) => {
  const refs = useRef(Array.from({ length: 6 }, () => createRef()));

  const executeScroll = (index) => {
    refs.current[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          // dragFree: true,
          // skipSnaps: true,
          loog: false,
          // containScroll: true,
        }}
        className="w-[90%] 2xl:max-w-screen-2xl mx-auto my-20 "
      >
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem
              key={index}
              className={cn(
                // "md:basis-1/2 lg:basis-1/4   lg:hover:basis-1/3 hover:cursor-pointer   transition-all duration-700"
                "md:basis-1/2 lg:basis-1/4 "
              )}
            >
              <div className="p-1">
                <Card
                  className="rounded-none"
                  onClick={() => executeScroll(index)}
                >
                  <CardContent className="h-[50vh] hover:bg-blue-600 active:bg-blue-500 text-white flex aspect-square items-center justify-center p-6  transition-all duration-500">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-top-10 left-0" />
        <CarouselNext className="-top-10 left-10" />
      </Carousel>
      <div className="">
        {servicesData.map((_, index) => (
          <div
            key={index}
            ref={refs.current[index]}
            className="h-[40vh] bg-orange-500"
          >
            JKASBDKJASBDJKB
          </div>
        ))}
      </div>
    </>
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
