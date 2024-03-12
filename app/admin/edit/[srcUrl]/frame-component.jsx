/**
 * frame-component.jsx
 */

"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const FrameComp = ({ srcUrl, linkUrl }) => {
  const ref = useRef();
  const [viewport, setViewport] = useState("web");
  const [height, setHeight] = useState("0px");
  const onLoad = () => {
    setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
  };

  return (
    // <AspectRatio ratio={16 / 9}>
    <>
      <div className=" pb-6 w-full  mx-auto px-5 flex items-center justify-between">
        <h1 className="text-md">Edit Home page</h1>
        <div className="flex items-end gap-3">
          <Link href={`/${linkUrl}`} target="_blank" className="flex">
            Live
            <Link1Icon />
          </Link>
          <Button onClick={() => setViewport("web")}>Web</Button>
          <Button onClick={() => setViewport("tablet")}>Tablet</Button>
          <Button onClick={() => setViewport("mobile")}>Mobile</Button>
        </div>
      </div>

      <div
        className={cn(
          " border  w-full rounded-md bg-dot-black/[0.25] p-10  h-[80vh]  overflow-hidden"
        )}
      >
        <iframe
          ref={ref}
          onLoad={onLoad}
          id="myFrame"
          // src="/?editorMode=true"
          src={srcUrl}
          // allowFullScreen
          loading="lazy"
          // style={{ paddingTop: "56.25%" }}
          className={cn(
            "w-full mx-auto h-full shadow-md shaodw-gray-900 border bg-white ",
            {
              "w-full": viewport === "web",
              "max-w-3xl": viewport === "tablet",
              "max-w-md": viewport === "mobile",
            }
          )}
        ></iframe>
      </div>
    </>
    // </AspectRatio>
  );
};

export default FrameComp;
