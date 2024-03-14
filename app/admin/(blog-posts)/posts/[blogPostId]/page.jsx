/**
 * app/admin/(blog-posts)/posts/[blogPostId]/page.jsx
 */

import UnderNav from "@/components/admin/admin-blog-post/undernav";
import prisma from "@/lib/prismadb";
import React from "react";
import dynamic from "next/dynamic";

const BlogPost = async ({ params }) => {
  const PostEditor = dynamic(
    () => import("../../../../../components/admin/post/editor"),
    {
      ssr: false,
    }
  );
  const data = await prisma.post.findFirst({
    where: {
      id: +params.blogPostId,
    },
    include: {
      folder: true,
    },
  });



  return (
    <section className="pb-[10vh] ">
      <UnderNav data={data} />
      <div className="flex w-full">
        <section className="w-full max-w-2xl relative mx-auto py-10">
          <PostEditor
            postId={params.blogPostId}
            initialContent={data.content}
          />
          {/* <div className="border lg:min-w-[290px] min-h-[450px] rounded-lg"> */}
        </section>
        <div className="border  w-[290px] max-h-[400px] rounded-lg mt-5 mr-14">
          <div>Editor</div>
          <button className="w-full py-2 hover:bg-gray-100">
            Make Featured Blog Post
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
