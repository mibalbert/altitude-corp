/**
 * main-nav.jsx
 */

"use client";

import UserDropdown from "./nav-bits/UserDropdown";
import NavItems from "./nav-bits/NavItems";
// import SignInModal from "./nav-bits/SignInModal";
import { usePathname, useRouter } from "next/navigation";
// import { Button } from "../ui/button";
import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const MainNav = ({ session }) => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname.includes("/auth") || pathname.includes("/summary")) {
    return <></>;
  }

  return (
    <section
      className={cn(
        `dark:supports-backdrop-blur:bg-black/30 supports-backdrop-blur:bg-white/30 
     z-50 m-0 flex h-14 items-center border-b border-gray-200 p-0 shadow-gray-300 backdrop-blur-md
      dark:border-gray-800 dark:shadow-none lg:w-full`,
        { "bg-blue-700 text-white border-none": pathname === "/" },
        { "sticky top-0": pathname !== "/" }
      )}
    >
      <div className="mx-auto flex h-full w-[90%] max-w-7xl justify-between lg:w-full">
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold ">
            Logo
          </Link>
        </div>
        <div className="hidden items-center space-x-4 lg:flex">
          <NavItems session={session} pathname={pathname} />
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
