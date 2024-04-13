/**
 * components/admin/admin-sidenav/website-pages.jsx
 */

"use client";


import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown, Edit } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const WebsitePages = () => {

  const [open, setOpen] = useState(false);
  const pathname = usePathname()

  console.log(pathname)

  useEffect(() => {
    if (pathname.startsWith('/admin/edit')) setOpen(true)
  }, [pathname])

  return (
    <Collapsible open={open} onOpenChange={setOpen} className={cn("border rounded-lg border-gray-400 transition-transform duration-200 ", { "border-none": !open })}>
      <CollapsibleTrigger className={cn("w-full px-4 py-2 text-left border rounded-lg border-gray-400 flex items-center justify-between", { "border-none": open })}>
        <div>
          Edit Pages
        </div>

        <ChevronsUpDown className="w-4 h-4" />
        {/* {
          open ?
            <div>
              v
            </div> :
            <div>
              {`>`}
            </div>
        } */}
      </CollapsibleTrigger>
      <CollapsibleContent className=" flex flex-col space-y-0.5 pb-2 px-2 transition-transform duration-200">
        <hr className="max-w-[93%] mx-auto w-full " />

        <Link
          href="/admin/edit/home"
          className={cn("flex items-center gap-2 px-3 py-1.5 hover:bg-slate-200   h-full rounded-md", {
            "bg-slate-200": pathname === "/admin/edit/home"
          })}
        // className={cn("ml-4 px-2 py-1", {
        //   "underline underline-offset-2 underline-blue-600 w-52 rounded-lg hover:bg-gray-100 my-1.5  bg-gray-50/50":
        // params.pageSlug === "home",
        // })}
        >
          Home
        </Link>
        <Link
          href="/admin/edit/blog"
          className={cn("flex items-center gap-2 px-3 py-1.5 hover:bg-slate-200   h-full rounded-md", {
            "bg-slate-200": pathname === "/admin/edit/blog"
          })}
        // className={cn("ml-4 px-2 py-1", {
        //   "underline underline-offset-2 underline-blue-600 w-52 rounded-lg hover:bg-gray-100 my-1.5 bg-gray-50/50":
        // params.pageSlug === "blog",
        // })}
        >
          Blog
        </Link>
        <Link
          href="/admin/edit/services"
          className={cn("flex items-center gap-2 px-3 py-1.5 hover:bg-slate-200   h-full rounded-md", {
            "bg-slate-200": pathname === "/admin/edit/services"
          })}
        // className={cn("ml-4 px-2 py-1", {
        //   "underline underline-offset-2 underline-blue-600 w-52 rounded-lg hover:bg-gray-100 my-1.5 bg-gray-50/50":
        // params.pageSlug === "services",
        // })}
        >
          Services
        </Link>
        <Link
          href="/admin/edit/resources"
          className={cn("flex items-center gap-2 px-3 py-1.5 hover:bg-slate-200   h-full rounded-md", {
            "bg-slate-200": pathname === "/admin/edit/resources"
          })}
        // className={cn("ml-4 px-2 py-1", {
        //   "underline underline-offset-2 underline-blue-600 w-52 rounded-lg hover:bg-gray-100 my-1.5 bg-gray-50/50":
        // params.pageSlug === "resources",
        // })}
        >
          Resources
        </Link>
        <Link
          href="/admin/edit/faq"
          className={cn("flex items-center gap-2 px-3 py-1.5 hover:bg-slate-200   h-full rounded-md", {
            "bg-slate-200": pathname === "/admin/edit/faq"
          })}
        // className={cn("ml-4 px-2 py-1", {
        //   "underline underline-offset-2 underline-blue-600 w-52 rounded-lg hover:bg-gray-100 my-1.5 bg-gray-50/50":
        // params.pageSlug === "faq",
        // })}
        >
          FAQ
        </Link>
        <Link
          href="/admin/edit/about-us"
          className={cn("flex items-center gap-2 px-3 py-1.5 hover:bg-slate-200   h-full rounded-md", {
            "bg-slate-200": pathname === "/admin/edit/about-us"
          })}
        // className={cn("ml-4 px-2 py-1", {
        //   "underline underline-offset-2 underline-blue-600 w-52 rounded-lg hover:bg-gray-100 my-1.5 bg-gray-50/50":
        // params.pageSlug === "about-us",
        // })}
        >
          About Us
        </Link>
        <Link
          href="/admin/edit/contact-us"
          className={cn("flex items-center gap-2 px-3 py-1.5 hover:bg-slate-200   h-full rounded-md", {
            "bg-slate-200": pathname === "/admin/edit/contact-us"
          })}
        // className={cn("ml-4 px-2 py-1", {
        //   "underline underline-offset-2 underline-blue-600 w-52 rounded-lg hover:bg-gray-100 my-1.5 bg-gray-50/50":
        // params.pageSlug === "contact-us",
        // })}
        >
          Contact Us
        </Link>
        {/* <div className="py-1.5 text-sm">--Shared Components</div>
        <Link
          href="/admin/edit/contact-us"
          className={cn("ml-4 px-2 py-1", {
            "underline underline-offset-2 underline-blue-600 w-52 rounded-lg hover:bg-gray-100 my-1.5 bg-gray-50/50":
              params.pageSlug === "contact-us",
          })}
        >
          Contact Us
        </Link>
         */}

      </CollapsibleContent>

    </Collapsible>
  );
};

export default WebsitePages;
