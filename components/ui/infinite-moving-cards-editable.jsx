"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Contenteditable from "../editor/content-editable";
import {
  changeReviewAuthor,
  changeReviewCompany,
  changeReviewQuote,
} from "@/app/actions/edit-web-pages/edit-home/_home-actions";

export const InfiniteMovingCardsEditable = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [reviews, setReviews] = useState(items || []);
  useEffect(() => {
    addAnimation();
  }, []);

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  const debounceChangeReviewQuote = debounce(async (id, newQuote) => {
    const res = await changeReviewQuote(id, newQuote);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeReviewAuthor = debounce(async (id, newAuthor) => {
    const res = await changeReviewAuthor(id, newAuthor);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeReviewCompany = debounce(async (id, newCompany) => {
    const res = await changeReviewCompany(id, newCompany);
    if (res.ok) {
      console.log(res.message);
    }
  });

  const handleReviewQuoteChange = (id, newQuote) => {
    setReviews((state) =>
      state.map((review) =>
        review.id === id ? { ...review, quote: newQuote } : review
      )
    );
    debounceChangeReviewQuote(id, newQuote);
  };

  const handleReviewAuthorChange = (id, newAuthor) => {
    setReviews((state) =>
      state.map((review) =>
        review.id === id ? { ...review, author: newAuthor } : review
      )
    );
    debounceChangeReviewAuthor(id, newAuthor);
  };

  const handleReviewCompanyChange = (id, newCompany) => {
    setReviews((state) =>
      state.map((review) =>
        review.id === id ? { ...review, company: newCompany } : review
      )
    );
    debounceChangeReviewCompany(id, newCompany);
  };

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // scrollerContent.forEach((item) => {
      //   const duplicatedItem = item.cloneNode(true);
      //   if (scrollerRef.current) {
      //     scrollerRef.current.appendChild(duplicatedItem);
      //   }
      // });

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
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        // "scroller relative z-20  w-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        "scroller relative z-20  w-full overflow-x-scroll ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap"
          // start && "animate-scroll ",
          // pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-blue-700 px-8 py-6 md:w-[450px]"
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
              {/* <span className=" relative z-20 text-sm leading-[1.6] line-clamp-3 text-gray-100 font-normal"> */}
              <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                <Contenteditable
                  onChange={(e) => handleReviewQuoteChange(item.id, e)}
                  value={reviews.find((el) => el.id === item.id).quote}
                />
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-gray-200 font-normal">
                    <Contenteditable
                      onChange={(e) => handleReviewAuthorChange(item.id, e)}
                      value={reviews.find((el) => el.id === item.id).author}
                    />
                  </span>
                  <span className=" text-sm leading-[1.6] text-gray-200 font-normal">
                    <Contenteditable
                      onChange={(e) => handleReviewCompanyChange(item.id, e)}
                      value={reviews.find((el) => el.id === item.id).company}
                    />
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
