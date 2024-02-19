/**
 * testing/folder.jsx
 */

"use client";

import Link from "next/link";

import { useState } from "react";
import {
  createFolder,
  createPostUnderFolder,
  deleteFolder,
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
  File,
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
import { cn } from "@/lib/utils";

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
    <div className="flex flex-col ">
      <div className="grid grid-cols-5 items-center justify-center  gap-2 p-1  w-52   hover:bg-slate-50 rounded-lg">
        <button
          onClick={toggleCollapse}
          className="col-span-1 flex items-center justify-center hover:bg-slate-200 w-full py-1.5 h-full rounded-md"
        >
          {collapsed ? (
            <ChevronRight className="flex items-center justify-center w-5 h-5 " />
          ) : (
            <ChevronDown className="flex w-5 h-5 items-center justify-center " />
          )}
        </button>
        <Link href={`/admin/folders/${folder.id}`} className="col-span-3">
          {folder.title}
        </Link>
        <DropIt
          handleCreateFolder={handleCreateFolder}
          className="col-span-1"
          handleCreatePostUnderFolder={handleCreatePostUnderFolder}
        />
      </div>
      {!collapsed && (
        <div
          className="flex flex-col "
          style={{ paddingLeft: `${(level - 1) * 12 + 25}px` }}
        >
          {sortedPosts.map((post, idx) => (
            <div
              key={idx}
              className="grid grid-cols-5 items-center justify-center   p-1  gap-2 hover:bg-slate-50 rounded-lg"
            >
              <div className=" flex items-center justify-center col-span-1">
                <File className="w-4 h-4 " />
              </div>
              <Link
                key={post.id}
                href={`/admin/posts/${post.id}`}
                className=" flex items-center  line-clamp-1 text-nowrap  col-span-3 py-1  rounded-lg"
              >
                {post.title}
              </Link>
              <div className="col-span-1">
                <DropItPost
                  // className={"col-span-1"}
                  router={router}
                  postId={post.id}
                  postTitle={post.title}
                />
              </div>
            </div>
          ))}

          <RecursiveFolders parentFolder={folder.id} level={level + 1} />
        </div>
      )}
    </div>
  );
};

const DropIt = ({
  handleCreateFolder,
  folderId,
  folderTitle,
  currentPath,
  className,
  handleCreatePostUnderFolder,
}) => {
  const handleDeleteFolder = async () => {
    //Create pop up asking the user if they are sure
    const res = await deleteFolder(folderId, folderTitle, currentPath);
    if (res.ok) {
      router.push(res.url);
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "z-[101] flex items-center justify-center p-1.5 hover:bg-slate-200 rounded-md",
          className
        )}
      >
        <MoreVertical className="h-4 w-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-50 z-[102]"
        align="start"
        side="bottom"
        forceMount
      >
        <DropdownMenuItem>
          <div
            type="button"
            onClick={handleCreatePostUnderFolder}
            className="px-2 flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            <span>New Post</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div
            type="button"
            onClick={handleCreateFolder}
            className="px-2 flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            <span>New Folder</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div
            type="button"
            onClick={handleDeleteFolder}
            className="px-2 flex items-center gap-1"
          >
            <Minus className="w-4 h-4" />
            <span>Delete Folder</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="text-xs text-muted-foreground p-2">Last edited at:</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DropItPost = ({ postId, postTitle, currentPath, className }) => {
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
      <DropdownMenuTrigger
        className={cn(
          "z-[101]  flex items-center p-1.5 rounded-md justify-center hover:bg-slate-200",
          className
        )}
      >
        <MoreVertical className="h-4 w-4 " />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-32   z-[102]"
        align="start"
        side="bottom"
        forceMount
      >
        <DropdownMenuItem>
          <div
            type="button"
            onClick={handleDeletePost}
            className="px-2 flex items-center gap-1"
          >
            <Minus className="w-5 h-5" />
            <span>Delete</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="text-xs text-muted-foreground p-2">Last edited at:</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
