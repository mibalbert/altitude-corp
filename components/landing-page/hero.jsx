// "use client";

import { useMemo } from "react";
import Image from "next/image";
import EditableComp from "../editableComp";

const Hero = ({ data, isEditable }) => {
  // const images = useMemo(
  //   () => ["mountBg", "mountMg", "cloud2", "mountFg", "cloud1", "cloud3"],
  //   []
  // );
  const images = [
    "mountBg",
    "mountMg",
    "cloud2",
    "mountFg",
    "cloud1",
    "cloud3",
  ];

  const heroTitle = data.find((el) => el.compName === "hero-title");
  const heroSubtitle = data.find((el) => el.compName === "hero-subtitle");

  return (
    <div className="lg:mb-12 px-3 sm:px-8 lg:px-12">
      <div className="relative w-full h-[75vh] overflow-hidden rounded-xl bg-blue-600 max-w-[1600px] mx-auto bg-dot-white/[0.6]">
        <div className="absolute pointer-events-none  inset-0 flex items-center justify-center   bg-gradient-to-t from-transparent   to-blue-600 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* {images.map((imageName, index) => (
          <div key={index} className="absolute w-full  flex items-end  h-full"> */}
        <Image
          alt={"mountBg"}
          // src={`https://assets.codepen.io/721952/${imageName}.png`}
          // src={`/land/mountBg.webp`}
          src={`https://mongo-blog.s3.eu-central-1.amazonaws.com/home/mountBg.webp`}
          className="object-cover  z-10"
          // width={1600}
          // height={600}
          fill
        />
        <Image
          alt={"mountMg"}
          // src={`https://assets.codepen.io/721952/${imageName}.png`}
          // src={`/land/mountMg.webp`}
          src={`https://mongo-blog.s3.eu-central-1.amazonaws.com/home/mountMg.webp`}
          className="object-cover z-[12]"
          // width={1600}
          // height={600}
          fill
        />
        <Image
          alt={"cloud2"}
          // src={`https://assets.codepen.io/721952/${imageName}.png`}
          // src={`/land/cloud2.webp`}
          src={`https://mongo-blog.s3.eu-central-1.amazonaws.com/home/cloud2.webp`}
          className="object-cover z-[13]"
          // width={1600}
          // height={600}
          fill
        />
        <Image
          alt={"mountFg"}
          // src={`https://assets.codepen.io/721952/${imageName}.png`}
          // src={`/land/mountFg.webp`}
          src={`https://mongo-blog.s3.eu-central-1.amazonaws.com/home/mountFg.webp`}
          className="object-cover z-[10]"
          // width={1600}
          // height={600}
          fill
        />
        {/* </div>
        ))} */}
        <div className="absolute top-0   w-full h-full left-0 z-[99] flex  items-center justify-center">
          <div className="p-5 lg:p-16 flex flex-col supports-backdrop-blur backdrop-blur-xl rounded-xl border bg-white/40 text-white border-blue-200 ">
            {/* <div className="p-5 lg:p-16 w-full flex flex-col supports-backdrop-blur backdrop-blur-xl  bg-white/40 text-white border-blue-200 "> */}
            <EditableComp
              isEditable={isEditable}
              comp={heroTitle}
              className={"drop-shadow-md shadow-gray-700"}
            />
            <EditableComp isEditable={isEditable} comp={heroSubtitle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* {images.map((imageName, index) => (
          <div key={index} className="absolute w-full h-full">
            <Image
              alt={imageName}
              src={`https://assets.codepen.io/721952/${imageName}.png`}
              className="object-cover object-center z-[99]"
              width={1600}
              height={600}
            />
          </div>
        ))} */
}
// /**
//  * gsap.jsx
//  */

// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { useMediaQuery } from "usehooks-ts";
// import { motion, useScroll, useTransform } from "framer-motion";

// const Hero = ({ data }) => {
//   const mainRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: mainRef,
//     offset: ["start end", "end start"],
//   });

//   const isMobile = useMediaQuery("(max-width: 768px)");

//   const transformTextY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     isMobile ? [-100, 500] : [-100, 400]
//   );

//   return (
//     <div className="lg:mb-12 px-3 sm:px-8 lg:px-12">
//       <div
//         ref={mainRef}
//         className="w-full h-[75vh] overflow-hidden   rounded-xl bg-blue-600   max-w-[1600px] mx-auto bg-dot-white/[0.6]"

//         // className="h-[120vh] rounded-xl bg-blue-600   lg:pt-32 md:pt-0     w-full max-w-[1600px] mx-auto bg-dot-white/[0.6]"
//       >
//         <div className="relative w-full h-full ">
//           <div className="absolute pointer-events-none  inset-0 flex items-center justify-center   bg-blue-600 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//           <motion.div
//             style={{
//               y: transformTextY,
//               x: "-50%",
//             }}
//             className="z-10  absolute     left-1/2  "
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl whitespace-nowrap font-extrabold text-center  text-white">
//               {data?.heroTitle}
//             </h1>
//             <h3 className=" text-2xl lg:text-4xl font-semibold text-center text-gray-200">
//               {data?.heroSubtitle}
//             </h3>
//           </motion.div>

//           <div className="relative flex bottom-0 left-0 pt-10 w-full h-full">
//             <div className="absolute bottom-0   lg:-bottom-[200px]">
//               <Image
//                 alt="mountBg"
//                 src={`https://assets.codepen.io/721952/mountBg.png`}
//                 className=" object-contain object-bottom"
//                 width={1600}
//                 height={600}
//               />
//             </div>
//             <div className="absolute bottom-0  lg:-bottom-[200px]">
//               <Image
//                 alt="mountMg"
//                 src={`https://assets.codepen.io/721952/mountMg.png`}
//                 className=" object-contain object-bottom"
//                 width={1600}
//                 height={600}
//               />
//             </div>
//             <div className="absolute bottom-0  lg:-bottom-[200px]">
//               <Image
//                 alt="cloud2."
//                 src={`https://assets.codepen.io/721952/cloud2.png`}
//                 className=" object-contain object-bottom"
//                 width={1600}
//                 height={600}
//               />
//             </div>
//             <div className="absolute bottom-0  lg:-bottom-[200px]">
//               <Image
//                 alt="mountFg"
//                 src={`https://assets.codepen.io/721952/mountFg.png`}
//                 className=" object-contain object-bottom z-50"
//                 width={1600}
//                 height={600}
//               />
//             </div>
//             <div className="absolute bottom-0  lg:-bottom-[200px]">
//               <Image
//                 alt="cloud1."
//                 src={`https://assets.codepen.io/721952/cloud1.png`}
//                 className="object-contain object-bottom z-50"
//                 width={1600}
//                 height={600}
//               />
//             </div>
//             <div className="absolute bottom-0  lg:-bottom-[200px]">
//               <Image
//                 alt="cloud3."
//                 src={`https://assets.codepen.io/721952/cloud3.png`}
//                 className=" object-contain object-bottom z-[99]"
//                 width={1600}
//                 height={600}
//               />
//             </div>
//           </div>
//         </div>
//         {/* <h3 className=" z-[100] text-xl text-blue-600 text-center font-extrabold leading-tight bottom-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[10%] ">
//           {data?.heroQuote}
//         </h3> */}
//       </div>
//     </div>
//   );
// };

// export default Hero;
