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
        .to(title1.current, { y: -50 }, 0)
        .to(imagesRef.current[1], { y: -350 }, 0)
        .to(imagesRef.current[2], { y: -655 }, 0);
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
    <div ref={container} className="mt-10 min-h-[200vh]">
      <div className="ml-10">
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
      </div>
      <div className="flex justify-center relative mt-5">
        {images.map((image, i) => {
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
        })}
      </div>
    </div>
  );
};

export default GSAP;
