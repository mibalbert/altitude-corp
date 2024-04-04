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
import { usePathname, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Icons } from "../ui/incons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { usePageEditorPreview } from "@/hooks/use-set-page-editor-preview";

const MainNav = ({ session }) => {
  // const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);

  const isAdmin = session?.user.role === "ADMIN";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

  const searchParams = useSearchParams();
  const editorMode = searchParams.get("editorMode") && isAdmin;

  // if (pathname.includes("/admin") || pathname.includes("/summary")) {
  //   return <></>;
  // }

  // const { isPreview } = usePageEditorPreview();

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

  const whiteTextPaths = ["/blog", "/contact-us", "/about-us"];

  return (
    <>
      {!editorMode && (
        <section
          className={cn(
            "h-14  w-full   z-[998]  transition-all duration-200",
            {
              sticky: pathname.startsWith("/admin"),
            },
            {
              "text-white bg-blue-600": whiteTextPaths.includes(pathname),
            }
          )}
        >
          <div
            className={cn(
              " flex h-full w-full items-center pl-3 pr-2 md:px-10 lg:px-12 justify-between ",
              {
                "w-full max-w-screen-2xl mx-auto md:px-7":
                  !pathname.startsWith("/admin"),
              }
            )}
          >
            <div className="flex items-center">
              {pathname.startsWith("/admin") ? (
                <Link href={"/"} className="px-1.5">
                  ALTITUDE CORP.
                </Link>
              ) : (
                <Link
                  href="/"
                  className="text-lg font-bold w-16 h-full sm:w-16 relative "
                >
                  <Image
                    src={"/logo/logo-no-text.png"}
                    alt={"logo"}
                    width={100}
                    height={50}
                    className="object-cover object-center "
                  />
                </Link>
              )}
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
                //     variant="outline"w
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
      )}{" "}
    </>
  );
};

export default MainNav;

// <section
//   className={cn(
//     `dark:supports-backdrop-blur:bg-black/30 supports-backdrop-blur:bg-white/30
//  z-[999] m-0 flex h-14 items-center   p-0 shadow-gray-500/30 shadow-sm backdrop-blur-md
//   `,
//     // "sticky top-0",
//     { "bg-blue-600 text-white": pathname.includes("/contact-us") },
//     {
//       "bg-blue-600 text-white shadow-none border-none":
//         pathname.includes("/services"),
//     }
//     // {
//     //   "bg-blue-600 text-white shadow-none border-b-0": pathname === "/",
//     // }
//     // {
//     //   "bg-[url('https://assets.codepen.io/721952/sky.jpg')] bg-cover bg-center":
//     //     pathname === "/",
//     // }
//     // { "bg-blue-700 text-white border-none": pathname === "/" },
//     // { "sticky top-0": pathname !== "/" }
//     // { "absolute  top-0 left": pathname !== "/" },

//     // { "sticky top-0": pathname !== "/" }
//   )}
// >
