/**
 * folders/[folderId]/page.jsx
 */

import NoPosts from "@/components/admin/admin-blog-post/no-posts";
import prisma from "@/lib/prismadb";
import { FolderIcon, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import CreateNewPost from "./create-new-post";

const Folder = async ({ params }) => {
  const folderDetails = await prisma.folder.findFirst({
    where: {
      id: +params.folderId,
    },
  });

  const childFolders = await prisma.folder.findMany({
    where: {
      parentFolder: +params.folderId,
    },
  });

  const data = await prisma.post.findMany({
    where: {
      folderId: +params.folderId,
    },
  });

  if (!data.length) {
    return <NoPosts folderId={params.folderId} />;
  }

  return (
    <section className="space-y-10 pt-0.5 pb-20">
      <div className="flex items-center gap-1 px-5 ">
        /
        <FolderIcon className="w-4 h-4" /> {folderDetails?.title}
      </div>
      <div className="flex  flex-wrap  gap-12 px-5 mx-auto w-full">
        {childFolders.map((folder, idx) => {
          return (
            <Link
              href={`/admin/folders/${folder.id}`}
              key={idx}
              className="bg-white border rounded-lg shadow-md p-4 w-full md:w-[250px] md:h-[350px] relative"
            >
              <div
                className={
                  "absolute -top-2 -z-10 left-2 w-16 h-5 border-x border-t rounded-l-lg rounded-r-lg  "
                }
              ></div>
              {folder.title}
            </Link>
          );
        })}
        {data.map((post, idx) => (
          <Link
            href={`/admin/posts/${post.id}`}
            key={idx}
            className="bg-white border rounded-lg shadow-md p-4 w-full md:w-[250px] md:h-[350px] "
          >
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            {/* <p className="text-gray-600">{el.description}</p> */}
            {/* Add more content or styling as needed */}
          </Link>
        ))}
        <CreateNewPost folderId={params.folderId} />
      </div>
    </section>
  );
};

export default Folder;
