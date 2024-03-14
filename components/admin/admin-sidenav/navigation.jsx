/**
 * components/admin/admin-sidenav/navigation.jsx
 */

"use client";
import { motion, AnimatePresence } from "framer-motion";

import { ChevronsLeft, ChevronsRight, Home, MenuIcon } from "lucide-react";
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
import { usePageEditorPreview } from "@/hooks/use-set-page-editor-preview";

export const Navigation = () => {
  const settings = useSettings();
  const search = useSearch();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sidebarRef = useRef(null);

  const pathname = usePathname();

  const isOpen = useAdminSideNav((state) => state.isOpen);
  const setToOpen = useAdminSideNav((state) => state.setToOpen);
  const setToClosed = useAdminSideNav((state) => state.setToClosed);
  const { isPreview } = usePageEditorPreview();

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
      {!isPreview && (
        <AnimatePresence>
          {" "}
          {!pathname.startsWith("/admin/preview") ? (
            isOpen ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ x: -208, opacity: 0 }}
                // transition={{ ease: "easeOut", duration: 2 }}
                ref={sidebarRef}
                className={cn(
                  `transition-all ease-in-out duration-300 overflow-hidden pt-7  px-5 relative 
            group/sidebar h-min  bg-secondary overflow-y-auto  flex  min-w-56 max-w-64 flex-col z-[99]`
                  // isResetting && "transition-all ease-in-out duration-300",
                  // {
                  //   "w-full h-full px-5 absolute top-14 left-0 bg-white z-50":
                  //     isMobile,
                  // }
                )}
              >
                <div
                  onClick={setToClosed}
                  role="button"
                  className={cn(
                    "text-muted-foreground absolute  p-1.5 top-0 right-0  z-[999]   rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600  transition"
                    // isMobile && "opacity-100"
                  )}
                >
                  <ChevronsLeft className="w-4 h-4" />
                </div>
                <div>
                  <Link
                    href={"/admin"}
                    className="flex items-center gap-2 px-3"
                  >
                    <Home className="h-4 w-4" /> Dashboard
                  </Link>
                </div>
                <hr className={cn("my-4 ", { "w-full ": isMobile })} />
                <div className="h-full">
                  <h1 className="px-3 text-gray-300/40 pb-1 ">Blog Posts</h1>
                  <FoldersAndFiles
                    className={cn("w-full h-full overflow-auto ", {
                      "w-full ": isMobile,
                    })}
                  />
                  <CreateFolderButton
                    className={cn(
                      "flex items-center my-2 rounded-lg  gap-2 border w-full min-h-[27px] text-sm py-2 px-3 hover:bg-gray-100 text-muted-foreground font-medium active:bg-primary/5 active:text-primary",
                      { "w-full ": isMobile }
                    )}
                  />
                </div>
                <hr className={cn("my-4 w-full")} />
                <div>
                  <WebsitePages />
                </div>
              </motion.div>
            ) : (
              <div className="relative w-0 h-0">
                <div
                  role="button"
                  onClick={setToOpen}
                  className=" absolute p-1.5 top-0 left-0 w-[1.625rem] rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600  transition"
                >
                  <ChevronsRight className="h-4 w-4" />
                </div>
              </div>
            )
          ) : null}
        </AnimatePresence>
      )}
    </>
  );
};
