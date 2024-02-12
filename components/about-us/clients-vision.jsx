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
          <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
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
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  rem corrupti fugiat, molestias odio porro pariatur repudiandae
                  laborum in et perferendis architecto impedit repellat iure
                  ipsam nihil quos facere aperiam!
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
