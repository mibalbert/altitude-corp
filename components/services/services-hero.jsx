/**
 * components/services/services-hero.jsx
 */

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AvatarImage, Avatar } from "@/components/ui/avatar";

import React from "react";
import Image from "next/image";

const ServicesHero = () => {
  return (
    <section className="max-w-screen-2xl w-full mx-auto  py-12 md:py-24 ">
      <div className=" flex items-center max-w-[300px]">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold">
            Grow Professionally with the Best
          </h1>
          <p className="text-xl">
            In a world filled with opportunities, having a mentor can make all
            the difference. Explore why people turn to this invaluable resource
            to unlock their potential.
          </p>
          <div className="flex space-x-4">
            <Input className="w-80" placeholder="example@domain.com" />
            <Button variant="secondary">
              Subscribe <ArrowRightIcon className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-3 gap-10">
          <span className=" bg-blue-400 rounded-full"></span>
          <Image
            width={300}
            height={300}
            className=" rounded-tl-full"
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/274f29ce-0d3f-4ac2-a2aa-f9b7bd188b2a"
            alt=""
          />
          <span className=" bg-green-500 rounded-full"></span>
          <Image
            width={300}
            height={300}
            className=""
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b8a14493-3d9f-4b9b-b93a-56d0bc7243e9"
            alt=""
          />

          <Image
            width={300}
            height={300}
            className=" rounded-br-full"
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/03e51e1e-9750-45a5-b75e-a1e341d4562a"
            alt=""
          />
          <span className=" bg-purple-700 rounded-full"></span>
          <Image
            width={300}
            height={300}
            className=""
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5eb50f89-3e5a-480e-860c-8d40d3ba9ffe"
            alt=""
          />
          <span className=" bg-yellow-500 rounded-full"></span>

          <span className=" bg-pink-400 rounded-full"></span>
          <Image
            width={300}
            height={300}
            className=" rounded-bl-full"
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/86c71a79-2efe-4567-8665-b1e5a1fd9735"
            alt=""
          />
          <span className=" bg-orange-500 rounded-full"></span>
          <Image
            width={300}
            height={300}
            className=""
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/97ef9643-5202-41aa-80f0-ceeabccdd099"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
