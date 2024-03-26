/**
 * components/landing-page/re.jsx
 */

"use client";

import { useMediaQuery } from "usehooks-ts";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingReviewCards({ data }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="py-20 space-y-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl whitespace-nowrap font-extrabold text-center  text-blue-600">
        What our customers say?
      </h1>
      <div className="h-[30rem] lg:h-auto   w-full mx-auto     flex flex-col antialiased bg-white   items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={data}
          direction="right"
          speed={"slow"}
          // speed={isMobile ? "fast" : "slow"}
        />
        <InfiniteMovingCards
          items={data}
          direction="left"
          speed={"slow"}
          // speed={isMobile ? "fast" : "slow"}
        />
      </div>
    </div>
  );
}
