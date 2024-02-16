/**
 * components/admin/admin-blog-post/page.jsx
 */

import React from "react";
import Publish from "./publish";
import Preview from "./preview";
import Link from "next/link";
import { ArrowUpRight, Dot } from "lucide-react";
import SavedStatus from "../post/saved-status";

const UnderNav = ({ data }) => {
  return (
    <div className="py-3 w-full flex items-center justify-between lg:px-10">
      <SavedStatus />
      <div className="flex items-center divide-x">
        {data.isPublished ? (
          <Link href={`/blog/${data.id}`} className="flex items-center px-1.5">
            <Dot className={"text-green-600 h-8 w-8"} />
            Live
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        ) : (
          <div className="flex items-center   px-1.5">
            <Dot className={"text-gray-500 h-8 w-8"} />
            Not Live
          </div>
        )}
        <Publish
          className="px-1.5"
          postId={data.id}
          isPublished={data.isPublished}
        />
        <Preview className=" px-1.5" postId={data.id} />
      </div>
    </div>
  );
};

export default UnderNav;
