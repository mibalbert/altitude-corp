/**
 * app/admin/(website-pages)/
 */

import Elevator from "@/components/edit-landing-page/elevator";
import Hero from "@/components/edit-landing-page/hero";
import LandingFooter from "@/components/edit-landing-page/landing-footer";
import Numbers from "@/components/edit-landing-page/numbers";
import PeaceOfMind from "@/components/edit-landing-page/peace-of-mind";
import Plans from "@/components/edit-landing-page/plans";
import { InfiniteMovingCardsDemo } from "@/components/edit-landing-page/rev";
import Reviews from "@/components/edit-landing-page/reviews";
import Link from "next/link";
import React from "react";

const EditHome = async () => {
  const data = await prisma.home.findMany();

  return (
    <div className="p-4 pb-44">
      <div>asdnaksjdn</div>

      <div className="px-5 pb-5 border-2 border-dashed border-gray-300 rounded-xl">
        <Hero data={data[0]} />
        <InfiniteMovingCardsDemo />
        <Elevator data={data[0]} />
        <PeaceOfMind />
        <Numbers />
        <Plans />
        <Reviews />
        <LandingFooter />
      </div>
    </div>
  );
};

export default EditHome;
