/**
 * blog/[blogPostId]/page.jsx
 */

import LiveCoverImage from "@/components/admin/live-post/live-cover-image";
import LiveTitle from "@/components/admin/live-post/live-title";
import prisma from "@/lib/prismadb";
import dynamic from "next/dynamic";
import React from "react";

export const metadata = {
  title: "ALTITUDE CORP | Blog-Post",
  description: "Best company to help you grow",
};

const BlogPost = async ({ params }) => {
  const LiveEditor = dynamic(
    () => import("../../../components/admin/live-post/live-editor"),
    {
      ssr: false,
    }
  );
  const data = await prisma.post.findFirst({
    where: {
      id: params.blogPostId,
      isPublished: true,
    },
  });

  // console.log(first)

  // if (!data) {
  //   return (
  //     <div className="min-h-[90vh] h-full w-full flex items-center justify-center">
  //       Sorry This post: is not available / was deleted{" "}
  //     </div>
  //   );
  // }

  return (
    <section className="pb-[60vh]">
      <LiveCoverImage coverImage={data.coverImage} />
      <LiveTitle title={data.title} />
      <hr className="my-5 w-full max-w-2xl mx-auto" />
      <LiveEditor content={data.content} />
    </section>
  );
};

export default BlogPost;
