/**
 * components/featured-blog-list.jsx
 */

"use client";

import Link from "next/link";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const svgs = [
  {
    type: "first",
    svg: "/svgs/first.svg",
  },
];

const FeaturedBlogList = ({ data, isEditable }) => {
  // const editFeaturedBlogs = await prisma.

  return (
    <Carousel className="relative  w-full max-w-6xl mx-auto px-12 border border-dashed">
      {isEditable && (
        <Dialog>
          <DialogTrigger className="absolute -top-10 right-0 rounded-full border bg-gray-900 px-3 py-1">
            Edit Blog List
          </DialogTrigger>
          <DialogContent>
            <Command>
              <CommandInput placeholder="Type a command or search..." />
              <div className="my-4 px-2">Select max 3 blog posts</div>
              <CommandList>
                {!data.length && (
                  <div className="p-5 text-center">
                    No featured Blog posts found!
                  </div>
                )}
                {data?.map((el, idx) => {
                  return <CommandItem key={idx}>{el.title}</CommandItem>;
                })}
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
      )}
      <CarouselContent>
        {data?.map((post, idx) => {
          return (
            <CarouselItem key={idx}>
              <div className="grid items-start md:grid-cols-2 gap-12">
                <div className="space-y-4 col-span-2 md:col-span-1 pt-[10%] pr-10 w-full h-full">
                  <div className="space-y-5">
                    <div className="text-sm font-medium tracking-wide uppercase text-blue-200 dark:text-blue-400">
                      Featured
                    </div>
                    <Link
                      href={"#"}
                      className="text-2xl font-bold tracking-tight sm:text-3xl"
                    >
                      {post?.title}
                    </Link>
                    <p className="text-gray-200 ">{post?.subtitle}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-medium leading-none">
                      <span className="block">{post?.writtenBy}</span>
                      <span className="block text-gray-300">
                        {post?.datePosted}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  className="col-span-2 md:col-span-1  w-[85%] h-full min-h-[400px] bg-gray-700 relative" // Adjusting col-start
                  href="#"
                >
                  <Image
                    alt="Cover image"
                    className="object-cover obeject-center w-full transition-transform z-10"
                    src={post?.heroUrl || "/placeholder.svg"}
                    fill
                  />
                  <motion.div
                    className="w-32 h-32 absolute top-5 -right-12 z-50 rotate-12  "
                    animate={["initial"]}
                    whileHover={["grow"]}
                    variants={{
                      grow: {
                        scale: 1.1,
                      },
                      initial: {
                        y: [-20, 20],
                        rotate: 25,
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        },
                      },
                    }}
                  >
                    {post?.animatedIcon && (
                      <Image
                        alt="Cover image 2"
                        className="aspect-post object-cover object-center  transition-transform "
                        src={
                          svgs.find((el) => el.type === post?.animatedIcon).svg
                        }
                        fill
                      />
                    )}
                  </motion.div>
                </Link>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious
        className="bg-blue-600 hover:bg-blue-700"
        arrowColor="white"
      />
      <CarouselNext
        className="bg-blue-600 hover:bg-blue-700"
        arrowColor="white"
      />
    </Carousel>
  );
};

export default FeaturedBlogList;
