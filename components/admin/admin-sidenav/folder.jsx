/**
 * testing/folder.jsx
 */

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  changeFolderName,
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
  DropdownMenuSub,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  ChevronRight,
  File,
  Minus,
  MoreVertical,
  Plus,
  Folder as FolderIcon,
} from "lucide-react";
import { toast } from "sonner";
import RecursiveFolders from "./folders-and-files-list";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

export const Folder = ({ folder, level }) => {
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();
  const pathname = usePathname()


  useEffect(() => {
    const op = pathname.split('/')
    if (folder?.posts?.find(el => el.id === +op[op.length - 1])) setCollapsed(false)
    if (pathname.startsWith(`/admin/folders/${folder.id}`)) setCollapsed(false)

  }, [pathname])

  const isMobile = useMediaQuery("(max-width: 768px)");

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
      router.push(res.url);
      toast.success(res.message);
      setCollapsed(false)
    }
  };

  const handleCreatePostUnderFolder = async () => {
    const res = await createPostUnderFolder(folder.id);
    if (res.ok) {
      router.push(res.url);
      toast.success(res.message);
      setCollapsed(false)
    }
  };

  const handleChangeFolderName = async (e) => {
    e.preventDefault()
    let newFolderName = e.target.value

    const res = await changeFolderName(folder.id, newFolderName)
    if (res.ok) {
      toast.success(res.message);
    } else {
      toast.error(res.message)
    }
  }

  const handleDeleteFolder = async () => {
    const res = confirm(`Are you sure you want to delete the Folder '${folder.title}'?`)
    if (res) {
      const resp = await deleteFolder(folder.id, folder.title, '/admin/folders');
      if (resp.ok) {
        router.push(resp.url);
        toast.success(resp.message);
      } else {
        toast.error(resp.message);
      }
    }
  }

  return (
    <div className="flex flex-col ">
      <div
        className={cn(
          "flex items-center gap-1 p-1 group w-full  overflow-x-auto  hover:bg-slate-200 rounded-lg",
          { "bg-gray-200": pathname.startsWith(`/admin/folders/${folder.id}`) },
          { "w-full": isMobile }
        )}
      >
        <button
          onClick={toggleCollapse}
          className="flex items-center justify-center  hover:bg-slate-200  p-1 h-full rounded-md"
        >
          {collapsed ? (
            <ChevronRight className="flex items-center justify-center w-4 h-4 " />
          ) : (
            <ChevronDown className="flex w-4 h-4 items-center justify-center " />
          )}
        </button>
        <Link
          href={`/admin/folders/${folder.id}`}
          className="flex items-center gap-1 w-full truncate"
        >
          <div className=" py-1.5 px-1.5">
            <FolderIcon className="w-4 h-4" />
          </div>
          <div className="min-w-16">{folder.title}</div>
        </Link>
        <DropIt
          handleCreateFolder={handleCreateFolder}
          handleCreatePostUnderFolder={handleCreatePostUnderFolder}
          handleDeleteFolder={handleDeleteFolder}
          handleChangeFolderName={handleChangeFolderName}
          folderTitle={folder.title}

        />
      </div>
      {!collapsed && (
        <div className="flex flex-col" style={{ paddingLeft: `26px` }}>
          {sortedPosts.map((post, idx) => (
            <div
              key={idx}
              className={cn(
                "flex items-center w-full  group p-1 gap-1 hover:bg-slate-200 rounded-lg",
                { "bg-gray-300": pathname === `/admin/posts/${post.id}` },
                { "w-full": isMobile }
              )}
            >
              <Link
                key={post.id}
                href={`/admin/posts/${post.id}`}
                className=" flex items-center gap-1 w-full truncate text-nowrap"
              >
                <div className=" py-1.5 px-1.5">
                  <File className="w-4 h-4  " />
                </div>
                <div className="min-w-16">{post.title}</div>
              </Link>
              <DropItPost
                folderId={folder.id}
                folderTitle={folder.title}
                currentPath={'/admin/folders'}
                router={router}
                postId={post.id}
                postTitle={post.title}
              />
            </div>
          ))}
          <div
            type="button"
            onClick={handleCreatePostUnderFolder}
            className="flex items-center gap-1 p-1  w-full hover:cursor-pointer hover:bg-slate-200 rounded-lg "
          >
            <div className=" py-1.5 px-1.5">
              <Plus className="w-4 h-4 " />
            </div>
            <div className="min-w-16">Post</div>
          </div>
          <RecursiveFolders parentFolder={folder.id} level={level + 1} />
        </div>
      )
      }
    </div >
  );
};

const DropIt = ({
  handleCreateFolder,
  handleCreatePostUnderFolder,
  handleDeleteFolder,
  handleChangeFolderName,
  folderTitle,
  className,
}) => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "z-[101] flex items-center justify-center p-1.5 hover:bg-slate-300 rounded-md",
          className
        )}
      >
        <MoreVertical className="h-4 w-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-40 z-[102]"
        align="start"
        side="bottom"
        forceMount

      >
        <DropdownMenuSub className="">
          <input
            type="text"
            defaultValue={folderTitle}
            onBlur={handleChangeFolderName}
            className="px-3 py-1.5 z-50 w-full h-full"
          />
        </DropdownMenuSub>
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
        {/* <DropdownMenuSeparator />
        <div className="text-xs text-muted-foreground p-2">Last edited at:</div> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DropItPost = ({
  router,
  folderId,
  postId,
  postTitle,
  currentPath,
  className,
}) => {
  const handleDeletePost = async () => {
    const res = await deletePost(postId, postTitle, folderId, currentPath);
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
          "z-[101]  flex items-center p-1.5 rounded-md justify-center hover:bg-slate-300",
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
            <Minus className="w-4 h-4" />
            <span>Delete</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="text-xs text-muted-foreground p-2">Last edited at:</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
