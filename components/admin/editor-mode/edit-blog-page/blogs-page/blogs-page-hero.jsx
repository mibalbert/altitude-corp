/**
 * blogs-page-hero.jsx
 */

"use client";

import { debounce } from "lodash";
import React, { useState } from "react";
import Contenteditable from "../../../../editor/content-editable";
import {
  changeBlogPageSubtitle,
  changeBlogPageTitle,
} from "@/app/actions/edit-web-pages/edit-blogs-page/_blogs-actions";
import { useIsSavingPagesEdit } from "@/hooks/use-is-saving-pages-edit";
import { Input } from "@/components/ui/input";

const BlogsPageHero = ({ data }) => {
  const [blogPageTitle, setBlogPageTitle] = useState(data?.blogPageTitle || "");
  const [blogPageSubtitle, setBlogPageSubtitle] = useState(
    data?.blogPageSubtitle || ""
  );

  const debounceChangeBlogPageTitle = debounce(async (e) => {
    const res = await changeBlogPageTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeBlogPageSubtitle = debounce(async (e) => {
    const res = await changeBlogPageSubtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);

  const handleBlogPageTitleChange = (e) => {
    setBlogPageTitle(e.target.value);
    debounceChangeBlogPageTitle(e.target.value);
    console.log(e.target.value);
  };
  const handleBlogPageSubtitleChange = (e) => {
    setBlogPageSubtitle(e);
    debounceChangeBlogPageSubtitle(e);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-850">
      <div className="py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            {/* <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl/none"> */}
            {/* <Contenteditable
                value={blogPageTitle}
                onChange={handleBlogPageTitleChange}
              /> */}
            <textarea
              defaultValue={blogPageTitle}
              onChange={handleBlogPageTitleChange}
              className="text-4xl font-bold tracking-tighter text-center sm:text-5xl md:text-5xl lg:text-6xl/none"
            />
            {/* </h1> */}
            <div className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              <Contenteditable
                value={blogPageSubtitle}
                onChange={handleBlogPageSubtitleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsPageHero;
