/**
 * contact-us-hero.jsx
 */

"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { Boxes } from "../ui/background-boxes";

export function ContactUsHero() {
  return (
    <div className="h-96 relative w-full overflow-hidden  flex flex-col items-center justify-center bg-blue-600">
      <div className="absolute inset-0 w-full h-full bg-blue-600  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="space-y-2 relative z-[99] ">
        <h1 className="text-4xl text-white font-bold tracking-tighter sm:text-5xl md:text-6xl/relaxed">
          Get in Touch
        </h1>
        <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {`We're here to help! Fill out the form below and we'll get back to
              you as soon as possible.`}
        </p>
      </div>
    </div>
  );
}
