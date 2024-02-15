/**
 * admin/page.jsx
 */

import prisma from "@/lib/prismadb";
import CreatePost from "@/components/admin/home-create-post";

export default async function AdminHome() {
  const posts = await prisma.post.findMany();

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
