"use client";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { SortableItem } from "./sortable-item";

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

import { toast } from "sonner";
import { setNewPositions } from "@/app/_actions";
import { cn } from "@/lib/utils";
const svgs = [
  {
    type: "first",
    svg: "/svgs/first.svg",
  },
];

const FeaturedBlogList = ({ data, isEditable }) => {
  const [postsArr, setPostsArr] = useState(data);

  async function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const activeIndex = postsArr.findIndex((el) => el.id === active.id);
      const overIndex = postsArr.findIndex((el) => el.id === over.id);
      const updatedPostsArr = arrayMove(postsArr, activeIndex, overIndex);
      const newArr = updatedPostsArr.map((post, index) => ({
        ...post,
        position: index,
      }));
      setPostsArr(newArr);
      try {
        const proceed = async () => {
          const res = await setNewPositions(newArr);
          if (res.ok) {
            toast("Success");
          } else {
            toast("Failed");
          }
        };
        proceed();
      } catch (error) {
        toast("Error");
      }
    }
  }
  return (
    <section className="pb-5">
      <Carousel
        className={cn("relative w-full max-w-6xl mx-auto  ", {
          "border border-dashed p-4 rounded-lg": isEditable,
        })}
      >
        {isEditable && (
          <Dialog>
            <DialogTrigger className="absolute -top-10 right-0 rounded-full border text-white px-3 py-1">
              Edit Blog List
            </DialogTrigger>
            <DialogContent className="w-[90%] max-w-xl min-h-min p-10">
              <div>Arange how the featured Post should appear</div>
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <div>
                  <SortableContext
                    items={postsArr.map((post) => post.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    {postsArr.map((post) => (
                      <SortableItem
                        key={post.id}
                        id={post.id}
                        title={post.heading}
                        className="border my-2 p-3 truncate"
                      />
                    ))}
                  </SortableContext>
                </div>
              </DndContext>
            </DialogContent>
          </Dialog>
        )}
        <CarouselContent className="">
          {data?.map((post, idx) => {
            return (
              <CarouselItem key={idx} className="w-full  p-5">
                <div className=" p-10 border border-blue-400 shadow-md   grid items-start md:grid-cols-2 gap-12">
                  <div className="space-y-4 col-span-2 md:col-span-1 pt-[10%] pr-10 w-full h-full">
                    <div className="space-y-5">
                      <div className="text-sm font-medium tracking-wide uppercase text-blue-200 dark:text-blue-400">
                        Featured
                      </div>
                      <Link
                        href={"#"}
                        className="text-2xl font-bold tracking-tight sm:text-3xl text-white"
                      >
                        {post?.heading}
                      </Link>
                      <p className="text-gray-50 ">{post?.description}</p>
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
                    className="col-span-2 md:col-span-1  w-full h-full min-h-[400px] bg-gray-700 relative" // Adjusting col-start
                    href="#"
                  >
                    <Image
                      alt="Cover image"
                      className="object-contain bg-white p-5 obeject-center w-full transition-transform z-10"
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
                            svgs.find((el) => el.type === post?.animatedIcon)
                              .svg
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
        <div className="absolute -bottom-8  transform translate-x-1/2 left-1/2 flex items-center gap-10">
          <CarouselPrevious
            className="bg-blue-600 hover:bg-blue-700"
            arrowColor="white"
          />
          <CarouselNext
            className="bg-blue-600 hover:bg-blue-700"
            arrowColor="white"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default FeaturedBlogList;

// const op = async () => {
// const newOrder = arrayMove(items, activeIndex, overIndex)
//   .map((el) => el.id)
//   .toString();

// console.log(arrayMove(items, activeIndex, overIndex))
// const res = await changeFeatListOrder(featListId, newOrder);
// if (res.ok) {
//   toast("Yeyyy");
// }
// };
// op();

// /**
//  * components/featured-blog-list.jsx
//  */

// "use client";

// import Link from "next/link";
// import {
//   CarouselItem,
//   CarouselContent,
//   CarouselPrevious,
//   CarouselNext,
//   Carousel,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
// } from "@/components/ui/command";

// const svgs = [
//   {
//     type: "first",
//     svg: "/svgs/first.svg",
//   },
// ];

// const FeaturedBlogList = ({ data, isEditable }) => {
//   // const editFeaturedBlogs = await prisma.
//   const curatedPosts = data.reduce((acc, el, idx) => {
//     try {
//       const parsedContent = JSON.parse(el.content);
//       if (parsedContent && parsedContent.length > 0) {
//         const heading = parsedContent.find((item) => item.type === "heading");
//         const description = parsedContent.find(
//           (item) => item.type === "paragraph"
//         );
//         if (heading && description) {
//           acc.push({
//             id: el.id,
//             heading: heading.content[0]?.text || "No heading found",
//             description: description.content[0]?.text || "No description found",
//           });
//         }
//       }
//     } catch (error) {
//       console.error(
//         `Error parsing content for element at index ${idx}: ${error}`
//       );
//     }
//     return acc;
//   }, []);

//   console.log(curatedPosts);
//   return (
//     <Carousel className="relative  w-[90%] xl:w-full max-w-6xl mx-auto px-12 ">
//       {isEditable && (
//         <Dialog>
//           <DialogTrigger className="absolute -top-10 right-0 rounded-full border bg-gray-900 px-3 py-1">
//             Edit Blog List
//           </DialogTrigger>
//           <DialogContent>
//             <Command>
//               <CommandInput placeholder="Type a command or search..." />
//               <div className="my-4 px-2">Select max 3 blog posts</div>
//               <CommandList>
//                 {!data.length && (
//                   <div className="p-5 text-center">
//                     No featured Blog posts found!
//                   </div>
//                 )}
//                 {data?.map((el, idx) => {
//                   return <CommandItem key={idx}>{el.title}</CommandItem>;
//                 })}
//               </CommandList>
//             </Command>
//           </DialogContent>
//         </Dialog>
//       )}
//       <CarouselContent>
//         {curatedPosts?.map((post, idx) => {
//           return (
//             <CarouselItem key={idx}>
//               <div className="grid items-start md:grid-cols-2 gap-12">
//                 <div className="space-y-4 col-span-2 md:col-span-1 pt-[10%] pr-10 w-full h-full">
//                   <div className="space-y-5">
//                     <div className="text-sm font-medium tracking-wide uppercase text-blue-200 dark:text-blue-400">
//                       Featured
//                     </div>
//                     <Link
//                       href={"#"}
//                       className="text-2xl font-bold tracking-tight sm:text-3xl text-white"
//                     >
//                       {post?.heading}
//                     </Link>
//                     <p className="text-gray-200 ">{post?.description}</p>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <div className="text-sm font-medium leading-none">
//                       {/* <span className="block">{post?.writtenBy}</span> */}
//                       <span className="block text-gray-300">
//                         {/* {post?.datePosted} */}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <Link
//                   className="col-span-2 md:col-span-1  w-[85%] h-full min-h-[400px] bg-gray-700 relative" // Adjusting col-start
//                   href="#"
//                 >
//                   <Image
//                     alt="Cover image"
//                     className="object-cover obeject-center w-full transition-transform z-10"
//                     src={post?.heroUrl || "/placeholder.svg"}
//                     fill
//                   />
//                   <motion.div
//                     className="w-32 h-32 absolute top-5 -right-12 z-50 rotate-12  "
//                     animate={["initial"]}
//                     whileHover={["grow"]}
//                     variants={{
//                       grow: {
//                         scale: 1.1,
//                       },
//                       initial: {
//                         y: [-20, 20],
//                         rotate: 25,
//                         transition: {
//                           duration: 2,
//                           repeat: Infinity,
//                           repeatType: "reverse",
//                         },
//                       },
//                     }}
//                   >
//                     {post?.animatedIcon && (
//                       <Image
//                         alt="Cover image 2"
//                         className="aspect-post object-cover object-center  transition-transform "
//                         src={
//                           svgs.find((el) => el.type === post?.animatedIcon).svg
//                         }
//                         fill
//                       />
//                     )}
//                   </motion.div>
//                 </Link>
//               </div>
//             </CarouselItem>
//           );
//         })}
//       </CarouselContent>
//       <CarouselPrevious
//         className="bg-blue-600 hover:bg-blue-700"
//         arrowColor="white"
//       />
//       <CarouselNext
//         className="bg-blue-600 hover:bg-blue-700"
//         arrowColor="white"
//       />
//     </Carousel>
//   );
// };

// export default FeaturedBlogList;
