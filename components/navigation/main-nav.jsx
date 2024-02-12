/**
 * main-nav.jsx
 */

import UserDropdown from "./nav-bits/user-dropdown";
import NavItems from "./nav-bits/nav-items";
// import SignInModal from "./nav-bits/SignInModal";
// import { usePathname, useRouter } from "next/navigation";
// import { Button } from "../ui/button";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

const MainNav = ({ session }) => {
  // const router = useRouter();

  // if (pathname.includes("/admin") || pathname.includes("/summary")) {
  //   return <></>;
  // }

  return (
    <section
      className={cn(
        `dark:supports-backdrop-blur:bg-black/30 supports-backdrop-blur:bg-white/30 
     z-[999] m-0 flex h-14 items-center border-b border-gray-200/30 p-0 shadow-gray-100/70 shadow-sm backdrop-blur-md
      dark:border-gray-800 dark:shadow-none lg:w-full`,
        "sticky top-0"
        // { "bg-blue-700 text-white border-none": pathname === "/" },
        // { "sticky top-0": pathname !== "/" }
      )}
    >
      <div className=" flex h-full w-full max-w-screen-2xl mx-auto md:px-7 justify-between ">
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold ">
            Logo
          </Link>
        </div>
        <div className="hidden items-center space-x-4 lg:flex">
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
