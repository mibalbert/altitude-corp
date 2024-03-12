/**
 * components/featured-blog-list.jsx
 */

"use client";

import Link from "next/link";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";

const svgs = [
  {
    type: "first",
    svg: "/svgs/first.svg",
  },
];

const FeaturedBlogList = ({ data }) => {
  return (
    <Carousel className="w-full max-w-6xl mx-auto px-12">
      <CarouselContent>
        <CarouselItem>
          <div className="grid items-start md:grid-cols-2 gap-12">
            {/* <div className="space-y-4 col-span-2 md:col-span-1 flex flex-col justify-center w-full h-full"> */}
            <div className="space-y-4 col-span-2 md:col-span-1 pt-[10%] pr-10 w-full h-full">
              {" "}
              {/* Adjusting col-span */}
              <div className="space-y-5">
                <div className="text-sm font-medium tracking-wide uppercase text-blue-200 dark:text-blue-400">
                  Featured
                </div>
                <Link
                  href={"#"}
                  className="text-2xl font-bold tracking-tight sm:text-3xl"
                >
                  {`The Art of Baking: A Beginner's Guide to Baking Bread`}
                </Link>
                <p className="text-gray-200 ">
                  Master the art of baking with our comprehensive guide to
                  making the perfect loaf of bread.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {/* <div className="rounded-full overflow-hidden border-2 border-white">
                  <Image
                    alt="Avatar"
                    className="rounded-full object-cover"
                    height={40}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                </div> */}
                <div className="text-sm font-medium leading-none">
                  <span className="block">By Alice Parker</span>
                  <span className="block text-gray-300">August 24, 2023</span>
                </div>
              </div>
            </div>
            <Link
              className="col-span-2 md:col-span-1  w-[85%] h-full min-h-[400px] bg-gray-700 relative" // Adjusting col-start
              href="#"
            >
              <Image
                alt="Cover image"
                className="object-cover obeject-center w-full transition-transform z-10"
                // height={300}
                src="/placeholder.svg"
                // width={600}
                fill
              />
              {/* 
                  {/* <div className="absolute top-0 left-1/2 z-40 "> */}

              <motion.div
                // style={{
                //   width: 150,
                //   height: 150,
                //   borderRadius: 8,
                //   margin: 10,
                //   backgroundColor: "#fff",
                //   cursor: "pointer",
                // }}
                className="w-32 h-32 absolute top-5 -right-12 z-50 rotate-12  "
                animate={["initial"]}
                whileHover={["grow"]}
                variants={{
                  grow: {
                    scale: 1.1,
                  },
                  // rotate: {
                  //   rotate: [null, -25, 25, 0],
                  //   transition: {
                  //     // delay,
                  //     duration: 10,
                  //     // repeat: Infinity,
                  //     // repeatDelay: 0.2,
                  //     // repeatType: "reverse"
                  //   },
                  // },
                  initial: {
                    y: [-20, 20],
                    rotate: 25,
                    transition: {
                      // delay,
                      duration: 2,
                      repeat: Infinity,
                      // repeatDelay: 0.2,
                      repeatType: "reverse",
                    },
                  },
                }}
              >
                <Image
                  alt="Cover image 2"
                  // className="aspect-post  object-contain   transition-transform "
                  className="aspect-post object-cover object-center  transition-transform "
                  src={svgs.find((el) => el.type === "first").svg}
                  fill
                />
              </motion.div>
              {/* <div className="w-32 h-32 absolute top-5 -right-12 z-50 rotate-12 ">
                <Image
                  alt="Cover image 2"
                  // className="aspect-post  object-contain   transition-transform "
                  className="aspect-post object-cover object-center  transition-transform "
                  src={svgs.find((el) => el.type === "first").svg}
                  fill
                />
              </div> */}

              {/* </div> */}
              {/* <div className="aspect-[1.5] w-full bg-gray-200 hidden md:block dark:bg-gray-800" /> */}
              {/* <span className="sr-only">Read more</span> */}
            </Link>
          </div>
        </CarouselItem>
        <CarouselItem />
        <CarouselItem />
      </CarouselContent>
      <CarouselPrevious
        className="bg-blue-600 hover:bg-blue-700"
        arrowColor="white"
      />
      <CarouselNext
        className="bg-blue-600 hover:bg-blue-700"
        arrowColor="white"
      />
    </Carousel>
  );
};

export default FeaturedBlogList;
