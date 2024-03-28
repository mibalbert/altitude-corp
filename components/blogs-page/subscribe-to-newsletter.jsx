/**
 * components/subscribe-to-newsletter.jsx
 */

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import EditableComp from "../editableComp";

const SubscribeToNewsletter = ({ editableComp, isEditable }) => {
  const subNewsTitle = editableComp?.find(
    (el) => el.compName === "blog-page-news-title"
  );
  const subNewsSubtitle = editableComp?.find(
    (el) => el.compName === "blog-page-news-subtitle"
  );

  // console.log(editableComp);

  return (
    <>
      <section className="w-full py-12 md:py-24  ">
        <div className="w-full max-w-7xl mx-auto grid items-center gap-4 px-4 md:px-6  ">
          <div className="space-y-3 flex flex-col">
            <EditableComp comp={subNewsTitle} isEditable={isEditable} />
            <EditableComp comp={subNewsSubtitle} isEditable={isEditable} />
            {/* <h2 className="text-4xl font-bold tracking-tighter md:text-6xl/relaxed text-blue-500">
              {data?.blogPageSubscribeTitle}
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {data?.blogPageSubscribeSubtitle}{" "}
            </p> */}
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit">
                Subscribe
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {/* {data?.blogPageSubscribeMinSubtitle} */}
              <Link className="underline underline-offset-2" href="#">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default SubscribeToNewsletter;
