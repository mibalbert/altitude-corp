/**
 * components/landing-page/gsap.jsx
 */

"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Picture1 from "../../public/parallax/1.jpg";
import Picture2 from "../../public/parallax/2.jpg";
import Picture3 from "../../public/parallax/3.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
const word = "with gsap";

{
  /* <div class="scrollDist"></div>
<div class="main">
  <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <mask id="m">
      <g class="cloud1">
        <rect fill="#fff" width="100%" height="801" y="799" />
        <image xlink:href="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800"/>
      </g>
    </mask>
    
    <image class="sky" xlink:href="https://assets.codepen.io/721952/sky.jpg"  width="1200" height="590" />
    <image class="mountBg" xlink:href="https://assets.codepen.io/721952/mountBg.png" width="1200" height="800"/>    
    <image class="mountMg" xlink:href="https://assets.codepen.io/721952/mountMg.png" width="1200" height="800"/>    
    <image class="cloud2" xlink:href="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800"/>    
    <image class="mountFg" xlink:href="https://assets.codepen.io/721952/mountFg.png" width="1200" height="800"/>
    <image class="cloud1" xlink:href="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800"/>
    <image class="cloud3" xlink:href="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800"/>
    <text fill="#fff" x="350" y="200">EXPLORE</text>
    <polyline class="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
    
    <g mask="url(#m)">
      <rect fill="#fff" width="100%" height="100%" />      
      <text x="350" y="200" fill="#162a43">FURTHER</text>
    </g>
    
    <rect id="arrowBtn" width="100" height="100" opacity="0" x="550" y="220" style="cursor:pointer"/>
  </svg>
</div> */
}

const GSAP = () => {
  const container = useRef(null);
  const images = [Picture1, Picture2, Picture3];
  const lettersRef = useRef([]);
  const imagesRef = useRef([]);
  const title1 = useRef(null);
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(title1.current, { y: 1000 }, 0)
        // .to(imagesRef.current[0], { y: -150 }, 0)
        .to(imagesRef.current[1], { y: -250 }, 0)
        .to(imagesRef.current[2], { y: -455 }, 0)
        .to(imagesRef.current[3], { y: -355 }, 0)
        .to(imagesRef.current[4], { y: -455 }, 0)
        .to(imagesRef.current[5], { y: -555 }, 0)
        .to(imagesRef.current[6], { y: -655 }, 0)
        .to(imagesRef.current[7], { y: -455 }, 0)
        .to(imagesRef.current[8], { y: 755 }, 0);
      // lettersRef.current.forEach((letter, i) => {
      //   tl.to(
      //     letter,
      //     {
      //       top: Math.floor(Math.random() * -75) - 25,
      //     },
      //     0
      //   );
      // });
    });
    return () => context.revert();
  }, []);

  return (
    <div ref={container} className="h-[150vh] mt-24">
      {/* <div className="ml-10">
        <h1 ref={title1} className="mt-10 text-5xl uppercase">
          Parallax
        </h1>
        <h1 className="text-5xl uppercase">Scroll</h1>
        <div className="text-white">
          <p className="mt-10 text-3xl uppercase">
            {word.split("").map((letter, i) => {
              return (
                <span key={`l_${i}`} ref={(el) => (lettersRef.current[i] = el)}>
                  {letter}
                </span>
              );
            })}
          </p>
        </div>
      </div> */}
      <div className="flex justify-center relative ">
        {/* {images.map((image, i) => {
          return (
            <div
              key={`i_${i}`}
              ref={(el) => (imagesRef.current[i] = el)}
              className={`absolute ${
                i === 0
                  ? "h-[60vh] w-[50vw] z-10"
                  : i === 1
                  ? "left-[55vw] top-[95vh] h-[40vh] w-[30vw] z-20"
                  : "left-[27.5vw] top-[120vh] h-[25vh] w-[20vw] z-30"
              }`}
            >
              <Image src={image} placeholder="blur" alt="image" fill />
            </div>
          );
        })} */}
        {/* <div
          ref={(el) => (imagesRef.current[0] = el)}
          className={`absolute top-[0vh] left-0 w-full h-[120vh]`}
        >
          <Image
            class="sky"
            src="https://assets.codepen.io/721952/sky.jpg"
            // width="1200"
            // height="590"
            alt="img1"
            fill
          />
        </div> */}
        <div
          ref={(el) => (imagesRef.current[1] = el)}
          className={`absolute top-[30vh] left-0 w-[90vw] h-[90vh] z-10`}
        >
          <Image
            class="mountBg"
            src="https://assets.codepen.io/721952/mountBg.png"
            alt="img2"
            className="object-contain"
            fill
          />
        </div>
        <div
          ref={(el) => (imagesRef.current[2] = el)}
          className={`absolute top-[30vh] left-0 w-[77vw] h-[90vh] z-10`}
        >
          <Image
            class="mountMg"
            src="https://assets.codepen.io/721952/mountMg.png"
            className="object-contain"
            alt="img3"
            fill
          />
        </div>
        {/* <div
          ref={(el) => (imagesRef.current[3] = el)}
          className={`absolute top-[10vh] right-0 z-10 w-[50vw] h-[90vh]`}
        >
          <Image
            class="cloud2"
            src="https://assets.codepen.io/721952/cloud2.png"
            className="object-contain"
            alt="img4"
            fill
          />
        </div> */}
        <div
          ref={(el) => (imagesRef.current[4] = el)}
          className={`absolute top-[30vh] right-0 w-[80vw] h-[90vh] z-20`}
        >
          <Image
            class="mountFg"
            src="https://assets.codepen.io/721952/mountFg.png"
            className="object-contain"
            alt="img5"
            fill
          />
        </div>
        <div
          ref={(el) => (imagesRef.current[5] = el)}
          className={`absolute top-[40vh] left-0 w-full h-[100vh] z-50`}
        >
          <Image
            class="cloud1"
            src="https://assets.codepen.io/721952/cloud1.png"
            className="object-contain"
            alt="img6"
            fill
          />
        </div>
        <div
          ref={(el) => (imagesRef.current[6] = el)}
          className={`absolute top-[60vh] left-0 w-full h-[90vh] z-50`}
        >
          <Image
            class="cloud3"
            src="https://assets.codepen.io/721952/cloud3.png"
            className="object-contain"
            alt="img"
            fill
          />
        </div>
        <div
          ref={(el) => (imagesRef.current[8] = el)}
          className="absolute text-5xl font-bold text-black z-0 -top-[15vh]"
        >
          EXPLORE
        </div>
        <div
          ref={(el) => (imagesRef.current[6] = el)}
          className="absolute top-[130vh] z-50 left-0 w-full h-[40vh] bg-gradient-b from-transparent  via-white to-white"
        ></div>
        <div className="absolute top-[100vh] h-[40vh] w-full z-50  flex items-center justify-center text-3xl font-bold">
          Nothing we cannot face.
        </div>
      </div>
    </div>
  );
};

export default GSAP;
