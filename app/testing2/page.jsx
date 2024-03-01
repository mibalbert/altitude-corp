import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const Comp = dynamic(() => import("./comp"), { ssr: false });

const Page = () => {
  return (
    <>
      <div className="h-[50vh]">
        <Suspense fallback={<Loading />}>
          <Comp />
        </Suspense>
      </div>
      <div className="h-[150vh]"></div>
    </>
  );
};

export default Page;

const Loading = () => {
  return <div>Loding...</div>;
};
