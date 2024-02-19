/**
 * blog/page.jsx
 */

import CategBlogList from "@/components/blogs-page/latest-in";
import BlogsPageHero from "@/components/blogs-page/blogs-page-hero";
import FeaturedBlogList from "@/components/blogs-page/featured-blog-list";
import ALotOfBlogPosts from "@/components/blogs-page/explore-posts";
import SubscribeToNewsletter from "@/components/blogs-page/subscribe-to-newsletter";
import prisma from "@/lib/prismadb";

{
  /* <div>Blog</div>
<div>Educational Content</div>
<div>Industry analysis</div>
<div>Newsletter SignUp</div>
<div>-Encourage visitors to subscribe for regular updates</div>
<div></div> */
}

const Blog = async () => {
  const data = await prisma.blogPage.findMany();

  return (
    <section>
      <BlogsPageHero data={data[0]} />
      <FeaturedBlogList data={data[0]} />
      <CategBlogList data={data[0]} />
      <ALotOfBlogPosts data={data[0]} />
      <div className="container">
        <hr></hr>
      </div>
      <SubscribeToNewsletter data={data[0]} />
    </section>
  );
};

export default Blog;
