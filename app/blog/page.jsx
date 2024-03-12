/**
 * blog/page.jsx
 */

import LatestPostsIn from "@/components/blogs-page/latest-in";
import BlogsPageHero from "@/components/blogs-page/blogs-page-hero";
import FeaturedBlogList from "@/components/blogs-page/featured-blog-list";
import ALotOfBlogPosts from "@/components/blogs-page/explore-posts";
import SubscribeToNewsletter from "@/components/blogs-page/subscribe-to-newsletter";
import prisma from "@/lib/prismadb";
import FreeResources from "@/components/blogs-page/free-resources";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

{
  /* <div>Blog</div>
<div>Educational Content</div>
<div>Industry analysis</div>
<div>Newsletter SignUp</div>
<div>-Encourage visitors to subscribe for regular updates</div>
<div></div> */
}

export const metadata = {
  title: "ALTITUDE CORP | Blog",
  description: "Best company to help you grow",
};

const Blog = async ({ searchParams }) => {
  const data = await prisma.blogPage.findMany();
  const blogPosts = await prisma.post.findMany();

  const featuredBlogPosts = blogPosts.filter((el) => {
    el.isFeatured;
  });

  const latestBlogPosts = blogPosts.sort((a, b) => a.createdAt - b.createdAt);

  const session = await getServerSession(authOptions);
  const isEditable = session?.user.role === "ADMIN";

  return (
    <section>
      <div className="bg-gradient-to-br from-blue-400 from-[10%] via-blue-600 via-[40%] to-blue-500 to-[95%]  py-32 space-y-20">
        <BlogsPageHero
          data={data[0]}
          editable={isEditable && searchParams.editorMode}
        />
        <FeaturedBlogList data={featuredBlogPosts} />
      </div>
      <LatestPostsIn data={data[0]} latestPostsIn={latestBlogPosts} />
      <ALotOfBlogPosts data={data[0]} blogPosts={blogPosts} />
      <div className="container">
        <hr></hr>
      </div>
      <SubscribeToNewsletter data={data[0]} />
      <FreeResources data={data[0]} />
    </section>
  );
};

export default Blog;
