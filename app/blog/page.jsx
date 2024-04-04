/**
 * blog/page.jsx
 */

import LatestPostsIn from "@/components/blogs-page/latest-in";
import BlogsPageHero from "@/components/blogs-page/blogs-page-hero";
import FeaturedBlogList from "@/components/blogs-page/featured-blog-list";
import AllOfThePosts from "@/components/blogs-page/all-of-the-posts";
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
  const session = await getServerSession(authOptions);
  const isEditable = session?.user.role === "ADMIN";

  const pageObj = await prisma.pageObject.findMany({
    where: {
      page: "blog",
    },
  });

  // const blogPosts = await prisma.post.findMany({

  // });

  const data = await prisma.post.findMany({
    where: {
      isPublished: true,
    },
    select: {
      id: true,
      isFeatured: true,
      content: true,
      position: true,
      createdAt: true,
    },
    orderBy: {
      position: "asc",
    },
  });

  const curatedPosts = data?.reduce((acc, el, idx) => {
    try {
      const parsedContent = JSON.parse(el.content);
      const heading = parsedContent.find((item) => item.type === "heading");

      acc.push({
        id: el.id,
        isFeatured: el.isFeatured,
        heading: heading?.content[0]?.text || "No heading found",
        description:
          parsedContent.find(
            (el) => el.type === "paragraph" && el.content.length
          )?.content[0]?.text || "No description",
        heroUrl:
          parsedContent?.find((el) => el.type === "image")?.props?.url ||
          "/placeholder.svg",
        position: el.position,
      });
    } catch (error) {
      console.error(
        `Error parsing content for element at index ${idx}: ${error}`
      );
    }
    return acc;
  }, []);

  const featuredPosts = curatedPosts?.filter((el) => el.isFeatured);

  const latestBlogPosts = curatedPosts
    ?.sort((a, b) => a.createdAt - b.createdAt)
    ?.splice(0, 5);

  const heroData = pageObj.filter((el) => el.parentComp === "Hero");

  const blogPageLatest = pageObj.filter(
    (el) => el.parentComp === "BlogPageLatest"
  );
  const blogPageLots = pageObj.filter((el) => el.parentComp === "BlogPageLots");
  const blogPageNews = pageObj.filter((el) => el.parentComp === "BlogPageNews");
  const blogPageFreeRes = pageObj.filter(
    (el) => el.parentComp === "BlogPageFreeResources"
  );

  return (
    <section className="">
      {/* <div className="bg-gradient-to-br from-blue-400  from-[10%] via-blue-600 via-[40%] to-blue-500 to-[95%]  py-32 space-y-10 "> */}
      <div className="bg-blue-600 py-16 space-y-10 ">
        <BlogsPageHero
          data={heroData}
          isEditable={isEditable && searchParams?.editorMode}
        />
        <FeaturedBlogList
          data={featuredPosts}
          isEditable={isEditable && searchParams?.editorMode}
        />
      </div>
      <LatestPostsIn
        data={latestBlogPosts}
        editableData={blogPageLatest}
        isEditable={isEditable && searchParams?.editorMode}
      />
      <AllOfThePosts
        data={data}
        editableContent={blogPageLots}
        isEditable={isEditable && searchParams?.editorMode}
      />
      <SubscribeToNewsletter
        editableComp={blogPageNews}
        isEditable={isEditable && searchParams?.editorMode}
      />
      <FreeResources
        data={blogPageFreeRes}
        isEditable={isEditable && searchParams?.editorMode}
      />
    </section>
  );
};

export default Blog;
