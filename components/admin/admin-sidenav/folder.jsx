/**
 * testing/folder.jsx
 */

"use client";

import Link from "next/link";

import { useState } from "react";
import {
  createFolder,
  createPostUnderFolder,
  deletePost,
} from "../../../app/_actions";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Minus,
  MoreHorizontal,
  MoreVertical,
  Plus,
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import RecursiveFolders from "./folders-and-files-list";
import PostTitle from "../admin-blog-post/post-title";

export const Folder = ({ folder, level }) => {
  const [collapsed, setCollapsed] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const sortedPosts = folder.posts?.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const handleCreateFolder = async (e) => {
    e.preventDefault();
    const res = await createFolder(folder.id);
    if (res.ok) {
      toast.success(res.message);
      router.push(res.url);
    }
  };

  const handleCreatePostUnderFolder = async () => {
    const res = await createPostUnderFolder(folder.id);
    if (res.ok) {
      router.push(res.url);
      toast.success(res.message);
    }
  };

  return (
    <div
      className="flex flex-col"
      // style={{ paddingLeft: `${level * 12 + 25}px` }}

      // style={{ paddingLeft: `${(level - 1) * 12 + 25}px` }}
    >
      <div
        className="flex items-center justify-between gap-1"
        // style={{ paddingLeft: `${level * 12 + 25}px` }}
      >
        <button onClick={toggleCollapse} className="flex items-center">
          <span>
            {/* {folder.posts.length > 0 ? ( */}
            {collapsed ? <ChevronRight /> : <ChevronDown />}
          </span>
        </button>
        <Link href={`/admin/folders/${folder.id}`} className=" ">
          <span>{folder.title}</span>
        </Link>
        {/* <span>ASD</span> */}
        <DropIt handleCreateFolder={handleCreateFolder} />
      </div>

      {!collapsed && (
        <div
          className="flex flex-col"
          // style={{ paddingLeft: `${(level + 1) * 12 + 25}px` }}
        >
          {sortedPosts.map((post, idx) => (
            <div key={idx} className="flex items-center  justify-between">
              <Link
                key={post.id}
                href={`/admin/posts/${post.id}`}
                // style={{ paddingLeft: `${(level + 1) * 12 + 25}px` }}
                className="border px-3  line-clamp-1"
              >
                {post.title}
              </Link>
              <DropItPost
                router={router}
                postId={post.id}
                postTitle={post.title}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleCreatePostUnderFolder}
            className="border rounded-md px-2"
          >
            + Post
          </button>
          <RecursiveFolders parentFolder={folder.id} level={level + 1} />
        </div>
      )}
    </div>
  );
};

const DropItPost = ({ postId, postTitle, currentPath }) => {
  const handleDeletePost = async () => {
    const res = await deletePost(postId, postTitle, currentPath);
    if (res.ok) {
      router.push(res.url);
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="z-[101]">
        {/* <div
        role="button"
        className="h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
      > */}
        <MoreVertical className="h-4 w-4 text-muted-foreground" />
        {/* </div> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60   z-[102]"
        align="start"
        side="right"
        forceMount
      >
        {/* <DropdownMenuItem onClick={onArchive}> */}
        <DropdownMenuItem>
          <button
            type="button"
            onClick={handleDeletePost}
            className="border rounded-md px-2 flex items-center gap-1"
          >
            <Minus className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="text-xs text-muted-foreground p-2">Last edited at:</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
const DropIt = ({ handleCreateFolder }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="z-[101]">
        {/* <div
        role="button"
        className="h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
      > */}
        <MoreVertical className="h-4 w-4 text-muted-foreground" />
        {/* </div> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60   z-[102]"
        align="start"
        side="right"
        forceMount
      >
        {/* <DropdownMenuItem onClick={onArchive}> */}
        <DropdownMenuItem>
          <form onSubmit={handleCreateFolder}>
            <button
              type="submit"
              className="border rounded-md px-2 flex items-center gap-1"
            >
              <Plus className="w-4 h-4" />
              <span>Folder</span>
            </button>
          </form>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash className="h-4 w-4 mr-2" />
          Delete
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="text-xs text-muted-foreground p-2">Last edited at:</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
