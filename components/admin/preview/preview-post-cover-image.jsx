/**
 * post-cover-image.jsx
 */

"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const PreviewPostCoverImage = ({ coverImage, padding }) => {
  return (
    <>
      {coverImage && (
        <Image
          src={coverImage}
          alt={"cover-image"}
          fill
          className={cn("object-cover ", { "p-5": padding })}
          priority
        />
      )}
    </>
  );
};

export default PreviewPostCoverImage;
