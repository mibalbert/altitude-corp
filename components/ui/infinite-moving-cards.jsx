"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "1320s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        // "scroller relative z-20  w-full overflow-hidden  [mask-image:linear-gradient-to-r from-transparent via-white/20 to-transparent)]",
        "scroller relative z-20  w-full overflow-hidden ",
        className
      )}
    >
      {/* <div className="absolute top-0 left-0 w-[10%] h-full bg-gradient-to-r from-white/50 to-transparent z-50 "></div>
      <div className="absolute top-0 right-0 w-[10%] h-full bg-gradient-to-l from-white/50 to-transparent z-50 "></div> */}
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap items-center",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className={cn(
              "w-[350px] shadow-md  shadow-gray-500 max-w-full  h-[200px] relative rounded-2xl border border-b-0 flex-shrink-0 border-blue-700 px-8 py-6 md:w-[450px]"
              // { "h-[400px]": idx % 2 }
            )}
            style={{
              background:
                "linear-gradient(180deg, var(--blue-600), var(--blue-700)",
            }}
            key={item.author}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm leading-[1.6] line-clamp-3 text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-gray-200 font-normal">
                    {item.author}
                  </span>
                  <span className=" text-sm leading-[1.6] text-gray-200 font-normal">
                    {item.company}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
