/**
 * edit/home
 */

import React from "react";
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

const EditHome = async () => {
  const data = await prisma.home.findMany({
    include: {
      reviews: true,
    },
  });
  return (
    <div className="px-5 pb-5 border-2 border-dashed border-gray-300 rounded-xl">
      <Hero data={data[0]} />
      <InfiniteMovingCardsDemo reviews={data[0].reviews} />
      <Elevator data={data[0]} />
      <PeaceOfMind data={data[0]} />
      <Numbers data={data[0]} />
      <TheSteps data={data[0]} />
      <Plans data={data[0]} />
      <Reviews data={data[0]} />
      <LandingFooter data={data[0]} />
    </div>
  );
};

export default EditHome;

// /**
//  * app/admin/(website-pages)/
//  */
// "use client";

// import Elevator from "@/components/admin/editor-mode/edit-landing-page/elevator";
// import Hero from "@/components/admin/editor-mode/edit-landing-page/hero";
// import LandingFooter from "@/components/admin/editor-mode/edit-landing-page/landing-footer";
// import Numbers from "@/components/admin/editor-mode/edit-landing-page/numbers";
// import PeaceOfMind from "@/components/admin/editor-mode/edit-landing-page/peace-of-mind";
// import Plans from "@/components/admin/editor-mode/edit-landing-page/plans";
// import { InfiniteMovingCardsDemo } from "@/components/admin/editor-mode/edit-landing-page/rev";
// import Reviews from "@/components/admin/editor-mode/edit-landing-page/reviews";
// import TheSteps from "@/components/admin/editor-mode/edit-landing-page/the-steps";
// import { ContactUsHero } from "@/components/contact-us/contact-us-hero";
// import prisma from "@/lib/prismadb";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { createPortal } from "react-dom";

// function MyComponent() {
//   return (
//     <div>
//       <p style={{ color: "red" }}>Testing to see if my component renders!</p>
//     </div>
//   );
// }

// const CustomIframe = ({ children, ...props }) => {
//   const [contentRef, setContentRef] = useState(null);

//   const mountNode = contentRef?.contentWindow?.document?.body;

//   return (
//     <iframe
//       {...props}
//       ref={setContentRef}
//       srcDoc={`<script src="https://cdn.tailwindcss.com"></script>`}
//     >
//       {mountNode && createPortal(children, mountNode)}
//     </iframe>
//   );
// };

// // const EditHome = async () => {
// const EditHome = () => {
//   //   const data = await prisma.home.findMany({
//   //     include: {
//   //       reviews: true,
//   //     },
//   //   });

//   return (
//     <div className="p-4 pb-44 ">
//       <iframe
//         src="/admin/edit/blog?editable=true"
//         className="w-full max-w-7xl mx-auto h-screen"
//       ></iframe>

//       {/* <CustomIframe
//         title="A custom made iframe"
//         className="w-full h-screen max-w-7xl mx-auto"
//       > */}
//       {/* <div className="px-5 pb-5 border-2 border-dashed border-gray-300 rounded-xl"> */}
//       {/* <Hero data={data[0]} />
//           <InfiniteMovingCardsDemo reviews={data[0].reviews} />
//           <Elevator data={data[0]} />
//           <PeaceOfMind data={data[0]} />
//           <Numbers data={data[0]} />
//           <TheSteps data={data[0]} />
//           <Plans data={data[0]} />
//           <Reviews data={data[0]} />
//           <LandingFooter data={data[0]} /> */}
//       {/* </div>
//       </CustomIframe> */}
//       {/* <ifame ></ifame> */}
//       {/* <div className="px-5 pb-5 border-2 border-dashed border-gray-300 rounded-xl">
//         <Hero data={data[0]} />
//         <InfiniteMovingCardsDemo reviews={data[0].reviews} />
//         <Elevator data={data[0]} />
//         <PeaceOfMind data={data[0]} />
//         <Numbers data={data[0]} />
//         <TheSteps data={data[0]} /> */}
//       {/* <Plans data={data[0]}/> */}
//       {/* <Reviews data={data[0]}/> */}
//       {/* <LandingFooter data={data[0]} /> */}
//       {/* </div> */}
//     </div>
//   );
// };

// export default EditHome;
