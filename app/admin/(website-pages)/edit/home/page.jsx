/**
 * app/admin/(website-pages)/
 */

import Elevator from "@/components/admin/editor-mode/edit-landing-page/elevator";
import Hero from "@/components/admin/editor-mode/edit-landing-page/hero";
import LandingFooter from "@/components/admin/editor-mode/edit-landing-page/landing-footer";
import Numbers from "@/components/admin/editor-mode/edit-landing-page/numbers";
import PeaceOfMind from "@/components/admin/editor-mode/edit-landing-page/peace-of-mind";
import Plans from "@/components/admin/editor-mode/edit-landing-page/plans";
import { InfiniteMovingCardsDemo } from "@/components/admin/editor-mode/edit-landing-page/rev";
import Reviews from "@/components/admin/editor-mode/edit-landing-page/reviews";
import TheSteps from "@/components/admin/editor-mode/edit-landing-page/the-steps";
import prisma from "@/lib/prismadb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EditHome = async () => {
  const data = await prisma.home.findMany({
    include: {
      reviews: true,
    },
  });

  return (
    <div className="p-4 pb-44 ">
      <div className="px-5 pb-5 border-2 border-dashed border-gray-300 rounded-xl">
        <Hero data={data[0]} />
        <InfiniteMovingCardsDemo reviews={data[0].reviews} />
        <Elevator data={data[0]} />
        <PeaceOfMind data={data[0]} />
        <Numbers data={data[0]} />
        <TheSteps data={data[0]} />
        {/* <Plans data={data[0]}/> */}
        {/* <Reviews data={data[0]}/> */}
        <LandingFooter data={data[0]} />
      </div>
    </div>
  );
};

export default EditHome;
