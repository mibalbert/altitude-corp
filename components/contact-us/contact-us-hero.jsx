/**
 * contact-us-hero.jsx
 */

"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { Boxes } from "../ui/background-boxes";
import ContactUsMain from "./contact-us-main";

export function ContactUsHero() {
  return (
    <section className="py-32 w-full rounded-md flex flex-col md:items-center md:justify-center bg-blue-600 antialiased bg-grid-white/[0.3] relative overflow-hidden">
      {/* <div className="absolute inset-0 w-full h-full bg-blue-600  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-blue-600 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* <Boxes /> */}
      <div className="space-y-2 relative z-[99]  text-center px-8">
        <h1 className="text-4xl text-white font-bold tracking-tighter sm:text-5xl md:text-6xl/relaxed">
          Get in Touch
        </h1>
        <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {`We're here to help! Fill out the form below and we'll get back to
              you as soon as possible.`}
        </p>
      </div>
      <ContactUsMain />
    </section>
  );
}
