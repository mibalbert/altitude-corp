/**
 * app/admin/(blog-posts)/posts/[blogPostId]/page.jsx
 */

import UnderNav from "@/components/admin/admin-blog-post/undernav";
import prisma from "@/lib/prismadb";
import React from "react";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import MakeFeatured from "./make-featured";

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
  if (!data) {
    redirect("/admin");
  }

  return (
    <section className="pb-[10vh] pr-14">
      <UnderNav data={data} />
      <div className="flex w-full relative">
        <section className="w-full max-w-2xl relative mx-auto py-10">
          <PostEditor
            postId={params.blogPostId}
            initialContent={data.content}
          />
          {/* <div className="border lg:min-w-[290px] min-h-[450px] rounded-lg"> */}
        </section>
        <div className="border absolute top-0 right-0  w-[290px] max-h-[400px] rounded-lg mt-5 ">
          <div>Editor</div>
          <MakeFeatured postId={data.id} featuredStatus={data.isFeatured} />
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
