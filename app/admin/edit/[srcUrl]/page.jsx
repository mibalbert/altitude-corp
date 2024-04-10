/**
 * admin/edit/[srcUrl]/page.jsx
 */

import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import FrameComp from "./frame-component";

const EditPages = async ({ params }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  let url = params.srcUrl;
  if (url === "home") url = "";
  return (
    <div className="w-full h-full overflow-hidden">
      
      <FrameComp linkUrl={url} srcUrl={`/${url}?editorMode=true`} />
    </div>
  );
};

export default EditPages;
