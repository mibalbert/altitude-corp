/**
 * edit/blog
 */

import { authOptions } from "@/lib/auth-options";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const EditBlog = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  return (
    <div className="pb-44  bg-dot-black/[0.2] p-10">
      <div className="py-3 w-full max-w-7xl mx-auto px-5 flex items-center justify-between">
        <h1 className="text-xl">Edit Blog page</h1>
        <div className="flex items-end gap-3">
          <Link href={"/admin/edit/blog?viewport=web"}>Web</Link>
          <Link href={"/admin/edit/blog?viewport=tablet"}>Tablet</Link>
          <Link href={"/admin/edit/blog?viewport=mobile"}>Mobile</Link>
        </div>
      </div>
      <iframe
        src="/blog?editorMode=true"
        loading="lazy"
        className={cn("w-full mx-auto h-screen", {
          "w-full": searchParams.viewport === "web",
          "max-w-2xl": searchParams.viewport === "tablet",
          "max-w-sm": searchParams.viewport === "mobile",
        })}
      ></iframe>
    </div>
  );
};

export default EditBlog;
