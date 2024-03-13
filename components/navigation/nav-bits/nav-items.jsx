/**
 * nav-items.jsx
 */

"use client";

import { getNavigationConfig } from "@/config/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown } from "lucide-react";

// pathname={pathname}
// const NavItems = ({ session, pathname }) => {
const NavItems = ({ session }) => {
  const { topNav } = getNavigationConfig(session?.user?.role ?? "GUEST");
  const pathname = usePathname();

  // if (session?.user?.role === "USER" && pathname.startsWith("/user/")) {
  //   return;
  // }

  if (session?.user) {
    return (
      <section className="flex items-center divide-x ">
        <Link href={"/admin"} className="text-sm px-2   ">
          Dashboard
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm flex px-2  items-center gap-1">
            <ChevronsUpDown className="h-4 w-4" />
            Website Pages
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-[9999]">
            {/* <DropdownMenuLabel>{session.user.email}</DropdownMenuLabel> */}
            <DropdownMenuItem asChild>
              <Link href={"/"}>Home</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={"/blog"}>Blog</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={"/services"}>Services</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={"/resources"}>Resources</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={"/faq"}>FAQ</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={"/about-us"}>About Us</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={"/contact-us"}>Contact Us</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    );
  }

  return (
    <nav className="m-0 mr-2 flex  h-full w-full  flex-1  gap-3  p-0">
      {topNav.map((el, idx) => {
        return (
          <Link
            key={idx}
            href={el.href}
            className="relative flex h-full w-full items-center justify-center whitespace-nowrap  px-3 text-sm hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <div
              className={cn(
                "absolute bottom-0 h-0.5 w-[100%] rounded-md bg-blue-600 hidden",
                {
                  block: pathname === el.href,
                }
              )}
            ></div>
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavItems;
