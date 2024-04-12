/**
 * admin/page.jsx
 */

"use client"

import { useAdminSideNav } from "@/hooks/use-admin-sidebar";
import { cn } from "@/lib/utils";


// export const metadata = {
//   title: "ALTITUDE CORP | Admin | Home ",
//   description: "Best company to help you grow",
// };

export default  function AdminHome() {



  const isOpen = useAdminSideNav((state) => state.isOpen);
  // const postsData = await prisma.post.findMany()


  return (
    <section className={cn("w-full max-w-6xl mx-20", { "mx-auto ": !isOpen })}>
      <div className="flex py-16">
        <h1>Dashboard</h1>
        <div>View Subscribers</div>
      </div>
      <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-3 w-full gap-10">

        <div className="h-[400px] w-full border rounded-lg">
          <div className="h-2/3 w-full">
            <div className=" h-2/3 px-16 flex items-end justify-end">
              <div className="text-7xl">
                7</div>
            </div>
            <div className="h-1/3 px-10 text-center w-full flex   items-end ">
              <div className="text-5xl">
                Total Posts</div>
            </div>
          </div>
          <div className="h-1/3 flex items-center justify-center">
            <button className="w-full h-full">+Create new Post</button>
          </div>
        </div>
        <div className="h-[400px] w-full border rounded-lg">
          <div className="h-2/3 w-full">
            <div className=" h-2/3 px-16 flex items-end justify-end">
              <div className="text-7xl">
                7</div>
            </div>
            <div className="h-1/3 px-10 text-center w-full flex   items-end ">
              <div className="text-5xl">
                Total Posts</div>
            </div>
          </div>
          <div className="h-1/3 flex items-center justify-center">
            <button className="w-full h-full">+Create new Post</button>
          </div>
        </div>
        <div className="h-[400px] w-full border rounded-lg">
          <div className="h-2/3 w-full">
            <div className=" h-2/3 px-16 flex items-end justify-end">
              <div className="text-7xl">
                7</div>
            </div>
            <div className="h-1/3 px-10 text-center w-full flex   items-end ">
              <div className="text-5xl">
                Total Posts</div>
            </div>
          </div>
          <div className="h-1/3 flex items-center justify-center">
            <button className="w-full h-full">+Create new Post</button>
          </div>
        </div>
        {/* <div className="h-[400px]">
          <div>Total Subscribers</div>
          <div className="">7</div>
        </div>
        <div className="h-[400px]">
          <div>Total Views</div>
          <div className="">7</div>
        </div> */}

      </div>

    </section>
  );
}
