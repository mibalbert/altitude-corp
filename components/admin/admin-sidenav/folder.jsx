/**
 * testing/folder.jsx
 */

"use client";

import Link from "next/link";

import { useState } from "react";
import { createFolder, createPostUnderFolder } from "../../../app/_actions";
import { useRouter } from "next/navigation";
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
  MoreHorizontal,
  Plus,
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import RecursiveFolders from "./folders-and-files-list";

export const Folder = ({ folder, level }) => {
  const [collapsed, setCollapsed] = useState(true);

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
      router.push(res.newFolderId);
    }
  };

  const createPost = (folderId) => {
    const handleCreatePostUnderFolder = async (e) => {
      e.preventDefault();
      const res = await createPostUnderFolder(folderId);
      if (res.ok) {
        toast.success(res.message);
        router.push(`/admin/posts/${res.postId}`);
      }
    };

    return (
      <form onSubmit={handleCreatePostUnderFolder} className="">
        <button type="submit" className="border rounded-md px-2">
          + Post
        </button>
      </form>
    );
  };

  const DropIt = ({ handleCreateFolder }) => {
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
        >
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
          aD
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60"
        align="start"
        side="right"
        forceMount
      >
        {/* <DropdownMenuItem onClick={onArchive}> */}
        <DropdownMenuItem>
          <form onSubmit={handleCreateFolder}>
            <button type="submit" className="border rounded-md px-2">
              <Plus />
              Folder
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
    </DropdownMenu>;
  };

  return (
    <div
      className="flex flex-col"
      style={{ paddingLeft: `${level * 12 + 25}px` }}
    >
      <div className="flex items-center gap-1">
        <button onClick={toggleCollapse} className="flex items-center px-2">
          <span>
            {folder.posts.length > 0 ? (
              collapsed ? (
                <ChevronRight />
              ) : (
                <ChevronUp />
              )
            ) : null}
          </span>
        </button>
        <Link href={`/admin/folders/${folder.id}`}>
          <span>{folder.title}</span>
          <span>
            <DropIt handleCreateFolder={handleCreateFolder} />
          </span>
        </Link>
      </div>

      {!collapsed && (
        <div
          className="flex flex-col"
          style={{ paddingLeft: `${(level - 1) * 12 + 25}px` }}
        >
          {sortedPosts.map((post) => (
            <>
              <Link
                key={post.id}
                href={`/admin/posts/${post.id}`}
                className="border px-3"
              >
                {post.title}
              </Link>
            </>
          ))}
          <RecursiveFolders parentFolder={folder.id} level={level + 1} />
        </div>
      )}
    </div>
  );
};
