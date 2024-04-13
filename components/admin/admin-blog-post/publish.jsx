/**
 * components/admin/admin-blog-post/publish.jsx
 */

"use client";

import { changeVisibility } from "@/app/_actions";
import { cn } from "@/lib/utils";
import { ArrowDownToLine, ArrowUpToLine } from "lucide-react";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";
import { toast } from "sonner";

const Publish = ({ className, postId, isPublished }) => {
  const handleChangePublish = async () => {
    const res = await changeVisibility(postId, isPublished);
    if (res.ok) {
      toast.success(res.message);
    } else {
      toast.error("Error");
    }
  };

  return (
    <button onClick={handleChangePublish} className={cn(
      "w-full py-2 hover:bg-gray-100", className)}>
      {isPublished ? (
        <div className="flex items-center gap-1">
          <ArrowDownToLine className="h-4 w-4" />
          Unpublish
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <ArrowUpToLine className="h-4 w-4" />
          Publish
        </div>
      )}
    </button>
  );
};

export default Publish;
