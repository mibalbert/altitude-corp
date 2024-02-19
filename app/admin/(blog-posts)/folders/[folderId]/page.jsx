/**
 * folders/[folderId]/page.jsx
 */


import { createPostUnderFolder } from "@/app/_actions";
import NoPosts from "@/components/admin/admin-blog-post/no-posts";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prismadb";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const Folder = async ({ params }) => {
  const data = await prisma.post.findMany({
    where: {
      folderId: +params.folderId,
    },
  });


  console.log(data);
  if (!data.length) {
    return (
      <NoPosts folderId={params.folderId} />      
    );
  }

  return <div></div>;
};

export default Folder;
