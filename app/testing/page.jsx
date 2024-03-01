/**
 * testing/page.jsx
 */

import dynamic from "next/dynamic";
const TestingComp = dynamic(() => import("./testing"), { ssr: false });

const Testing = () => {
  return (
    <>
      <div className="h-[70vh] border-b ">
        <TestingComp />
      </div>
      <div className="h-[140vh]"></div>
    </>
  );
};

export default Testing;
