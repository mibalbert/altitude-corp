/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZXZV2uV8hS2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16 xl:py-20">
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-10">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-500 px-3 py-px text-sm font-semibold">
              Category
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              The Secret Lives of Gnomes: An Insider's Perspective
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Posted on August 24, 2023
            </p>
          </div>
          <p>
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
          <Link
            className="inline-block font-semibold underline underline-offset-2"
            href="#"
          >
            Read the full story
          </Link>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-500 px-3 py-px text-sm font-semibold">
              Category
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              The Mystery of the Missing Socks: A Detective's Tale
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Posted on August 24, 2023
            </p>
          </div>
          <p>
            It was a dark and stormy night when the call came in. Someone had
            broken into Mrs. Jenkins' house and stolen all of her socks. The old
            lady was in tears, and the local police were baffled. They needed
            someone to crack the case, and they knew just the person for the
            job: Detective Johnson.
          </p>
          <Link
            className="inline-block font-semibold underline underline-offset-2"
            href="#"
          >
            Read the full story
          </Link>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-500 px-3 py-px text-sm font-semibold">
              Category
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              The Great Cheese Caper: A Mouse's Memoirs
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Posted on August 24, 2023
            </p>
          </div>
          <p>
            It was the cheesiest crime of the century. Someone had broken into
            the cheese factory and made off with the entire supply of cheddar,
            leaving nothing but a few crumbs behind. The police were stumped.
            Who would dare to pull off such a daring heist? There was only one
            way to find out: follow the trail of crumbs and ask the mice.
          </p>
          <Link
            className="inline-block font-semibold underline underline-offset-2"
            href="#"
          >
            Read the full story
          </Link>
        </div>
      </div>
    </div>
  );
}
