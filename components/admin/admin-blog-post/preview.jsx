import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React from "react";

const Preview = ({ className, postId, isPublished }) => {
  const linkHref = isPublished ? null : `/admin/preview/${postId}`;

  return (
    <>
      {
        isPublished ?
          <div title="You cannot preview the Blog Post if it is published." className={cn("text-md flex items-center gap-1 hover:cursor-default", className)}>
            <EyeOff className="h-4 w-4" /> Preview
          </div> :
          <Link
            href={linkHref}
            title={"Preview the Blog Post before posting it."}
            className={cn("text-md flex items-center gap-1", className)}
          >
            <Eye className="h-4 w-4" /> Preview
          </Link>
      }
    </>
  );
};

export default Preview;
