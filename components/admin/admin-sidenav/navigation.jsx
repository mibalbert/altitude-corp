/**
 * components/admin/admin-sidenav/navigation.jsx
 */

"use client";

import {
  ChevronsLeft,
  Home,
  MenuIcon,
  Plus,
  PlusCircle,
  PlusCircleIcon,
  Search,
  Settings,
} from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useSearch } from "@/hooks/use-search";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import FoldersAndFiles from "./folders-and-files-list";
import { useSettings } from "@/hooks/use-settings";
import { Item } from "./item";
import { toast } from "sonner";
import { useAdminSideNav } from "@/hooks/use-admin-sidebar";
import { Button } from "@/components/ui/button";
import CreateFolderButton from "./create-folder-button";
import WebsitePages from "./website-pages";
import Link from "next/link";

export const Navigation = ({ children }) => {
  const settings = useSettings();
  const search = useSearch();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sidebarRef = useRef(null);

  const pathname = usePathname();

  const isOpen = useAdminSideNav((state) => state.isOpen);
  const onOpen = useAdminSideNav((state) => state.onOpen);
  const onClose = useAdminSideNav((state) => state.onClose);

  useLayoutEffect(() => {
    if (isMobile) {
      onClose;
    } else {
      onOpen;
    }
  }, [isMobile]);

  const handleCreate = () => {};

  return (
    <>
      {!pathname.startsWith("/admin/preview") ? (
        !isOpen ? (
          <aside
            ref={sidebarRef}
            className={cn(
              `transition-all ease-in-out duration-300 overflow-hidden sticky top-16 pb-32
            group/sidebar h-full  min-h-[calc(100vh-3.5rem)] bg-secondary overflow-y-auto  pt-16   flex w-60 flex-col z-[99]`,
              // isResetting && "transition-all ease-in-out duration-300",
              isMobile && "w-0"
            )}
          >
            <div
              onClick={onOpen}
              role="button"
              className={cn(
                "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2   group-hover/sidebar:opacity-100 transition"
                // isMobile && "opacity-100"
              )}
            >
              <ChevronsLeft className="h-6 w-6" />
            </div>
            <div>
              <Link href={"/admin"} className="flex items-center gap-2">
                <Home className="h-4 w-4" /> Dashboard
              </Link>
            </div>
            <hr className="my-4 w-52" />
            {/* <div>
              <Item
                label="Search"
                icon={Search}
                isSearch
                onClick={search.onOpen}
              />
            </div> */}
            <div className="mt-4 h-full ">
              {/* {children} */}
              <FoldersAndFiles />
              <CreateFolderButton />
            </div>
            <hr className="my-4 w-52" />
            <div>
              <WebsitePages />
            </div>
          </aside>
        ) : (
          <div className="relative h-full pt-3 px-2">
            <MenuIcon
              role="button"
              onClick={onClose}
              className="h-6 w-6 text-muted-foreground"
            />
          </div>
        )
      ) : null}
    </>
  );
};
