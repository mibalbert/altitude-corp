/**
 * components/landing-page/re.jsx
 */

"use client";

import { useMediaQuery } from "usehooks-ts";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingReviewCards({ reviews }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <div className="h-[30rem] lg:h-[45rem]   w-full mx-auto lg:mb-20   flex flex-col antialiased bg-white   items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={reviews}
          direction="right"
          speed={isMobile ? "fast" : "slow"}
        />
        <InfiniteMovingCards
          items={reviews}
          direction="left"
          speed={isMobile ? "fast" : "slow"}
        />
      </div>
    </>
  );
}
