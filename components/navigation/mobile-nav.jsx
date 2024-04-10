/**
 * mobile-nav.jsx
 */

"use client";

import { useEffect, useState } from "react";
import { ViewVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getNavigationConfig } from "@/config/navigation"; 
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import MNav from "../admin/admin-sidenav/mm-nav";

export function MobileNav({ session }) {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const { topNav, sideNav } = getNavigationConfig(
    session?.user?.role || "GUEST"
  );

  const handleCloseNav = (e) => {
    setOpen(false);
    router.push(e);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [open]);



  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <ViewVerticalIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0  z-[9999] md:px-10">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] px-[26px] "> 
          <>
            <div className="flex flex-col  space-y-3 w-full pt-10 ">
              <div className="">
                <h1 className="text-xl  font-extrabold  text-white">
                  ALTITUDE CORP
                </h1>
                <h3 className=" text-md  font-semibold text-blue-600">
                  CLIMB HIGHER
                </h3>
              </div>
              <hr className="my-10"></hr>
              {topNav?.map((item, idx) => {
                return ( 
                  <button
                    key={idx}
                    className={cn("text-lg text-start", {
                      "underline underline-offset-4": pathname === item.href,
                    })}
                    onClick={() => handleCloseNav(item.href)}
                  > 
                    {item.title}
                  </button>
                );
              })}
              <MNav />
            </div>
          </>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
