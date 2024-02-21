/**
 * gsap.jsx
 */

"use client";

import { useRef } from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const HeroFramer = ({ data }) => {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end start"],
  });
  const transformTextY = useTransform(scrollYProgress, [0, 1], [-250, 800]);

  // const textY = useSpring(transformTextY, {
  //   stiffness: 10,
  //   damping: 4,
  //   restDelta: 0.001,
  // });

  return (
    <div className="bg-white pt-20    lg:pt-32   mb-44 ">
      {/* <div className="absolute pointer-events-none  top-32 inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      <div
        ref={mainRef}
        className="w-full h-[100vh] overflow-hidden   rounded-xl bg-blue-600   max-w-[1500px] mx-auto bg-dot-white/[0.6]"

        // className="h-[120vh] rounded-xl bg-blue-600   lg:pt-32 md:pt-0     w-full max-w-[1500px] mx-auto bg-dot-white/[0.6]"
      >
        <div className="relative w-full h-full">
          <motion.div
            style={{ y: transformTextY, x: "-50%" }}
            className="z-10  absolute     left-1/2  "
          >
            <h1 className="text-5xl lg:text-8xl whitespace-nowrap font-extrabold text-center  text-white">
              {data?.heroTitle}
            </h1>
            <h3 className=" text-2xl lg:text-4xl font-semibold text-center text-gray-200">
              {data?.heroSubtitle}
            </h3>
          </motion.div>

          <div className="relative flex top-0 left-0 w-full h-full">
            <div className="absolute">
              <Image
                alt="mountBg"
                src={`https://assets.codepen.io/721952/mountBg.png`}
                className=" object-contain object-center"
                width={1500}
                height={800}
              />
            </div>
            <div className="absolute">
              <Image
                alt="mountMg"
                src={`https://assets.codepen.io/721952/mountMg.png`}
                className=" object-contain object-center"
                width={1500}
                height={800}
              />
            </div>
            <div className="absolute">
              <Image
                alt="cloud2."
                src={`https://assets.codepen.io/721952/cloud2.png`}
                className=" object-contain object-center"
                width={1500}
                height={800}
              />
            </div>
            <div className="absolute">
              <Image
                alt="mountFg"
                src={`https://assets.codepen.io/721952/mountFg.png`}
                className=" object-contain object-center"
                width={1500}
                height={800}
              />
            </div>
            <div className="absolute">
              <Image
                alt="cloud1."
                src={`https://assets.codepen.io/721952/cloud1.png`}
                className="object-contain object-center z-50"
                width={1500}
                height={800}
              />
            </div>
            <div className="absolute">
              <Image
                alt="cloud3."
                src={`https://assets.codepen.io/721952/cloud3.png`}
                className=" object-contain object-center z-[99]"
                width={1500}
                height={800}
              />
            </div>
          </div>
        </div>
        {/* <h3 className=" z-[100] text-xl text-blue-800 text-center font-extrabold leading-tight bottom-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[10%] ">
          {data?.heroQuote}
        </h3> */}
      </div>
    </div>
  );
};

export default HeroFramer;

// /**
//  * components/landing-page/gsap.jsx
//  */

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const main = userRef(nu)

// <div class="main">
//   <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
//     <mask id="m">
//       <g class="cloud1">
//         <rect fill="#fff" width="100%" height="801" y="799" />
//         <image xlink:href="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800"/>
//       </g>
//     </mask>

//     <image class="sky" xlink:href="https://assets.codepen.io/721952/sky.jpg"  width="1200" height="590" />
//     <image class="mountBg" xlink:href="https://assets.codepen.io/721952/mountBg.png" width="1200" height="800"/>
//     <image class="mountMg" xlink:href="https://assets.codepen.io/721952/mountMg.png" width="1200" height="800"/>
//     <image class="cloud2" xlink:href="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800"/>
//     <image class="mountFg" xlink:href="https://assets.codepen.io/721952/mountFg.png" width="1200" height="800"/>
//     <image class="cloud1" xlink:href="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800"/>
//     <image class="cloud3" xlink:href="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800"/>
//     <text fill="#fff" x="350" y="200">EXPLORE</text>
//     <polyline class="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />

//     <g mask="url(#m)">
//       <rect fill="#fff" width="100%" height="100%" />
//       <text x="350" y="200" fill="#162a43">FURTHER</text>
//     </g>

//     <rect id="arrowBtn" width="100" height="100" opacity="0" x="550" y="220" style="cursor:pointer"/>
//   </svg>
// </div>

// const GSAP = () => {
//   const container = useRef(null);
//   const imagesRef = useRef([]);
//   const title1 = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true,
//       },
//     });

//     tl.to(title1.current, { y: 1000 }, 0)
//       .to(imagesRef.current[1], { y: -250 }, 0)
//       .to(imagesRef.current[2], { y: -255 }, 0)
//       .to(imagesRef.current[3], { y: -255 }, 0)
//       .to(imagesRef.current[4], { y: -255 }, 0)
//       .to(imagesRef.current[5], { y: -255 }, 0)
//       .to(imagesRef.current[6], { y: -255 }, 0)
//       .to(imagesRef.current[7], { y: -255 }, 0)
//       .to(imagesRef.current[8], { y: 755 }, 0)
//       .to(imagesRef.current[8], { y: -255 }, 0);

//     return () => {
//       // Clean up the animation
//       tl.kill(); // or tl.revert();
//     };
//   }, []);

//   return (
//     <div ref={container} className="relative h-[150vh]  overflow-hidden">
//       <div className="max-w-[1200px] w-full h-full mx-auto">
//         <div
//           ref={title1}
//           className="absolute text-5xl font-bold text-black z-0 -top-[15vh]"
//         >
//           EXPLORE
//         </div>
//         {/* <div
//         ref={(el) => (imagesRef.current[0] = el)}
//         className="absolute top-0 left-0 w-full h-screen bg-blue-600"
//       ></div> */}
//         <div
//           ref={(el) => (imagesRef.current[0] = el)}
//           // className="absolute top-0 left-0 w-full h-screen bg-blue-600"
//         >
//           <Image
//             class="sky"
//             src="https://assets.codepen.io/721952/sky.jpg"
//             width="1200"
//             height="590"
//             alt="img1"
//           />
//         </div>
//         <div
//           ref={(el) => (imagesRef.current[1] = el)}
//           style={{ position: "absolute",  }}
//           // className="absolute top-[50vh] left-0 transform -translate-y-1/2 w-full h-[30vh] lg:top-[70vh] lg:w-[90vw] lg:h-[90vh] z-10"
//           // className="absolute"
//         >
//           <Image
//             class="mountBg"
//             src="https://assets.codepen.io/721952/mountBg.png"
//             alt="img2"
//             width="1200"
//             height="800"
//             className="object-contain"
//             // fill
//           />
//         </div>
//         <div
//           ref={(el) => (imagesRef.current[2] = el)}
//           // className="absolute lg:top-[30vh] left-0 lg:w-[77vw] lg:h-[90vh] z-10"
//           // className="absolute"
//           style={{ position: "absolute" }}
//         >
//           <Image
//             class="mountMg"
//             src="https://assets.codepen.io/721952/mountMg.png"
//             width="1200"
//             height="800"
//             alt="img3"
//             className="object-contain"
//             // fill
//           />
//         </div>
//         <div
//           ref={(el) => (imagesRef.current[4] = el)}
//           // className="absolute lg:top-[30vh] right-0 lg:w-[80vw] lg:h-[90vh] z-20"
//           // className="absolute"
//           style={{ position: "absolute" }}
//         >
//           <Image
//             class="mountFg"
//             src="https://assets.codepen.io/721952/mountFg.png"
//             width="1200"
//             height="800"
//             alt="img5"
//             className="object-contain"
//             // fill
//           />
//         </div>
//         <div
//           ref={(el) => (imagesRef.current[5] = el)}
//           // className="absolute lg:top-[40vh] left-0 w-full lg:h-[100vh] z-50"
//           // className="absolute"
//           style={{ position: "absolute" }}
//         >
//           <Image
//             class="cloud1"
//             src="https://assets.codepen.io/721952/cloud1.png"
//             alt="img6"
//             width="1200"
//             height="800"
//             className="object-contain"
//             // fill
//           />
//         </div>
//         <div
//           ref={(el) => (imagesRef.current[6] = el)}
//           // className="absolute lg:top-[60vh] left-0 w-full lg:h-[90vh] z-50"
//           // className="absolute"
//           style={{ position: "absolute" }}
//         >
//           <Image
//             class="cloud3"
//             src="https://assets.codepen.io/721952/cloud3.png"
//             alt="img"
//             width="1200"
//             height="800"
//             className="object-contain"
//             // fill
//           />
//         </div>
//         <div className="absolute bottom-0 left-0 w-full h-[60vh] lg:h-[40vh] bg-gradient-b from-transparent  via-white to-white"></div>
//         <div className="absolute bottom-0 left-0 w-full h-[40vh] lg:h-[40vh] flex items-center justify-center text-3xl font-bold">
//           Nothing we cannot face.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GSAP;
