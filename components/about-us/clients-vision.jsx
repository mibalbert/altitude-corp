import Image from "next/image";
import React from "react";

const ClientsVision = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-gray-50 dark:bg-blue-600 dark:text-gray-50">
            Vision for Clients
          </div>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Empowering the Future of the Web
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our vision is to enable our clients to create amazing online
                  experiences. We provide the tools and services that allow them
                  to build beautiful, fast, and secure websites, engage with
                  their users, and grow their businesses. We are dedicated to
                  helping our clients succeed on the web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsVision;
