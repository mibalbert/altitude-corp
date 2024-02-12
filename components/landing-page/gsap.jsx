/**
 * components/landing-page/gsap.jsx
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const GSAP = () => {
  const container = useRef(null);
  const imagesRef = useRef([]);
  const title1 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(title1.current, { y: 1000 }, 0)
      .to(imagesRef.current[1], { y: -250 }, 0)
      .to(imagesRef.current[2], { y: -455 }, 0)
      .to(imagesRef.current[3], { y: -355 }, 0)
      .to(imagesRef.current[4], { y: -455 }, 0)
      .to(imagesRef.current[5], { y: -555 }, 0)
      .to(imagesRef.current[6], { y: -655 }, 0)
      .to(imagesRef.current[7], { y: -455 }, 0)
      .to(imagesRef.current[8], { y: 755 }, 0)
      .to(imagesRef.current[8], { y: -555 }, 0);

    return () => {
      // Clean up the animation
      tl.kill(); // or tl.revert();
    };
  }, []);

  return (
    <div ref={container} className="relative h-[150vh] overflow-hidden">
      <div className="flex justify-center relative">
        <div
          ref={(el) => (imagesRef.current[0] = el)}
          className="absolute top-0 left-0 w-full h-screen bg-blue-600"
        >
          {/* <Image
            class="sky"
            src="https://assets.codepen.io/721952/sky.jpg"
            // width="1200"
            // height="590"
            alt="img1"
            fill
          /> */}
        </div>
        <div
          ref={(el) => (imagesRef.current[1] = el)}
          className="absolute top-[50vh] left-0 transform -translate-y-1/2 w-full h-[30vh] lg:top-[30vh] lg:w-[90vw] lg:h-[90vh] z-10"
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
          className="absolute lg:top-[30vh] left-0 lg:w-[77vw] lg:h-[90vh] z-10"
        >
          <Image
            class="mountMg"
            src="https://assets.codepen.io/721952/mountMg.png"
            className="object-contain"
            alt="img3"
            fill
          />
        </div>
        <div
          ref={(el) => (imagesRef.current[4] = el)}
          className="absolute lg:top-[30vh] right-0 lg:w-[80vw] lg:h-[90vh] z-20"
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
          className="absolute lg:top-[40vh] left-0 w-full lg:h-[100vh] z-50"
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
          className="absolute lg:top-[60vh] left-0 w-full lg:h-[90vh] z-50"
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
          ref={title1}
          className="absolute text-5xl font-bold text-black z-0 -top-[15vh]"
        >
          EXPLORE
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[60vh] lg:h-[40vh] bg-gradient-b from-transparent  via-white to-white"></div>
        <div className="absolute bottom-0 left-0 w-full h-[40vh] lg:h-[40vh] flex items-center justify-center text-3xl font-bold">
          Nothing we cannot face.
        </div>
      </div>
    </div>
  );
};

export default GSAP;
