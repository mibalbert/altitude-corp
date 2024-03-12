/**
 * components/admin/admin-sidenav/navigation.jsx
 */

"use client";

import { ChevronsLeft, Home, MenuIcon } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useSearch } from "@/hooks/use-search";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import FoldersAndFiles from "./folders-and-files-list";
import { useSettings } from "@/hooks/use-settings";
import { useAdminSideNav } from "@/hooks/use-admin-sidebar";
import CreateFolderButton from "./create-folder-button";
import WebsitePages from "./website-pages";
import Link from "next/link";

export const Navigation = () => {
  const settings = useSettings();
  const search = useSearch();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sidebarRef = useRef(null);

  const pathname = usePathname();

  const isOpen = useAdminSideNav((state) => state.isOpen);
  const setToOpen = useAdminSideNav((state) => state.setToOpen);
  const setToClosed = useAdminSideNav((state) => state.setToClosed);

  // useLayoutEffect(() => {
  //   if (isMobile) {
  //     setToClosed;
  //   } else {
  //     setToOpen;
  //   }
  // }, [isMobile]);

  // useLayoutEffect(() => {
  //   if (isMobile) {
  //     setToClosed;
  //   } else {
  //     setToOpen;
  //   }
  // }, [isMobile, setToClosed, setToOpen]);

  return (
    <>
      {!pathname.startsWith("/admin/preview") ? (
        isOpen ? (
          <aside
            ref={sidebarRef}
            className={cn(
              `transition-all ease-in-out duration-300 overflow-hidden sticky top-16 
            group/sidebar h-min  bg-secondary overflow-y-auto  pt-16   flex w-52 flex-col z-[99]`,
              // isResetting && "transition-all ease-in-out duration-300",
              {
                "w-full h-full px-5 absolute top-14 left-0 bg-white z-50":
                  isMobile,
              }
            )}
          >
            <div
              onClick={setToClosed}
              role="button"
              className={cn(
                "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 group-hover/sidebar:opacity-100 transition"
                // isMobile && "opacity-100"
              )}
            >
              <ChevronsLeft className="h-6 w-6" />
            </div>
            <div>
              <Link href={"/admin"} className="flex items-center gap-2 px-3">
                <Home className="h-4 w-4" /> Dashboard
              </Link>
            </div>
            <hr className={cn("my-4 w-52", { "w-full ": isMobile })} />
            <div className=" h-full   ">
              <FoldersAndFiles
                className={cn(
                  "w-54 h-full overflow-auto overflow-y-auto max-h-[50vh]",
                  { "w-full ": isMobile }
                )}
              />
              <CreateFolderButton
                className={cn(
                  "flex items-center my-2 rounded-lg  gap-2 border w-52 min-h-[27px] text-sm py-2 px-3 hover:bg-gray-100 text-muted-foreground font-medium active:bg-primary/5 active:text-primary",
                  { "w-full ": isMobile }
                )}
              />
            </div>
            <hr className={cn("my-4 w-52", { "w-full ": isMobile })} />
            <div>
              <WebsitePages />
            </div>
          </aside>
        ) : (
          <div className=" absolute w-full h-7 top-14 left-0">
            <MenuIcon
              role="button"
              onClick={setToOpen}
              className="h-6 w-6 sticky top-24  text-muted-foreground"
            />
          </div>
        )
      ) : null}
    </>
  );
};
