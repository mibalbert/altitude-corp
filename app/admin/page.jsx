/**
 * admin/page.jsx
 */

import prisma from "@/lib/prismadb";

export const metadata = {
  title: "ALTITUDE CORP | Admin | Home ",
  description: "Best company to help you grow",
};

export default async function AdminHome() {


  const postsData = await prisma.post.findMany()
 

  return (
    <section>
      <div className="flex ">
        <h1>Dashboard</h1>
        <div>View Subscribers</div>
      </div>
      <div>
        <div className="p-10 rounded-lg border max-w-sm">{postsData?.length}</div>
      </div>


    </section>
  );
}
