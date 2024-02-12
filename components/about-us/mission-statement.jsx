import Image from "next/image";
import React from "react";

const MissionStatement = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-gray-50 dark:bg-blue-600 dark:text-gray-50">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {`We're on a mission to make the web accessible for everyone.`}
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform empowers developers to build inclusive
                  experiences through the power of automation. We believe the
                  internet is for everyone and are dedicated to providing the
                  tools and resources to ensure that websites are accessible to
                  all.
                </p>
              </div>
            </div>
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-gray-50 dark:bg-blue-600 dark:text-gray-50">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Making the web delightful since 2020.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  It all started with a simple idea: to provide the tools and
                  services that would allow businesses to thrive online. What
                  began as a small team of passionate individuals has grown into
                  a company that powers the web for millions of users around the
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionStatement;
