/**
 * components/admin/admin-blog-post/post-title.jsx
 */

"use client";

import { savePostTitleChange } from "@/app/_actions";
import { useSavingStatus } from "@/hooks/use-admin-saving-status";
import React from "react";

const PostTitle = ({ postId, initialTitle }) => {
  const setIsSaved = useSavingStatus((state) => state.setIsSaved);

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const saveInput = debounce(async (newTitle) => {
    setIsSaved(false);

    const res = await savePostTitleChange(postId, newTitle);
    console.log(res);
    if (res.ok) {
      console.log(res.ok);
    }
    setIsSaved(true); // Move this line here
  });

  const onTitleChange = (e) => {
    saveInput(e.target.value);
  };

  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        type="text"
        defaultValue={initialTitle}
        onChange={onTitleChange}
        placeholder="Enter the title of this post"
        className="border border-dashed rounded-xl transform transition-all duration-100  hover:outline-none  hover:border-solid hover:border-gray-500 hover:ring-gray-500 hover:ring-1 font-bold text-center border-gray-300 text-5xl w-full py-2 px-2 "
        minLength="5"
        maxLength="200"
      />
    </div>
  );
};

export default PostTitle;
