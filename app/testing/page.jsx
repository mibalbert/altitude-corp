import dynamic from "next/dynamic";
import { Suspense } from "react";

const TestingComponent = dynamic(() => import("./testing"), { ssr: false });

const Testing = () => {
  return (
    <div className="h-[60vh] border-b ">
      <Suspense fallback={<Loading />}>
        <TestingComponent />
      </Suspense>
    </div>
  );
};

export default Testing;

function Loading() {
  return <div>Loading...</div>;
}
