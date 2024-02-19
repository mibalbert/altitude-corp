/**
 * components/featured-blog-list.jsx
 */

import Link from "next/link";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Image from "next/image";

const FeaturedBlogList = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-850">
      <div className="container px-4 md:px-6 pb-32">
        <Carousel className="w-full max-w-[100vw]">
          <CarouselContent>
            <CarouselItem>
              <div className="grid gap-6 md:gap-8 lg:gap-10 items-start md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-sm font-medium tracking-wide uppercase text-blue-500 dark:text-blue-400">
                      Featured
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {`The Art of Baking: A Beginner's Guide to Baking Bread`}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Master the art of baking with our comprehensive guide to
                      making the perfect loaf of bread.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="rounded-full overflow-hidden border-2 border-white">
                      <Image
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
                    </div>
                    <div className="text-sm font-medium leading-none">
                      <span className="block">By Alice Parker</span>
                      <span className="block text-gray-500 dark:text-gray-400">
                        August 24, 2023
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  className="md:col-span-2 flex items-center space-x-4 rounded-lg overflow-hidden"
                  href="#"
                >
                  <Image
                    alt="Cover image"
                    className="aspect-post overflow-hidden object-cover w-full transition-transform scale-105"
                    height={300}
                    src="/placeholder.svg"
                    width={600}
                  />
                  <div className="aspect-[1.5] w-full bg-gray-200 hidden md:block dark:bg-gray-800" />
                  <span className="sr-only">Read more</span>
                </Link>
              </div>
            </CarouselItem>
            <CarouselItem />
            <CarouselItem />
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedBlogList;
