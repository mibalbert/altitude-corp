/**
 * post-cover-image.jsx
 */

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const LiveCoverImage = ({ coverImage }) => {
  return (
    <>
      {coverImage ? (
        <div className="w-full h-[40vh] relative">
          <Image
            src={coverImage}
            alt={"cover-image"}
            fill
            className={cn("object-cover ")}
            priority
          />
        </div>
      ) : (
        <div className="py-10"></div>
      )}
    </>
  );
};

export default LiveCoverImage;
