/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L9HAq5vTnyJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-gray-100 dark:bg-gray-850">
      <div className="py-6 md:py-12 lg:py-16 xl:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-8 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The Blog
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Musings on technology, design, and the web platform.
              </p>
            </div>
            <div className="grid items-start gap-6 md:gap-8 lg:gap-10">
              <div className="space-y-4 md:space-y-6">
                <Link
                  className="font-semibold tracking-tight not-underline"
                  href="#"
                >
                  <div className="space-y-1.5">
                    <span className="text-xl font-semibold tracking-tight sm:text-2xl">
                      Engineering
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      For those who build the web.
                    </span>
                  </div>
                </Link>
                <Link
                  className="font-semibold tracking-tight not-underline"
                  href="#"
                >
                  <div className="space-y-1.5">
                    <span className="text-xl font-semibold tracking-tight sm:text-2xl">
                      Design
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      Where form meets function.
                    </span>
                  </div>
                </Link>
                <Link
                  className="font-semibold tracking-tight not-underline"
                  href="#"
                >
                  <div className="space-y-1.5">
                    <span className="text-xl font-semibold tracking-tight sm:text-2xl">
                      Product
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      The intersection of tech and user.
                    </span>
                  </div>
                </Link>
                <Link
                  className="font-semibold tracking-tight not-underline"
                  href="#"
                >
                  <div className="space-y-1.5">
                    <span className="text-xl font-semibold tracking-tight sm:text-2xl">
                      News
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      The latest from the web.
                    </span>
                  </div>
                </Link>
              </div>
              <div className="grid gap-6 md:gap-8 lg:gap-10">
                <div className="grid gap-4 sm:gap-6">
                  <Link
                    className="not-underline flex items-start space-x-4"
                    href="#"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img
                        alt="Cover image"
                        className="aspect-cover"
                        height={150}
                        src="/placeholder.svg"
                        width={150}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-medium leading-6 not-italic">
                        The State of Jamstack 2023
                      </h3>
                      <p className="text-sm text-gray-500 not-italic dark:text-gray-400">
                        By Cassidy Williams
                      </p>
                    </div>
                  </Link>
                  <Link
                    className="not-underline flex items-start space-x-4"
                    href="#"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img
                        alt="Cover image"
                        className="aspect-cover"
                        height={150}
                        src="/placeholder.svg"
                        width={150}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-medium leading-6 not-italic">
                        The Future of Web3: Decentralized Everything
                      </h3>
                      <p className="text-sm text-gray-500 not-italic dark:text-gray-400">
                        By Lee Robinson
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="grid gap-4 sm:gap-6">
                  <Link
                    className="not-underline flex items-start space-x-4"
                    href="#"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img
                        alt="Cover image"
                        className="aspect-cover"
                        height={150}
                        src="/placeholder.svg"
                        width={150}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-medium leading-6 not-italic">
                        The Art of CSS: Mastering Style Sheets
                      </h3>
                      <p className="text-sm text-gray-500 not-italic dark:text-gray-400">
                        By Sarah Drasner
                      </p>
                    </div>
                  </Link>
                  <Link
                    className="not-underline flex items-start space-x-4"
                    href="#"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img
                        alt="Cover image"
                        className="aspect-cover"
                        height={150}
                        src="/placeholder.svg"
                        width={150}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-medium leading-6 not-italic">
                        The Rise of Headless Commerce
                      </h3>
                      <p className="text-sm text-gray-500 not-italic dark:text-gray-400">
                        By Kelly Vaughn
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="grid gap-4 sm:gap-6">
                  <Link
                    className="not-underline flex items-start space-x-4"
                    href="#"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img
                        alt="Cover image"
                        className="aspect-cover"
                        height={150}
                        src="/placeholder.svg"
                        width={150}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-medium leading-6 not-italic">
                        The Power of Edge Functions: Serverless at the Edge
                      </h3>
                      <p className="text-sm text-gray-500 not-italic dark:text-gray-400">
                        By Tim Kadlec
                      </p>
                    </div>
                  </Link>
                  <Link
                    className="not-underline flex items-start space-x-4"
                    href="#"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img
                        alt="Cover image"
                        className="aspect-cover"
                        height={150}
                        src="/placeholder.svg"
                        width={150}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-medium leading-6 not-italic">
                        The Evolution of Web Standards: From HTML to Houdini
                      </h3>
                      <p className="text-sm text-gray-500 not-italic dark:text-gray-400">
                        By Una Kravets
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
