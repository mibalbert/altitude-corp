/**
 * main-nav.jsx
 */

"use client";

import UserDropdown from "./nav-bits/user-dropdown";
import NavItems from "./nav-bits/nav-items";
// import SignInModal from "./nav-bits/SignInModal";
// import { usePathname, useRouter } from "next/navigation";
// import { Button } from "../ui/button";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const MainNav = ({ session }) => {
  // const router = useRouter();
  const pathname = usePathname();
  // if (pathname.includes("/admin") || pathname.includes("/summary")) {
  //   return <></>;
  // }

  if (pathname.includes("/sign-in")) {
    return (
      <section className="px-5 pt-10 lg:px-20 lg:pt-10">
        <Link href={"/"} className="flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2 " />
          Back
        </Link>
      </section>
    );
  }

  return (
    <section
      className={cn(
        `dark:supports-backdrop-blur:bg-black/30 supports-backdrop-blur:bg-white/30 
     z-[999] m-0 flex h-14 items-center border-b border-gray-200/30 p-0 shadow-gray-100/70 shadow-sm backdrop-blur-md
      dark:border-gray-800 dark:shadow-none lg:w-full`,
        "sticky top-0"
        // {
        //   "bg-blue-600 text-white shadow-none border-b-0": pathname === "/",
        // }
        // {
        //   "bg-[url('https://assets.codepen.io/721952/sky.jpg')] bg-cover bg-center":
        //     pathname === "/",
        // }
        // { "bg-blue-700 text-white border-none": pathname === "/" },
        // { "sticky top-0": pathname !== "/" }
        // { "absolute  top-0 left": pathname !== "/" },

        // { "sticky top-0": pathname !== "/" }
      )}
    >
      <div className=" flex h-full w-full items-center max-w-screen-2xl mx-auto md:px-7 justify-between ">
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold pl-3">
            Logo
          </Link>
        </div>
        <div className="hidden h-full space-x-4 items-center lg:flex">
          <NavItems session={session} />
          {session?.user ? (
            <UserDropdown session={session} />
          ) : (
            <></>
            // <div className="flex space-x-2">
            //   <SignInModal />
            //   <Button
            //     onClick={() => router.push("/auth/register")}
            //     variant="outline"
            //     className="border-neutral-300"
            //   >
            //     Register
            //   </Button>
            // </div>
          )}
        </div>
        <MobileNav session={session} />
      </div>
    </section>
  );
};

export default MainNav;
