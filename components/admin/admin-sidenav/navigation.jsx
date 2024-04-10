/**
 * components/admin/admin-sidenav/navigation.jsx
 */

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { useSearch } from "@/hooks/use-search";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { useSettings } from "@/hooks/use-settings";
import { useAdminSideNav } from "@/hooks/use-admin-sidebar";
import { usePageEditorPreview } from "@/hooks/use-set-page-editor-preview";
import MNav from "./mm-nav";


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
          {!pathname.startsWith("/admin/preview") ? (
            isOpen ? (


              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ x: -208, opacity: 0 }}
                ref={sidebarRef}
                className={cn(
                  `transition-all ease-in-out duration-300 overflow-hidden pt-7  px-5 relative  
                  group/sidebar h-min  bg-secondary overflow-y-auto   min-w-56 max-w-64 flex-col z-[99] lg:flex hidden`
                )}
              >
                <div
                  onClick={setToClosed}
                  role="button"
                  className={cn(
                    "text-muted-foreground absolute  p-1.5 top-0.5 right-0  z-[999]   rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600  transition"
                    // isMobile && "opacity-100"
                  )}
                >
                  <ChevronsLeft className="w-4 h-4" />
                </div>
                <MNav />
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
