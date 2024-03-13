/**
 * components/admin/admin-blog-post/page.jsx
 */

import React from "react";
import Publish from "./publish";
import Preview from "./preview";
import Link from "next/link";
import {
  ArrowUpRight,
  Dot,
  File,
  Folder as FolderIcon,
  Home,
} from "lucide-react";
import SavedStatus from "../post/saved-status";
import prisma from "@/lib/prismadb";
import { getParentFolders } from "@/hooks/use-get-parent-folders";

const UnderNav = async ({ data }) => {
  const op = await getParentFolders(data.folder.id);
  console.log(op);

  return (
    <div className="w-full flex items-center justify-between ">
      {/* <SavedStatus /> */}
      <div className="w-full  flex items-center gap-1  ">
        <Link
          href={"/admin"}
          className="flex items-center gap-1 py-1 px-3 hover:bg-gray-100 rounded-lg "
        >
          <Home className="h-4 w-4" />
          Dashboard
        </Link>
        <span>/</span>
        <Link
          href={`/admin/folders/${data.folder.id}`}
          className="flex items-center gap-1 py-1 px-3 rounded-lg hover:bg-gray-100"
        >
          <FolderIcon className="h-4 w-4" />
          {data.folder.title}
        </Link>
        <span>/</span>
        <span className="truncate flex items-center gap-1 p-1">
          <File className="w-4 h-4  " />
          {data.id}
        </span>
      </div>

      <div className="flex items-center divide-x">
        <Preview className=" px-1.5" postId={data.id} />
        <Publish
          className="px-1.5"
          postId={data.id}
          isPublished={data.isPublished}
        />
        {data.isPublished ? (
          <Link href={`/blog/${data.id}`} className="flex items-center px-1.5">
            <Dot className={"text-green-600 h-8 w-8"} />
            Live
            <ArrowUpRight className="h-4 w-4" />
            {/* <a href="/">Jp</a> */}
          </Link>
        ) : (
          <div className="flex items-center whitespace-nowrap  px-1.5">
            Not Live
            <Dot className={"text-gray-500 h-8 w-8"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UnderNav;
