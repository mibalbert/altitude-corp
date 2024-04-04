/**
 * component/blogs-page/categ-blog-list.jsx
 */

import Image from "next/image";
import Link from "next/link";
import EditableComp from "../editableComp";

const LatestPostsIn = ({ data, editableData, isEditable }) => {
  
  const blogPageLatestTitle = editableData?.find(
    (el) => el.compName === "blog-page-latest-title"
  );
  const blogPageLatestSubtitle = editableData?.find(
    (el) => el.compName === "blog-page-latest-subtitle"
  );

  return (
    <section className="max-w-7xl w-full mx-auto px-6 xl:px-0">
      <div className="px-6 xl:px-0 py-6 md:py-12 xl:py-16">
        <div className="space-y-16">
          <div className="space-y-2 flex flex-col">
            <EditableComp comp={blogPageLatestTitle} isEditable={isEditable} />
            <EditableComp
              comp={blogPageLatestSubtitle}
              isEditable={isEditable}
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* <div className="grid items-start gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3"> */}
            {data?.map((post, idx) => {
              return (
                <div key={idx}>
                  <div>
                    <Link
                      className="group inline-block"
                      href={`/blog/${post?.id}`}
                    >
                      <Image
                        alt="Thumbnail"
                        className="aspect-image object-cover group-hover:opacity-75 transition-all"
                        height={400}
                        src="/placeholder.svg"
                        width={600}
                      />
                      <h2 className="mt-2 text-2xl font-bold leading-7 line-clamp-3">
                        {post?.heading}
                      </h2>
                      {/* <p className="mt-1 text-sm text-gray-500 dark:text-gray-400"> */}
                      {/* {} */}
                      {/* </p> */}
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        {post?.description}
                      </p>
                    </Link>
                  </div>
                </div>
              );
            })}
            {/* <div className="space-y-2">
              <Link className="font-medium group" href="#">
                <h2 className="text-2xl leading-7 transition-colors duration-2000 group-hover:text-gray-500">
                  The Lost City of Gold
                </h2>
              </Link>
              <p className="text-gray-500 dark:text-gray-400">
                Posted on August 24, 2023
              </p>
              <p>
                The ancient Egyptians were a mysterious people, known for their
                impressive architecture, complex mythology, and beautiful art.
                But perhaps the most enigmatic...
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <Image
                    alt="Avatar"
                    className="rounded-full"
                    height={40}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div className="text-sm font-medium">Evelyn Wood</div>
                </div>
                <div className="flex-1 justify-self-end">
                  <Link
                    className="inline-block text-sm font-medium underline justify-self-end"
                    href="#"
                  >
                    Read
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Link className="font-medium group" href="#">
                <h2 className="text-2xl leading-7 transition-colors duration-2000 group-hover:text-gray-500">
                  The Enchanted Forest
                </h2>
              </Link>
              <p className="text-gray-500 dark:text-gray-400">
                Posted on August 24, 2023
              </p>
              <p>
                The ancient Egyptians were a mysterious people, known for their
                impressive architecture, complex mythology, and beautiful art.
                But perhaps the most enigmatic...
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <Image
                    alt="Avatar"
                    className="rounded-full"
                    height={40}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div className="text-sm font-medium">Evelyn Wood</div>
                </div>
                <div className="flex-1 justify-self-end">
                  <Link
                    className="inline-block text-sm font-medium underline justify-self-end"
                    href="#"
                  >
                    Read
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPostsIn;
