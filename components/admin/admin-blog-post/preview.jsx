import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

const Preview = ({ className, postId }) => {
  return (
    <Link
      href={`/admin/preview/${postId}`}
      className={cn("text-md flex items-center gap-1", className)}
    >
      <Eye className="h-4 w-4" /> Preview
    </Link>
  );
};

export default Preview;
