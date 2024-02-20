/**
 * gsap.jsx
 */

"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

gsap.registerPlugin(ScrollTrigger);

const GSAP = ({ data }) => {
  const mainRef = useRef(null);
  const titleRef = useRef(null);
  const skyRef = useRef(null);
  const mountBgRef = useRef(null);
  const mountMgRef = useRef(null);
  const cloud2Ref = useRef(null);
  const mountFgRef = useRef(null);
  const cloud1Ref = useRef(null);
  const cloud3Ref = useRef(null);

  // const isMobile = useMediaQuery("(max-width: 768px)");

  useLayoutEffect(() => {
    gsap.set(".main", {
      position: "fixed",
      background: "#fff",
      width: "100%",
      maxWidth: "1200px",
      height: "100%",
      top: 0,
      left: "50%",
      x: "-50%",
    });

    gsap.set(".scrollDist", {
      width: "100%",
      height: "200%",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".scrollDist",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })
      .fromTo(".logo", { y: 0 }, { y: 1200 }, 0)
      .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
      .fromTo(".cloud1", { y: 0 }, { y: -600 }, 0)
      .fromTo(".cloud2", { y: 0 }, { y: -400 }, 0)
      .fromTo(".cloud3", { y: 0 }, { y: -550 }, 0)
      .fromTo(".mountBg", { y: 0 }, { y: -100 }, 0)
      .fromTo(".mountMg", { y: 0 }, { y: -300 }, 0)
      .fromTo(".mountFg", { y: 0 }, { y: -230 }, 0)
      .fromTo(".rectang", { y: 0 }, { y: -200 }, 0);
    // .fromTo(".title2",{ opacity: 0 }, { opacity: 1, y: 500 }, 0);
  }, []);

  return (
    <div className="bg-white pt-20    lg:pt-32   relative ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div
        ref={mainRef}
        className="h-[120vh] rounded-xl bg-blue-600 pt-[45vh]  lg:pt-32 md:pt-0   relative  w-full max-w-[1500px] mx-auto bg-dot-white/[0.6]"
      >
        <div className="absolute pointer-events-none rounded-xl inset-0 flex items-center justify-center dark:bg-black bg-blue-600 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute z-[99] rounde-b-xl w-full h-[50vh] lg:h-[43vh] bottom-0 bg-white  "></div>

        <div className="logo absolute z-[8] top-[16%] left-1/2 transform -translate-x-1/2 -translate-y-[16%]">
          <h1 className="text-5xl lg:text-8xl whitespace-nowrap font-extrabold text-center  text-white">
            {data?.heroTitle}
          </h1>
          <h3 className=" text-2xl lg:text-4xl font-semibold text-center text-gray-200">
            {data?.heroSubtitle}
          </h3>
        </div>
        <Image
          className="mountBg absolute z-[5]"
          src="https://assets.codepen.io/721952/mountBg.png"
          width="1500"
          height="800"
          alt="mountBg"
          ref={mountBgRef}
        />
        <Image
          className="mountMg absolute z-[10]"
          src="https://assets.codepen.io/721952/mountMg.png"
          width="1500"
          height="800"
          alt="mountMg"
          ref={mountMgRef}
        />
        <Image
          className="cloud2 absolute z-[21]"
          src="https://assets.codepen.io/721952/cloud2.png"
          width="1500"
          height="800"
          alt="cloud2"
          ref={cloud2Ref}
        />
        <Image
          className="mountFg absolute z-[12]"
          src="https://assets.codepen.io/721952/mountFg.png"
          width="1500"
          height="800"
          alt="mountFg"
          ref={mountFgRef}
        />
        <Image
          className="cloud1 absolute z-[23]"
          src="https://assets.codepen.io/721952/cloud1.png"
          width="1500"
          height="800"
          alt="cloud1"
          ref={cloud1Ref}
        />
        <Image
          className="cloud3 absolute z-[24]"
          src="https://assets.codepen.io/721952/cloud3.png"
          width="1500"
          height="800"
          alt="cloud3"
          ref={cloud3Ref}
        />
        {/* <h1
        ref={titleRef}
        className="title text-7xl font-extrabold leading-tight text-center"
      > */}
        {/* <h1 className="title absolute z-[8] text-7xl font-extrabold leading-tight top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-[20%] ">
        EXPLORE
      </h1> */}
        {/* <h1 className="title2 absolute z-[100] text-7xl text-blue-600 font-extrabold leading-tight bottom-[35%] left-1/2 transform -translate-x-1/2 -translate-y-[35%] ">
          EXPLORE
        </h1> */}
        <h3 className="absolute z-[100] text-xl text-blue-800 text-center font-extrabold leading-tight bottom-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[10%] ">
          {data?.heroQuote}
        </h3>
      </div>
    </div>
  );
};

export default GSAP;

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

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
