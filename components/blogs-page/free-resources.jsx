/**
 *
 */

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ExternalLinkIcon } from "lucide-react";

export default function FreeResources() {
  return (
    <section className="w-full py-6 md:py-12 xl:py-32 mb-32 bg-blue-600 text-white">
      <div className="container grid items-center gap-4 px-4 text-left md:gap-10 md:px-6">
        <div className="grid gap-20 md:grid-cols-2 ">
          <div className="space-y-5">
            <h2 className="text-3xl  font-bold tracking-tighter sm:text-5xl text-left">
              Check Out the Free Resources
            </h2>
            <p className="max-w-xl w-full text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-200">
              Access free books, articles, and more. Expand your knowledge with
              our curated collection of resources.
            </p>
            <p className="text-md max-w-xl w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              magnam tenetur natus iusto similique, numquam ipsum autem odit
              iste recusandae?
            </p>
            <Link
              href="/resources"
              className="flex items-center gap-1 underline underline-offset-2"
            >
              Check out Resources <ExternalLinkIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="col-span-1">
            <div className="flex flex-row items-center gap-5">
              <Image
                alt="Resource Image"
                className="object-cover w-1/2"
                height={50}
                src={"/placeholder.svg"}
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width={50}
              />
              <div className="flex flex-col justify-start items-start space-y-3">
                <h3 className="text-lg font-semibold mt-2">
                  Best book about...
                </h3>
                <p className="text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, tenetur?
                </p>
                {/* <p className="text-xs text-gray-200">{date}</p> */}
                <p className="text-xs text-gray-200">20.01.2024</p>
                <Button
                  // className={`px-2 py-1 rounded-md ${buttonColor} ${buttonTextColor}`}
                  className={`px-2 py-1 rounded-md `}
                  size="sm"
                >
                  Download
                  {/* {buttonText} */}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
