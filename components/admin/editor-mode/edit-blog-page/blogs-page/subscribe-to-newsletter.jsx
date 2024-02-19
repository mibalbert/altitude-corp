/**
 * components/subscribe-to-newsletter.jsx
 */
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import Contenteditable from "../../edit-landing-page/content-editable-component";
import {
  changeBlogPageSubscribeMinSubtitle,
  changeBlogPageSubscribeSubtitle,
  changeBlogPageSubscribeTitle,
} from "@/app/actions/edit-web-pages/edit-blogs-page/_blogs-actions";
import { debounce } from "lodash";

const SubscribeToNewsletter = ({ data }) => {
  const [blogPageSubscribeTitle, setBlogPageSubscribeTitle] = useState(
    data?.blogPageSubscribeTitle || ""
  );
  const [blogPageSubscribeSubtitle, setBlogPageSubscribeSubtitle] = useState(
    data?.blogPageSubscribeSubtitle || ""
  );
  const [blogPageSubscribeMinSubtitle, setBlogPageSubscribeMinSubtitle] =
    useState(data?.blogPageSubscribeMinSubtitle || "");

  const debounceChangeBlogPageSubscribeTitle = debounce(async (e) => {
    const res = await changeBlogPageSubscribeTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeBlogPageSubscribeSubtitle = debounce(async (e) => {
    const res = await changeBlogPageSubscribeSubtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeBlogPageSubscribeMinSubtitle = debounce(async (e) => {
    const res = await changeBlogPageSubscribeMinSubtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);

  const handleBlogPageSubscribeTitleChange = (e) => {
    setBlogPageSubscribeTitle(e);
    debounceChangeBlogPageSubscribeTitle(e);
  };
  const handleBlogPageSubscribeSubtitleChange = (e) => {
    setBlogPageSubscribeSubtitle(e);
    debounceChangeBlogPageSubscribeSubtitle(e);
  };
  const handleBlogPageSubscribeMinSubtitleChange = (e) => {
    setBlogPageSubscribeMinSubtitle(e);
    debounceChangeBlogPageSubscribeMinSubtitle(e);
  };

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 md:px-6 pb-32">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl/relaxed text-blue-500">
              <Contenteditable
                value={blogPageSubscribeTitle}
                onChange={handleBlogPageSubscribeTitleChange}
              />
            </h2>
            <div className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              <Contenteditable
                value={blogPageSubscribeSubtitle}
                onChange={handleBlogPageSubscribeSubtitleChange}
              />{" "}
            </div>
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
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <Contenteditable
                value={blogPageSubscribeMinSubtitle}
                onChange={handleBlogPageSubscribeMinSubtitleChange}
              />
              <Link className="underline underline-offset-2" href="#">
                Privacy Policy
              </Link>
            </div>
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
