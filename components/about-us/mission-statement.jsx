import Image from "next/image";
import React from "react";

const MissionStatement = () => {
  return (
    <>
      <section className="w-full py-12  pt-40">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-gray-50 dark:bg-blue-600 dark:text-gray-50">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, voluptate fugiat officia ut sapiente ipsam illum
                  asperiores voluptatibus dolorem repellendus sequi illo
                  quibusdam quia veniam voluptates est alias voluptas? Saepe,
                  facere a.
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
      <section className="w-full py-12 ">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-gray-50 dark:bg-blue-600 dark:text-gray-50">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Making business since 2000.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maxime doloremque quod voluptas. Et corporis aliquam enim at
                  dolor reiciendis quasi quam eos, culpa harum. Voluptas quaerat
                  fugit laborum neque alias.
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
