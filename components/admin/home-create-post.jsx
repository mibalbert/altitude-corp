/**
 * app/admin/create-post/page.jsx
 */

"use client";

import { createNewBlogPost } from "@/app/_actions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CreatePost = () => {
  const router = useRouter();
  const handleCreateNewBlogPost = async () => {
    const res = await createNewBlogPost();
    if (res.ok) {
      toast.success("My success toast");
      router.push(res.url);
    } else {
      toast.error("My error toast");
    }
  };
  return (
    <div className="flex flex-col min-h-max items-center justify-center w-full h-full">
      <h1>Create a new post</h1>
      <Button onClick={handleCreateNewBlogPost}>Create a new Blog Post</Button>
    </div>
  );
};

export default CreatePost;
