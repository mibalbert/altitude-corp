/**
 * components/landing-page/re.jsx
 */

"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingReviewCards({ reviews }) {
  return (
    <>
      <div className="h-[30rem] lg:h-[45rem]   w-full mx-auto mb-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
        <InfiniteMovingCards items={reviews} direction="left" speed="slow" />
      </div>
    </>
  );
}
