/**
 * testing/page.jsx
 */

import dynamic from "next/dynamic";
import { Suspense } from "react";
const TestingComp = dynamic(() => import("./testing"), { ssr: false });

const Testing = () => {
  return (
    <>
      <div className="h-[70vh] border-b bg-white">
        {/* <Suspense
          fallback={
            <div className="text-2xl text-center">LOadinsaodinasodi</div>
          }
        > */}
        <TestingComp />
        {/* </Suspense> */}
      </div>
      <div className="h-[140vh]"></div>
    </>
  );
};

export default Testing;
