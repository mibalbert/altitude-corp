/**
 * admin/(website-pages)/edit/blog/page.jsx
 */

import React from "react";

import prisma from "@/lib/prismadb";
import BlogsPageHero from "@/components/admin/editor-mode/edit-blog-page/blogs-page/blogs-page-hero";
import FeaturedBlogList from "@/components/admin/editor-mode/edit-blog-page/blogs-page/featured-blog-list";
import CategBlogList from "@/components/admin/editor-mode/edit-blog-page/blogs-page/latest-in";
import ALotOfBlogPosts from "@/components/admin/editor-mode/edit-blog-page/blogs-page/explore-posts";
import SubscribeToNewsletter from "@/components/admin/editor-mode/edit-blog-page/blogs-page/subscribe-to-newsletter";
import SavingState from "@/components/admin/editor-mode/edit-blog-page/blogs-page/saving-status";

const EditBlog = async ({ searchParams }) => {
  const data = await prisma.blogPage.findMany();

  return (
    <div className="p-4 pb-44 ">
      {/* <div className="px-5 pb-5  space-y-10 py-10 border-2 border-dashed border-gray-300 rounded-xl">
        <div className="w-full flex items-center justify-between h-20">
          <div className="w">EditBlog</div>
          <SavingState />
        </div>
        <section> */}
          <BlogsPageHero data={data[0]} />
          <FeaturedBlogList data={data[0]} />
          <CategBlogList data={data[0]} />
          <ALotOfBlogPosts data={data[0]} />
          <div className="container">
            <hr></hr>
          </div>
          <SubscribeToNewsletter data={data[0]} />
        {/* </section>
      </div> */}
    </div>
  );
};

export default EditBlog;

{
  /* <div>Blog</div>
<div>Educational Content</div>
<div>Industry analysis</div>
<div>Newsletter SignUp</div>
<div>-Encourage visitors to subscribe for regular updates</div>
<div></div> */
}
