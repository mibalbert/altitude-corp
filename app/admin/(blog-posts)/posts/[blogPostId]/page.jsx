/**
 * app/admin/(blog-posts)/posts/[blogPostId]/page.jsx
 */

import PostCoverImage from "@/components/admin/admin-blog-post/post-cover-image";
import PostTitle from "@/components/admin/admin-blog-post/post-title";
import UnderNav from "@/components/admin/admin-blog-post/undernav";
import prisma from "@/lib/prismadb";
import React from "react";
import dynamic from "next/dynamic";
import NewContentEditable from "@/components/admin/editor-mode/edit-landing-page/new-content-editable";

const BlogPost = async ({ params }) => {
  const PostEditor = dynamic(
    () => import("../../../../../components/admin/post/editor"),
    {
      ssr: false,
    }
  );
  const data = await prisma.post.findFirst({
    where: {
      id: params.blogPostId,
    },
  });

  return (
    <section className="pb-32 pt-3 px-5">
      <UnderNav data={data} />
      <PostCoverImage
        postId={params.blogPostId}
        coverImage={data.coverImage}
        padding={true}
      />

      <NewContentEditable />

      <section className="w-full py-5 ">
        <div className=" max-w-4xl mx-auto w-full">
          <PostTitle postId={params.blogPostId} initialTitle={data.title} />
        </div>
      </section>
      <section className="w-full py-5 ">
        <div className="max-w-3xl mx-auto w-full">
          <PostEditor
            postId={params.blogPostId}
            initialContent={data.content}
          />
        </div>
      </section>
      {/* <div className="h-[20vh]">Admin Footer</div> */}
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
