/**
 * app/admin/(blog-posts)/posts/[blogPostId]/page.jsx
 */

import PostEditor from "@/components/admin/admin-blog-post/post-editor";
import Publish from "@/components/admin/admin-blog-post/publish";
import prisma from "@/lib/prismadb";
import Image from "next/image";
import React from "react";

const BlogPost = async ({ params }) => {
  const data = await prisma.post.findFirst({
    where: {
      id: params.blogPostId,
    },
  });

  return (
    <section className="pb-32">
      <Publish postId={data.id} isPublished={JSON.stringify(data.isPublished)} />

      <div className="w-full  h-[30vh] relative ">
        <Image
          src={data.coverImage || "/placeholder.svg"}
          alt={"cover-image"}
          fill
          className="object-cover"
        />
      </div>
      <section className="w-full py-10 ">
        <div className=" max-w-4xl mx-auto w-full">
          <input
            type="text"
            defaultValue={data?.title}
            placeholder="Enter the title of this post"
            className="text-5xl w-full"
          />
        </div>
      </section>
      <section className="w-full py-5 ">
        <div className="max-w-4xl mx-auto w-full   px-2">
          <PostEditor />
        </div>
      </section>
    </section>
  );
};

export default BlogPost;

// /**
//  * admin/(blog-posts)/posts/[blogPostId]/page.jsx
//  */

// import React from "react";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import { cn } from "@/lib/utils";

// const Blog = async ({ params, searchParams }) => {
//   const Editor = dynamic(
//     () => import("../../../../../components/admin/post/editor"),
//     {
//       ssr: false,
//     }
//   );

//   const data = await prisma.post.findFirst({
//     where: {
//       id: params.blogPostId,
//     },
//   });

//   return (
//     <section className="pb-32">
//       <pre>{JSON.stringify(searchParams, null, 2)}</pre>
//       {/* Navigation */}
//       <button>Publish</button>
//       {/* Post Details */}
//       <div className="w-full  h-[30vh] relative ">
//         <Image
//           src={data.coverImage || "/placeholder.svg"}
//           alt={"cover-image"}
//           fill
//           // className={cn("object-cover", {"object-fit": fit})}
//           className={cn("object-cover")}
//         />
//       </div>
//       <section className="w-full py-10 ">
//         <div className=" max-w-4xl mx-auto w-full">
//           <input
//             type="text"
//             defaultValue={data?.title}
//             placeholder="Enter the title of this post"
//             className="text-5xl w-full"
//           />
//         </div>
//       </section>
//       <section className="w-full py-5 ">
//         <div className="max-w-4xl mx-auto w-full   px-2">
//           <Editor />
//         </div>
//       </section>
//     </section>
//   );
// };

// export default Blog;
