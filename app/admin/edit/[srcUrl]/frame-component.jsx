/**
 * frame-component.jsx
 */

"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Monitor, Tablet, Smartphone, ExternalLink } from "lucide-react";

const FrameComp = ({ srcUrl, linkUrl }) => {
  const ref = useRef();
  const [viewport, setViewport] = useState("web");

  return (
    <div className="bg-dot-black/[0.25] py-5 px-10 min-h-[calc(100vh-3.5rem)]">
      <div className=" pb-6 w-full  mx-auto px-5 flex items-center justify-between">
        <h1 className="text-md">
          Editing: {srcUrl?.split("?")[0].split("/")[1].toUpperCase()}
        </h1>
        <div className="flex  items-center gap-2">
          <Link
            href={`/${linkUrl}`}
            target="_blank"
            className="flex items-center gap-1 bg-gray-50 rounded-md px-3 py-1.5 shadow-sm border"
          >
            <span className="text-md">Live</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setViewport("web")}
            className="bg-gray-50 rounded-md p-2  shadow-sm border"
          >
            <Monitor className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewport("tablet")}
            className="bg-gray-50 p-2 rounded-md  shadow-sm border"
          >
            <Tablet className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewport("mobile")}
            className="bg-gray-50 p-2 rounded-md  shadow-sm border"
          >
            <Smartphone className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className={cn("max-w-[80%] mx-auto w-full")}>
        <iframe
          ref={ref}
          id="myFrame"
          src={`${srcUrl}`}
          loading="lazy"
          className={cn(
            "w-full min-h-[50vh] mx-auto h-full shadow-lg border border-gray-300 bg-white ",
            {
              "max-w-[1280px] aspect-[16/9]": viewport === "web",
              "max-w-[992px] aspect-[16/12]": viewport === "tablet",
              "max-w-[420px] aspect-[9/16]": viewport === "mobile",
            }
          )}
        ></iframe>
      </div>
    </div>
  );
};

export default FrameComp;
