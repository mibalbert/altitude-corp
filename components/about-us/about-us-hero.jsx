/**
 * components/about-us/about-us-hero.jsx
 */

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import { Spotlight } from "../ui/spotlight";

const AboutUsHero = () => {
  return (
    <>
      <Spotlight
        className="absolute  -top-10 left-0 md:left-44 md:-top-10"
        fill="white"
      />
      <section className=" h-[60vh] relative lg:h-[40rem] w-full  flex md:items-center md:justify-center bg-blue-600 antialiased bg-dot-white/[0.6]  overflow-hidden">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-blue-600 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {/* <div className="z-[9999] bg-red-500 w-44 h-44 -top-10 left-0 absolute"></div> */}

        {/* <Spotlight className="-top-10 left-0 md:left-44 md:top-44" fill="white" />
      <div className="absolute top-0 left-0 bg-red-600 h-full w-full flex items-center justify-end">
        <Spotlight className="bg-green-500" fill="white" />
      </div>{" "}
      */}
        <div className="container px-4 md:px-6 w-full h-full z-40 relative flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                {/* <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"> */}
                The Web. Now. Yours.
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-50 md:text-xl dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                ipsum officia quas.
              </p>
            </div>
            {/* <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button size="sm">Sign Up</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsHero;

// export function SpotlightPreview() {
//   return (

//       <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
//           Spotlight <br /> is the new trend.
//         </h1>
//         <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
//           Spotlight effect is a great way to draw attention to a specific part
//           of the page. Here, we are drawing the attention towards the text
//           section of the page. I don&apos;t know why but I&apos;m running out of
//           copy.
//         </p>
//       </div>
//     </div>
//   );
// }
