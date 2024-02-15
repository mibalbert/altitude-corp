/**
 * components/admin/admin-blog-post/publish.jsx
 */

"use client";

import { changeVisibility } from "@/app/_actions";
import { revalidatePath } from "next/cache";
import React from "react";
import { toast } from "sonner";

const Publish = ({ postId, isPublished }) => {
  const handleChangePublishing = async () => {
 
    const res = await changeVisibility(postId, isPublished);
    toast.success(res.message);
  };

  return (
    <button onClick={handleChangePublishing}>
      {!isPublished ? "Publish" : "Unpublish"}
    </button>
  );
};

export default Publish;
