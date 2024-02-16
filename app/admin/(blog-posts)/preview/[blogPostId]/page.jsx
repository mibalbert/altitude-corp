/**
 * admin/preview/[blogPostId]/page.jsx
 */
import dynamic from "next/dynamic";
import prisma from "@/lib/prismadb";
import React from "react";
import PreviewTitle from "@/components/admin/preview/preview-title";
import PreviewPostCoverImage from "@/components/admin/preview/preview-post-cover-image";

const PreviewBlog = async ({ params }) => {
  const PreviewPostEditor = dynamic(
    () => import("../../../../../components/admin/preview/preview-post-editor"),
    {
      ssr: false,
    }
  );
  const data = await prisma.post.findFirst({
    where: {
      id: params.blogPostId,
    },
  });
  return (
    <section className="space-y-10 pb-[70vh]">
      {data.coverImage && (
        <div className="w-full relative h-[40vh]">
          <PreviewPostCoverImage coverImage={data.coverImage} />
        </div>
      )}
      <PreviewTitle title={data.title} />
      <hr className="my-5 w-full max-w-2xl mx-auto" />
      <PreviewPostEditor content={data.content} />
    </section>
  );
};

export default PreviewBlog;
