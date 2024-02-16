/**
 * components/admin/admin-sidenav/website-pages.jsx
 */

"use client";

import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

const WebsitePages = () => {
  const params = useParams();

  return (
    <Collapsible>
      <CollapsibleTrigger className="line-clamp-1 flex items-center gap-1 px-2 py-1">
        Edit Website Pages <ChevronsUpDown className="h-4 w-4" />
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col ">
        <Link
          href="/admin/edit/home"
          className={cn("ml-4 px-2 py-1", {
            "underline underline-offset-2 underline-blue-600":
              params.pageSlug === "home",
          })}
        >
          Home
        </Link>
        <Link
          href="/admin/edit/blog"
          className={cn("ml-4 px-2 py-1", {
            "underline underline-offset-2 underline-blue-600":
              params.pageSlug === "blog",
          })}
        >
          Blog
        </Link>
        <Link
          href="/admin/edit/services"
          className={cn("ml-4 px-2 py-1", {
            "underline underline-offset-2 underline-blue-600":
              params.pageSlug === "services",
          })}
        >
          Services
        </Link>
        <Link
          href="/admin/edit/resources"
          className={cn("ml-4 px-2 py-1", {
            "underline underline-offset-2 underline-blue-600":
              params.pageSlug === "resources",
          })}
        >
          Resources
        </Link>
        <Link
          href="/admin/edit/faq"
          className={cn("ml-4 px-2 py-1", {
            "underline underline-offset-2 underline-blue-600":
              params.pageSlug === "faq",
          })}
        >
          FAQ
        </Link>
        <Link
          href="/admin/edit/about-us"
          className={cn("ml-4 px-2 py-1", {
            "underline underline-offset-2 underline-blue-600":
              params.pageSlug === "about-us",
          })}
        >
          About Us
        </Link>
        <Link
          href="/admin/edit/contact-us"
          className={cn("ml-4 px-2 py-1", {
            "underline underline-offset-2 underline-blue-600":
              params.pageSlug === "contact-us",
          })}
        >
          Contact Us
        </Link>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default WebsitePages;
