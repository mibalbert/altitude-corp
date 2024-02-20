/**
 * component/blogs-page/categ-blog-list.jsx
 */

import Image from "next/image";
import Link from "next/link";

const LatestPostsIn = ({ data }) => {
  return (
    <section className="container px-4 md:px-6">
      <div className="px-4 py-6 md:px-6 md:py-12 xl:py-16">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {data?.blogPageLatestTitle}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              {data?.blogPageLatestSubtitle}
            </p>
          </div>
          <div className="grid items-start gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            <div className="space-y-2">
              <Link className="font-medium group" href="#">
                <h2 className="text-2xl leading-7 transition-colors duration-2000 group-hover:text-gray-500">
                  The Secret of the Sphinx
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPostsIn;
