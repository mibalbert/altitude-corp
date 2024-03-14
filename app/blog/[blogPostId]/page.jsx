/**
 * blog/[blogPostId]/page.jsx
 */

import LiveCoverImage from "@/components/admin/live-post/live-cover-image";
import LiveTitle from "@/components/admin/live-post/live-title";
import prisma from "@/lib/prismadb";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Suspense } from "react";

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
      id: +params.blogPostId,
      isPublished: true,
    },
  });

  if (!data) {
    return (
      <div className="max-w-screen-md mx-auto w-full pt-20">
        <Link href={"/blog"} className="flex items-center gap-1 ">
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>
        <div className="min-h-[30vh] h-full w-full flex items-center justify-center pt-14">
          Sorry This post: is not available
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-screen-md mx-auto w-full pt-20 pb-[10vh] min-h-screen space-y-10">
      <Link href={"/blog"} className="flex items-center gap-1 ">
        <ArrowLeft className="h-4 w-4" /> All posts
      </Link>
      <LiveEditor content={data.content} />
    </section>
  );
};

export default BlogPost;
