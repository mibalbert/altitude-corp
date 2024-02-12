/**
 * mobile-nav.jsx
 */

"use client";

import { useState } from "react";
import { ViewVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getNavigationConfig } from "@/config/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

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
      <SheetContent side="right" className="pr-0  md:px-10">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] px-[26px] ">
          <>
            {sideNav &&
              sideNav?.map((item, idx) => {
                return (
                  <div className="flex flex-col space-y-3 pt-5" key={idx}>
                    <h2 className="text-xl text-gray-200">{item.title}</h2>
                    {item.data.map((el, idx) => {
                      return (
                        <Link key={idx} href={item.href}>
                          {el.title}
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
          </>
          <hr className="my-10"></hr>
          <>
            <div className="flex flex-col  space-y-3 w-full ">
              <h2 className="text-xl text-gray-200">Webite Pages</h2>
              {topNav?.map((item, idx) => {
                return (
                  // <Link
                  //   key={idx}
                  //   href={item.href}
                  //   className="relative flex h-full w-full items-center justify-center whitespace-nowrap  px-3 text-sm hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
                  // >
                  //   <div
                  //     className={cn("absolute", {
                  //       "bottom-0 h-0.5 w-[100%] rounded-md  bg-blue-600":
                  //         pathname === item.href,
                  //     })}
                  //   ></div>
                  //   {item.title}
                  // </Link>
                  <button
                    key={idx}
                    className={cn("text-lg text-start", {
                      "underline underline-offset-4": pathname === item.href,
                    })}
                    onClick={() => handleCloseNav(item.href)}
                  >
                    {/* <div
                      className={cn("absolute", {
                        "bottom-0 h-0.5 w-[100%] rounded-md  bg-blue-600":
                          pathname === item.href,
                      })}
                    ></div> */}
                    {item.title}
                  </button>
                );
              })}
            </div>
          </>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
