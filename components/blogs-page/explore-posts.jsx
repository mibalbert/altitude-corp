/**
 * components/blogs-page/a-lot-of-blog-posts.jsx
 */

import Image from "next/image";
import Link from "next/link";
import EditableComp from "../editableComp";

const ALotOfBlogPosts = ({ data, editableContent, isEditable }) => {
  const lotsOfPostsTitle = editableContent.find(
    (el) => el.compName === "blog-page-lots-title"
  );
  const lotsOfPostsSubtitle = editableContent.find(
    (el) => el.compName === "blog-page-lots-subtitle"
  );

  const curatedPosts = data?.reduce((acc, el, idx) => {
    try {
      const parsedContent = JSON.parse(el.content);
      if (parsedContent && parsedContent.length > 0) {
        const heading = parsedContent.find((item) => item.type === "heading");
        const description = parsedContent.find(
          (item) => item.type === "paragraph"
        );
        if (heading && description) {
          acc.push({
            id: el.id,
            heading: heading.content[0]?.text || "No heading found",
            description: description.content[0]?.text || "No description found",
            // date: el.updatedAt,
          });
        }
      }
    } catch (error) {
      console.error(
        `Error parsing content for element at index ${idx}: ${error}`
      );
    }
    return acc;
  }, []);
  return (
    <section className="max-w-7xl  w-full mx-auto px-6 xl:px-0">
      <div className="px-6 xl:px-0 py-6 md:py-12 lg:py-16 xl:py-20">
        <div className="space-y-16">
          <div className="space-y-2 flex flex-col">
            <EditableComp comp={lotsOfPostsTitle} isEditable={isEditable} />
            <EditableComp comp={lotsOfPostsSubtitle} isEditable={isEditable} />
            {/* <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">
              {data?.blogPageExploreTitle}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              {data?.blogPageExploreSubtitle}
            </p> */}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {curatedPosts?.map((post, idx) => {
              return (
                <div key={idx}>
                  <Link className="group inline-block" href="#">
                    <Image
                      alt="Thumbnail"
                      className="aspect-image object-cover group-hover:opacity-75 transition-all"
                      height={400}
                      src="/placeholder.svg"
                      width={600}
                    />
                    <h2 className="mt-2 text-2xl font-bold leading-7">
                      {post.heading}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {/* Solved by a group of courageous kittens. Posted on
                      September 10, 2023 */}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {post.description}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ALotOfBlogPosts;
