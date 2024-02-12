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
    <section className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-blue-600/[0.96] antialiased bg-grid-white/[0.2] relative overflow-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-blue-600 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
              {/* <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"> */}
              The Web. Now. Yours.
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-50 md:text-xl dark:text-gray-400">
              The platform for the future of the web. One workflow. Any
              framework.
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
