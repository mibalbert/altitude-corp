/**
 * post-cover-image.jsx
 */

"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { savePostCoverImage, savePostCoverImageUrl } from "@/app/_actions";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

const PostCoverImage = ({ postId, coverImage, padding }) => {
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    setIsUploading(true);
    var data = new FormData();
    data.append("file", acceptedFiles[0]);
    data.append("folderName", "blog");

    const res = await fetch("/api/s3-upload", {
      method: "POST",
      body: data,
    });

    const response = await res.json();
    if (response.success) {
      const res = await savePostCoverImageUrl(postId, response.url);
      // if (res.ok) {
      //   router.refresh();
      // }
      setIsUploading(false);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
  });

  return (
    <div
      className={cn(
        "w-full border  hover:cursor-pointer  hover:border-solid border-dashed hover:outline-none transform transition-all duration-100 hover:border-gray-500 hover:ring-gray-500 hover:ring-1 border-gray-300 rounded-xl relative h-[30vh]"
        // { "cursor-progress": isUploading }
      )}
    >
      {isUploading && (
        <Skeleton className="z-10 w-full h-full absolute top-0 left-0 bg-white/70 rounded-2xl cursor-progress" />
      )}
      <div
        {...getRootProps()}
        className="w-full h-full transform transition-all duration-1000 "
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="relative bg-grid-small-blue-600 w-full h-full ">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <p className="absolute z-50 text-2xl  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Drop the image here ...
            </p>
          </div>
        ) : (
          <div
            className={cn("relative group w-full h-full", {
              "bg-dot-blue-600": !coverImage,
            })}
          >
            <div
              className={cn(
                " absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
                { hidden: coverImage }
              )}
            ></div>
            <p className="absolute z-50 text-xl font-semibold   text-center top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2">
              {isUploading
                ? "Uploading..."
                : `Drag 'n' drop the cover image here, or click to select image`}
            </p>
            {coverImage && (
              <Image
                src={coverImage}
                alt={"cover-image"}
                fill
                className={"object-cover p-3 rounded-xl"}
                priority
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCoverImage;

// /**
//  * post-cover-image.jsx
//  */

// "use client"

// import React, {useCallback} from 'react'
// import {useDropzone} from 'react-dropzone'
// import Image from "next/image";
// import { cn } from "@/lib/utils";

// const PostCoverImage = ({ data, padding }) => {
//   return (
//     <Image
//       src={data.coverImage || "/placeholder.svg"}
//       alt={"cover-image"}
//       fill
//       className={cn("object-cover ", { "p-5": padding })}
//       priority
//     />
//   );
// };

// export default PostCoverImage;
