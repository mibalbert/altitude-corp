/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pNIS5BC69L3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16 xl:py-20">
      <div className="space-y-2">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl">The Shadcn Blog</h1>
          <p className="text-gray-500 dark:text-gray-400">Exploring the intersection of design and technology.</p>
        </div>
        <p className="max-w-[900px] text-gray-500 dark:text-gray-400">
          Welcome to the Shadcn blog, your source for all things design and technology. Our team of experts is here to
          provide you with in-depth analysis, behind-the-scenes looks, and practical tips to help you take your projects
          to the next level. Whether you're a seasoned developer or just getting started, we've got something for you.
        </p>
      </div>
      <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <Link className="font-medium group" href="#">
            <h2 className="text-2xl leading-7 transition-colors duration-200 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 group-hover:underline">
              The Art of Dynamic Color
            </h2>
            <p className="text-gray-500 dark:text-gray-400">Creating stunning UIs with color shifting</p>
          </Link>
          <Link className="inline-block w-10 h-10 overflow-hidden rounded-full" href="#">
            <img
              alt="Avatar"
              className="rounded-full object-cover"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
          </Link>
        </div>
        <div className="space-y-2">
          <Link className="font-medium group" href="#">
            <h2 className="text-2xl leading-7 transition-colors duration-200 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 group-hover:underline">
              The Science of Motion
            </h2>
            <p className="text-gray-500 dark:text-gray-400">Bringing your app to life with animation</p>
          </Link>
          <Link className="inline-block w-10 h-10 overflow-hidden rounded-full" href="#">
            <img
              alt="Avatar"
              className="rounded-full object-cover"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
          </Link>
        </div>
        <div className="space-y-2">
          <Link className="font-medium group" href="#">
            <h2 className="text-2xl leading-7 transition-colors duration-200 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 group-hover:underline">
              The Art of Dynamic Color
            </h2>
            <p className="text-gray-500 dark:text-gray-400">Creating stunning UIs with color shifting</p>
          </Link>
          <Link className="inline-block w-10 h-10 overflow-hidden rounded-full" href="#">
            <img
              alt="Avatar"
              className="rounded-full object-cover"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

