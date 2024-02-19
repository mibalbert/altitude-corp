/**
 *
 */

"use client";

import { createPostUnderFolder } from "@/app/_actions";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const NoPosts = ({ folderId }) => {
  const router = useRouter();

  const handleCreatePostUnderFolder = async () => {
    const res = await createPostUnderFolder(folderId);
    console.log(res);
    if (res.ok) {
      router.push(res.url);
      toast.success(res.message);
    }
  };
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4 py-52 overflow-hidden">
      <Image
        src="/error.png"
        height="300"
        width="300"
        alt="Error"
        className="dark:hidden"
        
      />
      <Image
        src="/error-dark.png"
        height="300"
        width="300"
        alt="Error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">No post found in this folder!</h2>
      <div
        type="button"
        onClick={handleCreatePostUnderFolder}
        className="bg-blue-600 text-white hover:cursor-pointer hover:bg-blue-700 flex items-center rounded-lg px-3 py-1.5"
      >
        <Plus className="mr-2 h-4 w-4 " />
        Create a new Post
      </div>
    </div>
  );
};

export default NoPosts;
