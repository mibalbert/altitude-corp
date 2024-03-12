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

// const servicesData = [
//   {
//     id: 1,
//     title: "ASDASIDNA LSndlas nd",
//     desc: "asdhA L SAdlka snkldn alksndklasnkdlnasdnaslkdn lkasd",
//     imgUrl:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 2,
//     title: "TAEAS DAS LSndlas nd",
//     desc: "asdhA L SAdlka snkldn alksndklasnkdlnasdnaslkdn lkasd",
//     imgUrl:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 3,
//     title: "NBOPM K:ASMD LSndlas nd",
//     desc: "asdhA L SAdlka snkldn alksndklasnkdlnasdnaslkdn lkasd",
//     imgUrl:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 4,
//     title: "ASDASIlkansd lksnDNA LSndlas nd",
//     desc: "asdhA L SAdlka snkldn alksndklasnkdlnasdnaslkdn lkasd",
//     imgUrl:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 5,
//     title: "ASDASIDNA LSndlas nd",
//     desc: "asdhA L SAdlka snkldn alksndklasnkdlnasdnaslkdn lkasd",
//     imgUrl:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

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
      <div className="h-[70vh]">KJASDBkjasb jkabsjkd bas</div>
      <div className="">
        {servicesData.map((service, index) => (
          <div
            key={index}
            ref={refs.current[index]}
            className={cn(
              "h-[40vh] lg:h-[60vh] w-full    transition-all duration-200  ",
              index % 2 ? "bg-white " : "bg-gray-50"
            )}
          >
            <div className="grid grid-cols-2 max-w-screen-xl mx-auto w-full h-full py-20 gap-10">
              <div
                className={cn(
                  "col-span-2 lg:col-span-1 col-start-1 z-50 px-5 py-10 flex flex-col justify-between h-full space-y-5"
                )}
              >
                <div
                  className={cn(
                    "text-3xl"
                    // index % 2 ? "text-end" : "text-start"
                  )}
                >
                  {service.title}
                </div>
                <div
                  className={cn(
                    "line-clamp-5"
                    // index % 2 ? "text-end" : "text-start"
                  )}
                >
                  {service.desc}
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
