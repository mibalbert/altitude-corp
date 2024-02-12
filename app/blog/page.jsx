/**
 * blog/page.jsx
 */

import CategBlogList from "@/components/blogs-page/categ-blog-list";
import BlogsPageHero from "@/components/blogs-page/blogs-page-hero";
import FeaturedBlogList from "@/components/blogs-page/featuted-blog-list";
import ALotOfBlogPosts from "@/components/blogs-page/a-lot-of-blog-posts";
import SubscribeToNewsletter from "@/components/subscribe-to-newsletter";

{
  /* <div>Blog</div>
<div>Educational Content</div>
<div>Industry analysis</div>
<div>Newsletter SignUp</div>
<div>-Encourage visitors to subscribe for regular updates</div>
<div></div> */
}

const Blog = () => {
  return (
    <section>
      <BlogsPageHero />
      <FeaturedBlogList />
      <CategBlogList />
      <ALotOfBlogPosts />
      <div className="container">
        <hr></hr>
      </div>
      <SubscribeToNewsletter />
    </section>
  );
};

export default Blog;
