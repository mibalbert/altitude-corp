// "use client";

import { useMemo } from "react";
import Image from "next/image";
import EditableComp from "../editableComp";

const Hero = ({ data }) => {
  // const images = useMemo(
  //   () => ["mountBg", "mountMg", "cloud2", "mountFg", "cloud1", "cloud3"],
  //   []
  // );

  const heroTitle = data.find((el) => el.compName === "hero-title");
  const heroSubtitle = data.find((el) => el.compName === "hero-subtitle");

  return (
    <div className="lg:mb-12 px-3 sm:px-8 lg:px-12">
      <div className="relative w-full h-[75vh] overflow-hidden rounded-xl bg-blue-600 max-w-[1600px] mx-auto bg-dot-white/[0.6]">
        <div className="abosolute top-1/3 w-full h-full left-0 z-50 flex flex-col items-center justify-center">
          <EditableComp isEditable={false} comp={heroTitle} />
          <EditableComp isEditable={false} comp={heroSubtitle} />
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
