/**
 * components/edit-landing-page/rev.jsx
 */

import { InfiniteMovingCardsEditable } from "../../../ui/infinite-moving-cards-editable";

export function InfiniteMovingCardsDemo({ reviews }) {
  return (
    <>
      <div className="h-[30rem] lg:h-[40rem] mb-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCardsEditable
          items={reviews}
          direction="right"
          speed="slow"
        />
        {/* <InfiniteMovingCardsEditable
          items={reviews}
          direction="left"
          speed="slow"
        /> */}
      </div>
    </>
  );
}
