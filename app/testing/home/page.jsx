/**
 * home/blog
 */

import { authOptions } from "@/lib/auth-options";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import FrameComp from "../../admin/edit/[srcUrl]/frame-component";

const HomeEditor = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  return (
    <div className="w-full h-full">
      <div className=" pb-6 w-full max-w-7xl mx-auto px-5 flex items-center justify-between">
        <h1 className="text-xl">Edit Home page</h1>
        <div className="flex items-end gap-3">
          <Link href={"/admin/edit/home?viewport=web"}>Web</Link>
          <Link href={"/admin/edit/home?viewport=tablet"}>Tablet</Link>
          <Link href={"/admin/edit/home?viewport=mobile"}>Mobile</Link>
        </div>
      </div>
      <FrameComp searchParams={searchParams} srcUrl={"/?editorMode=true"} />
    </div>
  );
};

export default HomeEditor;
