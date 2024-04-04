/**
 * components/blogs-page/a-lot-of-blog-posts.jsx
 */

import Image from "next/image";
import Link from "next/link";
import EditableComp from "../editableComp";

const AllOfThePosts = ({ data, editableContent, isEditable }) => {
  const lotsOfPostsTitle = editableContent.find(
    (el) => el.compName === "blog-page-lots-title"
  );
  const lotsOfPostsSubtitle = editableContent.find(
    (el) => el.compName === "blog-page-lots-subtitle"
  );

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

  return (
    <section className="max-w-7xl  w-full mx-auto px-6 xl:px-0">
      <div className="px-6 xl:px-0 py-6 md:py-12 lg:py-16 xl:py-20">
        <div className="space-y-16">
          <div className="space-y-2 flex flex-col">
            <EditableComp comp={lotsOfPostsTitle} isEditable={isEditable} />
            <EditableComp comp={lotsOfPostsSubtitle} isEditable={isEditable} />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {curatedPosts?.map((post, idx) => {
              return (
                <div key={idx}>
                  <Link
                    className="group inline-block"
                    href={`/blog/${post.id}`}
                  >
                    <Image
                      alt="Thumbnail"
                      className="aspect-image object-cover group-hover:opacity-75 transition-all"
                      height={400}
                      src="/placeholder.svg"
                      width={600}
                    />
                    <h2 className="mt-2 text-2xl font-bold leading-7">
                      {post?.heading}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {post?.description}
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

export default AllOfThePosts;
