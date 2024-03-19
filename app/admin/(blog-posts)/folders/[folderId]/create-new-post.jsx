/**
 * create-new-post.jsx
 */

"use client";

import { useRouter } from "next/navigation";
import { createPostUnderFolder } from "@/app/_actions";
import { toast } from "sonner";

const CreateNewPost = ({ folderId }) => {
  const router = useRouter();
  const handleCreateNewPost = async () => {
    try {
      const res = await createPostUnderFolder(folderId);

      if (res.ok) {
        toast(res.message);
        router.push(res.url);
      } else {
        toast(res.message);
      }
    } catch (error) {
      toast(JSON.stringify(error));
    }
  };
  return (
    <button
      onClick={handleCreateNewPost}
      className="flex items-center justify-center w-full md:w-[250px] md:h-[350px] border border-dashed rounded-lg"
    >
      +Add New Post
    </button>
  );
};

export default CreateNewPost;
