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
      id: +params.blogPostId,
    },
  });
  return (
    <section className="pb-[10vh] pt-10">
      <PreviewPostEditor content={data.content} />
    </section>
  );
};

export default PreviewBlog;
